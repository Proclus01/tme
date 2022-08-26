document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const { value } = document.querySelector('input');

    if (value.includes('@')) {
        // must be valid
    } else {
        // must be invalid
    }
});