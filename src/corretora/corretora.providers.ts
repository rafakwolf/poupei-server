import { Corretora } from './entities/corretora.entity';

export const corretoraProviders = [
  {
    provide: 'CORRETORA_REPOSITORY',
    useValue: Corretora,
  },
];
