const cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

const box =
document.getElementById("items");

let total = 0;

cart.forEach(item=>{

if(item.count>0){

const cost =
item.count * item.price;

total += cost;

box.innerHTML += `

<div class="order-item">

<div>
${item.name}
x${item.count}
</div>

<div>
${cost} грн
</div>

</div>

`;

}

});

document.getElementById(
"total"
).innerText = total;

function finishOrder(){

if(
!document.getElementById("name").value ||
!document.getElementById("phone").value ||
!document.getElementById("address").value
){

alert(
"Заполните поля"
);

return;

}

document.body.innerHTML = `

<div style="
height:100vh;
display:flex;
justify-content:center;
align-items:center;
font-size:40px;
color:white;
">

🎉 Заказ оформлен

</div>

`;

localStorage.removeItem(
"cart"
);

setTimeout(()=>{

location.href="index.html";

},2500);

}