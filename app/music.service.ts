import {Injectable} from 'angular2/core';

import { AudioContextService } from './audioContext.service';

@Injectable()

const ROOT_NOTE_FREQUENCY = 440;
const HALF_STEP_RANGE = 88;
const RANGE_CENTER = 48;

export class MusicService {
    /* Takes absolute half-step distance, return corresponding frequency */
    getNoteFrequency(halfStepDistance = 0) {
        var a = Math.pow(2, 1 / 12);
        return ROOT_NOTE_FREQUENCY * Math.pow(a, halfStepDistance)
    }


}
