import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PartnersComponent } from './partners/partners.component';
import { WhatwedoComponent } from './whatwedo/whatwedo.component';
import { ProductsComponent } from './products/products.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { ClientsComponent } from './clients/clients.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { FooterComponent } from './footer/footer.component';
import { StoryComponent } from './story/story.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    LandingPageComponent,
    PartnersComponent,
    WhatwedoComponent,
    ProductsComponent,
    BenefitsComponent,
    ClientsComponent,
    CertificationsComponent,
    EnquiryComponent,
    FooterComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
