export default function HomeSection() {
  return (
    <div id="home" className="homeContainer">
      <h1 className="event-name">ICCCSP 2023</h1>
      <h1>
        7<sup>th</sup> International Conference on Computer, Communication and
        Signal Processing
      </h1>
      <h1>January 4 – 6 , 2023</h1>
      <p className="textContents">
        <span style={{ fontWeight: 500 }}>Special Focus on</span>
        <br />
        <br />
        <b style={{ lineHeight: '40px' }}>
          AI, Knowledge Engineering and IoT for Smart Systems
        </b>
      </p>
      <div className="items">
        <div className="home-img">
          <img
            src="https://icccsp.com/img/ifip.jpeg"
            alt="Springer"
            height={118}
          />
          <h1 className="ifip" style={{ color: 'white' }}>
            IFIP Event Number: <span>04695</span>
          </h1>
        </div>
        <div className="address">
          <div style={{ fontSize: '24px', textAlign: 'center' }}>
            Department of Information Technology
          </div>{' '}
          <h1
            style={{ fontWeight: 800, margin: '5px 0 5px 0', fontSize: '30' }}
          >
            SSN College of Engineering
          </h1>{' '}
          <div style={{ fontSize: '15px', textAlign: 'center' }}>
            Rajiv Gandhi Salai, Kalavakkam - 603 110{' '}
          </div>
          <div style={{ fontSize: '17px', textAlign: 'center' }}>
            {' '}
            Chennai, Tamilnadu, India.
          </div>
        </div>
        <div className="home-img">
          <img
            src="https://icccsp.com/img/springer.jpeg"
            alt="Springer"
            width={320}
            height={118}
          />
          <p className="subtext">
            IFIP AICT series <br />{' '}
            <span className="animate__animated animate__flash animate__slower animate__infinite">
              {' '}
              (Approved)
            </span>
          </p>
        </div>
      </div>

      <h3 style={{ textAlign: 'center' }}>
        <span className="animate__animated animate__flash animate__slower animate__infinite">
          Scopus indexed publication in IFIP AICT SPRINGER SERIES
        </span>
      </h3>
      {/* <div className="btnContainer">
        <button>Brochure</button>
        <button>Paper Submission</button>
        <button>Conference Registration</button>
        <button>Schedule</button>
        <button>Pre-Conference Workshop and Registration</button>
      </div> */}
    </div>
  );
}
