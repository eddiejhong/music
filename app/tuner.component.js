System.register(['angular2/core', 'angular2/router', './music.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, music_service_1;
    var TunerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (music_service_1_1) {
                music_service_1 = music_service_1_1;
            }],
        execute: function() {
            TunerComponent = (function () {
                function TunerComponent(_router, _musicService) {
                    this._router = _router;
                    this._musicService = _musicService;
                }
                TunerComponent.prototype.ngOnInit = function () {
                    this.setContext(new AudioContext);
                    this.setPianoNotesArray(this.getPianoNotesArray());
                };
                TunerComponent.prototype.setContext = function (context) {
                    this._context = context;
                };
                TunerComponent.prototype.getContext = function () {
                    return this._context;
                };
                TunerComponent.prototype.getPianoNotesArray = function () {
                    return this._musicService.getNoteRange('piano');
                };
                TunerComponent.prototype.setPianoNotesArray = function (notesArray) {
                    this._pianoNotesArray = notesArray;
                };
                TunerComponent.prototype.playNote = function (half_step_distance, duration) {
                    if (half_step_distance === void 0) { half_step_distance = 0; }
                    if (duration === void 0) { duration = 1000; }
                    var that = this;
                    var osc = that.startNote(half_step_distance);
                    setTimeout(function () {
                        that.stopNote(osc);
                    }, duration);
                };
                TunerComponent.prototype.startNote = function (half_step_distance) {
                    if (half_step_distance === void 0) { half_step_distance = 0; }
                    var frequency = this._musicService.getNoteFrequency(half_step_distance);
                    var context = this.getContext(), audioDestination = context.destination;
                    var osc = context.createOscillator();
                    osc.frequency.value = frequency;
                    osc.connect(audioDestination);
                    osc.start(0);
                    return osc;
                };
                TunerComponent.prototype.stopNote = function (osc) {
                    var context = this.getContext(), audioDestination = context.destination;
                    osc.connect(audioDestination);
                    osc.stop(0);
                };
                TunerComponent = __decorate([
                    core_1.Component({
                        selector: 'tuner',
                        templateUrl: 'app/tuner.component.html',
                        providers: [AudioContext, OscillatorNode],
                        styleUrls: ['app/tuner.component.css'],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, music_service_1.MusicService])
                ], TunerComponent);
                return TunerComponent;
            })();
            exports_1("TunerComponent", TunerComponent);
        }
    }
});
//# sourceMappingURL=tuner.component.js.map