import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { RegistryViewDataSource } from './registry-view-datasource';
import { RegistryService } from '../shared/registry.service';

@Component({
  selector: 'app-registry-view',
  templateUrl: './registry-view.component.html',
  styleUrls: ['./registry-view.component.css']
})
export class RegistryViewComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: RegistryViewDataSource;

  constructor(private registryService: RegistryService) { }

  displayedColumns = ['manufacturer', 'type', 'color', 'productionDate'];

  ngOnInit() {
    this.dataSource = new RegistryViewDataSource(this.paginator, this.sort);
    this.dataSource.data = this.registryService.registry;
    this.registryService.carAdded.subscribe(added => {
      if (added) {
        this.dataSource = new RegistryViewDataSource(this.paginator, this.sort);
        this.dataSource.data = this.registryService.registry;
      }
    })
  }

}
