import React from "react";
import ProductItem from "./ProductItem";
const data = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "iphoneX",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/sp_iphoneX.png",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];
export default function ProductList({addToCart}) {
  let [item, setItem] = React.useState({
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  });
  let renderItem = () =>
    data.map((prod, index) => {
      return (
        <div key={index} className="col-4">
          <ProductItem prod={prod} detail={detail} addToCart = {addToCart}/>
        </div>
      );
    });
  let detail = (itemCLick) => {
    setItem((preItem) => (preItem = itemCLick));
  };
  return (
    <div className="container">
      <div className="row mt-5">{renderItem()}</div>
      <div className="mt-5">
        <h3 className="text-center ">Thong so ky thuat</h3>
        <div className="row mt-5">
          <div className="col-6">
            <img height={400} src={item.hinhAnh} alt="" />
          </div>
          <div className="col-6">
            <div className="table">
              <tbody>
                <tr>
                  <th>Man hinh</th>
                  <th>{item.manHinh}</th>
                </tr>
                <tr>
                  <th>He dieu hanh</th>
                  <th>{item.heDieuHanh}</th>
                </tr>
                <tr>
                  <th>Camera truoc</th>
                  <th>{item.cameraTruoc}</th>
                </tr>
                <tr>
                  <th>Camera sau</th>
                  <th>{item.cameraSau}</th>
                </tr>
                <tr>
                  <th>Ram</th>
                  <th>{item.ram}</th>
                </tr>
                <tr>
                  <th>Rom</th>
                  <th>{item.rom}</th>
                </tr>
                <tr>
                  <th>Gia ban</th>
                  <th>{item.giaBan}</th>
                </tr>
              </tbody>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
