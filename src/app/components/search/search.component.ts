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
  isReturn: boolean = false;
  bsConfigGlobal = {
    dateInputFormat: "DD/MM/YYYY",
    showWeekNumbers: false,
    containerClass: "theme-default"
  };
  minDate: Date;
  date = new Date();

  filteredList = [];
  finalFilteredList = [];
  flightList = [
    {
      source: "delhi",
      srcCode: "DL",
      destination: "mumbai",
      destCode: "MUM",
      departDate: 1598028994000,
      arivalDate: 1598115394000,
      available: 100,
      amount: 1500,
    },
    {
      source: "delhi",
      srcCode: "DL",
      destination: "mumbai",
      destCode: "MUM",
      departDate: 1598028994000,
      arivalDate: 1598115394000,
      available: 100,
      amount: 1500,
    },
    {
      source: "delhi",
      srcCode: "DL",
      destination: "mumbai",
      destCode: "MUM",
      departDate: 1598028994000,
      arivalDate: 1598115394000,
      available: 100,
      amount: 15000,
    },
    {
      source: "delhi",
      srcCode: "DL",
      destination: "mumbai",
      destCode: "MUM",
      departDate: 1598028994000,
      arivalDate: 1598115394000,
      available: 100,
      amount: 35000,
    },
    {
      source: "delhi",
      srcCode: "DL",
      destination: "mumbai",
      destCode: "MUM",
      departDate: 1598028994000,
      arivalDate: 1598115394000,
      available: 100,
      amount: 45000,
    },
    {
      source: "delhi",
      srcCode: "DL",
      destination: "mumbai",
      destCode: "MUM",
      departDate: 1598028994000,
      arivalDate: 1598115394000,
      available: 100,
      amount: 1500,
    },
    {
      source: "delhi",
      srcCode: "DL",
      destination: "mumbai",
      destCode: "MUM",
      departDate: 1597769794000,
      arivalDate: 1597856194000,
      available: 200,
      amount: 13000,
    },
    {
      source: "mumbai",
      srcCode: "MUM",
      destination: "delhi",
      destCode: "DL",
      departDate: 1597078594000,
      arivalDate: 1597164994000,
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
      arivalDate: new FormControl(''),
      available: new FormControl('')

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

      if (this.flightForm.value.departDate) {
        let departDate = new Date(this.flightForm.value.departDate);
        let filterDepartDate = new Date(this.flightList[i].departDate);
        if ((departDate.getDate() == filterDepartDate.getDate()) && (departDate.getMonth() == filterDepartDate.getMonth()) && (departDate.getFullYear() == filterDepartDate.getFullYear())) {
        } else {
          console.log("Dates", departDate.getDate(), "Second", filterDepartDate.getDate(), departDate.getMonth(), filterDepartDate.getMonth(), departDate.getFullYear(), filterDepartDate.getFullYear());

          continue
        }
      }

      if (this.flightForm.value.arivalDate && this.isReturn) {
        let arivalDate = new Date(this.flightForm.value.arivalDate);
        let filterarivalDate = new Date(this.flightList[i].arivalDate);


        if ((arivalDate.getDate() == filterarivalDate.getDate()) && (arivalDate.getMonth() == filterarivalDate.getMonth()) && (arivalDate.getFullYear() == filterarivalDate.getFullYear())) {
        } else {
          continue
        }
      }

      if (this.flightForm.value.available) {
        if (this.flightForm.value.available < this.flightList[i].available) {
        } else {
          continue
        }
      }

      this.filteredList.push(this.flightList[i])
      this.finalFilteredList = this.filteredList;

    }



  }
  onFlightSelect(value) {
    if (value == 'return') {
      this.isReturn = true;
    } else {
      this.isReturn = false;
    }
  }

  rangePriceFlight(event) {
    this.finalFilteredList = this.filteredList;
    this.finalFilteredList = this.finalFilteredList.filter((ticket) => {
      return ticket.amount >= event.newValue
    })
  }
}
