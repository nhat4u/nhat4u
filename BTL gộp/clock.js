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