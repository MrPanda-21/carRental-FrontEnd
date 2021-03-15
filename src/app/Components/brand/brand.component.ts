import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/Models/Entities/brand';
import { BrandService } from 'src/app/Services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands : Brand[] = [];
  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.brandService.getAll().subscribe(brand =>
      this.brands = brand.data)
  }

}
