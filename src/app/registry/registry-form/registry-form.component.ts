import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { RegistryService } from '../shared/registry.service';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-registry-form',
  templateUrl: './registry-form.component.html',
  styleUrls: ['./registry-form.component.css']
})
export class RegistryFormComponent implements OnInit {
  registryForm: FormGroup;
  manufacturer = new FormControl('', [Validators.required]);
  type = new FormControl('', [Validators.required]);
  color = new FormControl('');
  productionDate = new FormControl(null, [Validators.required]);

  constructor(private registryService: RegistryService) { }

  ngOnInit() {
    this.registryForm = new FormGroup({
      manufacturer: this.manufacturer,
      type: this.type,
      color: this.color,
      productionDate: this.productionDate
    });
  }

  onSubmit() {
    if (this.registryForm.valid) {
      const car = this.registryForm.value;
      this.registryService.addCarToRegistry(car);
    }
  }
  

}
