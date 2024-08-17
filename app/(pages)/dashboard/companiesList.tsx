import catalog from '../../../public/dashboard/catalog-icon.svg';
import capsuleIcon from '../../../public/dashboard/capsule-icon.svg';
import commandRIcon from '../../../public/dashboard/CommandR-icon.svg';
import hourglassIcon from '../../../public/dashboard/hourglass-icon.svg';
import layersIcon from '../../../public/dashboard/layer-icon.svg';
import quotientIcon from '../../../public/dashboard/quotient-icon.svg';
import sisyphusIcon from '../../../public/dashboard/sisyphus-icon.svg';

const companiesList = [
  {
    id: 1,
    logo: catalog,
    name: 'Catalog',
    link: 'catalogapp.io',
    customer: true,
    progress: 80,
    about: 'Content curating app',
    info: 'Brings all your news into one place',
  },
  {
    id: 2,
    logo: capsuleIcon,
    name: 'Capsule',
    link: 'getcapsule.com',
    customer: false,
    progress: 80,
    about: 'Design software',
    info: 'Super lightweight design app',
  },
  {
    id: 3,
    logo: commandRIcon,
    name: 'Command+R',
    link: 'cmdr.ai',
    customer: true,
    progress: 80,
    about: 'Data prediction',
    info: 'AI and machine learning data',
  },
  {
    id: 4,
    logo: hourglassIcon,
    name: 'Hourglass',
    link: 'hourglass.app',
    customer: true,
    progress: 80,
    about: 'Productivity app',
    info: 'Time management and productivity',
  },
  {
    id: 5,
    logo: layersIcon,
    name: 'Layers',
    link: 'getlayers.io',
    customer: true,
    progress: 80,
    about: 'Web app integrations',
    info: 'Connect web apps seamlessly',
  },
  {
    id: 6,
    logo: quotientIcon,
    name: 'Quotient',
    link: 'quotient.co',
    customer: true,
    progress: 80,
    about: 'Sales CRM',
    info: 'Web-based sales doc management',
  },
  {
    id: 7,
    logo: sisyphusIcon,
    name: 'Sisyphus',
    link: 'sisyphus.com',
    customer: true,
    progress: 80,
    about: 'Automation and workflow',
    info: 'Time tracking, invoicing and expenses',
  },
];

export default companiesList;
