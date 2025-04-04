// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get all profile elements
    const profiles = document.querySelectorAll('.profile');
    
    // Add click event listeners to each profile
    profiles.forEach(profile => {
        profile.addEventListener('click', function() {
            // Get the profile name or id (you may want to add data attributes for this)
            const profileName = this.querySelector('.profile-name').textContent;
            
            // Store selected profile in localStorage (optional)
            localStorage.setItem('selectedProfile', profileName);
            
            // Navigate to the browse page
            window.location.href = 'browse.html';
        });
        
        // Add hover effects
        profile.addEventListener('mouseenter', function() {
            this.classList.add('profile-hover');
        });
        
        profile.addEventListener('mouseleave', function() {
            this.classList.remove('profile-hover');
        });
    });
});