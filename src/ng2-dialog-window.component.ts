import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'ng2-dialog-window-component',
  template: `
      <div *ngIf="showChild" (close)="showChild = false" class="ng2-dialog-window">
          <div class="ng2-dialog-window-content">
              <div>
                  <span (click)="close()" class="ng2-dialog-window-close">&times;</span>
                  <ng-content></ng-content>
              </div>
          </div>
      </div>
  `,
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
        position: relative;
        width: 80%; /* Could be more or less, depending on screen size */
      }
      .ng2-dialog-window-close {
          color: #fff;
          font-size: 38px;
          font-weight: 300;
          position: absolute;
          top: -5px;
          right: -25px;
          cursor: pointer;
      }
      .ng2-dialog-window-close:hover {
          color: #fff;
          opacity: 0.6;
      }
  `]
})
export class Ng2DialogWindowComponent {

  @Input() dialogData: any;
  @Output() onClose: EventEmitter<any> = new EventEmitter();

  constructor() {

  }

  close() {
    console.log('CLOSE ME 1');
    this.onClose.emit();
  }

}
