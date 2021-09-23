import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() =>{
    const names = ['Maria', 'Sami', 'Ilmari', 'Unto', 'Elma'];
    setItems(names);
  },[])

  return (
    <div>
      <h3>Names</h3>
      <ul>
        {items.map(item=>(
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
