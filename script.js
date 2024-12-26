document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('parts.html')) {
        displayParts();
    }
});

function displayParts() {
    const parts = [
        { id: 1, name: 'CPU', price: 299.99 },
        { id: 2, name: 'GPU', price: 699.99 },
        { id: 3, name: 'RAM', price: 149.99 },
        // Add more parts as needed
    ];

    const partsList = document.createElement('ul');

    parts.forEach(part => {
        const listItem = document.createElement('li');
        listItem.textContent = `${part.name} - $${part.price}`;
        partsList.appendChild(listItem);
    });

    document.body.appendChild(partsList);
}
