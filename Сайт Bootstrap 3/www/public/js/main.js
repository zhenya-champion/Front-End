// скролл

function slowScroll(id){
    $("html, body").animate({
        scrollTop: $(id).offset().top - 50
    }, 500)
    return false;
}

// адаптация шапки под мобилу

$('.header-top .menu').on('click', function(){
    if($('header .mobile-menu').is(':visible')) // проверяем на видимость
        $(this).html('<i class="fas fa-bars"></i>') 
    else
        $(this).html('<i class="fas fa-times"></i>')
        
    $('header .mobile-menu').slideToggle()
})

// поле регистрации

$("#subscribe").on("click", function(){
    let email = $("#email").val() // val - получаем данные 
    email = email.trim() // trim - удаляем пробелы
    if(email.split("@").length != 2 || email.split(".").length != 2){ // split - разбивка на символы / проверка на ввод
        $("#sub_form label").text("Вы ввели не верный email")
        $("#sub_form label").fadeIn()
    }

    setTimeout(function(){
        $("#sub_form label").fadeOut() // fadeOut - убирает объект
    }, 1500)
})

// адаптация видео

$('.video-play, #modal-video .close-button').on('click', function(){
    $("#modal-video").toggle(); // открываем или закрываем
    $("body").toggleClass("overflow-hidden"); // создаем класс
    resizeVideo(); // адаптирование видео
});

$(window).on('resize', function(){ // адаптирование видео
    resizeVideo()  // обращаемся к функции
}).resize() // меняем размер

function resizeVideo(){
    $("iframe").each(function(){ // берем все iframe и перебираем их
        let width = $(this).width() // создаем переменную с высотой
        $(this).css("height", width / 1.77 + "px") // устанавливаем высоту стандартную для ютуба
    })
}
