class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy Cristhiam Alejandro Palomares Mancera 2021`;
    }
}
customElements.define("mi-footer", MiFooter);
