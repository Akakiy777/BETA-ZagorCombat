$('document').ready(function(){
    $('#lab1').click(function(){
        $('.main').html('<div class="main"><span id="balance">Баланс: 10</span><button class="hamster"></button></div>')
    });
    $('#lab2').click(function(){
        $('.main').html('<div class="main"><span id="balance">Баланс: 20</span><button class="hamster"></button></div>')
    });
    $('#lab3').click(function(){
        $('.main').html('<div class="main"><span id="balance">Баланс: 30</span><button class="hamster"></button></div>')
    });
});