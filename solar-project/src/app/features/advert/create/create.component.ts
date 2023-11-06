import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { debounceTime, map, tap } from 'rxjs';
import { AutoCompleteEvent } from 'src/app/data-access/dtos/AutoCompleteEvent';
import { AdvertCreateRequestDto } from 'src/app/data-access/dtos/api/advert/AdvertCreateRequestDto';
import { CategoryGetResponseDto } from 'src/app/data-access/dtos/api/category/CategoryGetResponseDto';
import { AddressesGetRequestDto } from 'src/app/data-access/dtos/api/dadata/AddressesGetRequestDto';
import { AdvertService } from 'src/app/data-access/services/advert/advert.service';
import { CategoryService } from 'src/app/data-access/services/category/category.service';
import { DadataService } from 'src/app/data-access/services/dadata/dadata.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  categories: CategoryGetResponseDto[] = []
  defaultCategory = '00000000-0000-0000-0000-000000000000'

  suggested!: any[]
  selectedAddress: string = ''

  createForm = new FormGroup(
    {
      name: new FormControl<string>('', [
        Validators.required
      ]),
      description: new FormControl<string>(''),
      location: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      images: new FormControl<FileList | null>(null),
      categoryId: new FormControl<string>('', [
        Validators.required
      ]),
      phone: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(11)
      ]),
      cost: new FormControl<number>(0, [
        Validators.required,
        Validators.min(1)
      ])
    }
  );

  files : FileList | null = null;

  constructor(
    private _advertService: AdvertService,
    private _categoryService: CategoryService,
    private _dadata: DadataService,
    private _messageService: MessageService,
    private _router: Router
  ) { }

  ngOnInit(){
    this._categoryService.getAllCategories()
      .pipe( 
        map( response => {
          return response.filter(
            element => element.parentId === this.defaultCategory
          );
        }),
        tap( response => {
          this.categories = response
          console.log(this.categories);
        })
      )
      .subscribe();
  }

  getAddresses(event : AutoCompleteEvent){
    let query : AddressesGetRequestDto = { query: event.query}
    
    this._dadata.getSuggestedAddresses(query)
      .pipe(
        debounceTime(3000),
        tap(response => {
          this.suggested = response.suggestions
          console.log(this.suggested);
        }
        ),
      ).subscribe();
  }

  selectAddress(location: any){
    this.selectedAddress = location.value
  }

  onFileChange(event: Event) {
    let files = (event.target as HTMLInputElement).files
    if (files!.length > 0) {
      this.files = files;
    }
  }

  onSubmit(){
      const formData = new FormData();
      if (this.files && this.files.length !== 0){
        formData.append('name', this.createForm.value.name || '');
        formData.append('description', this.createForm.value.description || '');
        formData.append('location', this.selectedAddress || '');
        formData.append('cost', this.createForm.value.cost?.toString() || '');
        formData.append('email', '');
        formData.append('phone', this.createForm.value.phone || '');
        formData.append('categoryId', this.createForm.value.categoryId || '');

        for (let i = 0; i < this.files.length; i++) {
          formData.append('images', this.files[i]);
        }
        
      }
  
      this._advertService.createAdvert(formData)
        .pipe(
          tap(() => {
            this._router.navigate(['/adverts/']);
            this._messageService.add({severity: 'success', summary: 'Успешно', detail: 'Объявление создано'});
          })
        )
        .subscribe();
  }
}
