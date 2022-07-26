
window.addEventListener('keydown', showKeyEvent);

function showKeyEvent(e) {
  const insert = document.querySelector('.insert');

  insert.innerHTML = `
  <div class="key">
  ${e.key}
  <small>e.key</small>
</div>
<div class="key">
  ${e.keyCode}
  <small>e.keyCode</small>
</div>
<div class="key">
  ${e.code}
  <small>e.code</small>
</div>
  `
}