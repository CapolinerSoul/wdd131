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

    // ==========================================
    // 1. CONTROL DE BLOQUEO (localStorage)
    // ==========================================
    if (localStorage.getItem("questionSubmitted") === "true") {
        booperButton.classList.add("hidden");
        formContainer.classList.add("hidden");
        lockMessage.classList.remove("hidden");
        return; 
    }

    // ==========================================
    // 2. CORRECCIÓN DEL BOTÓN (YES / Nevermind)
    // ==========================================
    // Removemos cualquier evento previo para evitar duplicados al recargar el script de forma laxa
    booperButton.replaceWith(booperButton.cloneNode(true));
    const activeBooper = document.getElementById("booper");

    activeBooper.addEventListener("click", () => {
        // Alternar visibilidad
        formContainer.classList.toggle("hidden");

        // Condición corregida: Si tiene la clase 'hidden', el formulario está CERRADO (debe decir YES)
        if (formContainer.classList.contains("hidden")) {
            activeBooper.textContent = "YES";
        } else {
            activeBooper.textContent = "Nevermind";
        }
    });

    // ==========================================
    // 3. ENVÍO DEL FORMULARIO
    // ==========================================
    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        // Incrementar el contador general requerido
        let completedReviews = parseInt(localStorage.getItem("reviewCount")) || 0;
        completedReviews += 1;
        localStorage.setItem("reviewCount", completedReviews);

        // Bloquear futuros envíos
        localStorage.setItem("questionSubmitted", "true");

        // Ocultar la interfaz por completo
        activeBooper.classList.add("hidden");
        formContainer.classList.add("hidden");
        lockMessage.classList.remove("hidden");

        console.log(`[Form] Envío exitoso. Total de revisiones: ${completedReviews}`);
    });
})();
