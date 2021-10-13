export class Campaign {
    id: number;
    name: string;
    translations : {};
    videos: Array<Object>;
    text: string;
    actions: {};
  

    public static asignProps(c1: Campaign, c2: Campaign) {
        for (let c in c2){
            c1[c] = c2[c];
        }
       }

    public asignProps(c: Campaign) {
        Campaign.asignProps(this, c);
    }


}
