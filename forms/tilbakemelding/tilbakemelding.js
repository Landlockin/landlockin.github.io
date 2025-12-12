const skjema = document.getElementById('skjema');

skjema.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const stjernerSelect = document.getElementById('stjerner');
    const stjerner = Array.from(stjernerSelect.selectedOptions).map(option => option.value);
    const comment = document.getElementById('comment').value;
    
    console.log('Navn:', name);
    console.log('E-post:', email);
    console.log('Rating:', stjerner);
    console.log('Tilbakemelding:', comment);
});