import { SmartHouseLight } from './smart-house-light';
import { SmartHouseCommand } from './smart-house-command';

export class LightPowerCommand implements SmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}

  execute(): void {
    this.light.on();
  }

  undo(): void {
    this.light.off();
  }
}
