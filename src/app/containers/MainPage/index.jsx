import React, {Component} from 'react';
import Logo from 'components/Logo';
import ToDoContainer from 'containers/ToDoContainer';
import TagContainer from 'containers/TagContainer';
import * as api from 'utils/tagStore';
import {Grid} from 'semantic-ui-react';
import './index.css';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pathToFile: 'src/containers/MainPage/index.jsx',
            tags: []
        };
    }

    componentWillMount = () => {
        this.getTags();
    }

    getTags = () => {
        api.get()
            .then(response => response.json())
            .then(response => {
                this.setState({tags: response});
            });
    };

    render() {
        const {pathToFile} = this.state;
        const {tags} = this.state;
        const title = 'Welcome to React';

        return (
            <div>
                <div className='App'>
                    <div className='App-header'>
                        <Logo className='App-logo' alt='logo' />
                        <h2>
                            {title}
                        </h2>
                    </div>
                    <p className='App-intro'>
                        {'To get started, edit '}
                        <code>{pathToFile}</code>
                        {' and save to reload.'}
                    </p>
                </div>
                <Grid divided>
                    <Grid.Column width={10}>
                        <ToDoContainer />
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <TagContainer tags={tags} />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default MainPage;
