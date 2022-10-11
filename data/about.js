import mortarboard from '../public/assets/mortarboard.png';
import education from '../public/assets/education.png';
import focus from '../public/assets/focus.png';
import chemist from '../public/assets/chemist.png';
import photo from '../public/assets/photo.png';

export const aboutAchievements = {
  id: 1,
  subheader: 'Nauczyciel z pasją',
  desc: 'Jestem korepetytorem posiadającym wieloletnie doświadczenie dydaktyczne oraz osiągnięcia naukowe. Chemia jest moją pasją, którą bardzo chętnie dzielę się ze swoimi uczniami. W trakcie swoich zajęć udowadniam, że nauka chemii nie jest nudna. ',
  subDesc: '',
  img: photo,
  alt: 'Tomasz Boinski',
};

export const aboutPrivate = {
  id: 2,
  subheader: 'Prywatnie',
  desc: 'Uczniów traktuję jak równych sobie, tylko młodszych. Uważam, że efektywna nauka polega na dialogu pomiędzy Uczniem i nauczycielem, a skuteczna komunikacja przyśpiesza proces uczenia.',
  subDesc:
    'Prywatnie jestem wielbicielem kotów. Wolne chwile lubię spędzać spacerując po lesie. Uwielbiam górskie wycieczki, grę w szachy oraz dobrą kawę.',
  img: chemist,
  alt: 'chemik',
};

export const features = [
  {
    id: 1,
    title: 'Wykształcenie',
    img: mortarboard,
    alt: 'wykształcenie',
    text: 'Instytut Chemii Organicznej PAN, Politechnika Warszawska',
  },
  {
    id: 2,
    title: 'Doświadczenie',
    img: education,
    alt: 'doświadczenie',
    text: 'Ponad 10 lat pracy z Uczniem, m.in. prowadzenie kółek chemicznych, zajęć szkolnych i laboratoryjnych',
  },
  {
    id: 3,
    title: 'Specjalizacja',
    img: focus,
    alt: 'specjalizacja',
    text: 'chemia i synteza organiczna, badania spektroskopowe, związki makrocykliczne',
  },
];
