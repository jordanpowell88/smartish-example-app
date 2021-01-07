import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bb-smartish-dashboard-preview',
  templateUrl: './dashboard-preview.component.html',
  styleUrls: ['./dashboard-preview.component.scss'],
})
export class DashboardPreviewComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() total = 0;
}
