# dile-confirm

This is a Web Component to implement a modal confirm box, based on LitElement.

Let's [go to DEMOS page](https://dile-confirm.polydile.com)!

# Use

Install it from npm:

```
npm i dile-confirm
```

Place the script In your HTML page or include the dile-confirm.js file in your JS bundle. After that you can use the dile-confirm tag, like this:

```
<dile-confirm id="myModal">
  <p>
    Delete this file?
  </p>
</dile-confirm> 
```

Whatever you place inside the ```<dile-confirm>``` tag will be the content displayed when the modal box opens. 

In addition, the confirm box display two buttons inside the modal interface: 

- Cancel button: pressing it, the confirm box closes and dispatchs the dile-confirm-cancelled event
- Accept button: pressing it, the confirm box closes and dispatchs the dile-confirm-accepted event

## Properties

- **opened**: Bolean property used to change the confirm modal state, false is closed / true means open.
- **cancelLabel**: The text to the cancel button.
- **acceptLabel**: The text to the accept button.
- **blocking**: Click on the background layer do not closes the confirm box.

## Methods

- **open**: Use it to open the modal confirm box
- **close**: Use it to close the modal confirm box
- **accept**: Closes the modal box and dispatch dile-confirm-accepted event
- **cancel**: Closes the modal box and dispatch dile-confirm-cancelled event

## Custom events

- **dile-confirm-cancelled**: Dispatched when the confirm box is cancelled. This occurs when the user press the cancel button or closes the modal box cliking outside.
- **dile-confirm-accepted**: Dispatched when the confirm box is accepted. This occurs when the user press the accept button.

## Style customization

These are the dile-confirm CSS custom properties. (But remember, you can customize the modal box interface also by using the CSS custom properties of the [dile-modal component](https://github.com/Polydile/dile-modal))

Custom property | Description | Default
----------------|-------------|---------
--dile-confirm-accept-button-color | Accept button background color | #007bff
--dile-confirm-cancel-button-color | Cancel button background color | #dc3545
--dile-confirm-accept-text-button-color | Accept button text color | #fff
--dile-confirm-cancel-text-button-color | Cancel button text color | #fff
--dile-confirm-border-radius-button | Button border radius | 5px
--dile-confirm-padding-button | Button padding | 7px
--dile-confirm-font-size-button | Button font size | 1em
--dile-confirm-buttons-text-align | Buttons element text align | right
--dile-confirm-text-transform  | Button text transformation | uppercase