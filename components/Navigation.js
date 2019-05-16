Function buildNavHTML(stateLinks){
  let linksHTML = '';

  stateLinks.foreach(link => {
    linksHTML += `<li><a href="">${link}</li>`;
  });

  return linksHTML;
}

export default (state) => `<nav>
    <ul class="flex">
    ${buildNavHTML(state.links.primary)}
  <li>
    Portfolio
    <ul id="dropdown">
    ${buildNavHTML(state.links.primary)}
     
    </ul>
  </li>
</ul>
</nav>';

<header>
    <h1>LaMarrAHaynes Portfolio</h1>
    <h2>A Web Developer</h2>
  </header> 
  `
};