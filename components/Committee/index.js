import {
  programCommittee,
  advisoryCommittee,
  organizingCommittee,
} from './constants';
export default function Committee() {
  return (
    <div className="committeeContainer" id="committee">
      <div className="container cssStyles mt-5 pt-5 pb-5" id="committee">
        <h1 style={{ margin: 0 }}>COMMITTEE</h1>
        <div className="section-wrapper">
          <h1>ADVISORY COMMITTEE</h1>
          <div className="row cards-wrapper">
            {advisoryCommittee.map(item => (
              <div className="card advisory" key={item.name}>
                <img src={item.image} alt="Card image cap" />
                <div className="card-body">
                  <h1 className="card-title">{item.name}</h1>
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
          <div className="row cards-wrapper">
            {programCommittee.map(item => (
              <div className="card" key={item.name}>
                <img src={item.image} alt="Card image cap" />
                <div className="card-body">
                  <h1 className="card-title">{item.name}</h1>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="section-wrapper">
          <h1>
            <b>ORGANIZING COMMITTEE</b>
          </h1>
          <div className="row cards-wrapper">
            {organizingCommittee.map(item => (
              <div className="card" key={item.name}>
                <img src={item.image} alt="Card image cap" />
                <div className="card-body">
                  <h1 className="card-title">{item.name}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
