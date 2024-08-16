import unchecked from '../../../public/dashboard/checkbox-unchecked.svg';
import checked from '../../../public/dashboard/checkbox-checked.svg';
import catalog from '../../../public/dashboard/catalog-icon.svg';
import progressBar from '../../../public/dashboard/progress-bar.svg';
import greenDot from '../../../public/dashboard/green-dot.svg';
import groupImg from '../../../public/dashboard/customers-group-image.svg';
import deleteIcon from '../../../public/dashboard/delete-icon.svg';
import editIcon from '../../../public/dashboard/edit-icon.svg';
import capsuleIcon from '../../../public/dashboard/CommandR-icon.svg';
import commandRIcon from '../../../public/dashboard/hourglass-icon.svg';
import hourglassIcon from '../../../public/dashboard/layer-icon.svg';
import layersIcon from '../../../public/dashboard/quotient-icon.svg';
import quotientIcon from '../../../public/dashboard/quotient-icon.svg';
import sisyphusIcon from '../../../public/dashboard/sisyphus-icon.svg';

const companiesList = [
  {
    logo: catalog,
    name: 'Catalog',
    link: 'catalogapp.io',
    customer: true,
    progress: 80,
    about: 'Content curating app',
    info: 'Brings all your news into one place',
  },
  {
    logo: capsuleIcon,
    name: 'Capsule',
    link: 'getcapsule.com',
    customer: false,
    progress: 80,
    about: 'Design software',
    info: 'Super lightweight design app',
  },
  {
    logo: commandRIcon,
    name: 'Command+R',
    link: 'cmdr.ai',
    customer: true,
    progress: 80,
    about: 'Data prediction',
    info: 'AI and machine learning data',
  },
  {
    logo: hourglassIcon,
    name: 'Hourglass',
    link: 'hourglass.app',
    customer: true,
    progress: 80,
    about: 'Productivity app',
    info: 'Time management and productivity',
  },
  {
    logo: layersIcon,
    name: 'Layers',
    link: 'getlayers.io',
    customer: true,
    progress: 80,
    about: 'Web app integrations',
    info: 'Connect web apps seamlessly',
  },
  {
    logo: quotientIcon,
    name: 'Quotient',
    link: 'quotient.co',
    customer: true,
    progress: 80,
    about: 'Sales CRM',
    info: 'Web-based sales doc management',
  },
  {
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
