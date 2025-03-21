import { Component } from '@angular/core';
import { ScreenService } from '../../../shared/services/screen-size.service';
import { OwnershipData } from '../ownership-data/ownership-data.class';
import dayjs from 'dayjs';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ownership-table',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './ownership-table.component.html',
  styleUrl: './ownership-table.component.scss'
})
export class OwnershipTableComponent {
  constructor(
    private _screenService: ScreenService
  ){}

  public get isMobile(): boolean { return this._screenService.isMobile; }

  public get data(): OwnershipData { return new OwnershipData(); }

  public get lastUpdated(): string { 
    return dayjs((new OwnershipData()).lastUpdateYYYYMMDD).format('MMMM D, YYYY')
  }

  public get tso(): string { return (this.data.tso / 1000000).toFixed(1); }

  public get drsNumber(): number { return this.data.drsShares / 1000000; }
  public get dsppNumber(): number { return this.data.dsppShares / 1000000; }
  public get totalRegistered(): number { return this.drsNumber + this.dsppNumber; }

  public get rkNumber(): number { return this.data.keithGillShares / 1000000; }

  public get rcNumber(): number { return this.data.rcShares / 1000000; }
  public get otherInsiders(): number { return this.data.insidersOtherShares / 1000000; }
  public get insidersTotal(): number { return this.rcNumber + this.otherInsiders; }

  public get vanguard(): number { return this.data.vanguardShares / 1000000; }
  public get blackrock(): number { return this.data.blackrockShares / 1000000; }
  public get statestreet(): number { return this.data.stateStreetShares / 1000000; }
  public get otherInst(): number { return this.data.otherInstShares / 1000000; }
  public get instTotal(): number { return this.vanguard + this.blackrock + this.statestreet + this.otherInst; }

  public get remainderTotal(): number { return this.data.remainderTotal;  }
  public get beneficial(): number { return this.data.totalCede; }
  
  private _showSources: boolean = false;
  private _buttonLabel: string = 'Show data sources'
  public get showSources(): boolean { return this._showSources; }
  public get buttonLabel(): string { return this._buttonLabel; }



  public get recent10Q10Kurl(): string { return this.data.filingLink; }
  public get recent10Q10KDate(): string { return this.data.date; }
  public get recentFormType(): string { return this.data.formType; }


  public percent(section: number): string{
    return ((section / (this.data.tso/1000000)) * 100).toFixed(1);
  }

  public onClickShowDataSource(){
    this._showSources = !this._showSources;
    if(this._showSources === true){
      this._buttonLabel = 'Hide data sources';
    }else{
      this._buttonLabel = 'Show data sources';
    }
  }
}
