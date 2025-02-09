document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const wardSelect = document.getElementById("ward");
    const ordinanceInputs = document.querySelectorAll(".ordNumber");
    const displaySection = document.querySelector(".displayOrdinance");
    
    const updateDisplay = (data) => {
        document.getElementById("Tbap").textContent = data.baptism;
        document.getElementById("Tconf").textContent = data.confermation;
        document.getElementById("Tinit").textContent = data.initatory;
        document.getElementById("Tend").textContent = data.endowment;
        document.getElementById("Tseal").textContent = data.sealingChild + data.sealingParent;
    };

    wardSelect.addEventListener("change", async () => {
        if (wardSelect.value === "Stake") {
            form.style.display = "none";
            const response = await fetch("http://localhost:3000/stakeSummary");
            const data = await response.json();
            updateDisplay(data);
        } else {
            form.style.display = "block";
            displaySection.style.display = "none";
        }
    });

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        let ordinances = {};
        ordinanceInputs.forEach((input) => {
            ordinances[input.name] = input.value;
        });

        await fetch("http://localhost:3000/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ward: wardSelect.value, ordinances }),
        });

        alert("Data submitted!");
        form.reset();
    });
});
