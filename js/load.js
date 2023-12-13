document.addEventListener("DOMContentLoaded", function() {
    // Logic for Blog Posts
    var blogEntries = document.querySelectorAll('.colorlib-blog .blog-entry'); // Define blogEntries here
    var blogLoadMoreButton = document.querySelector('.colorlib-blog .btn-load-more'); // Specific to blog section
    
    // Initially display only the first 3 blog entries
    blogEntries.forEach((entry, index) => {
        if (index > 2) {
            entry.style.display = 'none'; // Hide extra entries
        }
    });

    if (blogEntries.length > 3) {
        blogLoadMoreButton.style.display = 'block';
    } else {
        blogLoadMoreButton.style.display = 'none';
    }

    // Add event listener to the Load More button
    blogLoadMoreButton.addEventListener('click', function() {
        // Show all blog entries
        blogEntries.forEach((entry) => {
            entry.style.display = 'block';
        });
        // Optionally, hide the Load More button
        blogLoadMoreButton.style.display = 'none';
    });


    // Logic for Projects
    var projects = document.querySelectorAll('.project').length;
    var projectLoadMoreButton = document.querySelector('.colorlib-work .btn-load-more'); // Specific to work section

    if (projects > 6) {
        projectLoadMoreButton.style.display = 'block';
    } else {
        projectLoadMoreButton.style.display = 'none';
    }
});

