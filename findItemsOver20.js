function findItemsOver20(list){
    var listArray =[];
      for(var i =0; i < list.length; i++){
      if(list[i].qty>20){
      listArray.push(list[i]);
      
      }
      }
    return listArray
    }
    
    function findItemsOver(list,threshold){
    var listArr = [];
      for(var i =0; i <list.length; i++){
      if(list[i].qty>threshold){
      listArr.push(list[i]);
      }
      }
        return listArr;
    }