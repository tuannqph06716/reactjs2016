import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios'
import { useForm } from "react-hook-form";
import firebase from '../../../../firebase';
const Add = ({onAdd}) => {
  
  const {register, handleSubmit, errors}=useForm();
  const[newData, setNewData]=useState([]);

  const Them = (data) => {
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
          setNewData(DB);
          Axios.post("https://5ea1c7f7b9f5ca00166c2226.mockapi.io/conga/sanpham",newData);
          window.location="../admin";
  })
})
}

  const[loai,setLoai]=useState([]);
  useEffect(() => {
    const fetchLoai= async()=>{
       const res= await Axios.get('https://5ea1c7f7b9f5ca00166c2226.mockapi.io/conga/loai')
          setLoai(res.data);
  
        };
        fetchLoai();
      },[])
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
                <div className="form-group">
                  <label htmlFor="name">name</label>
                  <input id="name" type="text" name="name" placeholder="Nhập tên " className="form-control"  ref={register({required:true, minLength:4,maxLength:10})} />
                {errors.name && errors.name.type=== "required" && (<div style={{color: 'red'}}>tên không được để trống </div>)}
                {errors.name && errors.name.type==="minLength" && (<div style={{color: 'red'}} >tên ít nhất 4 ký tự </div>)}
                </div>
                <div className="form-group">
                  <label htmlFor="short_detail">image</label>
                  <div>
                    
                    <input className="form-control"type="file" id="image" placeholder="Nhập ảnh" name="image" ref={register({required:true})} />
                    {errors.image && <div style={{color: 'red'}} >Bạn chưa nhập ảnh </div>}

                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="short_detail">price</label>
                  <div>
                    <input className="form-control" id="price" placeholder="Nhập giá" name="price" ref={register({required:true,min:0,pattern:/^[+-]?((\d+(\.\d*)?)|(\.\d+))$/})} />
                {errors.price && errors.price.type==="required"&&(<div style={{color: 'red'}}>chưa nhập giá  </div>)}
                {errors.price && errors.price.type==="pattern"&&(<div style={{color: 'red'}}>chỉ nhập số </div>)}

                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="short_detail">sale_price</label>
                  <div>
                    <input className="form-control" id="sale_price" placeholder="Nhập giá giảm" name="sale_price"  ref={register({required:true, pattern:/^[+-]?((\d+(\.\d*)?)|(\.\d+))$/})} />
                    {errors.sale_price && errors.sale_price.type==="required" && (<div style={{color: 'red'}}>chưa nhập giá giảm  </div>)}
                    {errors.sale_price && errors.sale_price.type==="pattern"&&(<div style={{color: 'red'}} >giá giảm phải là số </div>)}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="short_detail">desc</label>
                  <div>
                    <input type="password" className="form-control" id="desc" placeholder="nhập mô tả" name="desc" ref={register({required:true,minLength:5})} />
                    {errors.desc && errors.desc.type==="required" && (<div style={{color: 'red'}} >chưa nhập mô tả</div>)}
                    {errors.desc && errors.desc.type==="minLength" && (<div style={{color: 'red'}} >ít nhất phải là 5 ký tự</div>)}


                  </div>   
                </div>
                <div className="form-group">
                  <label htmlFor="short_detail">title</label>
                  <div>
                    <input type="password" className="form-control" id="title" placeholder="nhập title" name="title" ref={register({required:true,minLength:5})}  />
                    {errors.title && errors.title.type==="required" && (<div style={{color: 'red'}} >chưa nhập title</div>)}
                    {errors.title && errors.title.type==="minLength" && (<div style={{color: 'red'}} >ít nhất phải là 5 ký tự</div>)}
                  </div>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">cate</label>
                       <select name="id_loai" className="form-control input-sm m-bot15" ref={register(
                         {min:1}
                       )}>
                         <option selected="true" value="0">chọn</option>
                         {loai.map(m=>(<option value={m.id}>{m.name}</option>
))}             
        </select>
      </div>
      <a className="btn btn-info"href={"/admin/galery/"} name="galery">Thêm galery</a>

                <div className="text-center">
                  <button type="submit" className="btn btn-sm btn-primary" name="submit">Lưu</button>
                  <button type="reset" value="Reset" className="btn btn-sm btn-primary">Hủy</button>
                </div>
              </form>
            </div>
          </div></section>
        {/* /.content */}
      </div>        </div>
    )
}
export default Add

