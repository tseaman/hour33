"use strict";
var appModule = require("application");
var PerformanceMonitor = (function () {
    function PerformanceMonitor() {
    }
    PerformanceMonitor.prototype.start = function (options) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                var opts = options || {};
                var monitor = jp.wasabeef.takt.Takt.stock(appModule.android.nativeApp);
                monitor.seat(jp.wasabeef.takt.Seat.TOP_CENTER);
                if (opts.textColor) {
                    monitor.color(opts.textColor.android);
                }
                monitor.size(15.0);
                monitor.alpha(0.7);
                if (opts.onSample) {
                    monitor.listener(new jp.wasabeef.takt.Audience({
                        heartbeat: function (fps) {
                            opts.onSample({
                                fps: Math.round(fps * 10) / 10
                            });
                        }
                    }));
                }
                if (opts.hide) {
                    monitor.hide();
                }
                monitor.play();
                resolve();
            }, 3000);
        });
    };
    PerformanceMonitor.prototype.stop = function () {
        return new Promise(function (resolve, reject) {
            jp.wasabeef.takt.Takt.finish();
            resolve();
        });
    };
    return PerformanceMonitor;
}());
exports.PerformanceMonitor = PerformanceMonitor;
//# sourceMappingURL=performance-monitor.js.map