import React, { useEffect, useState } from "react";
const todoloding = <p>Todo is loading</p>;
const errorm = <p className=" text-red-700 font-bold">URL is not fetched properly</p>;
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
