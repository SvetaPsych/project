'use strict'

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
});

document.querySelector('button').addEventListener('click', function() {
    console.log('Клик по кнопке!');
});

// Слайдер
        document.addEventListener('DOMContentLoaded', function() {
            // Инициализация Swiper
            const swiper = new Swiper('.swiper', {
                // Параметры
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
            
            // Кнопка "Наверх"
            const scrollTopBtn = document.querySelector('.scroll-top');
            
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    scrollTopBtn.style.display = 'flex';
                } else {
                    scrollTopBtn.style.display = 'none';
                }
            });
            
            scrollTopBtn.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });



// Динамический вывод заголовка
const amenitiesContainer = document.querySelector('#amenities');

    if (amenitiesContainer) {

        const dataTitleAmenities = ['Онлайн-консультации', 'Профориентация', 'Развивающие занятия', 'Работа с родителями'];

        const titleAmenities = amenitiesContainer.querySelectorAll('.service-title');

        // console.log(titleAmenities); // проверка в консоли

        titleAmenities.forEach((item, index) => {
            item.textContent = dataTitleAmenities[index];
        });

    } 
    
    
// Динамическое меню
const headerMenu = document.querySelector('.header__menu');

if (headerMenu) {
    const menuList = headerMenu.querySelector('.menu');
    
    const menuData = {
        link1: {
            link: 'index.html',
            title: 'Главная'
        },
        link2: {
            link: '#amenities',
            title: 'Услуги'
        },
        link3: {
            link: '#feedback',
            title: 'Обратная связь'
        }
    };
    
    const createMenuItem = (url, title) => {
        return `
            <li><a class="menu__link" href="${url}">${title}</a></li>
        `;
    };
    
    for (const item in menuData) {
        const menuItem = menuData[item];
        const menuItemHTML = createMenuItem(menuItem.link, menuItem.title);
        menuList.insertAdjacentHTML('beforeend', menuItemHTML);
    }
    console.log('Навигационное меню создано с помощью JavaScript!');
}
  // Функция для изменения фона при наведении
    const setupMenuHoverEffect = () => {
        const menuLinks = document.querySelectorAll('.menu__link');
        
        menuLinks.forEach(link => {
            // Сохраняем исходные стили
            const originalBackground = link.style.backgroundColor;
            const originalColor = link.style.color;
            
            // При наведении
            link.addEventListener('mouseenter', () => {
                link.style.backgroundColor = 'rgb(92, 150, 197)'; 
                link.style.color = '#ffffff';
                link.style.transition = 'all 0.3s ease';
                console.log(`Навели на: ${link.textContent}`);
            });
            
            // При уходе курсора
            link.addEventListener('mouseleave', () => {
                link.style.backgroundColor = originalBackground || 'rgb(62, 120, 167)';
                link.style.color = originalColor || 'rgb(255, 255, 255)';
                console.log(`Ушли с: ${link.textContent}`);
            });
        });
    };

    // Вызываем функцию после создания меню
    setupMenuHoverEffect();
