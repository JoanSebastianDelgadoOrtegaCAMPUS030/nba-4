import { Conferencia } from '../app/bd/conferencias.js';
import { Equipo } from '../app/Equipo.js';

let equipos = [];
class FrmEquipos extends HTMLElement{
    constructor(){
        super();
        this.render();
        this.fillConferenceSelect();
        this.eventoChangeConf();
        this.saveData();
    }
    render(){
        this.innerHTML  = /* html */ `
        <div class="card">
            <div class="card-header">
            Equipos <span class="badge bg-secondary" id="codEquipo"></span>
            </div>
            <div class="card-body">
            <form id = "frmData">
                <div class="row g-3">
                <div class="col-7">
                    <label for="nombre" class="form-label">Nombre Equipo</label>
                    <input type="text" class="form-control" id="nombre">
                </div>
                <div class="col-5">
                    <label for="fecha" class="form-label">Fecha fundación</label>
                    <input type="date" class="form-control" id="fecha">                  
                </div>
                </div>
                <div class="row g-3">
                <div class="col-4">
                    <label for="presidente" class="form-label">Presidente</label>
                    <input type="text" class="form-control" id="presidente">
                </div>
                <div class="col-4">
                    <label for="mascota" class="form-label">Mascota</label>
                    <input type="file" class="form-control" id="mascota" placeholder="Escriba el nombre de la imagen">                  
                </div>
                </div>
                <div class="row g-3">
                    <div class="col-4">
                        <label for="conferencia" class="form-label">Conferencia</label>
                        <select class="form-select" id="conferencia">
                        <option selected>Seleccione una conferencia</option>
                        </select>
                    </div>
                    <div class="col-4">
                        <label for="division" class="form-label">Division</label>
                        <select class="form-select" id="division">
                        
                        </select>
                    </div>
                    <div class="col-4">
                        <label for="logo" class="form-label">Logo</label>
                        <input type="file" class="form-control" id="logo" placeholder="Escriba el nombre de la imagen">                  
                    </div>
                </div>
                <div class="row g-3">
                    <div class="col-6">
                        <label for="ciudad" class="form-label">Ciudad</label>
                        <input type="text" class="form-control" id="ciudad"> 
                    </div>
                    <div class="col-4">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email"> 
                    </div>
                    <div class="col-2">
                        <label for="totalTitulo" class="form-label">Total Titulos</label>
                        <input type="number" class="form-control" id="totalTitulo"> 
                    </div>
                </div>
            </form>              
            <a href="#" class="btn btn-primary" id="guardarData">Guardar datos</a>
            </div>
        </div> 
        `
    }
    eventoChangeConf = () =>{
        document.querySelector('#conferencia').addEventListener('change',(e) => {
            this.clearSelect('#division');
            const selectChild = document.querySelector('#division');
            let confSelect = Conferencia.filter(confItem => confItem.id == e.target.value );
            confSelect.forEach(element =>{
                let dataItem =JSON.parse(JSON.stringify(element));
                dataItem.divisiones.forEach(divData =>{
                    const itemDiv = document.createElement('option');
                    itemDiv.value = divData.idDiv;
                    itemDiv.innerHTML = divData.nombre;
                    selectChild.appendChild(itemDiv);
                });
            })
            e.stopImmediatePropagation();
            e.preventDefault();
        });
    }
    clearSelect(v_Select){
        const selectData = document.querySelector(v_Select) ;
        const options = selectData.querySelectorAll('option');
        options.forEach(element =>{
            selectData.removeChild(element);
        })
    }
    fillConferenceSelect(){
        this.clearSelect('#conferencia');
        const selectData = document.querySelector('#conferencia') ;
        const itemStart = document.createElement('option');
        itemStart.innerHTML = 'Seleccione un item';
        itemStart.selected;
        selectData.appendChild(itemStart);
    
        Conferencia.forEach(data =>{
            let dataItem =JSON.parse(JSON.stringify(data));
            const item = document.createElement('option');
            item.value = dataItem.id;
            item.innerHTML = dataItem.conferencia;
            selectData.appendChild(item);
        })
    }
    saveData = () =>{
        document.querySelector('#guardarData').addEventListener('click',(e) => {
            const idEqui = document.querySelector('#codEquipo');
            let frmEquipos=document.forms['frmData'];
            const nombre = frmEquipos['nombre'];
            const fecha = frmEquipos['fecha'];
            const presidente = frmEquipos['presidente'];
            const logo = frmEquipos['logo'];
            const Mascota = frmEquipos['mascota'];
            const conferencia = frmEquipos['conferencia'];
            const division = frmEquipos['division'];
            const ciudad = frmEquipos['ciudad'];
            const email = frmEquipos ['email'];
            const totalTitulo = frmEquipos ['totalTitulo'];
            let equipo = new Equipo(nombre.value,fecha.value,email.value,ciudad.value,fecha.value,presidente.value,logo.files[0].name,totalTitulo.value,conferencia.value,Mascota.files[0].name,division.value);
            equipos.push (equipo);
            idEqui.innerHTML=equipo._idEqui; 
        });
    }
}
customElements.define('frm-equipos',FrmEquipos);