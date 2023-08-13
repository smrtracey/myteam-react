import Header from "./components/header/Header";
import Routing from "./routing/Routing";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app-wrapper">
          <Header />

          <Routing />

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
