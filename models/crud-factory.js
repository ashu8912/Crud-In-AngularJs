(function(){
        function crudFactory(){
           const object={
            itemList:[],
            addItem(itemObject){
                if(this.searchElementById(itemObject.id).length===1)
                {
                    return;
                }
                this.itemList.push(itemObject)
            },
            toggleMarkForDelete(id){
            this.searchElementById(id)[0].toggle();
        // console.log(this.searchElementById(id));    
        },
            searchElementById(id){
            return this.itemList.filter((item)=>item.id===id)
            },
      delete(){
this.itemList=this.itemList.filter(item=>!item.markForDelete);
console.log(this.itemList);         
}
           }
           return object;
        }
        angular.module("crud-app").factory("crudFactory",crudFactory)
    }())