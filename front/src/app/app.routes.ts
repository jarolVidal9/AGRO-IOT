import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { authGuard } from './core/guards/auth.guard';
import { FarmsComponent } from './features/dashboard/farms/farms.component';
import { CropsComponent } from './features/dashboard/crops/crops.component';
import { CreateEditFarmComponent } from './features/dashboard/farms/create-edit-farm/create-edit-farm.component';
import { DetailComponent } from './features/dashboard/farms/detail/detail.component';
import { redirectGuard } from './core/guards/redirect.guard';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path: '',
                component: FarmsComponent
            },
            {
                path: 'farms',
                children: [
                    {
                        path: 'create',
                        component: CreateEditFarmComponent
                    },
                    {
                        path: 'create/:id',
                        component: CreateEditFarmComponent
                    },
                    {
                        path: 'detail/:id',
                        component: DetailComponent
                    }
                ]
            },
            {
                path: 'cultivos',
                component: CropsComponent
            }
        ]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [redirectGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [redirectGuard]

    },
    {
        path: '**',
        component: LoginComponent,
        canActivate: [redirectGuard]
    }
];
