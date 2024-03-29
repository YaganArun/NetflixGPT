import { Provider } from "react-redux";
import "./App.css";
import Body from "./Page/BodyPage";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Body />
      </div>
    </Provider>
  );
}

export default App;
