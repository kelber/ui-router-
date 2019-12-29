import { Person } from './../service/person';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() ResolveDataPeople: Person[];

}