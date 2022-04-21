import React from 'react';

export default function Contact() {
  return (
    <div id="contact" className="contactContainer">
      <h1 className="text-center">CONTACT US</h1>
      <div className="contactDetails">
        <p style={{ fontSize: '24px', fontWeight: 600 }}>Address</p>
        <p>The Head of Department</p>
        <p>Department of Information Technology</p>
        <p>SSN College of Engineering,</p>
        <p>Kalavakkam - 603110</p>
        <p style={{ fontSize: '24px', fontWeight: 600 }}>
          For further queries, please write to{' '}
        </p>
        <a href="mailto:icccsp@it.ssn.edu.in">icccsp@it.ssn.edu.in</a>
      </div>
    </div>
  );
}
