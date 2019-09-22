export class Blog{
    public title: string;
    public img: string;
    public desc: string;
    public date: string;
    public author: string;
    public intro: string;
    constructor(title:string,img: string ,desc: string, date: string, author: string, intro: string ){
        this.title=title;
        this.img=img;
        this.desc=desc;
        this.date= date;
        this.author=author;
        this.intro=intro;

    }

}
