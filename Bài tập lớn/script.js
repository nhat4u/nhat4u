document.addEventListener('DOMContentLoaded', function () {
    const snowflakesContainer = document.getElementById('snowflakes-container');
    let snowflakeCount = 100; 
    let isImageOne = true;

    // Hàm tạo tuyết
    function createSnowflake() {
        let snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄️';

        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 5 + 2 + 's';
        snowflake.style.fontSize = Math.random() * 10 + 30 + 'px';

        snowflakesContainer.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 7000);
    }

    // Hàm tạo mưa với hạt mưa to hơn
    function createRaindrop() {
        let raindrop = document.createElement('div');
        raindrop.classList.add('snowflake');
        raindrop.textContent = '|';

        raindrop.style.left = Math.random() * 100 + 'vw';
        raindrop.style.animationDuration = Math.random() * 1.5 + 1 + 's';
        raindrop.style.fontSize = Math.random() * 20 + 25 + 'px'; 

        snowflakesContainer.appendChild(raindrop);

        setTimeout(() => {
            raindrop.remove();
        }, 2000);
    }

    let fallInterval = setInterval(createSnowflake, 200);

    document.getElementById('toggleBackground').addEventListener('click', () => {
        document.body.style.backgroundImage = isImageOne ? "url('Ảnh/anhnenn.jpg')" : "url('Ảnh/anhnen.jpg')";
        isImageOne = !isImageOne;

        clearInterval(fallInterval);
        snowflakesContainer.innerHTML = '';

        if (isImageOne) {
            fallInterval = setInterval(createSnowflake, 200);
        } else {
            fallInterval = setInterval(createRaindrop, 100);
        }
    });
});

function submitComment() {
    const commentBox = document.getElementById('comment-box');
    const comment = commentBox.value.trim();

    if (comment) {
        alert("Bình luận của bạn đã được gửi: " + comment);
        commentBox.value = '';
    } else {
        alert("Vui lòng nhập bình luận trước khi gửi!");
    }
}

    // Chuyển đổi hình nền giữa ảnh 1 và ảnh 2
     let isImageOne = true;
    document.getElementById('toggleBackground').addEventListener('click', () => {
    document.body.style.backgroundImage = isImageOne ? "url('Ảnh/anhnen.jpg')" : "url('Ảnh/anhnenn.jpg')";
    isImageOne = !isImageOne;
 });

    // Chế độ tối/sáng
    const toggleThemeButton = document.getElementById('toggleTheme');
    toggleThemeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggleThemeButton.textContent = document.body.classList.contains('dark-mode') ? 'Chế độ sáng' : 'Chế độ tối';
    });

    // Cập nhật đồng hồ thời gian thực
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // Cập nhật đồng hồ đếm ngược đến sinh nhật tiếp theo
    function updateCountdown() {
        const now = new Date();
        let nextBirthday = new Date(now.getFullYear(), 7, 10);
        if (now > nextBirthday) {
            nextBirthday.setFullYear(now.getFullYear() + 1);
        }
        const diff = nextBirthday - now;
        const days = Math.floor(diff / (1000 * 60 *  60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById('countdown').textContent = `Sinh nhật sắp tới: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    setInterval(updateCountdown, 1000);
    updateCountdown();