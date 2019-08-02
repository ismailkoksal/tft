import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChampionService } from '../../../services/champion/champion.service';
import { ItemService } from '../../../services/item/item.service';

@Component({
  selector: 'app-single-champion',
  templateUrl: './single-champion.page.html',
  styleUrls: ['./single-champion.page.scss'],
})
export class SingleChampionPage implements OnInit {
  key: string;
  champions: any;
  items: any;
  tierRing = [
      'linear-gradient(45deg, #2B4259 0%, #485767 100%)',
      'linear-gradient(45deg, #275E4E 0%, #099853 100%)',
      'linear-gradient(45deg, #3A4894 0%, #3FA4CD 100%)',
      'linear-gradient(45deg, #7A1C7E 0%, #E50DC2 100%)',
      'linear-gradient(45deg, #8B4D09 0%, #DAAA29 65%)'
  ];

  constructor(private championService: ChampionService,
              private itemService: ItemService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.key = this.route.snapshot.paramMap.get('key');
    this.getChampions();
    this.getItems();
  }

  getChampions() {
    this.championService.getChampions()
        .subscribe(champions => this.champions = champions);
  }

  getChampionsByClass(classParam) {
    const champions = [];
    for (const champion of Object.keys(this.champions)) {
      for (const champClass of this.champions[champion].class) {
        if (champClass === classParam) {
          champions.push(champion);
        }
      }
    }
    return champions;
  }

  getChampionsByOrigin(originParam) {
    const champions = [];
    for (const champion of Object.keys(this.champions)) {
      for (const champOrigin of this.champions[champion].origin) {
        if (champOrigin === originParam) {
          champions.push(champion);
        }
      }
    }
    return champions;
  }

  getItems() {
    this.itemService.getItems()
        .subscribe(items => this.items = items);
  }
}
