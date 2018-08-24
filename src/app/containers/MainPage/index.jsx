import React, {Component} from 'react';
import Logo from 'components/Logo';
import ToDoContainer from 'containers/ToDoContainer';
import TaskList from 'containers/TaskList';
import {Grid} from 'semantic-ui-react';
import './index.css';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pathToFile: 'src/containers/MainPage/index.jsx'
        };
    }

    render() {
        const {pathToFile} = this.state;
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
                <ToDoContainer />
                <h2>With redux</h2>
                <Grid divided>
                    <Grid.Column width={10}>
                        <TaskList />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <span>In progress...</span>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default MainPage;
