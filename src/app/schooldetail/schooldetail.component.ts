import { Component, OnInit } from '@angular/core';

import { Params, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { School } from '../shared/school';

import { DepserviceService } from '../services/depservice.service';

@Component({
  selector: 'app-schooldetail',
  templateUrl: './schooldetail.component.html',
  styleUrls: ['./schooldetail.component.css']
})
export class SchooldetailComponent implements OnInit {

  school: School;

  schoolId: number [];

  constructor(private depservice: DepserviceService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {

    // this.depservice.getSchoolIds().subscribe(ids => this.schoolId = ids);

    // this.route.params
    // .switchMap((params: Params) => this.depservice.getSchool(+params['id']))
    // .subscribe(school => { this.school = school; });

  }

}
