import {Component, OnInit} from '@angular/core';
import {MediaService} from '../services/media.service';

@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.scss']
})
export class ListMediaComponent implements OnInit {

  constructor(public mediaService: MediaService) {
  }

  printThis: string;
  mediaArray: any;

  ngOnInit() {
    this.printThis = this.mediaService.test;
    this.mediaService.getAllMedia().subscribe(data => {
      console.log(data);
      this.mediaArray = data;

      this.mediaArray.map( media => {
        const thumbName = media.filename.split('.')[0] + '-tn320.png';
        media.thumbnail = thumbName;
      });
      console.log(this.mediaArray);
    });
  }

}
