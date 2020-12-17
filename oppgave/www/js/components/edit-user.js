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
      li { cursor: pointer; font-size: 20px; margin-bottom: 10px; }
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
        <input type = "password"> 
        </li>

        <li>
        <a>Confirm password: </a>
        <input type = "password">
        </li>
      </ul>
      <button type="submit">Submit</button>
    `
    // Things left to add: button calls updateUser.php, maybe change it into a form??
    // Also, why are we using php when we learned node?
  }

}
customElements.define('edit-user', EditUser);
