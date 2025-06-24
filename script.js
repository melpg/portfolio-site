document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    document.getElementById("formMessage").textContent = `Thank you, ${name}! I will contact you soon.`;
});
