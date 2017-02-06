import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'beauty-home-page',
  templateUrl: './beauty.component.html'
})
export class BeautyComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() { }

}