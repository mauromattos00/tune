import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tune-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Output() clicked = new EventEmitter();

  emitClick() {
    this.clicked.emit();
  }

}
