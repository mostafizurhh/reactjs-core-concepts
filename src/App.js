import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const products = [
  { name: "laotop", price: "679000" },
  { name: "phone", price: "79000" },
  { name: "watch", price: "9000" },
  { name: "tablet", price: "23000" }
]


function App() {
  return (
    /* understainding state */
    <div style={{ textAlign: 'center' }}>
      <Counter></Counter>
    </div>
    // <div>
    //   {products.map(product => <Product name={product.name} price={product.price}></Product>)}
    // </div>
    // <div>
    //   <Product name="laptop" price="69000"></Product>
    //   <Product name="mobile" price="49000"></Product>
    //   <Product name="watch" price="6000"></Product>
    // </div>
  );
}
// Component1
// function Product(props) {
//   return (
//     <div className="product">
//       <h1>Name:{props.name}</h1>
//       <h1>Price:{props.price}</h1>
//     </div>
//   )
// }

// component2
function Counter() {
  const [count, setCount] = useState(0); //useState() will give an array[value, function]

  const increaseCount = () => (setCount(count + 1))
  const decreaseCount = () => (setCount(count - 1))

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount} >Increase</button>
      <button style={{ marginLeft: 10 }} onClick={decreaseCount}>Decrease</button>
    </div>
  )

}


export default App;
