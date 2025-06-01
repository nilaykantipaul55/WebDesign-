document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.card button');

  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const card = event.target.closest('.card');
      const packageName = card.querySelector('h3').innerText;
      const packagePrice = card.querySelector('strong').innerText;

      alert(`You selected: ${packageName} for ${packagePrice}`);
      window.location.href = 'payment.html';
    });
  });
});
