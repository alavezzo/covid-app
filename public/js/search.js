

document.getElementById('search-btn').addEventListener('click', (e) => {
    const zipCode = document.getElementById('search').value;
    // alert(zipCode);

    document.location.replace(`/zipcode/${zipCode}`);
});