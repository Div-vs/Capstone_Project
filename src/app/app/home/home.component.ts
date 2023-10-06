import { Component, TemplateRef } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, Event as RouterEvent } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loader = true;

  constructor(private router: Router) {

    this.router.events.subscribe((e: RouterEvent) => {

      this.navigationInterceptor(e);

    })

  }

  // Shows and hides the loading spinner during RouterEvent changes

  navigationInterceptor(event: RouterEvent): void {

    if (event instanceof NavigationStart) {

                             

        this.loader = true;

   

    }

    if (event instanceof NavigationEnd) {

      setTimeout(()=>{                          

        this.loader = false;

    }, 3000);

    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails

    if (event instanceof NavigationCancel) {

      setTimeout(()=>{                          

        this.loader = true;

    }, 3000);

    }

    if (event instanceof NavigationError) {

      setTimeout(()=>{                          

          this.loader = true;

      }, 3000);

    }

   

  }

 
 

}
