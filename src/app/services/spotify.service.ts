import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }


  getQuery( query: string ){

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders ({
      Authorization: 'Bearer BQDyDal6s2rCqyzOprIHS_sPvDrAA8mO35o84iX2HcKraF2-3cMl-30PC1rdcSZKt0vbwm5KR6xI0Oq1cnk'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases/')
              .pipe( map( (data: any) => data.albums.items));

    // this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
    //           .pipe( map( (data: any) => data.albums.items));


  }

  getArtistas(termino: string) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
              .pipe( map( (data: any) => data.artists.items));


    // return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
    //           .pipe( map( (data: any) => data.artists.items));

  }

  getArtista(id: string) {

    return this.getQuery(`artists/${ id }`);
              // .pipe( map( (data: any) => data.artists.items));
  }

  getTopTracks( id: string ) {

    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
              .pipe( map( (data: any) => data.tracks));
  }


}
