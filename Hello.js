const heading = document.getElementById('mainHeading');
const toggleBtn = document.getElementById('toggleH1Btn');
const highlightBtn = document.getElementById('highlightH1Btn');

if (heading && toggleBtn && highlightBtn) {
  toggleBtn.addEventListener('click', () => {
    if (heading.style.display === 'none') {
      heading.style.display = '';
      toggleBtn.textContent = 'Hide H1';
    } else {
      heading.style.display = 'none';
      toggleBtn.textContent = 'Show H1';
    }
  });

  highlightBtn.addEventListener('click', () => {
    heading.classList.toggle('highlighted');
    highlightBtn.textContent = heading.classList.contains('highlighted')
      ? 'Remove Highlight'
      : 'Highlight H1';
  });
}
