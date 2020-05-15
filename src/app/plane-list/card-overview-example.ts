import {Component} from '@angular/core';
import { FormControl } from '@angular/forms';

import { plane_data } from "../list";

/**
 * @title Basic cards
 */
@Component({
  selector: 'card-overview-example',
  templateUrl: 'card-overview-example.html',
  styleUrls: ['card-overview-example.css'],
})
export class CardOverviewExample {
  html_pass_plane_data = plane_data;
  wingspanMin = new FormControl('');
  wingspanMax = new FormControl('50');
  wingareaMin = new FormControl('');
  wingareaMax = new FormControl('1000');

  addPlane() {
    this.html_pass_plane_data.push({ name: Math.random().toString(36).substring(7), wingspan: 50, wingarea: 1000, description: '', mission: '', picture: { url: 'https://dummyimage.com/600x400/000/fff' } })
  }

}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */