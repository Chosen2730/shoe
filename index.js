const header = document.querySelector('#header');
const headerText = document.querySelector('.header-carrier h1');
const button = document.querySelector('.btn-header');
const man = document.querySelector('.man');


const tl = new TimelineMax();
tl.fromTo(
  header,
  1,
  {width: "0%"},
  {width: "100%", ease: Power2.easeInOut}
)
.fromTo(
  man,
  2,
  {opacity: 0, x: 100},
  {opacity: 1, x: 0},
  "-=0.1"
)
.fromTo(
  headerText,
  1.5,
  {x: "-150%"},
  {x: "0%", ease: Power2.easeInOut},
  "-=1.2"
)
.fromTo(
  button,
  0.5,
  {opacity: 0, x: 30},
  {opacity: 1, x: 0},
  "-=0.1"
);
