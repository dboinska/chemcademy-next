import callendar from '../public/assets/callendar.png';

export const schedule = {
  id: 1,
  subheader: 'Proponowane godziny zajęć',
  desc: 'Kursy rozpoczynają się w pierwszym tygodniu października.',
  subDesc: 'Terminarz może ulec zmianom. Warunkiem uruchomienia kursu jest zapisanie się minimum 5 osób.',
  warning: (
    <a
      href="https://calendar.google.com/calendar/embed?src=tboinski.chemcademy%40gmail.com&ctz=Europe%2FWarsaw"
      target="_blank"
      rel="noreferrer"
    >
      Zobacz terminarz kursów
    </a>
  ),
  img: callendar,
  alt: 'kalendarz',
};

export const lo1 = [
  {
    id: 1,
    schedule: 'Niedziela 9:00- 10:30',
  },

  {
    id: 2,
    schedule: 'Poniedziałek 15:30- 17:00',
  },
  {
    id: 3,
    schedule: 'Czwartek 18:15- 19:45',
  },
];

export const lo2 = [
  {
    id: 1,
    schedule: 'Niedziela 10:45- 13:15',
  },

  {
    id: 2,
    schedule: 'Poniedziałek 17:15- 19:45',
  },
  {
    id: 3,
    schedule: 'Czwartek 15:30- 18:00',
  },
];

export const lo3 = [
  {
    id: 1,
    schedule: 'Wtorek 18:30- 21:00',
  },

  {
    id: 2,
    schedule: 'Piątek 15:30- 18:00',
  },
  {
    id: 3,
    schedule: 'Sobota 12:00- 14:30',
  },
];

export const maturaNieorg = [
  {
    id: 1,
    schedule: 'Niedziela 16:15- 18:45',
  },

  {
    id: 2,
    schedule: 'Środa 17:30- 20:00',
  },
  {
    id: 3,
    schedule: 'Sobota 14:45- 17:15',
  },
];

export const maturaOrg = [
  {
    id: 1,
    schedule: 'Niedziela 13:30- 15:15',
  },
  {
    id: 2,
    schedule: 'Środa 15:30- 17:15',
  },
  {
    id: 3,
    schedule: 'Piątek 18:15- 20:00',
  },
];

export const olimpiada = [
  {
    id: 1,
    schedule: 'Sobota 9:00- 11.45',
  },
];
