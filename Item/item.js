class Item{
    constructor(id,name,url)
    {
        this.id=id;
        this.name=name;
        this.url=url;
        this.markForDelete=false;
    }
    toggle(){
        this.markForDelete=!this.markForDelete;
    }
}