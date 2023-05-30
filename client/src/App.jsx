import Home from "./pages/home";
import Menu from "./services/menu";

function App() {
  const menu = Menu();
  return (
    <>
      <Home />
      {console.log(menu)}
    </>
  );
}

export default App;
