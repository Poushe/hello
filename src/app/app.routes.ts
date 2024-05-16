import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'', loadChildren: () => 
            import('./mycooking/mycooking.module').then(m =>m.MycookingModule)
    }
];
