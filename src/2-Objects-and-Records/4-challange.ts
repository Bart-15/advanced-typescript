import { Equal, Expect } from '..';

/**           This is a type constraint that ensures Obj has an 'id' property.
 *            We'll learn more about it later on.
 *                             👇                      */

type PartialByKeys<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type OptionalizeId<T extends { id: unknown }> = PartialByKeys<T, 'id'>;

// Test case to check OptionalizeId utility type with an object containing id, name, and age properties.
type result1 = OptionalizeId<{
  id: number;
  name: string;
  age: unknown;
}>;

// Expected type: { id?: number } & { name: string; age: unknown }
type test1 = Expect<
  Equal<result1, { id?: number } & { name: string; age: unknown }>
>;

// Test case to check OptionalizeId utility type with an object containing id, title, and content properties.
type result2 = OptionalizeId<{
  id: string;
  title: string;
  content: string;
}>;

// Expected type: { id?: string } & { title: string; content: string }
type test2 = Expect<
  Equal<result2, { id?: string } & { title: string; content: string }>
>;
