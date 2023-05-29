import LandingImage from "./assets/images/landing-img.png";
import NavBar from "./components/navBar";

function App() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat bg-image-url w-full h-[100vh]"
      style={{ backgroundImage: `url(${LandingImage})` }}
    >
      <NavBar />
    </div>
  );
}

export default App;
