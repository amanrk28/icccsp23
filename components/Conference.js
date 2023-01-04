import Image from 'next/image';
import React from 'react';
import AboutUs from './AboutUs';

export default function Conference() {
  return (
    <>
      <div className="confContainer" id="conference">
        <h1 className="text-center">
          <b>ABOUT ICCCSP 2023</b>
        </h1>
        <div className="aboutus-row">
          <div style={{ flexDirection: 'column' }}>
            <img
              src="https://icccsp.com/img/ifip.jpeg"
              alt="IFIP"
              height={118}
            />
            <h2 className="text-center">Event number: 04695</h2>
          </div>

          <div style={{ flexDirection: 'column' }}>
            <img
              src="https://icccsp.com/img/springer.jpeg"
              alt="Springer"
              width={320}
              height={118}
            />
            <h2 className="text-center ifip-text">
              IFIP AICT Series
              <span className="animate__animated animate__flash animate__slower animate__infinite">
                {' '}
                (Approved)
              </span>
            </h2>
          </div>

          <div style={{ flexDirection: 'column' }}>
            <Image
              src="/Sathiyam New Logo 2015.png"
              width={140}
              height={200}
              alt="Sathiyam Logo"
            />
            <h4 className="text-center" style={{ color: 'black' }}>
              Media Partner
            </h4>
          </div>
        </div>
        <p>
          The 7th International Conference on Computer, Communication and Signal
          Processing 2023 (ICCCSP &apos;23) has been planned to highlight the
          rapidly developing technologies related to Artificial Intelligence
          (AI), Knowledge Engineering and IoT for Smart Systems. The conference
          will provide a premier interdisciplinary platform for researchers,
          practitioners, and educators to present and discuss the most recent
          innovations, trends, and concerns encountered and solutions adopted in
          the fields of AI , Knowledge engineering and IoT for smart systems.
          The conference has been designed to bring a unique opportunity to gain
          fresh insights through knowledge exchange on the convergence between
          the AI and IoT communities. With the domain of AI, IoT and Knowledge
          Engineering ever more dominant now and providing fresh perspective and
          outlook towards the problem, this conference aids in bringing about
          the eminent scholars together in providing the best solution. Since
          2017, the ICCCSP conference series is Technically Co-Sponsored by IEEE
          Society and for the 2021 edition, we have got approval from Springer -
          International Federation for Information Processing (IFIP).
        </p>
        <h2>
          International Federation for Information Processing( IFIP) our
          supporter
        </h2>
        <h3 style={{ marginTop: '20px' }}>
          <a href="https://ifip.org/">IFIP TC12 - Artificial Intelligence</a>
        </h3>
        <p>
          AI is one of the oldest and most exciting subfields of computing,
          covering such areas as intelligent robotics, intelligent planning and
          scheduling, model-based reasoning, fault diagnosis, natural language
          processing, machine translation, knowledge representation and
          reasoning, knowledge- based systems, knowledge engineering,
          intelligent agents, machine learning, neural nets, genetic algorithms
          and knowledge management. TC12 was formed back in 1989. It now has
          members representing 33 national computer societies, together with
          representatives of the ACM and the IEEE, and has several working
          groups covering major topics in AI. <br /> In recent years, TC12 and
          its Working Groups have sponsored or co-sponsored a range of events
          worldwide. Details of some of these are given on this website. It has
          also made major contributions to recent IFIP World Computer
          Congresses. <br />
          ICCCSP 2023 is proud in associating with TC12, our respect to The
          chair of TC12 <br />
          <i>Professor Eunika Mercier-Laurent</i>
        </p>
        <a href="https://www.youtube.com/watch?v=w_ORl9mLH0U">
          <b>
            IFIP - Leading Professional & Socially Responsible ICT Worldwide
            (https://www.youtube.com/watch?v=w_ORl9mLH0U)
          </b>
        </a>
        <br />
        <br />
        <AboutUs />
      </div>
    </>
  );
}
