import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'ng2-dialog-window-component',
  template: `<div class="ng2-dialog-window"><div class="ng2-dialog-window-content"><ng-content></ng-content></div></div>`,
  styles: [` 
      .ng2-dialog-window {
        display: block;
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
      } 
      .ng2-dialog-window-content {
        background-color: #fefefe;
        margin: 15% auto; /* 15% from the top and centered */
        padding: 20px;
        border: 1px solid #888;
        width: 80%; /* Could be more or less, depending on screen size */
      }
  `]
})
export class Ng2DialogWindowComponent {

  @Input() dialogData: any;
  @Output() onClose: EventEmitter<any> = new EventEmitter();

  constructor() {

  }

  protected close() {
    this.onClose.emit();
  }

}
