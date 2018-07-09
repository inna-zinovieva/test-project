/*******First transition******/
var forms = document.querySelectorAll('.forms');
var links = document.querySelectorAll('.photo__nav a');

start.onclick = function (){
    forms[0].classList.add("invisibled");
    forms[1].classList.add("visibled");
    for(var i=0; i<links.length; i++){
        links[i].classList.add("links_margin");
    }
}

var second_variants_btns = document.querySelectorAll('.second-form__btn');
var continue_btns = document.querySelectorAll('.continue-btn');
for(var i=0; i<second_variants_btns.length; i++){
    second_variants_btns[i].addEventListener('click', function(){
        if(!(this.classList.contains('active'))){
            for(i=0; i<second_variants_btns.length; i++){
                second_variants_btns[i].classList.remove('active');
            }
            this.classList.add('active');
            continue_btns[0].classList.add("visibled-flex");
        }
    })
}

/*****Dynamic numbers increasing on second slide*****/ 

var second_variants = document.querySelectorAll('.second-variant');
var second_variants_result = document.querySelectorAll('.second-variant__result');
var second_block_percent = document.querySelector('.second-block__percent');  

var setValue = function(elem, value){
var interval = false; 
    interval = setInterval(function(){
        if (elem.innerHTML*1+1 >= value) {
            elem.innerHTML = value;
            clearInterval(interval);
        } else {
            elem.innerHTML = elem.innerHTML*1+1;
        }
    }, 1);
};  

second_variants_btns[0].addEventListener('click', function(){
    for(var i=0; i<second_variants.length; i++){
        if(!(this.classList.contains('visibled'))){
            for(i=0; i<second_variants.length; i++){
                second_variants[i].classList.remove('visibled');
            }
        }
    }
    second_variants[0].classList.add('visibled');
    second_block_percent.classList.add("visibled");
    var result = second_variants_result[0];
    setValue(result, 50);
})

second_variants_btns[1].addEventListener('click', function(){
    for(var i=0; i<second_variants.length; i++){
        if(!(this.classList.contains('visibled'))){
            for(i=0; i<second_variants.length; i++){
                second_variants[i].classList.remove('visibled');
            }
        }
    }
    second_variants[1].classList.add('visibled');
    second_block_percent.classList.add("visibled");
    var result = second_variants_result[1];
    setValue(result, 30);
})

second_variants_btns[2].addEventListener('click', function(){
    for(var i=0; i<second_variants.length; i++){
        if(!(this.classList.contains('visibled'))){
            for(i=0; i<second_variants.length; i++){
                second_variants[i].classList.remove('visibled');
            }
        }
    }
    second_variants[2].classList.add('visibled');
    second_block_percent.classList.add("visibled");
    var result = second_variants_result[2];
    setValue(result, 20);     
})

/*****Second transition*****/
var third_variants = document.querySelectorAll('.third-variant');
continue_btns[0].onclick = function (){
    forms[1].classList.remove("visibled");
    forms[2].classList.add("visibled");
    for(var i=0; i<second_variants.length; i++){
        if(!(this.classList.contains('visibled'))){
            for(i=0; i<second_variants.length; i++){
                second_variants[i].classList.remove('visibled');
            }
        }
    }
    second_block_percent.classList.remove("visibled");

    for(j=0; j<third_variants.length; j++){
        third_variants[j].style.display = 'block';
    }
}

var third_variants_btns = document.querySelectorAll('.third-form__btn');

for(var i=0; i<third_variants_btns.length; i++){
    third_variants_btns[i].addEventListener('click', function(){
        if(!(this.classList.contains('active2'))){
            for(i=0; i<third_variants_btns.length; i++){
                third_variants_btns[i].classList.remove('active2');
            }
            this.classList.add('active2');
            continue_btns[1].classList.add("visibled-flex");
        }
    })
}
/*****Statistics display on third slide*****/ 

