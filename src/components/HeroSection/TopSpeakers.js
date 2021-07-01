import React, { useEffect, useState } from "react";
import SlideShow from "../Admin/SlideShow/SlideShow";
import axios from "../../services/axios";
import "./TopSpeaker.css";

const TopSpeakers = () => {
  const [speakers, setSpeakers] = useState([]);
  useEffect(async () => {
    await axios.get("/keynotespeakers").then((response) => {
      setSpeakers(response.data.result);
    });
  }, []);
  console.log(speakers);
  return (
    <div className="topspeakercontainer">
      <div className="speakers">
        <div className="container mt-2" style={{ border: "1px solid black" }}>
          <center>
            <h1 style={{ fontSize: "1.5rem" }}>Keynote Speakers</h1>
          </center>
        </div>
        <div className="container mt-2" style={{ border: "1px solid black" }}>
          <>
            {speakers.length && (
              <SlideShow
                slideData={speakers}
                slideTitle={"Speakers"}
                type={"approved"}
              />
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default TopSpeakers;
