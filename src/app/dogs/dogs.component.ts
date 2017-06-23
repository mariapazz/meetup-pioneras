import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DogService } from '../dog.service';


@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  selectedDog: Dog; //esta variable tipo Dog almacenará el dog que el usuario seleccione
  dogs: Dog[]; //esta variable tipo array Dog almacenará los datos resultantes de la promesa de servicio DogService

  constructor(private dogService: DogService) {
  }

  getDogs(): void {
    this.dogService.getDogs().then(dogs => this.dogs = dogs);
  }

  ngOnInit(): void {
    this.getDogs();
  }

  onSelect(dog: Dog): void {
    this.selectedDog = dog;
  }

}
