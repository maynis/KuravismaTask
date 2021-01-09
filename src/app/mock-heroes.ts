import {Stop} from './Stop';
import {DepartureElement} from './DepartureElement';

export const STOPS: Stop[] = [
  {
    city: 'Dresden',
    coords: [13.752928687844232, 51.0593144297296],
    name: 'Rosa-Luxemburg-Platz',
    id: 33000011,
    type: 'Stop'
  },
  {
    city: 'Dresden',
    coords: [13.867185413654262, 50.99777098452579],
    name: 'Freibad Wostra',
    id: 33000987,
    type: 'Stop'
  },
  {
    city: 'Cossebaude/Neu-Leuteritz',
    coords: [13.623282593510895, 51.08442527424181],
    name: 'Sonnenleite',
    id: 33000456,
    type: 'Stop'
  },
];

export const DEPARTURES: DepartureElement[] =
[{
  id: 'voe:21086: :H:j21',
  arrivalTime: '2021-01-09T13:55:00.000Z',
  scheduledTime: '2021-01-09T13:55:00.000Z',
  line: '86',
  direction: 'Kreischa',
  platform: {
    name: '1', type: 'Platform'
  },
  arrivalTimeRelative: 8,
  scheduledTimeRelative: 8,
  delayTime: 0,
  state: 'InTime',
  mode: {
    title: 'Bus', name: 'CityBus', iconUrl: 'https://www.dvb.de/assets/img/trans-icon/transport-bus.svg'
  },
  diva: {
    number: 21086, network: 'voe'
  }
}];

