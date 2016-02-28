import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';

import { MusicService } from './music.service';
import { AudioContextService } from './audioContext.service';

@Component({
    selector: 'tuner',
    templateUrl: 'app/tuner.component.html',
    // styleUrls  : ['app/tuner.component.css'],
    // directives: [HeroDetailComponent],
    providers: [
        AudioContextService
    ]
})
export class TunerComponent implements OnInit {
    var foo;

    constructor(
        private _router: Router,
        private _musicService: MusicService,
        private _audioContextService: AudioContextService
    ) { }

    ngOnInit() {
        // navigator.getUserMedia = navigator.getUserMedia ||
        //     navigator.webkitGetUserMedia ||
        //     navigator.mozGetUserMedia;

        // navigator.getUserMedia(
        //     { audio: true, video: true },
        //     function(stream) {
        //         var audio_context = new AudioContext();
        //         var microphone = audio_context.createMediaStreamSource(stream);

        //     },
        //     function(error) {
        //         console.log("The following error occurred: " + err.name);
        //     }
        // );
    }

    playNote(duration = 1000) {
        var that = this;
        that.startNote();

        setTimeout(function() {
            that.stopNote();
        }, duration);

    }

    startNote(half_step_distance = 0) {
        var frequency = this._musicService.getNoteFrequency(half_step_distance);

        var context = _audioContextService.getInstance(),
            audioDestination = context.destination;

        var osc = context.createOscillator();
        osc.frequency.value = frequency;
        osc.connect(audioDestination);
        osc.start(0);
    }

    stopNote() {
        var context = _audioContextService.getInstance(),
            audioDestination = context.destination;

        var osc = context.createOscillator();
        osc.connect(audioDestination);
        osc.start(0);
    }


}
