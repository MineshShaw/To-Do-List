// clock
setInterval(() => {
    const date = new Date();
    const hours = (date.getHours() < 10)? '0' + date.getHours() : date.getHours();
    const minutes = (date.getMinutes() < 10)? '0' + date.getMinutes() : date.getMinutes();
    const seconds = (date.getSeconds() < 10)? '0' + date.getSeconds() : date.getSeconds();

    document.getElementById("clock").innerHTML = `${hours}:${minutes}:${seconds}`;
}, 1000);

// Add Task
document.getElementById('add-btn').addEventListener('click' , () => {
    document.getElementById('add-sidepopup').classList.add('open');
})