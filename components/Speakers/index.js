import { SPEAKERS } from './constants';

export default function Speakers() {
  return (
    <div className="speakersContainer" id="speakers">
      <h1>
        <b>SPEAKERS</b>
      </h1>
      <br />
      <div className="section-wrapper">
        <div className="row cards-wrapper">
          {SPEAKERS.map(item => (
            <a
              key={item.name}
              href={item.profile}
              target="_blank"
              rel="noreferrer noopener"
              className="card"
            >
              <img src={item.image} alt="Card image cap" loading="lazy" />
              <div className="card-body">
                <h1 className="card-title">{item.name}</h1>
                <p className="card-text">{item.designation}</p>
                <p className="card-text">{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
