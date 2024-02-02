import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="m-3 border" style={{ width: "280px" }}>
      <div
        className="d-flex justify-content-center"
        style={{ width: "280px", height: "250px", }}
      >
        <img
          src={item.images[0]}
          alt=""
          style={{ objectFit: "contain" }}
          className="p-2"
          width={200}
        />
        <span
          className="position-relative"
          style={{ top: "3px", right: "-25px" }}
        >
          <a href="" className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bookmark-fill"
              style={{ color: "rgb(224 224 224)" }}
              viewBox="0 0 16 16"
            >
              <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
            </svg>
          </a>
        </span>
      </div>
      <div className="d-flex justify-content-end ">
        <span
          className=" mx-3 px-1 rounded fw-medium"
          style={{ fontSize: "11px", }}
        >
          {item.rating}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="currentColor"
            className="bi bi-star-fill text-success ms-1 mb-1"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>{" "}
          {"| " + item.stock}
        </span>
      </div>
      <div className="" style={{backgroundColor: "rgb(243 245 255)"}} >
        <div className="fw-bold m-2">{item.brand}</div>
        <div className="fs-6 p-2 d-flex flex-wrap">{item.title}</div>
      </div>
      <div className="py-2" style={{backgroundColor: "rgb(243 245 255)"}}>
        <span className="fw-semibold m-2">
          {"$" +
            Math.floor(
              Math.round(
                item.price - (item.discountPercentage / 100) * item.price
              )
            )}
        </span>
        <span
          className="fw-medium text-decoration-line-through"
          style={{ color: "grey" }}
        >
          {"$" + item.price}
        </span>
        <span className=" text-success fw-medium ms-2 ">
          {item.discountPercentage}% off
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
