"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("nativescript-angular/http");
var http_client_module_1 = require("nativescript-angular/http-client/http-client.module");
var common_1 = require("nativescript-angular/common");
var angular_1 = require("nativescript-pro-ui/listview/angular");
var search_routing_module_1 = require("./search-routing.module");
var search_component_1 = require("./search.component");
var vendor_listing_component_1 = require("./vendor-listing/vendor-listing.component");
var vendor_detail_component_1 = require("./vendor-detail/vendor-detail.component");
var vendor_service_1 = require("../../services/vendor.service");
var vendor_description_component_1 = require("./vendor-detail/vendor-tab-detail/vendor-description/vendor-description.component");
var vendor_hours_component_1 = require("./vendor-detail/vendor-tab-detail/vendor-hours/vendor-hours.component");
var vendor_score_component_1 = require("./vendor-detail/vendor-tab-detail/vendor-score/vendor-score.component");
var vendor_map_component_1 = require("./vendor-detail/vendor-tab-map/vendor-map/vendor-map.component");
var vendor_navigation_component_1 = require("./vendor-detail/vendor-tab-map/vendor-navigation/vendor-navigation.component");
var vendor_review_component_1 = require("./vendor-detail/vendor-tab-reviews/vendor-review.component");
var hour_listing_component_1 = require("./vendor-detail/vendor-tab-detail/vendor-hours/hour-listing/hour-listing.component");
var vendor_phone_component_1 = require("./vendor-detail/vendor-tab-detail/vendor-phone/vendor-phone.component");
var vendor_website_component_1 = require("./vendor-detail/vendor-tab-detail/vendor-website/vendor-website.component");
var hour_filter_pipe_1 = require("./vendor-detail/vendor-tab-detail/vendor-hours/hour-listing/hour-filter.pipe");
var current_day_pipe_1 = require("./vendor-listing/current-day.pipe");
var like_dislike_pipe_1 = require("./vendor-listing/like-dislike.pipe");
var distance_pipe_1 = require("./vendor-listing/distance.pipe");
var vendor_detail_resolve_1 = require("./resolves/vendor-detail.resolve");
var SearchModule = (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                search_routing_module_1.SearchRoutingModule,
                angular_1.NativeScriptUIListViewModule,
                http_1.NativeScriptHttpModule,
                http_client_module_1.NativeScriptHttpClientModule
            ],
            providers: [
                vendor_service_1.VendorService,
                vendor_detail_resolve_1.VendorDetailResolve
            ],
            declarations: [
                search_component_1.SearchComponent,
                // Search Page
                vendor_listing_component_1.VendorListingComponent,
                vendor_detail_component_1.VendorDetailComponent,
                like_dislike_pipe_1.LikeDislikePipe,
                distance_pipe_1.DistancePipe,
                current_day_pipe_1.CurrentDayPipe,
                // Vendor Detail - Detail Tab
                vendor_description_component_1.VendorDescriptionComponent,
                vendor_hours_component_1.VendorHoursComponent,
                vendor_score_component_1.VendorScoreComponent,
                hour_listing_component_1.HourListingComponent,
                vendor_phone_component_1.VendorPhoneComponent,
                vendor_website_component_1.VendorWebsiteComponent,
                hour_filter_pipe_1.HourFilterPipe,
                // Vendor Detail - Map Tab
                vendor_map_component_1.VendorMapComponent,
                vendor_navigation_component_1.VendorNavigationComponent,
                // Vendor Reviews
                vendor_review_component_1.VendorReviewComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], SearchModule);
    return SearchModule;
}());
exports.SearchModule = SearchModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsa0RBQW1FO0FBQ25FLDBGQUFtRztBQUNuRyxzREFBdUU7QUFDdkUsZ0VBQW9GO0FBRXBGLGlFQUE4RDtBQUM5RCx1REFBcUQ7QUFDckQsc0ZBQW1GO0FBQ25GLG1GQUFnRjtBQUNoRixnRUFBOEQ7QUFDOUQsa0lBQStIO0FBQy9ILGdIQUE2RztBQUM3RyxnSEFBNkc7QUFDN0csdUdBQW9HO0FBQ3BHLDRIQUF5SDtBQUN6SCxzR0FBbUc7QUFDbkcsNkhBQTBIO0FBQzFILGdIQUE2RztBQUM3RyxzSEFBbUg7QUFDbkgsaUhBQThHO0FBQzlHLHNFQUFtRTtBQUNuRSx3RUFBcUU7QUFDckUsZ0VBQThEO0FBQzlELDBFQUF1RTtBQXdDdkU7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUF0Q3hCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLDJDQUFtQjtnQkFDbkIsc0NBQTRCO2dCQUM1Qiw2QkFBc0I7Z0JBQ3RCLGlEQUE0QjthQUMvQjtZQUNELFNBQVMsRUFBRTtnQkFDUCw4QkFBYTtnQkFDYiwyQ0FBbUI7YUFDdEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysa0NBQWU7Z0JBQ2YsY0FBYztnQkFDZCxpREFBc0I7Z0JBQ3RCLCtDQUFxQjtnQkFDckIsbUNBQWU7Z0JBQ2YsNEJBQVk7Z0JBQ1osaUNBQWM7Z0JBQ2QsNkJBQTZCO2dCQUM3Qix5REFBMEI7Z0JBQzFCLDZDQUFvQjtnQkFDcEIsNkNBQW9CO2dCQUNwQiw2Q0FBb0I7Z0JBQ3BCLDZDQUFvQjtnQkFDcEIsaURBQXNCO2dCQUN0QixpQ0FBYztnQkFDZCwwQkFBMEI7Z0JBQzFCLHlDQUFrQjtnQkFDbEIsdURBQXlCO2dCQUN6QixpQkFBaUI7Z0JBQ2pCLCtDQUFxQjthQUN4QjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csWUFBWSxDQUFJO0lBQUQsbUJBQUM7Q0FBQSxBQUE3QixJQUE2QjtBQUFoQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnQvaHR0cC1jbGllbnQubW9kdWxlJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXcvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBHb29nbGVMb2NhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nb29nbGUtbG9jYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFNlYXJjaFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9zZWFyY2gtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSBcIi4vc2VhcmNoLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBWZW5kb3JMaXN0aW5nQ29tcG9uZW50IH0gZnJvbSBcIi4vdmVuZG9yLWxpc3RpbmcvdmVuZG9yLWxpc3RpbmcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFZlbmRvckRldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL3ZlbmRvci1kZXRhaWwvdmVuZG9yLWRldGFpbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVmVuZG9yU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3ZlbmRvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVmVuZG9yRGVzY3JpcHRpb25Db21wb25lbnQgfSBmcm9tICcuL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1kZXRhaWwvdmVuZG9yLWRlc2NyaXB0aW9uL3ZlbmRvci1kZXNjcmlwdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWZW5kb3JIb3Vyc0NvbXBvbmVudCB9IGZyb20gJy4vdmVuZG9yLWRldGFpbC92ZW5kb3ItdGFiLWRldGFpbC92ZW5kb3ItaG91cnMvdmVuZG9yLWhvdXJzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZlbmRvclNjb3JlQ29tcG9uZW50IH0gZnJvbSAnLi92ZW5kb3ItZGV0YWlsL3ZlbmRvci10YWItZGV0YWlsL3ZlbmRvci1zY29yZS92ZW5kb3Itc2NvcmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmVuZG9yTWFwQ29tcG9uZW50IH0gZnJvbSAnLi92ZW5kb3ItZGV0YWlsL3ZlbmRvci10YWItbWFwL3ZlbmRvci1tYXAvdmVuZG9yLW1hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWZW5kb3JOYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi92ZW5kb3ItZGV0YWlsL3ZlbmRvci10YWItbWFwL3ZlbmRvci1uYXZpZ2F0aW9uL3ZlbmRvci1uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZlbmRvclJldmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmVuZG9yLWRldGFpbC92ZW5kb3ItdGFiLXJldmlld3MvdmVuZG9yLXJldmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIb3VyTGlzdGluZ0NvbXBvbmVudCB9IGZyb20gXCIuL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1kZXRhaWwvdmVuZG9yLWhvdXJzL2hvdXItbGlzdGluZy9ob3VyLWxpc3RpbmcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFZlbmRvclBob25lQ29tcG9uZW50IH0gZnJvbSAnLi92ZW5kb3ItZGV0YWlsL3ZlbmRvci10YWItZGV0YWlsL3ZlbmRvci1waG9uZS92ZW5kb3ItcGhvbmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmVuZG9yV2Vic2l0ZUNvbXBvbmVudCB9IGZyb20gJy4vdmVuZG9yLWRldGFpbC92ZW5kb3ItdGFiLWRldGFpbC92ZW5kb3Itd2Vic2l0ZS92ZW5kb3Itd2Vic2l0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIb3VyRmlsdGVyUGlwZSB9IGZyb20gJy4vdmVuZG9yLWRldGFpbC92ZW5kb3ItdGFiLWRldGFpbC92ZW5kb3ItaG91cnMvaG91ci1saXN0aW5nL2hvdXItZmlsdGVyLnBpcGUnO1xyXG5pbXBvcnQgeyBDdXJyZW50RGF5UGlwZSB9IGZyb20gJy4vdmVuZG9yLWxpc3RpbmcvY3VycmVudC1kYXkucGlwZSc7XHJcbmltcG9ydCB7IExpa2VEaXNsaWtlUGlwZSB9IGZyb20gJy4vdmVuZG9yLWxpc3RpbmcvbGlrZS1kaXNsaWtlLnBpcGUnO1xyXG5pbXBvcnQgeyBEaXN0YW5jZVBpcGUgfSBmcm9tICcuL3ZlbmRvci1saXN0aW5nL2Rpc3RhbmNlLnBpcGUnO1xyXG5pbXBvcnQgeyBWZW5kb3JEZXRhaWxSZXNvbHZlIH0gZnJvbSAnLi9yZXNvbHZlcy92ZW5kb3ItZGV0YWlsLnJlc29sdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgU2VhcmNoUm91dGluZ01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFZlbmRvclNlcnZpY2UsXHJcbiAgICAgICAgVmVuZG9yRGV0YWlsUmVzb2x2ZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIFNlYXJjaENvbXBvbmVudCxcclxuICAgICAgICAvLyBTZWFyY2ggUGFnZVxyXG4gICAgICAgIFZlbmRvckxpc3RpbmdDb21wb25lbnQsXHJcbiAgICAgICAgVmVuZG9yRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgIExpa2VEaXNsaWtlUGlwZSxcclxuICAgICAgICBEaXN0YW5jZVBpcGUsXHJcbiAgICAgICAgQ3VycmVudERheVBpcGUsXHJcbiAgICAgICAgLy8gVmVuZG9yIERldGFpbCAtIERldGFpbCBUYWJcclxuICAgICAgICBWZW5kb3JEZXNjcmlwdGlvbkNvbXBvbmVudCxcclxuICAgICAgICBWZW5kb3JIb3Vyc0NvbXBvbmVudCxcclxuICAgICAgICBWZW5kb3JTY29yZUNvbXBvbmVudCxcclxuICAgICAgICBIb3VyTGlzdGluZ0NvbXBvbmVudCxcclxuICAgICAgICBWZW5kb3JQaG9uZUNvbXBvbmVudCxcclxuICAgICAgICBWZW5kb3JXZWJzaXRlQ29tcG9uZW50LFxyXG4gICAgICAgIEhvdXJGaWx0ZXJQaXBlLFxyXG4gICAgICAgIC8vIFZlbmRvciBEZXRhaWwgLSBNYXAgVGFiXHJcbiAgICAgICAgVmVuZG9yTWFwQ29tcG9uZW50LFxyXG4gICAgICAgIFZlbmRvck5hdmlnYXRpb25Db21wb25lbnQsXHJcbiAgICAgICAgLy8gVmVuZG9yIFJldmlld3NcclxuICAgICAgICBWZW5kb3JSZXZpZXdDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoTW9kdWxlIHsgfVxyXG4iXX0=