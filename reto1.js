function wrapping(gifts) {
    let wrapped = [];
    gifts.forEach(function(value) {
      let len = value.length + 2;    
      let gift = "\n*"+value+"*\n";
      let startEnd = "*".repeat(len);node 
      
      let wrap = startEnd + gift + startEnd;    
      wrapped.push(wrap);       
    })
    return wrapped;
  }
  