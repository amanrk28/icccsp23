import {
  programCommittee,
  advisoryCommittee,
  organizingCommittee,
  registrationCommittee,
  hospitalityCommittee,
  transportCommittee as logisticsCommittee,
  financeCommittee as sponsorCommittee,
  photographyCommittee,
} from './constants';
export default function Committee() {
  return (
    <div className="committeeContainer" id="committee">
      <div className="section-wrapper">
        <h1>
          <b>ADVISORY COMMITTEE</b>
        </h1>
        <div className="aboutus-row cards-wrapper">
          {advisoryCommittee.map(item => (
            <div className="card-item advisory" key={item.name}>
              <img src={item.image} alt="Card image cap" loading="lazy" />
              <div className="card-body">
                <h1 className="card-title">{item.name}</h1>
                <p className="card-text">{item.title}</p>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-wrapper">
        <h1>
          <b>PROGRAM COMMITTEE</b>
        </h1>
        <div className="aboutus-row cards-wrapper">
          {programCommittee.map(item => (
            <div className="card-item" key={item.name}>
              <img src={item.image} alt="Card image cap" loading="lazy" />
              <div className="card-body">
                <h1 className="card-title">{item.name}</h1>
                <p className="card-text">{item.title}</p>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="section-wrapper">
        <h1>
          <b>CONVENOR</b>
        </h1>
        <div className="aboutus-row cards-wrapper">
          {convener.map(item => (
            <div className="card-item" key={item.name}>
              <img src={item.image} alt="Card image cap" loading="lazy" />
              <div className="card-body">
                <h1 className="card-title">{item.name}</h1>
                <p className="card-text">{item.title}</p>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div className="section-wrapper">
        <h1>
          <b>ORGANIZING COMMITTEE</b>
        </h1>
        <div className="aboutus-row cards-wrapper">
          {organizingCommittee.map(item => (
            <div className="card-item" key={item.name}>
              <img src={item.image} alt="Card image cap" loading="lazy" />
              <div className="card-body">
                <h1 className="card-title">{item.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-wrapper grid-container">
        <div>
          <h2 style={{ color: '#0765b0' }}>
            <b>
              SESSION MANAGEMENT <br /> COMMITTEE
            </b>
          </h2>
          <div style={{ fontSize: '25px', marginTop: '10px' }} className="flex">
            <div>T. Sree Sharmila </div>
            <div>S. Chithra </div>
            <div>N. Bhalaji </div>
            <div>S. Karthika </div>
            <div>S. Mohanavalli </div>
          </div>
        </div>
        <div >
          <h2 style={{ color: '#0765b0', textTransform: 'uppercase' }}>
            <b>Registration Committee</b>
          </h2>

          <div style={{ fontSize: '25px', marginTop: '10px' }}>
            <div>P. Vasuki </div>
            <div>N. Sripriya </div>
            <div>I. Joe Louis Paul </div>
            <div>V. Thanikachalam </div>
            <div>S.Sasirekha </div>
            <div>N. Radha </div>
          </div>
        </div>
        <div>
          <h2
            style={{
              color: '#0765b0',
              textTransform: 'uppercase',
            }}
          >
            <b>Hospitality Committee</b>
          </h2>
          <div style={{ fontSize: '25px', marginTop: '10px' }} className="flex">
            <div>R. Swathika </div>
            <div>S. Uma Maheswari </div>
            <div>J. Sofia Jennifer </div>
            <div>E. Suganya </div>
          </div>
        </div>
        <div>
          <h2
            style={{
              color: '#0765b0',
              textTransform: 'uppercase',
            }}
          >
            <b>
              Logistics & Photography <br /> Committee
            </b>
          </h2>
          <div style={{ fontSize: '25px', marginTop: '10px' }} className="flex">
            <div>A. Sandana Karuppan </div>
            <div>V. Arul Kumar </div>
            <div>K. Kabilan </div>
            <div>Ashwinth Janarthanan </div>
            <div>B. Sendhil Kumar </div>
          </div>
        </div>
      </div>
      {/* <div className="section-wrapper">
        <h1>
          <b>SPONSOR COMMITTEE</b>
        </h1>
        <div className="aboutus-row cards-wrapper">
          {sponsorCommittee.map(item => (
            <div className="card-item" key={item.name}>
              <img src={item.image} alt="Card image cap" loading="lazy" />
              <div className="card-body">
                <h1 className="card-title">{item.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-wrapper">
        <h1>
          <b>REGISTRATION COMMITTEE</b>
        </h1>
        <div className="aboutus-row cards-wrapper">
          {registrationCommittee.map(item => (
            <div className="card-item" key={item.name}>
              <img src={item.image} alt="Card image cap" loading="lazy" />
              <div className="card-body">
                <h1 className="card-title">{item.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-wrapper">
        <h1>
          <b>LOGISTICS COMMITTEE</b>
        </h1>
        <div className="aboutus-row cards-wrapper">
          {logisticsCommittee.map(item => (
            <div className="card-item" key={item.name}>
              <img src={item.image} alt="Card image cap" loading="lazy" />
              <div className="card-body">
                <h1 className="card-title">{item.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-wrapper">
        <h1>
          <b>HOSPITALITY COMMITTEE</b>
        </h1>
        <div className="aboutus-row cards-wrapper">
          {hospitalityCommittee.map(item => (
            <div className="card-item" key={item.name}>
              <img src={item.image} alt="Card image cap" loading="lazy" />
              <div className="card-body">
                <h1 className="card-title">{item.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-wrapper">
        <h1>
          <b>PHOTOGRAPHY COMMITTEE</b>
        </h1>
        <div className="aboutus-row cards-wrapper">
          {photographyCommittee.map(item => (
            <div className="card-item" key={item.name}>
              <img src={item.image} alt="Card image cap" loading="lazy" />
              <div className="card-body">
                <h1 className="card-title">{item.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
