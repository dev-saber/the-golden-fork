import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/routing";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Routing />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
