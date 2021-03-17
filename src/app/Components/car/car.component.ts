import { Component, OnInit } from '@angular/core';
import { CarDetailDto } from 'src/app/Models/DTOs/carDetailDto';
import { Car } from 'src/app/Models/Entities/car';
import { CarService } from 'src/app/Services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars : Car[];
  carDetail : CarDetailDto[];
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getAll();
    this.getDetail(1)
  }
  getAll(){
    this.carService.getAll().subscribe(car => {this.cars = car.data})
  }
  getDetail(carId:number){
    this.carService.getCarDetail(carId).subscribe(response => {
      this.carDetail = response.data;
    })
  }


}
