import React from "react"
import ProtoTypes from "prop-types"
const Pagination=({post,loading})=>{
    if(loading){
    return (
        <div>
            <h2>loading</h2>
        </div>
    )
    }
    else{
        return(
            <div>
                <ul className="list-group-mb-4"></ul>
                {post.map(po=>(
                    <li key={po.id} className="list-group-item">{po.title}</li>
                ))}
            </div>
        )
    }
}
export default Pagination