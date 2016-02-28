import {Injectable} from 'angular2/core';

@Injectable()

export class AudioContextService {
    static instance:AudioContextService;
    static instance:OscillatorNode;
    static isCreating:Boolean = false;
    static isCreatingOsc:Boolean = false;

    constructor() {
        if (!AudioContextService.isCreating) {
            throw new Error("You can't call new in Singleton instances! Call AudioContextService.getInstance() instead.");
        }
    }

    static getInstance() {
        if (AudioContextService.instance == null) {
            AudioContextService.isCreating = true;
            AudioContextService.instance = new AudioContextService();
            AudioContextService.isCreating = false;
        }

        return AudioContextService.instance;
    }

    static getOscInstance() {
        if (AudioContextService.instance == null) {
            AudioContextService.isCreating = true;
            AudioContextService.instance = new AudioContextService();
            AudioContextService.isCreating = false;
        }

        return AudioContextService.instance;
    }
}
