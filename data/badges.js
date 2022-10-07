import books from '../public/assets/books.png';
import people from '../public/assets//people.png';
import remote from '../public/assets//remote.png';
import badge from '../public/assets//badge.png';
import money from '../public/assets//money.png';
import video from '../public/assets//video.png';

export const badges = [
  {
    id: 1,
    title: 'Jakość',
    img: badge,
    alt: 'jakość',
    text: 'Wysoka jakość nauczania oparta na wieloletnim doświadczeniu',
  },
  {
    id: 2,
    title: 'Gwarancja zadowolenia',
    img: money,
    alt: 'pieniądze',
    text: 'Zwrot kosztów w przypadku niezadowolenia po pierwszej lekcji Kursów.',
  },
  {
    id: 3,
    title: 'Niewielkie grupy',
    img: people,
    alt: 'ludzie',
    text: 'Grupy od 5 do 12 osób z możliwością wyboru uczestników. ',
  },
  {
    id: 4,
    title: 'Autorskie materiały',
    img: books,
    alt: 'ksiażki',
    text: 'Własne zadania i pomoce opracowane na postawie wieloletniej pracy.',
  },
  {
    id: 5,
    title: 'Możliwość nagrywania',
    img: video,
    alt: 'nagrywanie',
    text: 'Możliwość nagrywania online zajęć indywidualnych oraz grupowych (za zgodą danej grupy).',
  },
  {
    id: 6,
    title: 'Pomoc zdalna',
    img: remote,
    alt: 'nauka online',
    text: 'Możliwość uzyskania odpowiedzi na nurtujące pytanie nawet w późnych godzinach na platformie Discord.',
  },
];
