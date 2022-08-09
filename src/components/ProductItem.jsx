import React from "react";

export default function ProductItem({ prod, detail, addToCart }) {
  return (
    <div className="row">
      <div className="col-12">
        <img src={prod.hinhAnh} height={400} alt="" />
      </div>
      <div className="col-12">
        <h3>{prod.tenSP}</h3>
        <button
          className="btn btn-success me-2"
          onClick={() => {
            detail(prod);
          }}
        >
          Xem chi tiet
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            addToCart(prod);
          }}
        >
          Them vao gio hang
        </button>
      </div>
    </div>
  );
}
