Instalación en Mac:

Lo imprescindible de esta aplicación es la instalación de NodeJS, se puede descargar a través de su página web: https://nodejs.org/es/, GIT y el uso de Visual Studio Code, aunque este último no es totalmente necesario.
Una vez descargado e instalado, se abre Visual Studio Code y se abre un terminal.


El primer paso para hacer que funcione es ejecutar este script "cd backend && npm install  && cd ../frontend && npm install && npm run build" que sirve para crear la “build” que es la aplicación acabada y es la carpeta que se usará en producción. Pero a su vez instala todas las dependencias y paquetes necesarios y que se usan en el backend y el frontend.

Con esto ya se puede avanzar al último paso, que sería entrar en la carpeta de frontend y backend y ejecutar el comando “npm start” para iniciar la aplicación.


Instalación Windows:
Se tiene que instalar NodeJS, se puede descargar a través de su página web: https://nodejs.org/es/, GIT y Visual Studio Code, aunque es por la comodidad de tener el terminal de Git Bash junto con el código.
Desde el terminal se ejecuta este script "cd backend && npm install  && cd ../frontend && npm install && npm run build", sin embargo puede dar un error de dependencias. Por lo tanto primero se ejecuta este script "cd backend && npm install" y una vez ejecutado este, cambiar a la carpeta de frontend. En esta carpeta se debe ejecutar este script "npm install --legacy-peer-deps", lo que hace es obviar los conflictos que puedan haber entre las dependecias e instalar todos los paquetes. Este último paso (en mi caso duro casi 20 min de espera) puede tardar cierto tiempo.

Una vez con todo instalado solo queda entrar en ambas carpetas y ejecutar "npm start" para iniciar la aplicación


IMPORTANTE: Si se quiere cambiar la base de datos, se tiene que cambiar desde el archivo .env