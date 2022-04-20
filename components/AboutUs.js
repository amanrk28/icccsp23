import React from 'react';

export default function AboutUs() {
  return (
    <div id="about-us" className="aboutContainer">
      <h1 className="text-center">
        <b>ABOUT US</b>
      </h1>
      <br />
      <div className="row">
        <div className="col-lg-8 col-sm-12 col-md-12 col-12">
          <h1>
            <b>About College</b>
          </h1>
          <p>
            Sri Sivasubramaniya Nadar (SSN), founded by Padma Bhushan Dr. Shiv
            Nadar, Chairman, HCL Technologies, stands out as a premier center of
            higher learning with a mission of pursuing excellence in education
            and research. The institutions, with their diverse and dynamic
            community of students offer a distinctive combination of some of the
            finest graduate, undergraduate and research programs, accomplished
            faculty, world class facilities and a residential campus set on a
            sprawling 250 acres of sylvan surroundings. SSN Institutions provide
            a variety of stimulating environments for intellectual development,
            free thinking, and personal growth, challenging its students with
            dynamic learning opportunities and equipping them with the skills,
            insights, attitudes and practical experiences that are necessary to
            take up responsibilities in the society.
          </p>
        </div>
        <div className="imgContainer">
          <img src="Ssn1.jpg" alt="ssn1" />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-lg-8 col-sm-12 col-md-12 col-12">
          <h1>
            <b>About IT Department</b>
          </h1>
          <p>
            The Department of Information Technology was established in the year
            1999. Our Mission is to provide quality education to the students
            and impart IT excellence in them. Apart from making them good
            technocrats, we also provide individual attention to make them good
            citizens of our nation to serve the industry and society
            constructively. Drawing upon SSNCE’s tradition of teaching
            excellence, the department with 30 faculty members and 480/600
            students of UG, PG, PhD research scholars, JRF and Project Staff
            work closely together in an open, collegial atmosphere. The
            department places equal emphasis on theoretical and experimental
            Information Technology. The department has state-of-art facilities
            in various labs, a well-equipped seminar hall and a conference room,
            classrooms to support e-learning and a department library. The
            department is Accredited by NBA for the second consecutive term for
            5 years for the period 2015-2020.
          </p>
        </div>
        <div className="imgContainer">
          <img src="bg.png" width="90%" alt="ssn2" />
        </div>
      </div>
    </div>
  );
}
