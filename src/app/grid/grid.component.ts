import { Component, OnInit, ViewChild } from '@angular/core';
import { GridPagingMode, IgxGridComponent, CellType } from 'igniteui-angular';
import { Observable } from 'rxjs';
import { LOCAL_DATA } from '../services/data';
import { RemotePagingService } from '../services/remotePaging.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  providers: [RemotePagingService],
})
export class GridComponent implements OnInit {

  @ViewChild('grid', { static: true, read: IgxGridComponent })
  public grid!: IgxGridComponent;


  @ViewChild('grid2', { static: true, read: IgxGridComponent })
  public grid2!: IgxGridComponent;
  public page = 0;
  public totalCount = 0;
  public pages = [];
  public selectOptions = [5, 10, 15, 25, 50];
  public data: Observable<any[]> | undefined;
  public localData!: any[];
  public mode = GridPagingMode.Remote;
  private _perPage = 15;
  private _dataLengthSubscriber: { unsubscribe: () => void; } | undefined;

  constructor(private remoteService: RemotePagingService) {  }

  public ngOnInit(): void {
    this.data = this.remoteService.remoteData.asObservable();
    this.localData = LOCAL_DATA;

    this._dataLengthSubscriber = this.remoteService.getDataLength().subscribe((data: any) => {
        this.totalCount = data;
        this.grid.isLoading = false;
        this.grid2.isLoading = false;
      });
  }

  public get perPage(): number {
    return this._perPage;
  }

  public set perPage(val: number) {
      this._perPage = val;
      // Page should be reset on perPage select change
      this.paginate(0);
  }

  public set temp(val: CellType) {
    /** Deprecated, will be removed. data is the new property */
    const temp = val.row.rowData;
  }

  public ngOnDestroy() {
    if (this._dataLengthSubscriber) {
        this._dataLengthSubscriber.unsubscribe();
    }
  }

  public ngAfterViewInit() {
      this.grid.isLoading = true;
      this.grid2.isLoading = true;
      this.remoteService.getData(0, this.perPage);
  }

  public paginate(page: number) {
      this.page = page;
      const skip = this.page * this.perPage;
      const top = this.perPage;

      this.remoteService.getData(skip, top);
  }

  public perPageChange(perPage: number) {
      const skip = this.page * perPage;
      const top = perPage;

      this.remoteService.getData(skip, top);
  }
}
