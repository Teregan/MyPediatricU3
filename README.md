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

# Entrega a
para utilizar conmplementos como la camara o notificación, debemos instalar capacitor, para esto, primero ejecutamos el comando

```npm run build```

luego la instalación de capacitor core

```npm install --save @capacitor/core```

Ahora instalamos el complemento para utilizar la cámara.
```ionic build```

```npm install @capacitor/camera```

```npx cap sync```

Como estaba siguiendo la documentación, no tenía el archivo AndroidManifest.xml ni la carpeta android, para eso utilice el siguiente comando 
```ionic capacitor sync android```

Instalando la geolocalización
```npm install @capacitor/geolocation```


```npm install cordova-plugin-nativegeocoder ```
```npm install @awesome-cordova-plugins/native-geocoder ```
con ello sacamos la ciudad en base a la latitud y longitud.

# Entrega b
al crear el apk tuve algunos problemas, promero ejecuta ```ionic capacitor copy android```, luego nos movemos a la carpeta android ```cd android```
y luego ```.\gradlew assembleDebug```. Aquí tuve un problema ya que en mi equipo tenía java 11 y necesitaba java 17, por lo que no pude generar la apk directamente desde vb code a si que tuve que arbir android studio con ```ionic build``` y luego ```npx cap open android```. 

De igual forma al intentar ejecutar tenía un error de incopatibilidad de versión. Así que tuve que modificar el build.gradle, tenia el número de versión 8.2.1 y lo tuve que dejar así "*com.android.tools.build:gradle:8.1.2*"
Con esto ya pude generar la apk del proyecto.

La apk sin firmar quedó en la carpeta apk.