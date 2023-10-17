let elInputName = document.querySelector('.js-name');
let elInputLastName = document.querySelector('.js-last-name');
let elForm = document.querySelector('.js-form');
let elSpanDanger = document.querySelector('.js-danger-name');
let elFirstNameSpan = document.querySelector('.first-name-span');
let elLastNameSpan = document.querySelector('.last-name-span');

// email 
let elInputEmail = document.querySelector('.js-email');
let elEmailSpan = document.querySelector('.js-email-error');
let elEmailTitle = document.querySelector('.email-span');

// password 
let elPassword = document.querySelector('.js-password-value');
let elPasswordBtn = document.querySelector('.js-password');
let elPasswordError = document.querySelector('.js-password-error');
let elPasswordErrorSecond = document.querySelector('.js-password-error-2');
let elPasswordTitle = document.querySelector('.password-span');
// form wrapper 
let elFormWrapper = document.querySelector('.start__form-wrapper');
let elStart = document.querySelector('.start');
// repeat password 
let elRepeatPassword = document.querySelector('.repeat-password-value');
let elRepeatPasswordBtn = document.querySelector('.js-password-repeat');
let elRepeatTitle = document.querySelector('.repeat-span');
let elRepeatError = document.querySelector('.js-repeat-error');

let elList = document.querySelector('.register__list');
let elRegisterForm = document.querySelector('.register__form');
let elRegister = document.querySelector('.register');
const number = /[0-9]/;
const letters = /[a-z]/;
let titleWrapper = document.querySelector('.register__title-wrapper');
let toggled = false;


// item 1 
let elFormContact = document.querySelector('.js-contact-form');
let elFormList = document.querySelector('.js-list');
let elFormItemOne = document.querySelector('.js-item-1');
let elFormItemOneBg = document.querySelector('.js-bg-1');

let elFormItemOneLabelOne = document.querySelector('.js-contact-label-1');
let elFormItemOneInputOne = document.querySelector('.js-contact-1');
let elFormItemOneSpanOne = document.querySelector('.js-contact-1-span');

let elFormItemOneLabelSecond = document.querySelector('.js-contact-label-2');
let elFormItemOneInputSecond = document.querySelector('.js-contact-2');
let elFormItemOneSpanSecond = document.querySelector('.js-contact-2-span');

let elFormItemOneLabelThree = document.querySelector('.js-contact-label-3');
let elFormItemOneInputThree = document.querySelector('.js-contact-3');
let elFormItemOneSpanThree = document.querySelector('.js-contact-3-span');

let elFormItemOneLabelFour = document.querySelector('.js-contact-label-4');
let elFormItemOneInputFour = document.querySelector('.js-contact-4');
let elFormItemOneSpanFour = document.querySelector('.js-contact-4-span');

// services item 2 
let elServiceInput = document.querySelector('.js-input-contact');
let elProjectInput = document.querySelector('.project__input');
let elProjectSpan = document.querySelector('.project__span');

let elEndSpanOne = document.querySelector('.end-span-1');
let elEndSpanTwo = document.querySelector('.end-span-2');
let elEndSpanThree = document.querySelector('.end-span-3');
let elEndSpanFour = document.querySelector('.end-span-4');
let elEndSpanFive = document.querySelector('.end-span-5');
let elEndSpanSix = document.querySelector('.end-span-6');

let elEnd = document.querySelector('.end');

