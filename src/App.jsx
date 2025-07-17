import MainText from "./components/maintext/MainText";
import SignUp from "./components/signup/SignUp";
function App() {
  return (
    <div className="xl:flex xl:flex-row xl:items-center xl:gap-[4.5rem] xl:w-screen justify-center">
      <MainText />
      <SignUp />
    </div>
  );
}

export default App;
