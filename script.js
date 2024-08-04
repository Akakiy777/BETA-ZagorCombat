$('document').ready(function(){
    var money = 50
    var tab = 1
    function UPmoney(){
        if (money<5000000){
            var edit = 'Баланс: '+String(money)      
            $('#balance').text(edit);
        }else{
            window.open('win.html');
            window.close()
        }
    }
    function UPtab(){
        var edit = '>>>'+String(tab)+'<<<'      
        $('#taber').text(edit);
    }
    $('.hamster').click(function(){
        money+=tab
        UPmoney()
    });
    $('#b1').click(function(){
        if(money>=10){
            money-=10
            tab+=1
            UPmoney();
            UPtab();
        }else{
            alert('Не хватает денег')
        }
    });
    $('#b2').click(function(){
        if(money>=20){
            money-=20
            tab+=2
            UPmoney();
            UPtab();
        }else{
            alert('Не хватает денег')
        }
    });
    $('#b5').click(function(){
        if(money>=50){
            money-=50
            tab+=5
            UPmoney();
            UPtab();
        }else{
            alert('Не хватает денег')
        }
    });
    $('#b10').click(function(){
        if(money>=100){
            money-=100
            tab+=10
            UPmoney();
            UPtab();
        }else{
            alert('Не хватает денег')
        }
    });
    $('#b20').click(function(){
        if(money>=200){
            money-=200
            tab+=20
            UPmoney();
            UPtab();
        }else{
            alert('Не хватает денег')
        }
    });
    $('#b50').click(function(){
        if(money>=500){
            money-=500
            tab+=50
            UPmoney();
            UPtab();
        }else{
            alert('Не хватает денег')
        }
    });
    $('.savesNBT').click(function(){
        var saves = document.getElementById('input2').value
        saves=saves.split(' ');
        money=Number(saves[0]);
        tab=Number(saves[1]);
        UPmoney();
        UPtab();
        alert('Успешно');
    });
    $('.promoNBT').click(function(){
        var promo = document.getElementById('input1').value;
        var trans = 0
        if (promo=='hacker'){
            money+=5000
            trans+=5000
            UPmoney()
            alert('Успешно');
        }
        if (promo=='oleg'){
            money+=5000
            trans+=5000
            UPmoney()
            alert('Успешно');
        }
        if (promo=='akakiy'){
            money+=1000
            trans+=1000
            UPmoney()
            alert('Успешно');
        }
        if (promo=='kiss me'){
            money+=999999
            trans+=999999
            UPmoney()
            alert('Успешно');
        }
        if (promo=='hui'){
            money-=5000
            trans-=5000
            UPmoney()
            alert('Успешно');
        }
        if (promo=='poop'){
            money-=1000
            trans-=1000
            UPmoney()
            alert('Успешно');
        }
        if (trans>=1){
            alert('+'+trans);
        }else{
            if (trans==0){
                alert('Ошибка промокода');
            }else{
                alert(trans);
            }
        }
    });
    $('.betNBT').click(function(){
        var bet = Number(document.getElementById('input3').value);
        var data = Math.random() * (10 - 0) + 0;
        if (bet <= money){
            if (data>=5){
                money+=bet
                UPmoney()
                alert('Повезло +'+bet)
            }else{
                money-=bet
                UPmoney()
                alert('Неповезло -'+bet)
            }
        }else{
            alert('Ошибка ставки');
        }
    });
    $('#lab1').click(function(){
        $('#edit').html('.block1{position: relative;bottom: 0;}.block2{position: relative;bottom: 88%;left: 1000%;}.block3{position: relative;bottom: 168%;left: 1000%;}')
    });
    $('#lab2').click(function(){
        $('#edit').html('.block1{position: relative;bottom: 0;left: 1000%;}.block2{position: relative;bottom: 88%;}.block3{position: relative;bottom: 168%;left: 1000%;}')
    });
    $('#lab3').click(function(){
        $('#edit').html('.block1{position: relative;bottom: 0;left: 1000%;}.block2{position: relative;bottom: 88%;left: 1000%;}.block3{position: relative;bottom: 168%;}')
    });
});