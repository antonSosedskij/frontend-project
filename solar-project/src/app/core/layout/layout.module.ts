import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { SearchBarModule } from 'src/app/shared/components/search-bar/search-bar.module';

@NgModule({
	declarations: [LayoutComponent],
	imports: [
		CommonModule,
        HeaderModule,
        RouterModule,
		SearchBarModule
	],
	exports: [
        LayoutComponent,
    ],
})
export class LayoutModule {}
