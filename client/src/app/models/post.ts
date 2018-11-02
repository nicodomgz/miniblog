export class Post{

    constructor(
        private title: string,
        private description: string
    ){};

    public getTitle():string{
        return this.title;
    }
}