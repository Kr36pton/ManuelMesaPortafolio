const isScrolling = () => {
    const headerEl = document.querySelector('.primary-header')
    let windowPosition = window.scrollY > 100
    headerEl.classList.toggle('active', windowPosition)
}
window.addEventListener('scroll', isScrolling)

function copyToClipboard(constante) {
    const el = document.createElement('textarea');
    el.value = constante;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    Swal.fire('El correo se ha copiado al portapapeles')
  }