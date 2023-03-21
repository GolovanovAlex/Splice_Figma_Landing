// ---- ---- scroll  ---- ---- //
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
// ---- ---- wow.js ---- ---- //
new WOW().init();

// ---- ---- footer accordion ---- ---- //
const accordionContent = document.querySelectorAll(
  '.footer__accordion-content'
);

// ---- ---- Class .open ---- ---- //
accordionContent.forEach((item, index) => {
  let header = item.querySelector('.footer__item-title');
  header.addEventListener('click', () => {
    item.classList.toggle('open');

    // ---- ---- Height Description and Change Icon ---- ---- //
    let description = item.querySelector('.footer__description');
    if (item.classList.contains('open')) {
      description.style.height = `${description.scrollHeight}px`;
      item.querySelector('i').classList.replace('fa-plus', 'fa-minus');
    } else {
      description.style.height = '0px';
      item.querySelector('i').classList.replace('fa-minus', 'fa-plus');
    }
    removeOpen(index);
  });
});

function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove('open');
      let descr = item2.querySelector('.footer__description');
      descr.style.height = '0px';
      item2.querySelector('i').classList.replace('fa-minus', 'fa-plus');
    }
  });
}
