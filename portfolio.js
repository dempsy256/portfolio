 document.addEventListener('DOMContentLoaded', () => {
            // Wait for 3 seconds before hiding the loader and showing the content
            const loadingDuration = 3000;
            const loader = document.querySelector('.atom-container');
            const mainContent = document.querySelector('.main-content');

            setTimeout(() => {
                if (loader && mainContent) {
                    // Hide the loader with a fade-out effect
                    loader.style.opacity = '0';

                    // After the fade-out, hide the loader completely and show the main content
                    setTimeout(() => {
                        loader.style.display = 'none';
                        mainContent.classList.add('visible');
                        document.body.style.overflow = 'auto'; // Re-enable scrolling
                    }, 500); // This duration should match the CSS transition duration
                }
            }, loadingDuration);
            
            // Script for animating the skill bars
            const htmlBar = document.getElementById('html-bar');
            const cssBar = document.getElementById('css-bar');
            const jsBar = document.getElementById('js-bar');
            const figmaBar = document.getElementById('figma-bar');
            
            const htmlPercentage = document.getElementById('html-percentage');
            const cssPercentage = document.getElementById('css-percentage');
            const jsPercentage = document.getElementById('js-percentage');
            const figmaPercentage = document.getElementById('figma-percentage');

            const animateProgressBar = (bar, percentage, label) => {
                let currentPercentage = 0;
                const interval = setInterval(() => {
                    if (currentPercentage < percentage) {
                        currentPercentage++;
                        bar.style.width = currentPercentage + '%';
                        label.textContent = currentPercentage + '%';
                    } else {
                        clearInterval(interval);
                    }
                }, 15);
            };

            const htmlTarget = 70;
            const cssTarget = 50;
            const jsTarget = 35;
            const figmaTarget = 80;

            animateProgressBar(htmlBar, htmlTarget, htmlPercentage);
            animateProgressBar(cssBar, cssTarget, cssPercentage);
            animateProgressBar(jsBar, jsTarget, jsPercentage);
            animateProgressBar(figmaBar, figmaTarget, figmaPercentage);

            // Script for toggling the resume
            const resumeButtons = document.querySelectorAll('.button');
            const resumeContainer = document.querySelector('.resume-container');
            resumeButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    resumeContainer.classList.toggle('hidden');
                });
            });
        });