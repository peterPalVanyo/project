import { Directive, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective{
    @HostBinding("class.open") isOpen: boolean = false;
    constructor() {}
    @HostListener("click") toggleOpen(event: Event) {
        this.isOpen = !this.isOpen;
    }

}