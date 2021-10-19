import './App.css'
import React, { useEffect, axios } from 'react'

function App() {
const [data, setData] = React.useState([]);
const [products, setProduct]= React.useState([])
const axios = require('axios').default;

useEffect(()=>{fetchApi()},[])
function homepage(){
    axios.get('http://localhost:9000')
    .then(resp => {
        setData(resp.data);
        console.log(resp);
    })
    .catch(function (error) {
      console.log(error);
    });
}
  function secondpage(){
    axios.get('http://localhost:9000/second')
    .then(resp => {
        setData(resp.data);
        console.log(resp.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

const fetchApi= async()=>{
  return fetch("https://fakestoreapi.com/products")
  .then(response=>response.json())
  .then(dat=>{setProduct(dat.data);console.log(dat)
  })
  .catch(function (error) {
      console.log(error);
    });
}
function contents(){
 var img = document.createElement("IMG");
  {products.map((product)=>(
    document.getElementById("contents").appendChild(img)

  ))}
}
  return (
    <div>
      <div id="navbar">
      <button className="buttons" onClick={homepage}>Homepage</button>
      <button className="buttons" onClick={secondpage}>Second page</button>
      {/* <button className="buttons" onClick={contents}>Products</button> */}
      </div> 

      <div id="contents">
        {data}
        {/* <div key={product.id} className="container">
          <img className="img" id="img"></img>
          <div className="title" id="tile">{product.title}</div>
        </div> */}
      </div>


    </div>
  );
};
export default App;




