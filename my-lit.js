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
    this.user = "";
    this.nombre = ['alex','Ian','David','jorge','leo'];
    this.boleano = true;
  }

  static get styles() {
    return css`
      :host{
        display:block;
        color:blue;
      }
      paper-input{
        --paper-input-container-input-color:black;
        --paper-input-container-color:black;
        --paper-input-container-focus-color:green;
      }
    `;
  }

  render() {
    return html`
      <h2>${this.hello}</h2>
      <h1>${this.user}</h1>
      <paper-input label="User" id="user" @keyup="${this.evalue}"></paper-input>
      <paper-input label="Password" type="password" id="pass"></paper-input>
      <ul>${this.nombre.map(name=>html`<li>${name}</li>`)}</ul>
      ${this.boleano?
        html`<p>Render some HTML if myBool is true</p>`:
        html`<p>Render some other HTML if myBool is false</p>`}
        <button @click="${this.changeV}">click</button>
        <button @click="${this.eval}">CHECAR</button>
        <button @click="${this.clickHandler}">ver</button> 
        <slot name="one"></slot>
    `;
  }
  changeV(){
    this.boleano=!this.boleano;
  }

  eval(){
    let pass = this.shadowRoot.querySelector('#pass').value;
    console.log(pass);
  }
  evalue(){
    this.user = this.shadowRoot.querySelector('#user').value;
  }
  clickHandler(e) {
    console.log(e.target);
  }
}

window.customElements.define("my-lit", MyLit);
