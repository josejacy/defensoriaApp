import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '', icon: 'home' },
    { title: 'Documentos Úteis', url: '/documentos-uteis', icon: 'document' },
    { title: 'Notícias', url: '/noticias', icon: 'document' },
    { title: 'Horários', url: '/horario', icon: 'time' },
    { title: 'Diário', url: '/diario-eletronico', icon: 'book' },
    { title: 'Institucional', url: '/institucional', icon: 'build' },
    { title: 'Cadastro', url: '/cadastro', icon: 'person-add' },
    { title: 'Contatos', url: '/contatos', icon: 'call' },
    { title: 'Chat', url: '/chat', icon: 'chatbubbles' },
    { title: 'Perguntas', url: '/perguntas', icon: 'help' },
    // { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    // { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  // constructor() {}
}
