import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bb-smartish-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  previews = [
    {
      title: 'Orders',
      subtitle: 'Today',
    },
    {
      title: 'Customers',
      subtitle: 'Today',
    },
    {
      title: 'Products',
      subtitle: 'Today',
    },
  ];
}
