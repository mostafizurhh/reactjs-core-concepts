import logo from './logo.svg';
import './App.css';

const products = [
  { name: "laotop", price: "679000" },
  { name: "phone", price: "79000" },
  { name: "watch", price: "9000" },
  { name: "tablet", price: "23000" }
]

function App() {
  return (
    <div>
      {products.map(product => <Product name={product.name} price={product.price}></Product>)}
    </div>
    // <div>
    //   <Product name="laptop" price="69000"></Product>
    //   <Product name="mobile" price="49000"></Product>
    //   <Product name="watch" price="6000"></Product>
    // </div>
  );
}

function Product(props) {
  return (
    <div className="product">
      <h1>Name:{props.name}</h1>
      <h1>Price:{props.price}</h1>
    </div>
  )
}

export default App;
