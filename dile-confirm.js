import { LitElement, html, css } from 'lit-element';
import 'dile-modal/dile-modal';

export class DileConfirm  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .button {
        border-radius: var(--dile-confirm-border-radius-button, 5px);
        padding: var(--dile-confirm-padding-button, 7px);
        font-size: var(--dile-confirm-font-size-button, 1em);
        text-decoration: none;
      }
      .cancel {
        background-color: var(--dile-confirm-cancel-button-color, #dc3545);
        color: var(--dile-confirm-cancel-text-button-color, #fff);
      }
      .accept {
        background-color: var(--dile-confirm-accept-button-color, #007bff);
        color: var(--dile-confirm-accept-text-button-color, #fff);
      }
      .actions {
        margin-bottom: 10px;
        text-align: var(--dile-confirm-buttons-text-align, right);
      }
    `;
  }

  static get properties() {
    return {
      acceptLabel: { type: String },
      cancelLabel: { type: String },
    };
  }

  constructor() {
    super();
    this.acceptLabel = 'Accept';
    this.cancelLabel = 'Cancell';
  }

  render() {
    return html`
      <dile-modal id="modal" @dile-modal-background-closed="${this.cancel}">
        <slot></slot>
        <div class="actions">
          <a href="#" class="button cancel" @click="${this._cancelHandler}">${this.cancelLabel}</a>
          <a href="#" class="button accept" @click="${this._acceptHandler}">${this.acceptLabel}</a>
        </div>
      </dile-modal>
    `;
  }

  _cancelHandler(e) {
    e.preventDefault();
    this.cancel();
  }
  _acceptHandler(e) {
    e.preventDefault();
    this.accept();
  }

  open() {
    this.modal.open();
  }

  close() {
    this.modal.close();
  }

  firstUpdated() {
    this.modal = this.shadowRoot.getElementById('modal');
  }

  accept() {
    this.close();
    this.dispatchEvent(new CustomEvent('dile-confirm-accepted', {
      bubbles: true,
      composed: true,
    }));
  }

  cancel() {
    this.close();
    this.dispatchEvent(new CustomEvent('dile-confirm-cancelled', {
      bubbles: true,
      composed: true,
    }));
  }
}

customElements.define('dile-confirm', DileConfirm);