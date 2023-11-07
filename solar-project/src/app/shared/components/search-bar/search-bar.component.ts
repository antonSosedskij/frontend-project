import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { filter, map, tap } from 'rxjs';
import { AdvertsGetResponseDto } from 'src/app/data-access/dtos/api/advert/AdvertsGetResponseDto';
import { AdvertService } from 'src/app/data-access/services/advert/advert.service';
import { CategoryService } from 'src/app/data-access/services/category/category.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent implements OnInit {
  items: MenuItem[] = [];

  defaultCategory = '00000000-0000-0000-0000-000000000000';

  receivedAdverts: AdvertsGetResponseDto[] = [];

  constructor(
    private _advertService: AdvertService,
    private categoryService: CategoryService,
    private _cdr: ChangeDetectorRef,
    private _router: Router
  ) {}

  ngOnInit() {
    this.categoryService
      .getCategoryById(this.defaultCategory)
      .pipe(
        tap((response) => {
          console.log(response);
          response.childs.map((child) => {
            let item: MenuItem = { 
              label: child.name, 
              command: () => {
                this._router.navigate(['adverts/search'], {
                  queryParams: {category: child.id}
                })
              }
            };
            this.items.push(item);
            this._cdr.detectChanges();
          });
        })
      )
      .subscribe();
  }

  searchByKeyup(event: Event) {
    this._router.navigate(['adverts/search'], {
      queryParams: { search: `${(event.target as HTMLInputElement).value}` },
    });
  }

  searchByClick(query: string) {
    this._router.navigate(['adverts/search'], {
      queryParams: { search: query },
    });
  }
}
