
import Header from "./Components/Header";
import Footer from "./Components/Footer"
import LandingPage from "./Containers/LandingPage";
import HeaderButton from "./Components/HeaderButton/HeaderButton";

function App() {
  return (
    <div className="App">
      <HeaderButton/>
      <Header/>
      <LandingPage/>
      <Footer/>
    </div>
  );
}

export default App;
