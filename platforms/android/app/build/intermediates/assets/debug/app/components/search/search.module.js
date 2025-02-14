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
var period_filter_pipe_1 = require("./vendor-detail/vendor-tab-detail/vendor-hours/hour-listing/period-filter.pipe");
var current_day_pipe_1 = require("./vendor-listing/current-day.pipe");
var like_dislike_pipe_1 = require("./vendor-listing/like-dislike.pipe");
var distance_pipe_1 = require("./vendor-listing/distance.pipe");
var vendor_detail_resolve_1 = require("./resolves/vendor-detail.resolve");
var angular_2 = require("nativescript-drop-down/angular");
var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                search_routing_module_1.SearchRoutingModule,
                angular_1.NativeScriptUIListViewModule,
                http_1.NativeScriptHttpModule,
                http_client_module_1.NativeScriptHttpClientModule,
                angular_2.DropDownModule
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
                period_filter_pipe_1.PeriodFilterPipe,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsa0RBQW1FO0FBQ25FLDBGQUFtRztBQUNuRyxzREFBdUU7QUFDdkUsZ0VBQW9GO0FBRXBGLGlFQUE4RDtBQUM5RCx1REFBcUQ7QUFDckQsc0ZBQW1GO0FBQ25GLG1GQUFnRjtBQUNoRixnRUFBOEQ7QUFDOUQsa0lBQStIO0FBQy9ILGdIQUE2RztBQUM3RyxnSEFBNkc7QUFDN0csdUdBQW9HO0FBQ3BHLDRIQUF5SDtBQUN6SCxzR0FBbUc7QUFDbkcsNkhBQTBIO0FBQzFILGdIQUE2RztBQUM3RyxzSEFBbUg7QUFDbkgsaUhBQThHO0FBQzlHLHFIQUFrSDtBQUNsSCxzRUFBbUU7QUFDbkUsd0VBQXFFO0FBQ3JFLGdFQUE4RDtBQUM5RCwwRUFBdUU7QUFDdkUsMERBQWdFO0FBMENoRTtJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQXhDeEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsMkNBQW1CO2dCQUNuQixzQ0FBNEI7Z0JBQzVCLDZCQUFzQjtnQkFDdEIsaURBQTRCO2dCQUM1Qix3QkFBYzthQUNqQjtZQUNELFNBQVMsRUFBRTtnQkFDUCw4QkFBYTtnQkFDYiwyQ0FBbUI7YUFDdEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysa0NBQWU7Z0JBQ2YsY0FBYztnQkFDZCxpREFBc0I7Z0JBQ3RCLCtDQUFxQjtnQkFDckIsbUNBQWU7Z0JBQ2YsNEJBQVk7Z0JBQ1osaUNBQWM7Z0JBQ2QsNkJBQTZCO2dCQUM3Qix5REFBMEI7Z0JBQzFCLDZDQUFvQjtnQkFDcEIsNkNBQW9CO2dCQUNwQiw2Q0FBb0I7Z0JBQ3BCLDZDQUFvQjtnQkFDcEIsaURBQXNCO2dCQUN0QixpQ0FBYztnQkFDZCxxQ0FBZ0I7Z0JBQ2hCLDBCQUEwQjtnQkFDMUIseUNBQWtCO2dCQUNsQix1REFBeUI7Z0JBQ3pCLGlCQUFpQjtnQkFDakIsK0NBQXFCO2FBQ3hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxZQUFZLENBQUk7SUFBRCxtQkFBQztDQUFBLEFBQTdCLElBQTZCO0FBQWhCLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudC9odHRwLWNsaWVudC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldy9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IEdvb2dsZUxvY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dvb2dsZS1sb2NhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2VhcmNoUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3NlYXJjaC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tIFwiLi9zZWFyY2guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFZlbmRvckxpc3RpbmdDb21wb25lbnQgfSBmcm9tIFwiLi92ZW5kb3ItbGlzdGluZy92ZW5kb3ItbGlzdGluZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVmVuZG9yRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vdmVuZG9yLWRldGFpbC92ZW5kb3ItZGV0YWlsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBWZW5kb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdmVuZG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWZW5kb3JEZXNjcmlwdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vdmVuZG9yLWRldGFpbC92ZW5kb3ItdGFiLWRldGFpbC92ZW5kb3ItZGVzY3JpcHRpb24vdmVuZG9yLWRlc2NyaXB0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZlbmRvckhvdXJzQ29tcG9uZW50IH0gZnJvbSAnLi92ZW5kb3ItZGV0YWlsL3ZlbmRvci10YWItZGV0YWlsL3ZlbmRvci1ob3Vycy92ZW5kb3ItaG91cnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmVuZG9yU2NvcmVDb21wb25lbnQgfSBmcm9tICcuL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1kZXRhaWwvdmVuZG9yLXNjb3JlL3ZlbmRvci1zY29yZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWZW5kb3JNYXBDb21wb25lbnQgfSBmcm9tICcuL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1tYXAvdmVuZG9yLW1hcC92ZW5kb3ItbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZlbmRvck5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1tYXAvdmVuZG9yLW5hdmlnYXRpb24vdmVuZG9yLW5hdmlnYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmVuZG9yUmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi92ZW5kb3ItZGV0YWlsL3ZlbmRvci10YWItcmV2aWV3cy92ZW5kb3ItcmV2aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhvdXJMaXN0aW5nQ29tcG9uZW50IH0gZnJvbSBcIi4vdmVuZG9yLWRldGFpbC92ZW5kb3ItdGFiLWRldGFpbC92ZW5kb3ItaG91cnMvaG91ci1saXN0aW5nL2hvdXItbGlzdGluZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVmVuZG9yUGhvbmVDb21wb25lbnQgfSBmcm9tICcuL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1kZXRhaWwvdmVuZG9yLXBob25lL3ZlbmRvci1waG9uZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWZW5kb3JXZWJzaXRlQ29tcG9uZW50IH0gZnJvbSAnLi92ZW5kb3ItZGV0YWlsL3ZlbmRvci10YWItZGV0YWlsL3ZlbmRvci13ZWJzaXRlL3ZlbmRvci13ZWJzaXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhvdXJGaWx0ZXJQaXBlIH0gZnJvbSAnLi92ZW5kb3ItZGV0YWlsL3ZlbmRvci10YWItZGV0YWlsL3ZlbmRvci1ob3Vycy9ob3VyLWxpc3RpbmcvaG91ci1maWx0ZXIucGlwZSc7XHJcbmltcG9ydCB7IFBlcmlvZEZpbHRlclBpcGUgfSBmcm9tICcuL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1kZXRhaWwvdmVuZG9yLWhvdXJzL2hvdXItbGlzdGluZy9wZXJpb2QtZmlsdGVyLnBpcGUnO1xyXG5pbXBvcnQgeyBDdXJyZW50RGF5UGlwZSB9IGZyb20gJy4vdmVuZG9yLWxpc3RpbmcvY3VycmVudC1kYXkucGlwZSc7XHJcbmltcG9ydCB7IExpa2VEaXNsaWtlUGlwZSB9IGZyb20gJy4vdmVuZG9yLWxpc3RpbmcvbGlrZS1kaXNsaWtlLnBpcGUnO1xyXG5pbXBvcnQgeyBEaXN0YW5jZVBpcGUgfSBmcm9tICcuL3ZlbmRvci1saXN0aW5nL2Rpc3RhbmNlLnBpcGUnO1xyXG5pbXBvcnQgeyBWZW5kb3JEZXRhaWxSZXNvbHZlIH0gZnJvbSAnLi9yZXNvbHZlcy92ZW5kb3ItZGV0YWlsLnJlc29sdmUnO1xyXG5pbXBvcnQgeyBEcm9wRG93bk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duL2FuZ3VsYXJcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIFNlYXJjaFJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICAgICAgRHJvcERvd25Nb2R1bGVcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBWZW5kb3JTZXJ2aWNlLFxyXG4gICAgICAgIFZlbmRvckRldGFpbFJlc29sdmVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBTZWFyY2hDb21wb25lbnQsXHJcbiAgICAgICAgLy8gU2VhcmNoIFBhZ2VcclxuICAgICAgICBWZW5kb3JMaXN0aW5nQ29tcG9uZW50LFxyXG4gICAgICAgIFZlbmRvckRldGFpbENvbXBvbmVudCxcclxuICAgICAgICBMaWtlRGlzbGlrZVBpcGUsXHJcbiAgICAgICAgRGlzdGFuY2VQaXBlLFxyXG4gICAgICAgIEN1cnJlbnREYXlQaXBlLFxyXG4gICAgICAgIC8vIFZlbmRvciBEZXRhaWwgLSBEZXRhaWwgVGFiXHJcbiAgICAgICAgVmVuZG9yRGVzY3JpcHRpb25Db21wb25lbnQsXHJcbiAgICAgICAgVmVuZG9ySG91cnNDb21wb25lbnQsXHJcbiAgICAgICAgVmVuZG9yU2NvcmVDb21wb25lbnQsXHJcbiAgICAgICAgSG91ckxpc3RpbmdDb21wb25lbnQsXHJcbiAgICAgICAgVmVuZG9yUGhvbmVDb21wb25lbnQsXHJcbiAgICAgICAgVmVuZG9yV2Vic2l0ZUNvbXBvbmVudCxcclxuICAgICAgICBIb3VyRmlsdGVyUGlwZSxcclxuICAgICAgICBQZXJpb2RGaWx0ZXJQaXBlLFxyXG4gICAgICAgIC8vIFZlbmRvciBEZXRhaWwgLSBNYXAgVGFiXHJcbiAgICAgICAgVmVuZG9yTWFwQ29tcG9uZW50LFxyXG4gICAgICAgIFZlbmRvck5hdmlnYXRpb25Db21wb25lbnQsXHJcbiAgICAgICAgLy8gVmVuZG9yIFJldmlld3NcclxuICAgICAgICBWZW5kb3JSZXZpZXdDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoTW9kdWxlIHsgfVxyXG4iXX0=