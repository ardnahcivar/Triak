import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sidebar_list_items = ['HOME', 'CREATE', 'SHOW ALL', 'ABOUT'];
  selected_nav_item: string;

  onSelect(nav_item: string): void {
    this.selected_nav_item = nav_item;
  }

}
