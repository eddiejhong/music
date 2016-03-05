import {Injectable} from 'angular2/core';

@Injectable()

const ROOT_NOTE_FREQUENCY = 440;
const HALF_STEP_RANGE = 88;
const RANGE_CENTER = 48;
const NOTES_INFO = {
    0: {
        name: 'A',
        natural: true
    }
    1: {
        name: 'A#/B♭',
        natural: false
    }
    2: {
        name: 'B',
        natural: true
    }
    3: {
        name: 'C',
        natural: true
    }
    4: {
        name: 'C#/D♭',
        natural: false
    }
    5: {
        name: 'D',
        natural: true
    }
    6: {
        name: 'D#E♭',
        natural: false
    }
    7: {
        name: 'E',
        natural: true
    }
    8: {
        name: 'F',
        natural: true
    }
    9: {
        name: 'F#/G♭',
        natural: false
    }
    10: {
        name: 'G',
        natural: true
    }
    11: {
        name: 'G#/A♭',
        natural: false
    }
}

export class MusicService {
    /* Takes absolute half-step distance, return corresponding frequency */
    getNoteFrequency(halfStepDistance = 0) {
        var a = Math.pow(2, 1 / 12);
        return ROOT_NOTE_FREQUENCY * Math.pow(a, halfStepDistance)
    }

    getNoteRange(instrument = 'piano') {
        var lowerLimit = 0,
            upperLimit = 0,
            notes = [];

        switch (instrument) {
            case 'guitar':
                break;
            case 'piano':
            default:
                lowerLimit = -24;
                upperLimit = 28;
                notes = [];

                for (var i = lowerLimit; i < upperLimit; i++) {
                    var note = NOTES_INFO[((i % 12)+12)%12 ];
                    notes.push({
                        distance: i,
                        name: note.name,
                        natural: note.natural
                    });
                }
                break;
        }

        return notes;
    }
}
