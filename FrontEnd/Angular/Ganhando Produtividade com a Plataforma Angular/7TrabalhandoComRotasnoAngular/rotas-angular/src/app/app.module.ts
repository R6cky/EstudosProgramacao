import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { PortifolioModule } from './pages/portifolio/portifolio.module';
import { IndexModule } from './pages/index/index.module';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';
import { SharedModule } from './pages/shared/shared.module';

const routes: Routes = [
  { path: '', component: TitleComponent, pathMatch: 'full' }, // full - passar exatamente o caminho
  { path: 'portifolio/:id', component: CardComponent, pathMatch: 'prefix' }, // passar prefixo de rota
  {
    path: 'cards',
    component: CardComponent,
    children: [
      { path: ':id', component: CardComponent },
      { path: 'view', component: CardComponent },
    ],
  },
  { path: '**', redirectTo: '' }, // Rota coringa
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PortifolioModule,
    IndexModule,
    SharedModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
