const restaurantName = document.querySelector('#restaurantName');
const restaurantTagline = document.querySelector('#restaurantTagline');
const categoryNav = document.querySelector('#categoryNav');
const menu = document.querySelector('#menu');

restaurantName.textContent = MENU.restaurantName;
restaurantTagline.textContent = MENU.tagline;
const categories = Object.keys(MENU.categories);

function render(category){
  menu.innerHTML = MENU.categories[category].map(item => `
    <article class="item"><h2>${item.name}</h2><p>${item.description}</p><div class="price">₹${item.price}</div></article>
  `).join('');
  document.querySelectorAll('.category').forEach(b => b.classList.toggle('active', b.dataset.category === category));
}

categoryNav.innerHTML = categories.map(category => `<button class="category" data-category="${category}">${category}</button>`).join('');
categoryNav.addEventListener('click', e => { if(e.target.matches('.category')) render(e.target.dataset.category); });
render(categories[0]);
