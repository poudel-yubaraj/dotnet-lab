import add from "./add.js";         
import multiply from "./multiply.js"; 
function combine() {
    let c = add(2, 3);     
    let d = multiply(2, 3); 
    console.log(` result ${c+d}`);    
}

combine();
