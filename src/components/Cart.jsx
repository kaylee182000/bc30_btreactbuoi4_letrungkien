import React from "react";

export default function Cart({ cart, deleteCart }) {
  let [count, setCount] = React.useState(1);
  let sum = () => {
    return setCount((preCount) => {
      preCount = preCount + 1;
      return preCount;
    });
  };
  let minus = () => {
    return setCount((preCount) => {
      preCount = preCount - 1;
      return preCount;
    });
  };
  let renderItem = () => {
    if (cart.length === 0) {
      return (
        <tr>
          <td style={{ textAlign: "center" }}>__</td>
          <td style={{ textAlign: "center" }}>__</td>
          <td style={{ textAlign: "center" }}>__</td>
          <td style={{ textAlign: "center" }}>__</td>
          <td style={{ textAlign: "center" }}>__</td>
          <td style={{ textAlign: "center" }}>__</td>
        </tr>
      );
    } else {
      return cart.map((prod, index) => {
        return (
          <tr key={index}>
            <td style={{ textAlign: "center" }}>{prod.maSP}</td>
            <td style={{ textAlign: "center" }}>
              <img width="50px" src={prod.hinhAnh} alt="" />
            </td>
            <td style={{ textAlign: "center" }}>{prod.tenSP}</td>
            <td style={{ textAlign: "center" }}>
              <button
                className="btn btn-primary me-1"
                onClick={() => {
                  sum();
                }}
              >
                +
              </button>
              {count}
              <button
                className="btn btn-primary ms-1"
                onClick={() => {
                  minus();
                }}
              >
                -
              </button>
            </td>
            <td style={{ textAlign: "center" }}>{prod.giaBan}</td>
            <td style={{ textAlign: "center" }}>{prod.giaBan} </td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => {
                  deleteCart(prod.maSP);
                }}
              >
                Xoa
              </button>
            </td>
          </tr>
        );
      });
    }
  };
  return (
    <div className="container">
      <div className="mt-5">
        <button
          type="button"
          className="btn btn-lg btn-light border border-dark position-relative"
          data-bs-toggle="modal"
          data-bs-target="#modelId"
        >
          <i className="fa-solid fa-cart-shopping" />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            ({cart.length})
          </span>
        </button>
      </div>
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header bg-light">
              <h5 className="modal-title">Gio Hang</h5>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead className="bg-dark text-white">
                  <tr>
                    <th style={{ textAlign: "center" }}>ma san pham</th>
                    <th style={{ textAlign: "center" }}>hinh anh</th>
                    <th style={{ textAlign: "center" }}>ten san pham</th>
                    <th style={{ textAlign: "center" }}>so luong</th>
                    <th style={{ textAlign: "center" }}>don gia</th>
                    <th style={{ textAlign: "center" }}>thanh tien</th>
                    <th style={{ textAlign: "center" }}></th>
                  </tr>
                </thead>
                <tbody>{renderItem()}</tbody>
              </table>
            </div>
            <div className="modal-footer bg-light">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
