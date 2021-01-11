import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductComponent } from './product/product.component';
import { CardPageComponent } from './card-page/card-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { AuthInterceptor } from './shared/auth-interceptor.service';
import { ProductItemComponent } from './product-item/product-item.component';
import { SortingPipe } from './shared/sorting.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainPageComponent,
    ProductComponent,
    CardPageComponent,
    ProductItemComponent,
    SortingPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    QuillModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptor
    }
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
