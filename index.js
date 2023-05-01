document.addEventListener('DOMContentLoaded', function() {

    var randomNumber = Math.floor(Math.random() * 100) + 1;

    var lives = 10;

    const main = document.getElementById('main')

    const btn_restart = document.getElementById('btn_restart');

    const head_live = document.getElementById('head_live');


    head_live.addEventListener('click', () => {})


    let numbers = []

    btn_restart.addEventListener('click', function generateAppendNumbers() {

        randomNumber = Math.floor(Math.random() * 100) + 1;

        lives = 10;

        if (screen.width > 500) {
            lives = 10
        }

        head_live.innerText = `${lives}`;

        main.innerHTML = '';

        numbers.length = 0;

        appendNumbers()


        function appendNumbers() {

            numbers.splice(0, numbers.length)

            for (let i = 1; i <= 100; i++) {
                numbers.push(i);
            }
              
            for (let i = 100 - 1; i > 0; i--) {
                const currentNumber = Math.floor(Math.random() * (i + 1));
                [numbers[i], numbers[currentNumber]] = [numbers[currentNumber], numbers[i]];
            }

            main.innerHTML = "";
    
            for (let i = 0; i < numbers.length; i++) {
                const numberButton = document.createElement('button');
        
                numberButton.textContent = numbers[i]
                
                main.appendChild(numberButton)
            }
        }
    })

    btn_restart.addEventListener('click', () => {

        randomNumber = Math.floor(Math.random() * 100) + 1;

        lives = 10

        if (screen.width > 500) {
            lives = 10;
        }

        head_live.innerText = `${lives}`;
        

        main.innerHTML = '';

        numbers.length = 0;

        appendNumbers()

        function appendNumbers() {

            numbers.splice(0, numbers.length)

            for (let i = 1; i <= 100; i++) {
                numbers.push(i);
            }
              
            for (let i = 100 - 1; i > 0; i--) {
                const currentNumber = Math.floor(Math.random() * (i + 1));
                [numbers[i], numbers[currentNumber]] = [numbers[currentNumber], numbers[i]];
            }

            main.innerHTML = "";
    
            for (let i = 0; i < numbers.length; i++) {
                const numberButton = document.createElement('button');
        
                numberButton.textContent = numbers[i];
                
                main.appendChild(numberButton);
            }
        }
            function hint() {
                const userInt = parseInt(userChoice.textContent);
                const congrats = document.getElementById('congrats');
                if (userInt > randomNumber) {
                    congrats.textContent = "Too high";
                }else{
                    congrats.textContent = "Too low";
                }
                    
                }
            hint();
            
    })

    main.addEventListener('click', function checkClick(event) {

        const userChoice = event.target;
        
        if (userChoice.offsetWidth >= 100) {}

        else if (userChoice.innerText == randomNumber) {
            const allButtons = main.querySelectorAll('button');

            allButtons.forEach((button) => {
                button.disabled = true;
            })

            userChoice.style.backgroundColor = "black"; userChoice.style.opacity = "1";

            head_live.innerText = "Congrats!";
            head_live.style.backgroundColor = "white"; head_live.style.border = "2px solid white"; head_live.style.color = "black";
        }

        else if (userChoice.innerText != randomNumber) {
            userChoice.style.backgroundColor = "black"; userChoice.style.color = "white"; userChoice.style.cursor = "not-allowed";
            
            head_live.innerText = `${lives-=1}`

            userChoice.disabled = true;

            hint() 
            function hint() {
                const userInt = parseInt(userChoice.textContent);
                const congrats = document.getElementById('congrats');
                if (userInt > randomNumber) {
                    congrats.textContent = "Too high";
                }else{
                    congrats.textContent = "Too low";
                }

            }
            hint();

            if (lives < 1) {
                head_live.textContent = "GAME OVER!"
                
                head_live.style.backgroundColor = "white"; head_live.style.color = "crimson";

                const allButtons = main.querySelectorAll('button');

                allButtons.forEach((button) => {
                    button.style.backgroundColor = "crimson"; button.style.color = "white"; button.style.opacity = "0.5"; button.style.cursor = "not-allowed";
                    button.disabled = true;

                    if (button.innerText == randomNumber) {
                        button.style.backgroundColor = "lawngreen"; button.style.color = "white"; button.style.opacity = "1"; button.style.cursor = "pointer";
                    }
                })
            }
        }
    })
})