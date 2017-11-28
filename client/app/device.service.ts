import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {Platform} from "@angular/cdk/typings/platform";





@Injectable()
export class DeviceService {
  private mediaMatcher: MediaQueryList;
  constructor( @Inject(PLATFORM_ID) private platformId: Object) {
    this.mediaMatcher = isPlatformBrowser(platformId) ? matchMedia(`(max-width: 720px)`) : null;
  }

  isSmallScreen() {

    let _isSmallScreen = false;
    if (isPlatformBrowser(this.platformId) && this.mediaMatcher.matches) {
      _isSmallScreen  = true;
    }
    return _isSmallScreen ;
  }

  getPlatformHeight(): number {
    return window.screen.height;
  }

  getHeightStyle(substractFromResult?: number, isForMobileOnly?: boolean) {
    if (isForMobileOnly) {
      return "0px";
    }
    let height = this.getPlatformHeight() - 79 - 69;
    if(substractFromResult) {
      height = height - substractFromResult;
    }
    console.log(height.toString()+"px");
    return height.toString() + "px";
  }

  isIos() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
  }

}
