import React from 'react';
import AboutUs from './AboutUs';

export default function Conference() {
  return (
    <>
      <div className="confContainer" id="conference">
        <h1 className="text-center"><b>ABOUT ICCCSP 2023</b></h1>
        <div className="aboutus-row">
          <div style={{ flexDirection: 'column' }}>
            <img src="https://icccsp.com/img/ifip.jpeg" alt="IFIP" height={118} />
            <h2 className="text-center">Event number: 04695</h2>
          </div>
          <div style={{ flexDirection: 'column' }}>
            <img src="https://icccsp.com/img/springer.jpeg" alt="Springer" width={320} height={118} />

            <h2 className="text-center ifip-text">IFIP AICT Series
              <span className="animate__animated animate__flash animate__slower animate__infinite"> (Approved)</span></h2>
          </div>
        </div>
        <p>
          The 7th International Conference on Computer, Communication and Signal
          Processing 2023 (ICCCSP &apos;23) has been planned to highlight the
          rapidly developing technologies related to Artificial Intelligence (AI),
          Knowledge Engineering and IoT for Smart Systems. The conference will
          provide a premier interdisciplinary platform for researchers,
          practitioners, and educators to present and discuss the most recent
          innovations, trends, and concerns encountered and solutions adopted in
          the fields of AI , Knowledge engineering and IoT for smart systems. The
          conference has been designed to bring a unique opportunity to gain fresh
          insights through knowledge exchange on the convergence between the AI
          and IoT communities. With the domain of AI, IoT and Knowledge
          Engineering ever more dominant now and providing fresh perspective and
          outlook towards the problem, this conference aids in bringing about the
          eminent scholars together in providing the best solution. Since 2017,
          the ICCCSP conference series is Technically Co-Sponsored by IEEE Society
          and for the 2021 edition, we have got approval from Springer -
          International Federation for Information Processing (IFIP).
        </p>
      </div>
      <AboutUs />
    </>
  );
}
