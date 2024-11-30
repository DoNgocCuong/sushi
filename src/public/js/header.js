document.addEventListener('DOMContentLoaded', function () {
    const sidebarItems = document.querySelectorAll('.sidebar-item');

    // Lấy URL hiện tại
    const currentPath = window.location.pathname;

    // Kiểm tra và thêm class "active" dựa trên URL
    sidebarItems.forEach(item => {
        const link = item.querySelector('a');
        if (link && link.getAttribute('href') === currentPath) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});