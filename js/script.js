$(document).ready(function () {
});

let email = document.getElementById('campo-email');

function enviarEmail() {
    let emailDigitado = email.value;
    console.log(emailDigitado);
}



// function renderizaProdutos() {
//     let lista = document.getElementById('espacoProdutos');

//     let listaProdutos = [
//         {
//             Imagem: 'assets/image 1.jpg',
//             nome: 'FIFA 2022',
//             categoria: 'Jogos',
//             marca: 'EA Sports',
//             preço: 'R$ 200,00'
//         },
    
//         {
//             Imagem: 'assets/image 3.png',
//             nome: 'Iphone Apple 13',
//             categoria: 'SmartPhone',
//             marca: 'Apple',
//             preço: 'R$ 8.000,00'
//         },
//         {
//             Imagem: 'assets/image 4.png',
//             nome: 'Xbox Series X',
//             categoria: 'Console',
//             marca: 'Microsoft',
//             preço: 'R$ 7.000,00'
//         }
        
//     ]

//     let template = '';

//     for (let i = 0; i < listaProdutos.length; i++) {
//         const produto = listaProdutos[i];

//         template += `<div class="product">
//         <a href="#">
//           <img src="${produto.Imagem}" alt="">
//           <h5>${produto.nome}</h5>
//           <p>${produto.categoria}</p>
//         </a>
//         <span class="rate"><i>★</i><i>★</i><i>★</i><i>★</i><i>★</i></span>
//         <a href="#">
//           <p class="marca">${produto.marca}</p>
//           <h4>${produto.preço}</h4>
//         </a>
//       </div>`
//     }

//     lista = lista.innerHTML = template;
// }

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
     // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }

})

const nav = document.querySelector('#header2 nav')
const toggle = document.querySelectorAll('#header2 .toggle')

for(const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}
const links = document.querySelectorAll('#category a')

for(const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show')
  })
}


$(document).ready(function() {




  $('.owl-carousel').slick({
  infinite: true,
  centerMode: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  
  
  });
  
  });

