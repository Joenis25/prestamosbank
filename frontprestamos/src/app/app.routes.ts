import { Routes } from '@angular/router';
import { MostrarSucursalComponent } from './components/sucursal/mostrar-sucursal/mostrar-sucursal.component';
import { CrearSucursalComponent } from './components/sucursal/crear-sucursal/crear-sucursal.component';
import { ActualizarSucursalComponent } from './components/sucursal/actualizar-sucursal/actualizar-sucursal.component';

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
];
