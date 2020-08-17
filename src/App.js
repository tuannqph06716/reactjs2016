import React, { useState, useEffect } from 'react';
// import Products from './components/Products';
// import Box from './components/Box/Box';
// import Home from './components/Main/NavBar'
// import Product from './components/Product';
import Routers from './routers'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Axios from 'axios';
// import AddProduct from './components/AddProduct';
function App() {
  const [products, setProducts] = useState([]);
  const [bills, setBills] = useState([]);
  const [details,setDetails]=useState([]);
  const [loading, setLoading]=useState(false);
    const [currentPage, setCurrentPage]=useState(1);
    const [postPerPage, setPostPerPage]=useState(6);
    useEffect(() => {
      const fecthBills= async()=>{
         const res= await Axios.get('https://5f32d2fbec83300016137b35.mockapi.io/bill_details');
            setDetails(res.data);
          }
          fecthBills();
        },[]);
  useEffect(() => {
  const fetchProduct= async()=>{
    setLoading(true);
     const res= await Axios.get('https://5ea1c7f7b9f5ca00166c2226.mockapi.io/conga/sanpham')
        setProducts(res.data);
    setLoading(false);

      }
      fetchProduct();
    },[]);
    useEffect(() => {
      const fecthBills= async()=>{
         const res= await Axios.get('https://5f32d2fbec83300016137b35.mockapi.io/bills');
            setBills(res.data);
          }
          fecthBills();
        },[]);
  const totalPost= products.length;
  console.log(totalPost);
  const indexOfLastPost=currentPage*postPerPage;
  const indexOfFisrtPost=indexOfLastPost-postPerPage;
  const currentPost=products.slice(indexOfFisrtPost,indexOfLastPost);
  const paginate=pageNumber=>setCurrentPage(pageNumber);
  //gallery
  const lastBills=bills.reduce(function(a,b){
    return a=b.id;
  },0)
  console.log(lastBills);
 const lastProducts=products.reduce(function(a,b){
   return a=b.id;
 },0)
 console.log(lastProducts);
 //categories
 //chitiet
 const tongsohang=products.length;
 console.log(products.length);
 const tongsotien=bills.reduce((sum,{total})=>sum+parseInt(total),0);
 const tongsohangdadat=details.reduce((sum,{count})=>sum+parseInt(count),0);
 console.log(tongsohangdadat);
 console.log(tongsotien);
 const[loai,setLoai]=useState([]);
 useEffect(() => {
  const fetchloai= async()=>{
     const res= await Axios.get('https://5ea1c7f7b9f5ca00166c2226.mockapi.io/conga/loai')
        setLoai(res.data);
      }
      fetchloai();
    },[]);

  const [status, setStatus] = useState(false);
  const [color, setColor] = useState('green');
  const [dbCart, setDbCart] = useState([]);

  const onHandleClick = () => {
    // setStatus(true);
    setColor('red');
  }
  const onHandleRemove = (id) => {
    const newProducts = products.filter(product => product.id !== id);
    setProducts(newProducts);
  }
  const onAdd =cart => {
      setDbCart(cart)
  }
  console.log(dbCart)
  return (
    <div className="App">
      <Routers bills={bills} tongsohang={tongsohang} tongsohangdadat={tongsohangdadat} tongsotien={tongsotien} loai={loai} lastBills={lastBills} products={currentPost} dbCart={dbCart} loading={loading} lastProducts={lastProducts} onAdd={onAdd} postPerPage={postPerPage} paginate={paginate} totalPost={totalPost} onRemove={onHandleRemove} />
    </div>
  )

}
export default App;