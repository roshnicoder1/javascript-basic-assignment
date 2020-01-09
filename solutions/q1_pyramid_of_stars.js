/* Write a program to build a `Pyramid of stars` of given height */


     // Write your code here
const buildPyramid = (value) => {
          var str = "";
          temp = value;
          for ( let i = 0; i < value; i++){
               for( let j = temp; j >0 ; j--){
                    str = str.concat(" ");
               }
               str = str.concat("*");
               temp2 = value-temp;
               while( temp2 >= 1){
                    str = str.concat(" *");
                    temp2--;
               }
               str = str.concat("  \n");
               temp = temp-1;
          }
          return str;
};

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
