import About from "./pages/about";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Home />
      <div className="bg-bgBlack gap-8 md:gap-12">
        <About />
      </div>
    </>
  );
}

export default App;
