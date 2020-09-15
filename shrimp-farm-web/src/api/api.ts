export * from './farm.service';
import { FarmService } from './farm.service';
export * from './pond.service';
import { PondService } from './pond.service';
export const APIS = [FarmService, PondService];
