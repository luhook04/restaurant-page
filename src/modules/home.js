const homeModule = (function homeModule() {
  const content = document.querySelector('#content');
  const homeDiv = document.createElement('div');
  homeDiv.innerHTML = `<img src="./imgs/randy.jpeg" alt="Randy" width="300px" height="300px">
		<h2>HOME PAGE</h2>
		<p>Welcome to The Dirty Burger! Home of the filthiest burger you can find. Choose from a delicious selection of burgers whipped up by master chefs Randy and Phil Collins.</p>`;
  content.appendChild(homeDiv);
})();

export default homeModule;
