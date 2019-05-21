/* eslint-disable no-loop-func */
import Navigation from './components/Navigation';
import Content from './components/Content';
import Footer from './components/Footer';

const states = {
    'home': {
        'title': 'LaMarrAHaynes Savvy Code Portfolio'
    },
    'contact': {
        'title': 'welcome to contact page'
    },
    'about': {
        'title': 'welcome to about page'
    }
};

const root = document.querySelector('#root');

function render(state){
    root.innerHTML = `
    ${Navigation(state)}
    ${Content(state)}
    ${Footer(state)}
    `;
}

render(states.home);

const links = document.querySelectorAll('nav a');

links.forEach((link) => {
    link.addEventListener('click',(e) => {
        e.preventDefault();
        render(states, e.target.textContent.toLowerCase());
    });
});

// document.querySelectorAll('na a').addEventListener('click',(event) => {
//     event.preventDefault();
//     console.log('i was clicked');
//     console.log(event.target.txtContent);
// });
