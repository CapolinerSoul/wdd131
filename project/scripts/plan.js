document.addEventListener("DOMContentLoaded", () => {
    const lazySection = document.getElementById("lazy-ask-section");

    if (!lazySection) return;

    const observerOptions = {
        root: null,
        rootMargin: "150px",
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("[Lazy Load] Cargando lógica del formulario...");
                
                const formScript = document.createElement("script");
                formScript.src = "scripts/form-logic.js";
                formScript.async = true;
                document.body.appendChild(formScript);

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sectionObserver.observe(lazySection);
});