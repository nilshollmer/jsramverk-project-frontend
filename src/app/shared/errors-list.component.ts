import { Component, Input } from '@angular/core';

import { Errors } from '@app/core';

@Component({
selector: 'app-errors-list',
templateUrl: './errors-list.component.html'
})
export class ErrorsListComponent {
    // formattedErrors: Array<string> = [];
    errorMessage: String;

    @Input()
    set errors(errorList: Errors) {
        this.errorMessage = errorList.errors["detail"] || "";
      // this.formattedErrors = Object.keys(errorList.errors || {})
      // .map(key => `${key} ${errorList.errors[key]}`);
    }

    // get errorList() { return this.formattedErrors; }
}
