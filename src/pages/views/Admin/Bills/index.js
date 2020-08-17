import React from "react"
const Bills=({bills})=>{
    const details=(id)=>{

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
              <th>date</th>
              <th>Address</th>
              <th>Phone</th>
              <th>total</th>
              <th>deatails</th>
            </tr>
          </thead>
          <tbody>
            {bills.map(db=>(
              <tr>
              <td>{db.id}</td>
              <td>{db.name}</td>
              <td>{db.createdAt}</td>
              <td>{db.address}</td>
              <td>{db.phone}</td>
              <td>{db.total}$</td>
              <td><button onClick={()=>details(db.id)} className="btn btn-xs btn-info">Chi tiết đơn </button></td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
    </div>)
}
export default Bills
