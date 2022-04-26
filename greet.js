function greet(name) {
  if (name===''){
    return "error";
  }
  else if(name=== Number(name)){
    return "error"
  }
  return "Hello, " + name;
  
}

//