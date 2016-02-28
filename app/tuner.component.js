System.register(['angular2/core', 'angular2/router', './music.service', './audioContext.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, music_service_1, audioContext_service_1;
    var TunerComponent, foo, that, frequency, context, audioDestination, osc;
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
            },
            function (audioContext_service_1_1) {
                audioContext_service_1 = audioContext_service_1_1;
            }],
        execute: function() {
            TunerComponent = (function () {
                function TunerComponent() {
                }
                TunerComponent = __decorate([
                    core_1.Component({
                        selector: 'tuner',
                        templateUrl: 'app/tuner.component.html',
                        // styleUrls  : ['app/tuner.component.css'],
                        // directives: [HeroDetailComponent],
                        providers: [
                            audioContext_service_1.AudioContextService
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TunerComponent);
                return TunerComponent;
            })();
            exports_1("TunerComponent", TunerComponent);
            constructor(private, _router, router_1.Router, private, _musicService, music_service_1.MusicService, private, _audioContextService, audioContext_service_1.AudioContextService);
            { }
            ngOnInit();
            {
            }
            playNote(duration = 1000);
            {
                that = this;
                that.startNote();
                setTimeout(function () {
                    that.stopNote();
                }, duration);
            }
            startNote(half_step_distance = 0);
            {
                frequency = this._musicService.getNoteFrequency(half_step_distance);
                context = _audioContextService.getInstance(), audioDestination = context.destination;
                osc = context.createOscillator();
                osc.frequency.value = frequency;
                osc.connect(audioDestination);
                osc.start(0);
            }
            stopNote();
            {
                context = _audioContextService.getInstance(), audioDestination = context.destination;
                osc = context.createOscillator();
                osc.connect(audioDestination);
                osc.start(0);
            }
        }
    }
});
//# sourceMappingURL=tuner.component.js.map