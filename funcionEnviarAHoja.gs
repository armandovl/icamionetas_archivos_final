// funcion pegar en una hoja
function hacerClick(paramCom){
  
  //llamar la hoja
  var ss=SpreadsheetApp.openById("1xcUv5ub0-yXJzIv_7dr9njT8t5nPVPzRTANiPpdeJF0");  
  var ws= ss.getSheetByName('Sheet1');
  
  ws.appendRow([new Date(),

  paramCom.nombre1,paramCom.nombre2,paramCom.nombre3,paramCom.nombre4,
  paramCom.nombre5,paramCom.nombre6,paramCom.nombre7,paramCom.nombre8,
  paramCom.nombre9,paramCom.nombre10,paramCom.nombre11,paramCom.nombreR /********* cambio  */

  ]); //aniade una columna /*importante ver como se llaman
}





