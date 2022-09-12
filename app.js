const theme = document.getElementById("theme");
const bgBody = document.getElementById("bg-body");


theme.addEventListener('change', () => {

    const themetValue = theme.value;
    if(themetValue === 'dark'){
        bgBody.classList.add('dark-mode');
        bgBody.classList.remove('pink-mode');
        bgBody.classList.remove('white-mode');
        bgBody.classList.remove('yellow-mode');
        bgBody.classList.remove('blue-mode');
        bgBody.classList.remove('green-mode');
    }else if(themetValue === 'white'){
        bgBody.classList.add('white-mode');
        bgBody.classList.remove('pink-mode');
        bgBody.classList.remove('dark-mode');
        bgBody.classList.remove('yellow-mode');
        bgBody.classList.remove('blue-mode');
        bgBody.classList.remove('green-mode');
    }else if(themetValue === 'yellow'){
        bgBody.classList.add('yellow-mode');
        bgBody.classList.remove('pink-mode');
        bgBody.classList.remove('white-mode');
        bgBody.classList.remove('dark-mode');
        bgBody.classList.remove('green-mode');
        bgBody.classList.remove('blue-mode');
    }else if(themetValue === 'blue'){
        bgBody.classList.add('blue-mode');
        bgBody.classList.remove('pink-mode');
        bgBody.classList.remove('white-mode');
        bgBody.classList.remove('dark-mode');
        bgBody.classList.remove('yellow-mode');
        bgBody.classList.remove('green-mode');
    }else if(themetValue === 'green'){
        bgBody.classList.add('green-mode');
        bgBody.classList.remove('pink-mode');
        bgBody.classList.remove('white-mode');
        bgBody.classList.remove('dark-mode');
        bgBody.classList.remove('yellow-mode');
        bgBody.classList.remove('blue-mode');
    }else if(themetValue === 'pink'){
        bgBody.classList.add('pink-mode');
        bgBody.classList.remove('dark-mode');
        bgBody.classList.remove('white-mode');
        bgBody.classList.remove('blue-mode');
        bgBody.classList.remove('yellow-mode');
        bgBody.classList.remove('green-mode');
    }
});

