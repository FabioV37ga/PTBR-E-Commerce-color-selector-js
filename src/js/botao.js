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

    // Buy button (not that important)

    const comprar = document.querySelector('.send__button')

    comprar.addEventListener('click', function () {

        const itemSelecionado = document.querySelector('.__selected');
        const product = document.querySelector('.produto');
        const comprado = document.querySelector('.sucesso');
        const sucessoTexto = document.querySelector('.sucesso__texto')
        
        console.log(`Você escolheu o produto ${itemSelecionado.name}, por R$${itemSelecionado.value}.00`)

        // Success animation

        product.classList.add('fade-out')

        product.addEventListener('transitionend', function(){
            product.remove()
            comprado.classList.add('fade-in')
            comprado.style.display = 'flex'
            sucessoTexto.textContent = `Produto ${itemSelecionado.name} comprado por R$${itemSelecionado.value}` 
        })
    })
})();


