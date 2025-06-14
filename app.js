const pages = document.querySelectorAll('.page');
const menu = document.querySelectorAll('.sidebar li');
menu.forEach(li => li.addEventListener('click',()=> {
  menu.forEach(l=>l.classList.remove('active'));
  li.classList.add('active');
  let pg=li.getAttribute('data-page');
  pages.forEach(p=> p.id===`page-${pg}`? p.classList.add('active'): p.classList.remove('active'));
}));
menu[0].click();

// 2x2 CLL verisi ve UI
const cllCases = [
  { id:1, img:"https://jperm.net/images/2x2/cll/1.png", alg:"(R U R' U') R' F R F'" },
  { id:2, img:"https://jperm.net/images/2x2/cll/2.png", alg:"F R U' R' U' R U R' F'" },
  // Diğer vakalar...
];
const grid = document.getElementById('cll-grid');
cllCases.forEach(c=>{
  let div=document.createElement('div');
  div.className='card';
  div.innerHTML=`<img src="${c.img}"><p>${c.alg}</p><button>Mark Learned</button>`;
  div.querySelector('button').onclick=()=>{
    div.classList.toggle('learned');
  };
  grid.appendChild(div);
});
