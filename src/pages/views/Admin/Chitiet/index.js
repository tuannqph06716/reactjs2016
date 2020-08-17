import React from "react"
const Chitiet=({tongsohang,tongsotien,tongsohangdadat})=>{
    return (<div>
    <div>tổng số hàng có trong kho: {tongsohang} sản phẩm</div>
    <div>tổng số tiền đã bán được: {tongsotien}$</div>
    <div>tổng số hàng khách đã đặt: {tongsohangdadat} sản phẩm</div>
</div>
    )
}
export default Chitiet