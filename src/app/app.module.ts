import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic-higlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirectiveDirective } from './unlessDirective/unless-directive.directive';

@NgModule({
  declarations: [
    AppComponent, BasicHighlightDirective, BetterHighlightDirective, UnlessDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
