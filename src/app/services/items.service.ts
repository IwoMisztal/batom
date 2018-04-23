import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Item } from '../models/Item';

@Injectable()
export class ItemsService {
 
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(public afs: AngularFirestore) { 

    this.itemsCollection = this.afs.collection('phones', ref => ref.orderBy('title', 'asc'));

    this.items = this.afs.collection('phones').snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
        });
      });
    }

   getItems() {
      return this.items;
   }

   addItem(item: Item) {
    this.itemsCollection.add(item);
  }

}
