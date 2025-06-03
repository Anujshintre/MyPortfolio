

// -----------------

function updateTime() {
    const timeElement = document.getElementById('time');
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    timeElement.textContent = timeString;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to display the time immediately
updateTime(); 