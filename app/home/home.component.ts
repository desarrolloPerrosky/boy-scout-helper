import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-telerik-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-telerik-ui/sidedrawer/angular";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    bienvenida: string = "El código Morse es un código o sistema de comunicación que " +
        "permite la comunicación telegráfica a través de la transmisión de impulsos eléctricos" +
        " de longitudes diversas o por medios visuales, como luz, sonoros o mecánicos." +
        " Este código consta de una serie de puntos, rayas y espacios, que al ser combinados entre" +
        " si pueden formar palabras, números y otros símbolos.";
    creacion: string = "Este sistema de comunicación fue creado en el año 1830 por Samuel F.B. Morse," +
        " un inventor, pintor y físico proveniente de los Estados Unidos, quien pretendía encontrar un medio" +
        " de comunicación telegráfica. La creación de éste código tiene su origen en la creación del señor Morse" +
        " de un telégrafo, invento que le trajo bastante dificultades, ya que, en un principio, el registro de" +
        " este fabuloso invento le fue negado tanto en Europa como en los Estados Unidos. Finalmente, logró" +
        " conseguir el financiamiento del gobierno americano, el que le permitió construir una línea telegráfica" +
        " entre Baltimore y Washington. Un año después se realizaron las primeras transmisiones, resultando éstas" +
        " bastante exitosas, lo que dio pie a la formación de una enorme compañía que cubriría a todos los Estados" +
        " Unidos de líneas telegráficas";
    autor: string = "Samuel F.B. Morse vivió desde 1791 hasta 1872. Para este último año, el de su muerte, el" +
        " continente americano ya contaba con más de 300.000 kilómetros de líneas telegráficas que comunicaban" +
        " casi todos los rincones del país.";
    autor2: string = "Las letras, números y demás signos, se representan en el código" +
        " Morse a través de puntos y líneas que se transmiten como impulsos eléctricos que producen una señal de" +
        " luz o de sonido de una duración determinada. El punto es considerado, en el código Morse, como una unidad," +
        " que en tiempo equivale, aproximadamente a 1/25 seg. La línea, en tiempo, equivale a tres puntos. Cada letra" +
        " se separa por un silencio de tres puntos de duración, mientras que cada palabra se separa por cinco puntos.";
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;

    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
}
