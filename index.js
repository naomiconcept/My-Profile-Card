function updateTime(){
    const timeElement = document.getElementById("currentTime");
    const now = new Date();
    const utcString = now.toUTCString();
    timeElement.textContent = `Current Time (UTC): ${utcString}`;
}
updateTime();
setInterval(updateTime, 1000);
