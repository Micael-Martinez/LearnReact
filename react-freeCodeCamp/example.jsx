import React from 'react';
import ReactDOM from 'react-dom';

const ChildComponent = () => {
    return (
        <div>
            <p>I am the child</p>
        </div>
    );
};

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>I am the parent</h1>
                { /* Cambia el código debajo de esta línea */}
                <ChildComponent />

                { /* Cambia el código encima de esta línea */}
            </div>
        );
    }
};

ReactDOM.render(ParentComponent, document.getElementById('root'))