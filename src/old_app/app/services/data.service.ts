


export class DataService{
private message = '';
private messageType = "danger";


error(message){
 this.messageType = "danger";   
 this.message = message;
}

success(message){
this.messageType = "success";
this.message = message;
}

warning(message){
this.messageType = "warning";    
this.message = message;
}
}