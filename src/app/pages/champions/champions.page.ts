import { Component, OnInit } from '@angular/core';
import { ChampionService } from '../../services/champion/champion.service';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.page.html',
  styleUrls: ['./champions.page.scss'],
})
export class ChampionsPage implements OnInit {
  champions: any[];

  constructor(private championService: ChampionService) { }

  ngOnInit() {
    this.getChampions();
  }

  getChampions() {
    this.championService.getChampions()
        .subscribe(champions => this.champions = champions);
  }
}
