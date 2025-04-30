
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Farm
 * 
 */
export type Farm = $Result.DefaultSelection<Prisma.$FarmPayload>
/**
 * Model Sector
 * 
 */
export type Sector = $Result.DefaultSelection<Prisma.$SectorPayload>
/**
 * Model Crop
 * 
 */
export type Crop = $Result.DefaultSelection<Prisma.$CropPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.farm`: Exposes CRUD operations for the **Farm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Farms
    * const farms = await prisma.farm.findMany()
    * ```
    */
  get farm(): Prisma.FarmDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sector`: Exposes CRUD operations for the **Sector** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sectors
    * const sectors = await prisma.sector.findMany()
    * ```
    */
  get sector(): Prisma.SectorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.crop`: Exposes CRUD operations for the **Crop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Crops
    * const crops = await prisma.crop.findMany()
    * ```
    */
  get crop(): Prisma.CropDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Farm: 'Farm',
    Sector: 'Sector',
    Crop: 'Crop'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "farm" | "sector" | "crop"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Farm: {
        payload: Prisma.$FarmPayload<ExtArgs>
        fields: Prisma.FarmFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FarmFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FarmFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          findFirst: {
            args: Prisma.FarmFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FarmFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          findMany: {
            args: Prisma.FarmFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>[]
          }
          create: {
            args: Prisma.FarmCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          createMany: {
            args: Prisma.FarmCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FarmCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>[]
          }
          delete: {
            args: Prisma.FarmDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          update: {
            args: Prisma.FarmUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          deleteMany: {
            args: Prisma.FarmDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FarmUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FarmUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>[]
          }
          upsert: {
            args: Prisma.FarmUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          aggregate: {
            args: Prisma.FarmAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFarm>
          }
          groupBy: {
            args: Prisma.FarmGroupByArgs<ExtArgs>
            result: $Utils.Optional<FarmGroupByOutputType>[]
          }
          count: {
            args: Prisma.FarmCountArgs<ExtArgs>
            result: $Utils.Optional<FarmCountAggregateOutputType> | number
          }
        }
      }
      Sector: {
        payload: Prisma.$SectorPayload<ExtArgs>
        fields: Prisma.SectorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>
          }
          findFirst: {
            args: Prisma.SectorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>
          }
          findMany: {
            args: Prisma.SectorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>[]
          }
          create: {
            args: Prisma.SectorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>
          }
          createMany: {
            args: Prisma.SectorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>[]
          }
          delete: {
            args: Prisma.SectorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>
          }
          update: {
            args: Prisma.SectorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>
          }
          deleteMany: {
            args: Prisma.SectorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SectorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>[]
          }
          upsert: {
            args: Prisma.SectorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>
          }
          aggregate: {
            args: Prisma.SectorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSector>
          }
          groupBy: {
            args: Prisma.SectorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectorCountArgs<ExtArgs>
            result: $Utils.Optional<SectorCountAggregateOutputType> | number
          }
        }
      }
      Crop: {
        payload: Prisma.$CropPayload<ExtArgs>
        fields: Prisma.CropFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CropFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CropFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>
          }
          findFirst: {
            args: Prisma.CropFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CropFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>
          }
          findMany: {
            args: Prisma.CropFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>[]
          }
          create: {
            args: Prisma.CropCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>
          }
          createMany: {
            args: Prisma.CropCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CropCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>[]
          }
          delete: {
            args: Prisma.CropDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>
          }
          update: {
            args: Prisma.CropUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>
          }
          deleteMany: {
            args: Prisma.CropDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CropUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CropUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>[]
          }
          upsert: {
            args: Prisma.CropUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>
          }
          aggregate: {
            args: Prisma.CropAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCrop>
          }
          groupBy: {
            args: Prisma.CropGroupByArgs<ExtArgs>
            result: $Utils.Optional<CropGroupByOutputType>[]
          }
          count: {
            args: Prisma.CropCountArgs<ExtArgs>
            result: $Utils.Optional<CropCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    farm?: FarmOmit
    sector?: SectorOmit
    crop?: CropOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    farms: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farms?: boolean | UserCountOutputTypeCountFarmsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFarmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmWhereInput
  }


  /**
   * Count Type FarmCountOutputType
   */

  export type FarmCountOutputType = {
    sectors: number
  }

  export type FarmCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sectors?: boolean | FarmCountOutputTypeCountSectorsArgs
  }

  // Custom InputTypes
  /**
   * FarmCountOutputType without action
   */
  export type FarmCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmCountOutputType
     */
    select?: FarmCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FarmCountOutputType without action
   */
  export type FarmCountOutputTypeCountSectorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectorWhereInput
  }


  /**
   * Count Type SectorCountOutputType
   */

  export type SectorCountOutputType = {
    crops: number
  }

  export type SectorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crops?: boolean | SectorCountOutputTypeCountCropsArgs
  }

  // Custom InputTypes
  /**
   * SectorCountOutputType without action
   */
  export type SectorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectorCountOutputType
     */
    select?: SectorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SectorCountOutputType without action
   */
  export type SectorCountOutputTypeCountCropsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CropWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    farms?: boolean | User$farmsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farms?: boolean | User$farmsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      farms: Prisma.$FarmPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    farms<T extends User$farmsArgs<ExtArgs> = {}>(args?: Subset<T, User$farmsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.farms
   */
  export type User$farmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    where?: FarmWhereInput
    orderBy?: FarmOrderByWithRelationInput | FarmOrderByWithRelationInput[]
    cursor?: FarmWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FarmScalarFieldEnum | FarmScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Farm
   */

  export type AggregateFarm = {
    _count: FarmCountAggregateOutputType | null
    _avg: FarmAvgAggregateOutputType | null
    _sum: FarmSumAggregateOutputType | null
    _min: FarmMinAggregateOutputType | null
    _max: FarmMaxAggregateOutputType | null
  }

  export type FarmAvgAggregateOutputType = {
    size: number | null
  }

  export type FarmSumAggregateOutputType = {
    size: number | null
  }

  export type FarmMinAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    size: number | null
    owner: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type FarmMaxAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    size: number | null
    owner: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type FarmCountAggregateOutputType = {
    id: number
    name: number
    location: number
    size: number
    owner: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type FarmAvgAggregateInputType = {
    size?: true
  }

  export type FarmSumAggregateInputType = {
    size?: true
  }

  export type FarmMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    size?: true
    owner?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type FarmMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    size?: true
    owner?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type FarmCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    size?: true
    owner?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type FarmAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Farm to aggregate.
     */
    where?: FarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farms to fetch.
     */
    orderBy?: FarmOrderByWithRelationInput | FarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Farms
    **/
    _count?: true | FarmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FarmAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FarmSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FarmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FarmMaxAggregateInputType
  }

  export type GetFarmAggregateType<T extends FarmAggregateArgs> = {
        [P in keyof T & keyof AggregateFarm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFarm[P]>
      : GetScalarType<T[P], AggregateFarm[P]>
  }




  export type FarmGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmWhereInput
    orderBy?: FarmOrderByWithAggregationInput | FarmOrderByWithAggregationInput[]
    by: FarmScalarFieldEnum[] | FarmScalarFieldEnum
    having?: FarmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FarmCountAggregateInputType | true
    _avg?: FarmAvgAggregateInputType
    _sum?: FarmSumAggregateInputType
    _min?: FarmMinAggregateInputType
    _max?: FarmMaxAggregateInputType
  }

  export type FarmGroupByOutputType = {
    id: string
    name: string | null
    location: string | null
    size: number | null
    owner: string | null
    createdAt: Date
    updatedAt: Date
    userId: string | null
    _count: FarmCountAggregateOutputType | null
    _avg: FarmAvgAggregateOutputType | null
    _sum: FarmSumAggregateOutputType | null
    _min: FarmMinAggregateOutputType | null
    _max: FarmMaxAggregateOutputType | null
  }

  type GetFarmGroupByPayload<T extends FarmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FarmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FarmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FarmGroupByOutputType[P]>
            : GetScalarType<T[P], FarmGroupByOutputType[P]>
        }
      >
    >


  export type FarmSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    size?: boolean
    owner?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | Farm$userArgs<ExtArgs>
    sectors?: boolean | Farm$sectorsArgs<ExtArgs>
    _count?: boolean | FarmCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farm"]>

  export type FarmSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    size?: boolean
    owner?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | Farm$userArgs<ExtArgs>
  }, ExtArgs["result"]["farm"]>

  export type FarmSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    size?: boolean
    owner?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | Farm$userArgs<ExtArgs>
  }, ExtArgs["result"]["farm"]>

  export type FarmSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    size?: boolean
    owner?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type FarmOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location" | "size" | "owner" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["farm"]>
  export type FarmInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Farm$userArgs<ExtArgs>
    sectors?: boolean | Farm$sectorsArgs<ExtArgs>
    _count?: boolean | FarmCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FarmIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Farm$userArgs<ExtArgs>
  }
  export type FarmIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Farm$userArgs<ExtArgs>
  }

  export type $FarmPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Farm"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      sectors: Prisma.$SectorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      location: string | null
      size: number | null
      owner: string | null
      createdAt: Date
      updatedAt: Date
      userId: string | null
    }, ExtArgs["result"]["farm"]>
    composites: {}
  }

  type FarmGetPayload<S extends boolean | null | undefined | FarmDefaultArgs> = $Result.GetResult<Prisma.$FarmPayload, S>

  type FarmCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FarmFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FarmCountAggregateInputType | true
    }

  export interface FarmDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Farm'], meta: { name: 'Farm' } }
    /**
     * Find zero or one Farm that matches the filter.
     * @param {FarmFindUniqueArgs} args - Arguments to find a Farm
     * @example
     * // Get one Farm
     * const farm = await prisma.farm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FarmFindUniqueArgs>(args: SelectSubset<T, FarmFindUniqueArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Farm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FarmFindUniqueOrThrowArgs} args - Arguments to find a Farm
     * @example
     * // Get one Farm
     * const farm = await prisma.farm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FarmFindUniqueOrThrowArgs>(args: SelectSubset<T, FarmFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Farm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmFindFirstArgs} args - Arguments to find a Farm
     * @example
     * // Get one Farm
     * const farm = await prisma.farm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FarmFindFirstArgs>(args?: SelectSubset<T, FarmFindFirstArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Farm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmFindFirstOrThrowArgs} args - Arguments to find a Farm
     * @example
     * // Get one Farm
     * const farm = await prisma.farm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FarmFindFirstOrThrowArgs>(args?: SelectSubset<T, FarmFindFirstOrThrowArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Farms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Farms
     * const farms = await prisma.farm.findMany()
     * 
     * // Get first 10 Farms
     * const farms = await prisma.farm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const farmWithIdOnly = await prisma.farm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FarmFindManyArgs>(args?: SelectSubset<T, FarmFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Farm.
     * @param {FarmCreateArgs} args - Arguments to create a Farm.
     * @example
     * // Create one Farm
     * const Farm = await prisma.farm.create({
     *   data: {
     *     // ... data to create a Farm
     *   }
     * })
     * 
     */
    create<T extends FarmCreateArgs>(args: SelectSubset<T, FarmCreateArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Farms.
     * @param {FarmCreateManyArgs} args - Arguments to create many Farms.
     * @example
     * // Create many Farms
     * const farm = await prisma.farm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FarmCreateManyArgs>(args?: SelectSubset<T, FarmCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Farms and returns the data saved in the database.
     * @param {FarmCreateManyAndReturnArgs} args - Arguments to create many Farms.
     * @example
     * // Create many Farms
     * const farm = await prisma.farm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Farms and only return the `id`
     * const farmWithIdOnly = await prisma.farm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FarmCreateManyAndReturnArgs>(args?: SelectSubset<T, FarmCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Farm.
     * @param {FarmDeleteArgs} args - Arguments to delete one Farm.
     * @example
     * // Delete one Farm
     * const Farm = await prisma.farm.delete({
     *   where: {
     *     // ... filter to delete one Farm
     *   }
     * })
     * 
     */
    delete<T extends FarmDeleteArgs>(args: SelectSubset<T, FarmDeleteArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Farm.
     * @param {FarmUpdateArgs} args - Arguments to update one Farm.
     * @example
     * // Update one Farm
     * const farm = await prisma.farm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FarmUpdateArgs>(args: SelectSubset<T, FarmUpdateArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Farms.
     * @param {FarmDeleteManyArgs} args - Arguments to filter Farms to delete.
     * @example
     * // Delete a few Farms
     * const { count } = await prisma.farm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FarmDeleteManyArgs>(args?: SelectSubset<T, FarmDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Farms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Farms
     * const farm = await prisma.farm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FarmUpdateManyArgs>(args: SelectSubset<T, FarmUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Farms and returns the data updated in the database.
     * @param {FarmUpdateManyAndReturnArgs} args - Arguments to update many Farms.
     * @example
     * // Update many Farms
     * const farm = await prisma.farm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Farms and only return the `id`
     * const farmWithIdOnly = await prisma.farm.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FarmUpdateManyAndReturnArgs>(args: SelectSubset<T, FarmUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Farm.
     * @param {FarmUpsertArgs} args - Arguments to update or create a Farm.
     * @example
     * // Update or create a Farm
     * const farm = await prisma.farm.upsert({
     *   create: {
     *     // ... data to create a Farm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Farm we want to update
     *   }
     * })
     */
    upsert<T extends FarmUpsertArgs>(args: SelectSubset<T, FarmUpsertArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Farms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmCountArgs} args - Arguments to filter Farms to count.
     * @example
     * // Count the number of Farms
     * const count = await prisma.farm.count({
     *   where: {
     *     // ... the filter for the Farms we want to count
     *   }
     * })
    **/
    count<T extends FarmCountArgs>(
      args?: Subset<T, FarmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FarmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Farm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FarmAggregateArgs>(args: Subset<T, FarmAggregateArgs>): Prisma.PrismaPromise<GetFarmAggregateType<T>>

    /**
     * Group by Farm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FarmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FarmGroupByArgs['orderBy'] }
        : { orderBy?: FarmGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FarmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFarmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Farm model
   */
  readonly fields: FarmFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Farm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FarmClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Farm$userArgs<ExtArgs> = {}>(args?: Subset<T, Farm$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sectors<T extends Farm$sectorsArgs<ExtArgs> = {}>(args?: Subset<T, Farm$sectorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Farm model
   */
  interface FarmFieldRefs {
    readonly id: FieldRef<"Farm", 'String'>
    readonly name: FieldRef<"Farm", 'String'>
    readonly location: FieldRef<"Farm", 'String'>
    readonly size: FieldRef<"Farm", 'Int'>
    readonly owner: FieldRef<"Farm", 'String'>
    readonly createdAt: FieldRef<"Farm", 'DateTime'>
    readonly updatedAt: FieldRef<"Farm", 'DateTime'>
    readonly userId: FieldRef<"Farm", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Farm findUnique
   */
  export type FarmFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter, which Farm to fetch.
     */
    where: FarmWhereUniqueInput
  }

  /**
   * Farm findUniqueOrThrow
   */
  export type FarmFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter, which Farm to fetch.
     */
    where: FarmWhereUniqueInput
  }

  /**
   * Farm findFirst
   */
  export type FarmFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter, which Farm to fetch.
     */
    where?: FarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farms to fetch.
     */
    orderBy?: FarmOrderByWithRelationInput | FarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Farms.
     */
    cursor?: FarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Farms.
     */
    distinct?: FarmScalarFieldEnum | FarmScalarFieldEnum[]
  }

  /**
   * Farm findFirstOrThrow
   */
  export type FarmFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter, which Farm to fetch.
     */
    where?: FarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farms to fetch.
     */
    orderBy?: FarmOrderByWithRelationInput | FarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Farms.
     */
    cursor?: FarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Farms.
     */
    distinct?: FarmScalarFieldEnum | FarmScalarFieldEnum[]
  }

  /**
   * Farm findMany
   */
  export type FarmFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter, which Farms to fetch.
     */
    where?: FarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farms to fetch.
     */
    orderBy?: FarmOrderByWithRelationInput | FarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Farms.
     */
    cursor?: FarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farms.
     */
    skip?: number
    distinct?: FarmScalarFieldEnum | FarmScalarFieldEnum[]
  }

  /**
   * Farm create
   */
  export type FarmCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * The data needed to create a Farm.
     */
    data: XOR<FarmCreateInput, FarmUncheckedCreateInput>
  }

  /**
   * Farm createMany
   */
  export type FarmCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Farms.
     */
    data: FarmCreateManyInput | FarmCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Farm createManyAndReturn
   */
  export type FarmCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * The data used to create many Farms.
     */
    data: FarmCreateManyInput | FarmCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Farm update
   */
  export type FarmUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * The data needed to update a Farm.
     */
    data: XOR<FarmUpdateInput, FarmUncheckedUpdateInput>
    /**
     * Choose, which Farm to update.
     */
    where: FarmWhereUniqueInput
  }

  /**
   * Farm updateMany
   */
  export type FarmUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Farms.
     */
    data: XOR<FarmUpdateManyMutationInput, FarmUncheckedUpdateManyInput>
    /**
     * Filter which Farms to update
     */
    where?: FarmWhereInput
    /**
     * Limit how many Farms to update.
     */
    limit?: number
  }

  /**
   * Farm updateManyAndReturn
   */
  export type FarmUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * The data used to update Farms.
     */
    data: XOR<FarmUpdateManyMutationInput, FarmUncheckedUpdateManyInput>
    /**
     * Filter which Farms to update
     */
    where?: FarmWhereInput
    /**
     * Limit how many Farms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Farm upsert
   */
  export type FarmUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * The filter to search for the Farm to update in case it exists.
     */
    where: FarmWhereUniqueInput
    /**
     * In case the Farm found by the `where` argument doesn't exist, create a new Farm with this data.
     */
    create: XOR<FarmCreateInput, FarmUncheckedCreateInput>
    /**
     * In case the Farm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FarmUpdateInput, FarmUncheckedUpdateInput>
  }

  /**
   * Farm delete
   */
  export type FarmDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter which Farm to delete.
     */
    where: FarmWhereUniqueInput
  }

  /**
   * Farm deleteMany
   */
  export type FarmDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Farms to delete
     */
    where?: FarmWhereInput
    /**
     * Limit how many Farms to delete.
     */
    limit?: number
  }

  /**
   * Farm.user
   */
  export type Farm$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Farm.sectors
   */
  export type Farm$sectorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
    where?: SectorWhereInput
    orderBy?: SectorOrderByWithRelationInput | SectorOrderByWithRelationInput[]
    cursor?: SectorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectorScalarFieldEnum | SectorScalarFieldEnum[]
  }

  /**
   * Farm without action
   */
  export type FarmDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
  }


  /**
   * Model Sector
   */

  export type AggregateSector = {
    _count: SectorCountAggregateOutputType | null
    _avg: SectorAvgAggregateOutputType | null
    _sum: SectorSumAggregateOutputType | null
    _min: SectorMinAggregateOutputType | null
    _max: SectorMaxAggregateOutputType | null
  }

  export type SectorAvgAggregateOutputType = {
    size: number | null
  }

  export type SectorSumAggregateOutputType = {
    size: number | null
  }

  export type SectorMinAggregateOutputType = {
    id: string | null
    name: string | null
    size: number | null
    farmId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SectorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    size: number | null
    farmId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SectorCountAggregateOutputType = {
    id: number
    name: number
    size: number
    farmId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SectorAvgAggregateInputType = {
    size?: true
  }

  export type SectorSumAggregateInputType = {
    size?: true
  }

  export type SectorMinAggregateInputType = {
    id?: true
    name?: true
    size?: true
    farmId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SectorMaxAggregateInputType = {
    id?: true
    name?: true
    size?: true
    farmId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SectorCountAggregateInputType = {
    id?: true
    name?: true
    size?: true
    farmId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SectorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sector to aggregate.
     */
    where?: SectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sectors to fetch.
     */
    orderBy?: SectorOrderByWithRelationInput | SectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sectors
    **/
    _count?: true | SectorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectorMaxAggregateInputType
  }

  export type GetSectorAggregateType<T extends SectorAggregateArgs> = {
        [P in keyof T & keyof AggregateSector]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSector[P]>
      : GetScalarType<T[P], AggregateSector[P]>
  }




  export type SectorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectorWhereInput
    orderBy?: SectorOrderByWithAggregationInput | SectorOrderByWithAggregationInput[]
    by: SectorScalarFieldEnum[] | SectorScalarFieldEnum
    having?: SectorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectorCountAggregateInputType | true
    _avg?: SectorAvgAggregateInputType
    _sum?: SectorSumAggregateInputType
    _min?: SectorMinAggregateInputType
    _max?: SectorMaxAggregateInputType
  }

  export type SectorGroupByOutputType = {
    id: string
    name: string | null
    size: number | null
    farmId: string | null
    createdAt: Date
    updatedAt: Date
    _count: SectorCountAggregateOutputType | null
    _avg: SectorAvgAggregateOutputType | null
    _sum: SectorSumAggregateOutputType | null
    _min: SectorMinAggregateOutputType | null
    _max: SectorMaxAggregateOutputType | null
  }

  type GetSectorGroupByPayload<T extends SectorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectorGroupByOutputType[P]>
            : GetScalarType<T[P], SectorGroupByOutputType[P]>
        }
      >
    >


  export type SectorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    size?: boolean
    farmId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    farm?: boolean | Sector$farmArgs<ExtArgs>
    crops?: boolean | Sector$cropsArgs<ExtArgs>
    _count?: boolean | SectorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sector"]>

  export type SectorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    size?: boolean
    farmId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    farm?: boolean | Sector$farmArgs<ExtArgs>
  }, ExtArgs["result"]["sector"]>

  export type SectorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    size?: boolean
    farmId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    farm?: boolean | Sector$farmArgs<ExtArgs>
  }, ExtArgs["result"]["sector"]>

  export type SectorSelectScalar = {
    id?: boolean
    name?: boolean
    size?: boolean
    farmId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SectorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "size" | "farmId" | "createdAt" | "updatedAt", ExtArgs["result"]["sector"]>
  export type SectorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farm?: boolean | Sector$farmArgs<ExtArgs>
    crops?: boolean | Sector$cropsArgs<ExtArgs>
    _count?: boolean | SectorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SectorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farm?: boolean | Sector$farmArgs<ExtArgs>
  }
  export type SectorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farm?: boolean | Sector$farmArgs<ExtArgs>
  }

  export type $SectorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sector"
    objects: {
      farm: Prisma.$FarmPayload<ExtArgs> | null
      crops: Prisma.$CropPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      size: number | null
      farmId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sector"]>
    composites: {}
  }

  type SectorGetPayload<S extends boolean | null | undefined | SectorDefaultArgs> = $Result.GetResult<Prisma.$SectorPayload, S>

  type SectorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectorCountAggregateInputType | true
    }

  export interface SectorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sector'], meta: { name: 'Sector' } }
    /**
     * Find zero or one Sector that matches the filter.
     * @param {SectorFindUniqueArgs} args - Arguments to find a Sector
     * @example
     * // Get one Sector
     * const sector = await prisma.sector.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectorFindUniqueArgs>(args: SelectSubset<T, SectorFindUniqueArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sector that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectorFindUniqueOrThrowArgs} args - Arguments to find a Sector
     * @example
     * // Get one Sector
     * const sector = await prisma.sector.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectorFindUniqueOrThrowArgs>(args: SelectSubset<T, SectorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sector that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorFindFirstArgs} args - Arguments to find a Sector
     * @example
     * // Get one Sector
     * const sector = await prisma.sector.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectorFindFirstArgs>(args?: SelectSubset<T, SectorFindFirstArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sector that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorFindFirstOrThrowArgs} args - Arguments to find a Sector
     * @example
     * // Get one Sector
     * const sector = await prisma.sector.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectorFindFirstOrThrowArgs>(args?: SelectSubset<T, SectorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sectors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sectors
     * const sectors = await prisma.sector.findMany()
     * 
     * // Get first 10 Sectors
     * const sectors = await prisma.sector.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectorWithIdOnly = await prisma.sector.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectorFindManyArgs>(args?: SelectSubset<T, SectorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sector.
     * @param {SectorCreateArgs} args - Arguments to create a Sector.
     * @example
     * // Create one Sector
     * const Sector = await prisma.sector.create({
     *   data: {
     *     // ... data to create a Sector
     *   }
     * })
     * 
     */
    create<T extends SectorCreateArgs>(args: SelectSubset<T, SectorCreateArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sectors.
     * @param {SectorCreateManyArgs} args - Arguments to create many Sectors.
     * @example
     * // Create many Sectors
     * const sector = await prisma.sector.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectorCreateManyArgs>(args?: SelectSubset<T, SectorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sectors and returns the data saved in the database.
     * @param {SectorCreateManyAndReturnArgs} args - Arguments to create many Sectors.
     * @example
     * // Create many Sectors
     * const sector = await prisma.sector.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sectors and only return the `id`
     * const sectorWithIdOnly = await prisma.sector.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectorCreateManyAndReturnArgs>(args?: SelectSubset<T, SectorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sector.
     * @param {SectorDeleteArgs} args - Arguments to delete one Sector.
     * @example
     * // Delete one Sector
     * const Sector = await prisma.sector.delete({
     *   where: {
     *     // ... filter to delete one Sector
     *   }
     * })
     * 
     */
    delete<T extends SectorDeleteArgs>(args: SelectSubset<T, SectorDeleteArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sector.
     * @param {SectorUpdateArgs} args - Arguments to update one Sector.
     * @example
     * // Update one Sector
     * const sector = await prisma.sector.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectorUpdateArgs>(args: SelectSubset<T, SectorUpdateArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sectors.
     * @param {SectorDeleteManyArgs} args - Arguments to filter Sectors to delete.
     * @example
     * // Delete a few Sectors
     * const { count } = await prisma.sector.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectorDeleteManyArgs>(args?: SelectSubset<T, SectorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sectors
     * const sector = await prisma.sector.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectorUpdateManyArgs>(args: SelectSubset<T, SectorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sectors and returns the data updated in the database.
     * @param {SectorUpdateManyAndReturnArgs} args - Arguments to update many Sectors.
     * @example
     * // Update many Sectors
     * const sector = await prisma.sector.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sectors and only return the `id`
     * const sectorWithIdOnly = await prisma.sector.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SectorUpdateManyAndReturnArgs>(args: SelectSubset<T, SectorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sector.
     * @param {SectorUpsertArgs} args - Arguments to update or create a Sector.
     * @example
     * // Update or create a Sector
     * const sector = await prisma.sector.upsert({
     *   create: {
     *     // ... data to create a Sector
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sector we want to update
     *   }
     * })
     */
    upsert<T extends SectorUpsertArgs>(args: SelectSubset<T, SectorUpsertArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorCountArgs} args - Arguments to filter Sectors to count.
     * @example
     * // Count the number of Sectors
     * const count = await prisma.sector.count({
     *   where: {
     *     // ... the filter for the Sectors we want to count
     *   }
     * })
    **/
    count<T extends SectorCountArgs>(
      args?: Subset<T, SectorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SectorAggregateArgs>(args: Subset<T, SectorAggregateArgs>): Prisma.PrismaPromise<GetSectorAggregateType<T>>

    /**
     * Group by Sector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SectorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectorGroupByArgs['orderBy'] }
        : { orderBy?: SectorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SectorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sector model
   */
  readonly fields: SectorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sector.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    farm<T extends Sector$farmArgs<ExtArgs> = {}>(args?: Subset<T, Sector$farmArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    crops<T extends Sector$cropsArgs<ExtArgs> = {}>(args?: Subset<T, Sector$cropsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sector model
   */
  interface SectorFieldRefs {
    readonly id: FieldRef<"Sector", 'String'>
    readonly name: FieldRef<"Sector", 'String'>
    readonly size: FieldRef<"Sector", 'Int'>
    readonly farmId: FieldRef<"Sector", 'String'>
    readonly createdAt: FieldRef<"Sector", 'DateTime'>
    readonly updatedAt: FieldRef<"Sector", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sector findUnique
   */
  export type SectorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
    /**
     * Filter, which Sector to fetch.
     */
    where: SectorWhereUniqueInput
  }

  /**
   * Sector findUniqueOrThrow
   */
  export type SectorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
    /**
     * Filter, which Sector to fetch.
     */
    where: SectorWhereUniqueInput
  }

  /**
   * Sector findFirst
   */
  export type SectorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
    /**
     * Filter, which Sector to fetch.
     */
    where?: SectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sectors to fetch.
     */
    orderBy?: SectorOrderByWithRelationInput | SectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sectors.
     */
    cursor?: SectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sectors.
     */
    distinct?: SectorScalarFieldEnum | SectorScalarFieldEnum[]
  }

  /**
   * Sector findFirstOrThrow
   */
  export type SectorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
    /**
     * Filter, which Sector to fetch.
     */
    where?: SectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sectors to fetch.
     */
    orderBy?: SectorOrderByWithRelationInput | SectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sectors.
     */
    cursor?: SectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sectors.
     */
    distinct?: SectorScalarFieldEnum | SectorScalarFieldEnum[]
  }

  /**
   * Sector findMany
   */
  export type SectorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
    /**
     * Filter, which Sectors to fetch.
     */
    where?: SectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sectors to fetch.
     */
    orderBy?: SectorOrderByWithRelationInput | SectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sectors.
     */
    cursor?: SectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sectors.
     */
    skip?: number
    distinct?: SectorScalarFieldEnum | SectorScalarFieldEnum[]
  }

  /**
   * Sector create
   */
  export type SectorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
    /**
     * The data needed to create a Sector.
     */
    data: XOR<SectorCreateInput, SectorUncheckedCreateInput>
  }

  /**
   * Sector createMany
   */
  export type SectorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sectors.
     */
    data: SectorCreateManyInput | SectorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sector createManyAndReturn
   */
  export type SectorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * The data used to create many Sectors.
     */
    data: SectorCreateManyInput | SectorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sector update
   */
  export type SectorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
    /**
     * The data needed to update a Sector.
     */
    data: XOR<SectorUpdateInput, SectorUncheckedUpdateInput>
    /**
     * Choose, which Sector to update.
     */
    where: SectorWhereUniqueInput
  }

  /**
   * Sector updateMany
   */
  export type SectorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sectors.
     */
    data: XOR<SectorUpdateManyMutationInput, SectorUncheckedUpdateManyInput>
    /**
     * Filter which Sectors to update
     */
    where?: SectorWhereInput
    /**
     * Limit how many Sectors to update.
     */
    limit?: number
  }

  /**
   * Sector updateManyAndReturn
   */
  export type SectorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * The data used to update Sectors.
     */
    data: XOR<SectorUpdateManyMutationInput, SectorUncheckedUpdateManyInput>
    /**
     * Filter which Sectors to update
     */
    where?: SectorWhereInput
    /**
     * Limit how many Sectors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sector upsert
   */
  export type SectorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
    /**
     * The filter to search for the Sector to update in case it exists.
     */
    where: SectorWhereUniqueInput
    /**
     * In case the Sector found by the `where` argument doesn't exist, create a new Sector with this data.
     */
    create: XOR<SectorCreateInput, SectorUncheckedCreateInput>
    /**
     * In case the Sector was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectorUpdateInput, SectorUncheckedUpdateInput>
  }

  /**
   * Sector delete
   */
  export type SectorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
    /**
     * Filter which Sector to delete.
     */
    where: SectorWhereUniqueInput
  }

  /**
   * Sector deleteMany
   */
  export type SectorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sectors to delete
     */
    where?: SectorWhereInput
    /**
     * Limit how many Sectors to delete.
     */
    limit?: number
  }

  /**
   * Sector.farm
   */
  export type Sector$farmArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    where?: FarmWhereInput
  }

  /**
   * Sector.crops
   */
  export type Sector$cropsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crop
     */
    omit?: CropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    where?: CropWhereInput
    orderBy?: CropOrderByWithRelationInput | CropOrderByWithRelationInput[]
    cursor?: CropWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CropScalarFieldEnum | CropScalarFieldEnum[]
  }

  /**
   * Sector without action
   */
  export type SectorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
  }


  /**
   * Model Crop
   */

  export type AggregateCrop = {
    _count: CropCountAggregateOutputType | null
    _min: CropMinAggregateOutputType | null
    _max: CropMaxAggregateOutputType | null
  }

  export type CropMinAggregateOutputType = {
    id: string | null
    name: string | null
    sectorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CropMaxAggregateOutputType = {
    id: string | null
    name: string | null
    sectorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CropCountAggregateOutputType = {
    id: number
    name: number
    sectorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CropMinAggregateInputType = {
    id?: true
    name?: true
    sectorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CropMaxAggregateInputType = {
    id?: true
    name?: true
    sectorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CropCountAggregateInputType = {
    id?: true
    name?: true
    sectorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CropAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Crop to aggregate.
     */
    where?: CropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crops to fetch.
     */
    orderBy?: CropOrderByWithRelationInput | CropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Crops
    **/
    _count?: true | CropCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CropMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CropMaxAggregateInputType
  }

  export type GetCropAggregateType<T extends CropAggregateArgs> = {
        [P in keyof T & keyof AggregateCrop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrop[P]>
      : GetScalarType<T[P], AggregateCrop[P]>
  }




  export type CropGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CropWhereInput
    orderBy?: CropOrderByWithAggregationInput | CropOrderByWithAggregationInput[]
    by: CropScalarFieldEnum[] | CropScalarFieldEnum
    having?: CropScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CropCountAggregateInputType | true
    _min?: CropMinAggregateInputType
    _max?: CropMaxAggregateInputType
  }

  export type CropGroupByOutputType = {
    id: string
    name: string | null
    sectorId: string | null
    createdAt: Date
    updatedAt: Date
    _count: CropCountAggregateOutputType | null
    _min: CropMinAggregateOutputType | null
    _max: CropMaxAggregateOutputType | null
  }

  type GetCropGroupByPayload<T extends CropGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CropGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CropGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CropGroupByOutputType[P]>
            : GetScalarType<T[P], CropGroupByOutputType[P]>
        }
      >
    >


  export type CropSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sectorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sector?: boolean | Crop$sectorArgs<ExtArgs>
  }, ExtArgs["result"]["crop"]>

  export type CropSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sectorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sector?: boolean | Crop$sectorArgs<ExtArgs>
  }, ExtArgs["result"]["crop"]>

  export type CropSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sectorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sector?: boolean | Crop$sectorArgs<ExtArgs>
  }, ExtArgs["result"]["crop"]>

  export type CropSelectScalar = {
    id?: boolean
    name?: boolean
    sectorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CropOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "sectorId" | "createdAt" | "updatedAt", ExtArgs["result"]["crop"]>
  export type CropInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sector?: boolean | Crop$sectorArgs<ExtArgs>
  }
  export type CropIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sector?: boolean | Crop$sectorArgs<ExtArgs>
  }
  export type CropIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sector?: boolean | Crop$sectorArgs<ExtArgs>
  }

  export type $CropPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Crop"
    objects: {
      sector: Prisma.$SectorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      sectorId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["crop"]>
    composites: {}
  }

  type CropGetPayload<S extends boolean | null | undefined | CropDefaultArgs> = $Result.GetResult<Prisma.$CropPayload, S>

  type CropCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CropFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CropCountAggregateInputType | true
    }

  export interface CropDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Crop'], meta: { name: 'Crop' } }
    /**
     * Find zero or one Crop that matches the filter.
     * @param {CropFindUniqueArgs} args - Arguments to find a Crop
     * @example
     * // Get one Crop
     * const crop = await prisma.crop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CropFindUniqueArgs>(args: SelectSubset<T, CropFindUniqueArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Crop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CropFindUniqueOrThrowArgs} args - Arguments to find a Crop
     * @example
     * // Get one Crop
     * const crop = await prisma.crop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CropFindUniqueOrThrowArgs>(args: SelectSubset<T, CropFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Crop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropFindFirstArgs} args - Arguments to find a Crop
     * @example
     * // Get one Crop
     * const crop = await prisma.crop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CropFindFirstArgs>(args?: SelectSubset<T, CropFindFirstArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Crop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropFindFirstOrThrowArgs} args - Arguments to find a Crop
     * @example
     * // Get one Crop
     * const crop = await prisma.crop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CropFindFirstOrThrowArgs>(args?: SelectSubset<T, CropFindFirstOrThrowArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Crops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Crops
     * const crops = await prisma.crop.findMany()
     * 
     * // Get first 10 Crops
     * const crops = await prisma.crop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cropWithIdOnly = await prisma.crop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CropFindManyArgs>(args?: SelectSubset<T, CropFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Crop.
     * @param {CropCreateArgs} args - Arguments to create a Crop.
     * @example
     * // Create one Crop
     * const Crop = await prisma.crop.create({
     *   data: {
     *     // ... data to create a Crop
     *   }
     * })
     * 
     */
    create<T extends CropCreateArgs>(args: SelectSubset<T, CropCreateArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Crops.
     * @param {CropCreateManyArgs} args - Arguments to create many Crops.
     * @example
     * // Create many Crops
     * const crop = await prisma.crop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CropCreateManyArgs>(args?: SelectSubset<T, CropCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Crops and returns the data saved in the database.
     * @param {CropCreateManyAndReturnArgs} args - Arguments to create many Crops.
     * @example
     * // Create many Crops
     * const crop = await prisma.crop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Crops and only return the `id`
     * const cropWithIdOnly = await prisma.crop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CropCreateManyAndReturnArgs>(args?: SelectSubset<T, CropCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Crop.
     * @param {CropDeleteArgs} args - Arguments to delete one Crop.
     * @example
     * // Delete one Crop
     * const Crop = await prisma.crop.delete({
     *   where: {
     *     // ... filter to delete one Crop
     *   }
     * })
     * 
     */
    delete<T extends CropDeleteArgs>(args: SelectSubset<T, CropDeleteArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Crop.
     * @param {CropUpdateArgs} args - Arguments to update one Crop.
     * @example
     * // Update one Crop
     * const crop = await prisma.crop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CropUpdateArgs>(args: SelectSubset<T, CropUpdateArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Crops.
     * @param {CropDeleteManyArgs} args - Arguments to filter Crops to delete.
     * @example
     * // Delete a few Crops
     * const { count } = await prisma.crop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CropDeleteManyArgs>(args?: SelectSubset<T, CropDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Crops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Crops
     * const crop = await prisma.crop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CropUpdateManyArgs>(args: SelectSubset<T, CropUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Crops and returns the data updated in the database.
     * @param {CropUpdateManyAndReturnArgs} args - Arguments to update many Crops.
     * @example
     * // Update many Crops
     * const crop = await prisma.crop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Crops and only return the `id`
     * const cropWithIdOnly = await prisma.crop.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CropUpdateManyAndReturnArgs>(args: SelectSubset<T, CropUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Crop.
     * @param {CropUpsertArgs} args - Arguments to update or create a Crop.
     * @example
     * // Update or create a Crop
     * const crop = await prisma.crop.upsert({
     *   create: {
     *     // ... data to create a Crop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Crop we want to update
     *   }
     * })
     */
    upsert<T extends CropUpsertArgs>(args: SelectSubset<T, CropUpsertArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Crops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropCountArgs} args - Arguments to filter Crops to count.
     * @example
     * // Count the number of Crops
     * const count = await prisma.crop.count({
     *   where: {
     *     // ... the filter for the Crops we want to count
     *   }
     * })
    **/
    count<T extends CropCountArgs>(
      args?: Subset<T, CropCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CropCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Crop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CropAggregateArgs>(args: Subset<T, CropAggregateArgs>): Prisma.PrismaPromise<GetCropAggregateType<T>>

    /**
     * Group by Crop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CropGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CropGroupByArgs['orderBy'] }
        : { orderBy?: CropGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CropGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCropGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Crop model
   */
  readonly fields: CropFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Crop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CropClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sector<T extends Crop$sectorArgs<ExtArgs> = {}>(args?: Subset<T, Crop$sectorArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Crop model
   */
  interface CropFieldRefs {
    readonly id: FieldRef<"Crop", 'String'>
    readonly name: FieldRef<"Crop", 'String'>
    readonly sectorId: FieldRef<"Crop", 'String'>
    readonly createdAt: FieldRef<"Crop", 'DateTime'>
    readonly updatedAt: FieldRef<"Crop", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Crop findUnique
   */
  export type CropFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crop
     */
    omit?: CropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * Filter, which Crop to fetch.
     */
    where: CropWhereUniqueInput
  }

  /**
   * Crop findUniqueOrThrow
   */
  export type CropFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crop
     */
    omit?: CropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * Filter, which Crop to fetch.
     */
    where: CropWhereUniqueInput
  }

  /**
   * Crop findFirst
   */
  export type CropFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crop
     */
    omit?: CropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * Filter, which Crop to fetch.
     */
    where?: CropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crops to fetch.
     */
    orderBy?: CropOrderByWithRelationInput | CropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Crops.
     */
    cursor?: CropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Crops.
     */
    distinct?: CropScalarFieldEnum | CropScalarFieldEnum[]
  }

  /**
   * Crop findFirstOrThrow
   */
  export type CropFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crop
     */
    omit?: CropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * Filter, which Crop to fetch.
     */
    where?: CropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crops to fetch.
     */
    orderBy?: CropOrderByWithRelationInput | CropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Crops.
     */
    cursor?: CropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Crops.
     */
    distinct?: CropScalarFieldEnum | CropScalarFieldEnum[]
  }

  /**
   * Crop findMany
   */
  export type CropFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crop
     */
    omit?: CropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * Filter, which Crops to fetch.
     */
    where?: CropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crops to fetch.
     */
    orderBy?: CropOrderByWithRelationInput | CropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Crops.
     */
    cursor?: CropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crops.
     */
    skip?: number
    distinct?: CropScalarFieldEnum | CropScalarFieldEnum[]
  }

  /**
   * Crop create
   */
  export type CropCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crop
     */
    omit?: CropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * The data needed to create a Crop.
     */
    data: XOR<CropCreateInput, CropUncheckedCreateInput>
  }

  /**
   * Crop createMany
   */
  export type CropCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Crops.
     */
    data: CropCreateManyInput | CropCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Crop createManyAndReturn
   */
  export type CropCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Crop
     */
    omit?: CropOmit<ExtArgs> | null
    /**
     * The data used to create many Crops.
     */
    data: CropCreateManyInput | CropCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Crop update
   */
  export type CropUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crop
     */
    omit?: CropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * The data needed to update a Crop.
     */
    data: XOR<CropUpdateInput, CropUncheckedUpdateInput>
    /**
     * Choose, which Crop to update.
     */
    where: CropWhereUniqueInput
  }

  /**
   * Crop updateMany
   */
  export type CropUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Crops.
     */
    data: XOR<CropUpdateManyMutationInput, CropUncheckedUpdateManyInput>
    /**
     * Filter which Crops to update
     */
    where?: CropWhereInput
    /**
     * Limit how many Crops to update.
     */
    limit?: number
  }

  /**
   * Crop updateManyAndReturn
   */
  export type CropUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Crop
     */
    omit?: CropOmit<ExtArgs> | null
    /**
     * The data used to update Crops.
     */
    data: XOR<CropUpdateManyMutationInput, CropUncheckedUpdateManyInput>
    /**
     * Filter which Crops to update
     */
    where?: CropWhereInput
    /**
     * Limit how many Crops to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Crop upsert
   */
  export type CropUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crop
     */
    omit?: CropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * The filter to search for the Crop to update in case it exists.
     */
    where: CropWhereUniqueInput
    /**
     * In case the Crop found by the `where` argument doesn't exist, create a new Crop with this data.
     */
    create: XOR<CropCreateInput, CropUncheckedCreateInput>
    /**
     * In case the Crop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CropUpdateInput, CropUncheckedUpdateInput>
  }

  /**
   * Crop delete
   */
  export type CropDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crop
     */
    omit?: CropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * Filter which Crop to delete.
     */
    where: CropWhereUniqueInput
  }

  /**
   * Crop deleteMany
   */
  export type CropDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Crops to delete
     */
    where?: CropWhereInput
    /**
     * Limit how many Crops to delete.
     */
    limit?: number
  }

  /**
   * Crop.sector
   */
  export type Crop$sectorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
    where?: SectorWhereInput
  }

  /**
   * Crop without action
   */
  export type CropDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crop
     */
    omit?: CropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FarmScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    size: 'size',
    owner: 'owner',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type FarmScalarFieldEnum = (typeof FarmScalarFieldEnum)[keyof typeof FarmScalarFieldEnum]


  export const SectorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    size: 'size',
    farmId: 'farmId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SectorScalarFieldEnum = (typeof SectorScalarFieldEnum)[keyof typeof SectorScalarFieldEnum]


  export const CropScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sectorId: 'sectorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CropScalarFieldEnum = (typeof CropScalarFieldEnum)[keyof typeof CropScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    farms?: FarmListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    farms?: FarmOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    farms?: FarmListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FarmWhereInput = {
    AND?: FarmWhereInput | FarmWhereInput[]
    OR?: FarmWhereInput[]
    NOT?: FarmWhereInput | FarmWhereInput[]
    id?: StringFilter<"Farm"> | string
    name?: StringNullableFilter<"Farm"> | string | null
    location?: StringNullableFilter<"Farm"> | string | null
    size?: IntNullableFilter<"Farm"> | number | null
    owner?: StringNullableFilter<"Farm"> | string | null
    createdAt?: DateTimeFilter<"Farm"> | Date | string
    updatedAt?: DateTimeFilter<"Farm"> | Date | string
    userId?: StringNullableFilter<"Farm"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    sectors?: SectorListRelationFilter
  }

  export type FarmOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    owner?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    sectors?: SectorOrderByRelationAggregateInput
  }

  export type FarmWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FarmWhereInput | FarmWhereInput[]
    OR?: FarmWhereInput[]
    NOT?: FarmWhereInput | FarmWhereInput[]
    name?: StringNullableFilter<"Farm"> | string | null
    location?: StringNullableFilter<"Farm"> | string | null
    size?: IntNullableFilter<"Farm"> | number | null
    owner?: StringNullableFilter<"Farm"> | string | null
    createdAt?: DateTimeFilter<"Farm"> | Date | string
    updatedAt?: DateTimeFilter<"Farm"> | Date | string
    userId?: StringNullableFilter<"Farm"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    sectors?: SectorListRelationFilter
  }, "id">

  export type FarmOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    owner?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: FarmCountOrderByAggregateInput
    _avg?: FarmAvgOrderByAggregateInput
    _max?: FarmMaxOrderByAggregateInput
    _min?: FarmMinOrderByAggregateInput
    _sum?: FarmSumOrderByAggregateInput
  }

  export type FarmScalarWhereWithAggregatesInput = {
    AND?: FarmScalarWhereWithAggregatesInput | FarmScalarWhereWithAggregatesInput[]
    OR?: FarmScalarWhereWithAggregatesInput[]
    NOT?: FarmScalarWhereWithAggregatesInput | FarmScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Farm"> | string
    name?: StringNullableWithAggregatesFilter<"Farm"> | string | null
    location?: StringNullableWithAggregatesFilter<"Farm"> | string | null
    size?: IntNullableWithAggregatesFilter<"Farm"> | number | null
    owner?: StringNullableWithAggregatesFilter<"Farm"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Farm"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Farm"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"Farm"> | string | null
  }

  export type SectorWhereInput = {
    AND?: SectorWhereInput | SectorWhereInput[]
    OR?: SectorWhereInput[]
    NOT?: SectorWhereInput | SectorWhereInput[]
    id?: StringFilter<"Sector"> | string
    name?: StringNullableFilter<"Sector"> | string | null
    size?: IntNullableFilter<"Sector"> | number | null
    farmId?: StringNullableFilter<"Sector"> | string | null
    createdAt?: DateTimeFilter<"Sector"> | Date | string
    updatedAt?: DateTimeFilter<"Sector"> | Date | string
    farm?: XOR<FarmNullableScalarRelationFilter, FarmWhereInput> | null
    crops?: CropListRelationFilter
  }

  export type SectorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    farmId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    farm?: FarmOrderByWithRelationInput
    crops?: CropOrderByRelationAggregateInput
  }

  export type SectorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SectorWhereInput | SectorWhereInput[]
    OR?: SectorWhereInput[]
    NOT?: SectorWhereInput | SectorWhereInput[]
    name?: StringNullableFilter<"Sector"> | string | null
    size?: IntNullableFilter<"Sector"> | number | null
    farmId?: StringNullableFilter<"Sector"> | string | null
    createdAt?: DateTimeFilter<"Sector"> | Date | string
    updatedAt?: DateTimeFilter<"Sector"> | Date | string
    farm?: XOR<FarmNullableScalarRelationFilter, FarmWhereInput> | null
    crops?: CropListRelationFilter
  }, "id">

  export type SectorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    farmId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SectorCountOrderByAggregateInput
    _avg?: SectorAvgOrderByAggregateInput
    _max?: SectorMaxOrderByAggregateInput
    _min?: SectorMinOrderByAggregateInput
    _sum?: SectorSumOrderByAggregateInput
  }

  export type SectorScalarWhereWithAggregatesInput = {
    AND?: SectorScalarWhereWithAggregatesInput | SectorScalarWhereWithAggregatesInput[]
    OR?: SectorScalarWhereWithAggregatesInput[]
    NOT?: SectorScalarWhereWithAggregatesInput | SectorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sector"> | string
    name?: StringNullableWithAggregatesFilter<"Sector"> | string | null
    size?: IntNullableWithAggregatesFilter<"Sector"> | number | null
    farmId?: StringNullableWithAggregatesFilter<"Sector"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Sector"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sector"> | Date | string
  }

  export type CropWhereInput = {
    AND?: CropWhereInput | CropWhereInput[]
    OR?: CropWhereInput[]
    NOT?: CropWhereInput | CropWhereInput[]
    id?: StringFilter<"Crop"> | string
    name?: StringNullableFilter<"Crop"> | string | null
    sectorId?: StringNullableFilter<"Crop"> | string | null
    createdAt?: DateTimeFilter<"Crop"> | Date | string
    updatedAt?: DateTimeFilter<"Crop"> | Date | string
    sector?: XOR<SectorNullableScalarRelationFilter, SectorWhereInput> | null
  }

  export type CropOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    sectorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sector?: SectorOrderByWithRelationInput
  }

  export type CropWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CropWhereInput | CropWhereInput[]
    OR?: CropWhereInput[]
    NOT?: CropWhereInput | CropWhereInput[]
    name?: StringNullableFilter<"Crop"> | string | null
    sectorId?: StringNullableFilter<"Crop"> | string | null
    createdAt?: DateTimeFilter<"Crop"> | Date | string
    updatedAt?: DateTimeFilter<"Crop"> | Date | string
    sector?: XOR<SectorNullableScalarRelationFilter, SectorWhereInput> | null
  }, "id">

  export type CropOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    sectorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CropCountOrderByAggregateInput
    _max?: CropMaxOrderByAggregateInput
    _min?: CropMinOrderByAggregateInput
  }

  export type CropScalarWhereWithAggregatesInput = {
    AND?: CropScalarWhereWithAggregatesInput | CropScalarWhereWithAggregatesInput[]
    OR?: CropScalarWhereWithAggregatesInput[]
    NOT?: CropScalarWhereWithAggregatesInput | CropScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Crop"> | string
    name?: StringNullableWithAggregatesFilter<"Crop"> | string | null
    sectorId?: StringNullableWithAggregatesFilter<"Crop"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Crop"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Crop"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    farms?: FarmCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    farms?: FarmUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farms?: FarmUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farms?: FarmUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmCreateInput = {
    id?: string
    name?: string | null
    location?: string | null
    size?: number | null
    owner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutFarmsInput
    sectors?: SectorCreateNestedManyWithoutFarmInput
  }

  export type FarmUncheckedCreateInput = {
    id?: string
    name?: string | null
    location?: string | null
    size?: number | null
    owner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    sectors?: SectorUncheckedCreateNestedManyWithoutFarmInput
  }

  export type FarmUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutFarmsNestedInput
    sectors?: SectorUpdateManyWithoutFarmNestedInput
  }

  export type FarmUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sectors?: SectorUncheckedUpdateManyWithoutFarmNestedInput
  }

  export type FarmCreateManyInput = {
    id?: string
    name?: string | null
    location?: string | null
    size?: number | null
    owner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type FarmUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SectorCreateInput = {
    id?: string
    name?: string | null
    size?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    farm?: FarmCreateNestedOneWithoutSectorsInput
    crops?: CropCreateNestedManyWithoutSectorInput
  }

  export type SectorUncheckedCreateInput = {
    id?: string
    name?: string | null
    size?: number | null
    farmId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    crops?: CropUncheckedCreateNestedManyWithoutSectorInput
  }

  export type SectorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farm?: FarmUpdateOneWithoutSectorsNestedInput
    crops?: CropUpdateManyWithoutSectorNestedInput
  }

  export type SectorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    farmId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crops?: CropUncheckedUpdateManyWithoutSectorNestedInput
  }

  export type SectorCreateManyInput = {
    id?: string
    name?: string | null
    size?: number | null
    farmId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    farmId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CropCreateInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sector?: SectorCreateNestedOneWithoutCropsInput
  }

  export type CropUncheckedCreateInput = {
    id?: string
    name?: string | null
    sectorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CropUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sector?: SectorUpdateOneWithoutCropsNestedInput
  }

  export type CropUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sectorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CropCreateManyInput = {
    id?: string
    name?: string | null
    sectorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CropUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CropUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sectorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FarmListRelationFilter = {
    every?: FarmWhereInput
    some?: FarmWhereInput
    none?: FarmWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FarmOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SectorListRelationFilter = {
    every?: SectorWhereInput
    some?: SectorWhereInput
    none?: SectorWhereInput
  }

  export type SectorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FarmCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    size?: SortOrder
    owner?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type FarmAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type FarmMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    size?: SortOrder
    owner?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type FarmMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    size?: SortOrder
    owner?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type FarmSumOrderByAggregateInput = {
    size?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FarmNullableScalarRelationFilter = {
    is?: FarmWhereInput | null
    isNot?: FarmWhereInput | null
  }

  export type CropListRelationFilter = {
    every?: CropWhereInput
    some?: CropWhereInput
    none?: CropWhereInput
  }

  export type CropOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SectorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    farmId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectorAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type SectorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    farmId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    farmId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectorSumOrderByAggregateInput = {
    size?: SortOrder
  }

  export type SectorNullableScalarRelationFilter = {
    is?: SectorWhereInput | null
    isNot?: SectorWhereInput | null
  }

  export type CropCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sectorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CropMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sectorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CropMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sectorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FarmCreateNestedManyWithoutUserInput = {
    create?: XOR<FarmCreateWithoutUserInput, FarmUncheckedCreateWithoutUserInput> | FarmCreateWithoutUserInput[] | FarmUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FarmCreateOrConnectWithoutUserInput | FarmCreateOrConnectWithoutUserInput[]
    createMany?: FarmCreateManyUserInputEnvelope
    connect?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
  }

  export type FarmUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FarmCreateWithoutUserInput, FarmUncheckedCreateWithoutUserInput> | FarmCreateWithoutUserInput[] | FarmUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FarmCreateOrConnectWithoutUserInput | FarmCreateOrConnectWithoutUserInput[]
    createMany?: FarmCreateManyUserInputEnvelope
    connect?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FarmUpdateManyWithoutUserNestedInput = {
    create?: XOR<FarmCreateWithoutUserInput, FarmUncheckedCreateWithoutUserInput> | FarmCreateWithoutUserInput[] | FarmUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FarmCreateOrConnectWithoutUserInput | FarmCreateOrConnectWithoutUserInput[]
    upsert?: FarmUpsertWithWhereUniqueWithoutUserInput | FarmUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FarmCreateManyUserInputEnvelope
    set?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    disconnect?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    delete?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    connect?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    update?: FarmUpdateWithWhereUniqueWithoutUserInput | FarmUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FarmUpdateManyWithWhereWithoutUserInput | FarmUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FarmScalarWhereInput | FarmScalarWhereInput[]
  }

  export type FarmUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FarmCreateWithoutUserInput, FarmUncheckedCreateWithoutUserInput> | FarmCreateWithoutUserInput[] | FarmUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FarmCreateOrConnectWithoutUserInput | FarmCreateOrConnectWithoutUserInput[]
    upsert?: FarmUpsertWithWhereUniqueWithoutUserInput | FarmUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FarmCreateManyUserInputEnvelope
    set?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    disconnect?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    delete?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    connect?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    update?: FarmUpdateWithWhereUniqueWithoutUserInput | FarmUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FarmUpdateManyWithWhereWithoutUserInput | FarmUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FarmScalarWhereInput | FarmScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFarmsInput = {
    create?: XOR<UserCreateWithoutFarmsInput, UserUncheckedCreateWithoutFarmsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFarmsInput
    connect?: UserWhereUniqueInput
  }

  export type SectorCreateNestedManyWithoutFarmInput = {
    create?: XOR<SectorCreateWithoutFarmInput, SectorUncheckedCreateWithoutFarmInput> | SectorCreateWithoutFarmInput[] | SectorUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: SectorCreateOrConnectWithoutFarmInput | SectorCreateOrConnectWithoutFarmInput[]
    createMany?: SectorCreateManyFarmInputEnvelope
    connect?: SectorWhereUniqueInput | SectorWhereUniqueInput[]
  }

  export type SectorUncheckedCreateNestedManyWithoutFarmInput = {
    create?: XOR<SectorCreateWithoutFarmInput, SectorUncheckedCreateWithoutFarmInput> | SectorCreateWithoutFarmInput[] | SectorUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: SectorCreateOrConnectWithoutFarmInput | SectorCreateOrConnectWithoutFarmInput[]
    createMany?: SectorCreateManyFarmInputEnvelope
    connect?: SectorWhereUniqueInput | SectorWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutFarmsNestedInput = {
    create?: XOR<UserCreateWithoutFarmsInput, UserUncheckedCreateWithoutFarmsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFarmsInput
    upsert?: UserUpsertWithoutFarmsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFarmsInput, UserUpdateWithoutFarmsInput>, UserUncheckedUpdateWithoutFarmsInput>
  }

  export type SectorUpdateManyWithoutFarmNestedInput = {
    create?: XOR<SectorCreateWithoutFarmInput, SectorUncheckedCreateWithoutFarmInput> | SectorCreateWithoutFarmInput[] | SectorUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: SectorCreateOrConnectWithoutFarmInput | SectorCreateOrConnectWithoutFarmInput[]
    upsert?: SectorUpsertWithWhereUniqueWithoutFarmInput | SectorUpsertWithWhereUniqueWithoutFarmInput[]
    createMany?: SectorCreateManyFarmInputEnvelope
    set?: SectorWhereUniqueInput | SectorWhereUniqueInput[]
    disconnect?: SectorWhereUniqueInput | SectorWhereUniqueInput[]
    delete?: SectorWhereUniqueInput | SectorWhereUniqueInput[]
    connect?: SectorWhereUniqueInput | SectorWhereUniqueInput[]
    update?: SectorUpdateWithWhereUniqueWithoutFarmInput | SectorUpdateWithWhereUniqueWithoutFarmInput[]
    updateMany?: SectorUpdateManyWithWhereWithoutFarmInput | SectorUpdateManyWithWhereWithoutFarmInput[]
    deleteMany?: SectorScalarWhereInput | SectorScalarWhereInput[]
  }

  export type SectorUncheckedUpdateManyWithoutFarmNestedInput = {
    create?: XOR<SectorCreateWithoutFarmInput, SectorUncheckedCreateWithoutFarmInput> | SectorCreateWithoutFarmInput[] | SectorUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: SectorCreateOrConnectWithoutFarmInput | SectorCreateOrConnectWithoutFarmInput[]
    upsert?: SectorUpsertWithWhereUniqueWithoutFarmInput | SectorUpsertWithWhereUniqueWithoutFarmInput[]
    createMany?: SectorCreateManyFarmInputEnvelope
    set?: SectorWhereUniqueInput | SectorWhereUniqueInput[]
    disconnect?: SectorWhereUniqueInput | SectorWhereUniqueInput[]
    delete?: SectorWhereUniqueInput | SectorWhereUniqueInput[]
    connect?: SectorWhereUniqueInput | SectorWhereUniqueInput[]
    update?: SectorUpdateWithWhereUniqueWithoutFarmInput | SectorUpdateWithWhereUniqueWithoutFarmInput[]
    updateMany?: SectorUpdateManyWithWhereWithoutFarmInput | SectorUpdateManyWithWhereWithoutFarmInput[]
    deleteMany?: SectorScalarWhereInput | SectorScalarWhereInput[]
  }

  export type FarmCreateNestedOneWithoutSectorsInput = {
    create?: XOR<FarmCreateWithoutSectorsInput, FarmUncheckedCreateWithoutSectorsInput>
    connectOrCreate?: FarmCreateOrConnectWithoutSectorsInput
    connect?: FarmWhereUniqueInput
  }

  export type CropCreateNestedManyWithoutSectorInput = {
    create?: XOR<CropCreateWithoutSectorInput, CropUncheckedCreateWithoutSectorInput> | CropCreateWithoutSectorInput[] | CropUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: CropCreateOrConnectWithoutSectorInput | CropCreateOrConnectWithoutSectorInput[]
    createMany?: CropCreateManySectorInputEnvelope
    connect?: CropWhereUniqueInput | CropWhereUniqueInput[]
  }

  export type CropUncheckedCreateNestedManyWithoutSectorInput = {
    create?: XOR<CropCreateWithoutSectorInput, CropUncheckedCreateWithoutSectorInput> | CropCreateWithoutSectorInput[] | CropUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: CropCreateOrConnectWithoutSectorInput | CropCreateOrConnectWithoutSectorInput[]
    createMany?: CropCreateManySectorInputEnvelope
    connect?: CropWhereUniqueInput | CropWhereUniqueInput[]
  }

  export type FarmUpdateOneWithoutSectorsNestedInput = {
    create?: XOR<FarmCreateWithoutSectorsInput, FarmUncheckedCreateWithoutSectorsInput>
    connectOrCreate?: FarmCreateOrConnectWithoutSectorsInput
    upsert?: FarmUpsertWithoutSectorsInput
    disconnect?: FarmWhereInput | boolean
    delete?: FarmWhereInput | boolean
    connect?: FarmWhereUniqueInput
    update?: XOR<XOR<FarmUpdateToOneWithWhereWithoutSectorsInput, FarmUpdateWithoutSectorsInput>, FarmUncheckedUpdateWithoutSectorsInput>
  }

  export type CropUpdateManyWithoutSectorNestedInput = {
    create?: XOR<CropCreateWithoutSectorInput, CropUncheckedCreateWithoutSectorInput> | CropCreateWithoutSectorInput[] | CropUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: CropCreateOrConnectWithoutSectorInput | CropCreateOrConnectWithoutSectorInput[]
    upsert?: CropUpsertWithWhereUniqueWithoutSectorInput | CropUpsertWithWhereUniqueWithoutSectorInput[]
    createMany?: CropCreateManySectorInputEnvelope
    set?: CropWhereUniqueInput | CropWhereUniqueInput[]
    disconnect?: CropWhereUniqueInput | CropWhereUniqueInput[]
    delete?: CropWhereUniqueInput | CropWhereUniqueInput[]
    connect?: CropWhereUniqueInput | CropWhereUniqueInput[]
    update?: CropUpdateWithWhereUniqueWithoutSectorInput | CropUpdateWithWhereUniqueWithoutSectorInput[]
    updateMany?: CropUpdateManyWithWhereWithoutSectorInput | CropUpdateManyWithWhereWithoutSectorInput[]
    deleteMany?: CropScalarWhereInput | CropScalarWhereInput[]
  }

  export type CropUncheckedUpdateManyWithoutSectorNestedInput = {
    create?: XOR<CropCreateWithoutSectorInput, CropUncheckedCreateWithoutSectorInput> | CropCreateWithoutSectorInput[] | CropUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: CropCreateOrConnectWithoutSectorInput | CropCreateOrConnectWithoutSectorInput[]
    upsert?: CropUpsertWithWhereUniqueWithoutSectorInput | CropUpsertWithWhereUniqueWithoutSectorInput[]
    createMany?: CropCreateManySectorInputEnvelope
    set?: CropWhereUniqueInput | CropWhereUniqueInput[]
    disconnect?: CropWhereUniqueInput | CropWhereUniqueInput[]
    delete?: CropWhereUniqueInput | CropWhereUniqueInput[]
    connect?: CropWhereUniqueInput | CropWhereUniqueInput[]
    update?: CropUpdateWithWhereUniqueWithoutSectorInput | CropUpdateWithWhereUniqueWithoutSectorInput[]
    updateMany?: CropUpdateManyWithWhereWithoutSectorInput | CropUpdateManyWithWhereWithoutSectorInput[]
    deleteMany?: CropScalarWhereInput | CropScalarWhereInput[]
  }

  export type SectorCreateNestedOneWithoutCropsInput = {
    create?: XOR<SectorCreateWithoutCropsInput, SectorUncheckedCreateWithoutCropsInput>
    connectOrCreate?: SectorCreateOrConnectWithoutCropsInput
    connect?: SectorWhereUniqueInput
  }

  export type SectorUpdateOneWithoutCropsNestedInput = {
    create?: XOR<SectorCreateWithoutCropsInput, SectorUncheckedCreateWithoutCropsInput>
    connectOrCreate?: SectorCreateOrConnectWithoutCropsInput
    upsert?: SectorUpsertWithoutCropsInput
    disconnect?: SectorWhereInput | boolean
    delete?: SectorWhereInput | boolean
    connect?: SectorWhereUniqueInput
    update?: XOR<XOR<SectorUpdateToOneWithWhereWithoutCropsInput, SectorUpdateWithoutCropsInput>, SectorUncheckedUpdateWithoutCropsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FarmCreateWithoutUserInput = {
    id?: string
    name?: string | null
    location?: string | null
    size?: number | null
    owner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sectors?: SectorCreateNestedManyWithoutFarmInput
  }

  export type FarmUncheckedCreateWithoutUserInput = {
    id?: string
    name?: string | null
    location?: string | null
    size?: number | null
    owner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sectors?: SectorUncheckedCreateNestedManyWithoutFarmInput
  }

  export type FarmCreateOrConnectWithoutUserInput = {
    where: FarmWhereUniqueInput
    create: XOR<FarmCreateWithoutUserInput, FarmUncheckedCreateWithoutUserInput>
  }

  export type FarmCreateManyUserInputEnvelope = {
    data: FarmCreateManyUserInput | FarmCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FarmUpsertWithWhereUniqueWithoutUserInput = {
    where: FarmWhereUniqueInput
    update: XOR<FarmUpdateWithoutUserInput, FarmUncheckedUpdateWithoutUserInput>
    create: XOR<FarmCreateWithoutUserInput, FarmUncheckedCreateWithoutUserInput>
  }

  export type FarmUpdateWithWhereUniqueWithoutUserInput = {
    where: FarmWhereUniqueInput
    data: XOR<FarmUpdateWithoutUserInput, FarmUncheckedUpdateWithoutUserInput>
  }

  export type FarmUpdateManyWithWhereWithoutUserInput = {
    where: FarmScalarWhereInput
    data: XOR<FarmUpdateManyMutationInput, FarmUncheckedUpdateManyWithoutUserInput>
  }

  export type FarmScalarWhereInput = {
    AND?: FarmScalarWhereInput | FarmScalarWhereInput[]
    OR?: FarmScalarWhereInput[]
    NOT?: FarmScalarWhereInput | FarmScalarWhereInput[]
    id?: StringFilter<"Farm"> | string
    name?: StringNullableFilter<"Farm"> | string | null
    location?: StringNullableFilter<"Farm"> | string | null
    size?: IntNullableFilter<"Farm"> | number | null
    owner?: StringNullableFilter<"Farm"> | string | null
    createdAt?: DateTimeFilter<"Farm"> | Date | string
    updatedAt?: DateTimeFilter<"Farm"> | Date | string
    userId?: StringNullableFilter<"Farm"> | string | null
  }

  export type UserCreateWithoutFarmsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutFarmsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutFarmsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFarmsInput, UserUncheckedCreateWithoutFarmsInput>
  }

  export type SectorCreateWithoutFarmInput = {
    id?: string
    name?: string | null
    size?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    crops?: CropCreateNestedManyWithoutSectorInput
  }

  export type SectorUncheckedCreateWithoutFarmInput = {
    id?: string
    name?: string | null
    size?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    crops?: CropUncheckedCreateNestedManyWithoutSectorInput
  }

  export type SectorCreateOrConnectWithoutFarmInput = {
    where: SectorWhereUniqueInput
    create: XOR<SectorCreateWithoutFarmInput, SectorUncheckedCreateWithoutFarmInput>
  }

  export type SectorCreateManyFarmInputEnvelope = {
    data: SectorCreateManyFarmInput | SectorCreateManyFarmInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFarmsInput = {
    update: XOR<UserUpdateWithoutFarmsInput, UserUncheckedUpdateWithoutFarmsInput>
    create: XOR<UserCreateWithoutFarmsInput, UserUncheckedCreateWithoutFarmsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFarmsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFarmsInput, UserUncheckedUpdateWithoutFarmsInput>
  }

  export type UserUpdateWithoutFarmsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutFarmsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectorUpsertWithWhereUniqueWithoutFarmInput = {
    where: SectorWhereUniqueInput
    update: XOR<SectorUpdateWithoutFarmInput, SectorUncheckedUpdateWithoutFarmInput>
    create: XOR<SectorCreateWithoutFarmInput, SectorUncheckedCreateWithoutFarmInput>
  }

  export type SectorUpdateWithWhereUniqueWithoutFarmInput = {
    where: SectorWhereUniqueInput
    data: XOR<SectorUpdateWithoutFarmInput, SectorUncheckedUpdateWithoutFarmInput>
  }

  export type SectorUpdateManyWithWhereWithoutFarmInput = {
    where: SectorScalarWhereInput
    data: XOR<SectorUpdateManyMutationInput, SectorUncheckedUpdateManyWithoutFarmInput>
  }

  export type SectorScalarWhereInput = {
    AND?: SectorScalarWhereInput | SectorScalarWhereInput[]
    OR?: SectorScalarWhereInput[]
    NOT?: SectorScalarWhereInput | SectorScalarWhereInput[]
    id?: StringFilter<"Sector"> | string
    name?: StringNullableFilter<"Sector"> | string | null
    size?: IntNullableFilter<"Sector"> | number | null
    farmId?: StringNullableFilter<"Sector"> | string | null
    createdAt?: DateTimeFilter<"Sector"> | Date | string
    updatedAt?: DateTimeFilter<"Sector"> | Date | string
  }

  export type FarmCreateWithoutSectorsInput = {
    id?: string
    name?: string | null
    location?: string | null
    size?: number | null
    owner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutFarmsInput
  }

  export type FarmUncheckedCreateWithoutSectorsInput = {
    id?: string
    name?: string | null
    location?: string | null
    size?: number | null
    owner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type FarmCreateOrConnectWithoutSectorsInput = {
    where: FarmWhereUniqueInput
    create: XOR<FarmCreateWithoutSectorsInput, FarmUncheckedCreateWithoutSectorsInput>
  }

  export type CropCreateWithoutSectorInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CropUncheckedCreateWithoutSectorInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CropCreateOrConnectWithoutSectorInput = {
    where: CropWhereUniqueInput
    create: XOR<CropCreateWithoutSectorInput, CropUncheckedCreateWithoutSectorInput>
  }

  export type CropCreateManySectorInputEnvelope = {
    data: CropCreateManySectorInput | CropCreateManySectorInput[]
    skipDuplicates?: boolean
  }

  export type FarmUpsertWithoutSectorsInput = {
    update: XOR<FarmUpdateWithoutSectorsInput, FarmUncheckedUpdateWithoutSectorsInput>
    create: XOR<FarmCreateWithoutSectorsInput, FarmUncheckedCreateWithoutSectorsInput>
    where?: FarmWhereInput
  }

  export type FarmUpdateToOneWithWhereWithoutSectorsInput = {
    where?: FarmWhereInput
    data: XOR<FarmUpdateWithoutSectorsInput, FarmUncheckedUpdateWithoutSectorsInput>
  }

  export type FarmUpdateWithoutSectorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutFarmsNestedInput
  }

  export type FarmUncheckedUpdateWithoutSectorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CropUpsertWithWhereUniqueWithoutSectorInput = {
    where: CropWhereUniqueInput
    update: XOR<CropUpdateWithoutSectorInput, CropUncheckedUpdateWithoutSectorInput>
    create: XOR<CropCreateWithoutSectorInput, CropUncheckedCreateWithoutSectorInput>
  }

  export type CropUpdateWithWhereUniqueWithoutSectorInput = {
    where: CropWhereUniqueInput
    data: XOR<CropUpdateWithoutSectorInput, CropUncheckedUpdateWithoutSectorInput>
  }

  export type CropUpdateManyWithWhereWithoutSectorInput = {
    where: CropScalarWhereInput
    data: XOR<CropUpdateManyMutationInput, CropUncheckedUpdateManyWithoutSectorInput>
  }

  export type CropScalarWhereInput = {
    AND?: CropScalarWhereInput | CropScalarWhereInput[]
    OR?: CropScalarWhereInput[]
    NOT?: CropScalarWhereInput | CropScalarWhereInput[]
    id?: StringFilter<"Crop"> | string
    name?: StringNullableFilter<"Crop"> | string | null
    sectorId?: StringNullableFilter<"Crop"> | string | null
    createdAt?: DateTimeFilter<"Crop"> | Date | string
    updatedAt?: DateTimeFilter<"Crop"> | Date | string
  }

  export type SectorCreateWithoutCropsInput = {
    id?: string
    name?: string | null
    size?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    farm?: FarmCreateNestedOneWithoutSectorsInput
  }

  export type SectorUncheckedCreateWithoutCropsInput = {
    id?: string
    name?: string | null
    size?: number | null
    farmId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectorCreateOrConnectWithoutCropsInput = {
    where: SectorWhereUniqueInput
    create: XOR<SectorCreateWithoutCropsInput, SectorUncheckedCreateWithoutCropsInput>
  }

  export type SectorUpsertWithoutCropsInput = {
    update: XOR<SectorUpdateWithoutCropsInput, SectorUncheckedUpdateWithoutCropsInput>
    create: XOR<SectorCreateWithoutCropsInput, SectorUncheckedCreateWithoutCropsInput>
    where?: SectorWhereInput
  }

  export type SectorUpdateToOneWithWhereWithoutCropsInput = {
    where?: SectorWhereInput
    data: XOR<SectorUpdateWithoutCropsInput, SectorUncheckedUpdateWithoutCropsInput>
  }

  export type SectorUpdateWithoutCropsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farm?: FarmUpdateOneWithoutSectorsNestedInput
  }

  export type SectorUncheckedUpdateWithoutCropsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    farmId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmCreateManyUserInput = {
    id?: string
    name?: string | null
    location?: string | null
    size?: number | null
    owner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FarmUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectors?: SectorUpdateManyWithoutFarmNestedInput
  }

  export type FarmUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectors?: SectorUncheckedUpdateManyWithoutFarmNestedInput
  }

  export type FarmUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectorCreateManyFarmInput = {
    id?: string
    name?: string | null
    size?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectorUpdateWithoutFarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crops?: CropUpdateManyWithoutSectorNestedInput
  }

  export type SectorUncheckedUpdateWithoutFarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crops?: CropUncheckedUpdateManyWithoutSectorNestedInput
  }

  export type SectorUncheckedUpdateManyWithoutFarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CropCreateManySectorInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CropUpdateWithoutSectorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CropUncheckedUpdateWithoutSectorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CropUncheckedUpdateManyWithoutSectorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}