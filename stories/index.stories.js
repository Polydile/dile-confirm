import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { DileConfirm } from '../dile-confirm.js';
import '../dile-confirm.js';

import readme from '../README.md';

storiesOf('dile-confirm', module)
  .addDecorator(withKnobs)
  .add(
    'Default confirm',
    () => html`
      <dile-confirm id="myModal">
        <p>
          Do you really want to delete this element?
        </p>
      </dile-confirm>
      <button @click=${
        () => {
          let confirmElement = document.getElementById('myModal');
          confirmElement.open();
        }
      }>Open a confirm box</button>
    `,
  )
  .add(
    'Styled confirm',
    () => html`
      <style>
        #myModalCustomized {
          font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
          --dile-modal-border-radius: 2px;
          --dile-modal-content-background-color: #303030;
          --dile-modal-width: 200px;
          --dile-modal-min-width: 100px;
          text-align: center;
          --dile-modal-content-shadow-color: #ddd;
          --dile-modal-background-color: #fff;
          --dile-confirm-buttons-text-align: center;
          --dile-confirm-accept-button-color: #ddd;
          --dile-confirm-cancel-button-color: #ddd;
          --dile-confirm-accept-text-button-color: #007bff;
          --dile-confirm-cancel-text-button-color: #dc3545;
          --dile-confirm-border-radius-button: 2px;
          --dile-confirm-font-size-button: 0.9em;
          --dile-confirm-padding-button: 3px 5px;
        }
        #myModalCustomized p {
          color: #f66;
          font-size: 0.9em;
          margin: 0 0 10px;
          text-transform: uppercase;
        }
        #myModalCustomized div {
          padding-bottom: 10px;
        }
      </style>
      <dile-confirm id="myModalCustomized">
        <div>
          <p>¿Are you sure?</p>
        </div>
      </dile-confirm> 
      <button @click=${
        () => {
          let confirmElement = document.getElementById('myModalCustomized');
          confirmElement.open();
        }
      }>Open a customized confirm box</button>
    `,
  )
  .add('Documentation', () => withClassPropertiesKnobs(DileConfirm), { notes: { markdown: readme } })
