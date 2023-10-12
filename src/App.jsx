import { useRef } from "react";

const App = () => {
  const expensiveResultRef = useRef(null);
  const myDiv = useRef();

  const fetchData = async () => {
   
      const res = await fetch("https://dummyjson.com/products");
      expensiveResultRef.current= await res.json();
   
  };

  const showData = () => {
      myDiv.current.innerHTML = JSON.stringify(expensiveResultRef.current);
    
  };

  return (
    <div>
      <button className="mr-8 ml-3 mt-3 bg-slate-400" onClick={fetchData}>
        Call API
      </button>

      <button className=" bg-slate-500" onClick={showData}>Show Data</button>

      <div ref={myDiv}></div>
    </div>
  );
};

export default App;
