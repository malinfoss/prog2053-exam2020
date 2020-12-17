import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  constructor(){
    super();
    this.user = {
      uname: '',
      firstName: '',
      lastName: '',
      oldPwd: '',
      pwd: ''
    }
  } 

  static get styles() {
    return css`
      .row { display: flex; }
      .column { width: 50%; padding: 100px; }
      li { cursor: pointer; font-size: 22px; margin-bottom: 10px; }
    `;
  }

  render(){
    return html`
      <ul>
        <h2>Edit user information</h2>
        <li>
        <a>Username: </a> 
        <input type = "text" placeholder = "${this.uname}">
        </li>

        <li>
        <a>First name: </a>
        <input type = "text" placeholder = "${this.firstName}">
        </li>

        <li>
        <a>Last name: </a>
        <input type = "text" placeholder = "${this.lastName}">
        </li>

        <h2>Change password</h2>
        <li>
        <a>New password: </a>
        <input type = "text">
        </li>

        <li>
        <a>Confirm password: </a>
        <input type = "text">
        </li>
      </ul>
    `
  }

}
customElements.define('edit-user', EditUser);
