import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import './App.css';
import CovidData from './components/CovidData';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
            <CovidData />
    </Provider>
  );
}

export default App;
