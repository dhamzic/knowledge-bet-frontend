import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITile } from './models/ITile';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public gridColumn: string = "col-2";

  tiles: ITile[] = [];

  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit(): void {
    this.getHomeTiles();
  }

  getHomeTiles() {
    this.homeService.getTiles()
      .subscribe((data: ITile[]) => {
        this.tiles = data;
      });
  }

  get width() {
    let gridColumn;
    if (window.innerWidth <= 860) {
      gridColumn = "col-12";
    } else if (window.innerWidth <= 1250) {
      gridColumn = "col-6";
    } else if (window.innerWidth <= 1900) {
      gridColumn = "col-4";
    } else {
      gridColumn = "col-3"
    }
    return gridColumn;
  }

  onResize(event: any) {
    if (event.target.innerWidth <= 860) {
      this.gridColumn = "col-12";
    } else if (event.target.innerWidth <= 1250) {
      this.gridColumn = "col-6";
    } else if (event.target.innerWidth <= 1900) {
      this.gridColumn = "col-4";
    } else {
      this.gridColumn = "col-3"
    }
  }
}
