import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';
const routes: Routes = [
  {
    path: 'tabs',
    component: PlacesPage,
    children: [
      {
        path: 'discover',
        loadChildren: () =>
          import('./discover/discover.module').then(
            (m) => m.DiscoverPageModule
          ),
      },
      {
        path: 'offers',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./offers/offers.module').then((m) => m.OffersPageModule),
          },
          {
            path: 'new',
            loadChildren: () =>
              import('./offers/new-offer/new-offer.module').then(
                (m) => m.NewOfferPageModule
              ),
          },
          {
            path: 'edit/:id',
            loadChildren: () =>
              import('./offers/edit-offer/edit-offer.module').then(
                (m) => m.EditOfferPageModule
              ),
          },
          {
            path: ':id',
            loadChildren: () =>
              import('./offers/offer-bookings/offer-bookings.module').then(
                (m) => m.OfferBookingsPageModule
              ),
          },
        ],
      },
      {
        path: '',
        redirectTo: '/places/tabs/dicover',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/places/tabs/discover',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
