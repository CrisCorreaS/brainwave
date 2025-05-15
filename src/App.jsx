import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Pruebas from "./pages/Pruebas";
import PruebasPricing from "./pages/PruebasPricing";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./pages/Wrapper";

const App = () => {
  const location = useLocation();

  const noHeaderFooterRoutes = ["/dashboard"];
  const hideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      <ScrollToTop />

      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/news" element={<News />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/register"
          element={
            <Wrapper>
              <Register />
            </Wrapper>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Wrapper>
              <Dashboard />
            </Wrapper>
          }
        />
        <Route path="/pruebas" element={<Pruebas />} />
        <Route path="/prueba-pricing" element={<PruebasPricing />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default App;
