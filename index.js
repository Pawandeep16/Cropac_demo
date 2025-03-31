// Add smooth scroll behavior to the CTA button
document.querySelector('.cta-button').addEventListener('click', () => {
    const productSection = document.querySelector('.product-section');
    productSection.scrollIntoView({ behavior: 'smooth' });
});

// Add hover effect to social icons
document.querySelectorAll('.social-icons img').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.1)';
        icon.style.transition = 'transform 0.2s ease';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
    });
});

// Header hide/show on scroll
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 200) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe product section
observer.observe(document.querySelector('.product-section'));

// Observe feature items
document.querySelectorAll('.feature-item').forEach(item => {
    observer.observe(item);
});

// Add stagger effect to feature items
document.querySelectorAll('.feature-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
});

// Add observer for testimonial section
observer.observe(document.querySelector('.testimonial-section'));

// Add hover effect for quote marks
const testimonialContent = document.querySelector('.testimonial-content');
const quoteMarks = document.querySelectorAll('.quote-mark');

testimonialContent.addEventListener('mouseenter', () => {
    quoteMarks.forEach(mark => {
        mark.style.transform = 'scale(1.1)';
    });
});

testimonialContent.addEventListener('mouseleave', () => {
    quoteMarks.forEach(mark => {
        mark.style.transform = 'scale(1)';
    });
});

// Add observer for gallery section
observer.observe(document.querySelector('.gallery-section'));

// Add stagger effect to gallery items
document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(item);
});

// Video thumbnail click handler
const videoContainer = document.querySelector('.video-container');
if (videoContainer) {
    videoContainer.addEventListener('click', () => {
        // Here you can implement video player functionalitya
        console.log('Video player clicked');
    });
}

// Add observer for features section
observer.observe(document.querySelector('.features-section'));

// Add stagger effect to feature items in the features section
document.querySelectorAll('.features-section .feature-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(item);
});

// Add observer for Q&A section
observer.observe(document.querySelector('.qa-section'));

// Add stagger effect to Q&A items
document.querySelectorAll('.qa-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.2}s`;
    observer.observe(item);
});

// Add observer for team section
observer.observe(document.querySelector('.team-section'));

// Add stagger effect to team members
document.querySelectorAll('.team-member').forEach((member, index) => {
    member.style.transitionDelay = `${index * 0.2}s`;
    observer.observe(member);
});