import React, { Component } from 'react';

const AppContext = React.createContext()

/* AppContext will be used to build a context provider component. 
This provider will store, in its state, the data we need and it will wrap all of the 
content of the Red component
*/

class AppProvider extends Component {
    state = {
        number: 10
    }
    render() {
        return <AppContext.Provider value={this.state}>
            {this.props.children}
        </AppContext.Provider>
    }
}


const Green = () => (
    <div className="green">
        <AppContext.Consumer>
            {(context) => context.number}
        </AppContext.Consumer>
    </div>
)
const Blue = () => (
    <div className="blue">
        <Green />
    </div>
)

class Red2 extends Component {
    render() {
        return <AppProvider>
            <div className="red">
                <AppContext.Consumer>
                    {(context) => context.number}
                </AppContext.Consumer>
                <Blue />
            </div>
        </AppProvider>
    }
}

export default Red2;

