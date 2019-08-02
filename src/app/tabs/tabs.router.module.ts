import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'champions',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/champions/champions.module').then(m => m.ChampionsPageModule)
          }
        ]
      },
      {
        path: 'tierlist',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/tierlist/tierlist.module').then(m => m.TierlistPageModule)
          }
        ]
      },
      {
        path: 'items',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/items/items.module').then(m => m.ItemsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/champions',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/champions',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
