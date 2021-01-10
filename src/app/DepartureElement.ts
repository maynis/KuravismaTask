export interface DepartureElement {
  id: string;
  arrivalTime: string;
  scheduledTime: string;
  line: string;
  direction: string;
  platform: {name: string, type: string};
  arrivalTimeRelative: number;
  scheduledTimeRelative: number;
  delayTime: number;
  state: string;
  mode: {title: string, name: string, iconUrl: string};
  diva: {number: number, network: string};
}

