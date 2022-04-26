function fromWhere(regNo){
    var town1 = 'CY';
    var town2 = 'CJ';
    var town3 = 'CA';
    var town4 = 'CC';
      
     if (town1.includes(regNo)){
     return 'Bellville'}
      
      else if(town2.includes(regNo)){
      return 'Paarl'}
      
      else if(town3.includes(regNo)){
      return 'Cape Town'}
      
      else if(town4.includes(regNo)){
      return 'Some other place!'}
    }