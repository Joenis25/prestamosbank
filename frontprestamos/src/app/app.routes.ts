import { Routes } from '@angular/router';
import { MostrarSucursalComponent } from './components/sucursal/mostrar-sucursal/mostrar-sucursal.component';
import { CrearSucursalComponent } from './components/sucursal/crear-sucursal/crear-sucursal.component';
import { ActualizarSucursalComponent } from './components/sucursal/actualizar-sucursal/actualizar-sucursal.component';
import { EliminarSucursalComponent } from './components/sucursal/eliminar-sucursal/eliminar-sucursal.component';
import { MostrarPersonaComponent } from './components/persona/mostrar-persona/mostrar-persona.component';
import { CrearPersonaComponent } from './components/persona/crear-persona/crear-persona.component';
import { ActualizarPersonaComponent } from './components/persona/actualizar-persona/actualizar-persona.component';
import { EliminarPersonaComponent } from './components/persona/eliminar-persona/eliminar-persona.component';
import { MostrarClienteComponent } from './components/cliente/mostrar-cliente/mostrar-cliente.component';
import { CrearClienteComponent } from './components/cliente/crear-cliente/crear-cliente.component';
import { ActualizarClienteComponent } from './components/cliente/actualizar-cliente/actualizar-cliente.component';
import { EliminarClienteComponent } from './components/cliente/eliminar-cliente/eliminar-cliente.component';


export const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/', 
        pathMatch: 'full' 
    },
    {
        path: "sucursales",
        component: MostrarSucursalComponent
    },
    {
        path: "sucursales/nuevo",
        component: CrearSucursalComponent
    },
    {
        path: "sucursales/edit/:id",
        component: ActualizarSucursalComponent
    },
    {
        path: "sucursales/del/:id",
        component: EliminarSucursalComponent
    },


    { 
        path: '', 
        redirectTo: '/', 
        pathMatch: 'full' 
    },
    {
        path: "personas",
        component: MostrarPersonaComponent
    },
    {
        path: "personas/nuevo",
        component: CrearPersonaComponent
    },
    {
        path: "personas/edit/:id",
        component: ActualizarPersonaComponent
    },
    {
        path: "personas/del/:id",
        component: EliminarPersonaComponent
    },

    { 
        path: '', 
        redirectTo: '/', 
        pathMatch: 'full' 
    },
    {
        path: "clientes",
        component: MostrarClienteComponent
    },
    {
        path: "clientes/nuevo",
        component: CrearClienteComponent
    },
    {
        path: "clientes/edit/:id",
        component: ActualizarClienteComponent
    },
    {
        path: "clientes/del/:id",
        component: EliminarClienteComponent
    },
];
