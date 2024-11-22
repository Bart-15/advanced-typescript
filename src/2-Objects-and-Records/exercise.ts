import { Equal, Expect } from '..';

type PartialByKeys<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type OptionalName<T extends { name: string }> = PartialByKeys<T, 'name'>;

type result1 = OptionalName<{
  id: number;
  name: string;
  age: unknown;
}>;

// Expected type: { name?: string } & { id: number; age: unknown }
type test1 = Expect<
  Equal<result1, { name?: string } & { id: number; age: unknown }>
>;
