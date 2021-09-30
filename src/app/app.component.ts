import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    public currentStream: any;

  ngOnInit(): void{
    this.checkMediaSource();
    //this.getSizeCam();
  }

  checkMediaSource = () =>{
    if(navigator && navigator.mediaDevices){
      navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
      }).then(stream => {
        this.currentStream = stream;
      }).catch(() => {
        console.log('NO PERMISOS');
      });
    }
    else{
      console.log('NO HAY CAMARA')
    }
  };

  /* getSizeCam = () => {
    const elementCam: HTMLElement = document.querySelector('.cam');
    const {width, heigt} =elementCam.getBoundingClientRect();
  }; */

}


