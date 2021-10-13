import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonType } from './button-type.enum';

@Component({
  selector: 'tune-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input('tuneButton') buttonType: ButtonType | '';
  @Output() clicked = new EventEmitter();

  static readonly ButtonType: ButtonType;

  emitClick() {
    this.clicked.emit();
  }

}
