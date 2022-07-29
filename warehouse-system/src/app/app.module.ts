import { FirebaseService } from './shared/services/firebase.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { NavMenuComponent } from './shared/components/nav-menu/nav-menu.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SharedModule } from './shared/modules/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyAMgzpt2SfYntZTgxd67fKBMPBoukyg3C0",
        authDomain: "warehouse-system-6a8e2.firebaseapp.com",
        projectId: "warehouse-system-6a8e2",
        storageBucket: "warehouse-system-6a8e2.appspot.com",
        messagingSenderId: "973493558314",
        appId: "1:973493558314:web:4e89d6bfb6da07d0c5f753",
        measurementId: "G-RKXLSV6KB1"
      })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
