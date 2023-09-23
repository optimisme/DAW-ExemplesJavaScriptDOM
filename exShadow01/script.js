class UserCard extends HTMLElement {

    constructor() {

        super()

        // Cara a mostrar
        this.side = 0
        this.refFlip = null

        // Crea el shadow root
        const shadow = this.attachShadow({ mode: 'open' })

        // Accedir a la informació de l'element (atributs i fills)
        const userName = this.getAttribute('data-name')
        let label = this.querySelector('label')

        // Crea els estils del Shadow DOM
        const style = document.createElement('style')
        style.textContent = `
            .card {
                border: 1px solid black;
                display: inline-block;
                padding: 16px;
                margin: 8px 0;
            }
            #flip {
                transform: rotateY(0);
                transition: transform 0.5s ease;
            }
            .userName {
                font-weight: bold;
            }
            button {
                margin-top: 8px;
            }
        `;

        // Crea els elements dins del Shadow DOM
        const container = document.createElement('div')
        container.setAttribute('class', 'card')

        this.refFlip = document.createElement('div')
        this.refFlip.setAttribute('id', 'flip')

            const name = document.createElement('div')
            name.setAttribute('class', 'userName')
            name.innerText = userName;
            
            const description = document.createElement('div')
            description.setAttribute('id', 'description')
            description.innerText = label.textContent

        this.refFlip.appendChild(name)
        this.refFlip.appendChild(description)

        const button = document.createElement('button')
        button.setAttribute('id', 'button')
        button.innerText = 'Flip'
        button.addEventListener('click', this.flip.bind(this))

        // Afegeix els elements i estils al shadow root
        shadow.appendChild(style)
        shadow.appendChild(container)
        container.appendChild(this.refFlip)
        container.appendChild(button)
    }

    flip () {
        if (this.side == 0) {
            this.refFlip.style.transform = 'rotateY(180deg)'
            this.side = 1
        } else {
            this.refFlip.style.transform = 'rotateY(0deg)'
            this.side = 0
        }
    }
}

// Defineix l'element personalitzat
customElements.define('user-card', UserCard)