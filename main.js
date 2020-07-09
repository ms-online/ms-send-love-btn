const love_btn = document.querySelector('.love');

love_btn.addEventListener('mousedown', () => {
  love_btn.style.backgroundColor = '#fff';
  love_btn.style.color = '#E7273F';
  love_btn.querySelector('.text').innerHTML =
    '<span class="grey-text">发送给：</span> 米修在线';

  createHearts(love_btn.querySelector('.icon-container'));
});

love_btn.addEventListener('mouseup', () => {
  love_btn.style.backgroundColor = '#E7273F';
  love_btn.style.color = '#fff';
  love_btn.querySelector('.text').innerHTML =
    '谢谢支持！<i class="fas fa-redo"></i>';
});

function createHearts(container) {
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const heart = document.createElement('span');
      heart.classList.add('heart');
      heart.innerHTML = '<i class="fas fa-heart"></i>';
      heart.style.left = Math.random() * 100 + '%';
      heart.style.top = Math.random() * 100 + '%';
      heart.style.fontSize = Math.random() * 20 + 5 + 'px';
      heart.style.animationDuration = Math.random() * 2 + 2 + 's';
      container.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 3000);
    }, i * 100);
  }
}
