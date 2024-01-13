import NavMenu from "./components/nav_menu/nav_menu.component";
import Home from "./routes/home";

function App() {
  return (
    <div className="App">
      <NavMenu companyName="Custom Audio & Lighting" companyMotto="Your spaces done right!" />
      <Home/>
    </div>
  );
}

export default App;
