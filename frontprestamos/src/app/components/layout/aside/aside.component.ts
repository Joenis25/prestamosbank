import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [PanelMenuModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  items: MenuItem[]=[];


  ngOnInit(): void {
    this.items = [
      {
        label: 'Clientes',
        icon: 'pi pi-fw pi-users',
        routerLink: '/clientes'
        // items: [
        //   {
        //     label: 'Crud Cliente'
        //   },
        //   {
        //     label: 'HTML 2'
        //   }
        // ]
      },
      {
        label: 'Personas',
        icon: 'pi pi-fw pi-qrcode',

      },
      {
        label: 'Sucursales',
        icon: 'pi pi-fw pi-shopping-bag',
        routerLink: '/sucursales'
      },
      {
        label: 'Empleados',
        icon: 'pi pi-fw pi-shopping-cart',
      },
      {
        label: 'CuentasBacarias',
        icon: 'pi pi-fw pi-shopping-cart',
      },
      {
        label: 'Prestamos',
        icon: 'pi pi-fw pi-shopping-cart',
      },
      {
        label: 'Garantia',
        icon: 'pi pi-fw pi-shopping-cart',
      },
      {
        label: 'Amortizaciones',
        icon: 'pi pi-fw pi-shopping-cart',
      }

    ];
  }
}
