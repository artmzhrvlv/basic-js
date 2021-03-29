const CustomError = require("../extensions/custom-error");
module.exports = function transform(matrix) {
    transformed = [];
    if (!Array.isArray(matrix)) throw new Error();
    for (let i = 0; i < matrix.length; i++) {
        switch (matrix[i]) {
          case "--double-next":  
            { if (i != matrix.length - 1) {
              transformed.push(matrix[i + 1]);
              }
              break;
            }
          case "--double-prev":
            {  
              if (matrix[i - 2] != "--discard-next" && i != 0)  transformed.push(matrix[i - 1]);
              break;
            }
          case "--discard-prev":
            {  
              if (matrix[i - 2] != "--discard-next" && i != 0) transformed.pop(); 
              break;
            }  
          case "--discard-next":
            {
              if (i != matrix.length - 1) i++;
              break;
            }
          default: { 
            transformed.push(matrix[i]);
          }      
      }
    }
    return transformed;
};
