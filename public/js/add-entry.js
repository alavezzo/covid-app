async function newEntryHandler() {
    event.preventDefault();

    const name = document.querySelector('input[name="entry-name"]').value;
    const zipcode = document.querySelector('input[name="entry-zipcode"]').value;
    const mask = document.querySelector('select[name="entry-mask"]').value[0];
    const date = document.querySelector('input[name="entry-date"]').value;
    const distance = document.querySelector('select[name="entry-distance"]').value[0];
    let sanitizer = document.querySelector('select[name="entry-sanitizer"]').value;
    let vaccineCard = document.querySelector('select[name="entry-card"]').value;
    const comment = document.querySelector('textarea[name="entry-comment"]').value;

    if (sanitizer === 'Yes') {
        sanitizer = 1
    } else {
        sanitizer = 0
    };

    if (vaccineCard === 'Yes') {
        vaccineCard = 1
    } else {
        vaccineCard = 0
    };

    const response = await fetch(`/api/entries`, {
        method: 'POST',
        body: JSON.stringify({
            name,
            zipcode,
            date,
            mask,
            distance,
            sanitizer,
            vaccineCard,
            comment
        }),
        headers: {'Content-Type': 'application/json'}
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

// configure HTML to 
document.querySelector('.new-entry-form').addEventListener('submit', newEntryHandler)