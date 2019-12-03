import { Component, OnInit } from '@angular/core';
import { Tradeo } from 'src/app/models/tradeo';
import { ApiService } from 'src/app/services/api.service';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TradeosPage } from '../tradeos/tradeos.page';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {

  players = [];
  clicked: number = 0;
  tradeo: string;

  constructor(
    public api: ApiService,
    public route: ActivatedRoute,
    public storage: Storage,
    public router: Router,
    public modalController: ModalController
  ) { }

  async ngOnInit() {
    this.setPlayers()
  }

  async setPlayers() {
    let tradeo_id = await this.route.snapshot.paramMap.get('tradeo_id')
    let token = await this.storage.get('token');
    let response = await this.api.getPlayers(tradeo_id, token)
    this.players = JSON.parse(JSON.stringify(response));
    this.tradeo = this.players[0].tradeo.name
  }

  click(id) {
    if (id == this.clicked) {
      this.clicked = 0;
    } else {
      this.clicked = id;
    }
  }

}
