document.querySelectorAll('.work-menu a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const category = this.getAttribute('data-filter');

        document.querySelectorAll('.project').forEach(project => {
            const categories = JSON.parse(project.getAttribute('data-category')); // Parse JSON-like string to array
            if (categories.includes(category) || category === 'all') {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});