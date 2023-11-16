document.addEventListener("DOMContentLoaded", function() {
    // Logic for Blog Posts
    var blogPosts = document.querySelectorAll('.blog-entry').length;
    var blogLoadMoreButton = document.querySelector('.colorlib-blog .btn-load-more'); // Specific to blog section

    if (blogPosts > 3) {
        blogLoadMoreButton.style.display = 'block';
    } else {
        blogLoadMoreButton.style.display = 'none';
    }

    // Logic for Projects
    var projects = document.querySelectorAll('.project').length;
    var projectLoadMoreButton = document.querySelector('.colorlib-work .btn-load-more'); // Specific to work section

    if (projects > 6) {
        projectLoadMoreButton.style.display = 'block';
    } else {
        projectLoadMoreButton.style.display = 'none';
    }
});

