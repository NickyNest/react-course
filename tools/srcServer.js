/* eslint-disable no-undef, no-console , import/no-extraneous-dependencies, global-require */

import colors from 'colors'; // eslint-disable-line no-unused-vars
// import express from 'express';
import fs from 'fs';
import util from 'util';
import open from 'open';
import path from 'path';
import jsonServer from 'json-server';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';


const port = 60253;
const host = 'localhost';
const app = jsonServer.create();
const compiler = webpack(webpackConfig);
const instance = webpackDevMiddleware(compiler, {
    contentBase: `http://${host}:${port}`,
    quiet: false,
    noInfo: false,
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    stats: {
        assets: true,
        colors: true,
        version: false,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false
    }
});

app.use(instance);

instance.waitUntilValid(() => { //eslint-disable-line
    app.use(webpackHotMiddleware(compiler));
    app.use(jsonServer.bodyParser);

    const router = jsonServer.router('db.json');

    // Without the included parameter, we work off nested resources.
    const embedUserGroup = (resource, e) => {
        e && [].concat(e) //eslint-disable-line
            .forEach(relationship => {
                if (router.db.get(relationship).value) {
                    // If you want to embed tasks, you're passing a tag so we query by its tagId.
                    const relationshipKey = relationship === 'tasks' ? 'tagId' : 'taskId';
                    const query = {};
                    query[relationshipKey] = resource.id;
                    const items = router.db.get('tasks_tags').filter(query).value();
                    const otherResourceKey = relationshipKey === 'tagId' ? 'taskId' : 'tagId';
                    const ids = items.map(item => item[otherResourceKey]);
                    resource[relationship] = router.db.get(relationship).filter(elem => ids.includes(elem.id)).value(); //eslint-disable-line
                }
            });
    };

    app.use('/api/tasks/:id/tags', (req, res, next) => {
        const task = router.db.get('tasks')
            .getById(req.params.id)
            .cloneDeep()
            .value();

        if (util.isUndefined(task)) {
            return res.status(400).json({message: 'invalid task id'});
        }

        embedUserGroup(task, 'tags');
        return res.status(200).json(task);
    });

    app.use('/api/tags/:id/tasks', (req, res, next) => {
        const tag = router.db.get('tags')
            .getById(req.params.id)
            .cloneDeep()
            .value();

        if (util.isUndefined(tag)) {
            return res.status(400).json({message: 'invalid tag id'});
        }

        embedUserGroup(tag, 'tasks');
        return res.status(200).json(tag);
    });

    // api mock. Example: http://localhost:60253/api/tasks
    // all mocks defined in db.json file
    app.use('/api', router);

    const content = fs.readFileSync(path.join(__dirname, '../src/index.html'), 'utf-8');
    const newValue = content.replace(/-->/g, '').replace(/<!--/g, '');

    app.get('/', (req, res) => {
        res.send(newValue);
    });

    app.listen(port, error => {
        if (error) {
            console.log(error.red);
        } else {
            open(`http://${host}:${port}`);
        }
    });
});