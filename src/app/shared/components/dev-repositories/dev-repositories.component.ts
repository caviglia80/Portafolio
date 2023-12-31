import { Component } from '@angular/core';
import { GithubService } from '@services/github/github.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dev-repositories',
  templateUrl: './dev-repositories.component.html',
  styleUrls: ['./dev-repositories.component.css']
})
export class DevRepositoriesComponent {
  public repos$: Observable<any[]> = this.githubService.getRepos();
  public repoCount: number = 0;
  public showAllRepos: boolean = false;

  constructor(private githubService: GithubService) {
    this.repos$.subscribe(repos => {
      this.repoCount = repos.length - 6;
    });
  }

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

  public truncateTitle(title: string): string {
    try {
      if (title)
        return title.length > 20 ? title.substring(0, 20) + '..' : title;
      else
        return '';
    } catch (error) {
      console.log(error);
      return '';
    }
  }

  public scrollTo(id: string): void {
    try {
      if(!this.showAllRepos) return;
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } catch (error) {
      console.log(error);
    }
  }
}
