import { html, css, LitElement } from "lit-element";
import '@polymer/paper-input/paper-input.js';

class MyLit extends LitElement {
  static get properties() {
    return {
      hello: { type: String },
      user:{type: String,hasChanged(neval,oldval){
        console.log(neval);
        
      }},
      nombre:{type: Array},
      boleano:{type: Boolean,hasChanged(newV,old){
        console.log(newV,old)
      }}
    };
  }

  constructor() {
    super();
    this.hello = "Hello World!";
    this.user = "usuario";
    this.nombre = ['alex','Ian','David','jorge','leo'];
    this.boleano = true;
  }

  static get styles() {
    return css``;
  }

  render() {
    return html`
      <h2>${this.hello}</h2>
      <h1>${this.user}</h1>
      <paper-input label="User" id="user"></paper-input>
      <paper-input label="Password" type="password" value="${this.user}"></paper-input>
      <ul>${this.nombre.map(name=>html`<li>${name}</li>`)}</ul>
      ${this.boleano?
        html`<p>Render some HTML if myBool is true</p>`:
        html`<p>Render some other HTML if myBool is false</p>`}
        <button @click="${this.changeV}">click</button>
        <button @click="${this.eval}">CHECAR</button>
    `;
  }
  changeV(){
    this.boleano=!this.boleano;
  }

  eval(){
    this.shadowRoot.querySelector('#user').value;
  }
}

window.customElements.define("my-lit", MyLit);
