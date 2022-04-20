export default function HomeSection() {
  return (
    <div id="home" className="homeContainer">
      <h1>ICCCSP 2023</h1>
      <h1 style={{ fontSize: '30px' }}>
        <b>
          7<sup>th</sup> International Conference on Computer, Communication and
          Signal Processing <br /> January 4 – 5 , 2023
        </b>
      </h1>
      <p className="textContents">
        Special Focus on
        <br />
        <br />
        <b>AI, Knowledge Engineering and IoT for Smart Systems</b>
      </p>
      <h1>IFIP Event Number: Waiting for Approval</h1>
      <h1>
        Department of Information Technology <br /> SSN College of Engineering{' '}
        <br /> Rajiv Gandhi Salai, Kalavakkam - 603 110 <br /> Chennai,
        Tamilnadu, India.
      </h1>
      <div className="btnContainer">
        <button>Brochure</button>
        <button>Paper Submission</button>
        <button>Conference Registration</button>
        <button>Schedule</button>
        <button>Pre-Conference Workshop and Registration</button>
      </div>
    </div>
  );
}
