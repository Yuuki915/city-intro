import React from "react";
import "../css/Events.css";
import dontaku from "../images/events/dontaku.jpeg";
import hanabi from "../images/events/hanabi.jpeg";
import matsuri from "../images/events/matsuri.jpeg";
import sumou from "../images/events/sumou.jpeg";
import yamakasa from "../images/events/yamakasa.png";
import sakura from "../images/events/sakuramatsuri.jpeg";

const Events = () => {
  const eventImgs = [dontaku, hanabi, matsuri, sumou, sakura, yamakasa];
  const events = [
    { month: "Janualy", event: ["Tohka Ebisu New Year Festival"] },
    { month: "April", event: ["Sakura Festival at Fukuoka Castle"] },
    { month: "May", event: ["Hakata Dontaku"] },
    { month: "June", event: ["Kabuki at Hakataza"] },
    { month: "July", event: ["Hakata Gion Yamakasa"] },
    {
      month: "August",
      event: ["Ohori Fire Works Festival", "Chikugo River Fire Works Festival"],
    },
    { month: "September", event: ["Hojoya"] },
    {
      month: "November",
      event: ["Fukuoka Marathon", "Sumo Tournament"],
    },
    { month: "December", event: ["Fukuoka International Marathon"] },
  ];
  return (
    <div className="events">
      <h2>Events</h2>
      <div className="slider-wrapper">
        <div className="slider">
          <div className="pics">
            {eventImgs.map((img) => (
              <div className="img-div">
                <img src={img} alt="" />
              </div>
            ))}
          </div>
          <div className="pics">
            {eventImgs.map((img) => (
              <div className="img-div">
                <img src={img} alt="" />
              </div>
            ))}
          </div>
          <div className="pics">
            {eventImgs.map((img) => (
              <div className="img-div">
                <img src={img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="table">
        {events.map((item, key) => (
          <div key={key} className="event-list">
            <div className="month">{item.month}</div>
            <div className="event">
              {item.event.length > 1 ? (
                item.event.map((i, key) => <div key={key}>{i}</div>)
              ) : (
                <div>{item.event}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
