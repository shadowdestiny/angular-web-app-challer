import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-slide-selector',
    templateUrl: './slide-selector.component.html',
    styleUrls: ['./slide-selector.component.scss'],
})
export class SlideSelectorComponent implements OnInit, OnChanges {

    @Output() selected = new EventEmitter<number>();
    @Input() isEnable = true;
    options = [
        {
            active: true
        },
        {
            active: false
        },
        {
            active: false
        },
    ];

    @Input() isVisible = [true, true, true];

    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.isVisible = changes.isVisible.currentValue;
    }

    onOption(index: number) {
        if (!!this.options[index] && this.isEnable) {
            this.options.forEach((part, i) => {
                this.options[i].active = false;
            });
            this.options[index].active = true;
            this.selected.emit(index);
        }
    }

}
