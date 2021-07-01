import React, { useEffect, useState } from "react";
import axios from "../../services/axios";

const HomeNews = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios.get("/approvednews").then((res) => {
      console.log(res.data.result);
      setNews(res.data.result);
    });
  }, []);
  return (
    <div className="topspeakercontainer">
      <div className="speakers">
        <div className="container mt-2" style={{ border: "1px solid black" }}>
          <center>
            <h1 style={{ fontSize: "1.5rem" }}>News Feed</h1>
          </center>
        </div>
        <div className="container mt-2" style={{ border: "1px solid black" }}>
          <center>
            <div className="container">
              <div>
                <div>
                  {news.map((news, index) => (
                    <div
                      key={index}
                      className="card mb-2"
                      style={{ width: "50%" }}
                    >
                      <div className="p-3">
                        <h3>{news.title}</h3>
                        <p>{news.description}</p>
                        <img src={news.imgURL} width="500" height="600" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default HomeNews;
