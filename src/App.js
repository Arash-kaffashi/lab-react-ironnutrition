import './App.css';
import foods from './foods.json';
import { Divider } from 'antd';

function App() {
  return (
    <div className="App">
      <Divider>Food List</Divider>
      {foods.map(({ name, image }) => {
        return (
          <div>
            <h3>{name}</h3>
            <img src={image} height={'60px'} />
          </div>
        );
      })}
    </div>
  );
}
export default App;
