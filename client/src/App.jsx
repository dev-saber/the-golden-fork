import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/routing";
import Footer from "./components/footer";
import { useSelector } from "react-redux";

function App() {
  const loading = useSelector((state) => state.menu.loading);
  return (
    <BrowserRouter>
      <Routing />
      {/* if the menu data is not yet fetched, the footer won't be displayed */}
      {!loading && <Footer />}
    </BrowserRouter>
  );
}

export default App;
