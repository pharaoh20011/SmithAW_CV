/**
 * Tell-A-Friend Landscaping Landing Page
 * Interactive Logic, Form Validation, and Custom Gallery Lightbox
 */

document.addEventListener('DOMContentLoaded', () => {
    initHeroVideo();
    initStickyHeader();
    initScrollSpy();
    initContactForm();
    initLightboxGallery();
    initManualFallbacks();
    initBackToTop();
});

/**
 * Sticky Header Transition on Scroll
 */
function initStickyHeader() {
    const navbar = document.querySelector('.sticky-navbar');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger immediately in case page is loaded scrolled down
}

/**
 * Custom ScrollSpy to highlight active navigation link
 */
function initScrollSpy() {
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 100; // Offset for sticky navbar
        
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
                currentSectionId = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
}

/**
 * Form Validation and Success Message Handling
 */
function initContactForm() {
    const form = document.getElementById('estimateForm');
    const successAlert = document.getElementById('successMessage');
    
    if (!form) return;
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();
        
        let isValid = true;
        
        // Reset previous validation styles
        form.classList.remove('was-validated');
        
        // Name field validation
        const nameInput = document.getElementById('fullName');
        if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
            setFieldInvalid(nameInput);
            isValid = false;
        } else {
            setFieldValid(nameInput);
        }
        
        // Phone field validation (American phone format: 10 digits minimum)
        const phoneInput = document.getElementById('phone');
        const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (!phoneRegex.test(phoneInput.value.trim())) {
            setFieldInvalid(phoneInput);
            isValid = false;
        } else {
            setFieldValid(phoneInput);
        }
        
        // Email field validation
        const emailInput = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            setFieldInvalid(emailInput);
            isValid = false;
        } else {
            setFieldValid(emailInput);
        }
        
        // Address validation
        const addressInput = document.getElementById('address');
        if (!addressInput.value.trim() || addressInput.value.trim().length < 5) {
            setFieldInvalid(addressInput);
            isValid = false;
        } else {
            setFieldValid(addressInput);
        }
        
        // Service validation
        const serviceSelect = document.getElementById('service');
        if (serviceSelect.value === "") {
            setFieldInvalid(serviceSelect);
            isValid = false;
        } else {
            setFieldValid(serviceSelect);
        }
        
        // Spam verification validation (Local resident captcha check)
        const spamCheck = document.getElementById('captchaCheck');
        const feedbackContainer = document.getElementById('captchaFeedback');
        if (!spamCheck.checked) {
            spamCheck.classList.add('is-invalid');
            if (feedbackContainer) feedbackContainer.style.display = 'block';
            isValid = false;
        } else {
            spamCheck.classList.remove('is-invalid');
            spamCheck.classList.add('is-valid');
            if (feedbackContainer) feedbackContainer.style.display = 'none';
        }
        
        if (isValid) {
            // Process successful submission
            form.style.display = 'none';
            successAlert.classList.remove('d-none');
            successAlert.style.opacity = '0';
            successAlert.style.display = 'block';
            
            // Nice fade-in transition
            setTimeout(() => {
                successAlert.style.transition = 'opacity 0.6s ease';
                successAlert.style.opacity = '1';
            }, 50);
            
            // Scroll to success banner smoothly
            successAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Reset form fields
            form.reset();
            const validFields = form.querySelectorAll('.is-valid');
            validFields.forEach(f => f.classList.remove('is-valid'));
        } else {
            // Highlight issues
            form.classList.add('was-validated');
            // Focus on first invalid field
            const firstInvalid = form.querySelector('.is-invalid');
            if (firstInvalid) firstInvalid.focus();
        }
    });
    
    // Add real-time input listeners to remove invalid indicators on correction
    form.querySelectorAll('input, select').forEach(field => {
        field.addEventListener('input', () => {
            if (field.type === 'checkbox') {
                if (field.checked) {
                    field.classList.remove('is-invalid');
                    field.classList.add('is-valid');
                    const feedback = document.getElementById('captchaFeedback');
                    if (feedback) feedback.style.display = 'none';
                }
            } else {
                if (field.checkValidity() && field.value.trim() !== '') {
                    field.classList.remove('is-invalid');
                    field.classList.add('is-valid');
                }
            }
        });
    });
}

