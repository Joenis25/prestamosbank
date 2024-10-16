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

import { MostrarEmpleadoComponent } from './components/empleado/mostrar-empleado/mostrar-empleado.component';
import { CrearEmpleadoComponent } from './components/empleado/crear-empleado/crear-empleado.component';
import { ActualizarEmpleadoComponent } from './components/empleado/actualizar-empleado/actualizar-empleado.component';
import { EliminarEmpleadoComponent } from './components/empleado/eliminar-empleado/eliminar-empleado.component';

import { MostrarPrestamoComponent } from './components/prestamo/mostrar-prestamo/mostrar-prestamo.component';
import { CrearPrestamoComponent } from './components/prestamo/crear-prestamo/crear-prestamo.component';
import { ActualizarPrestamoComponent } from './components/prestamo/actualizar-prestamo/actualizar-prestamo.component';
import { EliminarPrestamoComponent } from './components/prestamo/eliminar-prestamo/eliminar-prestamo.component';

import { MostrarCuentaBancariaComponent } from './components/cuentaBancaria/mostrar-cuenta-bancaria/mostrar-cuenta-bancaria.component';
import { CrearCuentaBancariaComponent } from './components/cuentaBancaria/crear-cuenta-bancaria/crear-cuenta-bancaria.component';
import { ActualizarCuentaBancariaComponent } from './components/cuentaBancaria/actualizar-cuenta-bancaria/actualizar-cuenta-bancaria.component';
import { EliminarCuentaBancariaComponent } from './components/cuentaBancaria/eliminar-cuenta-bancaria/eliminar-cuenta-bancaria.component';


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

    { 
        path: '', 
        redirectTo: '/', 
        pathMatch: 'full' 
    },
    {
        path: "empleados",
        component: MostrarEmpleadoComponent
    },
    {
        path: "empleados/nuevo",
        component: CrearEmpleadoComponent
    },
    {
        path: "empleados/edit/:id",
        component: ActualizarEmpleadoComponent
    },
    {
        path: "empleados/del/:id",
        component: EliminarEmpleadoComponent
    },

    { 
        path: '', 
        redirectTo: '/', 
        pathMatch: 'full' 
    },
    {
        path: "prestamos",
        component: MostrarPrestamoComponent
    },
    {
        path: "prestamos/nuevo",
        component: CrearPrestamoComponent
    },
    {
        path: "prestamos/edit/:id",
        component: ActualizarPrestamoComponent
    },
    {
        path: "prestamos/del/:id",
        component: EliminarPrestamoComponent
    },

    { 
        path: '', 
        redirectTo: '/', 
        pathMatch: 'full' 
    },
    {
        path: "cuentas",
        component: MostrarCuentaBancariaComponent
    },
    {
        path: "cuentas/nuevo",
        component: CrearCuentaBancariaComponent
    },
    {
        path: "cuentas/edit/:id",
        component: ActualizarCuentaBancariaComponent
    },
    {
        path: "cuentas/del/:id",
        component: EliminarCuentaBancariaComponent
    },
];
