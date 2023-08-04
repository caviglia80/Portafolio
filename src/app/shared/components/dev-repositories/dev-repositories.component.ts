import { Component, OnInit } from '@angular/core';
import { GithubService } from '@services/github.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dev-repositories',
  templateUrl: './dev-repositories.component.html',
  styleUrls: ['./dev-repositories.component.css']
})
export class DevRepositoriesComponent implements OnInit {
  public repos$: Observable<any[]> = new Observable as Observable<any[]>;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.repos$ = this.githubService.getRepos();
  }

  public truncateDescription(description: string): string {
    if (description)
      return description.length > 76 ? description.substring(0, 76) + '..' : description;
    else
      return '';
  }
}
