import {Component, Input, OnInit} from '@angular/core';
import {UserAuthService} from '../../../modules/shared/services/user-auth-service/user-auth.service';


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
  selector: 'app-nav-menu-new',
  templateUrl: './nav-menu-new.component.html',
  styleUrls: ['./nav-menu-new.component.css']
})
export class NavMenuNewComponent implements OnInit {
  publicMenuItems: INavMenuItem[] = [];
  adminMenuItems: INavMenuItem[] = [];

  @Input() menuFlowRow = false;

  constructor(private userAuthService: UserAuthService) {
  }

  ngOnInit(): void {
    this.fillPublicMenuItems();
    this.fillAdminMenuItems();
  }

  fillPublicMenuItems(): void {
    this.publicMenuItems.push(new NavMenuItem('Переглянути тваринок', BASE_URL + 'animals'));
    this.publicMenuItems.push(new NavMenuItem('Про нас', BASE_URL + 'about'));
    this.publicMenuItems.push(new NavMenuItem('Новини', BASE_URL + 'news'));
    this.publicMenuItems.push(new NavMenuItem('Допомогти котикам', BASE_URL + 'donate'));
    this.publicMenuItems.push(
      this.userAuthService.isAuthorized()
        ? new NavMenuItem('Вихід', BASE_URL + 'login')
        : new NavMenuItem('Вхід', BASE_URL + 'login')
    );
  }

  fillAdminMenuItems(): void {
    const p = this.userAuthService.getUser().permissions;
    if (!p.isActive) {
      return;
    }
    if (p.canCreateAndCloseAnimalRequests) {
      this.adminMenuItems.push(new NavMenuItem('Повідомлення про знайдену тварину', BASE_URL + '/admin/animals/find-requests'));
    }
    if (p.canCreateAndCloseAnimalRequests) {
      this.adminMenuItems.push(new NavMenuItem('Керування обліком тварин', BASE_URL + '/admin/animals/list'));
    }
    if (p.canAddEditAndRemoveUsers) {
      this.adminMenuItems.push(new NavMenuItem('Керування користувачами', BASE_URL + '/admin/users'));
    }
  }
}
