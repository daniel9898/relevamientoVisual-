import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {

  pictureList : Array<any>;

  constructor(public navCtrl: NavController, 
  	          public navParams: NavParams,
  	          private storage: Storage,
              public events: Events) {

    //this.subscribeList();
    this.storage.get('imgs').then(list => this.pictureList = list)
                            .catch(error => console.log(error));
    
  }

  subscribeList(){
    console.log(this.events);
    this.events.subscribe('imgsEvent', (imgs) => {
       console.log("imgs con evento ",imgs);
       this.pictureList = imgs
    });

  }


}
