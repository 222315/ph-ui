import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'photography-home-page',
  templateUrl: './photography.component.html'
})
export class PhotographyComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() { }

}