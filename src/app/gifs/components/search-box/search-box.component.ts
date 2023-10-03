
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { gifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Buscar</h5>
  <input type="text"
    class="form-control"
    placeholder="Buscar Gifs..."
    (keyup.enter)="searchTag()"
    #txtTagInput
  >`
})

export class SearchBoxComponent {
  constructor(private gifsService: gifsService) { }

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>


  searchTag() {

    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';

  }
}
