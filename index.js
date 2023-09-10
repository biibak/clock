
var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');



let getTiime = () => {

    let tiime = new Date();
    let hh = tiime.getHours() ;
    let mm = tiime.getMinutes();
    let ss = tiime.getSeconds();

    let sRotattion = ss*6;
    let mRotattion = mm*6;
    let hRotattion = (hh*30) + (mm/2) ;


    second.style.transform = `rotate(${sRotattion}deg)`;
    minute.style.transform = `rotate(${mRotattion}deg)`;
    hour.style.transform = `rotate(${hRotattion}deg)`;

}

setInterval(getTiime,1000);