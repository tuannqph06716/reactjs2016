import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import Axios from 'axios'
import firebase from '../../../../firebase';

import { useForm } from "react-hook-form";
const Details = (props) => {
let id=parseInt(props.match.params.id);
const url="https://5ea1c7f7b9f5ca00166c2226.mockapi.io/conga/sanpham";
const [pro, setPro] = useState([]);
const[loai,setLoai]=useState([]);
  useEffect(() => {
    const fetchLoai= async()=>{
       const res= await Axios.get('https://5ea1c7f7b9f5ca00166c2226.mockapi.io/conga/loai')
          setLoai(res.data);
  
        };
        fetchLoai();
      },[])
useEffect(() => {
  fetch(url)
    .then(res => res.json())
    .then((data) => {
      setPro(data);
    })
}, []);
const [ga,setGa]=useState([])
const {register, handleSubmit, errors}=useForm();
const Them=data=>{
  const urlUpdate= url+"/"+id;
  console.log(data.image[0]);
  let file=data.image[0]
  console.log(file);
  let storageRef = firebase.storage().ref(`images/${file.name}`);
  storageRef.put(file).then(function () {
    storageRef.getDownloadURL().then((url) => {
        console.log(url);
        // Tạo object mới chứa toàn bộ thông tin từ input
        const DB = {
            id: Math.random().toString(36).substr(2, 9),
            ...data,
            image: url
        }
        setGa(DB);
        Axios.put(urlUpdate, data).then(res=>{
          console.log(res.data)
          window.location="../";
        })
})
})
  
  
}
return (
  <div>
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  {/* Main content */}
  <section className="content">
      <div>Thêm sản phẩm</div>
    <div className="box row">
      <div className="col-md-6">
        <form onSubmit={handleSubmit(Them)} encType="multipart/form-data">
        {pro.map(pro=>{
if(pro.id==id){
  return(
    <div>
          <div className="form-group">
            <label htmlFor="name">name</label>
            <input id="name" type="text" name="name" defaultValue={pro.name} placeholder="Nhập tên " className="form-control"  ref={register({required:true, minLength:4})} />
          {errors.name && errors.name.type=== "required" && (<div style={{color: 'red'}} >tên không được để trống </div>)}
          {errors.name && errors.name.type==="minLength" && (<div style={{color: 'red'}} >tên ít nhất 4 ký tự </div>)}
          </div>
          <img src={pro.image} width="100px"></img>
            <div className="form-group">
                  <label htmlFor="short_detail">image</label>
                  <div>
                    <input className="form-control"type="file" id="image" placeholder="Nhập ảnh" name="image" ref={register({required:true})} />
                  </div>
          </div>
          <div className="form-group">
            <label htmlFor="short_detail">price</label>
            <div>
              <input className="form-control" id="price"defaultValue={pro.price} placeholder="Nhập giá" name="price" ref={register({required:true,pattern:/^[+-]?((\d+(\.\d*)?)|(\.\d+))$/})} />
          {errors.price && errors.price.type==="required"&&(<div style={{color: 'red'}}>chưa nhập giá  </div>)}
          {errors.price && errors.price.type==="pattern"&&(<div style={{color: 'red'}}>giá phải lớn hơn 0 </div>)}

            </div>
          </div>
          <div className="form-group">
            <label htmlFor="short_detail">sale_price</label>
            <div>
              <input className="form-control" id="sale_price" placeholder="Nhập giá giảm" defaultValue={pro.sale_price} name="sale_price"  ref={register({required:true, pattern:/^[+-]?((\d+(\.\d*)?)|(\.\d+))$/})} />
              {errors.sale_price && errors.sale_price.type==="required" && (<div style={{color: 'red'}} >chưa nhập giá giảm  </div>)}
              {errors.sale_price && errors.sale_price.type==="pattern"&&(<div style={{color: 'red'}} >giá giảm phải là số </div>)}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="short_detail">desc</label>
            <div>
              <input type="text" className="form-control" defaultValue={pro.desc} id="desc" placeholder="nhập mô tả" name="desc" ref={register({required:true,minLength:5})} />
              {errors.desc && errors.desc.type==="required" && (<div style={{color: 'red'}} >chưa nhập mô tả</div>)}
              {errors.desc && errors.desc.type==="minLength" && (<div style={{color: 'red'}} >ít nhất phải là 5 ký tự</div>)}


            </div>   
          </div>
          <div className="form-group">
            <label htmlFor="short_detail">title</label>
            <div>
              <input type="text" className="form-control" id="title" defaultValue={pro.title} placeholder="nhập title" name="title" ref={register({required:true,minLength:5})}  />
              {errors.title && errors.title.type==="required" && (<div style={{color: 'red'}} >chưa nhập title</div>)}
              {errors.title && errors.title.type==="minLength" && (<div style={{color: 'red'}} >ít nhất phải là 5 ký tự</div>)}
            </div>
          </div>
          <div className="form-group">
                    <label htmlFor="exampleInputPassword1">cate</label>
                       <select onSelect={pro.id_loai} name="id_loai" className="form-control input-sm m-bot15" ref={register(
                         {min:1}
                       )}>
                         {loai.map(m=>(<option value={m.id}>{m.name}</option>
))}             
        </select>
      </div>
          <div className="text-center">
            <button type="submit" className="btn btn-sm btn-primary" name="submit">sửa</button>
            <button type="reset" value="Reset" className="btn btn-sm btn-primary">Hủy</button>
          </div>
          </div>
)}})}
        </form>
      </div>
    </div></section>
  {/* /.content */}
</div>        </div>
)
  }
export default Details
