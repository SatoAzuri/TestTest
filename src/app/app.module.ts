import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ChapterComponent } from './components/chapter/chapter.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MatCardModule } from '@angular/material/card';
import { SigninComponent } from './components/signin/signin.component';
import { MatSelectModule } from '@angular/material/select';
import { MagazineComponent } from './components/magazine/magazine.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { TeacherComponent } from './components/teacher/teacher.component';
//import { user } from "./Models";
@NgModule({
  declarations: [
    AppComponent,
    LogincomponentComponent,
    AboutUsComponent,
    ContactUsComponent,
    ChapterComponent,
    AssignmentComponent,
    HomepageComponent,
    SigninComponent,
    MagazineComponent,
    TeacherComponent
  ],
  imports: [
    BrowserModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatSelectModule,
    CommonModule,
    MatMenuModule,
    MatTabsModule,
    HttpModule,
    FormsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'contact-us',
        component: ContactUsComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'chapter',
        component: ChapterComponent
      },
      {
        path: 'magazine/:id',
        component: MagazineComponent
      },
      {
        path: 'home',
        component: HomepageComponent
      },
      {
        path: '',
        component: SigninComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
