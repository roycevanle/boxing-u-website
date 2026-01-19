// This file is currently empty.
// You can add JavaScript here later to add interactivity,
// such as a simple image carousel, form validation, or a menu toggle for mobile.

console.log("JavaScript file is linked and ready for coding!");

function toggleReveal(button) {
  const cardContainer = button.closest('.card-training');
  const revealCard = cardContainer.querySelector('.card-reveal');
  revealCard.classList.toggle('active');
}

// FAQ Carousel Functionality
class FAQCarousel {
  constructor() {
    this.track = document.querySelector('.faq-carousel-track');
    this.cards = document.querySelectorAll('.faq-carousel-card');
    this.prevBtn = document.querySelector('.faq-carousel-prev');
    this.nextBtn = document.querySelector('.faq-carousel-next');
    this.dots = document.querySelectorAll('.faq-dot');

    this.currentIndex = 0;
    this.cardsPerView = this.getCardsPerView();
    this.totalCards = this.cards.length;

    // Touch/swipe support
    this.startX = 0;
    this.currentX = 0;
    this.isDragging = false;
    this.startTransform = 0;

    this.init();
  }

  init() {
    // Button click events
    this.prevBtn.addEventListener('click', () => this.prev());
    this.nextBtn.addEventListener('click', () => this.next());

    // Dot click events
    this.dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        const index = parseInt(e.target.getAttribute('data-index'));
        this.goToSlide(index);
      });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });

    // Touch events for mobile swipe
    this.track.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
    this.track.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: false });
    this.track.addEventListener('touchend', () => this.handleTouchEnd());

    // Mouse events for desktop drag
    this.track.addEventListener('mousedown', (e) => this.handleMouseDown(e));
    this.track.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    this.track.addEventListener('mouseup', () => this.handleMouseUp());
    this.track.addEventListener('mouseleave', () => this.handleMouseUp());

    // Window resize handler
    window.addEventListener('resize', () => {
      this.cardsPerView = this.getCardsPerView();
      this.updateCarousel();
    });

    // Initial update
    this.updateCarousel();
  }

  getCardsPerView() {
    const width = window.innerWidth;
    if (width >= 1024) return 3; // Desktop
    if (width >= 768) return 2;  // Tablet
    return 1; // Mobile
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateCarousel();
    }
  }

  next() {
    const maxIndex = this.totalCards - this.cardsPerView;
    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
      this.updateCarousel();
    }
  }

  goToSlide(index) {
    const maxIndex = this.totalCards - this.cardsPerView;
    this.currentIndex = Math.min(index, maxIndex);
    this.updateCarousel();
  }

  updateCarousel() {
    const cardWidth = 100 / this.cardsPerView;
    const offset = -(this.currentIndex * cardWidth);
    this.track.style.transform = `translateX(${offset}%)`;

    // Update dot indicators
    this.dots.forEach((dot, index) => {
      dot.classList.remove('active');
      if (index === this.currentIndex) {
        dot.classList.add('active');
      }
    });

    // Update button states
    this.prevBtn.style.opacity = this.currentIndex === 0 ? '0.5' : '1';
    this.prevBtn.style.cursor = this.currentIndex === 0 ? 'not-allowed' : 'pointer';

    const maxIndex = this.totalCards - this.cardsPerView;
    this.nextBtn.style.opacity = this.currentIndex >= maxIndex ? '0.5' : '1';
    this.nextBtn.style.cursor = this.currentIndex >= maxIndex ? 'not-allowed' : 'pointer';
  }

  // Touch handlers
  handleTouchStart(e) {
    this.startX = e.touches[0].clientX;
    this.isDragging = true;
    this.startTransform = this.currentIndex;
  }

  handleTouchMove(e) {
    if (!this.isDragging) return;

    this.currentX = e.touches[0].clientX;
    const diff = this.startX - this.currentX;

    // Swipe threshold of 50px
    if (Math.abs(diff) > 50) {
      e.preventDefault();
    }
  }

  handleTouchEnd() {
    if (!this.isDragging) return;

    const diff = this.startX - this.currentX;
    const threshold = 50;

    if (diff > threshold) {
      this.next();
    } else if (diff < -threshold) {
      this.prev();
    }

    this.isDragging = false;
  }

  // Mouse handlers (desktop drag)
  handleMouseDown(e) {
    this.startX = e.clientX;
    this.isDragging = true;
    this.startTransform = this.currentIndex;
    this.track.style.cursor = 'grabbing';
  }

  handleMouseMove(e) {
    if (!this.isDragging) return;

    this.currentX = e.clientX;
  }

  handleMouseUp() {
    if (!this.isDragging) return;

    const diff = this.startX - this.currentX;
    const threshold = 50;

    if (diff > threshold) {
      this.next();
    } else if (diff < -threshold) {
      this.prev();
    }

    this.isDragging = false;
    this.track.style.cursor = 'grab';
  }
}

// Initialize carousel when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new FAQCarousel();
});