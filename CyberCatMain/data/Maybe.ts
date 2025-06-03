// 1) The type itself
//Maybe it will be useful in the maybe future I GUESS
export type Maybe<T> =
  | { kind: 'just';    value: T }
  | { kind: 'nothing' };


export const just = <T>(value: T): Maybe<T> => ({ kind: 'just', value });
export const nothing = <T = never>(): Maybe<T> => ({ kind: 'nothing' });

// 3) Helpers
export function isJust<T>(m: Maybe<T>): m is { kind: 'just'; value: T } {
  return m.kind === 'just';
}
export function isNothing<T>(m: Maybe<T>): m is { kind: 'nothing' } {
  return m.kind === 'nothing';
}

export function mapMaybe<A, B>(m: Maybe<A>, fn: (a: A) => B): Maybe<B> {
  return isJust(m) ? just(fn(m.value)) : nothing();
}
export function flatMapMaybe<A, B>(m: Maybe<A>, fn: (a: A) => Maybe<B>): Maybe<B> {
  return isJust(m) ? fn(m.value) : nothing();
}
export function getOrElse<T>(m: Maybe<T>, fallback: T): T {
  return isJust(m) ? m.value : fallback;
}
