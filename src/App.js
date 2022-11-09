import './App.css';
import foods from './foods.json';

import { useState } from 'react';

import { Divider, Row } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [data, setData] = useState(foods);

  return (
    <div className="App">
      <AddFoodForm data={data} setData={setData} />
      <Divider>Food List</Divider>
      <Row gutter={16}>
        {data.map((food) => (
          <FoodBox key={food.name} food={food} />
        ))}
      </Row>
    </div>
  );
}
export default App;
