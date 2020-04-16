document.getElementById('cta-button').classList.add('invisible');
document.getElementById('cta-button-small').classList.add('invisible');
document.getElementById('title-svg').classList.add('no-fill');

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('title-svg').classList.add('ongoing');
  document.getElementById('title-svg').classList.remove('no-fill');
  const titleVivius = new Vivus('title-svg', { type: 'oneByOne', duration: 200, delay: 0 }).stop().reset();
  setTimeout(() => {
    titleVivius.play((obj) => {
      obj.el.classList.add('finished');

      obj.el.getElementById('titleSvgText').setAttribute('filter', 'url(#titleTextFilter)');
      setTimeout(() => {
        obj.el.classList.add('ongoing');
        document.getElementById('cta-button').classList.remove('invisible');
        setTimeout(() => {
          document.getElementById('cta-button-small').classList.remove('invisible');
        }, 600);
      }, 600);
    });
  }, 1000);
});
