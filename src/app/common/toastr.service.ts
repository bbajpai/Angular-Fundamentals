import {Injectable} from "@angular/core";

declare let toastr:any;
@Injectable()
export class ToastrService{

    success(message:string, title?:string){
        toastr.success(message,title);
    }
    info(title:string, message:string){
        toastr.info(title,message);
    }
    warning(title:string, message:string){
        toastr.warning(title,message);
    }
    danger(title:string, message:string){
        toastr.danger(title,message);
    }
}