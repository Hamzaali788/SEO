$(document).on('click' , '.ull li a', function(){
    $(this).addClass("active").siblings().removeClass("active")
})





$("#menu").click(function(){
    $(".ull").fadeToggle(1000);
});

function menu(){
    document.getElementById("menu").classList.toggle("change");
}

var num1 = setInterval(projectDone, 10);
var count = 1;

function projectDone(){
    count++;
    document.querySelector('#num1') . innerHTML = count;

    if(count == 235){
        clearInterval(num1);
    }
}

var num22 = setInterval(happycli, 0.100);
var count1 = 1;

function happycli(){
    count1++;
    document.querySelector('#num22') . innerHTML = count1;

    if(count1 == 1435){
        clearInterval(num22);
    }
}

var num33 = setInterval(winn, 10);
var count2 = 1;

function winn(){
    count2++;
    document.querySelector("#num33"). innerHTML =count2;

    if(count2 == 75){
        clearInterval(num33);
    }
}

var num44 = setInterval(yaer, 100);
var count3 = 1;

function yaer(){
    count3++;
    document.querySelector("#num44"). innerHTML =count3;

    if(count3 == 8){
        clearInterval(num44);
    }
}
