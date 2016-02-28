System.register([], function(exports_1) {
    var ROOT_NOTE_FREQUENCY, HALF_STEP_RANGE, RANGE_CENTER, MusicService;
    return {
        setters:[],
        execute: function() {
            ROOT_NOTE_FREQUENCY = 440;
            HALF_STEP_RANGE = 88;
            RANGE_CENTER = 48;
            MusicService = (function () {
                function MusicService() {
                }
                /* Takes absolute half-step distance, return corresponding frequency */
                MusicService.prototype.getNoteFrequency = function (halfStepDistance) {
                    if (halfStepDistance === void 0) { halfStepDistance = 0; }
                    var a = Math.pow(2, 1 / 12);
                    return ROOT_NOTE_FREQUENCY * Math.pow(a, halfStepDistance);
                };
                return MusicService;
            })();
            exports_1("MusicService", MusicService);
        }
    }
});
//# sourceMappingURL=music.service.js.map