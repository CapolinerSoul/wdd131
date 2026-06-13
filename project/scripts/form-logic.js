(() => {
    const booperButton = document.getElementById("booper");
    const formContainer = document.getElementById("Q&A");
    const lockMessage = document.getElementById("notrepeating");
    const form = document.getElementById("Question-Form");

    // Verificación de seguridad de los elementos
    if (!booperButton || !formContainer || !lockMessage || !form) {
        console.error("[Form Logic] No se encontraron los elementos necesarios en el DOM.");
        return;
    }

    if (localStorage.getItem("questionSubmitted") === "true") {
        booperButton.classList.add("hidden");
        formContainer.classList.add("hidden");
        lockMessage.classList.remove("hidden");
        return; 
    }


    booperButton.replaceWith(booperButton.cloneNode(true));
    const activeBooper = document.getElementById("booper");

    activeBooper.addEventListener("click", () => {
        formContainer.classList.toggle("hidden");

        if (formContainer.classList.contains("hidden")) {
            activeBooper.textContent = "YES";
        } else {
            activeBooper.textContent = "Nevermind";
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        let completedReviews = parseInt(localStorage.getItem("reviewCount")) || 0;
        completedReviews += 1;
        localStorage.setItem("reviewCount", completedReviews);


        localStorage.setItem("questionSubmitted", "true");

        activeBooper.classList.add("hidden");
        formContainer.classList.add("hidden");
        lockMessage.classList.remove("hidden");

        console.log(`[Form] Envío exitoso. Total de revisiones: ${completedReviews}`);
    });
})();
