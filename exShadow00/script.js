class UserCard extends HTMLElement {
    constructor() {
        super()
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
            .userName {
                font-weight: bold;
            }
        `;

        // Crea els elements dins del Shadow DOM
        const container = document.createElement('div')
        container.setAttribute('class', 'card')

        const name = document.createElement('div')
        name.setAttribute('class', 'userName')
        name.innerText = userName;
          
        const description = document.createElement('div')
        description.setAttribute('id', 'description')
        description.innerText = label.textContent

        // Afegeix els elements i estils al shadow root
        shadow.appendChild(style)
        shadow.appendChild(container)
        container.appendChild(name)
        container.appendChild(description)
    }

    connectedCallback() {
        // Quan l'element estigui connectat al DOM,
        // cridarà aquesta funció
    }
}

// Defineix l'element personalitzat
customElements.define('user-card', UserCard)