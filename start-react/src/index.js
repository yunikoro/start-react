import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class EnvTest extends React.Component {
    render() {
        return (
            <div>
                <h1>env args here</h1>
                <h4>{process.env.REACT_APP_SECRET_CODE}</h4>
            </div>
        )
    }
}

ReactDOM.render(
    <EnvTest />,
    document.getElementById('root')
);