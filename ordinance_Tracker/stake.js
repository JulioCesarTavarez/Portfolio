// JavaScript to handle form submission and update completed ordinances
document.addEventListener("DOMContentLoaded", () => {
    const wardSelect = document.getElementById("ward");
    const ordinanceSelect = document.getElementById("ordinance");
    const ordNumberInput = document.getElementById("ordNumber");
    const submitButton = document.querySelector("button");

    // Object to track ordinances for each ward
    const wardsData = {
        "1stWard": { baptism: 0, confermation: 0, initatory: 0, endowment: 0, sealing: 0 },
        "2ndWard": { baptism: 0, confermation: 0, initatory: 0, endowment: 0, sealing: 0 },
        "3rdWard": { baptism: 0, confermation: 0, initatory: 0, endowment: 0, sealing: 0 },
        "4thWard": { baptism: 0, confermation: 0, initatory: 0, endowment: 0, sealing: 0 },
        "Parker1st": { baptism: 0, confermation: 0, initatory: 0, endowment: 0, sealing: 0 },
        "Parker2nd": { baptism: 0, confermation: 0, initatory: 0, endowment: 0, sealing: 0 },
        "TG1st": { baptism: 0, confermation: 0, initatory: 0, endowment: 0, sealing: 0 },
        "TG2nd": { baptism: 0, confermation: 0, initatory: 0, endowment: 0, sealing: 0 },
        "Wilford1st": { baptism: 0, confermation: 0, initatory: 0, endowment: 0, sealing: 0 },
        "Wilford2nd": { baptism: 0, confermation: 0, initatory: 0, endowment: 0, sealing: 0 }
    };

    // Update totals in the DOM
    const updateTotals = () => {
        document.getElementById("Tbap").textContent = Object.values(wardsData).reduce((sum, ward) => sum + ward.baptism, 0);
        document.getElementById("Tconf").textContent = Object.values(wardsData).reduce((sum, ward) => sum + ward.confermation, 0);
        document.getElementById("Tinit").textContent = Object.values(wardsData).reduce((sum, ward) => sum + ward.initatory, 0);
        document.getElementById("Tend").textContent = Object.values(wardsData).reduce((sum, ward) => sum + ward.endowment, 0);
        document.getElementById("Tseal").textContent = Object.values(wardsData).reduce((sum, ward) => sum + ward.sealing, 0);
    };

    // Handle form submission
    submitButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent form from refreshing the page

        const ward = wardSelect.value;
        const ordinance = ordinanceSelect.value;
        const number = parseInt(ordNumberInput.value, 10);

        if (ward && ordinance && number && number > 0) {
            wardsData[ward][ordinance] += number;
            updateTotals();
            ordNumberInput.value = ""; // Clear the input
        } else {
            alert("Please fill out all fields with valid data.");
        }
    });
});