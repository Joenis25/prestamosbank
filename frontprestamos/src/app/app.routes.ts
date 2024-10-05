import { Routes } from '@angular/router';
import { MostrarSucursalComponent } from './components/sucursal/mostrar-sucursal/mostrar-sucursal.component';
import { CrearSucursalComponent } from './components/sucursal/crear-sucursal/crear-sucursal.component';
import { ActualizarSucursalComponent } from './components/sucursal/actualizar-sucursal/actualizar-sucursal.component';
import { EliminarSucursalComponent } from './components/sucursal/eliminar-sucursal/eliminar-sucursal.component';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/sucursal', 
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
];
