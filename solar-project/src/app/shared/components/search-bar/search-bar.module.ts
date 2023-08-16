import { NgModule } from "@angular/core";
import { SearchBarComponent } from "./search-bar.component";
import { ButtonModule } from "primeng/button";
import { MenuModule } from "primeng/menu"

@NgModule({
    declarations: [SearchBarComponent],
    exports: [SearchBarComponent],
    imports: [
        ButtonModule,
        MenuModule
    ],
    providers: []
  })
  export class SearchBarModule{
  
  }