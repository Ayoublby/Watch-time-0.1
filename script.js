// إظهار/إخفاء قائمة البرغر منيو مع تأثير محسّن
function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    const burger = document.querySelector('.burger-menu');
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');

    // تأثير إضافي للسلاسة عند الظهور/الإخفاء
    if (menu.classList.contains('active')) {
        menu.style.opacity = '0';
        setTimeout(() => {
            menu.style.opacity = '1';
        }, 50);
    }
}

// إغلاق القائمة عند النقر خارجها
document.addEventListener('click', function(event) {
    const menu = document.querySelector('.nav-menu');
    const burger = document.querySelector('.burger-menu');
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnBurger = burger.contains(event.target);

    if (!isClickInsideMenu && !isClickOnBurger && menu.classList.contains('active')) {
        menu.classList.remove('active');
        burger.classList.remove('active');
        document.body.classList.remove('no-scroll');
        menu.style.opacity = '0'; // تأثير تلاشي عند الإغلاق
        setTimeout(() => {
            menu.style.opacity = '1'; // إعادة الشفافية للحالة الطبيعية
        }, 400); // يتماشى مع مدة الانتقال في CSS
    }
});

// إضافة تأثير انتقال عند النقر على الروابط
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        const menu = document.querySelector('.nav-menu');
        cons