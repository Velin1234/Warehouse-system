import { FirebaseService } from './services/firebase.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AngularFireModule } from '@angular/fire/compat'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
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
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
