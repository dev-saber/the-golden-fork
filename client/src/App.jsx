import About from "./pages/about";
import Home from "./pages/home";
import Menu from "./pages/menu";

function App() {
  return (
    <>
      <Home />
      <div className="bg-bgBlack gap-24 flex flex-col md:gap-32">
        <About />
        <Menu/>
      </div>
    </>
  );
}

export default App;
