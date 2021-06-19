import { KeyboardEventHandler} from 'react';

export interface FilterProps {
  id: string;
  keyupHandler: KeyboardEventHandler<HTMLInputElement>;
}