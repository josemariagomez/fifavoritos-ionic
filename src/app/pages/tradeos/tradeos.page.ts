import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tradeo } from 'src/app/models/tradeo';
import { ApiService } from 'src/app/services/api.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tradeos',
  templateUrl: './tradeos.page.html',
  styleUrls: ['./tradeos.page.scss'],
})
export class TradeosPage implements OnInit {
  tradeos: Array<Tradeo> = [];

  constructor(
    public router: Router,
    public api: ApiService,
    public storage: Storage
  ) { }

  async ngOnInit() {
  }

  ionViewWillEnter() {
    this.setTradeos()
  }

  async setTradeos() {
    let token = await this.storage.get('token');
    let response = await this.api.tradeos(token)
    console.log(response)

    this.tradeos = JSON.parse(JSON.stringify(response));
  }

  logout() {
    this.storage.clear()
    this.router.navigate(['home']);
  }

  goPlayers(tradeo: Tradeo) {
    let url = '/players/' + tradeo.id;
    this.router.navigate([url]);
  }
}
