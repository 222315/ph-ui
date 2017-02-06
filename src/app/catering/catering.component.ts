import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'catering-home-page',
  templateUrl: './catering.component.html'
})
export class CateringComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() { }

}