const options = document.querySelectorAll('.option');
const radios = document.querySelectorAll('input[name="bundle"]');
const totalText = document.querySelector('.total');

// Store selections per bundle
const savedSelections = {};

options.forEach((option, index) => {
    const selects = option.querySelectorAll('select');

    // Save selection when changed
    selects.forEach((select, i) => {
        select.addEventListener('change', () => {
            if (!savedSelections[index]) savedSelections[index] = {};
            savedSelections[index][i] = select.value;
        });
    });

    option.addEventListener('click', () => {
        // Remove selected from all
        options.forEach(o => o.classList.remove('selected'));
        radios.forEach(r => r.checked = false);

        // Activate clicked
        option.classList.add('selected');
        radios[index].checked = true;

        // Update total price
        const price = option.getAttribute('data-price');
        totalText.textContent = "Total : $" + price + " USD";

        // Restore previous selections
        if (savedSelections[index]) {
            selects.forEach((select, i) => {
                if (savedSelections[index][i]) {
                    select.value = savedSelections[index][i];
                }
            });
        }
    });
});
