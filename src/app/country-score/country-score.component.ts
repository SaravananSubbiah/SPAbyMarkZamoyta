import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppDataService } from '../services/app-data.service';
import { Score } from '../view-models/Score';

@Component({
  selector: 'app-country-score',
  templateUrl: './country-score.component.html',
  styleUrls: ['./country-score.component.css']
})
export class CountryScoreComponent implements OnInit {

  allScores: Array<Score>;
  count = 0;
  scores: Array<Score>;

  constructor(private dataService: AppDataService,
              private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.dataService.getScores().subscribe(
      scores => {
        this.allScores = scores;

        this.count = this.route.snapshot.params['count'];
        this.updateList();
      }
    );

    this.route.params.subscribe(params => {
      this.count = params['count'];
      this.updateList();
     });      
  }

  updateList() {
    this.scores = this.count>0?this.allScores.slice(0, this.count): this.allScores;
  }
}

