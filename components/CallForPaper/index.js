import { PAPERS } from './constants';

export default function CallForPaper() {
  return (
    <div className="callForPaperContainer" id="callforpaper">
      <div>
        <h1><b>TOPICS OF INTEREST</b></h1>
        <br />
      </div>
      <p style={{ textAlign: 'center' }}>
        The conference committee invites submissions of manuscripts on
        conference theme which includes but are not limited to the following
        topics:
      </p>
      <div className="papersList-wrapper">
        {PAPERS.map(paper => (
          <div className="paperList" key={paper.title}>
            <h1>{paper.title}</h1>
            <ul>
              {paper.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
