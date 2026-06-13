document.addEventListener("DOMContentLoaded", () => {
    const lazySection = document.getElementById("lazy-ask-section");

    if (!lazySection) return;

    // Configuración del observador de intersección
    const observerOptions = {
        root: null, // Usa el viewport del navegador
        rootMargin: "150px", // Precarga el script 150px antes de que aparezca en pantalla
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si la sección entra en el rango establecido
            if (entry.isIntersecting) {
                console.log("[Lazy Load] Cargando lógica del formulario...");
                
                // Crear e inyectar dinámicamente el script funcional
                const formScript = document.createElement("script");
                formScript.src = "scripts/form-logic.js";
                formScript.async = true;
                document.body.appendChild(formScript);

                // Desactivar el observador para evitar múltiples cargas del mismo archivo
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sectionObserver.observe(lazySection);
});