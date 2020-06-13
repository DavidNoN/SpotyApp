import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;

  constructor(private spotiFy: SpotifyService ) { }

  buscar(termino: string) {
    console.log(termino);
    this.loading = true;
    this.spotiFy.getArtistas( termino ).subscribe( (data: any) => {
      console.log( data );
      this.artistas = data;
    });
    this.loading = false;
  }

}
