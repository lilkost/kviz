const questionForm = new Swiper('.question__form', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 10,
  
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
  
    navigation: {
      nextEl: '.question__button-next',
      prevEl: '.question__button-prev',
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    on: {
        init: function () {
            let paginLenght = document.querySelector('.question__pagination span')
            paginLenght.textContent = `из ${lenght}`
        },
      },

});

questionForm.on('slideChange', function () {
    let paginCurrent = document.querySelector('.question__pagination strong')
    paginCurrent.textContent = questionForm.activeIndex + 1;
    thumb.style.width = `calc(100% / ${lenght - (questionForm.activeIndex + 1)})`;
});

if(document.querySelector('.modal-example')) {
  let btnOpenModal = document.querySelector('.page-top__btn');
  let btnCloseModal = document.querySelector('.modal-example__close');
  let modalEx = document.querySelector('.modal-example');

  btnOpenModal.addEventListener('click', ()=>{
    modalEx.classList.toggle('open');
  });

  btnCloseModal.addEventListener('click', ()=> {
    modalEx.classList.toggle('open');
  })
}

if(document.querySelector('.page-top__list')) {
  let items = document.querySelectorAll('.page-top__item');

  for(let i = 0; i <=items.length; i++) {
    if(i === 0) {
      items[i].setAttribute('count', `0${i+1}`)
    }
    else if( i > 0){
      items[i].setAttribute('count', `${i+1}`)
    }
  }
}
