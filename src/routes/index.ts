import { PersonaRoutes } from './Persona.route';
import { SucursalRoutes } from './Sucursal.route';
import { ClienteRoutes } from './Cliente.route';
import { CuentaBancariaRoutes } from './CuentaBancaria.route';
import { EmpleadoRoutes } from './Empleado.route';
export class Routes {
    public personaRoutes: PersonaRoutes = new PersonaRoutes();
    public sucursalRoutes: SucursalRoutes = new SucursalRoutes();
    public clienteRoutes: ClienteRoutes = new ClienteRoutes();
    public cuentaBancariaRoutes: CuentaBancariaRoutes = new CuentaBancariaRoutes();
    public empleadoRoutes: EmpleadoRoutes = new EmpleadoRoutes();
}
