import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // paises: any[] = [];

  // constructor( private http: HttpClient ) {

  //   this.http.get('https://restcountries.eu/rest/v2/lang/es')
  //                .subscribe( (paises: any) => {
  //                  this.paises = paises;
  //                  console.log( paises );
  //                });
  // }

  paises: any[] = [];
  nuevasCanciones: any[] = [];
  loading: boolean;

  error: boolean;
  mensajeError: string;

  constructor( private spotify: SpotifyService ) {

    this.loading = true;
    this.error = false;


    this.spotify.getNewReleases().subscribe( (data: any) => {
      this.nuevasCanciones = data;
      console.log( data );
      this.loading = false;
    }, ( errorServicio ) => {
      this.error = true;
      this.mensajeError = errorServicio.error.error.message;
    });
  }

}
