import "./App.css";
import MainText from "./components/maintext/MainText";
import SignUp from "./components/signup/SignUp";
function App() {
  return (
    <div className="xl:flex xl:flex-row xl:items-center">
      <MainText />
      <SignUp />
    </div>
  );
}

export default App;
