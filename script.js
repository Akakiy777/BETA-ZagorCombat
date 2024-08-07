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
    $('.log').click(function(){
        var name = document.getElementById('name').value
        var pass = document.getElementById('pass').value
        var trans = 0
        if (name+','+pass=='akakiy,lol'){
            money += 250000
            trans += 250000
            tab += 5000
        }
        if (name+','+pass=='oleg,lol'){
            money += 5000
            trans += 5000
            tab += 1000
        }
        if (name+','+pass=='dasha,lol'){
            money += 5000
            trans += 5000
            tab += 100
        }
        UPmoney()
        UPtab()
        if (trans>=1){
            alert('+'+trans);
        }else{
            if (trans==0){
                alert(trans);
            }else{
                alert(trans);
            }
        }
    });
    $('#White').click(function(){
        if (confirm('Она плоха работает')==true){
            $('#backset').html('body{background-image: url("White.png");}#White{box-shadow: 0 0 3px orange;}')
        }
    });
    $('#Black').click(function(){
        $('#backset').html('body{background-image: url("Black.png");}#Black{box-shadow: 0 0 3px orange;}')
    });
    $('#lab1').click(function(){
        $('#edit').html('.block1{order: 1;}.block2{order: 2;}.block3{order: 2;}.block4{order: 2;}#lab1{box-shadow: 0 0 3px orange;}')
    });
    $('#lab2').click(function(){
        $('#edit').html('.block1{order: 2;}.block2{order: 1;}.block3{order: 2;}.block4{order: 2;}#lab2{box-shadow: 0 0 3px orange;}')
    });
    $('#lab3').click(function(){
        $('#edit').html('.block1{order: 2;}.block2{order: 2;}.block3{order: 1;}.block4{order: 2;}#lab3{box-shadow: 0 0 3px orange;}')
    });
    $('#lab4').click(function(){
        $('#edit').html('.block1{order: 2;}.block2{order: 2;}.block3{order: 2;}.block4{order: 1;}#lab4{box-shadow: 0 0 3px orange;}')
    });
});