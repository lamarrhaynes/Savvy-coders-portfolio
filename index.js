import Navigation from './components/Navigation';
import Content from './components/Content';
import Footer from './components/Footer';
console.log('navigation says:', Navigation);
console.log('Navigation()says: ', Navigation());
const state = {};

state.title = 'Dynamic title';


document.querySelector('#root').innerHTML = `
${Navigation()}
${Content(state)}
${Footer()}
`;
