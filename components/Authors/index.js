const items = [
  { date: ['Rs 6000','Rs 6500' ], event: 'Student / Scholar' },
  { date: ['Rs 7000','Rs 7500'], event: 'Faculty / Academician' },
  { date: ['Rs 8000','Rs 8500'], event: 'Industry' },
  { date: ['$100'], event: 'Foreign ' },
  { date: ['Rs 500 / head'], event: 'Pre-Conference Workshop' },
  
  
];
export default function Authors() {
  return (
    <div className="authorsContainer" id="authors">
      <h1>
        <b>AUTHORS</b>
      </h1>
      <br />
      <h3>Paper Submission and Guidelines</h3>
      <p>
        Authors can contribute regular paper with scientific / technical
        research works, survey works and industrial experiences that include
        significant advances in field of Artificial Intelligence, Knowledge
        Engineering and IoT.  Authors should write their papers in British
        English. The paper should not exceed 15 pages including references.
        <br /><br /> The submission should be novel, plagiarism free and not
        simultaneously submitted to another conference. Submissions must include
        title, abstract, list of keywords, introduction, literature review,
        methodology, results / discussion, and conclusion. All submissions will
        be subjected to a review process by at least three
        reviewers. Authors should abide Springer’s authors’ guidelines and use
        its proceedings templates, either LaTeX or Word, for the preparation
        of manuscripts.
      </p>
      <h3>Templates</h3>
      <a href="https://icccsp.com/WordTemplates.zip" download>
        Click here For Sample Springer Paper Format in Word
      </a>
      <br />
      <a href="https://icccsp.com/LaTexTemplates.zip" download>
        Click here For Sample Springer Paper Format (LaTex Template)
      </a>
      <p>
        For more detailed guidelines, please visit{' '}
        <span>
          <a
            href="http://preview.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
            rel="noopener noreferrer"
            target="_blank"
          >
            official Springer Link
          </a>
        </span>
        <br />
      </p>
      <h3>Submission</h3>
      <p>
        The manuscript should be submitted in PDF format using the conference
        management system Easychair, in the following link: <br />
        <a
          href="https://easychair.org/conferences/?conf=icccsp2023"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://easychair.org/conferences/?conf=icccsp2023
        </a>
      </p>
      <div id="Registration Details" className="importantDatesContainer">
      <h1 className="text-center">REGISTRATION DETAILS</h1>
      <p>
        At least one author of each accepted paper must register for the
        conference indicated on the conference website and present the paper.
      </p>
      <table>
        <tr>
          <th>Participants</th>
          <th>Early Bird</th>
          <th>Late Bird</th>
        </tr>
        {items.map(item => (
          <tr key={item.event}>
            <td>{item.event}</td>
            <td>
              {item.date[0]}
              
            </td>
            <td>
              {item.date[1]}
              
            </td>
          </tr>
          
        ))}
        <tr>
        <td>10% discount on registeration fees for IFIP members</td>
        <td>
        IFIP TC members
        </td> 
        <td> IFIP working group</td>
        </tr>
      </table>
    </div>
    <p>
    * No TA and DA will be provided
  </p>
    </div>
    
  );
  
}
