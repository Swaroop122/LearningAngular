import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list:any[],text:string): any{
    if(!text)
    {
      return list;
    }
    if(!list || list.length==0)
    {
    return null;
    }

    return list.filter(e=>{
      return e.Id.toString().includes(text)||
      e.Name.toLowerCase().includes(text.toLowerCase())||
      e.Location.toLowerCase().includes(text.toLowerCase())||
      e.Salary.toString().includes(text)
    });
  }

}
