import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-ftd',
  standalone: true,
  imports: [RouterModule,FooterComponent],
  templateUrl: './ftd.component.html',
  styleUrl: './ftd.component.scss'
})
export class FtdComponent {

}
