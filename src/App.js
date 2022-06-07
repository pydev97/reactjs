import Counter from "./component/Counter";
import { Provider } from "react-redux";
import ListUser from "./component/ListUser";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <Counter></Counter>
      <ListUser></ListUser>
    </Provider>
  );
}

export default App;
