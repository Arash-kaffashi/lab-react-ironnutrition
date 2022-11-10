import './App.css';
import foods from './foods.json';

import { useState } from 'react';

import { Divider, Empty, Row } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [data, setData] = useState(foods);
  const [hide, setHide] = useState([]);

  return (
    <div className="App">
      <AddFoodForm data={data} setData={setData} />
      <Search data={data} setHide={setHide}></Search>
      <Divider>Food List</Divider>
      <Row gutter={16}>
        {data.length > 0 ? (
          data.map((food, index) => (
            <FoodBox
              key={food.name}
              food={food}
              style={hide.includes(index) ? { display: 'none' } : {}}
              data={data}
              setData={setData}
            />
          ))
        ) : (
          <Empty style={{ margin: 'auto' }} />
        )}
      </Row>
    </div>
  );
}
export default App;
