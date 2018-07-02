import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from "protractor";

@Component({
    selector: 'app-size',
    templateUrl: '../html/detail.html',
})
export class DetailComponent {
    @Input('size') size;
    @Output() sizeChange = new EventEmitter;
    bigger(e) {
        this.size++;
        this.sizeChange.emit(this.size);
    }
}
