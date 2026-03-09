import Home from "./pages/Home";
import Menu from "./pages/Menu";
import AboutUs from "./pages/AboutUs";
import LayoutWrapper from "./layout/LayoutWrapper";
import ReasonToLoveUs from "./pages/ReasonToLoveUs";

function App() {
  return (
    <>
      <LayoutWrapper>
        <Home />
        <Menu />
        <ReasonToLoveUs />
        <AboutUs />
      </LayoutWrapper>
    </>
  );
}

export default App;