let selectedOne;
let selectedTwo;
// ---------------------------------- form 1 -------------------------------
elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    
    // toggle manual for password btn
    elPasswordBtn.addEventListener('click',function(evtw) {
        evtw.preventDefault();
        if(toggled) {
            document.body.classList.add("change-bg1");  
            elPassword.type = 'text';
        }
        else {
            document.body.classList.remove("change-bg1");  
            elPassword.type = 'password';
        }
        toggled = !toggled;
        // return;
    });
    elRepeatPasswordBtn.addEventListener('click',function(evtw) {
        evtw.preventDefault();
        let toggled = false;
        if(toggled) {
            document.body.classList.add("change-bg2");  
            elRepeatPassword.type = 'text';
        }
        else {
            document.body.classList.remove("change-bg2");  
            elRepeatPassword.type = 'password';
        }
        toggled = !toggled;
        return;
    });
    const nameValue = elInputName.value.trim();
    const lastNameValue = elInputLastName.value.trim();
    const emailValue = elInputEmail.value.trim();
    const passwordValue = elPassword.value.trim();
    const repeatValue = elRepeatPassword.value.trim();
    
    // name validation
    
    if(nameValue.length < 2 || nameValue.length > 30) {
        elSpanDanger.style.display = 'block';
        // elInputName.style.color = '#ff0707';
        elInputName.style.borderColor = '#ff0707';
        elInputName.style.outlineColor = '#ff0707';
        elFirstNameSpan.style.color = '#ff0707';
        elInputName.classList.add('placeH');
        return;
    }
    else if(!isNaN(nameValue)) {
        elSpanDanger.style.display = 'block';
        // elInputName.style.color = '#ff0707';
        elInputName.style.outlineColor = '#ff0707';
        elInputName.style.borderColor = '#ff0707';
        elFirstNameSpan.style.color = '#ff0707';
        elInputName.classList.add('placeH');
        return;
    }
    else if(nameValue.match(number)) {
        elSpanDanger.style.display = 'block';
        elFirstNameSpan.style.color = '#ff0707';
        elInputName.style.outlineColor = '#ff0707';
        elInputName.style.borderColor = '#ff0707';
        elInputName.classList.add('placeH');
        elInputName.classList.add('error-input');
        return;
    }
    else {
        elSpanDanger.style.display = 'none';
        elFirstNameSpan.style.color = '';
        elInputName.classList.remove('placeH');
        elInputName.style.outlineColor = '';
        elInputName.classList.remove('error-input');
        elInputName.style.borderColor = '';
        
    }
    
    
    // last name validation
    
    if(lastNameValue.length < 2 || nameValue.length > 30) {
        elSpanDanger.style.display = 'block';
        elInputName.style.outlineColor = '#ff0707';
        elInputLastName.classList.add('placeH');
        elInputLastName.classList.add('error-input');
        return;
    }
    else if(!isNaN(lastNameValue)) {
        elSpanDanger.style.display = 'block';
        elLastNameSpan.style.color = '#ff0707';
        elInputLastName.style.outlineColor = '#ff0707';
        elInputLastName.classList.add('error-input');
        elInputLastName.classList.add('placeH');
        return;
    }
    else if(lastNameValue.match(number)) {
        elSpanDanger.style.display = 'block';
        elLastNameSpan.style.color = '#ff0707';
        elInputLastName.style.outlineColor = '#ff0707';

        elInputLastName.classList.add('placeH');
        elInputLastName.classList.add('error-input');
        return;
    }
    else {
        elSpanDanger.style.display = 'none';    
        elLastNameSpan.style.color = '#121826';
        elInputLastName.style.outlineColor = '';
        elInputLastName.classList.remove('placeH');
        elInputLastName.classList.remove('error-input');
        
    }
    
    // email validation 
    
    if(!emailValue.endsWith('@gmail.com') && !emailValue.endsWith('@mail.ru')) {
        elEmailSpan.style.display = 'block';
        elInputEmail.style.borderColor = '#ff0707';
        elInputEmail.style.color = '#ff0707';
        elInputEmail.style.outlineColor = '#ff0707';
        elInputEmail.classList.add('placeH');
        elEmailTitle.style.color = '#ff0707';
        elInputEmail.classList.add('error-input');
        elInputEmail.style.backgroundImage = 'url(../images/email-error-icon.svg)';
        return;
    }
    else {
        elEmailSpan.style.display = 'none';    
        elInputEmail.style.color = '#6C727F';
        elInputEmail.style.outlineColor = '';
        elInputEmail.style.borderColor = '#d2d5da';
        elInputEmail.classList.remove('placeH');
        elEmailTitle.style.color = '#121826';
        elInputEmail.classList.remove('error-input');
        elInputEmail.style.backgroundImage = 'url(../images/email-icon.svg)';
    }
    
    // password validation 
    
    if(passwordValue.length !== 8 || !isNaN(passwordValue)){
        elPasswordErrorSecond.style.display = 'block';
        elPasswordTitle.style.color = '#ff0707';  
        elPassword.classList.add('error-input');
        elPassword.classList.add('placeH');
        elPassword.style.outlineColor = '#ff0707'
        return;
    } 
    else {
        elPasswordErrorSecond.style.display = 'none';
        elPasswordTitle.style.color = '#121826';
        elPassword.classList.remove('placeH');
        elPassword.classList.remove('error-input');
        elPasswordBtn.style.backgroundImage = 'url(../images/password-icon.svg)';
        elPassword.style.outlineColor = ''
    }
    
    // repeat password 
    if(repeatValue !== passwordValue){
        elRepeatError.style.display = 'block';
        elRepeatPassword.style.color = '#ff0707';
        elRepeatPassword.style.outlineColor = '#ff0707';
        elRepeatPassword.style.borderColor = '#ff0707';
        elRepeatTitle.style.color = '#ff0707';  
        elRepeatPassword.classList.add('placeH');
        return;
    } 
    else {
        elRepeatError.style.display = 'none';
        elRepeatPassword.style.color = '#6C727F';
        elRepeatPassword.style.borderColor = '';
        elRepeatPassword.style.outlineColor = '';
        elRepeatTitle.style.color = '#121826';
        elRepeatPasswordBtn.style.backgroundImage = 'url(../images/password-icon.svg)';
        elRepeatPassword.classList.remove('placeH');
        elFormWrapper.style.display = 'none';
        elRegister.style.display = 'block';
        elList.style.display = 'block';
    }
    // final stage 
})



