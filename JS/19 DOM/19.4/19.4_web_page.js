const bodyEL = document.querySelector('body');

const footer = document.createElement('footer');
bodyEL.prepend(footer);
const main = document.createElement('main');
bodyEL.prepend(main);
const nav = document.createElement('nav');
bodyEL.prepend(nav);

const img = document.createElement('img');
img.setAttribute(
  'src',
  'https://static.wixstatic.com/media/5bd04f_967ff2e54d284a3c96b8592ea2b38458~mv2.png/v1/fill/w_118,h_44,al_c,usm_0.66_1.00_0.01,enc_auto/Appleseeds_LOGO_3_Hebrew_3x.png'
);
nav.append(img);

const h1 = document.createElement('h1');
h1.textContent = 'This web page is pure JS!';

nav.append(h1);

const gridGalleryContainer = document.createElement('div');
gridGalleryContainer.classList.add('grid-container');
main.appendChild(gridGalleryContainer);

for (let i = 0; i < 12; i++) {
  const gridItem = document.createElement('div');
  gridItem.classList.add('item');
  gridItem.setAttribute('id', `item${i + 1}`);
  gridGalleryContainer.append(gridItem);
}
