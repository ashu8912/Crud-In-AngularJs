(function(){
function crudController(scope,crudOperations,localStorage){
let id=" ";
let name=" ";
let url=" ";
scope.items=crudOperations.itemList;
scope.addItem=function(){
id=scope.id;
 name=scope.name;
 url=scope.url;
    itemObject=new Item(id,name,url);
    scope.items=crudOperations.itemList;
crudOperations.addItem(itemObject);
console.log(crudOperations.itemList);
scope.id="";
scope.url="";
scope.name="";
}
scope.toggle=function(item){
crudOperations.toggleMarkForDelete(item.id);
    console.log(item);
}
scope.deleteSelectedItems=function(){
crudOperations.delete();
scope.items=crudOperations.itemList;
}
scope.saveWork=function(){
// console.log(localStorage);
localStorage.myData=JSON.stringify(crudOperations.itemList);
console.log(localStorage)
}
scope.load=function(){
    let data=JSON.parse(localStorage.myData);
    if(data.length!==0)
    {data.forEach(item=>{
      let id=item.id;
      let name=item.name;
      let ur=item.url;
      itemObject=new Item(id,name,url)  
        crudOperations.addItem(itemObject);
    
    })
    scope.items=crudOperations.itemList;
}
    
}
scope.sort=function(){
    scope.sortById="id"
}
}
crudController.$inject=["$scope","crudFactory","$localStorage"];
    angular.module("crud-app").controller("crud-controller",crudController);
}())