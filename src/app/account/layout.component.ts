import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({ templateUrl: 'layout.component.html' })
export class LayoutComponent {
    constructor(
        private router: Router
    ) {
        // redirect to home if already logged in
        if (false) {
            this.router.navigate(['/']);
        }
    }
}