import { Injectable } from '@angular/core';
import Coordinate from '../../models/coordinate.model';
import { SwitchTurnService } from '../switch-trun-service/switch-turn.service';

@Injectable({
  providedIn: 'root'
})
export class ShotLogService {
  public playerShots: string[] = [];
  public computerShots: string[] = [];

  constructor(private _switchTurnService: SwitchTurnService) { }

  log (owner: string, message: string): void {
    if (owner === 'Human') {
      this.computerShots.push(message);
    } else {
      this.playerShots.push(message);
    }
  }

  getLog (owner) {
    if (owner === 'Human') {
      return this.playerShots;
    } else {
      return this.computerShots;
    }
  }
}
