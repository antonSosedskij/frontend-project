import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HeaderModule } from 'src/app/shared/components/header/header.module';

@NgModule({
	declarations: [LayoutComponent],
	imports: [
		CommonModule,
        HeaderModule,
        RouterModule,
	],
	exports: [
        LayoutComponent,
    ],
})
export class LayoutModule {}
