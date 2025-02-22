import "./css/content.css";
import Content from "./json/content.json";
import CardProject from "./CardProject";
import { useState } from "react";
import AppointmentForm from "./component/appointmentform";

export default function content() {
  const [hideform, setHideForm] = useState(false);
  return (
    <>
      <div className="main-content-container">
        <h1 className="content-title-head">
          Dream it and we build it together
        </h1>
        <button
          className="primary-btn btn-content"
          onClick={() => {
            setHideForm(!hideform);
          }}
        >
          Request Appointment
        </button>
      </div>
      {Content.map((item) => (
        <CardProject
          key={item.id}
          images={item.images}
          title={item.title}
          paragraph={item.paragraph}
        />
      ))}
      <AppointmentForm hideform={hideform} setHideForm={setHideForm} />
    </>
  );
}
