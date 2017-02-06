import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'decorators-home-page',
  templateUrl: './decorators.component.html'
})
export class DecoratorsComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() { }

}