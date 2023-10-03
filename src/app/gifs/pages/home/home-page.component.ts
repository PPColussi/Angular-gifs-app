import { Component } from '@angular/core';
import { gifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomepageComponent {
  constructor( private gifsService: gifsService) {}

  get gifs(): Gif[] {
    return this.gifsService.gifList
  }
}
