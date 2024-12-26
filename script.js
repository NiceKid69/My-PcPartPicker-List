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
        listItem.innerHTML = `
            ${part.name} - $${part.price.toFixed(2)}
            <button onclick="addToBuild(${part.id})">Add to Build</button>
        `;
        partsList.appendChild(listItem);
    });

    document.getElementById('parts').appendChild(partsList);
}

function addToBuild(partId) {
    const parts = [
        { id: 1, name: 'CPU', price: 299.99 },
        { id: 2, name: 'GPU', price: 699.99 },
        { id: 3, name: 'RAM', price: 149.99 },
        // Add more parts as needed
    ];

    const selectedPart = parts.find(part => part.id === partId);
    const buildList = document.getElementById('build-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${selectedPart.name} - $${selectedPart.price.toFixed(2)}`;
    buildList.appendChild(listItem);

    updateTotal(selectedPart.price);
}

function updateTotal(price) {
    const totalElement = document.getElementById('total');
    const currentTotal = parseFloat(totalElement.textContent.split('$')[1]) || 0;
    const newTotal = currentTotal + price;
    totalElement.textContent = `Total: $${newTotal.toFixed(2)}`;
}
