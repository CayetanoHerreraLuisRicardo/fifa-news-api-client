import * as tslib_1 from "tslib";
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';
import { NewsService } from './api/news.service';
var ApiModule = /** @class */ (function () {
    function ApiModule(parentModule, http) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                'See also https://github.com/angular/angular/issues/20575');
        }
    }
    ApiModule_1 = ApiModule;
    ApiModule.forRoot = function (configurationFactory) {
        return {
            ngModule: ApiModule_1,
            providers: [{ provide: Configuration, useFactory: configurationFactory }]
        };
    };
    var ApiModule_1;
    ApiModule = ApiModule_1 = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [],
            exports: [],
            providers: [
                NewsService
            ]
        }),
        tslib_1.__param(0, Optional()), tslib_1.__param(0, SkipSelf()),
        tslib_1.__param(1, Optional()),
        tslib_1.__metadata("design:paramtypes", [ApiModule,
            HttpClient])
    ], ApiModule);
    return ApiModule;
}());
export { ApiModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZpZmEtbmV3cy1hcGktY2xpZW50LyIsInNvdXJjZXMiOlsiYXBpLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVNqRDtJQVFJLG1CQUFxQyxZQUF1QixFQUNuQyxJQUFnQjtRQUNyQyxJQUFJLFlBQVksRUFBRTtZQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsa0VBQWtFLENBQUMsQ0FBQztTQUN2RjtRQUNELElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDUCxNQUFNLElBQUksS0FBSyxDQUFDLCtEQUErRDtnQkFDL0UsMERBQTBELENBQUMsQ0FBQztTQUMvRDtJQUNMLENBQUM7a0JBakJRLFNBQVM7SUFDSixpQkFBTyxHQUFyQixVQUFzQixvQkFBeUM7UUFDM0QsT0FBTztZQUNILFFBQVEsRUFBRSxXQUFTO1lBQ25CLFNBQVMsRUFBRSxDQUFFLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsb0JBQW9CLEVBQUUsQ0FBRTtTQUM5RSxDQUFDO0lBQ04sQ0FBQzs7SUFOUSxTQUFTO1FBUHJCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBTyxFQUFFO1lBQ2hCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLE9BQU8sRUFBTyxFQUFFO1lBQ2hCLFNBQVMsRUFBRTtnQkFDVCxXQUFXO2FBQUU7U0FDaEIsQ0FBQztRQVNnQixtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO1FBQ3RCLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUQyQixTQUFTO1lBQzdCLFVBQVU7T0FUaEMsU0FBUyxDQWtCckI7SUFBRCxnQkFBQztDQUFBLEFBbEJELElBa0JDO1NBbEJZLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgU2tpcFNlbGYsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi9jb25maWd1cmF0aW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cblxuaW1wb3J0IHsgTmV3c1NlcnZpY2UgfSBmcm9tICcuL2FwaS9uZXdzLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiAgICAgIFtdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBleHBvcnRzOiAgICAgIFtdLFxuICBwcm92aWRlcnM6IFtcbiAgICBOZXdzU2VydmljZSBdXG59KVxuZXhwb3J0IGNsYXNzIEFwaU1vZHVsZSB7XG4gICAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZ3VyYXRpb25GYWN0b3J5OiAoKSA9PiBDb25maWd1cmF0aW9uKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogQXBpTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbIHsgcHJvdmlkZTogQ29uZmlndXJhdGlvbiwgdXNlRmFjdG9yeTogY29uZmlndXJhdGlvbkZhY3RvcnkgfSBdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQXBpTW9kdWxlLFxuICAgICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXBpTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaW4geW91ciBiYXNlIEFwcE1vZHVsZSBvbmx5LicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaHR0cCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBpbXBvcnQgdGhlIEh0dHBDbGllbnRNb2R1bGUgaW4geW91ciBBcHBNb2R1bGUhIFxcbicgK1xuICAgICAgICAgICAgJ1NlZSBhbHNvIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIwNTc1Jyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=