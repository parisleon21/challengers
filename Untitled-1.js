//subcadena de ventana minima

/*hacer  que la funcion MinWindowSubstring contenga la matriz de cadenas 
almacenadas dentro de strArr la cual contendra solo dos cadenas N y K se debe encontrar 
la subcadena mas pequeña, y esta es la que debe devolver, las cadenas pueden contener una
longitud de entre 1 a 50 caracteres  y todos los caracteres de K deben de estar dentro de N 
y solo contendran caracteres alfabeticos. */

function MinWindowSubstring(strArr){
    let str= strArr[0];
    let needle = strArr[1].split('');
    /* aqui declare que str stendra el valor de strArr el cual tiene el parametro
    de valor 0, luego hice lo mismo con needle pero esta vez tien un parametro de valor 1 y
    ademas acepta letras lo cual lo indique con ('') */
}
  for (let i = needle.length, len = str.length; i <= len; i++ ) {

      /*aqui indique que i sera igual a needle y len sera str y que si needle es igual o mayor 
      que str se le contara uno mas */

      for (j = 0; j <= len - i; j++) {

          /* aca asigno que j sera igual a 0 por lo que si j es igual o mayor que len (str) 
          menos i (needle) se le sumara uno a j*/

          let mySlice = str.substr(j, i);
          /*aqui declaro una nueva variable y lo que asigno es que mySlince tendra el valor de 
          j y i*/

          if (isContained(mySlice)) {
            return mySlice;
        }
    }
}
return 'Not in string';

/* aca se pone la condicio de que si mySlice es decir str lo cuales igual a strArr[0]
contiene el valor de j o i se retorne la oracion not in string*/
function isContained(str) {
    let arr = str.split('');
    for (let i = 0, len = needle.length; i < len; i++) {
        let place = arr.findIndex(val => {
            return val === needle[i]
        });
        /* aca se le indica que  la funcion isContained tiene el valor de str
        y dice que i es igual a 0, len contiene el valor de needle.length y se pone el parametro 
        de que si i es decir 0 es mayor a len es decir needle 

        let place = arr.findIndex(val => {
            return val === needle[i]           esta parte de el codigo no la entendi
        });
  }