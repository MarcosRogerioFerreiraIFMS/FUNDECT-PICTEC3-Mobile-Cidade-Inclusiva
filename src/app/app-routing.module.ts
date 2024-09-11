import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./paginas/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'list-manutencao',
    loadChildren: () => import('./paginas/manutencao/list-manutencao/list-manutencao.module').then( m => m.ListManutencaoPageModule)
  },
  {
    path: 'perfil-manutencao',
    loadChildren: () => import('./paginas/manutencao/perfil-manutencao/perfil-manutencao.module').then( m => m.PerfilManutencaoPageModule)
  },
  {
    path: 'add-edit-manutencao',
    loadChildren: () => import('./paginas/manutencao/add-edit-manutencao/add-edit-manutencao.module').then( m => m.AddEditManutencaoPageModule)
  },
  {
    path: 'add-edit-comentario',
    loadChildren: () => import('./paginas/comentario/add-edit-comentario/add-edit-comentario.module').then( m => m.AddEditComentarioPageModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('./paginas/mapa/maps/maps.module').then( m => m.MapsPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./paginas/mapa/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'list-noticia',
    loadChildren: () => import('./paginas/noticia/list-noticia/list-noticia.module').then( m => m.ListNoticiaPageModule)
  },
  {
    path: 'perfil-noticia/:id',
    loadChildren: () => import('./paginas/noticia/perfil-noticia/perfil-noticia.module').then( m => m.PerfilNoticiaPageModule)
  },
  {
    path: 'list-acessibilidade',
    loadChildren: () => import('./paginas/acessibilidade/list-acessibilidade/list-acessibilidade.module').then( m => m.ListAcessibilidadePageModule)
  },
  {
    path: 'perfil-acessibilidade/:id',
    loadChildren: () => import('./paginas/acessibilidade/perfil-acessibilidade/perfil-acessibilidade.module').then( m => m.PerfilAcessibilidadePageModule)
  },
  {
    path: 'list-contato',
    loadChildren: () => import('./paginas/contato/list-contato/list-contato.module').then( m => m.ListContatoPageModule)
  },
  {
    path: 'perfil-contato/:id',
    loadChildren: () => import('./paginas/contato/perfil-contato/perfil-contato.module').then( m => m.PerfilContatoPageModule)
  },
  {
    path: 'perfil-transporte/:id',
    loadChildren: () => import('./paginas/transporte/perfil-transporte/perfil-transporte.module').then( m => m.PerfilTransportePageModule)
  },
  {
    path: 'list-transporte',
    loadChildren: () => import('./paginas/transporte/list-transporte/list-transporte.module').then( m => m.ListTransportePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
