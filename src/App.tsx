import "./App.css";
import Home from "./pages/Home";
import WhyFotoCaller from "./components/WhyFotoCaller";
import SwiperPage from "./pages/SwiperPage";
import ReadyToBook from "./pages/ReadyToBook";
import Footer from "./pages/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Policy from "./pages/Policy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
              <Home />
              <WhyFotoCaller />
              <SwiperPage />
              <ReadyToBook />
              <Footer />
            </>
          } />
          <Route path="/policy" element={
            <Policy/>
          }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
