class UserCard extends HTMLElement {
    constructor() {
        super();
        // Crea el shadow root
        const shadow = this.attachShadow({ mode: 'open' });
  
        // Accedir als atributs
        const userName = this.getAttribute('name');
  
        // Crea els elements dins del Shadow DOM
        const container = document.createElement('div');
        container.setAttribute('class', 'user-card');
        const name = document.createElement('div');
        name.setAttribute('class', 'user-name');
        name.innerText = userName; // Cal definir el nom com atribut
  
        const description = document.createElement('div');
        description.setAttribute('class', 'user-description');

        // Afegeix estils dins del Shadow DOM
        const style = document.createElement('style');

        style.textContent = `
.user-card {
  border: 1px solid black;
  display: inline-block;
  padding: 16px;
  margin: 8px 0;
}
.user-name {
font-weight: bold;
}
`;
        // Afegeix els elements i estils al shadow root
        shadow.appendChild(style);
        shadow.appendChild(container);
        container.appendChild(name);
        container.appendChild(description);
    }

    connectedCallback() {
        // Quan l'element estigui connectat al DOM,
        // configura la descripció a partir del contingut del <label>
        const label = this.querySelector('label');
        if (label) {
            const descriptionElement =       this.shadowRoot.querySelector('.user-description');
            descriptionElement.innerText = label.textContent;
        }
    }
}

// Defineix l'element personalitzat
customElements.define('user-card', UserCard);
