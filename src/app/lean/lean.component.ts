import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

@Component({
  selector: 'app-lean',
  templateUrl: './lean.component.html',
  styleUrls: ['./lean.component.scss']
})
export class LeanComponent implements OnInit {

  constructor(private state: StateService) { }

  ngOnInit() {
  }

  OpenAPerson() {
    this.state.go("people.person", { personid: 293 }, { reload: true })
  }

}
