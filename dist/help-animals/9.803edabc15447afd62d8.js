(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+B+2":function(e,t,i){"use strict";i.r(t),i.d(t,"AdminUsersModule",function(){return v});var n=i("ofXK"),a=i("tyNb"),s=i("3Pt+"),d=i("FpXt"),o=i("tk/3"),r=i("hVSr"),l=i("akkN");const b=l.a.serverHost+l.a.apiUrl+"/users";var c=i("xGl1"),p=i("fXoL"),u=i("oULQ");function m(e,t){if(1&e&&(p.Nb(0,"tr"),p.Nb(1,"td"),p.nc(2),p.Mb(),p.Nb(3,"td"),p.nc(4),p.Mb(),p.Nb(5,"td"),p.nc(6),p.Mb(),p.Nb(7,"td",5),p.nc(8),p.Mb(),p.Nb(9,"td",5),p.nc(10),p.Mb(),p.Nb(11,"td",5),p.nc(12),p.Mb(),p.Nb(13,"td"),p.nc(14),p.Mb(),p.Nb(15,"td",5),p.Nb(16,"a",6),p.nc(17,"\ud83d\udd0d"),p.Mb(),p.Mb(),p.Mb()),2&e){const e=t.$implicit,i=p.Yb();p.yb(2),p.oc(e.id),p.yb(2),p.oc(e.name),p.yb(2),p.oc(e.email),p.yb(2),p.oc(e.phone1),p.yb(2),p.oc(e.phone2),p.yb(2),p.oc(e.isActive?"\u2714":"\u2718"),p.yb(2),p.oc(e.updatedAt),p.yb(2),p.cc("routerLink",i.getRedirectToUserDetailsLink(e.id+"/details"))}}let h=(()=>{class e{constructor(e,t,i){this.httpClient=e,this.userAuthService=t,this.activatedRoute=i,this.userList=[],this.pagination=new r.a,this.pagination.url="/admin/users",this.querySubscription=this.activatedRoute.queryParams.subscribe(e=>{this.pagination.page=e.page||this.pagination.page,this.pagination.perPage=e.per_page||this.pagination.perPage,this.getUsers()})}ngOnDestroy(){this.querySubscription.unsubscribe()}getUsers(){const e=(new o.f).appendAll(this.pagination.getQueryParams());this.httpClient.get(b,{params:e,observe:"response"}).subscribe(e=>{e.body&&(this.userList=e.body.map(e=>({id:e.id.toString(),login:e.login,name:e.name,phone1:e.phone1,phone2:e.phone2,email:e.email,isActive:e.is_active,permissionForAddEditAndRemoveUsers:e.permission_for_add_edit_and_remove_users,permissionForAddEditAndRemoveAnimals:e.permission_for_add_edit_and_remove_animals,permissionForCreateAndCloseAnimalRequests:e.permission_for_create_and_close_animal_requests,createdAt:Object(c.a)(e.created_at),updatedAt:Object(c.a)(e.updated_at),editedBy:e.edited_by})),this.pagination.setFromResponseHeaders(e.headers))})}getRedirectToUserDetailsLink(e){return`/admin/users/${e}`}}return e.\u0275fac=function(t){return new(t||e)(p.Ib(o.b),p.Ib(u.a),p.Ib(a.a))},e.\u0275cmp=p.Cb({type:e,selectors:[["app-admin-user-list"]],decls:21,vars:2,consts:[[1,"admin-user-list-container"],[1,"admin-animal-list-header"],[1,"table"],[4,"ngFor","ngForOf"],[3,"pagination"],[1,"text-align--center"],[1,"admin-animal-list-redirect-edit-animal",3,"routerLink"]],template:function(e,t){1&e&&(p.Nb(0,"div",0),p.Jb(1,"div",1),p.Nb(2,"table",2),p.Nb(3,"tr"),p.Nb(4,"th"),p.nc(5,"id"),p.Mb(),p.Nb(6,"th"),p.nc(7,"\u0406\u043c'\u044f \u0442\u0430 \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435"),p.Mb(),p.Nb(8,"th"),p.nc(9,"email"),p.Mb(),p.Nb(10,"th"),p.nc(11,"\u0442\u0435\u043b1"),p.Mb(),p.Nb(12,"th"),p.nc(13,"\u0442\u0435\u043b2"),p.Mb(),p.Nb(14,"th"),p.nc(15,"\u0434\u0456\u044e\u0447\u0438\u0439"),p.Mb(),p.Nb(16,"th"),p.nc(17,"\u0434\u0430\u0442\u0430 \u0437\u043c\u0456\u043d\u0438"),p.Mb(),p.Jb(18,"th"),p.Mb(),p.lc(19,m,18,8,"tr",3),p.Mb(),p.Jb(20,"app-pagination",4),p.Mb()),2&e&&(p.yb(19),p.bc("ngForOf",t.userList),p.yb(1),p.bc("pagination",t.pagination))},directives:[n.i,r.b,a.d],styles:[".admin-user-list-container[_ngcontent-%COMP%]{display:grid;grid-gap:10px}.text-align--center[_ngcontent-%COMP%]{text-align:center}"]}),e})();class y{constructor(){this.email="",this.id="",this.isActive=!1,this.login="",this.name="",this.permissionForAddEditAndRemoveAnimals=!1,this.permissionForAddEditAndRemoveUsers=!1,this.permissionForCreateAndCloseAnimalRequests=!1,this.phone1="",this.phone2="",this.createdAt="",this.editedBy="",this.updatedAt=""}}let f=(()=>{class e{constructor(e,t,i){this.httpClient=e,this.activatedRouter=t,this.userAuthService=i,this.userDetails=new y}ngAfterViewInit(){this.getUser(this.activatedRouter.snapshot.params.id)}getUser(e){e&&this.httpClient.get(`${b}/${e}`).subscribe(e=>{this.userDetails={id:e.id.toString(),login:e.login,name:e.name,phone1:e.phone1,phone2:e.phone2,email:e.email,isActive:e.is_active,permissionForAddEditAndRemoveUsers:e.permission_for_add_edit_and_remove_users,permissionForAddEditAndRemoveAnimals:e.permission_for_add_edit_and_remove_animals,permissionForCreateAndCloseAnimalRequests:e.permission_for_create_and_close_animal_requests,createdAt:Object(c.a)(e.created_at),updatedAt:Object(c.a)(e.updated_at),editedBy:e.edited_by}})}}return e.\u0275fac=function(t){return new(t||e)(p.Ib(o.b),p.Ib(a.a),p.Ib(u.a))},e.\u0275cmp=p.Cb({type:e,selectors:[["app-user-animal-details"]],decls:57,vars:13,consts:[[1,"admin-details"],[1,"caption"],[1,"admin-details-form-field-container"],["for","id",1,"label"],["id","id","readonly","readonly",1,"input","admin-details-form-field-input",3,"value"],["for","login",1,"label"],["id","login","readonly","readonly","type","text",1,"input","admin-details-form-field-input",3,"value"],["for","name",1,"label"],["id","name","readonly","readonly","type","text",1,"input","admin-details-form-field-input",3,"value"],["for","email",1,"label"],["id","email","readonly","readonly","type","text",1,"input","admin-details-form-field-input",3,"value"],[1,"label"],["for","phone1"],["id","phone1","readonly","readonly","type","text",1,"input","admin-details-form-field-input",3,"value"],["for","phone2"],["id","phone2","readonly","readonly","type","text",1,"input","admin-details-form-field-input",3,"value"],[1,"label","admin-details-form-field-container"],[1,"key-value-table-style"],[1,"label","font-weight--default"],[1,"label","colored-font"],["for","dateLastEdit",1,"label"],["id","dateLastEdit","readonly","readonly",1,"input",3,"value"],["for","dateAdded",1,"label"],["id","dateAdded","readonly","readonly",1,"input","admin-details-form-field-input",3,"value"],["for","editedBy",1,"label"],["id","editedBy","readonly","readonly",1,"input","admin-details-form-field-input",3,"value"]],template:function(e,t){1&e&&(p.Nb(0,"div",0),p.Nb(1,"h4",1),p.nc(2,"\u041f\u0435\u0440\u0435\u0433\u043b\u044f\u0434 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430:"),p.Mb(),p.Nb(3,"div",2),p.Nb(4,"label",3),p.nc(5,"id:"),p.Mb(),p.Jb(6,"input",4),p.Mb(),p.Nb(7,"div",2),p.Nb(8,"label",5),p.nc(9,"\u041b\u043e\u0433\u0456\u043d:"),p.Mb(),p.Jb(10,"input",6),p.Mb(),p.Nb(11,"div",2),p.Nb(12,"label",7),p.nc(13,"\u0406\u043c'\u044f \u0442\u0430 \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435:"),p.Mb(),p.Jb(14,"input",8),p.Mb(),p.Nb(15,"div",2),p.Nb(16,"label",9),p.nc(17,"Email:"),p.Mb(),p.Jb(18,"input",10),p.Mb(),p.Nb(19,"div",2),p.Nb(20,"label",11),p.nc(21,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u0438:"),p.Mb(),p.Jb(22,"label",12),p.Jb(23,"input",13),p.Jb(24,"label",14),p.Jb(25,"input",15),p.Mb(),p.Nb(26,"p",16),p.nc(27,"\u041a\u0435\u0440\u0443\u0432\u0430\u043d\u043d\u044f \u043f\u0440\u0430\u0432\u0430\u043c\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u0430:"),p.Mb(),p.Nb(28,"section",17),p.Nb(29,"label",18),p.nc(30,"\u0414\u0456\u044e\u0447\u0438\u0439 (\u0430\u043a\u0442\u0438\u0432\u043d\u0438\u0439) \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447:"),p.Mb(),p.Nb(31,"label",19),p.nc(32),p.Mb(),p.Nb(33,"label",18),p.nc(34,"\u041e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f \u0442\u0430 \u0437\u0430\u043a\u0440\u0438\u0442\u0442\u044f \u0437\u0430\u044f\u0432 \u043f\u0440\u043e \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u0438\u0445 \u0442\u0432\u0430\u0440\u0438\u043d:"),p.Mb(),p.Nb(35,"label",19),p.nc(36),p.Mb(),p.Nb(37,"label",18),p.nc(38,"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043d\u043d\u044f \u0442\u0432\u0430\u0440\u0438\u043d:"),p.Mb(),p.Nb(39,"label",19),p.nc(40),p.Mb(),p.Nb(41,"label",18),p.nc(42,"\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f/\u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u044f/\u0440\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043d\u043d\u044f \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432:"),p.Mb(),p.Nb(43,"label",19),p.nc(44),p.Mb(),p.Mb(),p.Nb(45,"div",2),p.Nb(46,"label",20),p.nc(47,"\u0414\u0430\u0442\u0430 \u043e\u0441\u0442\u0430\u043d\u043d\u044c\u043e\u0433\u043e \u0440\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043d\u043d\u044f:"),p.Mb(),p.Jb(48,"input",21),p.Mb(),p.Nb(49,"div",2),p.Nb(50,"label",22),p.nc(51,"\u0414\u0430\u0442\u0430 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f:"),p.Mb(),p.Jb(52,"input",23),p.Mb(),p.Nb(53,"div",2),p.Nb(54,"label",24),p.nc(55,"\u0417\u043c\u0456\u043d\u0438 \u0432\u043d\u0435\u0441\u0435\u043d\u0456 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0435\u043c: "),p.Mb(),p.Jb(56,"input",25),p.Mb(),p.Mb()),2&e&&(p.yb(6),p.cc("value",t.userDetails.id),p.yb(4),p.cc("value",t.userDetails.login),p.yb(4),p.cc("value",t.userDetails.name),p.yb(4),p.cc("value",t.userDetails.email),p.yb(5),p.cc("value",t.userDetails.phone1),p.yb(2),p.cc("value",t.userDetails.phone2),p.yb(7),p.oc(t.userDetails.isActive?"\u2714":"\u2718"),p.yb(4),p.oc(t.userDetails.permissionForCreateAndCloseAnimalRequests?"\u2714":"\u2718"),p.yb(4),p.oc(t.userDetails.permissionForAddEditAndRemoveAnimals?"\u2714":"\u2718"),p.yb(4),p.oc(t.userDetails.permissionForAddEditAndRemoveUsers?"\u2714":"\u2718"),p.yb(4),p.cc("value",t.userDetails.updatedAt),p.yb(4),p.cc("value",t.userDetails.createdAt),p.yb(4),p.cc("value",t.userDetails.editedBy))},styles:[".admin-details[_ngcontent-%COMP%]{margin:0 auto;padding-top:15px;padding-bottom:15px;max-width:600px}.admin-details-form-field-container[_ngcontent-%COMP%]{padding-top:10px;display:grid}.caption[_ngcontent-%COMP%]{font-size:var(--default-component-font-size);font-weight:600;text-align:center}.colored-font[_ngcontent-%COMP%]{color:rgb(var(--default-component-background-color))}.font-weight--default[_ngcontent-%COMP%]{font-weight:400}"]}),e})();const g=[{path:"list",component:h},{path:"add",component:f},{path:":id/details",component:f},{path:"",redirectTo:"list"}];let v=(()=>{class e{}return e.\u0275mod=p.Gb({type:e}),e.\u0275inj=p.Fb({factory:function(t){return new(t||e)},imports:[[n.b,a.e.forChild(g),s.h,d.a,s.m]]}),e})()}}]);