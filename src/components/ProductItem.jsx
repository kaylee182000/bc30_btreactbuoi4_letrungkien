import React from "react";

export default function ProductItem({ prod }) {
  return (
    <div>
      <img src={prod.hinhAnh}  weight="100%" alt="" />
      <div>
        <h3>{prod.tenSP}</h3>
        <button className="btn btn-success me-2">Xem chi tiet</button>
        <button className="btn btn-danger">Them vao gio hang</button>
      </div>
    </div>
  );
}
