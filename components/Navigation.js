function buildNavHTML(stateLinks){
    let linksHTML = '';

    stateLinks.forEach((link) => {
        linksHTML += `<li><a href="${link.toLowerCase()}">${link}</a></li>`;
    });

    return linksHTML;
}

export default (state) => `<nav>
    <ul class="flex">
    ${buildNavHTML(state.links.primary)}
  <li>
    Portfolio
    <ul id="dropdown">
    ${buildNavHTML(state.links.dropdown)}

    </ul>
  </li>
</ul>
</nav>

<header>
    <h1>LaMarrAHaynes Portfolio</h1>
    <h2>A Web Developer</h2>
  </header>
`;
