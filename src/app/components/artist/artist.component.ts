import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent {

  artista: any = {};
  loadingArtist: boolean;
  topTracks: any[] = [];

  constructor( private router: ActivatedRoute,
               private spotiFy: SpotifyService ) {

    this.loadingArtist = true;

    this.router.params.subscribe( params => {
      this.getArtista( params.id);
      this.getTopTracks( params.id);
    });
  }

  getArtista( id: string ){

    this.spotiFy.getArtista( id ).subscribe( artista => {
      console.log( artista );
      this.artista = artista;
      this.loadingArtist = false;
    });

  }

  getTopTracks( id: string ){
    this.spotiFy.getTopTracks( id ).subscribe( topTracks => {
      console.log( topTracks );
      this.topTracks = topTracks;
    });
  }


}
