import { Component, OnInit, ViewChild, ElementRef,  inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { UserForm } from '../user-form/user-form';


import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule, UserForm],
  templateUrl: './user-dashboard.html',
  styleUrl: './user-dashboard.sass',
})
export class UserDashboard implements OnInit {

  users: User[] = [];

  showModal = false;

  @ViewChild('pieChart')
  pieChart!: ElementRef;
  chart: any;

  platformId = inject(PLATFORM_ID);

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  this.userService.users$.subscribe((users) => {

    this.users = users;

    if (isPlatformBrowser(this.platformId)) {

      setTimeout(() => {
        this.loadChart();
      });

    }

  });

}

  async loadChart() {

  const ChartModule = await import('chart.js/auto');

  const Chart = ChartModule.default;

  const adminCount = this.users.filter(
    user => user.role === 'Admin'
  ).length;

  const editorCount = this.users.filter(
    user => user.role === 'Editor'
  ).length;

  const viewerCount = this.users.filter(
    user => user.role === 'Viewer'
  ).length;

  if (this.chart) {
    this.chart.destroy();
  }

  this.chart = new Chart(
    this.pieChart.nativeElement,
    {
      type: 'pie',

      data: {
        labels: [
          'Admin',
          'Editor',
          'Viewer'
        ],

        datasets: [
          {
            data: [
              adminCount,
              editorCount,
              viewerCount
            ],

            backgroundColor: [
              '#1c4980',
              '#383838',
              '#6c757d'
            ]
          }
        ]
      }
    }
  );

}

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
  onUserAdded(user: User) {

    this.userService.addUser(user);

    this.closeModal();

  }

}