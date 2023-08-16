import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { NgIf } from "@angular/common";
import { SearchBarModule } from "../search-bar/search-bar.module";
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    imports: [
        SearchBarModule,
        ButtonModule
    ],
    providers: []
  })
  export class HeaderModule{
  
  }