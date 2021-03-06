import { Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { LoginComponent } from './pages/login/login.component';
import { OrderComponent } from "./pages/order/order.component";
import { AuthGuard } from "./services/auth-guard.service";

const routes: Routes = [
    { path: "", component: OrderComponent, canActivate: [ AuthGuard ] },
    { path: "login", component: LoginComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
