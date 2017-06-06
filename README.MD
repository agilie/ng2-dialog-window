[![License](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/agilie/ng2-dialog-window)

# ng2-dialog-window

Dialog window module which allows to open dialog window using custom components. Any data could be easily send to component.

## Installation

To install this module, run:

```bash
$ npm install ng2-dialog-window --save
```

## Usage

```typescript
import { NgModule } from '@angular/core';
import { YourDialogWindowComponent } from './component/path'
import { AppComponent } from './app.component'
import { Ng2ModalWindowModule, Ng2ModalWindowService } from 'ng2-modal-window';

 
@NgModule({
    imports: [
        // ... 
        Ng2ModalWindowModule
    ],
    declarations: [
        AppComponent,
        // ....
        YourDialogWindowComponent
    ],
    providers: [
        //...
        Ng2ModalWindowService
    ],
    //...
    entryComponents: [
        YourDialogWindowComponent
    ],
})
export class AppModule {
 
}
```

```typescript
import { Component, ViewContainerRef } from '@angular/core';
import { Ng2ModalWindowService } from 'ng2-modal-window';
import { YourDialogWindowComponent } from './component/path'

 
@Component({
  selector: 'app-component',
  template: '<button (click)="openModal()">Open modal</button>'
})
export class AppComponent {

    constructor( private dialog: Ng2ModalWindowService, private viewContainer: ViewContainerRef) {
        
    }
    
    openMe() {
        this.dialog.openModal(this.viewContainer, {component: YourDialogWindowComponent})
    }

}
```
You need to extend your dialog component from ```Ng2DialogWindowComponent``` to inherit base methods of dialog window. And wrap your template in ```ng2-dialog-window-component``` tag to extend dialog window base styles.

It seems like Angular doesn't provide any simple way to inherit styles from another component. Feel free to create an issue ticket if you think I am wrong.

```typescript
import { Component } from '@angular/core';
import { Ng2DialogWindowComponent } from 'ng2-dialog-window'

@Component({
  selector: 'my-dialog-window',
  template: '<ng2-dialog-window-component><!-- Body of dialog window --></ng2-dialog-window-component>'
})
export class YourDialogWindowComponent extends Ng2DialogWindowComponent {

}

```
## API

Here is the list of accessible methods that you can use:

#### ```Ng2ModalWindowService```

```.openModal(viewContainerRef, options)```

Method allows to open dialog window. Creates new dialog instance on each call. It accepts viewContainerRef of component and options object as arguments.

```viewContainerRef {viewContainerRef}``` - viewContainerRef of current component

##### ```options```

```component {Component}``` - dialog window component

```data {String} | {Object} | {Array}``` - any serializable data that you want to be stored in dialog component and be available from ```dialogData```.

#### Dialog component

```close()``` - extended method from base dialog component. Closes dialog window.

## TODOs

1. Add more options (closeByClick, showCloseButton etc.)
2. Add tests
3. TBD

## Troubleshooting
Problems? Check the [Issues](https://github.com/agilie/ng2-dialog-window/issues) block 
to find the solution or create an new issue that we will fix asap. Feel free to contribute.

## Author
This Angular module is open-sourced by [Agilie Team](https://www.agilie.com) <info@agilie.com>

## Contributors

[Maks Nechesonov](https://github.com/NechiK) - <maks.nechesonov@agilie.com>

## License
The [MIT](LICENSE.MD) License (MIT) Copyright © 2017 [Agilie Team](https://www.agilie.com)
