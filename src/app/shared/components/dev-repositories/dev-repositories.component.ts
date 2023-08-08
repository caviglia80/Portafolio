import { Component } from '@angular/core';
import { GithubService } from '@services/github.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dev-repositories',
  templateUrl: './dev-repositories.component.html',
  styleUrls: ['./dev-repositories.component.css']
})
export class DevRepositoriesComponent {
  public repos$: Observable<any[]> = this.githubService.getRepos();

  constructor(private githubService: GithubService) { }

  public truncateDescription(description: string): string {
    try {
      if (description)
      return description.length > 76 ? description.substring(0, 76) + '..' : description;
    else
      return '';
    } catch (error) {
      console.log(error);
      return '';
    }
  }
}
