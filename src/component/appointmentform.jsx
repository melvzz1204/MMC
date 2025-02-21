import "../css/appointmentForm.css";
import { useState } from "react";

export default function AppointmentForm() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className="appointment-form">
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Mobile no." />
      <input type="date" />
      <input type="time" />
      <textarea
        name=""
        id=""
        placeholder="Tell us about your project"
      ></textarea>
      {/* Image upload here */}
      <input type="file" accept="image/*" onChange={handleImageChange} />
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
    </div>
  );
}
