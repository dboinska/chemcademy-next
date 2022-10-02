import { BiHome, BiPhone } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';
import { AiOutlineFacebook } from 'react-icons/ai';
import { BsDiscord, BsStars } from 'react-icons/bs';

export const address = {
  apartment: 'Dom handlowy Manhattan lokal 3B',
  street: 'plac Pułaskiego 7,',
  zipCode: '10-515 Olsztyn',
  link: '/contact',
  icon: <BiHome />,
};

export const courses = [
  {
    id: 1,
    label: 'Licealne- klasy 1-3',
    link: '/offer',
  },
  { id: 2, label: 'Maturalne- organiczna', link: '/offer' },
  { id: 3, label: 'Maturalne- nieorganiczna', link: '/offer' },
  { id: 4, icon: <BsStars />, label: 'Olimpijskie', link: '/offer' },
];

export const individual = [
  { id: 1, label: 'Korepetycje indywidualne', link: '/offer' },
  { id: 2, label: 'Konsultacje', link: '/offer' },
  { id: 3, icon: <BsStars />, label: 'Widma NMR', link: '/offer' },
  { id: 4, label: 'Chemia fizyczna', link: '/offer' },
  { id: 5, label: 'Synteza organiczna', link: '/offer' },
];
export const contact = [
  {
    id: 1,
    icon: <BiPhone />,
    label: '731 026 396',
    link: 'tel:+48731026396',
  },
  {
    id: 2,
    icon: <FiMail />,
    label: 'tboinski@yahoo.com',
    link: 'mailto:tboinski@yahoo.com',
  },
  {
    id: 3,
    icon: <AiOutlineFacebook />,
    label: '/chemcademy',
    link: 'https://www.facebook.com/chemcademy',
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    id: 4,
    icon: <BsDiscord />,
    label: 'boin#1729',
    link: 'https://discord.com',
    target: '_blank',
    rel: 'noreferrer',
  },
];
