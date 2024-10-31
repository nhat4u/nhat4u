document.addEventListener('DOMContentLoaded', function () {
    const snowflakesContainer = document.getElementById('snowflakes-container');
    let snowflakeCount = 100; 
    let isImageOne = true; // true cho tuyết, false cho mưa

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

    // Thiết lập hiệu ứng tuyết ban đầu
    let fallInterval = setInterval(createSnowflake, 200);

    // Chuyển đổi giữa hiệu ứng tuyết và mưa khi thay đổi nền
    document.getElementById('toggleBackground').addEventListener('click', () => {
        document.body.style.backgroundImage = isImageOne ? "url('Ảnh/anhnenn.jpg')" : "url('Ảnh/anhnen.jpg')";
        isImageOne = !isImageOne;

        // Xóa hiệu ứng cũ
        clearInterval(fallInterval);
        snowflakesContainer.innerHTML = '';

        // Tạo hiệu ứng mới tùy vào nền hiện tại
        if (isImageOne) {
            fallInterval = setInterval(createSnowflake, 200); // Hiệu ứng tuyết cho anhnen.jpg
        } else {
            fallInterval = setInterval(createRaindrop, 100); // Hiệu ứng mưa to hơn cho anhnenn.jpg
        }
    });
});

function submitComment() {
    const commentBox = document.getElementById('comment-box');
    const comment = commentBox.value.trim();

    if (comment) {
        const facebookUrl = `https://www.facebook.com/profile.php?id=100066993326907&message=${encodeURIComponent(comment)}`;
        window.open(facebookUrl, '_blank'); // Mở liên kết tới Facebook trong tab mới
        commentBox.value = ''; // Xóa bình luận sau khi gửi
    } else {
        alert("Vui lòng nhập bình luận trước khi gửi!");
    }
}
let isDarkMode = false;
    const toggleThemeButton = document.getElementById('toggleTheme');
    
    toggleThemeButton.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('dark-mode', isDarkMode);
        toggleThemeButton.textContent = isDarkMode ? 'Chế độ sáng' : 'Chế độ tối';
    });

    // Chuyển đổi hình nền giữa ảnh 1 và ảnh 2
     let isImageOne = true;
    document.getElementById('toggleBackground').addEventListener('click', () => {
    document.body.style.backgroundImage = isImageOne ? "url('Ảnh/anhnen.jpg')" : "url('Ảnh/anhnenn.jpg')";
    isImageOne = !isImageOne;
 });