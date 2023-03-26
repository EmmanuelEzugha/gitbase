function message(){
    var Name = document.getElementById('name');
    var email = document.getElementById('phone');
    var gender = document.getElementById('gender')
    var email = document.getElementById('email');
    var msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(Name.value === '' || phone.value === ''|| gender.value === '' || email.value === '' || msg.value === ''){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            Name.value = '';
            phone.value = '';
            gender.value = '';
            email.value = '';
            msg.value = '';
        }, 3000);

        success.style.display = 'block';
    }


    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 7000);

}