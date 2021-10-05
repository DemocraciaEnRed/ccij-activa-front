import { Injectable } from '@angular/core';
import { AxiosService } from './axios.service';
import {Campaign} from '../model/campaign'
@Injectable()
export class CampaignsService {
  
  constructor(private axios: AxiosService) { }

  public getAll(): Promise<Campaign[]>{
    const QUERY =`
    {
      campaigns{
        id
        name
        image_cover{
          id
          title
        }
        translations{
          title
          description
          short_description
        }
        actions{
          id
        }
      }
    }`;

    return this.axios.post(QUERY)
        .then(response => {
          const primitiveObject = response as Array<Campaign>;
          const projectList = new Array<Campaign>();

          for (let project in primitiveObject['data']['campaigns']){
           
            const newProject = new Campaign();
            newProject.asignProps(primitiveObject['data']['campaigns'][project]);
            projectList.push(newProject);
          }
          return projectList;     
        });
  }

  public getById(id:number): Promise<Campaign>{
    // falta filtrarp or id la query
    const QUERY = `
    {
  
      campaigns_by_id(id:${id}){	
        image_cover {
          id
        }
        translations (filter: {languages_code: {id: { _eq: "es"}}}) {
          title
          short_description
          description
          
        }
        actions{
          actions_id {
            icon {
              id
            }
            name
          }
          translations (filter: {languages_code: {id: { _eq: "es"}}}) {
            languages_code {
              id
            }
            description
            call_to_action_url
            call_to_action_label
          }
        }
      }
    }
    `
    return this.axios.post(QUERY)
    .then(response => {
     
      console.log(response)
     return response['data']['campaigns_by_id'];     
    });
  }
 
}
