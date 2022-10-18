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
        <h1><b>ADVISORY COMMITTEE</b></h1>
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
      <div className="section-wrapper">
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
      </div>
    </div>
  );
}
