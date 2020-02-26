import { LitElement, html, css } from 'lit-element';
import '../shared/income-chart'

export class ButtonElement extends LitElement {

    static get properties() {
        return {
            isHidden: { type: Boolean }
        };
    }

    static get styles() {
        return css`
          button {
            padding: 0px 16px;
            width: auto;
            height: 50px;
            margin-left: 8px;
            margin-bottom: 20px;
            border-radius: 4px;
            color: grey;
            font-size: 14px;
            font-weight: normal;
            font-family: sans-serif;
          }
        `;
    }

    constructor() {
        super();
        this.isHidden = false;
    }

    render() {
        return html`
      <button @click="${() => this.isHidden = true}" aria-label="decrement">Show Yearly chart</button>
      ${this.isHidden ? html` <income-chart></income-chart>` : html``}
    `;


    }
}
customElements.define('button-element', ButtonElement);