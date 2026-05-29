const products = [

{id:1,name:"Маргарита",category:"pizza",price:250,count:0,img:"https://images.unsplash.com/photo-1513104890138-7c749659a591"},
{id:2,name:"Пепперони",category:"pizza",price:340,count:0,img:"https://images.unsplash.com/photo-1604382355076-af4b0eb60143"},
{id:3,name:"4 Сыра",category:"pizza",price:370,count:0,img:"https://images.unsplash.com/photo-1594007654729-407eedc4be65"},
{id:4,name:"Гавайская",category:"pizza",price:320,count:0,img:"https://images.unsplash.com/photo-1511689660979-10d2b1aada49"},
{id:5,name:"BBQ",category:"pizza",price:390,count:0,img:"https://images.unsplash.com/photo-1534308983496-4fabb1a015ee"},

{id:6,name:"Бургер",category:"hot",price:280,count:0,img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd"},
{id:7,name:"Стейк",category:"hot",price:650,count:0,img:"https://images.unsplash.com/photo-1544025162-d76694265947"},
{id:8,name:"Карбонара",category:"hot",price:310,count:0,img:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9"},
{id:9,name:"Лазанья",category:"hot",price:330,count:0,img:"https://images.unsplash.com/photo-1619895092538-128341789043"},
{id:10,name:"Наггетсы",category:"hot",price:210,count:0,img:"https://images.unsplash.com/photo-1562967914-608f82629710"},

{id:11,name:"Цезарь",category:"salad",price:230,count:0,img:"https://images.unsplash.com/photo-1546793665-c74683f339c1"},
{id:12,name:"Греческий",category:"salad",price:250,count:0,img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd"},
{id:13,name:"Овощной",category:"salad",price:190,count:0,img:"https://images.unsplash.com/photo-1498837167922-ddd27525d352"},
{id:14,name:"Тунец",category:"salad",price:280,count:0,img:"https://images.unsplash.com/photo-1551248429-40975aa4de74"},

{id:15,name:"Кола",category:"drink",price:80,count:0,img:"https://images.unsplash.com/photo-1622483767028-3f66f32aef97"},
{id:16,name:"Мохито",category:"drink",price:140,count:0,img:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b"},
{id:17,name:"Фанта",category:"drink",price:85,count:0,img:"https://images.unsplash.com/photo-1624517452488-04869289c4ca"},
{id:18,name:"Сок",category:"drink",price:90,count:0,img:"https://images.unsplash.com/photo-1600271886742-f049cd5bba3f"}

];

let currentCategory="all";

const box=document.getElementById("products");
const search=document.getElementById("search");

function saveCart(){
localStorage.setItem("cart", JSON.stringify(products));
}

function loadCart(){
const data = JSON.parse(localStorage.getItem("cart"));
if(data){
data.forEach(d=>{
let p = products.find(x=>x.id===d.id);
if(p) p.count = d.count;
});
}
}

function render(){
box.innerHTML="";

const text=search.value.toLowerCase();

products
.filter(p =>
(currentCategory==="all" || p.category===currentCategory) &&
p.name.toLowerCase().includes(text)
)
.forEach(p=>{

box.innerHTML+=`
<div class="card">
<img src="${p.img}" loading="lazy">
<h3>${p.name}</h3>
<p>${p.price} грн</p>

<div class="counter">
<button onclick="minus(${p.id})">-</button>
<span>${p.count}</span>
<button onclick="plus(${p.id})">+</button>
</div>

</div>
`;
});

updateCart();
}

function plus(id){
let p = products.find(x=>x.id===id);
if(p.count<10) p.count++;
saveCart();
render();
}

function minus(id){
let p = products.find(x=>x.id===id);
if(p.count>0) p.count--;
saveCart();
render();
}

function updateCart(){
let items=0;
let total=0;

products.forEach(p=>{
items+=p.count;
total+=p.count*p.price;
});

document.getElementById("items").innerText=items;
document.getElementById("total").innerText=total;
}

document.querySelectorAll(".cat-btn").forEach(btn=>{
btn.onclick=()=>{
currentCategory=btn.dataset.category;
render();
};
});

search.addEventListener("input",render);

loadCart();
render();
function toggleChat(){

const box=document.getElementById("chatBox");

box.style.display=
box.style.display==="flex"
? "none"
: "flex";

}

function sendMsg(){

const input=document.getElementById("msg");

const text=input.value.trim();

if(!text) return;

const msgs=document.getElementById("messages");

msgs.innerHTML += `
<div style="text-align:right;margin:10px">
${text}
</div>
`;

input.value="";

setTimeout(()=>{

msgs.innerHTML += `
<div style="
margin:10px;
background:#eee;
padding:10px;
border-radius:10px;
">
Поддержка получила сообщение 👍
</div>
`;

msgs.scrollTop=msgs.scrollHeight;

},700);

}