import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { NguiMenuModule } from '@ngui/menu';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GravatarComponent } from './gravatar/gravatar.component';
import { GravatarService } from './gravatar/gravatar.service';

@NgModule({
  declarations: [
    AppComponent,
    GravatarComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    NguiMenuModule
  ],
  providers: [GravatarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
