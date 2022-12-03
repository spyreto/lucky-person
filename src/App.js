// Selected by user card baground color provider
import { ColorProvider } from "./context/color-context";
// Import components
import SelectColorBox from "./components/select-color-box/SelectColorBox";
import UserSlider from "./components/user-slider/UserSlider";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Lucky Person</h1>
      <ColorProvider>
        <SelectColorBox />
        <UserSlider />
      </ColorProvider>
    </div>
  );
};

export default App;
