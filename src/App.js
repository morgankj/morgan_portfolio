import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import mePiper from "./Images/meAndPiper.png";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      {/* <img alt="girl with dog" src={mePiper} /> */}
      
      <Footer />
    </div>
  );
}

export default App;
