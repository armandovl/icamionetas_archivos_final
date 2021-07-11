function subiendoArchivos(parametroa) {

  var folder = DriveApp.getFolderById("1372EBJoBokz2P2LXyJIm6np05-fK7oDy");
  
  /******************************  Crear Folders ***************************************** */

  //Aqui le decimos que se cree una carpeta llamada fotos de presas  
  try {
    
    var nombreSubfolder = parametroa.territorio2;
    var folder, folders = folder.getFoldersByName(nombreSubfolder);
    
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = folder.createFolder(nombreSubfolder);
    }

    


    /*************ver si se puede repetir para hacer un segundo folder********** */
    var folder, folders = folder.getFoldersByName(parametroa.territorio2+ "-" +parametroa.serie);

    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = folder.createFolder(parametroa.territorio2+ "-" +parametroa.serie);
    }


    /******************************************* */

    
  } catch (f) {
    
    
  }
  



    var archivo1 = parametroa.comprobanteDomicilioArchivo;    
    var archivoCreado1 = folder.createFile(archivo1);
    archivoCreado1.setName(parametroa.territorio2 + "-" + parametroa.serie + "-Comprobante_Domicilio");

    var archivo2 = parametroa.credencialElectorArchivo;    
    var archivoCreado2 = folder.createFile(archivo2);
    archivoCreado2.setName(parametroa.territorio2 + "-" + parametroa.serie + "-Credencial_Elector");

    var archivo3 = parametroa.licenciaArchivo;    
    var archivoCreado3 = folder.createFile(archivo3);
    archivoCreado3.setName(parametroa.territorio2 + "-" + parametroa.serie + "-Licencia_Conducir");

    var archivo4 = parametroa.resguardoMonederoArchivo;    
    var archivoCreado4 = folder.createFile(archivo4);
    archivoCreado4.setName(parametroa.territorio2 + "-" + parametroa.serie + "-Resguardo_Monedero");

    var archivo5 = parametroa.tarjetaCirculacionArchivo;    
    var archivoCreado5 = folder.createFile(archivo5);
    archivoCreado5.setName(parametroa.territorio2 + "-" + parametroa.serie + "-Tarjeta_Circulación");

    var archivo6 = parametroa.polizaArchivo;    
    var archivoCreado6 = folder.createFile(archivo6);
    archivoCreado6.setName(parametroa.territorio2 + "-" + parametroa.serie + "-Poliza_Seguro");

    var archivo7 = parametroa.resguardoCarroArchivo;    
    var archivoCreado7 = folder.createFile(archivo7);
    archivoCreado7.setName(parametroa.territorio2 + "-" + parametroa.serie + "-Resguardo_Vehículo");

  return f.toString();
};