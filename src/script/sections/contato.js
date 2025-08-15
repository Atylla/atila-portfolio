export const formulario = () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value
        };

        const res = await fetch("/src/api/sendForm", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const result = await res.json();
        alert(result.message || result.error);
    });

}