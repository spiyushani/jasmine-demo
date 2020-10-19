import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-count',
    templateUrl: './count.component.html',
    styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {
    @Input() label;
    @Input() count: number;
    @Output() onButtonClick: EventEmitter<boolean> = new EventEmitter();

    constructor() {
    }

    ngOnInit(): void {
    }

    fireRefreshEvent() {
        this.onButtonClick.emit(true);
    }
}
