
function buscarPorParametro(parametroSerie){
  var ss= SpreadsheetApp.openById("1Z00u7Gr6ljWaWTilSFxxaM6S11fJlx2xyIgN4yKZjhg"); //traer la SpreadSheet por su ID
  var sheet= ss.getSheetByName("Hoja 1"); // traer la hoja por su nombre
  var values= sheet.getSheetValues(1,1,sheet.getLastRow(),sheet.getLastColumn()); //traer los valores (fila, columna, alto, ancho)

  //console.log(values);

 

  for(i=0;i<=values.length-1;i++){ // ciclo for que recorre los valores
    if (parametroSerie==values[i][7]){ //busca que coincida el nombre con la columna 7

      var territorioEnviar= values[i][1]; //imprime el correo
      var marcaEnviar=values[i][3];  //imprime la escolaridad
      var submarcaEnviar=values[i][4]; //imprime la ciudad
      var placaEnviar=values[i][8]; //imprime la ciudad
      var resguardanteEnviar=values[i][11]; /************cambio */
    }
  }

  return [territorioEnviar,marcaEnviar,submarcaEnviar,placaEnviar,resguardanteEnviar] ;
}