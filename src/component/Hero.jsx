export default function Hero(props) {
  return (
    <div className=" ml-4">
      <button className="bg-green-800 text-white rounded-lg" onClick={props.increment}>Increment</button>
    </div>
  );
}
