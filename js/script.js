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
/*const amenitiesContainer = document.querySelector('#amenities');

    if (amenitiesContainer) {

        const dataTitleAmenities = ['Онлайн-консультации', 'Профориентация', 'Развивающие занятия', 'Работа с родителями'];

        const titleAmenities = amenitiesContainer.querySelectorAll('.service-title');

        // console.log(titleAmenities); // проверка в консоли

        titleAmenities.forEach((item, index) => {
            item.textContent = dataTitleAmenities[index];
        });

    } 
 */   
    
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

/*Блок схема находится в images/Блок-схема*/

/*
 * АЛГОРИТМ ИЗМЕНЕНИЯ ФОНА МЕНЮ ПРИ НАВЕДЕНИИ
 * 1. Начало
 * 2. Получить все элементы меню с классом 'menu__link'
 *    2.1. Если элементы не найдены - завершить выполнение
 * 3. Для каждого элемента меню:
 *    3.1. Сохранить исходные цвета фона и текста
 *    3.2. Добавить обработчик события наведения (mouseenter):
 *        3.2.1. Изменить цвет фона на rgb(92, 150, 197)
 *        3.2.2. Установить белый цвет текста
 *        3.2.3. Добавить плавный переход (transition)
 *        3.2.4. Вывести в консоль сообщение о наведении
 *    3.3. Добавить обработчик события ухода курсора (mouseleave):
 *        3.3.1. Восстановить исходные цвета
 *        3.3.2. Вывести в консоль сообщение о снятии наведения
 * 4. Конец
 */

// Реализация функции
const setupMenuHoverEffect = () => {
    const menuLinks = document.querySelectorAll('.menu__link');
    
    menuLinks.forEach(link => {
        const originalBackground = link.style.backgroundColor;
        const originalColor = link.style.color;
        
        link.addEventListener('mouseenter', () => {
            link.style.backgroundColor = 'rgb(92, 150, 197)'; 
            link.style.color = '#ffffff';
            link.style.transition = 'all 0.3s ease';
            console.log(`Навели на: ${link.textContent}`);
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.backgroundColor = originalBackground || 'rgb(62, 120, 167)';
            link.style.color = originalColor || 'rgb(255, 255, 255)';
            console.log(`Ушли с: ${link.textContent}`);
        });
    });
};

    // Вызываем функцию после создания меню
    setupMenuHoverEffect();


//Предзагрузчик
const preloader = document.querySelector(".preloader");
    const content = document.querySelector(".content");
    if (preloader && content) {
        setTimeout(() => {
            // Скрываем прелоадер
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";

            // Показываем контент
            content.style.display = "block";

            // Удаляем элемент из DOM
            preloader.remove();
        }, 3000); // Задержка 3 секунды
    }
 // Загрузка заголовков услуг из JSON
          document.addEventListener('DOMContentLoaded', function() {
            const serviceTitles = document.querySelectorAll('.service-title');
            
            fetch('data.json')
              .then(response => response.json())
              .then(data => {
                // Проверяем, что данных достаточно для всех заголовков
                if(data.length >= serviceTitles.length) {
                  serviceTitles.forEach((title, index) => {
                    if(data[index]) {
                      title.textContent = data[index].title;
                    }
                  });
                } else {
                  console.error('Недостаточно данных в JSON для всех заголовков');
                }
              })
              .catch(error => {
                console.error('Ошибка при загрузке данных:', error);
              });
          });