import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styles: [
  ]
})
export class PaginationComponent {

  @Input() public totalPages: number = 0;
  @Input() public currentPage: number = 0;
  @Input() public pages: number[] = [];
  @Output() public pageChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  public changePage(page: number): void {
    this.pageChanged.emit(page);
  }



}
