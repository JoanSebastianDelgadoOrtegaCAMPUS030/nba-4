export class Nba{
    constructor(nombre,fecha,email,ciudad,year){
        this._nombre = nombre;
        this._fecha = fecha;
        this._email = email;
        this._ciudad = ciudad;
        this._year = year;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(v_nombre){
        this._nombre = v_nombre;
    }
    get fecha(){
        return this._fecha;
    }
    set fecha(v_fecha){
        this._fecha = v_fecha;
    }
    get ciudad(){
        return this._ciudad;
    }
    set ciudad(v_ciudad){
        this._ciudad = v_ciudad;
    }
    get year(){
        return this._year;
    }
    set year(v_year){
        this._year = v_year;
    }
}