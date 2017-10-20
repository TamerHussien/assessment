import { Injectable } from '@angular/core';

import { DEP } from '../shared/dep';

import { School } from '../shared/school';

import { SCHOOLS } from '../shared/schools';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

@Injectable()

export class DepserviceService {

  constructor() { }

  getSchools(): Observable<School[]> {
    return Observable.of(SCHOOLS);
}

getSchool(id: number): Observable<School> {
  return Observable.of(SCHOOLS.filter((DEP) => (DEP.id === id))[0]);
}
getSchoolIds(): Observable<number[]> {
  return Observable.of(SCHOOLS.map(dish => dish.id ));
}
}