third_variants_btns[0].addEventListener('click', function(){
    third_variants[1].classList.remove('visibled-animated');
        third_variants[0].classList.add('visibled-animated');

})
third_variants_btns[1].addEventListener('click', function(){
        third_variants[0].classList.remove('visibled-animated');
        third_variants[1].classList.add('visibled-animated');
})

/******Third transition******/
continue_btns[1].onclick = function (){
    forms[2].classList.remove("visibled");
    forms[3].classList.remove("invisibled");
    for(var i=0; third_variants.length; i++){
        third_variants[i].classList.remove('visibled-animated');
    }
}
/*****Fourth slide*****/
var fourth_variants = document.querySelectorAll('.fourth-form__btn');
var name_field = document.getElementById('name');
var email_field = document.getElementById('e-mail');
var password_field = document.getElementById('password');
var checkbox_field = document.querySelector('input[type=checkbox]');
var submit = document.querySelector('.fourth-form__continue-btn');

for(var i=0; i<fourth_variants.length; i++){
    fourth_variants[i].addEventListener('click', function(){
        if(!(this.classList.contains('active3'))){
            for(i=0; i<fourth_variants.length; i++){
                fourth_variants[i].classList.remove('active3');
            }
            this.classList.add('active3');
            submit.classList.add('submit-valid');
        }
    })
}
/******Form validation*****/
var name_pattern = /[A-Za-zА-Яа-яЁё]/i;
var name_warning = document.querySelector(".name-warning");
var email_pattern = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/i;
var email_warning = document.querySelector(".email-warning");
var password_pattern = /[0-9a-zA-ZА-Яа-яЁё!@#$%^&*]{8,}/i;
var password_warning = document.querySelector(".password-warning");
var checkbox_warning = document.querySelector('checkbox-warning');

name_field.onblur = function () {
    if(name_pattern.test(name_field.value) == false){
        name_warning.classList.add('visibled');
        name_field.classList.add('invalid');
        name_field.style.border = '1px solid #b72020';
    } 
    else
    {
        name_warning.classList.remove('visibled');
        name_field.classList.remove('invalid');
        name_field.style.border = '1px solid #d3d3d3';
    }
    
}
email_field.onblur = function () {
    if(email_pattern.test(email_field.value) == false){
        email_warning.classList.add('visibled');
        email_field.classList.add('invalid');
        email_field.style.border = '1px solid #b72020';
    } 
    else{
        email_warning.classList.remove('visibled');
        email_field.classList.remove('invalid');
        email_field.style.border = '1px solid #d3d3d3';
    }
    
}
password_field.onblur = function () {
    if(password_pattern.test(password_field.value) == false){
        password_warning.classList.add('visibled');
        password_field.classList.add('invalid');
        password_field.style.border = '1px solid #b72020';
    } 
    else{
        password_warning.classList.remove('visibled');
        password_field.classList.remove('invalid');
        password_field.style.border = '1px solid #d3d3d3';
    }
    
}

function isValid (form) {
    if(name_field.value == ""){
        name_field.classList.add('invalid');
        name_field.placeholder = "Введите свое имя";
        return false;
    }

    if(name_pattern.test(name_field.value) === false){
        name_warning.classList.add('visibled');
        name_field.classList.add('invalid');
        return false;
    }
    name_field.classList.remove('invalid');
    name_warning.classList.remove('visibled');

    if(email_field.value == ""){
        email_field.classList.add('invalid');
        email_field.placeholder = "Неверный формат e-mail";
        return false;
    }
    if(email_pattern.test(email_field.value) === false){
        email_warning.classList.add('visibled');
        email_field.classList.add('invalid');
        return false;
    }
    email_warning.classList.remove('visibled');
    email_field.classList.remove('invalid');

    if(password_field.value == ""){
        password_field.classList.add('invalid');
        password_field.placeholder = "Придумайте новый пароль";
        return false;
    }
    if(password_pattern.test(password_field.value) === false){
        password_warning.classList.add('visibled');
        password_field.classList.add('invalid');
        return false;        
    }
    password_warning.classList.remove('visibled');
    password_field.classList.remove('invalid');
    return true;
}

