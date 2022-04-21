import { Chrono } from 'react-chrono';

const items = [
  {
    title: '2021 - 2022',
    cardTitle:
      'International Conference on Computer, Communication, and Signal Processing',
    cardSubtitle: 'Special focus on AI and Cyber Security',
    url: 'https://www.icccsp.com/2021/',
  },
  {
    title: '2020 - 2021',
    cardTitle:
      'International Conference on Computer, Communication, and Signal Processing',
    cardSubtitle: 'Special focus on AI in Health Care',
    url: 'https://www.icccsp.com/2021/',
  },
  {
    title: '2019 - 2020',
    cardTitle:
      'International Conference on Computer, Communication, and Signal Processing',
    cardSubtitle: 'Special focus on Data Visualization',
    url: 'https://www.icccsp.com/2020/',
  },
  {
    title: '2018 - 2019',
    cardTitle:
      'International Conference on Computer, Communication, and Signal Processing',
    cardSubtitle: 'Special focus on Data Sciences',
    url: 'https://www.icccsp.com/2018/',
  },
  {
    title: '2017 - 2018',
    cardTitle:
      'International Conference on Computer, Communication, and Signal Processing',
    cardSubtitle: 'Special focus on IoT',
    url: 'https://www.icccsp.com/2016/',
  },
];

export default function Archive() {
  return (
    <div className="archiveContainer" id="archive">
      <h1 className="text-center">PREVIOUS CONFERENCE</h1>
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
