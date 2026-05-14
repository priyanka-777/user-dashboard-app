
import { Component, signal } from '@angular/core';
import { UserDashboard } from './components/user-dashboard/user-dashboard';

@Component({
  selector: 'app-root',
  imports: [UserDashboard],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  protected readonly title = signal('user-dashboard-app');
}
