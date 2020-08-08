


function createCertificate() {
  // Certificate Number
  let number = 0;
  // Campos
  const nombre = document.querySelector('#nombre');
  const apellido = document.querySelector('#apellido');
  const dni = document.querySelector('#dni');
  const dni_confirm = document.querySelector('#dni_confirm');
  const nro_tramite = document.querySelector('#nro_tramite');
  const nro_tramite_confirm = document.querySelector('#nro_tramite_confirm');
  const genero = document.querySelector('#genero');
  const cuil = document.querySelector('#cuil');
  const cel_cod_area = document.querySelector('#cel_cod_area');
  const cel_number = document.querySelector('#cel_numero');
  const email = document.querySelector('#email');
  const email_confirm = document.querySelector('#email_confirm');
  const direccion = document.querySelector('#domicilio_domicilio');
  const piso_depto = document.querySelector('#domicilio_domicilio_info_adicional');
  const cod_postal = document.querySelector('#domicilio_cod_postal');
  const provincia = document.querySelector('#domicilio_provincia_iso');
  const provincia_code = {
    "Gran Buenos Aires": "AR-1",
    "Buenos Aires": "AR-B",
    "Catamarca": "AR-K",
    "Chaco": "AR-H",
    "Chubut": "AR-U",
    "Ciudad Autonoma de Buenos Aires": "AR-C",
    "Cordoba": "AR-X",
    "Corrientes": "AR-W",
    "Entre Rios": "AR-E",
    "Formosa": "AR-P",
    "Jujuy": "AR-Y",
    "La Pampa": "AR-L",
    "La Rioja": "AR-F",
    "Mendoza": "AR-M",
    "Misiones": "AR-N",
    "Neuquen": "AR-Q",
    "Rio Negro": "AR-R",
    "Salta": "AR-A",
    "San Juan": "AR-J",
    "San Luis": "AR-D",
    "Santa Cruz": "AR-Z",
    "Santa Fe": "AR-S",
    "Santiago del Estero": "AR-G",
    "Tierra del Fuego": "AR-V",
    "Tucuman": "AR-T"
  }
  const localidad = document.querySelector('#domicilio_localidad');
  const patente_vehiculo = document.querySelector('#patente_vehiculo');
  const asistido_domicilio_domicilio = document.querySelector('#asistido_domicilio_domicilio');
  const asistido_domicilio_localidad = document.querySelector('#asistido_domicilio_localidad');
  const asistido_domicilio_cod_postal = document.querySelector('#asistido_domicilio_cod_postal');
  const asistido_domicilio_provincia_iso = document.querySelector('#asistido_domicilio_provincia_iso');
  const integrantes_0_nombre_completo = document.querySelector("[name='integrantes[0][nombre_completo]'");
  const integrantes_0_dni = document.querySelector("[name='integrantes[0][dni]'");
  const integrantes_0_sexo = document.querySelector("[name='integrantes[0][sexo]'");

  chrome.storage.sync.get('certificates', function(data) {
    nombre.value = data.certificates[number][0];
    apellido.value = data.certificates[number][1];
    dni.value = data.certificates[number][2];
    dni_confirm.value = data.certificates[number][2];
    nro_tramite.value = data.certificates[number][3];
    nro_tramite_confirm.value = data.certificates[number][3];
    genero.value = data.certificates[number][4];
    cuil.value = data.certificates[number][5];
    cel_cod_area.value = data.certificates[number][6];
    cel_number.value = data.certificates[number][7];
    email.value = data.certificates[number][8];
    email_confirm.value = data.certificates[number][8];
    direccion.value = data.certificates[number][9];
    piso_depto.value = data.certificates[number][10];
    cod_postal.value = data.certificates[number][11];
    provincia.value = provincia_code[data.certificates[number][12]];
    localidad.value = data.certificates[number][13];
    patente_vehiculo.value = data.certificates[number][14];
    asistido_domicilio_domicilio.value = data.certificates[number][15];
    asistido_domicilio_cod_postal.value = data.certificates[number][16];
    asistido_domicilio_provincia_iso.value = provincia_code[data.certificates[number][17]];
    asistido_domicilio_localidad.value = data.certificates[number][18];
    integrantes_0_nombre_completo.value = data.certificates[number][19];
    integrantes_0_dni.value = data.certificates[number][20];
    integrantes_0_sexo.value = data.certificates[number][21];
  });
}

createCertificate();

