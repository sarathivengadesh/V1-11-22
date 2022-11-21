import logo from "./logo.svg";
import "./App.css";
import Pageindex from "./pages";
import { Provider } from "react-redux";
import { store } from "./store/root";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Pageindex />
      </Provider>
    </div>
  );
}

export default App;
