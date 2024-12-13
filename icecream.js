// Update the flavor selection
function selectFlavor() {
    const flavor = document.getElementById("flavor-select").value;
    const selectedFlavorText = `You have selected: ${flavor}`;
    document.getElementById("selected-flavor").textContent = selectedFlavorText;
}

// Show alert for selected ice cream
function showAlert(flavor) {
    alert(`You clicked on ${flavor} ice cream!`);
}

// Learn More action
function learnMore() {
    alert("Thank you for visiting Ice Cream World! More content coming soon!");
}
