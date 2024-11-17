import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title: string = 'O que é Angular?';
  description: string = `
    Angular é uma plataforma de desenvolvimento de aplicações web front-end mantida pelo Google.
    Ele permite a criação de Single Page Applications (SPA) com interfaces dinâmicas utilizando TypeScript.
    O Angular é amplamente utilizado para criar aplicativos escaláveis e de alta performance.
  `;
  features: string[] = [
    'Componentes Reutilizáveis',
    'Utiliza TypeScript como base',
    'Suporte a Two-Way Data Binding',
    'Ferramentas de Teste Integradas',
    'Injeção de Dependência',
    'Roteamento Avançado'
  ];
}
