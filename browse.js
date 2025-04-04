document.addEventListener('DOMContentLoaded', function() {
    // Set profile name from localStorage
    const selectedProfile = localStorage.getItem('selectedProfile');
    const profileNameElement = document.getElementById('profileName');
    
    if (selectedProfile && profileNameElement) {
        profileNameElement.textContent = selectedProfile;
    }
    
    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Movie item hover effects
    const movieItems = document.querySelectorAll('.movie-item');
    
    movieItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // You could add enhanced hover functionality here
            // Like showing movie details, play button, etc.
        });
    });
    
    // Play button functionality
    const playButton = document.querySelector('.btn-play');
    if (playButton) {
        playButton.addEventListener('click', function() {
            alert('Play functionality would start the movie/show');
            // In a real app, this would trigger the video player
        });
    }
    
    // More Info button functionality
    const moreInfoButton = document.querySelector('.btn-more-info');
    if (moreInfoButton) {
        moreInfoButton.addEventListener('click', function() {
            alert('More Info would show details about the movie/show');
            // In a real app, this would open a modal with details
        });
    }
});