// ------------------------------ form 2 ----------------------------------- 




elFormContact.addEventListener('submit', function(evtContact) {
    evtContact.preventDefault();
    const nameContactValue = elFormItemOneInputOne.value.trim();
    const emailContactValue = elFormItemOneInputSecond.value.trim();
    const telContactValue = elFormItemOneInputThree.value.trim();
    const companyContactValue = elFormItemOneInputFour.value.trim();
    var serviceInputValue = elServiceInput.value.trim();    
    var projectInputValue = elProjectInput.value;
    
    
    // name validation
    if(nameContactValue.length < 2 || nameContactValue.length > 30) {
        elFormItemOneSpanOne.style.display = 'block';
        elFormItemOneLabelOne.style.color = '#ff0707';
        elFormItemOneInputOne.style.backgroundImage = 'url(../images/name-icon-error.png)';
        elFormItemOneInputOne.classList.add('placeH');
        elFormItemOneInputOne.classList.add('error-input');
        alert('You missed something, please check in');
        return;
    }
    else if(nameContactValue.match(number)) {
        elFormItemOneSpanOne.style.display = 'block';
        elFormItemOneLabelOne.style.color = '#ff0707';
        elFormItemOneInputOne.style.backgroundImage = 'url(../images/name-icon-error.png)';
        elFormItemOneInputOne.classList.add('placeH');
        elFormItemOneInputOne.classList.add('error-input');
        alert('You missed something, please check in');
        return;
    }
    else {
        elFormItemOneSpanOne.style.display = 'none';
        elFormItemOneLabelOne.style.color = '#121826';
        elFormItemOneInputOne.style.backgroundImage = '';
        elFormItemOneInputOne.classList.remove('error-input');
        elFormItemOneInputOne.classList.remove('placeH');
    }
    
    // email validation 
    if(!emailContactValue.endsWith('@gmail.com') && !emailContactValue.endsWith('@mail.ru')) {
        elFormItemOneSpanSecond.style.display = 'block';
        elFormItemOneLabelSecond.style.color = '#ff0707';
        elFormItemOneInputSecond.style.backgroundImage = 'url(../images/email-error-icon.svg)';
        elFormItemOneInputSecond.classList.add('placeH');
        elFormItemOneInputSecond.classList.add('error-input');
        alert('You missed something, please check in');
        return;
    }
    else {
        elFormItemOneSpanSecond.style.display = 'none';    
        elFormItemOneLabelSecond.style.color = '#121826';
        elFormItemOneInputSecond.style.backgroundImage = 'url(../images/email-icon.svg)';
        elFormItemOneInputSecond.classList.remove('error-input');
        elFormItemOneInputSecond.classList.remove('placeH');
    }
    
    // phone number validation 
    if(!telContactValue.startsWith('+998') || telContactValue.length != 13) {
        elFormItemOneSpanThree.style.display = 'block';
        elFormItemOneLabelThree.style.color = '#ff0707';
        elFormItemOneInputThree.style.backgroundImage = 'url(../images/phone-number-icon-error.png)';
        elFormItemOneInputThree.classList.add('placeH');
        elFormItemOneInputThree.classList.add('error-input');
        alert('You missed something, please check in');
        return;
    }
    else if(isNaN(telContactValue)) {
        elFormItemOneSpanThree.style.display = 'block';
        elFormItemOneLabelThree.style.color = '#ff0707';
        elFormItemOneInputThree.style.backgroundImage = 'url(../images/phone-number-icon-error.png)';
        elFormItemOneInputThree.classList.add('placeH');
        elFormItemOneInputThree.classList.add('error-input');
        alert('You missed something, please check in');
        return;
    }
    else if(telContactValue.match(letters)) {
        elFormItemOneSpanThree.style.display = 'block';
        elFormItemOneLabelThree.style.color = '#ff0707';
        elFormItemOneInputThree.style.backgroundImage = 'url(../images/phone-number-icon-error.png)';
        elFormItemOneInputThree.classList.add('placeH');
        elFormItemOneInputThree.classList.add('error-input');
        alert('You missed something, please check in');
        return;
    }
    else {
        elFormItemOneSpanThree.style.display = 'none';    
        elFormItemOneInputThree.style.outlineColor = '';
        elFormItemOneInputThree.style.backgroundImage = '';
        elFormItemOneInputThree.classList.remove('error-input');
        elFormItemOneInputThree.classList.remove('placeH');
        
    }
    
    // // company validation 
    if(companyContactValue.length < 3 || companyContactValue.length > 20) {
        elFormItemOneSpanFour.style.display = 'block';
        elFormItemOneLabelFour.style.color = '#ff0707';
        elFormItemOneInputFour.style.backgroundImage = 'url(../images/company-icon-error.png)';
        elFormItemOneInputFour.classList.add('placeH');
        elFormItemOneInputFour.classList.add('error-input');
        alert('You missed something, please check in');
        return;
    }
    else if(companyContactValue.match(number)) {
        elFormItemOneSpanFour.style.display = 'block';
        elFormItemOneLabelFour.style.color = '#ff0707';
        elFormItemOneInputFour.classList.add('placeH');
        elFormItemOneInputFour.classList.add('error-input');
        alert('You missed something, please check in');
        return;
    }
    else {
        elFormItemOneSpanFour.style.display = 'none';    
        elFormItemOneInputFour.style.color = '#6C727F';
        elFormItemOneInputFour.style.borderColor = '#d2d5da';
        elFormItemOneLabelFour.style.color = '#121826';
        elFormItemOneInputFour.style.outlineColor = '';
        elFormItemOneInputFour.style.backgroundImage = '';
        elFormItemOneInputFour.classList.remove('placeH');
        elFormItemOneInputFour.classList.remove('error-input');
    }
    
    // service li
    
    const serviceName = document.getElementsByName('choose');
    const projectName = document.getElementsByName('money');
    for(let radioOne of serviceName) {
        if(radioOne.checked) {
            elEndSpanFive.textContent = radioOne.value;
            break;
        }
    }
    // budget li
    for(let radioS of projectName) {
        if(radioS.checked) {
            elEndSpanSix.textContent = radioS.value;
            break;
        }
    }
    
    
    elEndSpanOne.textContent = nameContactValue;
    elEndSpanTwo.textContent = emailContactValue;
    elEndSpanThree.textContent = telContactValue;
    elEndSpanFour.textContent = companyContactValue;
    
    // project li
    elList.style.display = 'none';
    titleWrapper.style.display = 'none'
    elEnd.style.display = 'block';
    
    // add things 
    
})

