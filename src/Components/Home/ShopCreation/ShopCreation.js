import React from "react";
import shopCreation from "../../../images/shop-create.png";

const ShopCreation = () => {
  return (
    <div>
      <div class="d-flex justify-content-center mt-5 pt-5">
        <img src={shopCreation} alt="" />
      </div>
      <h3 class="text-center mt-4 mb-3" style={{ fontWeight: "bold" }}>
        Shop Creation Successful
      </h3>
      <p class="text-center">
        Our riders are ready to deliver your parcel to your desired location.
        Enter information for you first <br /> parcel to be delivered thorough
        us.
      </p>
      <div class="d-flex justify-content-center">
        <button
          class="mt-3"
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "30px",
            margin: "30px 0px 0px",
            padding: "8px 25px",
            // paddingTop: "5px",
            // paddingBottom: "5px",
            // paddingLeft: "5px",
          }}
        >
          Create Parcel
        </button>
      </div>
    </div>
  );
};

export default ShopCreation;
