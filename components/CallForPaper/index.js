import { PAPERS } from './constants';

export default function CallForPaper() {
  return (
    <div className="callForPaperContainer" id="callforpaper">
      <div>
        <h1>
          <i>CALL FOR PAPERS</i>
        </h1>
        <br />
      </div>
      <p>
        The conference committee invites submissions of applied or theoretical
        research as well as application-oriented papers on conference theme.
        Topics include, but are not limited to the following:
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
