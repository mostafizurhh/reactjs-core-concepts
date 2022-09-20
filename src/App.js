import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const products = [
  { name: "laotop", price: "679000" },
  { name: "phone", price: "79000" },
  { name: "watch", price: "9000" },
  { name: "tablet", price: "23000" }
]


function App() {
  return (
    <div>
      <ExternalPosts></ExternalPosts>
    </div>
    /*********load dynamic data and display on UI*********/
    // <div>
    //   <ExternalUsers></ExternalUsers>
    // </div>
    /***********understainding state*********/
    // <div style={{ textAlign: 'center' }}>
    //   <Counter></Counter>
    // </div>

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
function Product(props) {
  return (
    <div className="product">
      <h1>Name:{props.name}</h1>
      <h1>Price:{props.price}</h1>
    </div>
  )
}

// component2 understanding useState()
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

/*********load external data and display on UI dynamicly*********/
function ExternalUsers() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>External Users</h3>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

// component3
function User(props) {
  return (
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <h3>Email: {props.email}</h3>
    </div>
  )
}

function ExternalPosts() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>External Posts</h2>
      <p>{posts.length}</p>
      {posts.map(post => <Posts id={post.id} title={post.title} body={post.body}></Posts>)}
    </div>
  )
}

function Posts(props) {
  return (
    <div className='product'>
      <h2>ID: {props.id}</h2>
      <h5>Title: {props.title}</h5>
      <h6>Body: {props.body}</h6>
    </div>
  )
}
export default App;
