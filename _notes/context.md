
There are two main steps to setup the React context into your application 
1. setup a context provider & define the data you want to store
2. use a context consumer where ever you need the data from the store

 ```
    import React, { createContext } from 'react'

    // Initialize a context
    const Context = createContext()

    // This context contains two interesting components
    const { Provider, Consumer } = Context

    // Render Provider with some value
    <Provider value={{ firstName: 'Didier', lastName: 'Franc' }}>
    <App />
    </Provider>
        
    // Now anywhere inside <App /> you can consume this data
    <Consumer>
    {({ firstName, lastName }) => <span>{`${firstName} ${lastName}`</span>}
</Consumer>

```