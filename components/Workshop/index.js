import Image from 'next/image';
import React from 'react';

export default function Workshop() {
  return (
    <div className="workshopContainer" id="workshop">
      <h1 className="text-center">
        <b>PRE-CONFERENCE WORKSHOP</b>
      </h1>
      <div className="workshopGrid">
        <div>
          <h3>Sustainable AI</h3>
          <p>
            The primary focuses of this workshop is on recent works in
            Neuro-Symbolic AI, Multimodal data fusion and Its applications and
            Building AI Driven connected health for Next BillionPeople. The
            topic Neuro-Symbolic AI will elaborate on augmenting and combining
            the strengths of statistical AI, machine learning, symbolic
            knowledge, and reasoning. The session on Multimodal data fusion aims
            to share knowledge on data captures, integrates, and analyzes from
            different sources in a way that enables a holistic understanding of
            a learning process. The session imparts experts understanding on AI
            in Health care that builds the pathway for future medicine
          </p>
          <p>
            <b>Faculty Coordinators :</b> 1) Dr. A. Shahina , Professor, SSNCE.
            2) Dr. T. Sree Sharmila, ASP, SSNCE
          </p>
          <h4>Workshop Speaker</h4>
          <div style={{ marginTop: '20px' }}>
            <Image
              src="/WorkshopSpeakers/iot.png"
              alt="iot"
              height={200}
              width={150}
            />
          </div>
        </div>
        <div>
          <h3>IOT for Smart System</h3>
          <p>
            The Hands-on session on IoT for Smart System will integrate sensing,
            actuation, signal processing, and control in order to make decisions
            and create a smart environment . It session will encourage the
            participants to implement an IoT system using Programming Language
            from scratch. A brief discussion on Robotics and its design from our
            experts will trigger the interest to explore more real-time
            applications
          </p>
          <p>
            <b>Faculty Coordinators :</b> 1) Dr. V. Thanickachalam , ASP, SSNCE.
            2) Dr. Sofia Jennifer, ASP, SSNCE.
          </p>
          <h4>Workshop Speakers</h4>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginTop: '20px',
            }}
          >
            <Image
              src="/WorkshopSpeakers/ai1.png"
              alt="iot"
              height={200}
              width={150}
            />
            <Image
              src="/WorkshopSpeakers/ai2.png"
              alt="iot"
              height={200}
              width={150}
            />
            <Image
              src="/WorkshopSpeakers/ai3.png"
              alt="iot"
              height={200}
              width={150}
            />
          </div>
        </div>
        <div>
          <h3>
            Text analysis and Information Extraction & Retrieval (TIER 2023)
          </h3>
          <p>
            The Seventh Edition of workshop (TIER-2023) seeks to further this
            effort and foster growth and excellence in the emerging NLP
            community in India. This time, to cater the need for both fresh
            enthusiasts and experts the event is organized to begin with
            introduction to Word Embedding, Encoder-Decoder Architecture,
            Transformer models and their implementation. This workshop aims at
            meeting a growing interest in NLP among the faculty, researchers and
            students. It will give them a comprehensive overview of Text
            Analysis, IE-IR, NLP, projects/research related to the
            aforementioned, and an awareness of the tools for working with those
            tasks.
          </p>
          <p>
            <b>Convener:</b> Dr. Aravindan Chandrabose, Professor & Head, IT
            Department.
            <br />
            <b>SSNCE Faculty Coordinators:</b> Dr. D. Thenmozhi, , Dr. B.
            Senthilkumar Dr. N. Sripriya, Dr. S. Rajalakhsmi, Faculty, SSNCE
          </p>
          <p>
            <b>
              Workshop Website:{' '}
              <a href="https://sites.google.com/ssn.edu.in/tier-2023/home?authuser=0">
                TIER-2023
              </a>
            </b>
          </p>
          <h4>Workshop Speaker</h4>
          <div style={{ marginTop: '20px' }}>
            <Image
              src="/WorkshopSpeakers/mlrg.jpg"
              alt="mlrg"
              height={100}
              width={200}
            />
          </div>
        </div>
      </div>

      <div>
        <h2>Workshop Highlights</h2>
        <ul>
          <li>The workshops will be conducted in physical mode.</li>
          <li>
            Registered candidates can attend anyone workshop specified above.{' '}
          </li>
          <li>
            These workshops will provide a guideline for students, faculty
            members and research scholars who pursue their project and research
            in their respective areas.{' '}
          </li>
          <li>
            The resource persons are foreign delegates, researchers from
            renowned institutions and industry professionals.
          </li>
        </ul>
      </div>

      <div>
        <h2>Registration Fees</h2>
        <ul>
          <li>Faculty - ₹ 500</li>
          <li>Industry - ₹ 1000</li>
          <li>Research scholar - ₹ 400</li>
          <li>UG/PG Students - ₹ 300</li>
        </ul>
      </div>

      <div style={{ fontSize: '20px' }}>
        <b>Registration Link:</b>{' '}
        <a href="https://forms.gle/L2cEfRDvF3i4nS2f8">Click here</a>
      </div>

      <p style={{ fontSize: '20px' }}>
        <b>Payment:</b> Preconference Workshop and conference participation (
        for Non Authors) <a href="https://rzp.io/l/ITWorkshop">Click here</a>
      </p>

      <p style={{ fontSize: '20px', color: '#de4f45' }}>
        The fees once paid is non-refundable, The fees covers Workshop Kit,
        Participation certificate and Lunch.
      </p>
    </div>
  );
}
