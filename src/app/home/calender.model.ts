export class Calender{
    public event: string;
    public img: string;
    public desc: string;
    public time: string;
    public month: string;
    public day: string;

    constructor(event:string,img: string ,desc: string, time: string, month: string, day: string,  ){
        this.event=event ;
        this.img=img;
        this.desc=desc;
        this.time=time;
        this.month=month;
        this.day=day;
        
    }

}
