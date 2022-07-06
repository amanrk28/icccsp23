const items = [
  { date: ['20', 'th', ' June 2022'], event: 'Paper Submission Opens from' },
  { date: ['10', 'th', ' Sep 2022'], event: 'Paper Submission Deadline' },
  { date: ['15', 'th', ' Oct 2022'], event: 'Acceptance Notification' },
  { date: ['15', 'th', ' Nov 2022'], event: 'Early Bird Registration' },
  { date: ['30', 'th', ' Nov 2022'], event: 'Camera-ready Copy Submission' },
  { date: ['4', 'th', ' Jan 2023'], event: 'Pre-Conference Workshop' },
  { date: ['5 - 6', 'th', ' Jan 2023'], event: 'Conference ' },
];

export default function ImportantDates() {
  return (
    <div id="important_dates" className="importantDatesContainer">
      <h1 className="text-center">IMPORTANT DATES</h1>
      <table>
        <tr>
          <th>EVENT</th>
          <th>Date</th>
        </tr>
        {items.map(item => (
          <tr key={item.event}>
            <td>{item.event}</td>
            <td>
              {item.date[0]}
              <sup>{item.date[1]}</sup>
              {item.date[2]}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
