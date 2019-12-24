import{Component} from '@angular/core';
import { componentFactoryName } from '@angular/compiler';

@Component({
    selector:'app-body',
    templateUrl:'./body.component.html'

})
export class BodyComponent{

    mostrar=true;

    frase:any={
        mensaje: "Un gran poder requiere una gran responsabilidad",
        autor: "Ben Parker"
    };

    personajes :string [] = ["Spiderman", "Venom", "Punisher", "Iron Man","Capitan America", "Wolverine"];
    
}