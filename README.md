# fifa-news-api-client
fifa-news-api-client is a npm package to integrate in a Angular project. This package is a Angular Client to make API (https://fifa-news-api.herokuapp.com/) calls.

You can use and test this API opening the following link: 
https://fifa-news-api.herokuapp.com/api-docs/ .The API documentation was designed using Swagger tool, this tool have Swagger Editor is a API editor for designing APIs with the OpenApi specification: https://editor.swagger.io/

If you are interested to design, describe, and document your own API you can see the Swagger website https://swagger.io/

If you are interested in knowing how to develop this little API you can visit my repository https://github.com/CayetanoHerreraLuisRicardo/FIFA-News-API

Also here is my repository where I integrate 'fifa-news-api-client' to an Angular project https://github.com/CayetanoHerreraLuisRicardo/FIFA-news-angular-integration

### Consuming

Navigate to the Angular project and run the next command.

```
npm install fifa-news-api-client --save
```

### General usage

In your Angular project you need import the package


```
// without configuring providers
import { ApiModule } from 'fifa-news-api-client';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: [
        ApiModule,
        // make sure to import the HttpClientModule in the AppModule only,
        // see https://github.com/angular/angular/issues/20575
        HttpClientModule
    ],
    declarations: [ AppComponent ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
```

```
// configuring providers
import { ApiModule, Configuration, ConfigurationParameters } from 'fifa-news-api-client';

export function apiConfigFactory (): Configuration => {
  const params: ConfigurationParameters = {
    // set configuration parameters here.
  }
  return new Configuration(params);
}

@NgModule({
    imports: [ ApiModule.forRoot(apiConfigFactory) ],
    declarations: [ AppComponent ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
```

```
import { DefaultApi } from 'fifa-news-api-client';

export class AppComponent {
	 constructor(private apiGateway: DefaultApi) { }
}
```

Note: The ApiModule is restricted to being instantiated once app wide.
This is to ensure that all services are treated as singletons.

#### Using multiple swagger files / APIs / ApiModules
In order to use multiple `ApiModules` generated from different swagger files, you can create an alias name when importing the modules
in order to avoid naming conflicts:
```
import { ApiModule } from 'fifa-news-api-client';
import { ApiModule as OtherApiModule } from 'my-other-api-path';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    ApiModule,
    OtherApiModule,
    // make sure to import the HttpClientModule in the AppModule only,
    // see https://github.com/angular/angular/issues/20575
    HttpClientModule
  ]
})
export class AppModule {

}
```


### Set service base path
If different than the generated base path, during app bootstrap, you can provide the base path to your service. 

```
import { BASE_PATH } from 'fifa-news-api-client';

bootstrap(AppComponent, [
    { provide: BASE_PATH, useValue: 'https://fifa-news-api.herokuapp.com/api' },
]);
```
or

```
import { BASE_PATH } from 'fifa-news-api-client';

@NgModule({
    imports: [],
    declarations: [ AppComponent ],
    providers: [ provide: BASE_PATH, useValue: 'https://fifa-news-api.herokuapp.com/api' ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
```


#### Using @angular/cli
First extend your `src/environments/*.ts` files by adding the corresponding base path:

```
export const environment = {
  production: false,
  API_BASE_PATH: 'https://fifa-news-api.herokuapp.com/api'
};
```

In the src/app/app.module.ts:
```
import { BASE_PATH } from 'https://fifa-news-api.herokuapp.com/api';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ ],
  providers: [{ provide: BASE_PATH, useValue: environment.API_BASE_PATH }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```  