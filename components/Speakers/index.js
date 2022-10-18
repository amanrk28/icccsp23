import { SPEAKERS } from './constants';
import Image from 'next/image'

export default function Speakers() {
  return (
    <div className="speakersContainer" id="speakers">
      <h1>
        <b>INVITED TALKS</b>
      </h1>
      <br />
      <div className="talk-sponsors">
        <h1 className="text-center animate__animated animate__infinite animate__slow animate__heartBeat" style={{ color: '#d11', fontSize: 32, fontWeight: 600 }}>Technical Talk Sponsors</h1>
        <div className="sponsor-images">
          <Image width={318} height={159} src="https://icccsp.com/img/ibm.png" alt="IBM" />
          <Image width={355} height={142} src="https://icccsp.com/img/honeywell.png" alt="Honeywell" />
          {/* <Image width={200} height={160} src="https://icccsp.com/img/riken.jpeg" alt="Riken" /> */}
        </div>
      </div>
      <div className="section-wrapper">
        <div className="aboutus-row cards-wrapper">
          {SPEAKERS.map(item => (
            <a
              key={item.name}
              href={item.profile}
              target="_blank"
              rel="noreferrer noopener"
              className="card-item"
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
