// إظهار/إخفاء قائمة البرجر مينيو مع تأثير
function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    const burger = document.querySelector('.burger-menu');
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
}

// إضافة تأثير انتقال عند النقر على الروابط
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        document.querySelector('.nav-menu').classList.remove('active');
        document.querySelector('.burger-menu').classList.remove('active');
        document.body.classList.remove('no-scroll');

        document.body.style.transition = 'opacity 0.3s ease-in-out';
        document.body.style.opacity = '0';
        setTimeout(() => {
            window.location.href = href;
        }, 300);
    });
});

// إعادة ضبط الشفافية عند تحميل الصفحة
window.addEventListener('load', () => {
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 50);
});