import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios'
import swal from 'sweetalert';
import history from '../../../../history.js';
const removeHandle=(id)=>{
  let url="https://5ea1c7f7b9f5ca00166c2226.mockapi.io/conga/sanpham/"+id;
  if(window.confirm("ban co chac xoa k?"))
  {
   Axios.delete(url).then(res=>{
    swal("Good job!", "Bạn đã xóa thành công!", "success", {
      button: "Aww yiss!",
    });
       })
  }
}
const Dashboard = (props) => {
  const pageNumber=[];
   for(let i=1;i<Math.ceil(props.totalPost/ props.postPerPage);i++){
     pageNumber.push(i);  
   }
        return (
            <div class="content-wrapper">

        <section className="content">
          <div className="box">
            <div className="box-header">
              <h4>products list</h4>
							<a href="#" title="" class="btn btn-xs btn-primary">add</a>
            </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>created At</th>
                  <th>image</th>
                  <th>price</th>
                  <th>sale_price</th>
                  <th>description</th>
                  <th>title</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {props.products.map(db=>(
                  <tr>
                  <td>{db.id}</td>
                  <td>{db.name}</td>
                  <td>{db.createdAt}</td>
                  <td><img src="{db.image}" width="100px" alt="User Image" /></td>                  
                  <td>{db.price}</td>
                  <td>{db.sale_price}</td>
                  <td>{db.desc}</td>
                  <td>{db.title}</td>
                  <td><button title className="btn btn-danger btn-info"  onClick={() => removeHandle(db.id)}>delete</button>
                  </td>
                  <td><a href={"/admin/edit/"+db.id} title className="btn btn-xs btn-info">edit</a>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
          <nav><ul className="pagination">
                {pageNumber.map(number=>(
                  <li key={number} className="page-item">
                  <a onClick={()=>props.paginate(number)} className="page-link">{number}</a>
                  </li>
                ))}</ul></nav>
        </section>
        </div>
        )}
export default Dashboard