import Navigation from './components/Navigation';
import Content from './components/Content';
import Footer from './components/Footer';


document.querySelector('#root').innerHTML = `
${Navigation}
${Content}
${Footer}
`;
