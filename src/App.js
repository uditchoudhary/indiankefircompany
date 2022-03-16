
import ThemeCheck from "./ThemeCheck.js"
import Header from "./Components/Header";
import Footer from "./Components/Footer"
import LandingPage from "./Containers/LandingPage";

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <ThemeCheck/> */}
      <LandingPage/>
      <Footer/>
    </div>
  );
}

export default App;
