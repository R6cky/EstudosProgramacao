import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { SmallCardsComponent } from './components/small-cards/small-cards.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { ViewCardComponent } from './pages/view-card/view-card.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'viewCard/:id', component: ViewCardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    SmallCardsComponent,
    BigCardComponent,
    ListCardComponent,
    FooterComponent,
    ViewCardComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
