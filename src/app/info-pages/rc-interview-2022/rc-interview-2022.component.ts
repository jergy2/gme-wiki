import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { FooterComponent } from '../../layout/footer/footer.component';
import { RcInterviewTranscriptComponent } from './rc-interview-transcript/rc-interview-transcript.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rc-interview-2022',
  standalone: true,
  imports: [FooterComponent, RcInterviewTranscriptComponent, RouterLink],
  templateUrl: './rc-interview-2022.component.html',
  styleUrl: './rc-interview-2022.component.scss'
})
export class RcInterview2022Component {
  constructor(private titleService: Title, private meta: Meta){
    const title = 'Ryan Cohen Interview with Joe Fonicello of GMEdd.com | gmewiki.org';
    const description = 'Ryan Cohen Interview with Joe Fonicello of GMEdd.com' ;
    this.titleService.setTitle(title);
    
    const metaTags = this.meta.getTags('name');
    metaTags.forEach(tag => this.meta.removeTagElement(tag));
    this.meta.addTags([
      { name: 'description', content: description},
      { name: 'keywords', content: 'GameStop, GME, Ryan Cohen, Ryan Cohen 2022 interview, interview, Joe Fonicello, GMEdd.com' },
      { name: 'author', content: 'GME shareholder' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { charset: 'UTF-8' }
    ]);
    this.meta.addTags([
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: 'https://gmewiki.org/rc-interview' },
      { property: 'og:type', content: 'website' },
    ]);
  }
  
}
