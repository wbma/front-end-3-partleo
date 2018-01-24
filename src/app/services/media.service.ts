import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forEach} from "@angular/router/src/utils/collection";

@Injectable()
export class MediaService {

  test = 'Whaaaat?';
  apiUrl = 'http://media.mw.metropolia.fi/wbma';
  mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

  constructor(private http: HttpClient) {

  }

  getAllMedia() {
    return this.http.get(this.apiUrl + '/media');
  }


}
