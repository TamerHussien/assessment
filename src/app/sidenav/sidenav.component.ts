import { Component, OnInit } from '@angular/core';

import { School } from '../shared/school';

import { DepserviceService } from '../services/depservice.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  schools: School[];
  names: School[];

  constructor(private department: DepserviceService) { }

  ngOnInit() {

    this.department.getSchools()
    .subscribe(schools => this.schools = schools);
    this.names = this.schools;
  }

}
