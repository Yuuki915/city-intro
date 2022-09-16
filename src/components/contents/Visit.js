import React, { useEffect, useState } from "react";
import "../css/Visit.css";
import tower from "../images/visit/tower.jpeg";
import dazaifu from "../images/visit/dazaifu.jpeg";
import useContentful from "../../useContentful";

const Visit = () => {
  const { getVisit } = useContentful();
  const [visit, setVisit] = useState([]);

  useEffect(() => {
    getVisit().then((res) => setVisit(res));
  }, []);

  return (
    <div className="visit">
      <h2>Visit</h2>
      <div className="v-bg"></div>

      <div className="v1">
        <div className="place1">
          <div className="p1-img">
            <img src={tower} alt="" />
          </div>
          <div className="p-texts">
            <p className="p-name">Fukuoka Tower</p>
            <p className="p-desc">
              Symbol of Fukuoka <br />
              Height : 234 m
            </p>
          </div>
        </div>

        <div className="place2">
          <div className="p2-img">
            <img src={dazaifu} alt="" />
          </div>
          <div className="p-texts">
            <p className="p-name">Dazaifu Tenmangu</p>
          </div>
        </div>
      </div>

      <div className="v2">
        {visit.map((item, key) => (
          <div key={key} className="content">
            <div className="moji2">
              <p className="p3">{item.visitName}</p>
            </div>
            <div className="img3">
              <img src={item.visitImg.file.url} alt={item.visitImg.titl} />
            </div>
          </div>
        ))}
      </div>
      <div className="haikei2"></div>
    </div>
  );
};

export default Visit;
