let cart = JSON.parse(localStorage.getItem("cart")) || [];

const box = document.getElementById("cart");

function render(){

box.innerHTML = "";

let total = 0;
let hasItems = false;

cart.forEach(p=>{

if(p.count > 0){

hasItems = true;

total += p.count * p.price;

box.innerHTML += `
<div class="item">

<div>
<div class="name">${p.name}</div>
<div class="price">
${p.count} × ${p.price} грн
</div>
</div>

<div>
${p.count * p.price} грн
</div>

</div>
`;

}

});

if(!hasItems){

box.innerHTML = `
<h2 style="
color:white;
text-align:center;
margin-top:50px;
">
Корзина пуста
</h2>
`;

}

document.getElementById("finalTotal").innerText = total;

}

function pay(){

if(cart.every(p=>p.count===0)){

alert("Корзина пустая!");
return;

}

document.body.innerHTML = `
<div class="thanks">
🎉 Спасибо за покупку!
</div>
`;

localStorage.removeItem("cart");

setTimeout(()=>{

location.href="index.html";

},2500);

}

render();