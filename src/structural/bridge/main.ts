import { RemoteControl } from './remote-control/remote-control';
import { RemoteControlWithVolume } from './remote-control/remote-control-with-volume';
import { Tv } from './device/tv';
import { Radio } from './device/radio';

export function clientCode(
  abstraction: RemoteControl | RemoteControlWithVolume,
): void {
  abstraction.togglePower(); // true

  // Type Guard
  if (!('volumeUp' in abstraction)) return;

  abstraction.volumeUp(); // 20
  abstraction.volumeUp(); // 30
  abstraction.volumeDown(); // 20
}

const tv = new Tv();
const radio = new Radio();

const radioRemoteControl = new RemoteControl(radio);
clientCode(radioRemoteControl);

const tvRemoteControl = new RemoteControlWithVolume(tv);
clientCode(tvRemoteControl);
