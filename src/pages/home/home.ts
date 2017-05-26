import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from "../../providers/firebase/firebase";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  babyItems: FirebaseListObservable<any[]>;
  shoppingItems: FirebaseListObservable<any[]>;
  newItem = '';

  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
    this.shoppingItems = this.firebaseProvider.getShoppingItems();
    this.babyItems = this.firebaseProvider.getBabies();
  }

  addItem() {
    this.firebaseProvider.addItem(this.newItem);
    this.newItem = '';
  }

  removeItem(id) {
    this.firebaseProvider.removeItem(id);
  }


  updateItem(item) {
    this.firebaseProvider.updateItem(item.$key);
  }

}
