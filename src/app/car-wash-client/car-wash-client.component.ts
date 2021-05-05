import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-car-wash-client',
  templateUrl: './car-wash-client.component.html',
  styleUrls: ['./car-wash-client.component.css']
})
export class CarWashClientComponent implements OnInit {

  name: string;
  surname: string;
  email: string;
  address: Address;
  services: string[];
  editMode = false;

  constructor() {
  }

  ngOnInit(): void {
    this.name = 'Jan';
    this.surname = 'Kowalski';
    this.address = {
      street: 'Konstrantynów',
      houseNo: '1H',
      flatNo: '',
      postalCode: '20-708 ',
      city: 'Lublin'
    };
    this.email = 'jankowalski@wp.pl';
    this.services = ['Woskowanie', 'Korekta lakieru', 'Odkurzanie'];
  }

  addService(service): void {
    this.services.push(service);
  }

  deleteService(service): void {
    for (let i = 0; i < this.services.length; i++) {
      if (this.services[i] === service) {
        this.services.splice(i, 1);
      }
    }
  }

  changeEditMode(): void {
    this.editMode = !this.editMode;
  }

}

interface Address {
  street: string;
  houseNo: string;
  flatNo: string;
  postalCode: string;
  city: string;
}
