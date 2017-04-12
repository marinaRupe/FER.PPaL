﻿import { Component, Input } from '@angular/core';

@Component({
    selector: 'child-organism',
    template: require('./child-organism.component.html'),
    styles: [require('./child-organism.component.css')]
})
export class ChildOrganismComponent {
    @Input() genotype: string;
    @Input() fenotype: string;
}