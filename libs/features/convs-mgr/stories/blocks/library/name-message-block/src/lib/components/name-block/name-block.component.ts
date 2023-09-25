import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { BrowserJsPlumbInstance } from '@jsplumb/browser-ui';

import { NameMessageBlock } from '@app/model/convs-mgr/stories/blocks/messaging';
import { StoryBlockTypes } from '@app/model/convs-mgr/stories/blocks/main';

@Component({
  selector: 'app-name-block',
  templateUrl: './name-block.component.html',
  styleUrls: ['./name-block.component.scss'],
})
export class NameBlockComponent implements OnInit {
  @Input() id: string;
  @Input() block: NameMessageBlock;
  @Input() nameMessageForm: FormGroup;
  @Input() jsPlumb: BrowserJsPlumbInstance;

  nameInputId: string;
  type: StoryBlockTypes;
  nametype = StoryBlockTypes.Name;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.nameInputId = `name-${this.id}`;
    this.setFocusOnInput(); 
  }
  private setFocusOnInput() {
    // Use a timeout to ensure that the element is available in the DOM
    setTimeout(() => {
      const inputElement = this.el.nativeElement.querySelector(`input[id="${this.nameInputId}"]`);
      if (inputElement) {
        inputElement.focus();
      }
    });
  }
}
