import Card from "./HoC/card";
import Reducer from "./useApi/reducer";
import ClassRef from "./useApi/ref/ClassRef";
import FuncRef from "./useApi/ref/FuncRef";
function App() {
  return <div>
    {/* Reducer */}
    <Card title='Reducer'>
      <Reducer />
    </Card>

    {/* ClassRef */}
    <Card title='ClassRef'>
      <ClassRef></ClassRef>
    </Card>

    {/* FuncRef */}
    <Card title='FuncRef'>
      <FuncRef></FuncRef>
    </Card>
  </div>;
}

export default App;
