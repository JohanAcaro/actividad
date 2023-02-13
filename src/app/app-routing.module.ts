import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  //{
    //path: 'databinding',
    //loadChildren: () => import('./databinding/databinding.module').then( m => m.DatabindingPageModule)
  //}
  
  //{
    //path: 'minijuego',
    //loadChildren: () => import('./minijuego/minijuego.module').then( m => m.MinijuegoPageModule)
  //}
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
