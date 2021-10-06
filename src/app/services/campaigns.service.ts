import { Injectable } from '@angular/core';
import { AxiosService } from './axios.service';
import {Campaign} from '../model/campaign'
import { TranslateService } from '@ngx-translate/core';

@Injectable()

export class CampaignsService {
  
  constructor(private axios: AxiosService,
    private translate: TranslateService) { }

  private currentLang(){
    return this.translate.currentLang
  }

  public getAll(): Promise<Campaign[]>{
    let lang = this.currentLang();
    const QUERY =`
    {
      campaigns{
        id
        name
        image_cover{
          id
          title
        }
        translations (filter: {languages_code: {id: { _eq: "${lang}"}}}) {
          title
          short_description
          description
          
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
    let lang = this.currentLang();

    const QUERY = `
    {
  
      campaigns_by_id(id:${id}){	
        image_cover {
          id
        }
        translations (filter: {languages_code: {id: { _eq: "${lang}"}}}) {
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
          translations (filter: {languages_code: {id: { _eq: "${lang}"}}}) {
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
     
     return response['data']['campaigns_by_id'];     
    });
  }
 
}
