import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './component/test/test.component';
import { ClientComponent } from './component/client/client.component';
const routes: Routes = [
  {path: 'Teste', component: TestComponent},
  {path: 'Clientes', component:ClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
