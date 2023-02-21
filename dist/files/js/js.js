document.querySelector('.nav').addEventListener('click', (event) => {
    let target=event.target;
    if(target.closest('.nav__btn')){
          document.querySelector('.nav__btn-menu').classList.toggle('nav__btn-menu_active');
          document.querySelector('.nav__menu').classList.toggle('nav__menu_open');
        }
    //     if(target.closest('.nav:before')){
    //     document.querySelector('.nav__menu').classList.toggle('nav__menu_open');
    // }

  });

//   if (event.target.closest('.gallery__item')) {
//     document.querySelector('.modal').classList.toggle('none');
//     slider_bar()
// }