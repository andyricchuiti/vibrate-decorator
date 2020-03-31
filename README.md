# vibrate-decorator
A class method decorator that give a function an haptic side effect

## Usage
- Use in typescript with decorators enabled (https://www.typescriptlang.org/docs/handbook/decorators.html)
- Use in javascript with babel (https://babeljs.io/docs/en/babel-plugin-proposal-decorators)
```$xslt
class Sample {
    
    @vibrate(50) // causes eligible devices to vibrate for 50 ms
    classMethod() {
        // stuff
    }
}
```

## Features
- checks for browser support of navigator.vibrate
- accepts number value or array for patterns
- fails silently
