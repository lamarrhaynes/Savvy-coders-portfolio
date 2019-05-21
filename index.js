/* eslint-disable no-loop-func */
import Navigation from './components/Navigation';
import Content from './components/Content';
import Footer from './components/Footer';
import * as states from './store';

import Navigo from 'navigo';

const router = new Navigo(window.location.origin);


const root = document.querySelector('#root');

// render receives an argument as a named parameter: 'state'
function render(state){
    // TODO: Use Shadow DOM and Virtual DOM 'diffing' to avoid re-rendering ALL of the components
    root.innerHTML = `
${Navigation(state)}
${Content(state)}
${Footer(state)}
`;

    const links = document.querySelectorAll('nav a');

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            render(states[e.target.textContent]);
        });
    });
}


router
    .on(':path', (params) => console.log('params.path'))
    .on('/',() => render(states.Home))
    .resolve();

