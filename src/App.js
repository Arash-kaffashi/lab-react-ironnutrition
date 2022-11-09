import './App.css';
import foods from './foods.json';

import { useState } from 'react';

import { Divider, Row } from 'antd';
import FoodBox from './components/FoodBox';

function App() {
  const [data, setData] = useState(foods);

  return (
    <div className="App">
      <Divider>Food List</Divider>
      <Row gutter={16}>
        {data.map((food) => (
          <FoodBox food={food} />
        ))}
      </Row>
    </div>
  );
}
export default App;
