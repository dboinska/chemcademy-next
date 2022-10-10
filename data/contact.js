import { BiHome, BiPhone } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';
import { AiOutlineFacebook } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';

export const contact = [
  {
    id: 1,
    icon: <BiHome />,
    label: 'Dom handlowy Manhattan lokal 3B',
    sublabel: 'plac Pułaskiego 7, 10-515 Olsztyn ',
    link: 'https://goo.gl/maps/cf75QHXXNcYaKEds5',
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    id: 2,
    icon: <BiPhone />,
    label: '731 026 396',
    link: 'tel:+48731026396',
  },
  {
    id: 3,
    icon: <FiMail />,
    label: 'tboinski@yahoo.com',
    link: 'mailto:tboinski@yahoo.com',
  },
  {
    id: 4,
    icon: <AiOutlineFacebook />,
    label: '/chemcademy',
    link: 'https://www.facebook.com/chemcademy',
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    id: 5,
    icon: <BsDiscord />,
    label: 'boin#1729',
    link: 'https://discord.com',
    target: '_blank',
    rel: 'noreferrer',
  },
];
