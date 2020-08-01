# Use multiple contexts

- https://www.youtube.com/watch?v=hLFl4Io0mww



```
  import {ThemeContext} form '../contexts/ThemeContext';
  import {AuthContext} form '../contexts/AuthContext';


  function Navbar() {
    return (
      <AuthContext.Consumer> {(authContext) =>(
        <ThemeContext.Consumer> {(themeContext) =>(
          const {...}  = authContext;
          const {...}  = themeContext;
          return (
            <nav>
            </nav>
          )
        )}
        <ThemeContext.Consumer>
      )}
      <AuthContext.Consumer>
    )

  }

```