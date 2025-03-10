import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-keith-gill',
  standalone: true,
  imports: [RouterModule, CommonModule, FooterComponent],
  templateUrl: './keith-gill.component.html',
  styleUrl: './keith-gill.component.scss'
})
export class KeithGillComponent {

}
