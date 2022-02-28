import './App.css';
import logo from "./logo.jpeg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require("./yuuva.PNG")} style={{"width": "100px"}} alt="logo"/>
        <h1>Coming Soon</h1>
        <p>We are currently working on creating our new website.</p>
        <p>We will be launching soon</p>
        <i class="fa-brands fa-instagram"></i>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-facebook"></i>
        <i class="bi bi-whatsapp"></i>
      </header>
    </div>
  );
}

export default App;
