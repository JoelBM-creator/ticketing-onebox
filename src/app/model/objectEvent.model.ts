import { Evento } from './evento.model';
import { Session } from './session.model';

export class ObjectEvent {
  constructor(public event: Evento, public sessions: Session[]) {}
}
