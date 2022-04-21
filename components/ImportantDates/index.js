import { Chrono } from 'react-chrono';

const items = [
  { title: '4th Jan, 2023', cardTitle: 'Pre-Conference Workshop' },
  { title: '5th-6th Jan, 2023', cardTitle: 'Conference ' },
];

export default function ImportantDates() {
  return (
    <div id="important_dates" className="importantDatesContainer">
      <h1 className="text-center">IMPORTANT DATES</h1>
      <Chrono
        items={items}
        mode="VERTICAL_ALTERNATING"
        hideControls
        cardWidth={400}
        theme={{
          cardForeColor: '#444',
          primary: '#0765B0',
          secondary: 'white',
        }}
      />
    </div>
  );
}
