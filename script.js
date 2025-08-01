window.onload = function () {
  const heart = document.querySelector('.heart');
  const finalMessage = document.querySelector('.final-message');
  const popup = document.getElementById('popupSurprise');
  const closePopup = document.querySelector('.close-popup');
  const background = document.querySelector('.background-love');
  const surprisePhotos = document.getElementById('surprisePhotos');

  heart.addEventListener('click', () => {
    finalMessage.classList.add('show');
    finalMessage.scrollIntoView({ behavior: 'smooth' });
    popup.style.display = 'flex';
    showSurprisePhotos();
  });

  closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === popup) popup.style.display = 'none';
  });

  // Floating emoji
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.textContent = "💖";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    heart.style.fontSize = (Math.random() * 10 + 15) + "px";
    background.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 300);

  // Show surprise floating photos
  function showSurprisePhotos() {
    surprisePhotos.innerHTML = '';
    const imageList = [
      'key8.jpg', 'key 7.jpg', 'gn dan key.jpg',
      'key 3.jpg', 'key 6.jpg', 'key 4.jpg'
    ];
    for (let i = 0; i < imageList.length; i++) {
      const img = document.createElement('img');
      img.src = imageList[i];
      img.style.left = Math.random() * 80 + 10 + "%";
      img.style.top = Math.random() * 60 + 10 + "%";
      surprisePhotos.appendChild(img);

      // Remove after animation
      setTimeout(() => {
        img.remove();
      }, 4500);
    }
  }
};
