import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { UserAuthService } from 'src/app/modules/shared/services/user-auth-service/user-auth.service';

const BASE_URL = '/';

export interface INavMenuItem {
  text: string;
  url: string;
}

class NavMenuItem implements INavMenuItem {
  constructor(public text: string, public url: string) {
  }
}

@Component({
  selector: 'app-navigation-ui',
  templateUrl: './navigation-ui.component.html',
  styleUrls: ['./navigation-ui.component.css']
})

export class NavigationUiComponent implements OnInit, OnDestroy, AfterViewInit{


  active = false;

  @ViewChildren('menu') menu!: QueryList<ElementRef>;

  publicMenuItems: INavMenuItem[] = [];
  adminMenuItems: INavMenuItem[] = [];

  subscription: Subscription;

  constructor(private userAuthService: UserAuthService) {

    this.subscription = userAuthService.userUpdatedEvent.subscribe(() => {
      this.fillPublicMenuItems();
      this.fillAdminMenuItems();
    });
  }

  ngOnInit(): void {
    this.fillPublicMenuItems();
    this.fillAdminMenuItems();
  }

  ngAfterViewInit(): void {
    console.log(this.active)
    this.subscription.add(this.menu.changes.subscribe((element)=>{
      element.toArray().forEach((element: ElementRef) => {
        fromEvent<Event>(element.nativeElement, "click")
        .subscribe((event)=> {
          const element = (event.target as HTMLElement).closest('li');
          element?.classList.toggle("_active");
        });
      });
    }))
  }

  fillPublicMenuItems(): void {
    this.publicMenuItems = [];
    this.publicMenuItems.push(new NavMenuItem('Переглянути тваринок', BASE_URL + 'animals'));
    this.publicMenuItems.push(new NavMenuItem('Про нас', BASE_URL + 'about'));
    this.publicMenuItems.push(new NavMenuItem('Допомогти котикам', BASE_URL + 'donate'));
    if(!this.userAuthService.isAuthorized()) this.publicMenuItems.push(new NavMenuItem('Вхід', BASE_URL + 'login'))
  }

  fillAdminMenuItems(): void {
    this.adminMenuItems = [];

    const user = this.userAuthService.getUser();

    if (!user.isActive) {
      return;
    }

    if (user.permissionForCreateAndCloseAnimalRequests) {
      this.adminMenuItems.push(new NavMenuItem('Повідомлення про знайдену тварину', BASE_URL + '/admin/animals/find-requests'));
    }
    if (user.permissionForCreateAndCloseAnimalRequests) {
      this.adminMenuItems.push(new NavMenuItem('Керування обліком тварин', BASE_URL + '/admin/animals/list'));
    }
    if (user.permissionForAddEditAndRemoveUsers) {
      this.adminMenuItems.push(new NavMenuItem('Керування користувачами', BASE_URL + '/admin/users'));
    }

    this.adminMenuItems.push(new NavMenuItem('Вихiд', BASE_URL + 'login'));
  }

  isAuth(): boolean{
    return this.userAuthService.isAuthorized()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
