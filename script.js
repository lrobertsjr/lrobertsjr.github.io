// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // For landing page
    const netflixLogo = document.getElementById('netflix-logo');
    const netflixSound = document.getElementById('netflix-sound');

    // Only proceed if we're on the landing page
    if (netflixLogo && netflixSound) {
        // Click event for the Netflix logo
        netflixLogo.addEventListener('click', function() {
            // Add animation class
            netflixLogo.classList.add('animate');
            
            // Play Netflix sound
            // Note: Many browsers block autoplay, so this might only work on user interaction
            try {
                netflixSound.play().catch(error => {
                    console.log('Audio play failed:', error);
                    // Continue with redirect even if sound fails
                    setTimeout(redirectToProfiles, 1500);
                });

                // Listen for sound finished or time out after 2 seconds
                netflixSound.onended = redirectToProfiles;
                setTimeout(redirectToProfiles, 2500); // Backup timeout
            } catch (error) {
                console.log('Audio error:', error);
                // Fall back to just the animation
                setTimeout(redirectToProfiles, 1500);
            }

            function redirectToProfiles() {
                window.location.href = 'profiles.html';
            }
        });
    }

    // For profiles page
    const profiles = document.querySelectorAll('.profile');
    
    // Set up background GIFs for profiles page
    if (profiles.length > 0) {
        // Set up the background GIFs for each profile
        // Note: You'll need to replace these with actual GIF URLs in your project
        document.getElementById('recruiter-bg').style.backgroundImage = "url('images/recruiter-background.gif')";
        document.getElementById('learner-bg').style.backgroundImage = "url('images/learner-background.gif')";
        document.getElementById('curious-bg').style.backgroundImage = "url('images/curious-background.gif')";
        
        // Add hover events to show the appropriate background
        profiles.forEach(profile => {
            // Mouseover event to show background
            profile.addEventListener('mouseenter', function() {
                const bgId = this.getAttribute('data-bg');
                const background = document.getElementById(bgId);
                if (background) {
                    // Hide all backgrounds first
                    document.querySelectorAll('.profile-background').forEach(bg => {
                        bg.style.opacity = 0;
                    });
                    // Show this one
                    background.style.opacity = 0.3;
                }
            });
            
            // Click event to navigate
            profile.addEventListener('click', function() {
                // Get the profile type from the data attribute
                const profileType = this.getAttribute('data-profile-type');
                
                // Redirect to the appropriate section or page
                window.location.href = `portfolio.html?profile=${profileType}`;
            });
        });
        
        // Reset backgrounds when not hovering over any profile
        document.querySelector('.profiles-container').addEventListener('mouseleave', function() {
            document.querySelectorAll('.profile-background').forEach(bg => {
                bg.style.opacity = 0;
            });
        });
    }
    
    // For portfolio page
    if (document.querySelector('.content-row')) {
        // Row navigation functionality
        const rowContainers = document.querySelectorAll('.row-container');
        
        // Set up navigation for each row
        rowContainers.forEach(container => {
            const parent = container.parentElement;
            const navLeft = parent.querySelector('.row-nav-left');
            const navRight = parent.querySelector('.row-nav-right');
            
            if (navLeft && navRight) {
                // Scroll left
                navLeft.addEventListener('click', () => {
                    container.scrollBy({
                        left: -600,
                        behavior: 'smooth'
                    });
                });
                
                // Scroll right
                navRight.addEventListener('click', () => {
                    container.scrollBy({
                        left: 600,
                        behavior: 'smooth'
                    });
                });
            }
        });
    }
});