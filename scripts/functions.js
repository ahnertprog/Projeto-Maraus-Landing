function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("show"); // Adiciona ou remove a classe 'show'
}


var btnParceiro = document.getElementById('btnParceiro');
btnParceiro.addEventListener('click', function() {
    var bannersSection = document.getElementById('banners');

    bannersSection.scrollIntoView({ behavior: 'smooth' });
});


var btnCliente = document.getElementById('btnCliente');
btnCliente.addEventListener('click', function() {
    var pacotesSection = document.getElementById('pacotes');

    pacotesSection.scrollIntoView({ behavior: 'smooth' });
});


        // Banners ficarem alterando
        // Array com URLs das imagens
        const images = [
            'imagens/banners/banner.jpg',
            'imagens/banners/banner2.jpeg',
            'imagens/banners/banner3.jpg'
            ];
            
            
        const imagens = [
            'imagens/banners/banner4.jpg',
            'imagens/banners/banner5.jpg',
            'imagens/banners/banner6.jpg'
        ];
            const banners = document.querySelector('.banners');
            let currentImagensIndex = 0;

            function changeImagens() {
                banners.style.backgroundImage = `url('${imagens[currentImagensIndex]}')`;
                currentImagensIndex = (currentImagensIndex + 1) % imagens.length;
            }
            changeImagens();

            setInterval(changeImagens, 5000);

            const banner = document.querySelector('.banner');
            let currentImageIndex = 0;
            
            function changeImage() {
            banner.style.backgroundImage = `url('${images[currentImageIndex]}')`;
            currentImageIndex = (currentImageIndex + 1) % images.length;
            }

            changeImage();
            
            // Alterna a imagem a cada 5 segundos
            setInterval(changeImage, 5000);
             // 5000 milissegundos = 5 
             


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
            window.addEventListener('load', animateOnScroll); // Para animar elementos que já estão visíveis no carregamento da página
  

            