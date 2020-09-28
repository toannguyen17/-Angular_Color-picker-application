import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-select-color',
  templateUrl: './select-color.component.html',
  styleUrls: [
    './select-color.component.scss'
  ]
})
export class SelectColorComponent implements OnInit {

  public disabled = false;
  public color: ThemePalette = 'primary';
  public touchUi = false;

  colorCtr: AbstractControl = new FormControl(null);

  public options = [
    { value: true, label: 'True' },
    { value: false, label: 'False' }
  ];

  public listColors = ['primary', 'accent', 'warn'];

  constructor() { }

  ngOnInit(): void {
  }

}
