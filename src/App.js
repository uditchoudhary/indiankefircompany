import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={require("./yuuva.PNG")}
          style={{ width: "100px" }}
          alt="logo"
        />
        <h1>Coming Soon</h1>
        <p>We are currently working on creating our new website.</p>
        <p>We will be launching soon</p>
        <i className="fa-brands fa-instagram"></i>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-facebook"></i>
        <i className="bi bi-whatsapp"></i>
      </header>
    </div>
  );
}

export default App;
