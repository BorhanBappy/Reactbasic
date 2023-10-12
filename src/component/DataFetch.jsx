import React from "react";
import useFetch from "./useFetch";

function DataFetch() {
  const { data, isLoading, error } = useFetch("https://jsonplaceholder.typicode.com/comments");

  const todoloding = <p>Todo is loading</p>;
  const errorm = <p className="text-red-700 font-bold">URL is not fetched properly</p>;

  return (
    <div className="ml-6">
      <h1 className="text-3xl text-center">Todos Mapping</h1>
      {error && errorm}
      {isLoading && todoloding}
      {data &&
        data.map((value, index) => {
          return (
            <li className="ml-6" key={index}>
              {value.email}
            </li>
          );
        })}
    </div>
  );
}

export default DataFetch;
