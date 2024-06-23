# Trabajo Unidad 3B - Dispositivos Moviles
Este proyecto es para el trabajo de la unidad 3B de Dispositivos Moviles. El objetivo es crear el "cascaron" de la aplicación considerando su navegación.

![mapa conceptual](https://github.com/Teregan/MyPediatricU3/blob/main/Mapa%20Navegaci%C3%B3n.png?raw=true)

# Descripción
 El desarrollo de la aplicación se hizo con ionic con angular, en esta se realizo el esquelo de la aplicación navegando entre las pantallas.

# Dificultades
 La verdad, muchas dificultades, ya que nunca había trabajado con ionic. Seguí los pasos de la documentación de ionic para poder desarrollar lo solicitado https://ionicframework.com/docs/
Otra dificultad fue que al ejecutar el proyecto, tenía un error :
***ionic : No se puede cargar el archivo C:\Users\luisr\AppData\Roaming\npm\ionic.ps1 porque la ejecución de scripts está deshabilitada en este sistema. Para obtener más información, consulta el   
tema about_Execution_Policies en https:/go.microsoft.com/fwlink/?LinkID=135170.***

Para poder solucionar el problema, se debe ejecutar el powershell como administrador y ejecutar el comando ```Set-ExecutionPolicy Unrestricted```, con este comando pude ejecutar el ```ionic serve``` para ejecutar el proyecto

# Instalación
Primero instalamos node, un intérprete de código, en mi caso la versión 20.13.1
https://nodejs.org/dist/v20.13.1/node-v20.13.1-x64.msi

Para el editor de código, en mi caso utilice visual studio code
https://code.visualstudio.com/docs/?dv=win64user

Luego seguimos la instalación de ionic, para ello seguimos la documentación 
https://ionicframework.com/docs/intro/cli

Ejecutamos el siguiente comando en la consola de Windows
```npm install -g```

Después clonamos el proyecto en visual studio code y ejecutamos ```ionic serve``` para ejectar el poryecto.
