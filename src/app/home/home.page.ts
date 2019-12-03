import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email: string;
  password: string;
  token: string;
  user: any;

  constructor(
    public api: ApiService,
    public storage: Storage,
    public router: Router,
    public toastController: ToastController
  ) {}

  async ngOnInit() {
    let token = await this.storage.get('token');
    if (token != null) {
      this.router.navigate(['/tradeos'])
    }
  }

  async login(){
    this.api.login(this.email, this.password)
    .then((response) => {
      this.storage.set('user', JSON.parse(JSON.stringify(response)).user);
      this.storage.set('token', JSON.parse(JSON.stringify(response)).access_token);
      this.router.navigate(['/tradeos'])
    })
    .catch(async (error) => {
      await this.presentToast('Error al iniciar sesión');
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  goRegister() {
    this.router.navigate(['/register'])
  }

}
