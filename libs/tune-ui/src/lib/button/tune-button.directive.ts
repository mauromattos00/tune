import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { ButtonType } from './button-type.enum';

@Directive({
  selector: 'button[tuneButton]',
  host: {
    class: 'tune-button',
  },
})
export class TuneButtonDirective {
  private _buttonType: 'primary' | 'secondary' | '' | undefined = undefined;
  @Input('tuneButton') set buttonType(type: 'primary' | 'secondary' | '') {
    if (type === '') {
      this._buttonType = ButtonType.Primary;
    } else {
      this._buttonType = type;
    }
  }

  @HostBinding('class.tune-button--primary') get primaryButton() {
    return this._buttonType === ButtonType.Primary;
  }

  @HostBinding('class.tune-button--secondary') get secondaryButton() {
    return this._buttonType === ButtonType.Secondary;
  }

  @Output() clicked = new EventEmitter();

  @HostListener('click') onClick() {
    this.clicked.emit();
  }
}
