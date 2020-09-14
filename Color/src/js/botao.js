; (function () {

    const buttons = document.querySelectorAll('.botao')

    for (let i = 0; i < buttons.length; i++) {

        const button = buttons[i]

        button.addEventListener('click', function () {

            const displayColor = document.querySelector('.display__color');
            const buttons = document.querySelectorAll('.botao');
            const camiseta = document.querySelector('#camiseta')

            for (let i = 0; i < buttons.length; i++) {

                const button = buttons[i]

                if (button === this) {
                    button.classList.add('__selected');
                    displayColor.textContent = `cor: ${button.value}`;
                    camiseta.src = `src/img/${button.value}.png`
                }
                else {
                    button.classList.remove('__selected')
                }
            }
        })
    }
})();


