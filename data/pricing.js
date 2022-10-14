import lesson from '../public/assets/lesson.jpg';
import notes from '../public/assets/notes.jpg';

export const categories = ['kursy licealne', 'kursy maturalne', 'kursy olimpijskie'];
export const lo = [
  {
    id: 1,
    title: 'Klasa 1',
    min: '25',
    lasts: '9',
    link: '/',
    weekly: '1h 15min',
    schoolHours: '60',
    smallGroup: [
      {
        id: 1,
        lesson: '46',
        month: '300',
        course: '2700',
      },
    ],
    mediumGroup: [
      {
        id: 2,
        lesson: '33',
        month: '225',
        course: '2000',
      },
    ],
    largeGroup: [
      {
        id: 3,
        lesson: '25',
        month: '170',
        course: '1500',
      },
    ],
  },
  {
    id: 2,
    title: 'Klasa 2',
    min: '25',
    lasts: '9',
    link: '/',
    weekly: '2h 15min',
    schoolHours: '108',
    smallGroup: [
      {
        id: 1,
        lesson: '46',
        month: '550',
        course: '4950',
      },
    ],
    mediumGroup: [
      {
        id: 2,
        lesson: '33',
        month: '400',
        course: '3600',
      },
    ],
    largeGroup: [
      {
        id: 3,
        lesson: '25',
        month: '300',
        course: '2700',
      },
    ],
  },
  {
    id: 3,
    title: 'Klasa 3',
    min: '25',
    lasts: '9',
    link: '/',
    weekly: '2h 15min',
    schoolHours: '108',
    smallGroup: [
      {
        id: 1,
        lesson: '46',
        month: '550',
        course: '4950',
      },
    ],
    mediumGroup: [
      {
        id: 2,
        lesson: '33',
        month: '400',
        course: '3600',
      },
    ],
    largeGroup: [
      {
        id: 3,
        lesson: '25',
        month: '300',
        course: '2700',
      },
    ],
  },
];
export const matura = [
  {
    id: 1,
    title: 'Chemia nieorganiczna',
    min: '25',
    lasts: '7',
    link: '/',
    weekly: '2h 15min',
    schoolHours: '84',
    smallGroup: [
      {
        id: 1,
        lesson: '46',
        month: '550',
        course: '3850',
      },
    ],
    mediumGroup: [
      {
        id: 2,
        lesson: '33',
        month: '400',
        course: '2800',
      },
    ],
    largeGroup: [
      {
        id: 3,
        lesson: '25',
        month: '300',
        course: '2100',
      },
    ],
  },
  {
    id: 2,
    title: 'Chemia organiczna',
    min: '30',
    lasts: '7',
    link: '/',
    weekly: '2h',
    schoolHours: '56',
    smallGroup: [
      {
        id: 1,
        lesson: '50',
        month: '400',
        course: '2800',
      },
    ],
    mediumGroup: [
      {
        id: 2,
        lesson: '38',
        month: '300',
        course: '2100',
      },
    ],
    largeGroup: [
      {
        id: 3,
        lesson: '30',
        month: '240',
        course: '1680',
      },
    ],
  },
];

export const olimpiada = [
  {
    id: 1,
    title: 'Olimpijski',
    min: '42',
    lasts: '9',
    link: '/',
    weekly: '2h 15min',
    schoolHours: '108',
    smallGroup: [
      {
        id: 1,
        lesson: '50',
        month: '600',
        course: '5400',
      },
    ],
    mediumGroup: [
      {
        id: 2,
        lesson: '42',
        month: '500',
        course: '4500',
      },
    ],
  },
];

export const individual = {
  id: 1,
  subheader: '120zł za 60 minut',
  desc: 'Regularne konsultacje prowadzone indywidualnie w trybie stacjonarnym lub zdalnym. Tempo nauczania, zakres materiału oraz termin są uzależnione od indywidualnych potrzeb i możliwości Ucznia. W ramach zajęć udostępniam własne materiały oraz zapewniam pomoc online w sytuacjach problematycznych. ',
  img: lesson,
  alt: 'lesson',
};

export const consultation = {
  id: 1,
  subheader: '150zł za 60 minut',
  desc: 'Pomoc jednorazowa lub sporadyczne spotkania w nieregularnych terminach. Zakres materiału oraz termin uzależniony od indywidualnych potrzeb Ucznia. W razie potrzeby oferuję własne materiały i kontakt online.',
  subDesc: 'Proszę o wcześniejszy kontakt w celu omówienia szczegółów.',
  warning: 'UWAGA: Nie oferuję pomocy podczas pisania sprawdzianów i egzaminów.',
  img: notes,
  alt: 'notes',
};
