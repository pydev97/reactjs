import Counter from "./component/Counter";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <Counter></Counter>
    </Provider>
  );
}

export default App;
