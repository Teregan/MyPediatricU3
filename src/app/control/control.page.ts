import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder';

@Component({
  selector: 'app-control',
  templateUrl: './control.page.html',
  styleUrls: ['./control.page.scss'],
})
export class ControlPage implements OnInit {

  constructor() { }

  ngOnInit() {
    Camera.requestPermissions();
  }
  async location(){
    const coordenadas  = await Geolocation.getCurrentPosition();
    this.getCity(coordenadas.coords.latitude, coordenadas.coords.longitude)
    console.log("coordenadas ", coordenadas.coords);
  }
  getCity(latitud: any, logitud: any){
    let option: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    NativeGeocoder.reverseGeocode(latitud, logitud, option)
    .then((result: NativeGeocoderResult[]) =>
     this.saveCity(result)
  )
  .catch((error: any) =>
   "error");
    
  }
  saveCity(result: any){
    console.log(JSON.stringify(result[0].location))

  }
  takePhoto(){
    const takePicture = async () => {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera
      });
    
      // image.webPath will contain a path that can be set as an image src.
      // You can access the original file using image.path, which can be
      // passed to the Filesystem API to read the raw data of the image,
      // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
      var imageUrl = image.webPath;
    
      // Can be set to the src of an image now
      //imageElement.src = imageUrl;
    };

  }

}
