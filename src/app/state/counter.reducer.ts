import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, double } from './counter.action';

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state)  => state + 1),
  on(decrement, (state)  => state - 1),
  on(reset,     (_state) => 0),
  on(double,    (state)  => state * 2)
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}