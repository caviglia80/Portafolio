import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentageSort'
})
export class PercentageSortPipe implements PipeTransform {
  transform(items: any[]): any[] {
    if (!Array.isArray(items) || items.length === 0) {
      return items;
    }

    return items.sort((a, b) => b.percentage - a.percentage);
  }
}
