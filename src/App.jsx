import "./App.css";
import Counter from "./components/Counter";
import Todos from "./components/Todos";
import Mappers from "./components/Mappers";
import GetProductsAndPrice from "./components/GetProductsAndPrice";
import FilterExpensiveProducts from "./components/FilterExpensiveProducts";
import TotalCartValue from "./components/TotalCartValue";
import AddFullName from "./components/AddFullName";
import CounterWithUseEffect from "./components/CounterWithUseEffect";
import JsonMapper from "./components/JsonMapper";
function App() {
  return (
    <>
      <Counter />
      <Todos/>
      <Mappers/>
      <GetProductsAndPrice/>
      <FilterExpensiveProducts/>
      <TotalCartValue/>
      <AddFullName/>
      <CounterWithUseEffect/>
      <JsonMapper/>
    </>
  );
}

export default App;
