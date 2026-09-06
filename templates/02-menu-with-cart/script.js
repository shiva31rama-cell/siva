const allItems=Object.values(MENU.categories).flat();
const byId=id=>allItems.find(x=>x.id===id);
const cart=new Map();
const menu=document.querySelector('#menu'), nav=document.querySelector('#categoryNav');
const count=document.querySelector('#count'), cartCount=document.querySelector('#cartCount'), cartItems=document.querySelector('#cartItems'), cartTotal=document.querySelector('#cartTotal');

document.querySelector('#restaurantName').textContent=MENU.restaurantName;
document.querySelector('#tagline').textContent=MENU.tagline;
const categories=Object.keys(MENU.categories);
nav.innerHTML=categories.map(c=>`<button class="category" data-category="${c}">${c}</button>`).join('');
function renderMenu(category){menu.innerHTML=MENU.categories[category].map(i=>`<article class="item"><h2>${i.name}</h2><p>${i.description}</p><div class="row"><span class="price">₹${i.price}</span><button class="add" data-add="${i.id}">+ Add</button></div></article>`).join('');document.querySelectorAll('.category').forEach(b=>b.classList.toggle('active',b.dataset.category===category));}
function renderCart(){let total=0,items=0;cartItems.innerHTML=cart.size?[...cart].map(([id,qty])=>{const i=byId(id);total+=i.price*qty;items+=qty;return `<div class="cart-row"><div><strong>${i.name}</strong><div>₹${i.price} × ${qty} = ₹${i.price*qty}</div></div><div class="qty"><button data-dec="${id}">−</button><button data-inc="${id}">+</button></div></div>`}).join(''):'<p>Your basket is empty.</p>';cartTotal.textContent=`₹${total}`;cartCount.textContent=items;count.textContent=`${items} item${items===1?'':'s'}`;}
nav.addEventListener('click',e=>{if(e.target.dataset.category)renderMenu(e.target.dataset.category)});
menu.addEventListener('click',e=>{const id=e.target.dataset.add;if(id)cart.set(id,(cart.get(id)||0)+1),renderCart()});
cartItems.addEventListener('click',e=>{const id=e.target.dataset.inc||e.target.dataset.dec;if(!id)return;let q=cart.get(id)||0;q+=e.target.dataset.inc?1:-1;if(q<=0)cart.delete(id);else cart.set(id,q);renderCart()});
document.querySelector('#ordersButton').onclick=()=>document.querySelector('#ordersPanel').classList.add('open');
document.querySelector('#closeOrders').onclick=()=>document.querySelector('#ordersPanel').classList.remove('open');
renderMenu(categories[0]);renderCart();
