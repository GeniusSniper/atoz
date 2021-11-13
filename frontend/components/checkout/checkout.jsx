import React from "react";

function Checkout() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        margin: "10px",
      }}
    >
      <div style={{ fontSize: "24px", fontWeight: "700" }}>
        This page is currently in development
      </div>
      <div>
        <img
          src="https://atoz-seeds.s3.us-east-2.amazonaws.com/mining.png"
          alt="image not Found"
        />
      </div>
    </div>
  );
}

export default Checkout;
