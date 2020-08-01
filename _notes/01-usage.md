
1. Create a Context object
```
  const XXXContext = Rect.createContext(defaultValue);
```

2. Warp the Context object to React Component, pass value to the Component
```
  <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
  </MovieContext.Provider>
```

3. In Component, use the data from Context
```
const VALUE = useContext(MovieContext);
  
```