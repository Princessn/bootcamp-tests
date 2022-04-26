function transportFee(price){
    var shift1 = 'morning';
    var shift2 = 'afternoon';
    var shift3 = 'nightshift';
      
      if(shift1.includes(price)){
      return 'R20'}
      
      else if(shift2.includes(price)){
      return 'R10'}
      
      else if(shift3.includes(price)){
      return 'free'
      }
    }