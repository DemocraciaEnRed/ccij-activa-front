import { HttpService } from './http.service';
import { Injectable, ɵConsole } from '@angular/core';
import { Politician } from '../model/politician';

// https://stackoverflow.com/a/12646864
/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

@Injectable()
export class PoliticianService {

    constructor(public httpService: HttpService) {
    }

    public getAll(): Promise<Politician[]> {
       return this.httpService
            .get('api/v1/politicians')
            .then(response => {
                const primitiveObject = response as Array<Politician>;
                const politiciansList = new Array<Politician>();
                primitiveObject.forEach(po => {
                    const newDip = new Politician();
                    newDip.asignProps(po);
                    politiciansList.push(newDip);
                });
                return shuffleArray(politiciansList);
            });
    }

    public getAllByProject(id: string, cover: Boolean = false): Promise<Politician[]> {
        let endpoint = 'api/v1/politicians/' + id;
        if (cover) {
            endpoint += '/cover';
        }
        return this.httpService
            .get(endpoint)
            .then(response => {
                const primitiveObject = response as Array<Politician>;
                const politiciansList = new Array<Politician>();
                primitiveObject.forEach(po => {
                    const newDip = new Politician();
                    newDip.asignProps(po);
                    politiciansList.push(newDip);
                });
                return shuffleArray(politiciansList);
            });
    }

}
