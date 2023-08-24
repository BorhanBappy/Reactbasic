- [Ternary Operator](#ternary-operator)
- [Immediately-Invoked](#immediately-invoked)
- [Loop Using Map](#loop-using-map)
- [Conditional Rendering](#conditional-rendering)
  - [Using If - Else](#using-if---else)
    - [Here is problem code repeat for Fixed used Function.](#here-is-problem-code-repeat-for-fixed-used-function)
  - [Switch Case](#switch-case)
  - [Using Ternary Operator](#using-ternary-operator)
  - [Conditional Rendering](#conditional-rendering-1)
  - [Conditional Rendering using IIF](#conditional-rendering-using-iif)

# Ternary Operator

```javascript
function App() {
  let marks = 70;
  return (
    <div>
      {marks > 80 ? <h1>Brilliant Result</h1> : <h1>Average Result</h1>}
    </div>
  );
}

export default App;
```
# Immediately-Invoked

```javascript
function App() {
  let marks = 20;
  return (
    <div>
      {(() => {
        if (marks >= 80 && marks < 100) {
          return <h1>A+</h1>;
        } else if (marks >= 70 && marks < 80) {
          return <h1>A</h1>;
        } else if (marks >= 60 && marks < 70) {
          return <h1>A-</h1>;
        } else if (marks >= 50 && marks < 40) {
          return <h1>B</h1>;
        } else if (marks >= 40 && marks < 50) {
          return <h1>C</h1>;
        } else if (marks >= 30 && marks < 40) {
          return <h1>D</h1>;
        } else {
          return <h1>Fail</h1>;
        }
      })()}
    </div>
  );
}

export default App;
```

# Loop Using Map

```javascript
function App() {
  let city = ["Dhaka", "London", "Delhi", "Kolkata"];
  return (
    <div>
      {
        <ol>
          {city.map((item, i) => {
            return <li key={i}>{item}</li>;
            return <li key={i.toString()}>{item}</li>;

          })}
        </ol>
      }
    </div>
  );
}

export default App;
```
# Conditional Rendering 
## Using If - Else


```javascript
function App() {
  const Status = true;
  if (Status == true) {
    return (
      <div>
        <h1>Login Status</h1>
        <button>Logout</button>
      </div>
    );
  } else {
    return (
      <dib>
        <h1>Login Status</h1>
        <button>Login</button>
      </dib>
    );
  }
}

export default App;
```
### Here is problem code repeat for Fixed used Function.


```javascript
function App() {
  const LoginStatus = (status) => {
    if (status) {
      return <button>LogOut</button>;
    } else {
      return <button>LogIn</button>;
    }
  };
  return (
    <div>
      <h1>Login Status</h1>
      {LoginStatus(false)}
    </div>
  );
}

export default App;
```
## Switch Case

```javascript
function App() {
  const status = false;
  switch (status) {
    case true:
      return <button>Logout Btn</button>;
    case false:
      return <button>Login Btn</button>;
    default:
      return null;
  }
}
export default App;
```
## Using Ternary Operator

```javascript
function App() {
  let status = true;
  return (
    <div>
      {status ? <button>Logout Btn</button> : <button>Login Btn</button>}
    </div>
  );
}
export default App;
```
## Conditional Rendering
```javascript
function App() {
  let status = true;
  return (
    <div>
      <h1>Login Status</h1>
      {
        // When we need check only one condition otherwise ignore it that times we used Conditional rendering.
        status && <button>Logout Btn</button>
      }
    </div>
  );
}
export default App;

```

## Conditional Rendering using IIF


```javascript
function App() {
  let status = true;
  return (
    <div>
      <h1>Login Status</h1>
      {(() => {
        return status ? (
          <button>Logout Btn</button>
        ) : (
          <button>Login Btn</button>
        );
      })()}
    </div>
  );
}
export default App;
```

