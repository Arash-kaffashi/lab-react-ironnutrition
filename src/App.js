import './App.css';
import foods from './foods.json';

import { useState } from 'react';

import { Divider } from 'antd';
import FoodBox from './components/FoodBox';

function App() {
  const [data, setData] = useState(foods);

  return (
    <div className="App">
      <Divider>Food List</Divider>
      <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      />
    </div>
  );
}
export default App;
