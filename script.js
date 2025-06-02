function openModal(element, title, artist, wikiUrl) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const caption = document.getElementById('caption');

  modal.style.display = 'block';
  modalImg.src = element.querySelector('img').src;
  caption.innerHTML = `
    <strong>${title}</strong><br>
    ${artist}<br>
    <a href="${wikiUrl}" target="_blank">View on Wikipedia</a>
  `;
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
