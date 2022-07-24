import Home from "./views/Home";
import { OptionProvider } from "./OptionContext";

function App() {
  return (
    <div>
      <OptionProvider>
      <Home/>
      </OptionProvider>
    </div>
  );
}

export default App;
