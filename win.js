$('document').ready(function(){
    $('.White').click(function(){
        $('.back').html('<style class="back">body{background-image: url("White.png");}.block{background-color: rgba(206, 127, 8, 0.808);}.item{color: blue;}.stats>span{color: blue;}#submit{color: chocolate;}.White{border: 0.3vh coral solid;}</style>');
    });
    $('.Black').click(function(){
        $('.back').html('<style class="back">body{background-image: url("Black.png");}.block{background-color: rgba(8, 38, 206, 0.808);}.item{color: chocolate;}.stats>span{color: chocolate;}#submit{color: blue;}.Black{border: 0.3vh coral solid;}</style>');
    });
    $('#submit').click(function(){
        alert('Приятной игры!');
        window.close()
    });
});
