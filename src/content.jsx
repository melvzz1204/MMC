import "./css/content.css";
import Content from "./json/content.json";
import CardProject from "./CardProject";

export default function content() {
  console.log(content);
  return (
    <>
      <div className="main-content-container">
        <h1 className="content-title-head">
          Dream it and we build it together
        </h1>
        <button className="primary-btn btn-content">Request Appointment</button>
      </div>
      {Content.map((item) => (
          <CardProject
          key={item.id}
          images={item.images}          
          title={item.title}    
          paragraph={item.paragraph}      
          />
        ))}
      </ >    
  );
}
