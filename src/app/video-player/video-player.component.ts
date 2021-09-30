import { ElementRef, Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
 
  @ViewChild('videoElement') videoElement: ElementRef | undefined;
  @Input() stream: any;
  @Input() width: number | undefined;
  @Input() height: number | undefined; 
  constructor() { }

  ngOnInit(): void {
  }

   loadedMetaData(): void {
     this.videoElement?.nativeElement.play()
    
  }

  listenerPlay(): void {
    
  }

}
