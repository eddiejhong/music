import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { MusicService } from './music.service';

@Component({
    templateUrl: 'app/piano.component.html',
    providers: [AudioContext, OscillatorNode],
    styleUrls  : ['app/piano.component.css'],
})
export class PianoComponent implements OnInit {
    _context: AudioContext;
    _osc: OscillatorNode;
    _pianoNotesArray: [];

    constructor(
        private _router: Router,
        private _musicService: MusicService,
    ) { }

    ngOnInit() {
        this.setContext(new AudioContext);
        this.setPianoNotesArray(this.getPianoNotesArray());
    }

    setContext(context: AudioContext) {
        this._context = context;
    }

    getContext() {
        return this._context;
    }

    getPianoNotesArray() {
        return this._musicService.getNoteRange('piano');
    }

    setPianoNotesArray(notesArray) {
        this._pianoNotesArray = notesArray;
    }

    playNote(half_step_distance = 0, duration = 1000) {
        var that = this;
        var osc = that.startNote(half_step_distance);

        setTimeout(function() {
            that.stopNote(osc);
        }, duration);
    }

    startNote(half_step_distance = 0) {
        var frequency = this._musicService.getNoteFrequency(half_step_distance);

        var context = this.getContext(),
            audioDestination = context.destination;

        var osc = context.createOscillator();
        osc.frequency.value = frequency;
        osc.connect(audioDestination);
        osc.start(0);

        return osc;
    }

    stopNote(osc) {
        osc.stop(0);
    }
}
