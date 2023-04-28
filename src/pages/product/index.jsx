import 오늘의집스샷 from "../../오늘의집스샷.png";
import React from "react";

const ProductPage = ({productId}) => {
  return (
    <div>
      <div>
        <h1>인생마린의 쇼핑몰</h1>
        <div>
          ㅇㄴㄹㅇㄹㅇㄴ
          <img
            alt="쇼핑몰스샷"
            src={오늘의집스샷}
            style={{
              width: "65%",
              height: "80vh",
            }}
          ></img>
        </div>
      </div>
      <iframe
        src={`https://localhost:3000/review/write?productId=${window.location.href}`}
        width="100%"
        height="700px"
      ></iframe>
    </div>
  );
};

export default ProductPage;
