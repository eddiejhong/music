System.register([], function(exports_1) {
    var ROOT_NOTE_FREQUENCY, HALF_STEP_RANGE, RANGE_CENTER, NOTES_INFO, MusicService;
    return {
        setters:[],
        execute: function() {
            ROOT_NOTE_FREQUENCY = 440;
            HALF_STEP_RANGE = 88;
            RANGE_CENTER = 48;
            NOTES_INFO = {
                0: {
                    name: 'A',
                    natural: true
                },
                1: {
                    name: 'A#/B♭',
                    natural: false
                },
                2: {
                    name: 'B',
                    natural: true
                },
                3: {
                    name: 'C',
                    natural: true
                },
                4: {
                    name: 'C#/D♭',
                    natural: false
                },
                5: {
                    name: 'D',
                    natural: true
                },
                6: {
                    name: 'D#E♭',
                    natural: false
                },
                7: {
                    name: 'E',
                    natural: true
                },
                8: {
                    name: 'F',
                    natural: true
                },
                9: {
                    name: 'F#/G♭',
                    natural: false
                },
                10: {
                    name: 'G',
                    natural: true
                },
                11: {
                    name: 'G#/A♭',
                    natural: false
                }
            };
            MusicService = (function () {
                function MusicService() {
                }
                /* Takes absolute half-step distance, return corresponding frequency */
                MusicService.prototype.getNoteFrequency = function (halfStepDistance) {
                    if (halfStepDistance === void 0) { halfStepDistance = 0; }
                    var a = Math.pow(2, 1 / 12);
                    return ROOT_NOTE_FREQUENCY * Math.pow(a, halfStepDistance);
                };
                MusicService.prototype.getNoteRange = function (instrument) {
                    if (instrument === void 0) { instrument = 'piano'; }
                    var lowerLimit = 0, upperLimit = 0, notes = [];
                    switch (instrument) {
                        case 'guitar':
                            break;
                        case 'piano':
                        default:
                            lowerLimit = -24;
                            upperLimit = 28;
                            notes = [];
                            for (var i = lowerLimit; i < upperLimit; i++) {
                                var note = NOTES_INFO[((i % 12) + 12) % 12];
                                notes.push({
                                    distance: i,
                                    name: note.name,
                                    natural: note.natural
                                });
                            }
                            break;
                    }
                    return notes;
                };
                return MusicService;
            })();
            exports_1("MusicService", MusicService);
        }
    }
});
//# sourceMappingURL=music.service.js.map