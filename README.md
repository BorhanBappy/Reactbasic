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
- [Child Component](#child-component)
  - [Child Component string Pass](#child-component-string-pass)
  - [Child component Object pass](#child-component-object-pass)
  - [Child Component Function Pass](#child-component-function-pass)
  - [Click Event Manage](#click-event-manage)
    - [Button Using Arrow function Inline](#button-using-arrow-function-inline)
    - [Function using out of render file](#function-using-out-of-render-file)
  - [Managing Form submit](#managing-form-submit)
- [HooK](#hook)
  - [useRef](#useref)
  - [Use Ref using for DOM Manipulate.](#use-ref-using-for-dom-manipulate)
    - [Using Reference Hook for DOM Manipulate](#using-reference-hook-for-dom-manipulate)
    - [Using useRef Image Attribute Manipulate](#using-useref-image-attribute-manipulate)
    - [UseRef input Value](#useref-input-value)
    - [UseRef Method Create Persisted Mutable Values](#useref-method-create-persisted-mutable-values)
    - [useRef Caching expensive computations](#useref-caching-expensive-computations)
  - [Use State](#use-state)
    - [Number Change](#number-change)
  - [UseState using change useRef](#usestate-using-change-useref)
  - [Use State Todo](#use-state-todo)
- [Use Effect](#use-effect)
  - [Without Dependency](#without-dependency)
  - [with Dependency Empty](#with-dependency-empty)
  - [with Dependency with Variable](#with-dependency-with-variable)
    - [Data Fetch](#data-fetch)
- [UseEffect using async function](#useeffect-using-async-function)
- [Visible and Usememo](#visible-and-usememo)

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
            // return <li key={i.toString()}>{item}</li>;
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
  const Status = false;
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

# Child Component

## Child Component string Pass

```javascript
// App.jsx file

import Hero from "./component/hero";

const App = () => {
  return (
    <div>
      <Hero title="Learn React" des="Please tel details the props" />
    </div>
  );
};
export default App;


//  Hero.jsx File
const Hero = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.des}</p>
    </div>
  );
};

export default Hero;
```

## Child component Object pass

```javascript
import Hero from "./component/hero";

const App = () => {
  const Item = { name: "Borhan Uddin Bappy", age: 33, city: "Dhaka" };
  return (
    <div>
      <Hero item={Item} />
    </div>
  );
};
export default App;

const Hero = (props) => {
  return (
    <div>
      <ul>
        <li>Name:{props.item["name"]}</li>
        <li>Age:{props.item["age"]}</li>
        <li>City:{props.item["city"]}</li>
      </ul>
    </div>
  );
};

export default Hero;



// Using Destructring

const Hero = ({ item }) => {
  const { name, age, city } = item;
  return (
    <div>

    </div>
  );
};

export default Hero;
```

## Child Component Function Pass

```javascript
import Hero from "./component/hero";

const App = () => {
  const BtnClick = () => {
    alert("Say Hello");
  };
  return (
    <div>
      <Hero ChildBtnClick={BtnClick} />
    </div>
  );
};
export default App;

const Hero = (props) => {
  return (
    <div>
      <button onClick={props.ChildBtnClick}>Submit</button>
    </div>
  );
};

export default Hero;
```

## Click Event Manage

### Button Using Arrow function Inline

```javascript
const App = () => {
  return (
    <div>
      <button onClick={() => alert("hello")}>Submit</button>
    </div>
  );
};
export default App;
```

### Function using out of render file

```javascript
const App = () => {
  const onclick = () => {
    alert("hello");
  };
  return (
    <div>
      <button onClick={onclick}>Submit</button>
    </div>
  );
};
export default App;
```

## Managing Form submit

```javascript
const App = () => {
  return (
    <div>
      <form>
        <input placeholder="Name" />
        <button type="submit">Button</button>
      </form>
    </div>
  );
};
export default App;
// In code when submit the from reloaded page every time.

const App = () => {
  const PostFromData = (event) => {
    event.preventDefault();
    alert("From Submitted");
  };
  return (
    <div>
      <form onSubmit={PostFromData}>
        <input placeholder="Name" />
        <button type="submit">Button</button>
      </form>
    </div>
  );
};
export default App;
```

# HooK

## useRef

## Use Ref using for DOM Manipulate.

```javascript
const App = () => {
  window.onload = () => {
    let myHeadline = document.getElementById("myHeadline");
    myHeadline.innerText = "hello";
  };

  return (
    <div>
      <h1 id="myHeadline"></h1>
    </div>
  );
};
export default App;
```

### Using Reference Hook for DOM Manipulate

```javascript
import { useRef } from "react";

const App = () => {
  let myHeadline = useRef();
  const change = () => {
    myHeadline.current.innerText = "Hello Bappy";
  };
  return (
    <div>
      <h1 ref={myHeadline}></h1>
      <button onClick={change}>Button</button>
    </div>
  );
};

export default App;


// Without Current

import { useRef } from "react";

const App = () => {
  let myHeadline = useRef();
  const change = () => {
    myHeadline.innerText = "Hello Bappy";
  };
  return (
    <div>
      <h1 ref={(h1) => (myHeadline = h1)}></h1>
      <button onClick={change}>Button</button>
    </div>
  );
};

export default App;

```

### Using useRef Image Attribute Manipulate

```javascript
import { useRef } from "react";

const App = () => {
  let myImg = useRef();
  const change = () => {
    myImg.current.src = "https://placehold.co/600x400?text=Hello+World";
    myImg.current.setAttribute("height", "200px");
    myImg.current.setAttribute("width", "300px");
  };
  return (
    <div>
      <img ref={myImg} src="https://placehold.co/600x400" alt="" />
      <button onClick={change}>Click</button>
    </div>
  );
};

export default App;
```

### UseRef input Value

```javascript
import { useRef } from "react";

const App = () => {
  let firstName = useRef();
  let lastName = useRef();
  const change = () => {
    let FName = firstName.current.value;
    let LName = lastName.current.value;
    alert(FName + " " + LName);
  };

  return (
    <div>
      <input ref={firstName} type="text" placeholder="First Name" /> <br />
      <input ref={lastName} type="text" placeholder="First Name" />
      <br />
      <button onClick={change}>Click</button>
    </div>
  );
};

export default App;
```

<!-- Here is problem Occur multiple time used useRef -->

```javascript
import { useRef } from "react";

const App = () => {
  let firstName,
    lastName = useRef();

  const change = () => {
    let FName = firstName.value;
    let LName = lastName.value;
    alert(FName + " " + LName);
  };

  return (
    <div>
      <input
        ref={(a) => (firstName = a)}
        type="text"
        placeholder="First Name"
      />
      <br />
      // Here Using arrow function that is solve the problem
      <input ref={(a) => (lastName = a)} type="text" placeholder="First Name" />
      <br />
      <button onClick={change}>Click</button>
    </div>
  );
};

export default App;
```

### UseRef Method Create Persisted Mutable Values

```javascript
import { useRef } from "react";

const App = () => {
  let number = useRef(0);
  const change = () => {
    number.current++;
    console.log(`Clicked ${number.current} times `);
  };

  return (
    <div>
      <button onClick={change}>Click</button>
    </div>
  );
};

export default App;
```

### useRef Caching expensive computations

```javascript
import { useRef } from "react";

const App = () => {
  const expensiveResultRef = useRef(null);
  const myDiv = useRef();

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    expensiveResultRef.current = await res.json();
  };

  const showData = () => {
    myDiv.current.innerHTML = JSON.stringify(expensiveResultRef.current);
  };

  return (
    <div>
      <button className="mr-8 ml-3 mt-3 bg-slate-400" onClick={fetchData}>
        Call API
      </button>

      <button className=" bg-slate-500" onClick={showData}>
        Show Data
      </button>

      <div ref={myDiv}></div>
    </div>
  );
};

export default App;
```

## Use State

### Number Change

```javascript
import { useRef, useState } from "react";

const App = () => {
  let [Number, setNumber] = useState(0);
  const change = () => setNumber(Number + 1);

  return (
    <div>
      <h1>Number: {Number}</h1>
      <button onClick={change}>Click</button>
    </div>
  );
};

export default App;
```

## UseState using change useRef

```javascript
import React, { useRef, useState } from "react";

const App = () => {
  const myImage = useRef(null);
  const [isFirstImage, setIsFirstImage] = useState(true);

  const change = () => {
    if (isFirstImage) {
      myImage.current.src = "/public/stickman-with-todo-list.svg";
      myImage.current.setAttribute("height", "100px");
      myImage.current.setAttribute("width", "100px");
    } else {
      myImage.current.src = "/public/images.png";
    }
    setIsFirstImage(!isFirstImage);
  };

  return (
    <div>
      {/* Attach the ref to the img element */}
      <img ref={myImage} src="/public/images.png" alt="My Image" />
      <button onClick={change}>Click</button>
    </div>
  );
};

export default App;
```

## Use State Todo

```javascript
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };
  const DeleteTodo = (id) => {
    const deletedTodo = todos.filter((_, i) => i != id);
    // alert(JSON.stringify(deletedTodo));
    setTodos(deletedTodo);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col">
      <ul className="max-w-md text-gray-500 list-disc dark:text-gray-400">
        {todos.map((todo, i) => (
          <li key={i}>
            <span className="flex space-x-2">
              <div>{todo}</div>
              <div>
                <button
                  className="text-red-500"
                  onClick={() => {
                    DeleteTodo(i);
                  }}
                >
                  X
                </button>
              </div>
            </span>
          </li>
        ))}
      </ul>
      <form className="flex space-x-2" onSubmit={submitHandler}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-indigo-600 p-2"
        />
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
```

# Use Effect

## Without Dependency

```javascript
export default function App() {
  const [count, setcount] = useState(0);
  // Without dependency call with every rendering change effect
  useEffect(() => {
    console.log("Use Effect");
  });
  return (
    <div>
      {console.log("Rendering")}
      <h1>Count :{count}</h1>
      <button onClick={() => setcount((count) => count + 1)}>➕</button>
    </div>
  );
}
```

## with Dependency Empty

```javascript
export default function App() {
  const [count, setcount] = useState(0);
  // with dependency call with 1st rendering change useEffect.
  useEffect(() => {
    console.log("Use Effect");
  }, []);
  return (
    <div>
      {console.log("Rendering")}
      <h1>Count :{count}</h1>
      <button onClick={() => setcount((count) => count + 1)}>➕</button>
    </div>
  );
}
```

## with Dependency with Variable

```javascript
export default function App() {
  const [count, setcount] = useState(0);
  // with dependency call with variable after change variable rendering and useEffect change.
  useEffect(() => {
    console.log("Use Effect");
  }, [count]);
  return (
    <div>
      {console.log("Rendering")}
      <h1>Count :{count}</h1>
      <button onClick={() => setcount((count) => count + 1)}>➕</button>
    </div>
  );
}
```

### Data Fetch

```javascript
import React, { useEffect, useState } from "react";
const todoloding = <p>Todo is loading</p>;
const errorm = (
  <p className=" text-red-700 font-bold">URL is not fetched properly</p>
);
function DataFetch() {
  const [todos, setTodos] = useState(null);
  const [isloading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("ttps://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          if (!res.ok) {
            throw Error(" ");
          } else {
            return res.json();
          }
        })
        .then((data) => {
          setTodos(data);
          setLoading(false);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
          setTodos(null);
        });
    }, 1000);
  }, []);

  return (
    <div className="ml-6">
      <h1 className=" text-3xl text-center">Todos Mapping</h1>
      {error && errorm}
      {isloading && todoloding}
      {todos &&
        todos.map((value, index) => {
          return (
            <li className=" ml-6" key={index}>
              {value.title}
            </li>
          );
        })}
    </div>
  );
}

export default DataFetch;
```

# UseEffect using async function

```javascript
import React, { useEffect, useState } from "react";

const todoloding = <p>Todo is loading</p>;
const errorm = (
  <p className="text-red-700 font-bold">URL is not fetched properly</p>
);

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok) {
    throw new Error("URL is not fetched properly");
  }
  return response.json();
}

function DataFetch() {
  const [todos, setTodos] = useState(null);
  const [isloading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      try {
        const data = await fetchData();
        setTodos(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setTodos(null);
      } finally {
        setLoading(false);
      }
    }, 1000);
  }, []);

  return (
    <div className="ml-6">
      <h1 className="text-3xl text-center">Todos Mapping</h1>
      {error && errorm}
      {isloading && todoloding}
      {todos &&
        todos.map((value, index) => {
          return (
            <li className="ml-6" key={index}>
              {value.title}
            </li>
          );
        })}
    </div>
  );
}

export default DataFetch;
```

# Visible and Usememo

```javascript
import { useState } from "react";

import Hero from "./component/Hero";

export default function App() {
  const [vasiable, setVasiable] = useState(true);

  const [count, setCount] = useState(0);
  const toggle = () => {
    setVasiable(!vasiable);
  };
  const Increment = () => {
    setCount(count + 1);
  };
  console.log("App")


  return (
    <div>
      <div className=" flex justify-start space-x-2">
        <button onClick={toggle}>toggle</button>
        {vasiable ? <h1> ON</h1> : <h1>Off</h1>}
      </div>
      <h1>Count:{count}</h1>
      <Hero Increment={Increment} sendmessage={count}/>
    </div>
  );
}


// Hero.js
// import PropTypes from 'prop-types';

import { memo } from "react";
import { useMemo } from "react";

function Hero(prop) {
  const claculatedNumber = useMemo(() => {
    let number = 0;
    for (let index = 0; index < 500000000; index++) {
      number++;
    }
    return number;
  }, []);
 console.log("Hook is rendering")
  return (
    <div>
      <h1>Number is {claculatedNumber}</h1>
      <p>Send {prop.sendmessage} Message</p>
      <button onClick={prop.Increment}>Increment</button>
    </div>
  );
}

export default Hero;
```
