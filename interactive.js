const options = document.querySelectorAll('.option');
const totalDisplay = document.getElementById('total');

options.forEach(option => {
  const radio = option.querySelector('input[type="radio"]');

  radio.addEventListener('change', () => {
    options.forEach(opt => opt.classList.remove('selected'));
    option.classList.add('selected');

    const price = option.getAttribute('data-price');
    totalDisplay.textContent = `DKK ${price}.00`;

    // Show/hide dropdowns based on selection
    document.querySelectorAll('.dropdowns').forEach(dd => dd.style.display = 'none');
    const dropdowns = option.querySelector('.dropdowns');
    if (dropdowns) dropdowns.style.display = 'block';
  });

  // Trigger change on load to apply correct selection
  if (radio.checked) {
    radio.dispatchEvent(new Event('change'));
  }
});
