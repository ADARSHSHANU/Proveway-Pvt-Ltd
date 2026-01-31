const options = document.querySelectorAll('.option');
const radios = document.querySelectorAll('input[name="bundle"]');
const totalText = document.querySelector('.total');


const savedSelections = {};

options.forEach((option, index) => {
    const selects = option.querySelectorAll('select');


    selects.forEach((select, i) => {
        select.addEventListener('change', () => {
            if (!savedSelections[index]) savedSelections[index] = {};
            savedSelections[index][i] = select.value;
        });
    });

    option.addEventListener('click', () => {
    
        options.forEach(o => o.classList.remove('selected'));
        radios.forEach(r => r.checked = false);


        option.classList.add('selected');
        radios[index].checked = true;


        const price = option.getAttribute('data-price');
        totalText.textContent = "Total : $" + price + " USD";


        if (savedSelections[index]) {
            selects.forEach((select, i) => {
                if (savedSelections[index][i]) {
                    select.value = savedSelections[index][i];
                }
            });
        }
    });
});
