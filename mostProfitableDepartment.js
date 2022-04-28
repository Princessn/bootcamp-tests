function mostProfitableDepartment(dataList){
   var salesMap = {};
    for(var i = 0; i < dataList.length;i++){
     var salesList = dataList[i];
      var deptName = salesList.department
      var salesNumbers = salesList.sales
      if(salesMap[deptName] === undefined){
          salesMap[deptName] = salesNumbers;
         
          }
          else{
             salesMap[deptName] += salesNumbers; 
          } 
           var currentMaxVal = 0;
         var currentDept = '';
         for(var depts in salesMap){
            var currentSales = salesMap[depts]
            if(currentSales > currentMaxVal ){
               currentMaxVal = currentSales;
                currentDept = depts
            }
            
           }
    
    
    }
   return currentDept
  }

  function mostProfitableDay(salesData){
   var deptMap = {};
   for(var i = 0; i < salesData.length; i++){
     const dept = salesData[i];
     deptMap[dept.day] = 0;
   }
   
   console.log(deptMap);
   
   for(var i = 0; i < salesData.length; i++){
     const dept = salesData[i];
     var currDeptTotal = deptMap[dept.day]
     deptMap[dept.day] += dept.sales;
   }
   var highestValue = 0;
   var currentDay = '';
   for(var dept in deptMap){
   var currValue = deptMap[dept];
   if(currValue > highestValue){
     highestValue = currValue;
     currentDay = dept;
    }
   }
   return currentDay;
 }


 
