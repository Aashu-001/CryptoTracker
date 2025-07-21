import Navbar from "./components/navbar/Navbar"
import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Coin from "./pages/Coin/Coin";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <>
      <div className="app">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/coin/:coinId" element={<Coin/>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App
