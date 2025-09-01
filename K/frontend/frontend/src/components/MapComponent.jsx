import React from "react";

export default function MapComponent() {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Event Location</h3>
      <iframe
        title="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.875183588623!2d85.816374!3d20.353315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a74144a9f4d3%3A0xd0f8aefea8b20b45!2sKIIT%20University!5e0!3m2!1sen!2sin!4v1633072800000!5m2!1sen!2sin"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}
