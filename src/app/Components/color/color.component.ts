import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/Models/Entities/color';
import { ColorService } from 'src/app/Services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors : Color[] = [];
  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.colorService.getAll().subscribe(color => this.colors = color.data)
  }

}
