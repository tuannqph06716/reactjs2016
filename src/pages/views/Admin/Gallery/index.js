import React,{useState} from "react"
import { useForm } from "react-hook-form";
import Axios from 'axios'
import firebase from '../../../../firebase';
const Gallery=({lastProducts})=>{
    const {register, handleSubmit, errors}=useForm();
    const[newData, setNewData]=useState([]);
    const Ga = (data) =>{
        console.log(data.image);
        for(let i=0;i<data.image.length;i++){
              let file= data.image[i];
              console.log(file);
              let storageRef = firebase.storage().ref(`images/${file.name}`);
              storageRef.put(file).then(function () {
                storageRef.getDownloadURL().then((url) => {
                    const DB = {
                        id: Math.random().toString(36).substr(2, 9),
                        ...data,
                        image: url,
                        id_products: lastProducts,
                    }
                    Axios.post("https://5f32d2fbec83300016137b35.mockapi.io/gallery",DB);
            })
          })
          window.location="/";
        }
        console.log(newData);

    }
    return (
        <div>
        <form onSubmit={handleSubmit(Ga)} encType="multipart/form-data">
            <div className="form-group">
                  <label htmlFor="short_detail">image</label>
                  <div>  
                    <input className="form-control"type="file" multiple  id="image" placeholder="Nhập ảnh" name="image" ref={register({required:true})} />

                  </div>
                  </div>
                  <div className="text-center">
                  <button type="submit" className="btn btn-sm btn-primary" name="submit">Lưu</button>
                  <button type="reset" value="Reset" className="btn btn-sm btn-primary">Hủy</button>
                </div>
        </form>
        </div>
    )
}
export default Gallery