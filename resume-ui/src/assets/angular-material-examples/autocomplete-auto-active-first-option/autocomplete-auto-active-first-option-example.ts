import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

/**
 * @title Highlight the first autocomplete option
 */
@Component({
    selector: "autocomplete-auto-active-first-option-example",
    templateUrl: "autocomplete-auto-active-first-option-example.html",
    styleUrls: ["autocomplete-auto-active-first-option-example.css"],
})
export class AutocompleteAutoActiveFirstOptionExample implements OnInit {
    options: string[] = ["One", "Two", "Three"];
    filteredOptions: Observable<string[]>;

    ngOnInit() {}
}
