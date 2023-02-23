import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PaginationInfo} from "../../../content/interfaces/pagination-info.interface";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styles: [`
    .page-item {
      cursor: pointer;
    }
  `]
})
export class PaginationComponent {
  public info!: PaginationInfo;
  public currentPage: number = 1;

  @Input()
  public set pageInfo(value: PaginationInfo) {
    this.info = value;
  }

  @Output() public pageChanged: EventEmitter<string | null> = new EventEmitter<string | null>();

  constructor() {
  }

  public onClick(page: string | null): void {
    this.currentPage = page ? parseInt(page) : 1;
    this.pageChanged.emit(page);
  }

  public getPreviousPage(): string | null {
    const page = this.info.prev?.split('?page=')[1];
    return page ? page : null;
  }

  public getNextPage(): string | null {
    const page = this.info.next?.split('?page=')[1];
    return page ? page : null;
  }

  get previousPages(): number {
    return this.currentPage - 1;
  }

  get nextPages(): number {
    return this.info.pages - this.currentPage;
  }
}
