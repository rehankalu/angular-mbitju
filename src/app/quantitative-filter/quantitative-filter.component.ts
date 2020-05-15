import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Input, Output } from "@angular/core";

@Component({
  selector: 'app-quantitative-filter',
  templateUrl: './quantitative-filter.component.html',
  styleUrls: ['./quantitative-filter.component.css']
})
export class QuantitativeFilterComponent {
  wingspanMin = new FormControl('');
  wingspanMax = new FormControl('50');
  wingareaMin = new FormControl('');
  wingareaMax = new FormControl('1000');

  @Input() field;

  @Output() wingspanMax;

}