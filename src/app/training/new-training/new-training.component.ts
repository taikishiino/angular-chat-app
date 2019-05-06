import { Component, OnInit } from '@angular/core';
//import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})

/* interface Exercise {
  name: string;
  duration: number;
  calories: number;
} */
export class NewTrainingComponent implements OnInit {
  exercises: Observable<any[]>;

  constructor(
    private db: AngularFirestore
  ) { }

  ngOnInit() {
    this.exercises = this.db
    .collection('avalableExercise')
    .valueChanges();
  }
}
