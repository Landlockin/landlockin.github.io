const skjema = document.getElementById('skjema');

skjema.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const billetSelect = document.getElementById('billet');
    const billet = Array.from(billetSelect.selectedOptions).map(option => option.value);

    const farge = document.getElementById('farge').value;
    console.log('Navn:', name);
    console.log('E-post:', email);
    console.log('Telefonnummer:', number);
    console.log('Billet:', billet);
});