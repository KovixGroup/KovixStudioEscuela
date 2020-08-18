export type Page<T> = {
  count: number;
  rows: T[];
};

export type ServerErrorResponse = {
  message: string;
  internal_code: string;
};

export type Constructor<T = any> = new (..._: any) => T;

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]>;
};

export type Intersection<U> = (U extends any
? (k: U) => void
: never) extends (k: infer I) => void
  ? I
  : never;

/**
 * Given a union type of class instances discriminated by a type field
 * returns a object type where the keys are possible values of the type
 * field and the values are the class constructor type that strictly
 * matches its key's type field value.
 * @param T - Union type of classes.
 * @param F - Type field.
 */
export type StrictTypeMap<
  T extends { [key in F]: string },
  F extends string | symbol | number = 'type'
> = Intersection<
  T extends { [key in F]: string } ? { [key in T[F]]: Constructor<T> } : never
>;
