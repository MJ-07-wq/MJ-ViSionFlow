document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('start-project').addEventListener('click', function(event) {
        event.preventDefault(); // Verhindert das Standardverhalten des Links
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
});