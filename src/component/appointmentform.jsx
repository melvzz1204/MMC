import "../css/appointmentform.css";
import { useState } from "react";
import btnClose from "/Slide-img/close.svg";
import emailjs from "emailjs-com";
export default function AppointmentForm({ hideform, setHideForm }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [projectDetails, setProjectDetails] = useState("");

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service_vfe4qik"; // Replace with your Service ID
    const templateId = "template_xpupgts"; // Replace with your Template ID
    const userId = "TD4UUYuN65kqZRrSS"; // Replace with your User ID

    const templateParams = {
      name: name,
      email: email,
      mobile: mobile,
      date: date,
      time: time,
      projectDetails: projectDetails,
      // image: selectedImage, // You might need to handle image sending differently
    };

    emailjs.send(serviceId, templateId, templateParams, userId).then(
      (result) => {
        console.log(result.text);
        alert("Email sent successfully!");
        setHideForm(false); // Close the form after successful submission
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send email. Please try again later.");
      }
    );
  };

  return (
    <>
      {hideform && (
        <div className="backdrop">
          <div className="appointment-form">
            <div className="formBtnclose-container">
              <img
                src={btnClose}
                alt=""
                className="formBtnclose"
                onClick={() => {
                  setHideForm(false);
                }}
              />
            </div>
            <form onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Mobile no."
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
              <textarea
                placeholder="Tell us about your project"
                value={projectDetails}
                onChange={(e) => setProjectDetails(e.target.value)}
                required
              />
              {/* Image upload here */}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Uploaded"
                  style={{ maxWidth: "100px", marginTop: "10px" }}
                />
              )}
              <button type="submit" name="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
