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
