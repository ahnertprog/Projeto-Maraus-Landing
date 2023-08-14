function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("show");
}

        const images = [
            'imagens/banners/banner.jpg',
            'imagens/banners/banner2.jpeg',
            'imagens/banners/banner3.jpg'
            ];
            
            const banner = document.querySelector('.banner');
            let currentImageIndex = 0;
            
            function changeImage() {
            banner.style.backgroundImage = `url('${images[currentImageIndex]}')`;
            currentImageIndex = (currentImageIndex + 1) % images.length;
            }

            changeImage();
            

            setInterval(changeImage, 5000);

             


             function isElementInViewport(element) {
                var rect = element.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }
            
            function animateOnScroll() {
                var animatedElements = document.querySelectorAll('.animated');
                
                animatedElements.forEach(function(element) {
                    if (isElementInViewport(element)) {
                        element.classList.add('show');
                    }
                });
            }
            
            window.addEventListener('scroll', animateOnScroll);
            window.addEventListener('load', animateOnScroll); 
