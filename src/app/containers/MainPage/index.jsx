import React, {Component} from 'react';
import Logo from 'components/Logo';
import ToDoContainer from 'containers/ToDoContainer';
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
                <div>
                    <ToDoContainer />
                </div>
            </div>
        );
    }
}

export default MainPage;
