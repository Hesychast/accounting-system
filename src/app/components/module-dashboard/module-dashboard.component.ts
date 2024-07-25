import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { AvailableModulesService } from '../../services/available-modules.service';
import { Module } from '../../interfaces/module';
import { Submodule } from '../../interfaces/submodule';

@Component({
  selector: 'app-module-dashboard',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './module-dashboard.component.html',
  styleUrl: './module-dashboard.component.scss'
})
export class ModuleDashboardComponent implements OnInit {
  module: Module = { id: 0, title: '', icon: '' }
  submodules: Submodule[] = []

  constructor(private router: Router, private route: ActivatedRoute, private availableModulesService: AvailableModulesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loadModule(parseInt(params['id']))
    })
  }

  loadModule(id: number): void {
    this.module = this.availableModulesService.getModule(id);
    this.submodules = this.availableModulesService.getSubmodule(id);
  }
  goToSubmodule(url: string): void {
    this.router.navigate([url]);
  }

  // notAvailable(): void {
  //   this.router.navigate(['not-available']);
  // }
}
