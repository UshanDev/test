import React from "react";

const NewsCard = ({ title, description, imgURL, id }) => {
  const btnHandler = () => {
    alert(id);
  };
  return (
    <div className="">
      <div className="card" style={{ borderRadius: "20px" }}>
        <img
          src={imgURL}
          className="card-img-top"
          alt="..."
          style={{
            objectFit: "cover",
            height: "200px",
            borderRadius: "20px",
            border: "1px solid black",
          }}
        />
        <center>
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p
              className="card-text"
              style={{ color: "black", fontWeight: "600" }}
            >
              {description}
            </p>
          </div>
        </center>
      </div>
    </div>
  );
};

export default NewsCard;
