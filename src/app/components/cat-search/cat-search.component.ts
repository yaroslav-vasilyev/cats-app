import { Component, OnInit } from '@angular/core';
import { CatApiService } from '../../services/cat-api.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cat-search',
  templateUrl: './cat-search.component.html',
  styleUrls: ['./cat-search.component.scss']
})
export class CatSearchComponent implements OnInit {
  breeds: any[] = [];
  cats: any[] = [];
  searchForm: FormGroup;
  limitOptions: number[] = [10, 20, 30];
  isLoading: boolean = false;

  constructor(private catApiService: CatApiService) {
    this.searchForm = new FormGroup({
      breed: new FormControl(''),
      limit: new FormControl(10)
    });
  }

  ngOnInit() {
    this.loadBreeds();
    this.search();
  }

  loadBreeds() {
    this.catApiService.getAllBreeds().subscribe((data: any) => {
      this.breeds = data;
    });
  }

  search() {
    const breedId = this.searchForm.value.breed;
    const limit = this.searchForm.value.limit;

    this.isLoading = true;

    this.isLoading = true;

    if (breedId) {
      this.catApiService.searchCatsByBreed(breedId, limit).subscribe((data: any) => {
        this.cats = data.slice(0, limit).map((cat: any) => ({ ...cat, loaded: false })); // Добавляем свойство loaded для каждой картинки
        this.isLoading = false;
      });
    } else {
      this.catApiService.searchAllCats(limit).subscribe((data: any) => {
        this.cats = data.slice(0, limit).map((cat: any) => ({ ...cat, loaded: false })); // Добавляем свойство loaded для каждой картинки
        this.isLoading = false;
      });
    }
  }
}
