import { Chrono } from 'react-chrono';

const items = [
  { title: 'TBA', cardTitle: 'Paper Submission Deadline' },
  { title: 'TBA', cardTitle: 'Acceptance Notification' },
  { title: 'TBA', cardTitle: 'Camera-ready Copy Submission' },
  { title: 'TBA', cardTitle: 'Last Date for Registration' },
  { title: '4th Jan, 2023', cardTitle: 'Pre-Conference Workshop' },
  { title: '5th-6th Jan, 2023', cardTitle: 'Conference ' },
];

export default function ImportantDates() {
  return (
    <div id="important_dates" className="importantDatesContainer">
      <h1 className="text-center">IMPORTANT DATES</h1>
      <div style={{ maxWidth: '600px', margin: 'auto' }}>
        <Chrono
          items={items}
          mode="VERTICAL"
          hideControls
          cardWidth={280}
          flipLayout
          disableClickOnCircle
          activeItemIndex={-1}
          theme={{
            cardForeColor: '#444',
            primary: '#4338ca',
            secondary: 'white',
          }}
        />
      </div>
    </div>
  );
}
