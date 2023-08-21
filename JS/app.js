    const form = document.querySelector('form');
    const input = document.querySelector('input');
    const userName = document.querySelector('h1');

    function firstEvent(e){
        e.preventDefault();
        let currentValue = input.value;
        if(input.value == currentValue && input.value !== ''){
            form.classList.add('hidden');
            userName.innerHTML = `Hello ${currentValue}!`;
            userName.classList.remove('hidden');
            localStorage.setItem("userName", currentValue);x
        }
    }
    
    const localUserName = localStorage.getItem("userName");

    if (localUserName === null){
        form.classList.remove('hidden');
        form.addEventListener('submit', firstEvent);
    }
    else {
        userName.innerHTML = `Hello ${localUserName}`;
        userName.classList.remove('hidden');
    }
