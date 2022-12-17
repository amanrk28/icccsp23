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
            The primary focus of this workshop is on the recent trends on
            neuro-symbolic AI, Multimodal data fusion and AI driven health care
            system. The session on neurosymbolic AI is about combining the
            strength of statistical AI, symbolic AI and reasoning. The session
            on multimodal data fusion will give an insight on data capturing,
            integration and analysis of data from different sources that enables
            a holistic understanding of a learning process. The AI driven health
            care brings an industrial experts’ working experience with AI based
            health care system that builds the pathway for future medicine.
          </p>
          <p>
            <b>Faculty Coordinators :</b> Dr. A. Shahina , Professor, Dr. T.
            Sree Sharmila, Associate Professor, SSNCE.
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
            The hands-on session on IoT for smart system will integrate sensing,
            actuation, signal processing, and control in order to make decisions
            and create a smart environment . The session will encourage the
            participants to implement an IoT system using programming language
            from scratch. A brief discussion on robotics and its design from our
            experts will trigger the interest to explore more real-time
            applications.
          </p>
          <p>
            <b>Faculty Coordinators :</b> Dr. V. Thanikachalam, Associate
            Professor, Dr. Sofia Jennifer, Assistant Professor, SSNCE.
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
            The Seventh Edition of workshop (TIER-2023) seeks to foster growth
            and excellence in the emerging NLP community in India. This time.
            the theme of the workshop is “Dialogue Systems” inspired by ChatGPT,
            conversational AI system that is recently released by OpenAI. A
            dialogue system or conversational agent is a computer system
            intended to converse with a human. ChatGPT is based on GPT-3
            language model that can generate responses on the fly, allowing it
            to have more dynamic and varied conversation. This workshop includes
            talks by experts on current trends in dialogue systems, GPT
            architecture and a hands-on session on sentence generation using
            GPT.
          </p>
          <p>
            <b>Faculty Coordinators:</b> Dr. C. Aravindan, Dr. D. Thenmozhi, Dr.
            B. Senthilkumar, Dr.N. Sripriya, Dr. S. Rajalakhsmi, MLRG, SSNCE
          </p>
          <p>
            <b>
              Workshop Website:{' '}
              <a href="https://sites.google.com/ssn.edu.in/tier-2023/home?authuser=0">
                TIER-2023
              </a>
            </b>
          </p>
          <h4>Workshop Speakers</h4>
          <div
            style={{
              marginTop: '20px',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            <p style={{ textAlign: 'center' }}>
              1. Ms. S. Sangeetha, NIT, Trichy, India
            </p>
            <p style={{ textAlign: 'center' }}>
              2. Mr. M. Selvakumar, Saama Technologies
            </p>
            <p style={{ textAlign: 'center' }}>
              3. Dr. D. Thenmozhi & Dr. N. Sripriya, SSNCE
            </p>
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
