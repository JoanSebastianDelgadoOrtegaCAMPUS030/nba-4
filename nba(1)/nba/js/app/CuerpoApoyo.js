import { Nba } from './Nba.js';
export class CuerpoApoyo extends Nba{
    static idCApoyo = 0;
    constructor(nombre,fecha,email,ciudad,year,especialidad,cargo,idEquipo,tipoApoyo){
        super(nombre,fecha,email,ciudad,year);
        this._idCApoyo = ++CuerpoApoyo.idCApoyo;
        this._especialidad = especialidad;
        this._cargo = cargo;
        this._idEquipo = idEquipo;
        this._tipoApoyo = tipoApoyo;
    }
    get idCApoyo(){
        return this._idCApoyo;
    }
    get especialidad(){
        return this._especialidad;
    }
    set especialidad(v_especialidad){
        this._especialidad = v_especialidad;
    }    
    get cargo(){
        return this._cargo;
    }
    set cargo(v_cargo){
        this._cargo = v_cargo;
    }    
    get idEquipo(){
        return this._idEquipo;
    }
    set idEquipo(v_idEquipo){
        this._idEquipo = v_idEquipo;
    }    
    get tipoApoyo(){
        return this._tipoApoyo;
    }
    set tipoApoyo(v_tipoApoyo){
        this._tipoApoyo = v_tipoApoyo;
    }    
}