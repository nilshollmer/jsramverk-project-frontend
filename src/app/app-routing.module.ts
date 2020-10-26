import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    {
        path: 'account',
        loadChildren: './account/account.module#AccountModule'
    },
    {
        path: 'market',
        loadChildren: './market/market.module#MarketModule'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
