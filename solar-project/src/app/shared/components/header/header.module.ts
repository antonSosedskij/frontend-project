import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { NgIf } from "@angular/common";
import { SearchBarModule } from "../search-bar/search-bar.module";
import { ButtonModule } from 'primeng/button';
import { MenuModule } from "primeng/menu";

@NgModule({
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    imports: [
        SearchBarModule,
        ButtonModule,
        MenuModule,
        NgIf
    ],
    providers: []
  })
  export class HeaderModule{
  
  }