import { Component, HostListener, OnInit } from '@angular/core';



@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  @HostListener('click', ['$event'])
  handleClick(event: MouseEvent) {
    const element = event.target as HTMLMenuElement;

    if (element.classList.contains('menu')){
      const menu = element.children[0];
      const forbidenScroll = (event.target as HTMLMenuElement).closest('body');

      forbidenScroll?.classList.toggle('lock');
      menu.classList.toggle('active');
      event.stopPropagation();
    }

  }

  public items = ['Про нас','Новини','Допомогти котикам','Вибрати тваринку','Повідомлення про знайдену тварину','Користувачі', 'Керування тваринами','Вихід'];
  constructor() { }

  ngOnInit(): void {
  }

}
