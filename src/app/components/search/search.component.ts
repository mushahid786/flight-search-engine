import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchTerm: string = '';
  value;
  enabled: boolean = true;
  date = new Date();

  bsConfigGlobal = {
    dateInputFormat: "DD/MM/YYYY",
    showWeekNumbers: false,
    containerClass: "theme-default"
  };
  minDate: Date;
  filteredList = [];
  flightList = [
    {
      source: "delhi",
      srcCode: "DL",
      destination: "mumbai",
      destCode: "MUM",
      departDate: 1598028994,
      arivalDate: 1598115394,
      available: 100,
      amount: 1500,
    },
    {
      source: "delhi",
      srcCode: "DL",
      destination: "mumbai",
      destCode: "MUM",
      departDate: 1598028994,
      arivalDate: 1598115394,
      available: 100,
      amount: 1500,
    },
    {
      source: "delhi",
      srcCode: "DL",
      destination: "mumbai",
      destCode: "MUM",
      departDate: 1598028994,
      arivalDate: 1598115394,
      available: 100,
      amount: 1500,
    },
    {
      source: "delhi",
      srcCode: "DL",
      destination: "mumbai",
      destCode: "MUM",
      departDate: 1597769794,
      arivalDate: 1597856194,
      available: 200,
      amount: 13000,
    },
    {
      source: "mumbai",
      srcCode: "MUM",
      destination: "delhi",
      destCode: "DL",
      departDate: 1597078594,
      arivalDate: 1597164994,
      available: 800,
      amount: 2300,
    }
  ]
  flightForm: FormGroup;
  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {

    this.flightForm = this.fb.group({
      source: new FormControl(''),
      destination: new FormControl(''),
      departDate: new FormControl(''),
      arivalDate: new FormControl('')

    })
  }

  onSearch() {
    this.filteredList = [];
    for (let i = 0; i < this.flightList.length; i++) {



      if (this.flightForm.value.source) {
        let isValid = this.flightList[i].source.match(new RegExp('^.*' + this.flightForm.value.source, 'i'));
        if (!isValid) {
          continue
        }

      }
      if (this.flightForm.value.destination) {
        let isValid = this.flightList[i].destination.match(new RegExp('^.*' + this.flightForm.value.destination, 'i'));
        if (!isValid) {
          continue
        }

      }

      this.filteredList.push(this.flightList[i])
      // if(this.flightForm.value.departDate == this.flightList[i].departDate){
      //   // let isValid =  this.flightList[i].departDate.match(new RegExp('^.*' + this.flightForm.value.departDate, 'i'));
      //   if(!isValid){
      //     continue
      //   }

      // }

      // this.flightList.

    }


    console.log("Tested", this.searchTerm);

  }
  onWayFlight() {

  }
  returnFlight() {

  }
  change() {
    console.log("Event");

  }
}
