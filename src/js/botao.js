; (function () {


    const buttons = document.querySelectorAll('.botao')

    for (let i = 0; i < buttons.length; i++) {

        const button = buttons[i]

        button.addEventListener('click', function () {

            const displayColor = document.querySelector('.display__color');
            const camiseta = document.querySelector('#camiseta')
            
            const buttons = document.querySelectorAll('.botao');
            
            for (let i = 0; i < buttons.length; i++) {

                const button = buttons[i]

                if (button === this) {
                    button.classList.add('__selected');
                    displayColor.textContent = `cor selecionada: ${button.name}`;

                    camiseta.src = `src/img/${button.name}.png`
                }
                else {
                    button.classList.remove('__selected')
                }
            }

        })
    }
    const comprar = document.querySelector('.send__button')
    comprar.addEventListener('click', function () {
        const itemSelecionado = document.querySelector('.__selected')
        console.log(`Você escolheu o produto ${itemSelecionado.name}, por R$${itemSelecionado.value}.00`)
    })
})();


