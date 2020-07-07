var passwordReg = new RegExp("^(?=.{8,20}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])");
//最少八個位元、英文小寫、英文大寫、數字、特殊字元
var emailReg = /^(([.](?=[^.]|^))|[\w_%{|}#$~`+!?-])+@(?:[\w-]+\.)+[a-zA-Z.]{2,63}$/;//email
var bankCodeReg = /^[0-9]{3}$/;//銀行代碼
var bankAccountReg = /^[0-9]*$/;//銀行帳戶
var phoneReg = /^09[0-9]{8}$/;//電話號碼
var accountNameReg = /^[\u4e00-\u9fa5a-zA-Z]*$/;//姓名&收件人

inputPassword($('.inputPassword'));
checkPassword($('.inputPassword'), $('.checkPassword'));
inputEmail($('.Email'));
bankCode($('.bankCode'));
bankAccount($('.bankAccount'));
phone($('.phone'));
accountName($('.accountName'));

function inputPassword(input) {
    input.keyup(function () {
        var password = input.val();
        console.log(password)
        
        if (!passwordReg.test(password)) {
            input.removeClass('is-valid');
            input.addClass('is-invalid');
        }
        else{
            input.removeClass('is-invalid');
            input.addClass('is-valid');
        }
        
    });
}

function checkPassword(input, check){
    check.keyup(function(){
        console.log(check.val())
        if(input.val() === null){
            input.removeClass('is-valid');
            input.addClass('is-invalid');
            check.removeClass('is-valid');
            check.addClass('is-invalid');
        }
        else if(input.val() != null){
            check.removeClass('is-valid');
            check.addClass('is-invalid');
        }
        if(check.val() == input.val()){
            check.removeClass('is-invalid');
            check.addClass('is-valid');
            
        }
    })
}

function inputEmail(input){
    input.keyup(function(){
        var email = input.val();
        console.log(email);
        if (!emailReg.test(email)) {
            input.removeClass('is-valid');
            input.addClass('is-invalid');
        }
        else{
            input.removeClass('is-invalid');
            input.addClass('is-valid');
        }
    })
}

function bankCode(input){
    input.keyup(function(){
        var code = input.val();
        console.log(code);
        if (!bankCodeReg.test(code)) {
            input.removeClass('is-valid');
            input.addClass('is-invalid');
        }
        else{
            input.removeClass('is-invalid');
            input.addClass('is-valid');
        }
    })
}

function bankAccount(input){
    input.keyup(function(){
        var account = input.val();
        console.log(account);
        if (!bankAccountReg.test(account)) {
            input.removeClass('is-valid');
            input.addClass('is-invalid');
        }
        else{
            input.removeClass('is-invalid');
            input.addClass('is-valid');
        }
    })
}

function phone(input){
    input.keyup(function(){
        var number = input.val();
        console.log(number);
        if (!phoneReg.test(number)) {
            input.removeClass('is-valid');
            input.addClass('is-invalid');
        }
        else{
            input.removeClass('is-invalid');
            input.addClass('is-valid');
        }
    })
}

function accountName(input){
    input.keyup(function(){
        var name = input.val();
        console.log(name);
        if (!accountNameReg.test(name)) {
            input.removeClass('is-valid');
            input.addClass('is-invalid');
        }
        else{
            input.removeClass('is-invalid');
            input.addClass('is-valid');
        }
    })
    console.log(input.val())
}