export class Action {
    id: number;
    name: string;
    icon: {};

    translations : {};
  

    public static asignProps(a1: Action, a2: Action) {
        for (let a in a2){
            a[a] = a2[a];
        }
       }

    public asignProps(a: Action) {
        Action.asignProps(this, a);
    }


}