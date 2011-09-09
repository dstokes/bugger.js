# bugger.js

bugger.js is a small console.log wrapper for debugging.

Message format:  
Debugger - in funcName() [at file.js:line:char]  
  Args : [calling function arguments]  
  Debug: Debugger arguments  

## Usage
```javascript
function addOne(num) {
  bugger('Tracing a func!');
  return num++;
}

bugger('Basically console.log + line number + fancy');
```