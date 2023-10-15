import { NgModule } from "@angular/core";
import { SearchBarComponent } from "./search-bar.component";
import { ButtonModule } from "primeng/button";
import { MenuModule } from "primeng/menu";
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [SearchBarComponent],
    exports: [SearchBarComponent],
    imports: [
        ButtonModule,
        MenuModule,
        FormsModule,
        AutoCompleteModule
    ],
    providers: []
  })
  export class SearchBarModule{
  
  }