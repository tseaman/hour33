"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var settings_1 = require("../../../../../settings");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
element_registry_1.registerElement('MapView', function () { return nativescript_google_maps_sdk_1.MapView; });
var VendorMapComponent = (function () {
    function VendorMapComponent() {
        this.theme = settings_1.Theme;
    }
    VendorMapComponent.prototype.ngOnInit = function () {
        console.log('VendorMapComonent.ngOnInit() Vendor Location: ' + JSON.stringify(this.vendor.result.geometry));
        console.log('Vendor Geometry: ' + JSON.stringify(this.vendor.result.geometry.viewport));
    };
    VendorMapComponent.prototype.ngAfterViewInit = function () {
        console.log('ngAfterViewInit()');
    };
    VendorMapComponent.prototype.onMapReady = function (event) {
        var _this = this;
        console.log("Map Ready");
        this.mapView = event.object;
        var marker = new nativescript_google_maps_sdk_1.Marker();
        this.mapView.zoom = 16;
        // Set map viewport
        setTimeout(function () {
            _this.bounds = nativescript_google_maps_sdk_1.Bounds.fromCoordinates(nativescript_google_maps_sdk_1.Position.positionFromLatLng(_this.vendor.result.geometry.viewport.southwest.lat, _this.vendor.result.geometry.viewport.southwest.lng), nativescript_google_maps_sdk_1.Position.positionFromLatLng(_this.vendor.result.geometry.viewport.northeast.lat, _this.vendor.result.geometry.viewport.northeast.lng));
            _this.mapView.setViewport(_this.bounds);
            // Set marker
            _this.mapView.latitude = _this.vendor.result.geometry.location.lat;
            _this.mapView.longitude = _this.vendor.result.geometry.location.lng;
            marker.title = "Title Test";
            marker.snippet = "Snippet Test";
            marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(_this.vendor.result.geometry.location.lat, _this.vendor.result.geometry.location.lng);
            _this.mapView.addMarker(marker);
        }, 500);
    };
    ;
    VendorMapComponent.prototype.onMarkerEvent = function (args) {
        console.log("Marker Event: '" + args.eventName
            + "' triggered on: " + args.marker.title
            + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
    };
    VendorMapComponent.prototype.onCoordinateTapped = function (args) {
        console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);
    };
    VendorMapComponent.prototype.onCameraChanged = function (args) {
        console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
        this.lastCamera = JSON.stringify(args.camera);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], VendorMapComponent.prototype, "vendor", void 0);
    VendorMapComponent = __decorate([
        core_1.Component({
            selector: 'vendor-map',
            templateUrl: './components/search/vendor-detail/vendor-tab-map/vendor-map/vendor-map.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], VendorMapComponent);
    return VendorMapComponent;
}());
exports.VendorMapComponent = VendorMapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLW1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2ZW5kb3ItbWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUErRjtBQUMvRiwwRUFBd0U7QUFFeEUsb0RBQWdEO0FBQ2hELDZFQUFpRjtBQUVqRixrQ0FBZSxDQUFDLFNBQVMsRUFBRSxjQUFNLE9BQUEsc0NBQU8sRUFBUCxDQUFPLENBQUMsQ0FBQztBQU0xQztJQVNFO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDNUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFRCw0Q0FBZSxHQUFmO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCx1Q0FBVSxHQUFWLFVBQVksS0FBSztRQUFqQixpQkFvQkM7UUFuQkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFhLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDdEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxxQ0FBTSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLG1CQUFtQjtRQUNuQixVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsTUFBTSxHQUFHLHFDQUFNLENBQUMsZUFB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O0FBNUhZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPbkluaXQsIElucHV0LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XHJcbmltcG9ydCB7IFZlbmRvckRldGFpbCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC92ZW5kb3ItZGV0YWlsL3ZlbmRvci1kZXRhaWwuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IE1hcFZpZXcsIE1hcmtlciwgUG9zaXRpb24sIEJvdW5kcyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGsnO1xyXG5cclxucmVnaXN0ZXJFbGVtZW50KCdNYXBWaWV3JywgKCkgPT4gTWFwVmlldyk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3ZlbmRvci1tYXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3NlYXJjaC92ZW5kb3ItZGV0YWlsL3ZlbmRvci10YWItbWFwL3ZlbmRvci1tYXAvdmVuZG9yLW1hcC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFZlbmRvck1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgdmVuZG9yOiBWZW5kb3JEZXRhaWw7XHJcbiAgXHJcbiAgcHVibGljIG1hcFZpZXc6IE1hcFZpZXc7XHJcbiAgcHVibGljIHRoZW1lO1xyXG4gIHB1YmxpYyBsYXN0Q2FtZXJhOiBzdHJpbmc7XHJcbiAgXHJcbiAgcHJpdmF0ZSBib3VuZHM6IEJvdW5kcztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gVGhlbWU7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgY29uc29sZS5sb2coJ1ZlbmRvck1hcENvbW9uZW50Lm5nT25Jbml0KCkgVmVuZG9yIExvY2F0aW9uOiAnICsgSlNPTi5zdHJpbmdpZnkodGhpcy52ZW5kb3IucmVzdWx0Lmdlb21ldHJ5KSk7XHJcbiAgICBjb25zb2xlLmxvZygnVmVuZG9yIEdlb21ldHJ5OiAnICsgSlNPTi5zdHJpbmdpZnkodGhpcy52ZW5kb3IucmVzdWx0Lmdlb21ldHJ5LnZpZXdwb3J0KSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKXtcclxuICAgIGNvbnNvbGUubG9nKCduZ0FmdGVyVmlld0luaXQoKScpO1xyXG4gIH1cclxuXHJcbiAgb25NYXBSZWFkeSAoZXZlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiTWFwIFJlYWR5XCIpO1xyXG4gICAgdGhpcy5tYXBWaWV3ID0gPE1hcFZpZXc+IGV2ZW50Lm9iamVjdDtcclxuICAgIGxldCBtYXJrZXIgPSBuZXcgTWFya2VyKCk7XHJcbiAgICB0aGlzLm1hcFZpZXcuem9vbSA9IDE2O1xyXG4gICAgLy8gU2V0IG1hcCB2aWV3cG9ydFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuYm91bmRzID0gQm91bmRzLmZyb21Db29yZGluYXRlcyhcclxuICAgICAgICBQb3NpdGlvbi5wb3NpdGlvbkZyb21MYXRMbmcodGhpcy52ZW5kb3IucmVzdWx0Lmdlb21ldHJ5LnZpZXdwb3J0LnNvdXRod2VzdC5sYXQsIHRoaXMudmVuZG9yLnJlc3VsdC5nZW9tZXRyeS52aWV3cG9ydC5zb3V0aHdlc3QubG5nKSxcclxuICAgICAgICBQb3NpdGlvbi5wb3NpdGlvbkZyb21MYXRMbmcodGhpcy52ZW5kb3IucmVzdWx0Lmdlb21ldHJ5LnZpZXdwb3J0Lm5vcnRoZWFzdC5sYXQsIHRoaXMudmVuZG9yLnJlc3VsdC5nZW9tZXRyeS52aWV3cG9ydC5ub3J0aGVhc3QubG5nKVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLm1hcFZpZXcuc2V0Vmlld3BvcnQodGhpcy5ib3VuZHMpXHJcbiAgICAgIC8vIFNldCBtYXJrZXJcclxuICAgICAgdGhpcy5tYXBWaWV3LmxhdGl0dWRlID0gdGhpcy52ZW5kb3IucmVzdWx0Lmdlb21ldHJ5LmxvY2F0aW9uLmxhdDtcclxuICAgICAgdGhpcy5tYXBWaWV3LmxvbmdpdHVkZSA9IHRoaXMudmVuZG9yLnJlc3VsdC5nZW9tZXRyeS5sb2NhdGlvbi5sbmc7XHJcbiAgICAgIG1hcmtlci50aXRsZSA9IFwiVGl0bGUgVGVzdFwiXHJcbiAgICAgIG1hcmtlci5zbmlwcGV0ID0gXCJTbmlwcGV0IFRlc3RcIjtcclxuICAgICAgbWFya2VyLnBvc2l0aW9uID0gUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKHRoaXMudmVuZG9yLnJlc3VsdC5nZW9tZXRyeS5sb2NhdGlvbi5sYXQsIHRoaXMudmVuZG9yLnJlc3VsdC5nZW9tZXRyeS5sb2NhdGlvbi5sbmcpO1xyXG4gICAgICB0aGlzLm1hcFZpZXcuYWRkTWFya2VyKG1hcmtlcik7XHJcbiAgICB9LCA1MDApO1xyXG4gIH07XHJcblxyXG4gIG9uTWFya2VyRXZlbnQoYXJncykge1xyXG4gICAgY29uc29sZS5sb2coXCJNYXJrZXIgRXZlbnQ6ICdcIiArIGFyZ3MuZXZlbnROYW1lXHJcbiAgICAgICAgKyBcIicgdHJpZ2dlcmVkIG9uOiBcIiArIGFyZ3MubWFya2VyLnRpdGxlXHJcbiAgICAgICAgKyBcIiwgTGF0OiBcIiArIGFyZ3MubWFya2VyLnBvc2l0aW9uLmxhdGl0dWRlICsgXCIsIExvbjogXCIgKyBhcmdzLm1hcmtlci5wb3NpdGlvbi5sb25naXR1ZGUsIGFyZ3MpO1xyXG4gIH1cclxuXHJcbiAgb25Db29yZGluYXRlVGFwcGVkKGFyZ3MpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQ29vcmRpbmF0ZSBUYXBwZWQsIExhdDogXCIgKyBhcmdzLnBvc2l0aW9uLmxhdGl0dWRlICsgXCIsIExvbjogXCIgKyBhcmdzLnBvc2l0aW9uLmxvbmdpdHVkZSwgYXJncyk7XHJcbiAgfVxyXG5cclxuICBvbkNhbWVyYUNoYW5nZWQoYXJncykge1xyXG4gICAgY29uc29sZS5sb2coXCJDYW1lcmEgY2hhbmdlZDogXCIgKyBKU09OLnN0cmluZ2lmeShhcmdzLmNhbWVyYSksIEpTT04uc3RyaW5naWZ5KGFyZ3MuY2FtZXJhKSA9PT0gdGhpcy5sYXN0Q2FtZXJhKTtcclxuICAgIHRoaXMubGFzdENhbWVyYSA9IEpTT04uc3RyaW5naWZ5KGFyZ3MuY2FtZXJhKTtcclxuICB9XHJcblxyXG4vLyAqKioqKiogTWFwcyBEZW1vIENvZGUgKioqKioqIC8vXHJcblxyXG4vLyAgIHB1YmxpYyBvbk1hcFJlYWR5ID0gKGV2ZW50KSA9PiB7XHJcbi8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuLy8gICAgICAgICAvL2FsZXJ0KHRoaXMuaGVhdE1hcCk7XHJcbi8vICAgICB9LCAxMDAwMCk7XHJcbi8vICAgICB2YXIgbW9kZWwgPSBuZXcgTWFwQ29tcG9uZW50KHRoaXMucGFnZSwgdGhpcy5odHRwU2VydmljZSk7XHJcbi8vICAgICBsZXQgbWFwVmlldyA9IGV2ZW50Lm9iamVjdDtcclxuLy8gICAgIHRoaXMubWFwVmlldyA9IG1hcFZpZXc7XHJcbi8vICAgICAvL2xldCBwb2x5ID0gbmV3IFBvbHlnb24oKTtcclxuLy8gICAgIC8vdmFyIHBvb29vbHkgPSBbXHJcbi8vICAgICAvLyAgICBQb3NpdGlvbi5wb3NpdGlvbkZyb21MYXRMbmcoNDAuMTYwODA3MzAxNDY0ODg1LCAtODMuMDA4Nzk1MzgwNTkyMjkpLFxyXG4vLyAgICAgLy8gICAgUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKDQwLjE2MDUwMTg3Mzk2Nzg0NiwgLTgzLjAwODc3MTI0MDcxMTE2KSxcclxuLy8gICAgIC8vICAgIFBvc2l0aW9uLnBvc2l0aW9uRnJvbUxhdExuZyg0MC4xNjA0ODk1NzQ4NDUyLCAtODMuMDA4NjQ1MTc2ODg3NDYpLFxyXG4vLyAgICAgLy8gICAgUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKDQwLjE2MDgxMjQyNjA3NTYxLCAtODMuMDA4NjY2NjM0NTU5NjMpLFxyXG4vLyAgICAgLy8gICAgUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKDQwLjE2MDgwNzMwMTQ2NDg4NSwgLTgzLjAwODc5NTM4MDU5MjI5KVxyXG4gICAgICAgIFxyXG4vLyAgICAgLy9dO1xyXG4vLyAgICAgLy9wb2x5LmFkZFBvaW50cyhwb29vb2x5KTtcclxuLy8gICAgIC8vcG9seS5maWxsQ29sb3IgPSBuZXcgQ29sb3IoXCIjRkY5ODAwXCIpO1xyXG4vLyAgICAgLy9wb2x5LnN0cm9rZUNvbG9yID0gbmV3IENvbG9yKFwiIzAwN0RDM1wiKTtcclxuLy8gICAgIC8vcG9seS5zdHJva2VXaWR0aCA9IDI7XHJcbi8vICAgICAvL3BvbHkudmlzaWJsZSA9IHRydWU7XHJcbi8vICAgICAvL21hcFZpZXcuYWRkUG9seWdvbihwb2x5KTtcclxuLy8gICAgIGNvbnNvbGUubG9nKEFjY3VyYWN5LmhpZ2gpXHJcbi8vICAgICAvL2NvbnNvbGUubG9nKCd0ZXN0Jyk7XHJcbi8vICAgICB2YXIgbWFya2VyID0gbmV3IG1hcHNNb2R1bGUuTWFya2VyKCk7XHJcbi8vICAgICAvL2NvbnNvbGUubG9nKG1hcFZpZXcpO1xyXG4vLyAgICAgbWFya2VyLnRpdGxlID0gXCJtYXJrZXIxXCI7XHJcbi8vICAgICBtYXJrZXIucG9zaXRpb24gPSBtYXBzTW9kdWxlLlBvc2l0aW9uLnBvc2l0aW9uRnJvbUxhdExuZyh0aGlzLnBvaW50MS5sYXRpdHVkZSwgdGhpcy5wb2ludDEubG9uZ2l0dWRlKTtcclxuLy8gICAgIG1hcmtlci51c2VyRGF0YSA9IHsgaW5kZXg6IDEgfTtcclxuLy8gICAgIG1hcFZpZXcuYWRkTWFya2VyKG1hcmtlcik7XHJcblxyXG4vLyAgICAgLy90aGlzLmFkZEhlYXQoKTtcclxuLy8gICAgIHZhciBsb2NhdGlvbiA9IGdlb2xvY2F0aW9uLmdldEN1cnJlbnRMb2NhdGlvbih7IGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuaGlnaCwgdXBkYXRlRGlzdGFuY2U6IDAuMSwgbWF4aW11bUFnZTogNTAwMCwgdGltZW91dDogMjAwMDAgfSkuXHJcbi8vICAgICAgICAgdGhlbigobG9jKSA9PiB7XHJcbi8vICAgICAgICAgICAgIGlmIChsb2MpIHtcclxuLy8gICAgICAgICAgICAgICAgIG1vZGVsLmxvY2F0aW9ucy5wdXNoKGxvYyk7XHJcbi8vICAgICAgICAgICAgICAgICAvL2FsZXJ0KEpTT04uc3RyaW5naWZ5KGxvYykpO1xyXG4vLyAgICAgICAgICAgICAgICAgLy8gV3JpdGluZyB0ZXh0IHRvIHRoZSBmaWxlLlxyXG4vLyAgICAgICAgICAgICAgICAgbGV0IHRlbXBNYXJrZXIgPSB7IGxhdGl0dWRlOiBsb2MubGF0aXR1ZGUsIGxvbmdpdHVkZTogbG9jLmxvbmdpdHVkZSwgdGl0bGU6ICdtZScgfTtcclxuICAgICAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICAgICAgLy9hbGVydChKU09OLnN0cmluZ2lmeSh0ZW1wTWFya2VyKSlcclxuLy8gICAgICAgICAgICAgICAgIHRoaXMubWFya2Vycy5wdXNoKHRlbXBNYXJrZXIpO1xyXG4vLyAgICAgICAgICAgICAgICAgLy9hbGVydChKU09OLnN0cmluZ2lmeSh0aGlzLm1hcmtlcnMpKVxyXG4vLyAgICAgICAgICAgICAgICB2YXIgbWFya2VyMiA9IG5ldyBtYXBzTW9kdWxlLk1hcmtlcigpO1xyXG4vLyAgICAgICAgICAgICAgICAgbWFya2VyMi50aXRsZSA9IFwibWVcIjtcclxuLy8gICAgICAgICAgICAgICAgIG1hcmtlcjIucG9zaXRpb24gPSBtYXBzTW9kdWxlLlBvc2l0aW9uLnBvc2l0aW9uRnJvbUxhdExuZyhsb2MubGF0aXR1ZGUsIGxvYy5sb25naXR1ZGUpO1xyXG4vLyAgICAgICAgICAgICAgICAgbWFya2VyMi51c2VyRGF0YSA9IHsgaW5kZXg6IDEgfTtcclxuLy8gICAgICAgICAgICAgICAgIG1hcFZpZXcuYWRkTWFya2VyKG1hcmtlcjIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgICAgICB0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpXHJcbi8vICAgICAgICAgICAgICAgICAvL2FsZXJ0KHRoaXMubWFya2VycylcclxuLy8gICAgICAgICAgICAgICAgIC8vY29uc29sZS5kaXIodGhpcy5tYXJrZXJzKVxyXG4vLyAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmRpcihPYmplY3Qua2V5cyhtYXBWaWV3KSlcclxuLy8gICAgICAgICAgICAgICAgIC8vY29uc29sZS5kaXIobWFwVmlldy5fbWFya2VycylcclxuLy8gICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcclxuLy8gICAgICAgICAgICAgICAgIHRoaXMud2F0Y2hMb2NhdGlvbihtb2RlbCwgbWFwVmlldyk7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9LCBmdW5jdGlvbiAoZSkge1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yISEhISEhITE6IFwiICsgZS5tZXNzYWdlKTtcclxuLy8gICAgICAgICAgICAgdGhpcy5vbk1hcFJlYWR5KGV2ZW50KTtcclxuLy8gICAgICAgICB9KTtcclxuLy8gICAgIHRoaXMucmVhZHkgPSB0cnVlO1xyXG4vLyB9O1xyXG59Il19