import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, map, tap } from 'rxjs';

import { orderBy as __orderBy } from 'lodash';

import { __DateFromStorage } from '@iote/time';

import { Story } from '@app/model/convs-mgr/stories/main';

@Component({
  selector: 'italanta-apps-bots-list-latest-courses',
  templateUrl: './bots-list-latest-courses.component.html',
  styleUrls: ['./bots-list-latest-courses.component.scss'],
})
export class BotsListLatestCoursesComponent implements OnInit {

  @Input() stories$: Observable<Story[]>;

  defaultImageUrl = `https://res.cloudinary.com/dyl3rncv3/image/upload/v1695626490/photo-1541746972996-4e0b0f43e02a_o9ukmi.jpg`

  stories: Story[];

  screenWidth: number;

  constructor(private _router$$: Router) {}

  ngOnInit(): void {

    this.screenWidth = window.innerWidth;

    if (this.stories$) {
      this.stories$.pipe(
        map((s) => __orderBy(s,(a) => __DateFromStorage(a.createdOn!).unix(), 'desc')),
        tap((s) => this.stories = s)).subscribe();
    }
  }

  openBot(id: string) {
    this._router$$.navigate(['stories', id]);
  }
}
