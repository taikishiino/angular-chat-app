import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'products', component: ProductComponent },
	{ path: 'new-training', component: NewTrainingComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }