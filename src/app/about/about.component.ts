import { DataService } from './../data.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {

  goals: any;

  constructor(private route: ActivatedRoute, private router: Router,
    private data: DataService) {
  }

  ngOnInit() {
    this.route.params.subscribe(res => console.log(res.id));
    this.data.goal.subscribe(res => this.goals = res);
  }

  sendHome() {
    this.router.navigate(['']);
  }

}
