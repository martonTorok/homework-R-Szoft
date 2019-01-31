import { Injectable } from '@angular/core';
import { Car } from 'src/app/models/car';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistryService {
  carAdded = new Subject();
  registry: Car[] = [{ manufacturer: 'Opel', type: 'Astra', color: 'Red', productionDate: new Date() },
  { manufacturer: 'Volvo', type: 'C30', color: 'Black', productionDate: new Date() }];

  constructor() { }

  addCarToRegistry(car: Car) {
    this.registry.push(car);
    this.carAdded.next(true);
  }


}
