window.onload = function () {
  const heart = document.querySelector('.heart');
  const finalMessage = document.querySelector('.final-message');
  const popup = document.getElementById('popupSurprise');
  const closePopup = document.querySelector('.close-popup');
  const background = document.querySelector('.background-love');
  const surprisePhotos = document.getElementById('surprisePhotos');
  const loveSong = document.getElementById('loveSong'); // pastikan ada elemen audio ini di HTML

  heart.addEventListener('click', () => {
    finalMessage.classList.add('show');
    finalMessage.scrollIntoView({ behavior: 'smooth' });

    popup.classList.add('show');
    popup.style.display = 'flex';

    if (loveSong) {
      loveSong.play().catch(e => {
        console.log("Gagal memutar lagu:", e);
      });
    }

    showSurprisePhotos();
  });

  closePopup.addEventListener('click', () => {
    popup.classList.remove('show');
    popup.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.classList.remove('show');
      popup.style.display = 'none';
    }
  });

  // Floating emoji
  setInterval(() => {
    const emoji = document.createElement("div");
    emoji.classList.add("floating-heart");
    emoji.textContent = "💖";
    emoji.style.left = Math.random() * window.innerWidth + "px";
    emoji.style.top = window.innerHeight + "px";
    emoji.style.fontSize = (Math.random() * 10 + 15) + "px";
    background.appendChild(emoji);
    setTimeout(() => emoji.remove(), 6000);
  }, 300);

  // Show floating surprise photos
  function showSurprisePhotos() {
    surprisePhotos.innerHTML = '';
    const imageList = [
      'key8.jpg',
      'key 7.jpg',
      'gn dan key.jpg',
      'key 3.jpg',
      'key 6.jpg',
      'key 4.jpg'
    ];

    imageList.forEach((src, i) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = `Kejutan ${i + 1}`;
      img.classList.add("floating-photo");
      img.style.left = `${Math.random() * 80 + 10}%`;
      img.style.top = `${Math.random() * 60 + 10}%`;

      surprisePhotos.appendChild(img);

      setTimeout(() => {
        img.classList.add("fade-out");
      }, 3500);

      setTimeout(() => {
        img.remove();
      }, 5000);
    });
  }
};

