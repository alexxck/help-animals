(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{aLRU:function(e,t,i){"use strict";i.r(t),i.d(t,"AdminAnimalsModule",function(){return V});var n=i("ofXK"),a=i("tyNb"),r=i("tk/3"),o=i("hVSr"),s=i("akkN");const l=s.a.serverHost+s.a.apiUrl+"/animals_admin";var c=i("fXoL"),b=i("oULQ");function d(e,t){if(1&e&&(c.Nb(0,"tr"),c.Nb(1,"td"),c.nc(2),c.Mb(),c.Nb(3,"td"),c.nc(4),c.Mb(),c.Nb(5,"td"),c.nc(6),c.Mb(),c.Nb(7,"td"),c.nc(8),c.Mb(),c.Nb(9,"td"),c.nc(10),c.Mb(),c.Nb(11,"td"),c.nc(12),c.Mb(),c.Nb(13,"td"),c.Nb(14,"a",6),c.nc(15,"\u270d"),c.Mb(),c.Mb(),c.Mb()),2&e){const e=t.$implicit,i=c.Yb();c.yb(2),c.oc(e.id),c.yb(2),c.oc(e.responsiblePerson),c.yb(2),c.oc(e.sterilization?"\u2714":"\u2718"),c.yb(2),c.oc(e.rabiesVaccination?"\u2714":"\u2718"),c.yb(2),c.oc(e.complexVaccination?"\u2714":"\u2718"),c.yb(2),c.oc(e.animalHasFamily?"\u2714":"\u2718"),c.yb(2),c.cc("routerLink",i.getRedirectToAnimalDetailsLink(e.id))}}let m=(()=>{class e{constructor(e,t,i){this.httpClient=e,this.userAuthService=t,this.activatedRoute=i,this.animalList=[],this.pagination=new o.a,this.pagination.url="/admin/animals",this.querySubscription=this.activatedRoute.queryParams.subscribe(e=>{this.pagination.page=e.page||this.pagination.page,this.pagination.perPage=e.per_page||this.pagination.perPage,this.getAnimals()})}ngOnDestroy(){this.querySubscription.unsubscribe()}getAnimals(){const e=(new r.f).appendAll(this.pagination.getQueryParams());this.httpClient.get(l,{params:e,observe:"response"}).subscribe(e=>{e.body&&(this.animalList=e.body.map(e=>({id:e.id,complexVaccination:e.complex_vaccination,rabiesVaccination:e.rabies_vaccination,sterilization:e.sterilization,animalHasFamily:e.animal_has_family,responsiblePerson:e.responsible_person})),this.pagination.setFromResponseHeaders(e.headers))})}getRedirectToAnimalDetailsLink(e){return`/admin/animals/${e}`}getRedirectToAddLink(){return"/admin/animals/add"}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(r.b),c.Ib(b.a),c.Ib(a.a))},e.\u0275cmp=c.Cb({type:e,selectors:[["app-admin-animal-list"]],decls:21,vars:3,consts:[[1,"admin-animal-list-container"],[1,"admin-animal-list-header"],["type","button",1,"button",3,"routerLink"],[1,"table"],[4,"ngFor","ngForOf"],[3,"pagination"],[1,"admin-animal-list-redirect-edit-animal",3,"routerLink"]],template:function(e,t){1&e&&(c.Nb(0,"div",0),c.Nb(1,"div",1),c.Nb(2,"button",2),c.nc(3,"\u0414\u043e\u0434\u0430\u0442\u0438 \u0442\u0432\u0430\u0440\u0438\u043d\u043a\u0443"),c.Mb(),c.Mb(),c.Nb(4,"table",3),c.Nb(5,"tr"),c.Nb(6,"th"),c.nc(7,"id"),c.Mb(),c.Nb(8,"th"),c.nc(9,"\u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u043b\u044c\u043d\u0430 \u043e\u0441\u043e\u0431\u0430"),c.Mb(),c.Nb(10,"th"),c.nc(11,"\u0421\u0442\u0435\u0440"),c.Mb(),c.Nb(12,"th"),c.nc(13,"\u0421\u043a\u0430\u0437"),c.Mb(),c.Nb(14,"th"),c.nc(15,"\u041a\u043e\u043c\u043f"),c.Mb(),c.Nb(16,"th"),c.nc(17,"\u0412\u043b\u0430\u0448"),c.Mb(),c.Jb(18,"th"),c.Mb(),c.lc(19,d,16,7,"tr",4),c.Mb(),c.Jb(20,"app-pagination",5),c.Mb()),2&e&&(c.yb(2),c.cc("routerLink",t.getRedirectToAddLink()),c.yb(17),c.bc("ngForOf",t.animalList),c.yb(1),c.bc("pagination",t.pagination))},directives:[a.c,n.i,o.b,a.d],styles:[".admin-animal-list-container[_ngcontent-%COMP%]{display:grid;grid-gap:10px}"]}),e})();var u=i("HDdC");class p{constructor(e,t){this.fileContent=t,this.lastModified=e.lastModified,this.name=e.name,this.size=e.size,this.type=e.type}static readAsDataURL(e){return new u.a(t=>{const i=new FileReader;i.onload=()=>{const n=new p(e,i.result);i.error?t.error(i.error):t.next(n),t.complete()},i.readAsDataURL(e)})}}var h=i("3Pt+"),y=i("xGl1");class f{static convertAnimalPostPatchRequestToFormData(e){const t=new FormData;return Object.entries(e).forEach(([e,i])=>{if(null==i)return;const n=g(e);t.set(n,"string"==typeof i||"object"==typeof i?i:i.toString())}),t}static convertAnimalGetResponseToAdminAnimalDetails(e){return{id:e.id,name:e.name,age:e.age,breed:e.breed,sex:e.sex,color:e.color,features:e.features,responsiblePerson:e.responsible_person,complexVaccination:e.complex_vaccination,rabiesVaccination:e.rabies_vaccination,sterilization:e.sterilization,animalHasFamily:e.animal_has_family,showInGallery:e.show_in_gallery,imageUrl:e.image?s.a.serverHost+e.image.file.url:"",createdAt:Object(y.a)(e.created_at),updatedAt:Object(y.a)(e.updated_at),editedBy:e.edited_by}}static convertToPdf(e){const t=window.open("","","height=400,width=600");t&&(t.document.write(M(`id: ${e.id}`)),t.document.write(M(`\u0406\u043c'\u044f: ${e.name}`)),t.document.write(M(`\u041f\u043e\u0440\u043e\u0434\u0430: ${e.breed}`)),t.document.write(M(`\u0421\u0442\u0430\u0442\u044c: ${e.sex}`)),t.document.write(M(`\u041a\u043e\u043b\u0456\u0440: ${e.color}`)),t.document.write(M(`\u041e\u0441\u043e\u0431\u043b\u0438\u0432\u043e\u0441\u0442\u0456: ${e.features}`)),t.document.write(M(`\u0412\u0456\u043a: ${e.age}`)),t.document.write(M(`\u0412\u0430\u043a\u0446\u0438\u043d\u0430\u0446\u0456\u044f \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u043d\u0430: ${e.complexVaccination}`)),t.document.write(M(`\u0412\u0430\u043a\u0446\u0438\u043d\u0430\u0446\u0456\u044f \u0432\u0456\u0434 \u0441\u043a\u0430\u0437\u0443: ${e.rabiesVaccination}`)),t.document.write(M(`\u0421\u0442\u0435\u0440\u0438\u043b\u0456\u0437\u0430\u0446\u0456\u044f: ${e.sterilization}`)),t.document.write(M(`\u0422\u0432\u0430\u0440\u0438\u043d\u0430 \u0432\u043b\u0430\u0448\u0442\u043e\u0432\u0430\u043d\u0430: ${e.animalHasFamily}`)),t.document.write(M(`\u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u043b\u044c\u043d\u0430 \u043f\u0435\u0440\u0441\u043e\u043d\u0430: ${e.responsiblePerson}`)),t.document.write(M(`\u0414\u0430\u0442\u0430 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f: ${e.createdAt}`)),t.document.write(M(`\u0414\u0430\u0442\u0430 \u043e\u0441\u0442. \u0437\u043c\u0456\u043d: ${e.updatedAt}`)),t.document.write(M(`ID \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0449\u043e \u0437\u043c\u0456\u043d\u044e\u0432\u0430\u0432: ${e.editedBy}`)),t.print(),t.close())}}const g=e=>e.replace(/[A-Z]/g,e=>`_${e.toLowerCase()}`),M=e=>`<p style="font-size: 14px; color: #000; line-height: 1em">${e}</p>`;function N(e,t){1&e&&(c.Nb(0,"div"),c.Nb(1,"h4",37),c.nc(2,"\u041f\u0435\u0440\u0435\u0433\u043b\u044f\u0434 (\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043d\u043d\u044f) \u0442\u0432\u0430\u0440\u0438\u043d\u0438:"),c.Mb(),c.Nb(3,"label",38),c.nc(4,"id:"),c.Mb(),c.Jb(5,"input",39),c.Mb())}function A(e,t){1&e&&(c.Nb(0,"div"),c.Nb(1,"h4",37),c.nc(2,"\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u043d\u043e\u0432\u043e\u0457 \u0442\u0432\u0430\u0440\u0438\u043d\u0438:"),c.Mb(),c.Mb())}function v(e,t){if(1&e){const e=c.Ob();c.Nb(0,"button",35),c.Ub("click",function(){return c.ic(e),c.Yb().submitEditAnimal()}),c.nc(1,"\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u0437\u043c\u0456\u043d\u0438 "),c.Mb()}if(2&e){const e=c.Yb();c.bc("disabled",e.form.invalid)}}function w(e,t){if(1&e){const e=c.Ob();c.Nb(0,"button",35),c.Ub("click",function(){return c.ic(e),c.Yb().submitAddAnimal()}),c.nc(1,"\u0414\u043e\u0434\u0430\u0442\u0438 \u0442\u0432\u0430\u0440\u0438\u043d\u0443 "),c.Mb()}if(2&e){const e=c.Yb();c.bc("disabled",e.form.invalid)}}function C(e,t){if(1&e&&(c.Nb(0,"div",3),c.Nb(1,"label",40),c.nc(2,"\u0414\u0430\u0442\u0430 \u043e\u0441\u0442\u0430\u043d\u043d\u044c\u043e\u0433\u043e \u0440\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043d\u043d\u044f:"),c.Mb(),c.Jb(3,"input",41),c.Mb()),2&e){const e=c.Yb();c.yb(3),c.cc("value",e.adminAnimalDetails.updatedAt)}}function P(e,t){if(1&e&&(c.Nb(0,"div",3),c.Nb(1,"label",42),c.nc(2,"\u0422\u0432\u0430\u0440\u0438\u043d\u0430 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u0442\u0432\u0430\u0440\u0438\u043d\u0438:"),c.Mb(),c.Jb(3,"input",43),c.Mb()),2&e){const e=c.Yb();c.yb(3),c.cc("value",e.adminAnimalDetails.createdAt)}}function F(e,t){if(1&e&&(c.Nb(0,"div",3),c.Nb(1,"label",44),c.nc(2,"\u041e\u0441\u0442\u0430\u043d\u043d\u0456 \u0437\u043c\u0456\u043d\u0438 \u0432\u043d\u0435\u0441\u0435\u043d\u0456 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0435\u043c:"),c.Mb(),c.Jb(3,"input",45),c.Mb()),2&e){const e=c.Yb();c.yb(3),c.cc("value",e.adminAnimalDetails.editedBy)}}class R{constructor(){this.age=0,this.animalHasFamily=!1,this.breed="",this.color="",this.complexVaccination=!1,this.createdAt="",this.editedBy="",this.features="",this.id="",this.imageUrl="",this.name="",this.rabiesVaccination=!1,this.responsiblePerson="",this.sex="",this.showInGallery=!1,this.sterilization=!1,this.updatedAt=""}}let k=(()=>{class e{constructor(e,t,i,n,a){this.httpClient=e,this.activatedRouter=t,this.router=i,this.userAuthService=n,this.formBuilder=a,this.animalsChangePermission=this.userAuthService.getUser().permissionForAddEditAndRemoveAnimals,this.adminAnimalDetails=new R,this.formWasChanged=!1,this.imagePreview="",this.form=this.formBuilder.group({id:new h.d(""),name:new h.d(""),age:new h.d(0),breed:new h.d(""),sex:new h.d(""),color:new h.d(""),features:new h.d(""),responsiblePerson:new h.d(""),complexVaccination:new h.d(!1),rabiesVaccination:new h.d(!1),sterilization:new h.d(!1),animalHasFamily:new h.d(!1),showInGallery:new h.d(!1)}),this.getAnimal(t.snapshot.params.id),this.form.valueChanges.subscribe(e=>this.formWasChanged=!0)}getAnimal(e){e&&this.httpClient.get(`${l}/${e}`).subscribe(e=>{this.adminAnimalDetails=f.convertAnimalGetResponseToAdminAnimalDetails(e),this.form.setValue({id:this.adminAnimalDetails.id,name:this.adminAnimalDetails.name,age:this.adminAnimalDetails.age,breed:this.adminAnimalDetails.breed,sex:this.adminAnimalDetails.sex,color:this.adminAnimalDetails.color,features:this.adminAnimalDetails.features,responsiblePerson:this.adminAnimalDetails.responsiblePerson,complexVaccination:this.adminAnimalDetails.complexVaccination,rabiesVaccination:this.adminAnimalDetails.rabiesVaccination,sterilization:this.adminAnimalDetails.sterilization,animalHasFamily:this.adminAnimalDetails.animalHasFamily,showInGallery:this.adminAnimalDetails.showInGallery}),this.formWasChanged=!1})}formReadonlyFieldCheck(){return!this.animalsChangePermission}addPhoto(e){const t=e.target;if(!t.files)return;const i=t.files[0];p.readAsDataURL(i).subscribe(e=>{this.imagePreview=e.fileContent,this.loadedPhotoFile=i},e=>{alert("\u041d\u0435\u0432\u0434\u0430\u043b\u043e\u0441\u044f \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u0430\u0439\u043b: "+e)})}submitEditAnimal(){if(this.form.invalid)return void alert("\u0423 \u0444\u043e\u0440\u043c\u0456 \u0454 \u043f\u043e\u043c\u0438\u043b\u043a\u0438");const e=`${l}/${this.form.value.id}`,t=Object.assign(Object.assign({},this.form.value),{"image_attributes[file]":this.loadedPhotoFile||null}),i=f.convertAnimalPostPatchRequestToFormData(t);this.httpClient.patch(e,i).subscribe(()=>{this.getAnimal(this.form.value.id)},e=>this.submitErrorHandler(e))}submitAddAnimal(){if(this.form.invalid)return void alert("\u0423 \u0444\u043e\u0440\u043c\u0456 \u0454 \u043f\u043e\u043c\u0438\u043b\u043a\u0438");const e=Object.assign(Object.assign({},this.form.value),{"image_attributes[file]":this.loadedPhotoFile||null}),t=f.convertAnimalPostPatchRequestToFormData(e);this.httpClient.post(l,t).subscribe(e=>{this.router.navigateByUrl(`/admin/animals/${e.id}`)},e=>this.submitErrorHandler(e))}submitErrorHandler(e){alert("\u0421\u0442\u0430\u043b\u0430\u0441\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u0446\u0456 \u0444\u043e\u0440\u043c\u0438: "+e.message)}printAnimal(){f.convertToPdf(this.adminAnimalDetails)}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(r.b),c.Ib(a.a),c.Ib(a.b),c.Ib(b.a),c.Ib(h.c))},e.\u0275cmp=c.Cb({type:e,selectors:[["app-admin-animal-details"]],decls:63,vars:23,consts:[[1,"admin-details"],[3,"formGroup"],[4,"ngIf"],[1,"admin-details-form-field-container"],["for","name",1,"label"],["id","name","formControlName","name","type","text",1,"input",3,"readonly"],["for","age",1,"label"],["id","age","formControlName","age","type","number",1,"input",3,"readonly"],["for","breed",1,"label"],["id","breed","formControlName","breed","type","text",1,"input",3,"readonly"],["for","sex",1,"label"],["id","sex","formControlName","sex","type","text",1,"input",3,"readonly"],["for","color",1,"label"],["id","color","formControlName","color","type","text",1,"input",3,"readonly"],["for","features",1,"label"],["id","features","formControlName","features","type","text",1,"input","input--multiline",3,"readonly"],["for","responsiblePerson",1,"label"],["id","responsiblePerson","formControlName","responsiblePerson","type","text",1,"input","input--multiline",3,"readonly"],["for","imgUrl",1,"label"],["width","100%","alt","Image preview...",3,"src"],["id","imgUrl","type","file","accept","image/png,image/jpeg",1,"input",3,"readonly","change"],[1,"label","admin-details-form-field-container"],[1,"key-value-table-style"],["for","complexVaccination",1,"label"],["id","complexVaccination","formControlName","complexVaccination","type","checkbox",1,"input",3,"readonly"],["for","rabiesVaccination",1,"label"],["id","rabiesVaccination","formControlName","rabiesVaccination","type","checkbox",1,"input",3,"readonly"],["for","sterilization",1,"label"],["id","sterilization","formControlName","sterilization","type","checkbox",1,"input",3,"readonly"],["for","animalHasFamily",1,"label"],["id","animalHasFamily","formControlName","animalHasFamily","type","checkbox",1,"input",3,"readonly"],["for","showInGallery",1,"label"],["id","showInGallery","formControlName","showInGallery","type","checkbox",1,"input",3,"readonly"],[1,"buttons-container"],["class","button admin-details-form-field-submit-button","type","button",3,"disabled","click",4,"ngIf"],["type","button",1,"button","admin-details-form-field-submit-button",3,"disabled","click"],["class","admin-details-form-field-container",4,"ngIf"],[1,"caption"],["for","id",1,"label"],["id","id","formControlName","id","readonly","readonly",1,"input"],["for","dateLastEdit",1,"label"],["id","dateLastEdit","readonly","readonly",1,"input",3,"value"],["for","dateAdded",1,"label"],["id","dateAdded","readonly","readonly",1,"input",3,"value"],["for","editedBy",1,"label"],["id","editedBy","readonly","readonly",1,"input",3,"value"]],template:function(e,t){1&e&&(c.Nb(0,"div",0),c.Nb(1,"form",1),c.lc(2,N,6,0,"div",2),c.lc(3,A,3,0,"div",2),c.Nb(4,"div",3),c.Nb(5,"label",4),c.nc(6,"\u0406\u043c'\u044f:"),c.Mb(),c.Jb(7,"input",5),c.Mb(),c.Nb(8,"div",3),c.Nb(9,"label",6),c.nc(10,"\u0412\u0456\u043a:"),c.Mb(),c.Jb(11,"input",7),c.Mb(),c.Nb(12,"div",3),c.Nb(13,"label",8),c.nc(14,"\u041f\u043e\u0440\u043e\u0434\u0430:"),c.Mb(),c.Jb(15,"input",9),c.Mb(),c.Nb(16,"div",3),c.Nb(17,"label",10),c.nc(18,"\u0421\u0442\u0430\u0442\u044c:"),c.Mb(),c.Jb(19,"input",11),c.Mb(),c.Nb(20,"div",3),c.Nb(21,"label",12),c.nc(22,"\u041a\u043e\u043b\u0456\u0440:"),c.Mb(),c.Jb(23,"input",13),c.Mb(),c.Nb(24,"div",3),c.Nb(25,"label",14),c.nc(26,"\u041e\u0441\u043e\u0431\u043b\u0438\u0432\u043e\u0441\u0442\u0456:"),c.Mb(),c.Jb(27,"textarea",15),c.Mb(),c.Nb(28,"div",3),c.Nb(29,"label",16),c.nc(30,"\u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u043b\u044c\u043d\u0430 \u043f\u0435\u0440\u0441\u043e\u043d\u0430:"),c.Mb(),c.Jb(31,"textarea",17),c.Mb(),c.Nb(32,"div",3),c.Nb(33,"label",18),c.nc(34,"\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f:"),c.Mb(),c.Jb(35,"img",19),c.Nb(36,"input",20),c.Ub("change",function(e){return t.addPhoto(e)}),c.Mb(),c.Mb(),c.Nb(37,"p",21),c.nc(38,"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438 \u0442\u0432\u0430\u0440\u0438\u043d\u0438:"),c.Mb(),c.Nb(39,"section",22),c.Nb(40,"label",23),c.nc(41,"\u0412\u0430\u043a\u0446\u0438\u043d\u0430\u0446\u0456\u044f \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u043d\u0430:"),c.Mb(),c.Jb(42,"input",24),c.Nb(43,"label",25),c.nc(44,"\u0412\u0430\u043a\u0446\u0438\u043d\u0430\u0446\u0456\u044f \u0432\u0456\u0434 \u0441\u043a\u0430\u0437\u0443:"),c.Mb(),c.Jb(45,"input",26),c.Nb(46,"label",27),c.nc(47,"\u0422\u0432\u0430\u0440\u0438\u043d\u0430 \u0441\u0442\u0435\u0440\u0438\u043b\u0456\u0437\u043e\u0432\u0430\u043d\u0430:"),c.Mb(),c.Jb(48,"input",28),c.Nb(49,"label",29),c.nc(50,"\u0422\u0432\u0430\u0440\u0438\u043d\u0430 \u0432\u043b\u0430\u0448\u0442\u043e\u0432\u0430\u043d\u0430:"),c.Mb(),c.Jb(51,"input",30),c.Nb(52,"label",31),c.nc(53,"\u0412\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u0438 \u0432 \u0433\u0430\u043b\u0435\u0440\u0435\u0457:"),c.Mb(),c.Jb(54,"input",32),c.Mb(),c.Mb(),c.Nb(55,"div",33),c.lc(56,v,2,1,"button",34),c.lc(57,w,2,1,"button",34),c.Nb(58,"button",35),c.Ub("click",function(){return t.printAnimal()}),c.nc(59,"\u0414\u0440\u0443\u043a\u0443\u0432\u0430\u0442\u0438 "),c.Mb(),c.Mb(),c.lc(60,C,4,1,"div",36),c.lc(61,P,4,1,"div",36),c.lc(62,F,4,1,"div",36),c.Mb()),2&e&&(c.yb(1),c.bc("formGroup",t.form),c.yb(1),c.bc("ngIf",t.form.value.id),c.yb(1),c.bc("ngIf",!t.form.value.id),c.yb(4),c.bc("readonly",t.formReadonlyFieldCheck()),c.yb(4),c.bc("readonly",t.formReadonlyFieldCheck()),c.yb(4),c.bc("readonly",t.formReadonlyFieldCheck()),c.yb(4),c.bc("readonly",t.formReadonlyFieldCheck()),c.yb(4),c.bc("readonly",t.formReadonlyFieldCheck()),c.yb(4),c.bc("readonly",t.formReadonlyFieldCheck()),c.yb(4),c.bc("readonly",t.formReadonlyFieldCheck()),c.yb(4),c.cc("src",t.imagePreview||t.adminAnimalDetails.imageUrl,c.jc),c.yb(1),c.bc("readonly",t.formReadonlyFieldCheck()),c.yb(6),c.bc("readonly",t.formReadonlyFieldCheck()),c.yb(3),c.bc("readonly",t.formReadonlyFieldCheck()),c.yb(3),c.bc("readonly",t.formReadonlyFieldCheck()),c.yb(3),c.bc("readonly",t.formReadonlyFieldCheck()),c.yb(3),c.bc("readonly",t.formReadonlyFieldCheck()),c.yb(2),c.bc("ngIf",t.form.value.id&&t.animalsChangePermission),c.yb(1),c.bc("ngIf",!t.form.value.id&&t.animalsChangePermission),c.yb(1),c.bc("disabled",t.formWasChanged),c.yb(2),c.bc("ngIf",t.adminAnimalDetails.updatedAt),c.yb(1),c.bc("ngIf",t.adminAnimalDetails.updatedAt),c.yb(1),c.bc("ngIf",t.adminAnimalDetails.updatedAt))},directives:[h.o,h.j,h.g,n.j,h.b,h.i,h.f,h.l,h.a],styles:[".admin-details[_ngcontent-%COMP%]{padding-top:15px;margin:0 auto;max-width:600px}.admin-details-form-field-container[_ngcontent-%COMP%]{padding-top:10px;display:grid}.input--multiline[_ngcontent-%COMP%]{min-height:5em;height:auto}.caption[_ngcontent-%COMP%]{font-size:var(--default-component-font-size);font-weight:600;text-align:center}.buttons-container[_ngcontent-%COMP%]{display:grid;grid-auto-flow:column;max-width:600px}"]}),e})();function x(e,t){if(1&e){const e=c.Ob();c.Nb(0,"button",12),c.Ub("click",function(){c.ic(e);const t=c.Yb().$implicit;return c.Yb(2).closeAnimalFindRequest(t.id)}),c.nc(1,"\u0417\u0430\u043a\u0440\u0438\u0442\u0438 "),c.Mb()}}function I(e,t){if(1&e&&(c.Nb(0,"tr"),c.Nb(1,"td"),c.nc(2),c.Mb(),c.Nb(3,"td"),c.nc(4),c.Mb(),c.Nb(5,"td"),c.nc(6),c.Mb(),c.Nb(7,"td"),c.nc(8),c.Mb(),c.Nb(9,"td"),c.lc(10,x,2,0,"button",11),c.Mb(),c.Mb()),2&e){const e=t.$implicit;c.yb(2),c.oc(e.id),c.yb(2),c.oc(e.address),c.yb(2),c.oc(e.userCreatedId),c.yb(2),c.oc(e.openedData),c.yb(2),c.bc("ngIf",!e.userClosedId.toString())}}function D(e,t){if(1&e&&(c.Nb(0,"section"),c.Nb(1,"table",9),c.Nb(2,"tr"),c.Nb(3,"th"),c.nc(4,"id"),c.Mb(),c.Nb(5,"th"),c.nc(6,"\u0410\u0434\u0440\u0435\u0441\u0430"),c.Mb(),c.Nb(7,"th"),c.nc(8,"\u0421\u0442\u0432\u043e\u0440\u0438\u0432"),c.Mb(),c.Nb(9,"th"),c.nc(10,"\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u0430"),c.Mb(),c.Nb(11,"th"),c.nc(12,"\u0417\u0430\u043a\u0440\u0438\u0442\u0438"),c.Mb(),c.Mb(),c.lc(13,I,11,5,"tr",10),c.Mb(),c.Mb()),2&e){const e=c.Yb();c.yb(13),c.bc("ngForOf",e.animalRequestList)}}function q(e,t){if(1&e&&(c.Nb(0,"tr"),c.Nb(1,"td"),c.nc(2),c.Mb(),c.Nb(3,"td"),c.nc(4),c.Mb(),c.Nb(5,"td"),c.nc(6),c.Mb(),c.Nb(7,"td"),c.nc(8),c.Mb(),c.Nb(9,"td"),c.nc(10),c.Mb(),c.Nb(11,"td"),c.nc(12),c.Mb(),c.Mb()),2&e){const e=t.$implicit;c.yb(2),c.oc(e.id),c.yb(2),c.oc(e.address),c.yb(2),c.oc(e.userCreatedId),c.yb(2),c.oc(e.openedData),c.yb(2),c.oc(e.userClosedId),c.yb(2),c.oc(e.closedData)}}function _(e,t){if(1&e&&(c.Nb(0,"section"),c.Nb(1,"table",9),c.Nb(2,"tr"),c.Nb(3,"th"),c.nc(4,"id"),c.Mb(),c.Nb(5,"th"),c.nc(6,"\u0410\u0434\u0440\u0435\u0441\u0430"),c.Mb(),c.Nb(7,"th"),c.nc(8,"\u0421\u0442\u0432\u043e\u0440\u0438\u0432"),c.Mb(),c.Nb(9,"th"),c.nc(10,"\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u0430"),c.Mb(),c.Nb(11,"th"),c.nc(12,"\u0417\u0430\u043a\u0440\u0438\u0432"),c.Mb(),c.Nb(13,"th"),c.nc(14,"\u0417\u0430\u043a\u0440\u0438\u0442\u0430"),c.Mb(),c.Mb(),c.lc(15,q,13,6,"tr",10),c.Mb(),c.Mb()),2&e){const e=c.Yb();c.yb(15),c.bc("ngForOf",e.animalRequestList)}}const O=s.a.fakeApiUrl+"/animals-find-requests/",$="/admin/animals/find-requests";class U{constructor(){this.id="",this.address="",this.closedData="",this.openedData="",this.userClosedId="",this.userCreatedId=""}}const J=[{path:"list",component:m},{path:"add",component:k},{path:"find-requests",component:(()=>{class e{constructor(e,t,i,n){this.httpClient=e,this.userAuthService=t,this.activatedRoute=i,this.router=n,this.animalRequestList=[],this.newRequestAddress="",this.QueryFilterParamTypes={opened:{filter:"opened"},closed:{filter:"closed"}},this.currentQueryFilterParams=this.QueryFilterParamTypes.opened,this.pagination=new o.a,this.pagination.additionalParams=this.QueryFilterParamTypes.opened,this.pagination.url=$,this.querySubscription=this.activatedRoute.queryParams.subscribe(e=>{this.pagination.page=e.page||this.pagination.page,this.pagination.perPage=e.per_page||this.pagination.perPage,this.getAnimalsFindRequests()})}ngOnDestroy(){this.querySubscription.unsubscribe()}getAnimalsFindRequests(){const e=new r.f;e.append("filter",this.currentQueryFilterParams.filter),e.append("page",this.pagination.page.toString()),e.append("per_page",this.pagination.perPage.toString()),this.httpClient.get(O,{params:e}).subscribe(e=>{this.animalRequestList=e,this.pagination.totalPages=10})}closeAnimalFindRequest(e){const t=O+e,i=this.userAuthService.getUser().id,n=new r.e({"Content-Type":"application/json; charset=utf-8"});this.httpClient.patch(t,JSON.stringify({id:e,userClosedId:i}),{headers:n}).subscribe(()=>{this.router.navigate([$],{queryParams:this.currentQueryFilterParams})},e=>this.submitErrorHandler(e))}createAnimalFindRequest(){const e=new U;e.address=this.newRequestAddress,e.userCreatedId=this.userAuthService.getUser().id;const t=new r.e({"Content-Type":"application/json; charset=utf-8"});this.httpClient.post(O,JSON.stringify(e),{headers:t}).subscribe(()=>{this.getAnimalsFindRequests(),this.newRequestAddress=""},e=>this.submitErrorHandler(e))}changeQueryFilterParams(e){this.currentQueryFilterParams=e,this.pagination.additionalParams=e,this.router.navigate([$],{queryParams:this.currentQueryFilterParams})}submitErrorHandler(e){alert("\u0421\u0442\u0430\u043b\u0430\u0441\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u0446\u0456 \u0444\u043e\u0440\u043c\u0438: "+e.message)}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(r.b),c.Ib(b.a),c.Ib(a.a),c.Ib(a.b))},e.\u0275cmp=c.Cb({type:e,selectors:[["app-admin-animals-find-requests"]],decls:15,vars:9,consts:[[1,"root-container"],[1,"new-request-section"],["for","address-input",1,"label"],["id","address-input","type","text",1,"input",3,"ngModel","ngModelChange"],["type","button",1,"button",3,"disabled","click"],[1,"two-buttons-container"],[1,"button",3,"click"],[4,"ngIf"],[3,"pagination"],[1,"table"],[4,"ngFor","ngForOf"],["class","button center-button",3,"click",4,"ngIf"],[1,"button","center-button",3,"click"]],template:function(e,t){1&e&&(c.Nb(0,"div",0),c.Nb(1,"section",1),c.Nb(2,"label",2),c.nc(3,"\u0410\u0434\u0440\u0435\u0441\u0430: "),c.Mb(),c.Nb(4,"input",3),c.Ub("ngModelChange",function(e){return t.newRequestAddress=e}),c.Mb(),c.Nb(5,"button",4),c.Ub("click",function(){return t.createAnimalFindRequest()}),c.nc(6,"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u0437\u0430\u044f\u0432\u043a\u0443 "),c.Mb(),c.Mb(),c.Nb(7,"div",5),c.Nb(8,"button",6),c.Ub("click",function(){return t.changeQueryFilterParams(t.QueryFilterParamTypes.opened)}),c.nc(9,"\u0412\u0456\u0434\u043a\u0440\u0438\u0442\u0456 "),c.Mb(),c.Nb(10,"button",6),c.Ub("click",function(){return t.changeQueryFilterParams(t.QueryFilterParamTypes.closed)}),c.nc(11,"\u0417\u0430\u043a\u0440\u0438\u0442\u0456 "),c.Mb(),c.Mb(),c.lc(12,D,14,1,"section",7),c.lc(13,_,16,1,"section",7),c.Jb(14,"app-pagination",8),c.Mb()),2&e&&(c.yb(4),c.bc("ngModel",t.newRequestAddress),c.yb(1),c.bc("disabled",!t.newRequestAddress),c.yb(3),c.Ab("not-selected-button",t.currentQueryFilterParams===t.QueryFilterParamTypes.closed),c.yb(2),c.Ab("not-selected-button",t.currentQueryFilterParams===t.QueryFilterParamTypes.opened),c.yb(2),c.bc("ngIf",t.currentQueryFilterParams===t.QueryFilterParamTypes.opened),c.yb(1),c.bc("ngIf",t.currentQueryFilterParams===t.QueryFilterParamTypes.closed),c.yb(1),c.bc("pagination",t.pagination))},directives:[h.b,h.i,h.k,n.j,o.b,n.i],styles:[".root-container[_ngcontent-%COMP%]{padding:10px;display:grid;grid-gap:25px}.new-request-section[_ngcontent-%COMP%]{justify-content:left;align-content:center}.new-request-section[_ngcontent-%COMP%], .two-buttons-container[_ngcontent-%COMP%]{display:grid;grid-auto-flow:column}.not-selected-button[_ngcontent-%COMP%]{border-color:rgb(var(--default-component-background-color));background-color:#fff;color:#000}.center-button[_ngcontent-%COMP%]{margin:0 auto}"]}),e})()},{path:":id",component:k},{path:"",redirectTo:"list"}];var L=i("FpXt");let V=(()=>{class e{}return e.\u0275mod=c.Gb({type:e}),e.\u0275inj=c.Fb({factory:function(t){return new(t||e)},imports:[[n.b,a.e.forChild(J),h.h,L.a,h.m]]}),e})()}}]);