function setFieldInvalid(element) {
    element.classList.remove('is-valid');
    element.classList.add('is-invalid');
}

function setFieldValid(element) {
    element.classList.remove('is-invalid');
    element.classList.add('is-valid');
}

/**
 * Lightbox Gallery System
 */
function initLightboxGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length === 0) return;
    
    // Create lightbox modal elements dynamically in DOM
    const lightboxModal = document.createElement('div');
    lightboxModal.className = 'lightbox-modal';
    lightboxModal.id = 'customLightbox';
    lightboxModal.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close" id="lightboxClose" aria-label="Close lightbox">&times;</button>
            <button class="lightbox-nav lightbox-prev" id="lightboxPrev" aria-label="Previous image">&#10094;</button>
            <div class="lightbox-comparison">
                <div class="lightbox-before">
                    <img class="lightbox-img-before" src="" alt="Before landscaping work">
                    <div class="lightbox-label">Before</div>
                </div>
                <div class="lightbox-after">
                    <img class="lightbox-img-after" src="" alt="After landscaping work">
                    <div class="lightbox-label">After</div>
                </div>
            </div>
            <button class="lightbox-nav lightbox-next" id="lightboxNext" aria-label="Next image">&#10095;</button>
            <div class="lightbox-caption" id="lightboxCaption"></div>
        </div>
    `;
    document.body.appendChild(lightboxModal);
    
    const lightboxImgBefore = lightboxModal.querySelector('.lightbox-img-before');
    const lightboxImgAfter = lightboxModal.querySelector('.lightbox-img-after');
    const lightboxCap = lightboxModal.querySelector('#lightboxCaption');
    const closeBtn = lightboxModal.querySelector('#lightboxClose');
    const prevBtn = lightboxModal.querySelector('#lightboxPrev');
    const nextBtn = lightboxModal.querySelector('#lightboxNext');
    
    let currentIndex = 0;
    const imagesData = Array.from(galleryItems).map(item => {
        return {
            beforeSrc: item.getAttribute('data-before'),
            afterSrc: item.getAttribute('data-after'),
            title: item.querySelector('h4').textContent,
            category: item.querySelector('p').textContent
        };
    });
    
    function openLightbox(index) {
        currentIndex = index;
        updateLightboxContent();
        lightboxModal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Lock background scroll
    }
    
    function closeLightbox() {
        lightboxModal.classList.remove('show');
        document.body.style.overflow = ''; // Restore scroll
    }
    
    function updateLightboxContent() {
        const item = imagesData[currentIndex];
        lightboxImgBefore.src = item.beforeSrc;
        lightboxImgAfter.src = item.afterSrc;
        lightboxCap.textContent = `${item.title} - ${item.category}`;
    }
    
    function showNext() {
        currentIndex = (currentIndex + 1) % imagesData.length;
        updateLightboxContent();
    }
    
    function showPrev() {
        currentIndex = (currentIndex - 1 + imagesData.length) % imagesData.length;
        updateLightboxContent();
    }
    
    // Bind click events on gallery cards
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            openLightbox(index);
        });
    });
    
    // Close events
    closeBtn.addEventListener('click', closeLightbox);
    lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal || e.target.classList.contains('lightbox-content')) {
            closeLightbox();
        }
    });
    
    // Nav events
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showNext();
    });
    
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showPrev();
    });
    
    // Keyboard navigation (accessibility compliance)
    document.addEventListener('keydown', (e) => {
        if (!lightboxModal.classList.contains('show')) return;
        
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            showNext();
        } else if (e.key === 'ArrowLeft') {
            showPrev();
        }
    });
}

/**
 * Manual fallbacks for Bootstrap elements (Navbar, Tabs, Carousel)
 * This ensures full functionality in offline/restricted network environments where CDNs are blocked.
 */
function initManualFallbacks() {
    // 1. Mobile Navbar collapse toggle
    const toggler = document.querySelector('.navbar-toggler');
    const collapse = document.querySelector('#navbarNav');
    if (toggler && collapse) {
        toggler.addEventListener('click', (e) => {
            e.preventDefault();
            const expanded = toggler.getAttribute('aria-expanded') === 'true';
            toggler.setAttribute('aria-expanded', !expanded);
            collapse.classList.toggle('show');
        });
        
        // Close menu when clicking a link
        const links = collapse.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                collapse.classList.remove('show');
                toggler.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // 2. Branded Fleet Image Tabs (Fallback)
    const tabLinks = document.querySelectorAll('#pills-tab .nav-link');
    const tabPanes = document.querySelectorAll('#pills-tabContent .tab-pane');
    
    if (tabLinks.length > 0 && tabPanes.length > 0) {
        tabLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // Remove active classes
                tabLinks.forEach(l => l.classList.remove('active'));
                tabPanes.forEach(p => p.classList.remove('show', 'active'));
                
                // Add active to current link
                link.classList.add('active');
                
                // Show target pane
                const targetSelector = link.getAttribute('data-bs-target');
                const targetPane = document.querySelector(targetSelector);
                if (targetPane) {
                    targetPane.classList.add('show', 'active');
                }
            });
        });
    }

    // 3. Testimonial Carousel sliding (Fallback)
    const carousel = document.getElementById('testimonialCarousel');
    if (carousel) {
        const slides = carousel.querySelectorAll('.carousel-item');
        const dots = carousel.querySelectorAll('.carousel-indicators button');
        const prevBtn = carousel.querySelector('.carousel-control-prev');
        const nextBtn = carousel.querySelector('.carousel-control-next');
        let currentIdx = 0;

        function goToSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active', 'show');
                if (i === index) {
                    slide.classList.add('active');
                    // Add fade transition helper
                    setTimeout(() => slide.classList.add('show'), 50);
                }
            });
            dots.forEach((dot, i) => {
                dot.classList.remove('active');
                if (i === index) {
                    dot.classList.add('active');
                }
            });
            currentIdx = index;
        }

        if (prevBtn && nextBtn) {
            prevBtn.removeAttribute('data-bs-slide');
            nextBtn.removeAttribute('data-bs-slide');
            
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                let prevIdx = currentIdx - 1;
                if (prevIdx < 0) prevIdx = slides.length - 1;
                goToSlide(prevIdx);
            });

            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                let nextIdx = (currentIdx + 1) % slides.length;
                goToSlide(nextIdx);
            });
        }

        dots.forEach((dot, i) => {
            dot.removeAttribute('data-bs-slide-to');
            dot.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                goToSlide(i);
            });
        });

        // Auto play loop
        let autoPlayTimer = setInterval(() => {
            let nextIdx = (currentIdx + 1) % slides.length;
            goToSlide(nextIdx);
        }, 5000);

        // Pause on hover
        carousel.addEventListener('mouseenter', () => clearInterval(autoPlayTimer));
        carousel.addEventListener('mouseleave', () => {
            clearInterval(autoPlayTimer);
            autoPlayTimer = setInterval(() => {
                let nextIdx = (currentIdx + 1) % slides.length;
                goToSlide(nextIdx);
            }, 5000);
        });
    }
}

/**
 * Back to Top Button visibility and smooth scroll handler
 */
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Hero background video fade-in helper
 */
function initHeroVideo() {
    const video = document.querySelector('.hero-video');
    if (!video) return;

    const handlePlay = () => {
        video.classList.add('is-playing');
    };

    // If video is already playing
    if (video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2) {
        handlePlay();
    } else {
        video.addEventListener('playing', handlePlay);
        video.addEventListener('canplay', handlePlay);
        setTimeout(handlePlay, 2000); // hard fallback after 2s
    }
}

