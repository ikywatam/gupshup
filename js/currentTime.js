function currentTime(){
    var date = new Date(),
           hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
           minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
           seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    document.getElementById('currentTime').innerHTML = hours + ':' + minutes + ':' + seconds;
  }
  setInterval(currentTime, 1000);
  currentTime();