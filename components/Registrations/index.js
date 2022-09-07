const items = [
  { date: ['Rs 6000','Rs 6500' ], event: 'Student / Scholar' },
  { date: ['Rs 7000','Rs 7500'], event: 'Faculty / Academician' },
  { date: ['Rs 8000','Rs 8500'], event: 'Industry' },
  { date: ['$100'], event: 'Foreign ' },
  { date: ['Rs 500 / head'], event: 'Pre-Conference Workshop' },
];

export default function Registration() {
  return (
    <div className="registrationContainer" id="registration">
      <div id="Registration Details" className="importantDatesContainer">
      <h1 className="text-center">REGISTRATION DETAILS</h1>
      <p className="text-center">
        At least one author of each accepted paper must register for the
        conference and present the paper.
      </p>
      <table>
        <tr>
          <th>Participants</th>
          <th>Early Bird</th>
          <th>Late Bird</th>
        </tr>
        {items.map((item, index) => (
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
        <td colSpan="3">10% discount on registeration fees for IFIP members, IFIP TC members and IFIP working group</td>
        </tr>
      </table>

    <p className="text-center">
    * No TA and DA will be provided
  </p>
    </div>
    </div>
  );
}
