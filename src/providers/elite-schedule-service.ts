import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the EliteScheduleService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EliteScheduleService {

  private baseURL = 'https://elite-schedule-http-66983.firebaseio.com/'
  constructor(public http: Http) {
    console.log('Hello EliteScheduleService Provider');
  }

}
