import serverCompress from './servers/serverCompress.js';
import ServerNormal from './servers/serverNormal.js';

serverCompress.listen(3000, () =>
  console.log(`Servidor Compress escuchando en puerto 3000`)
);

ServerNormal.listen(4000, () =>
  console.log(`Servidor Normal escuchando en puerto 4000`)
);