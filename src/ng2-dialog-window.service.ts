import {Injectable, ComponentFactoryResolver} from '@angular/core';

@Injectable()
export class Ng2ModalWindowService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }

  openModal(viewContainerRef: any, options: any) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(options.component);
    const ref = viewContainerRef.createComponent(factory);
    ref.instance.dialogData = options.data || {};
    ref.instance.onClose.subscribe(() => {
      ref.destroy();
    });
    ref.changeDetectorRef.detectChanges();
  }

}
