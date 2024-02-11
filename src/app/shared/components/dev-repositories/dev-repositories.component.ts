import { Component, OnInit } from '@angular/core';
import { GithubService } from '@services/github/github.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dev-repositories',
  templateUrl: './dev-repositories.component.html',
  styleUrls: ['./dev-repositories.component.css']
})
export class DevRepositoriesComponent implements OnInit {
  // public repos$: Observable<any[]> = this.githubService.getRepos();
  public repos$: Observable<any[]> | null = null
  public repos: any[] | null = null
  public repoCount: number = 0;
  public showAllRepos: boolean = false;

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.repos$ = this.githubService.getRepos();
    if (this.repos$)
      this.repos$.subscribe(repos => {
        if (repos && repos.length !== 0) {
          this.repoCount = repos.length - 6;
          this.repos = repos
            .filter(item => item.name !== "caviglia80.github.io");
        }
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
      if (!this.showAllRepos) return;
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } catch (error) {
      console.log(error);
    }
  }
}
