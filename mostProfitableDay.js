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
 