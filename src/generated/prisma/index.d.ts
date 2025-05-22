
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
 * Model idnbi_User
 * 
 */
export type idnbi_User = $Result.DefaultSelection<Prisma.$idnbi_UserPayload>
/**
 * Model idnbi_Role
 * 
 */
export type idnbi_Role = $Result.DefaultSelection<Prisma.$idnbi_RolePayload>
/**
 * Model idnbi_UserRole
 * 
 */
export type idnbi_UserRole = $Result.DefaultSelection<Prisma.$idnbi_UserRolePayload>
/**
 * Model idnbi_Permission
 * 
 */
export type idnbi_Permission = $Result.DefaultSelection<Prisma.$idnbi_PermissionPayload>
/**
 * Model idnbi_RolePermission
 * 
 */
export type idnbi_RolePermission = $Result.DefaultSelection<Prisma.$idnbi_RolePermissionPayload>
/**
 * Model idnbi_TermsAndConditions
 * 
 */
export type idnbi_TermsAndConditions = $Result.DefaultSelection<Prisma.$idnbi_TermsAndConditionsPayload>
/**
 * Model idnbi_Content
 * 
 */
export type idnbi_Content = $Result.DefaultSelection<Prisma.$idnbi_ContentPayload>
/**
 * Model idnbi_MenuItem
 * 
 */
export type idnbi_MenuItem = $Result.DefaultSelection<Prisma.$idnbi_MenuItemPayload>
/**
 * Model idnbi_MenuRole
 * 
 */
export type idnbi_MenuRole = $Result.DefaultSelection<Prisma.$idnbi_MenuRolePayload>
/**
 * Model idnbi_Notification
 * 
 */
export type idnbi_Notification = $Result.DefaultSelection<Prisma.$idnbi_NotificationPayload>
/**
 * Model idnbi_UserNotificationStatus
 * 
 */
export type idnbi_UserNotificationStatus = $Result.DefaultSelection<Prisma.$idnbi_UserNotificationStatusPayload>
/**
 * Model idnbi_EmailTemplate
 * 
 */
export type idnbi_EmailTemplate = $Result.DefaultSelection<Prisma.$idnbi_EmailTemplatePayload>
/**
 * Model idnbi_SystemConfiguration
 * 
 */
export type idnbi_SystemConfiguration = $Result.DefaultSelection<Prisma.$idnbi_SystemConfigurationPayload>
/**
 * Model idnbi_AuditLog
 * 
 */
export type idnbi_AuditLog = $Result.DefaultSelection<Prisma.$idnbi_AuditLogPayload>
/**
 * Model idnbi_PasswordResetToken
 * 
 */
export type idnbi_PasswordResetToken = $Result.DefaultSelection<Prisma.$idnbi_PasswordResetTokenPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Idnbi_Users
 * const idnbi_Users = await prisma.idnbi_User.findMany()
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
   * // Fetch zero or more Idnbi_Users
   * const idnbi_Users = await prisma.idnbi_User.findMany()
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
   * `prisma.idnbi_User`: Exposes CRUD operations for the **idnbi_User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Idnbi_Users
    * const idnbi_Users = await prisma.idnbi_User.findMany()
    * ```
    */
  get idnbi_User(): Prisma.idnbi_UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.idnbi_Role`: Exposes CRUD operations for the **idnbi_Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Idnbi_Roles
    * const idnbi_Roles = await prisma.idnbi_Role.findMany()
    * ```
    */
  get idnbi_Role(): Prisma.idnbi_RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.idnbi_UserRole`: Exposes CRUD operations for the **idnbi_UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Idnbi_UserRoles
    * const idnbi_UserRoles = await prisma.idnbi_UserRole.findMany()
    * ```
    */
  get idnbi_UserRole(): Prisma.idnbi_UserRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.idnbi_Permission`: Exposes CRUD operations for the **idnbi_Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Idnbi_Permissions
    * const idnbi_Permissions = await prisma.idnbi_Permission.findMany()
    * ```
    */
  get idnbi_Permission(): Prisma.idnbi_PermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.idnbi_RolePermission`: Exposes CRUD operations for the **idnbi_RolePermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Idnbi_RolePermissions
    * const idnbi_RolePermissions = await prisma.idnbi_RolePermission.findMany()
    * ```
    */
  get idnbi_RolePermission(): Prisma.idnbi_RolePermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.idnbi_TermsAndConditions`: Exposes CRUD operations for the **idnbi_TermsAndConditions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Idnbi_TermsAndConditions
    * const idnbi_TermsAndConditions = await prisma.idnbi_TermsAndConditions.findMany()
    * ```
    */
  get idnbi_TermsAndConditions(): Prisma.idnbi_TermsAndConditionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.idnbi_Content`: Exposes CRUD operations for the **idnbi_Content** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Idnbi_Contents
    * const idnbi_Contents = await prisma.idnbi_Content.findMany()
    * ```
    */
  get idnbi_Content(): Prisma.idnbi_ContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.idnbi_MenuItem`: Exposes CRUD operations for the **idnbi_MenuItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Idnbi_MenuItems
    * const idnbi_MenuItems = await prisma.idnbi_MenuItem.findMany()
    * ```
    */
  get idnbi_MenuItem(): Prisma.idnbi_MenuItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.idnbi_MenuRole`: Exposes CRUD operations for the **idnbi_MenuRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Idnbi_MenuRoles
    * const idnbi_MenuRoles = await prisma.idnbi_MenuRole.findMany()
    * ```
    */
  get idnbi_MenuRole(): Prisma.idnbi_MenuRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.idnbi_Notification`: Exposes CRUD operations for the **idnbi_Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Idnbi_Notifications
    * const idnbi_Notifications = await prisma.idnbi_Notification.findMany()
    * ```
    */
  get idnbi_Notification(): Prisma.idnbi_NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.idnbi_UserNotificationStatus`: Exposes CRUD operations for the **idnbi_UserNotificationStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Idnbi_UserNotificationStatuses
    * const idnbi_UserNotificationStatuses = await prisma.idnbi_UserNotificationStatus.findMany()
    * ```
    */
  get idnbi_UserNotificationStatus(): Prisma.idnbi_UserNotificationStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.idnbi_EmailTemplate`: Exposes CRUD operations for the **idnbi_EmailTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Idnbi_EmailTemplates
    * const idnbi_EmailTemplates = await prisma.idnbi_EmailTemplate.findMany()
    * ```
    */
  get idnbi_EmailTemplate(): Prisma.idnbi_EmailTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.idnbi_SystemConfiguration`: Exposes CRUD operations for the **idnbi_SystemConfiguration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Idnbi_SystemConfigurations
    * const idnbi_SystemConfigurations = await prisma.idnbi_SystemConfiguration.findMany()
    * ```
    */
  get idnbi_SystemConfiguration(): Prisma.idnbi_SystemConfigurationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.idnbi_AuditLog`: Exposes CRUD operations for the **idnbi_AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Idnbi_AuditLogs
    * const idnbi_AuditLogs = await prisma.idnbi_AuditLog.findMany()
    * ```
    */
  get idnbi_AuditLog(): Prisma.idnbi_AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.idnbi_PasswordResetToken`: Exposes CRUD operations for the **idnbi_PasswordResetToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Idnbi_PasswordResetTokens
    * const idnbi_PasswordResetTokens = await prisma.idnbi_PasswordResetToken.findMany()
    * ```
    */
  get idnbi_PasswordResetToken(): Prisma.idnbi_PasswordResetTokenDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    idnbi_User: 'idnbi_User',
    idnbi_Role: 'idnbi_Role',
    idnbi_UserRole: 'idnbi_UserRole',
    idnbi_Permission: 'idnbi_Permission',
    idnbi_RolePermission: 'idnbi_RolePermission',
    idnbi_TermsAndConditions: 'idnbi_TermsAndConditions',
    idnbi_Content: 'idnbi_Content',
    idnbi_MenuItem: 'idnbi_MenuItem',
    idnbi_MenuRole: 'idnbi_MenuRole',
    idnbi_Notification: 'idnbi_Notification',
    idnbi_UserNotificationStatus: 'idnbi_UserNotificationStatus',
    idnbi_EmailTemplate: 'idnbi_EmailTemplate',
    idnbi_SystemConfiguration: 'idnbi_SystemConfiguration',
    idnbi_AuditLog: 'idnbi_AuditLog',
    idnbi_PasswordResetToken: 'idnbi_PasswordResetToken'
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
      modelProps: "idnbi_User" | "idnbi_Role" | "idnbi_UserRole" | "idnbi_Permission" | "idnbi_RolePermission" | "idnbi_TermsAndConditions" | "idnbi_Content" | "idnbi_MenuItem" | "idnbi_MenuRole" | "idnbi_Notification" | "idnbi_UserNotificationStatus" | "idnbi_EmailTemplate" | "idnbi_SystemConfiguration" | "idnbi_AuditLog" | "idnbi_PasswordResetToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      idnbi_User: {
        payload: Prisma.$idnbi_UserPayload<ExtArgs>
        fields: Prisma.idnbi_UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.idnbi_UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.idnbi_UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserPayload>
          }
          findFirst: {
            args: Prisma.idnbi_UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.idnbi_UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserPayload>
          }
          findMany: {
            args: Prisma.idnbi_UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserPayload>[]
          }
          create: {
            args: Prisma.idnbi_UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserPayload>
          }
          createMany: {
            args: Prisma.idnbi_UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.idnbi_UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserPayload>[]
          }
          delete: {
            args: Prisma.idnbi_UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserPayload>
          }
          update: {
            args: Prisma.idnbi_UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserPayload>
          }
          deleteMany: {
            args: Prisma.idnbi_UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.idnbi_UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.idnbi_UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserPayload>[]
          }
          upsert: {
            args: Prisma.idnbi_UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserPayload>
          }
          aggregate: {
            args: Prisma.Idnbi_UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdnbi_User>
          }
          groupBy: {
            args: Prisma.idnbi_UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<Idnbi_UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.idnbi_UserCountArgs<ExtArgs>
            result: $Utils.Optional<Idnbi_UserCountAggregateOutputType> | number
          }
        }
      }
      idnbi_Role: {
        payload: Prisma.$idnbi_RolePayload<ExtArgs>
        fields: Prisma.idnbi_RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.idnbi_RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.idnbi_RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_RolePayload>
          }
          findFirst: {
            args: Prisma.idnbi_RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.idnbi_RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_RolePayload>
          }
          findMany: {
            args: Prisma.idnbi_RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_RolePayload>[]
          }
          create: {
            args: Prisma.idnbi_RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_RolePayload>
          }
          createMany: {
            args: Prisma.idnbi_RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.idnbi_RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_RolePayload>[]
          }
          delete: {
            args: Prisma.idnbi_RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_RolePayload>
          }
          update: {
            args: Prisma.idnbi_RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_RolePayload>
          }
          deleteMany: {
            args: Prisma.idnbi_RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.idnbi_RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.idnbi_RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_RolePayload>[]
          }
          upsert: {
            args: Prisma.idnbi_RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_RolePayload>
          }
          aggregate: {
            args: Prisma.Idnbi_RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdnbi_Role>
          }
          groupBy: {
            args: Prisma.idnbi_RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<Idnbi_RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.idnbi_RoleCountArgs<ExtArgs>
            result: $Utils.Optional<Idnbi_RoleCountAggregateOutputType> | number
          }
        }
      }
      idnbi_UserRole: {
        payload: Prisma.$idnbi_UserRolePayload<ExtArgs>
        fields: Prisma.idnbi_UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.idnbi_UserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.idnbi_UserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserRolePayload>
          }
          findFirst: {
            args: Prisma.idnbi_UserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.idnbi_UserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserRolePayload>
          }
          findMany: {
            args: Prisma.idnbi_UserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserRolePayload>[]
          }
          create: {
            args: Prisma.idnbi_UserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserRolePayload>
          }
          createMany: {
            args: Prisma.idnbi_UserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.idnbi_UserRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserRolePayload>[]
          }
          delete: {
            args: Prisma.idnbi_UserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserRolePayload>
          }
          update: {
            args: Prisma.idnbi_UserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserRolePayload>
          }
          deleteMany: {
            args: Prisma.idnbi_UserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.idnbi_UserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.idnbi_UserRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserRolePayload>[]
          }
          upsert: {
            args: Prisma.idnbi_UserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserRolePayload>
          }
          aggregate: {
            args: Prisma.Idnbi_UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdnbi_UserRole>
          }
          groupBy: {
            args: Prisma.idnbi_UserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<Idnbi_UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.idnbi_UserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<Idnbi_UserRoleCountAggregateOutputType> | number
          }
        }
      }
      idnbi_Permission: {
        payload: Prisma.$idnbi_PermissionPayload<ExtArgs>
        fields: Prisma.idnbi_PermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.idnbi_PermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_PermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.idnbi_PermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_PermissionPayload>
          }
          findFirst: {
            args: Prisma.idnbi_PermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_PermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.idnbi_PermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_PermissionPayload>
          }
          findMany: {
            args: Prisma.idnbi_PermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_PermissionPayload>[]
          }
          create: {
            args: Prisma.idnbi_PermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_PermissionPayload>
          }
          createMany: {
            args: Prisma.idnbi_PermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.idnbi_PermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_PermissionPayload>[]
          }
          delete: {
            args: Prisma.idnbi_PermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_PermissionPayload>
          }
          update: {
            args: Prisma.idnbi_PermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_PermissionPayload>
          }
          deleteMany: {
            args: Prisma.idnbi_PermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.idnbi_PermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.idnbi_PermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_PermissionPayload>[]
          }
          upsert: {
            args: Prisma.idnbi_PermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_PermissionPayload>
          }
          aggregate: {
            args: Prisma.Idnbi_PermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdnbi_Permission>
          }
          groupBy: {
            args: Prisma.idnbi_PermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Idnbi_PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.idnbi_PermissionCountArgs<ExtArgs>
            result: $Utils.Optional<Idnbi_PermissionCountAggregateOutputType> | number
          }
        }
      }
      idnbi_RolePermission: {
        payload: Prisma.$idnbi_RolePermissionPayload<ExtArgs>
        fields: Prisma.idnbi_RolePermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.idnbi_RolePermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_RolePermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.idnbi_RolePermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_RolePermissionPayload>
          }
          findFirst: {
            args: Prisma.idnbi_RolePermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_RolePermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.idnbi_RolePermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_RolePermissionPayload>
          }
          findMany: {
            args: Prisma.idnbi_RolePermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_RolePermissionPayload>[]
          }
          create: {
            args: Prisma.idnbi_RolePermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_RolePermissionPayload>
          }
          createMany: {
            args: Prisma.idnbi_RolePermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.idnbi_RolePermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_RolePermissionPayload>[]
          }
          delete: {
            args: Prisma.idnbi_RolePermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_RolePermissionPayload>
          }
          update: {
            args: Prisma.idnbi_RolePermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_RolePermissionPayload>
          }
          deleteMany: {
            args: Prisma.idnbi_RolePermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.idnbi_RolePermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.idnbi_RolePermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_RolePermissionPayload>[]
          }
          upsert: {
            args: Prisma.idnbi_RolePermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_RolePermissionPayload>
          }
          aggregate: {
            args: Prisma.Idnbi_RolePermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdnbi_RolePermission>
          }
          groupBy: {
            args: Prisma.idnbi_RolePermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Idnbi_RolePermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.idnbi_RolePermissionCountArgs<ExtArgs>
            result: $Utils.Optional<Idnbi_RolePermissionCountAggregateOutputType> | number
          }
        }
      }
      idnbi_TermsAndConditions: {
        payload: Prisma.$idnbi_TermsAndConditionsPayload<ExtArgs>
        fields: Prisma.idnbi_TermsAndConditionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.idnbi_TermsAndConditionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_TermsAndConditionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.idnbi_TermsAndConditionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_TermsAndConditionsPayload>
          }
          findFirst: {
            args: Prisma.idnbi_TermsAndConditionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_TermsAndConditionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.idnbi_TermsAndConditionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_TermsAndConditionsPayload>
          }
          findMany: {
            args: Prisma.idnbi_TermsAndConditionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_TermsAndConditionsPayload>[]
          }
          create: {
            args: Prisma.idnbi_TermsAndConditionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_TermsAndConditionsPayload>
          }
          createMany: {
            args: Prisma.idnbi_TermsAndConditionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.idnbi_TermsAndConditionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_TermsAndConditionsPayload>[]
          }
          delete: {
            args: Prisma.idnbi_TermsAndConditionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_TermsAndConditionsPayload>
          }
          update: {
            args: Prisma.idnbi_TermsAndConditionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_TermsAndConditionsPayload>
          }
          deleteMany: {
            args: Prisma.idnbi_TermsAndConditionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.idnbi_TermsAndConditionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.idnbi_TermsAndConditionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_TermsAndConditionsPayload>[]
          }
          upsert: {
            args: Prisma.idnbi_TermsAndConditionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_TermsAndConditionsPayload>
          }
          aggregate: {
            args: Prisma.Idnbi_TermsAndConditionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdnbi_TermsAndConditions>
          }
          groupBy: {
            args: Prisma.idnbi_TermsAndConditionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Idnbi_TermsAndConditionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.idnbi_TermsAndConditionsCountArgs<ExtArgs>
            result: $Utils.Optional<Idnbi_TermsAndConditionsCountAggregateOutputType> | number
          }
        }
      }
      idnbi_Content: {
        payload: Prisma.$idnbi_ContentPayload<ExtArgs>
        fields: Prisma.idnbi_ContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.idnbi_ContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_ContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.idnbi_ContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_ContentPayload>
          }
          findFirst: {
            args: Prisma.idnbi_ContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_ContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.idnbi_ContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_ContentPayload>
          }
          findMany: {
            args: Prisma.idnbi_ContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_ContentPayload>[]
          }
          create: {
            args: Prisma.idnbi_ContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_ContentPayload>
          }
          createMany: {
            args: Prisma.idnbi_ContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.idnbi_ContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_ContentPayload>[]
          }
          delete: {
            args: Prisma.idnbi_ContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_ContentPayload>
          }
          update: {
            args: Prisma.idnbi_ContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_ContentPayload>
          }
          deleteMany: {
            args: Prisma.idnbi_ContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.idnbi_ContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.idnbi_ContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_ContentPayload>[]
          }
          upsert: {
            args: Prisma.idnbi_ContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_ContentPayload>
          }
          aggregate: {
            args: Prisma.Idnbi_ContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdnbi_Content>
          }
          groupBy: {
            args: Prisma.idnbi_ContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<Idnbi_ContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.idnbi_ContentCountArgs<ExtArgs>
            result: $Utils.Optional<Idnbi_ContentCountAggregateOutputType> | number
          }
        }
      }
      idnbi_MenuItem: {
        payload: Prisma.$idnbi_MenuItemPayload<ExtArgs>
        fields: Prisma.idnbi_MenuItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.idnbi_MenuItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_MenuItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.idnbi_MenuItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_MenuItemPayload>
          }
          findFirst: {
            args: Prisma.idnbi_MenuItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_MenuItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.idnbi_MenuItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_MenuItemPayload>
          }
          findMany: {
            args: Prisma.idnbi_MenuItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_MenuItemPayload>[]
          }
          create: {
            args: Prisma.idnbi_MenuItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_MenuItemPayload>
          }
          createMany: {
            args: Prisma.idnbi_MenuItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.idnbi_MenuItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_MenuItemPayload>[]
          }
          delete: {
            args: Prisma.idnbi_MenuItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_MenuItemPayload>
          }
          update: {
            args: Prisma.idnbi_MenuItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_MenuItemPayload>
          }
          deleteMany: {
            args: Prisma.idnbi_MenuItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.idnbi_MenuItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.idnbi_MenuItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_MenuItemPayload>[]
          }
          upsert: {
            args: Prisma.idnbi_MenuItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_MenuItemPayload>
          }
          aggregate: {
            args: Prisma.Idnbi_MenuItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdnbi_MenuItem>
          }
          groupBy: {
            args: Prisma.idnbi_MenuItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<Idnbi_MenuItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.idnbi_MenuItemCountArgs<ExtArgs>
            result: $Utils.Optional<Idnbi_MenuItemCountAggregateOutputType> | number
          }
        }
      }
      idnbi_MenuRole: {
        payload: Prisma.$idnbi_MenuRolePayload<ExtArgs>
        fields: Prisma.idnbi_MenuRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.idnbi_MenuRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_MenuRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.idnbi_MenuRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_MenuRolePayload>
          }
          findFirst: {
            args: Prisma.idnbi_MenuRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_MenuRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.idnbi_MenuRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_MenuRolePayload>
          }
          findMany: {
            args: Prisma.idnbi_MenuRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_MenuRolePayload>[]
          }
          create: {
            args: Prisma.idnbi_MenuRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_MenuRolePayload>
          }
          createMany: {
            args: Prisma.idnbi_MenuRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.idnbi_MenuRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_MenuRolePayload>[]
          }
          delete: {
            args: Prisma.idnbi_MenuRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_MenuRolePayload>
          }
          update: {
            args: Prisma.idnbi_MenuRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_MenuRolePayload>
          }
          deleteMany: {
            args: Prisma.idnbi_MenuRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.idnbi_MenuRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.idnbi_MenuRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_MenuRolePayload>[]
          }
          upsert: {
            args: Prisma.idnbi_MenuRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_MenuRolePayload>
          }
          aggregate: {
            args: Prisma.Idnbi_MenuRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdnbi_MenuRole>
          }
          groupBy: {
            args: Prisma.idnbi_MenuRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<Idnbi_MenuRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.idnbi_MenuRoleCountArgs<ExtArgs>
            result: $Utils.Optional<Idnbi_MenuRoleCountAggregateOutputType> | number
          }
        }
      }
      idnbi_Notification: {
        payload: Prisma.$idnbi_NotificationPayload<ExtArgs>
        fields: Prisma.idnbi_NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.idnbi_NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.idnbi_NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_NotificationPayload>
          }
          findFirst: {
            args: Prisma.idnbi_NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.idnbi_NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_NotificationPayload>
          }
          findMany: {
            args: Prisma.idnbi_NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_NotificationPayload>[]
          }
          create: {
            args: Prisma.idnbi_NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_NotificationPayload>
          }
          createMany: {
            args: Prisma.idnbi_NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.idnbi_NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_NotificationPayload>[]
          }
          delete: {
            args: Prisma.idnbi_NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_NotificationPayload>
          }
          update: {
            args: Prisma.idnbi_NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_NotificationPayload>
          }
          deleteMany: {
            args: Prisma.idnbi_NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.idnbi_NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.idnbi_NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_NotificationPayload>[]
          }
          upsert: {
            args: Prisma.idnbi_NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_NotificationPayload>
          }
          aggregate: {
            args: Prisma.Idnbi_NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdnbi_Notification>
          }
          groupBy: {
            args: Prisma.idnbi_NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<Idnbi_NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.idnbi_NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<Idnbi_NotificationCountAggregateOutputType> | number
          }
        }
      }
      idnbi_UserNotificationStatus: {
        payload: Prisma.$idnbi_UserNotificationStatusPayload<ExtArgs>
        fields: Prisma.idnbi_UserNotificationStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.idnbi_UserNotificationStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserNotificationStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.idnbi_UserNotificationStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserNotificationStatusPayload>
          }
          findFirst: {
            args: Prisma.idnbi_UserNotificationStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserNotificationStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.idnbi_UserNotificationStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserNotificationStatusPayload>
          }
          findMany: {
            args: Prisma.idnbi_UserNotificationStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserNotificationStatusPayload>[]
          }
          create: {
            args: Prisma.idnbi_UserNotificationStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserNotificationStatusPayload>
          }
          createMany: {
            args: Prisma.idnbi_UserNotificationStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.idnbi_UserNotificationStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserNotificationStatusPayload>[]
          }
          delete: {
            args: Prisma.idnbi_UserNotificationStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserNotificationStatusPayload>
          }
          update: {
            args: Prisma.idnbi_UserNotificationStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserNotificationStatusPayload>
          }
          deleteMany: {
            args: Prisma.idnbi_UserNotificationStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.idnbi_UserNotificationStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.idnbi_UserNotificationStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserNotificationStatusPayload>[]
          }
          upsert: {
            args: Prisma.idnbi_UserNotificationStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_UserNotificationStatusPayload>
          }
          aggregate: {
            args: Prisma.Idnbi_UserNotificationStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdnbi_UserNotificationStatus>
          }
          groupBy: {
            args: Prisma.idnbi_UserNotificationStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<Idnbi_UserNotificationStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.idnbi_UserNotificationStatusCountArgs<ExtArgs>
            result: $Utils.Optional<Idnbi_UserNotificationStatusCountAggregateOutputType> | number
          }
        }
      }
      idnbi_EmailTemplate: {
        payload: Prisma.$idnbi_EmailTemplatePayload<ExtArgs>
        fields: Prisma.idnbi_EmailTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.idnbi_EmailTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_EmailTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.idnbi_EmailTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_EmailTemplatePayload>
          }
          findFirst: {
            args: Prisma.idnbi_EmailTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_EmailTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.idnbi_EmailTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_EmailTemplatePayload>
          }
          findMany: {
            args: Prisma.idnbi_EmailTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_EmailTemplatePayload>[]
          }
          create: {
            args: Prisma.idnbi_EmailTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_EmailTemplatePayload>
          }
          createMany: {
            args: Prisma.idnbi_EmailTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.idnbi_EmailTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_EmailTemplatePayload>[]
          }
          delete: {
            args: Prisma.idnbi_EmailTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_EmailTemplatePayload>
          }
          update: {
            args: Prisma.idnbi_EmailTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_EmailTemplatePayload>
          }
          deleteMany: {
            args: Prisma.idnbi_EmailTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.idnbi_EmailTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.idnbi_EmailTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_EmailTemplatePayload>[]
          }
          upsert: {
            args: Prisma.idnbi_EmailTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_EmailTemplatePayload>
          }
          aggregate: {
            args: Prisma.Idnbi_EmailTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdnbi_EmailTemplate>
          }
          groupBy: {
            args: Prisma.idnbi_EmailTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<Idnbi_EmailTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.idnbi_EmailTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<Idnbi_EmailTemplateCountAggregateOutputType> | number
          }
        }
      }
      idnbi_SystemConfiguration: {
        payload: Prisma.$idnbi_SystemConfigurationPayload<ExtArgs>
        fields: Prisma.idnbi_SystemConfigurationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.idnbi_SystemConfigurationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_SystemConfigurationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.idnbi_SystemConfigurationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_SystemConfigurationPayload>
          }
          findFirst: {
            args: Prisma.idnbi_SystemConfigurationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_SystemConfigurationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.idnbi_SystemConfigurationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_SystemConfigurationPayload>
          }
          findMany: {
            args: Prisma.idnbi_SystemConfigurationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_SystemConfigurationPayload>[]
          }
          create: {
            args: Prisma.idnbi_SystemConfigurationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_SystemConfigurationPayload>
          }
          createMany: {
            args: Prisma.idnbi_SystemConfigurationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.idnbi_SystemConfigurationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_SystemConfigurationPayload>[]
          }
          delete: {
            args: Prisma.idnbi_SystemConfigurationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_SystemConfigurationPayload>
          }
          update: {
            args: Prisma.idnbi_SystemConfigurationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_SystemConfigurationPayload>
          }
          deleteMany: {
            args: Prisma.idnbi_SystemConfigurationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.idnbi_SystemConfigurationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.idnbi_SystemConfigurationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_SystemConfigurationPayload>[]
          }
          upsert: {
            args: Prisma.idnbi_SystemConfigurationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_SystemConfigurationPayload>
          }
          aggregate: {
            args: Prisma.Idnbi_SystemConfigurationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdnbi_SystemConfiguration>
          }
          groupBy: {
            args: Prisma.idnbi_SystemConfigurationGroupByArgs<ExtArgs>
            result: $Utils.Optional<Idnbi_SystemConfigurationGroupByOutputType>[]
          }
          count: {
            args: Prisma.idnbi_SystemConfigurationCountArgs<ExtArgs>
            result: $Utils.Optional<Idnbi_SystemConfigurationCountAggregateOutputType> | number
          }
        }
      }
      idnbi_AuditLog: {
        payload: Prisma.$idnbi_AuditLogPayload<ExtArgs>
        fields: Prisma.idnbi_AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.idnbi_AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.idnbi_AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_AuditLogPayload>
          }
          findFirst: {
            args: Prisma.idnbi_AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.idnbi_AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_AuditLogPayload>
          }
          findMany: {
            args: Prisma.idnbi_AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_AuditLogPayload>[]
          }
          create: {
            args: Prisma.idnbi_AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_AuditLogPayload>
          }
          createMany: {
            args: Prisma.idnbi_AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.idnbi_AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_AuditLogPayload>[]
          }
          delete: {
            args: Prisma.idnbi_AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_AuditLogPayload>
          }
          update: {
            args: Prisma.idnbi_AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.idnbi_AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.idnbi_AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.idnbi_AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.idnbi_AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_AuditLogPayload>
          }
          aggregate: {
            args: Prisma.Idnbi_AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdnbi_AuditLog>
          }
          groupBy: {
            args: Prisma.idnbi_AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<Idnbi_AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.idnbi_AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<Idnbi_AuditLogCountAggregateOutputType> | number
          }
        }
      }
      idnbi_PasswordResetToken: {
        payload: Prisma.$idnbi_PasswordResetTokenPayload<ExtArgs>
        fields: Prisma.idnbi_PasswordResetTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.idnbi_PasswordResetTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_PasswordResetTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.idnbi_PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_PasswordResetTokenPayload>
          }
          findFirst: {
            args: Prisma.idnbi_PasswordResetTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_PasswordResetTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.idnbi_PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_PasswordResetTokenPayload>
          }
          findMany: {
            args: Prisma.idnbi_PasswordResetTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_PasswordResetTokenPayload>[]
          }
          create: {
            args: Prisma.idnbi_PasswordResetTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_PasswordResetTokenPayload>
          }
          createMany: {
            args: Prisma.idnbi_PasswordResetTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.idnbi_PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_PasswordResetTokenPayload>[]
          }
          delete: {
            args: Prisma.idnbi_PasswordResetTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_PasswordResetTokenPayload>
          }
          update: {
            args: Prisma.idnbi_PasswordResetTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_PasswordResetTokenPayload>
          }
          deleteMany: {
            args: Prisma.idnbi_PasswordResetTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.idnbi_PasswordResetTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.idnbi_PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_PasswordResetTokenPayload>[]
          }
          upsert: {
            args: Prisma.idnbi_PasswordResetTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idnbi_PasswordResetTokenPayload>
          }
          aggregate: {
            args: Prisma.Idnbi_PasswordResetTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdnbi_PasswordResetToken>
          }
          groupBy: {
            args: Prisma.idnbi_PasswordResetTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<Idnbi_PasswordResetTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.idnbi_PasswordResetTokenCountArgs<ExtArgs>
            result: $Utils.Optional<Idnbi_PasswordResetTokenCountAggregateOutputType> | number
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
    idnbi_User?: idnbi_UserOmit
    idnbi_Role?: idnbi_RoleOmit
    idnbi_UserRole?: idnbi_UserRoleOmit
    idnbi_Permission?: idnbi_PermissionOmit
    idnbi_RolePermission?: idnbi_RolePermissionOmit
    idnbi_TermsAndConditions?: idnbi_TermsAndConditionsOmit
    idnbi_Content?: idnbi_ContentOmit
    idnbi_MenuItem?: idnbi_MenuItemOmit
    idnbi_MenuRole?: idnbi_MenuRoleOmit
    idnbi_Notification?: idnbi_NotificationOmit
    idnbi_UserNotificationStatus?: idnbi_UserNotificationStatusOmit
    idnbi_EmailTemplate?: idnbi_EmailTemplateOmit
    idnbi_SystemConfiguration?: idnbi_SystemConfigurationOmit
    idnbi_AuditLog?: idnbi_AuditLogOmit
    idnbi_PasswordResetToken?: idnbi_PasswordResetTokenOmit
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
   * Count Type Idnbi_UserCountOutputType
   */

  export type Idnbi_UserCountOutputType = {
    roles: number
    created_content: number
    notifications: number
    password_reset: number
    audit_logs: number
  }

  export type Idnbi_UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | Idnbi_UserCountOutputTypeCountRolesArgs
    created_content?: boolean | Idnbi_UserCountOutputTypeCountCreated_contentArgs
    notifications?: boolean | Idnbi_UserCountOutputTypeCountNotificationsArgs
    password_reset?: boolean | Idnbi_UserCountOutputTypeCountPassword_resetArgs
    audit_logs?: boolean | Idnbi_UserCountOutputTypeCountAudit_logsArgs
  }

  // Custom InputTypes
  /**
   * Idnbi_UserCountOutputType without action
   */
  export type Idnbi_UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idnbi_UserCountOutputType
     */
    select?: Idnbi_UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Idnbi_UserCountOutputType without action
   */
  export type Idnbi_UserCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: idnbi_UserRoleWhereInput
  }

  /**
   * Idnbi_UserCountOutputType without action
   */
  export type Idnbi_UserCountOutputTypeCountCreated_contentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: idnbi_ContentWhereInput
  }

  /**
   * Idnbi_UserCountOutputType without action
   */
  export type Idnbi_UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: idnbi_UserNotificationStatusWhereInput
  }

  /**
   * Idnbi_UserCountOutputType without action
   */
  export type Idnbi_UserCountOutputTypeCountPassword_resetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: idnbi_PasswordResetTokenWhereInput
  }

  /**
   * Idnbi_UserCountOutputType without action
   */
  export type Idnbi_UserCountOutputTypeCountAudit_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: idnbi_AuditLogWhereInput
  }


  /**
   * Count Type Idnbi_RoleCountOutputType
   */

  export type Idnbi_RoleCountOutputType = {
    users: number
    permissions: number
    menus: number
  }

  export type Idnbi_RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Idnbi_RoleCountOutputTypeCountUsersArgs
    permissions?: boolean | Idnbi_RoleCountOutputTypeCountPermissionsArgs
    menus?: boolean | Idnbi_RoleCountOutputTypeCountMenusArgs
  }

  // Custom InputTypes
  /**
   * Idnbi_RoleCountOutputType without action
   */
  export type Idnbi_RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idnbi_RoleCountOutputType
     */
    select?: Idnbi_RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Idnbi_RoleCountOutputType without action
   */
  export type Idnbi_RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: idnbi_UserRoleWhereInput
  }

  /**
   * Idnbi_RoleCountOutputType without action
   */
  export type Idnbi_RoleCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: idnbi_RolePermissionWhereInput
  }

  /**
   * Idnbi_RoleCountOutputType without action
   */
  export type Idnbi_RoleCountOutputTypeCountMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: idnbi_MenuRoleWhereInput
  }


  /**
   * Count Type Idnbi_PermissionCountOutputType
   */

  export type Idnbi_PermissionCountOutputType = {
    roles: number
  }

  export type Idnbi_PermissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | Idnbi_PermissionCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * Idnbi_PermissionCountOutputType without action
   */
  export type Idnbi_PermissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idnbi_PermissionCountOutputType
     */
    select?: Idnbi_PermissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Idnbi_PermissionCountOutputType without action
   */
  export type Idnbi_PermissionCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: idnbi_RolePermissionWhereInput
  }


  /**
   * Count Type Idnbi_MenuItemCountOutputType
   */

  export type Idnbi_MenuItemCountOutputType = {
    children: number
    roles: number
  }

  export type Idnbi_MenuItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | Idnbi_MenuItemCountOutputTypeCountChildrenArgs
    roles?: boolean | Idnbi_MenuItemCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * Idnbi_MenuItemCountOutputType without action
   */
  export type Idnbi_MenuItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idnbi_MenuItemCountOutputType
     */
    select?: Idnbi_MenuItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Idnbi_MenuItemCountOutputType without action
   */
  export type Idnbi_MenuItemCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: idnbi_MenuItemWhereInput
  }

  /**
   * Idnbi_MenuItemCountOutputType without action
   */
  export type Idnbi_MenuItemCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: idnbi_MenuRoleWhereInput
  }


  /**
   * Count Type Idnbi_NotificationCountOutputType
   */

  export type Idnbi_NotificationCountOutputType = {
    user_statuses: number
  }

  export type Idnbi_NotificationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_statuses?: boolean | Idnbi_NotificationCountOutputTypeCountUser_statusesArgs
  }

  // Custom InputTypes
  /**
   * Idnbi_NotificationCountOutputType without action
   */
  export type Idnbi_NotificationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idnbi_NotificationCountOutputType
     */
    select?: Idnbi_NotificationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Idnbi_NotificationCountOutputType without action
   */
  export type Idnbi_NotificationCountOutputTypeCountUser_statusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: idnbi_UserNotificationStatusWhereInput
  }


  /**
   * Models
   */

  /**
   * Model idnbi_User
   */

  export type AggregateIdnbi_User = {
    _count: Idnbi_UserCountAggregateOutputType | null
    _avg: Idnbi_UserAvgAggregateOutputType | null
    _sum: Idnbi_UserSumAggregateOutputType | null
    _min: Idnbi_UserMinAggregateOutputType | null
    _max: Idnbi_UserMaxAggregateOutputType | null
  }

  export type Idnbi_UserAvgAggregateOutputType = {
    failed_login_attempts: number | null
  }

  export type Idnbi_UserSumAggregateOutputType = {
    failed_login_attempts: number | null
  }

  export type Idnbi_UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    status: string | null
    profile_photo_url: string | null
    last_login_at: Date | null
    last_login_ip: string | null
    failed_login_attempts: number | null
    is_ip_blocked: boolean | null
    terms_accepted_at: Date | null
    invited_at: Date | null
    registered_at: Date | null
    temp_password_flag: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Idnbi_UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    status: string | null
    profile_photo_url: string | null
    last_login_at: Date | null
    last_login_ip: string | null
    failed_login_attempts: number | null
    is_ip_blocked: boolean | null
    terms_accepted_at: Date | null
    invited_at: Date | null
    registered_at: Date | null
    temp_password_flag: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Idnbi_UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    status: number
    profile_photo_url: number
    last_login_at: number
    last_login_ip: number
    failed_login_attempts: number
    is_ip_blocked: number
    terms_accepted_at: number
    invited_at: number
    registered_at: number
    temp_password_flag: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Idnbi_UserAvgAggregateInputType = {
    failed_login_attempts?: true
  }

  export type Idnbi_UserSumAggregateInputType = {
    failed_login_attempts?: true
  }

  export type Idnbi_UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    status?: true
    profile_photo_url?: true
    last_login_at?: true
    last_login_ip?: true
    failed_login_attempts?: true
    is_ip_blocked?: true
    terms_accepted_at?: true
    invited_at?: true
    registered_at?: true
    temp_password_flag?: true
    created_at?: true
    updated_at?: true
  }

  export type Idnbi_UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    status?: true
    profile_photo_url?: true
    last_login_at?: true
    last_login_ip?: true
    failed_login_attempts?: true
    is_ip_blocked?: true
    terms_accepted_at?: true
    invited_at?: true
    registered_at?: true
    temp_password_flag?: true
    created_at?: true
    updated_at?: true
  }

  export type Idnbi_UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    status?: true
    profile_photo_url?: true
    last_login_at?: true
    last_login_ip?: true
    failed_login_attempts?: true
    is_ip_blocked?: true
    terms_accepted_at?: true
    invited_at?: true
    registered_at?: true
    temp_password_flag?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Idnbi_UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idnbi_User to aggregate.
     */
    where?: idnbi_UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_Users to fetch.
     */
    orderBy?: idnbi_UserOrderByWithRelationInput | idnbi_UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: idnbi_UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned idnbi_Users
    **/
    _count?: true | Idnbi_UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Idnbi_UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Idnbi_UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Idnbi_UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Idnbi_UserMaxAggregateInputType
  }

  export type GetIdnbi_UserAggregateType<T extends Idnbi_UserAggregateArgs> = {
        [P in keyof T & keyof AggregateIdnbi_User]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdnbi_User[P]>
      : GetScalarType<T[P], AggregateIdnbi_User[P]>
  }




  export type idnbi_UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: idnbi_UserWhereInput
    orderBy?: idnbi_UserOrderByWithAggregationInput | idnbi_UserOrderByWithAggregationInput[]
    by: Idnbi_UserScalarFieldEnum[] | Idnbi_UserScalarFieldEnum
    having?: idnbi_UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Idnbi_UserCountAggregateInputType | true
    _avg?: Idnbi_UserAvgAggregateInputType
    _sum?: Idnbi_UserSumAggregateInputType
    _min?: Idnbi_UserMinAggregateInputType
    _max?: Idnbi_UserMaxAggregateInputType
  }

  export type Idnbi_UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    status: string
    profile_photo_url: string | null
    last_login_at: Date | null
    last_login_ip: string | null
    failed_login_attempts: number
    is_ip_blocked: boolean
    terms_accepted_at: Date | null
    invited_at: Date | null
    registered_at: Date
    temp_password_flag: boolean
    created_at: Date
    updated_at: Date
    _count: Idnbi_UserCountAggregateOutputType | null
    _avg: Idnbi_UserAvgAggregateOutputType | null
    _sum: Idnbi_UserSumAggregateOutputType | null
    _min: Idnbi_UserMinAggregateOutputType | null
    _max: Idnbi_UserMaxAggregateOutputType | null
  }

  type GetIdnbi_UserGroupByPayload<T extends idnbi_UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Idnbi_UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Idnbi_UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Idnbi_UserGroupByOutputType[P]>
            : GetScalarType<T[P], Idnbi_UserGroupByOutputType[P]>
        }
      >
    >


  export type idnbi_UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    status?: boolean
    profile_photo_url?: boolean
    last_login_at?: boolean
    last_login_ip?: boolean
    failed_login_attempts?: boolean
    is_ip_blocked?: boolean
    terms_accepted_at?: boolean
    invited_at?: boolean
    registered_at?: boolean
    temp_password_flag?: boolean
    created_at?: boolean
    updated_at?: boolean
    roles?: boolean | idnbi_User$rolesArgs<ExtArgs>
    created_content?: boolean | idnbi_User$created_contentArgs<ExtArgs>
    notifications?: boolean | idnbi_User$notificationsArgs<ExtArgs>
    password_reset?: boolean | idnbi_User$password_resetArgs<ExtArgs>
    audit_logs?: boolean | idnbi_User$audit_logsArgs<ExtArgs>
    _count?: boolean | Idnbi_UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idnbi_User"]>

  export type idnbi_UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    status?: boolean
    profile_photo_url?: boolean
    last_login_at?: boolean
    last_login_ip?: boolean
    failed_login_attempts?: boolean
    is_ip_blocked?: boolean
    terms_accepted_at?: boolean
    invited_at?: boolean
    registered_at?: boolean
    temp_password_flag?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["idnbi_User"]>

  export type idnbi_UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    status?: boolean
    profile_photo_url?: boolean
    last_login_at?: boolean
    last_login_ip?: boolean
    failed_login_attempts?: boolean
    is_ip_blocked?: boolean
    terms_accepted_at?: boolean
    invited_at?: boolean
    registered_at?: boolean
    temp_password_flag?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["idnbi_User"]>

  export type idnbi_UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    status?: boolean
    profile_photo_url?: boolean
    last_login_at?: boolean
    last_login_ip?: boolean
    failed_login_attempts?: boolean
    is_ip_blocked?: boolean
    terms_accepted_at?: boolean
    invited_at?: boolean
    registered_at?: boolean
    temp_password_flag?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type idnbi_UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "status" | "profile_photo_url" | "last_login_at" | "last_login_ip" | "failed_login_attempts" | "is_ip_blocked" | "terms_accepted_at" | "invited_at" | "registered_at" | "temp_password_flag" | "created_at" | "updated_at", ExtArgs["result"]["idnbi_User"]>
  export type idnbi_UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | idnbi_User$rolesArgs<ExtArgs>
    created_content?: boolean | idnbi_User$created_contentArgs<ExtArgs>
    notifications?: boolean | idnbi_User$notificationsArgs<ExtArgs>
    password_reset?: boolean | idnbi_User$password_resetArgs<ExtArgs>
    audit_logs?: boolean | idnbi_User$audit_logsArgs<ExtArgs>
    _count?: boolean | Idnbi_UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type idnbi_UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type idnbi_UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $idnbi_UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "idnbi_User"
    objects: {
      roles: Prisma.$idnbi_UserRolePayload<ExtArgs>[]
      created_content: Prisma.$idnbi_ContentPayload<ExtArgs>[]
      notifications: Prisma.$idnbi_UserNotificationStatusPayload<ExtArgs>[]
      password_reset: Prisma.$idnbi_PasswordResetTokenPayload<ExtArgs>[]
      audit_logs: Prisma.$idnbi_AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      status: string
      profile_photo_url: string | null
      last_login_at: Date | null
      last_login_ip: string | null
      failed_login_attempts: number
      is_ip_blocked: boolean
      terms_accepted_at: Date | null
      invited_at: Date | null
      registered_at: Date
      temp_password_flag: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["idnbi_User"]>
    composites: {}
  }

  type idnbi_UserGetPayload<S extends boolean | null | undefined | idnbi_UserDefaultArgs> = $Result.GetResult<Prisma.$idnbi_UserPayload, S>

  type idnbi_UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<idnbi_UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Idnbi_UserCountAggregateInputType | true
    }

  export interface idnbi_UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['idnbi_User'], meta: { name: 'idnbi_User' } }
    /**
     * Find zero or one Idnbi_User that matches the filter.
     * @param {idnbi_UserFindUniqueArgs} args - Arguments to find a Idnbi_User
     * @example
     * // Get one Idnbi_User
     * const idnbi_User = await prisma.idnbi_User.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends idnbi_UserFindUniqueArgs>(args: SelectSubset<T, idnbi_UserFindUniqueArgs<ExtArgs>>): Prisma__idnbi_UserClient<$Result.GetResult<Prisma.$idnbi_UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Idnbi_User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {idnbi_UserFindUniqueOrThrowArgs} args - Arguments to find a Idnbi_User
     * @example
     * // Get one Idnbi_User
     * const idnbi_User = await prisma.idnbi_User.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends idnbi_UserFindUniqueOrThrowArgs>(args: SelectSubset<T, idnbi_UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__idnbi_UserClient<$Result.GetResult<Prisma.$idnbi_UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idnbi_User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_UserFindFirstArgs} args - Arguments to find a Idnbi_User
     * @example
     * // Get one Idnbi_User
     * const idnbi_User = await prisma.idnbi_User.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends idnbi_UserFindFirstArgs>(args?: SelectSubset<T, idnbi_UserFindFirstArgs<ExtArgs>>): Prisma__idnbi_UserClient<$Result.GetResult<Prisma.$idnbi_UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idnbi_User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_UserFindFirstOrThrowArgs} args - Arguments to find a Idnbi_User
     * @example
     * // Get one Idnbi_User
     * const idnbi_User = await prisma.idnbi_User.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends idnbi_UserFindFirstOrThrowArgs>(args?: SelectSubset<T, idnbi_UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__idnbi_UserClient<$Result.GetResult<Prisma.$idnbi_UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Idnbi_Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Idnbi_Users
     * const idnbi_Users = await prisma.idnbi_User.findMany()
     * 
     * // Get first 10 Idnbi_Users
     * const idnbi_Users = await prisma.idnbi_User.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const idnbi_UserWithIdOnly = await prisma.idnbi_User.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends idnbi_UserFindManyArgs>(args?: SelectSubset<T, idnbi_UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Idnbi_User.
     * @param {idnbi_UserCreateArgs} args - Arguments to create a Idnbi_User.
     * @example
     * // Create one Idnbi_User
     * const Idnbi_User = await prisma.idnbi_User.create({
     *   data: {
     *     // ... data to create a Idnbi_User
     *   }
     * })
     * 
     */
    create<T extends idnbi_UserCreateArgs>(args: SelectSubset<T, idnbi_UserCreateArgs<ExtArgs>>): Prisma__idnbi_UserClient<$Result.GetResult<Prisma.$idnbi_UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Idnbi_Users.
     * @param {idnbi_UserCreateManyArgs} args - Arguments to create many Idnbi_Users.
     * @example
     * // Create many Idnbi_Users
     * const idnbi_User = await prisma.idnbi_User.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends idnbi_UserCreateManyArgs>(args?: SelectSubset<T, idnbi_UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Idnbi_Users and returns the data saved in the database.
     * @param {idnbi_UserCreateManyAndReturnArgs} args - Arguments to create many Idnbi_Users.
     * @example
     * // Create many Idnbi_Users
     * const idnbi_User = await prisma.idnbi_User.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Idnbi_Users and only return the `id`
     * const idnbi_UserWithIdOnly = await prisma.idnbi_User.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends idnbi_UserCreateManyAndReturnArgs>(args?: SelectSubset<T, idnbi_UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Idnbi_User.
     * @param {idnbi_UserDeleteArgs} args - Arguments to delete one Idnbi_User.
     * @example
     * // Delete one Idnbi_User
     * const Idnbi_User = await prisma.idnbi_User.delete({
     *   where: {
     *     // ... filter to delete one Idnbi_User
     *   }
     * })
     * 
     */
    delete<T extends idnbi_UserDeleteArgs>(args: SelectSubset<T, idnbi_UserDeleteArgs<ExtArgs>>): Prisma__idnbi_UserClient<$Result.GetResult<Prisma.$idnbi_UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Idnbi_User.
     * @param {idnbi_UserUpdateArgs} args - Arguments to update one Idnbi_User.
     * @example
     * // Update one Idnbi_User
     * const idnbi_User = await prisma.idnbi_User.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends idnbi_UserUpdateArgs>(args: SelectSubset<T, idnbi_UserUpdateArgs<ExtArgs>>): Prisma__idnbi_UserClient<$Result.GetResult<Prisma.$idnbi_UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Idnbi_Users.
     * @param {idnbi_UserDeleteManyArgs} args - Arguments to filter Idnbi_Users to delete.
     * @example
     * // Delete a few Idnbi_Users
     * const { count } = await prisma.idnbi_User.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends idnbi_UserDeleteManyArgs>(args?: SelectSubset<T, idnbi_UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idnbi_Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Idnbi_Users
     * const idnbi_User = await prisma.idnbi_User.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends idnbi_UserUpdateManyArgs>(args: SelectSubset<T, idnbi_UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idnbi_Users and returns the data updated in the database.
     * @param {idnbi_UserUpdateManyAndReturnArgs} args - Arguments to update many Idnbi_Users.
     * @example
     * // Update many Idnbi_Users
     * const idnbi_User = await prisma.idnbi_User.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Idnbi_Users and only return the `id`
     * const idnbi_UserWithIdOnly = await prisma.idnbi_User.updateManyAndReturn({
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
    updateManyAndReturn<T extends idnbi_UserUpdateManyAndReturnArgs>(args: SelectSubset<T, idnbi_UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Idnbi_User.
     * @param {idnbi_UserUpsertArgs} args - Arguments to update or create a Idnbi_User.
     * @example
     * // Update or create a Idnbi_User
     * const idnbi_User = await prisma.idnbi_User.upsert({
     *   create: {
     *     // ... data to create a Idnbi_User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Idnbi_User we want to update
     *   }
     * })
     */
    upsert<T extends idnbi_UserUpsertArgs>(args: SelectSubset<T, idnbi_UserUpsertArgs<ExtArgs>>): Prisma__idnbi_UserClient<$Result.GetResult<Prisma.$idnbi_UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Idnbi_Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_UserCountArgs} args - Arguments to filter Idnbi_Users to count.
     * @example
     * // Count the number of Idnbi_Users
     * const count = await prisma.idnbi_User.count({
     *   where: {
     *     // ... the filter for the Idnbi_Users we want to count
     *   }
     * })
    **/
    count<T extends idnbi_UserCountArgs>(
      args?: Subset<T, idnbi_UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Idnbi_UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Idnbi_User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Idnbi_UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Idnbi_UserAggregateArgs>(args: Subset<T, Idnbi_UserAggregateArgs>): Prisma.PrismaPromise<GetIdnbi_UserAggregateType<T>>

    /**
     * Group by Idnbi_User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_UserGroupByArgs} args - Group by arguments.
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
      T extends idnbi_UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: idnbi_UserGroupByArgs['orderBy'] }
        : { orderBy?: idnbi_UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, idnbi_UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdnbi_UserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the idnbi_User model
   */
  readonly fields: idnbi_UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for idnbi_User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__idnbi_UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends idnbi_User$rolesArgs<ExtArgs> = {}>(args?: Subset<T, idnbi_User$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    created_content<T extends idnbi_User$created_contentArgs<ExtArgs> = {}>(args?: Subset<T, idnbi_User$created_contentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends idnbi_User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, idnbi_User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_UserNotificationStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    password_reset<T extends idnbi_User$password_resetArgs<ExtArgs> = {}>(args?: Subset<T, idnbi_User$password_resetArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_PasswordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    audit_logs<T extends idnbi_User$audit_logsArgs<ExtArgs> = {}>(args?: Subset<T, idnbi_User$audit_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the idnbi_User model
   */
  interface idnbi_UserFieldRefs {
    readonly id: FieldRef<"idnbi_User", 'String'>
    readonly name: FieldRef<"idnbi_User", 'String'>
    readonly email: FieldRef<"idnbi_User", 'String'>
    readonly password: FieldRef<"idnbi_User", 'String'>
    readonly status: FieldRef<"idnbi_User", 'String'>
    readonly profile_photo_url: FieldRef<"idnbi_User", 'String'>
    readonly last_login_at: FieldRef<"idnbi_User", 'DateTime'>
    readonly last_login_ip: FieldRef<"idnbi_User", 'String'>
    readonly failed_login_attempts: FieldRef<"idnbi_User", 'Int'>
    readonly is_ip_blocked: FieldRef<"idnbi_User", 'Boolean'>
    readonly terms_accepted_at: FieldRef<"idnbi_User", 'DateTime'>
    readonly invited_at: FieldRef<"idnbi_User", 'DateTime'>
    readonly registered_at: FieldRef<"idnbi_User", 'DateTime'>
    readonly temp_password_flag: FieldRef<"idnbi_User", 'Boolean'>
    readonly created_at: FieldRef<"idnbi_User", 'DateTime'>
    readonly updated_at: FieldRef<"idnbi_User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * idnbi_User findUnique
   */
  export type idnbi_UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_User
     */
    select?: idnbi_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_User
     */
    omit?: idnbi_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_User to fetch.
     */
    where: idnbi_UserWhereUniqueInput
  }

  /**
   * idnbi_User findUniqueOrThrow
   */
  export type idnbi_UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_User
     */
    select?: idnbi_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_User
     */
    omit?: idnbi_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_User to fetch.
     */
    where: idnbi_UserWhereUniqueInput
  }

  /**
   * idnbi_User findFirst
   */
  export type idnbi_UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_User
     */
    select?: idnbi_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_User
     */
    omit?: idnbi_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_User to fetch.
     */
    where?: idnbi_UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_Users to fetch.
     */
    orderBy?: idnbi_UserOrderByWithRelationInput | idnbi_UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idnbi_Users.
     */
    cursor?: idnbi_UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idnbi_Users.
     */
    distinct?: Idnbi_UserScalarFieldEnum | Idnbi_UserScalarFieldEnum[]
  }

  /**
   * idnbi_User findFirstOrThrow
   */
  export type idnbi_UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_User
     */
    select?: idnbi_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_User
     */
    omit?: idnbi_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_User to fetch.
     */
    where?: idnbi_UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_Users to fetch.
     */
    orderBy?: idnbi_UserOrderByWithRelationInput | idnbi_UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idnbi_Users.
     */
    cursor?: idnbi_UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idnbi_Users.
     */
    distinct?: Idnbi_UserScalarFieldEnum | Idnbi_UserScalarFieldEnum[]
  }

  /**
   * idnbi_User findMany
   */
  export type idnbi_UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_User
     */
    select?: idnbi_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_User
     */
    omit?: idnbi_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_Users to fetch.
     */
    where?: idnbi_UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_Users to fetch.
     */
    orderBy?: idnbi_UserOrderByWithRelationInput | idnbi_UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing idnbi_Users.
     */
    cursor?: idnbi_UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_Users.
     */
    skip?: number
    distinct?: Idnbi_UserScalarFieldEnum | Idnbi_UserScalarFieldEnum[]
  }

  /**
   * idnbi_User create
   */
  export type idnbi_UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_User
     */
    select?: idnbi_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_User
     */
    omit?: idnbi_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserInclude<ExtArgs> | null
    /**
     * The data needed to create a idnbi_User.
     */
    data: XOR<idnbi_UserCreateInput, idnbi_UserUncheckedCreateInput>
  }

  /**
   * idnbi_User createMany
   */
  export type idnbi_UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many idnbi_Users.
     */
    data: idnbi_UserCreateManyInput | idnbi_UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * idnbi_User createManyAndReturn
   */
  export type idnbi_UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_User
     */
    select?: idnbi_UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_User
     */
    omit?: idnbi_UserOmit<ExtArgs> | null
    /**
     * The data used to create many idnbi_Users.
     */
    data: idnbi_UserCreateManyInput | idnbi_UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * idnbi_User update
   */
  export type idnbi_UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_User
     */
    select?: idnbi_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_User
     */
    omit?: idnbi_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserInclude<ExtArgs> | null
    /**
     * The data needed to update a idnbi_User.
     */
    data: XOR<idnbi_UserUpdateInput, idnbi_UserUncheckedUpdateInput>
    /**
     * Choose, which idnbi_User to update.
     */
    where: idnbi_UserWhereUniqueInput
  }

  /**
   * idnbi_User updateMany
   */
  export type idnbi_UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update idnbi_Users.
     */
    data: XOR<idnbi_UserUpdateManyMutationInput, idnbi_UserUncheckedUpdateManyInput>
    /**
     * Filter which idnbi_Users to update
     */
    where?: idnbi_UserWhereInput
    /**
     * Limit how many idnbi_Users to update.
     */
    limit?: number
  }

  /**
   * idnbi_User updateManyAndReturn
   */
  export type idnbi_UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_User
     */
    select?: idnbi_UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_User
     */
    omit?: idnbi_UserOmit<ExtArgs> | null
    /**
     * The data used to update idnbi_Users.
     */
    data: XOR<idnbi_UserUpdateManyMutationInput, idnbi_UserUncheckedUpdateManyInput>
    /**
     * Filter which idnbi_Users to update
     */
    where?: idnbi_UserWhereInput
    /**
     * Limit how many idnbi_Users to update.
     */
    limit?: number
  }

  /**
   * idnbi_User upsert
   */
  export type idnbi_UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_User
     */
    select?: idnbi_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_User
     */
    omit?: idnbi_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserInclude<ExtArgs> | null
    /**
     * The filter to search for the idnbi_User to update in case it exists.
     */
    where: idnbi_UserWhereUniqueInput
    /**
     * In case the idnbi_User found by the `where` argument doesn't exist, create a new idnbi_User with this data.
     */
    create: XOR<idnbi_UserCreateInput, idnbi_UserUncheckedCreateInput>
    /**
     * In case the idnbi_User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<idnbi_UserUpdateInput, idnbi_UserUncheckedUpdateInput>
  }

  /**
   * idnbi_User delete
   */
  export type idnbi_UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_User
     */
    select?: idnbi_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_User
     */
    omit?: idnbi_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserInclude<ExtArgs> | null
    /**
     * Filter which idnbi_User to delete.
     */
    where: idnbi_UserWhereUniqueInput
  }

  /**
   * idnbi_User deleteMany
   */
  export type idnbi_UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idnbi_Users to delete
     */
    where?: idnbi_UserWhereInput
    /**
     * Limit how many idnbi_Users to delete.
     */
    limit?: number
  }

  /**
   * idnbi_User.roles
   */
  export type idnbi_User$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_UserRole
     */
    select?: idnbi_UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_UserRole
     */
    omit?: idnbi_UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserRoleInclude<ExtArgs> | null
    where?: idnbi_UserRoleWhereInput
    orderBy?: idnbi_UserRoleOrderByWithRelationInput | idnbi_UserRoleOrderByWithRelationInput[]
    cursor?: idnbi_UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Idnbi_UserRoleScalarFieldEnum | Idnbi_UserRoleScalarFieldEnum[]
  }

  /**
   * idnbi_User.created_content
   */
  export type idnbi_User$created_contentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Content
     */
    select?: idnbi_ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Content
     */
    omit?: idnbi_ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_ContentInclude<ExtArgs> | null
    where?: idnbi_ContentWhereInput
    orderBy?: idnbi_ContentOrderByWithRelationInput | idnbi_ContentOrderByWithRelationInput[]
    cursor?: idnbi_ContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Idnbi_ContentScalarFieldEnum | Idnbi_ContentScalarFieldEnum[]
  }

  /**
   * idnbi_User.notifications
   */
  export type idnbi_User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_UserNotificationStatus
     */
    select?: idnbi_UserNotificationStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_UserNotificationStatus
     */
    omit?: idnbi_UserNotificationStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserNotificationStatusInclude<ExtArgs> | null
    where?: idnbi_UserNotificationStatusWhereInput
    orderBy?: idnbi_UserNotificationStatusOrderByWithRelationInput | idnbi_UserNotificationStatusOrderByWithRelationInput[]
    cursor?: idnbi_UserNotificationStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Idnbi_UserNotificationStatusScalarFieldEnum | Idnbi_UserNotificationStatusScalarFieldEnum[]
  }

  /**
   * idnbi_User.password_reset
   */
  export type idnbi_User$password_resetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_PasswordResetToken
     */
    select?: idnbi_PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_PasswordResetToken
     */
    omit?: idnbi_PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_PasswordResetTokenInclude<ExtArgs> | null
    where?: idnbi_PasswordResetTokenWhereInput
    orderBy?: idnbi_PasswordResetTokenOrderByWithRelationInput | idnbi_PasswordResetTokenOrderByWithRelationInput[]
    cursor?: idnbi_PasswordResetTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Idnbi_PasswordResetTokenScalarFieldEnum | Idnbi_PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * idnbi_User.audit_logs
   */
  export type idnbi_User$audit_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_AuditLog
     */
    select?: idnbi_AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_AuditLog
     */
    omit?: idnbi_AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_AuditLogInclude<ExtArgs> | null
    where?: idnbi_AuditLogWhereInput
    orderBy?: idnbi_AuditLogOrderByWithRelationInput | idnbi_AuditLogOrderByWithRelationInput[]
    cursor?: idnbi_AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Idnbi_AuditLogScalarFieldEnum | Idnbi_AuditLogScalarFieldEnum[]
  }

  /**
   * idnbi_User without action
   */
  export type idnbi_UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_User
     */
    select?: idnbi_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_User
     */
    omit?: idnbi_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserInclude<ExtArgs> | null
  }


  /**
   * Model idnbi_Role
   */

  export type AggregateIdnbi_Role = {
    _count: Idnbi_RoleCountAggregateOutputType | null
    _min: Idnbi_RoleMinAggregateOutputType | null
    _max: Idnbi_RoleMaxAggregateOutputType | null
  }

  export type Idnbi_RoleMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Idnbi_RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Idnbi_RoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Idnbi_RoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type Idnbi_RoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type Idnbi_RoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Idnbi_RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idnbi_Role to aggregate.
     */
    where?: idnbi_RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_Roles to fetch.
     */
    orderBy?: idnbi_RoleOrderByWithRelationInput | idnbi_RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: idnbi_RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned idnbi_Roles
    **/
    _count?: true | Idnbi_RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Idnbi_RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Idnbi_RoleMaxAggregateInputType
  }

  export type GetIdnbi_RoleAggregateType<T extends Idnbi_RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateIdnbi_Role]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdnbi_Role[P]>
      : GetScalarType<T[P], AggregateIdnbi_Role[P]>
  }




  export type idnbi_RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: idnbi_RoleWhereInput
    orderBy?: idnbi_RoleOrderByWithAggregationInput | idnbi_RoleOrderByWithAggregationInput[]
    by: Idnbi_RoleScalarFieldEnum[] | Idnbi_RoleScalarFieldEnum
    having?: idnbi_RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Idnbi_RoleCountAggregateInputType | true
    _min?: Idnbi_RoleMinAggregateInputType
    _max?: Idnbi_RoleMaxAggregateInputType
  }

  export type Idnbi_RoleGroupByOutputType = {
    id: string
    name: string
    description: string | null
    created_at: Date
    updated_at: Date
    _count: Idnbi_RoleCountAggregateOutputType | null
    _min: Idnbi_RoleMinAggregateOutputType | null
    _max: Idnbi_RoleMaxAggregateOutputType | null
  }

  type GetIdnbi_RoleGroupByPayload<T extends idnbi_RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Idnbi_RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Idnbi_RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Idnbi_RoleGroupByOutputType[P]>
            : GetScalarType<T[P], Idnbi_RoleGroupByOutputType[P]>
        }
      >
    >


  export type idnbi_RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | idnbi_Role$usersArgs<ExtArgs>
    permissions?: boolean | idnbi_Role$permissionsArgs<ExtArgs>
    menus?: boolean | idnbi_Role$menusArgs<ExtArgs>
    _count?: boolean | Idnbi_RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idnbi_Role"]>

  export type idnbi_RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["idnbi_Role"]>

  export type idnbi_RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["idnbi_Role"]>

  export type idnbi_RoleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type idnbi_RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "created_at" | "updated_at", ExtArgs["result"]["idnbi_Role"]>
  export type idnbi_RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | idnbi_Role$usersArgs<ExtArgs>
    permissions?: boolean | idnbi_Role$permissionsArgs<ExtArgs>
    menus?: boolean | idnbi_Role$menusArgs<ExtArgs>
    _count?: boolean | Idnbi_RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type idnbi_RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type idnbi_RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $idnbi_RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "idnbi_Role"
    objects: {
      users: Prisma.$idnbi_UserRolePayload<ExtArgs>[]
      permissions: Prisma.$idnbi_RolePermissionPayload<ExtArgs>[]
      menus: Prisma.$idnbi_MenuRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["idnbi_Role"]>
    composites: {}
  }

  type idnbi_RoleGetPayload<S extends boolean | null | undefined | idnbi_RoleDefaultArgs> = $Result.GetResult<Prisma.$idnbi_RolePayload, S>

  type idnbi_RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<idnbi_RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Idnbi_RoleCountAggregateInputType | true
    }

  export interface idnbi_RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['idnbi_Role'], meta: { name: 'idnbi_Role' } }
    /**
     * Find zero or one Idnbi_Role that matches the filter.
     * @param {idnbi_RoleFindUniqueArgs} args - Arguments to find a Idnbi_Role
     * @example
     * // Get one Idnbi_Role
     * const idnbi_Role = await prisma.idnbi_Role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends idnbi_RoleFindUniqueArgs>(args: SelectSubset<T, idnbi_RoleFindUniqueArgs<ExtArgs>>): Prisma__idnbi_RoleClient<$Result.GetResult<Prisma.$idnbi_RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Idnbi_Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {idnbi_RoleFindUniqueOrThrowArgs} args - Arguments to find a Idnbi_Role
     * @example
     * // Get one Idnbi_Role
     * const idnbi_Role = await prisma.idnbi_Role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends idnbi_RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, idnbi_RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__idnbi_RoleClient<$Result.GetResult<Prisma.$idnbi_RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idnbi_Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_RoleFindFirstArgs} args - Arguments to find a Idnbi_Role
     * @example
     * // Get one Idnbi_Role
     * const idnbi_Role = await prisma.idnbi_Role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends idnbi_RoleFindFirstArgs>(args?: SelectSubset<T, idnbi_RoleFindFirstArgs<ExtArgs>>): Prisma__idnbi_RoleClient<$Result.GetResult<Prisma.$idnbi_RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idnbi_Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_RoleFindFirstOrThrowArgs} args - Arguments to find a Idnbi_Role
     * @example
     * // Get one Idnbi_Role
     * const idnbi_Role = await prisma.idnbi_Role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends idnbi_RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, idnbi_RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__idnbi_RoleClient<$Result.GetResult<Prisma.$idnbi_RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Idnbi_Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Idnbi_Roles
     * const idnbi_Roles = await prisma.idnbi_Role.findMany()
     * 
     * // Get first 10 Idnbi_Roles
     * const idnbi_Roles = await prisma.idnbi_Role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const idnbi_RoleWithIdOnly = await prisma.idnbi_Role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends idnbi_RoleFindManyArgs>(args?: SelectSubset<T, idnbi_RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Idnbi_Role.
     * @param {idnbi_RoleCreateArgs} args - Arguments to create a Idnbi_Role.
     * @example
     * // Create one Idnbi_Role
     * const Idnbi_Role = await prisma.idnbi_Role.create({
     *   data: {
     *     // ... data to create a Idnbi_Role
     *   }
     * })
     * 
     */
    create<T extends idnbi_RoleCreateArgs>(args: SelectSubset<T, idnbi_RoleCreateArgs<ExtArgs>>): Prisma__idnbi_RoleClient<$Result.GetResult<Prisma.$idnbi_RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Idnbi_Roles.
     * @param {idnbi_RoleCreateManyArgs} args - Arguments to create many Idnbi_Roles.
     * @example
     * // Create many Idnbi_Roles
     * const idnbi_Role = await prisma.idnbi_Role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends idnbi_RoleCreateManyArgs>(args?: SelectSubset<T, idnbi_RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Idnbi_Roles and returns the data saved in the database.
     * @param {idnbi_RoleCreateManyAndReturnArgs} args - Arguments to create many Idnbi_Roles.
     * @example
     * // Create many Idnbi_Roles
     * const idnbi_Role = await prisma.idnbi_Role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Idnbi_Roles and only return the `id`
     * const idnbi_RoleWithIdOnly = await prisma.idnbi_Role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends idnbi_RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, idnbi_RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Idnbi_Role.
     * @param {idnbi_RoleDeleteArgs} args - Arguments to delete one Idnbi_Role.
     * @example
     * // Delete one Idnbi_Role
     * const Idnbi_Role = await prisma.idnbi_Role.delete({
     *   where: {
     *     // ... filter to delete one Idnbi_Role
     *   }
     * })
     * 
     */
    delete<T extends idnbi_RoleDeleteArgs>(args: SelectSubset<T, idnbi_RoleDeleteArgs<ExtArgs>>): Prisma__idnbi_RoleClient<$Result.GetResult<Prisma.$idnbi_RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Idnbi_Role.
     * @param {idnbi_RoleUpdateArgs} args - Arguments to update one Idnbi_Role.
     * @example
     * // Update one Idnbi_Role
     * const idnbi_Role = await prisma.idnbi_Role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends idnbi_RoleUpdateArgs>(args: SelectSubset<T, idnbi_RoleUpdateArgs<ExtArgs>>): Prisma__idnbi_RoleClient<$Result.GetResult<Prisma.$idnbi_RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Idnbi_Roles.
     * @param {idnbi_RoleDeleteManyArgs} args - Arguments to filter Idnbi_Roles to delete.
     * @example
     * // Delete a few Idnbi_Roles
     * const { count } = await prisma.idnbi_Role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends idnbi_RoleDeleteManyArgs>(args?: SelectSubset<T, idnbi_RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idnbi_Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Idnbi_Roles
     * const idnbi_Role = await prisma.idnbi_Role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends idnbi_RoleUpdateManyArgs>(args: SelectSubset<T, idnbi_RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idnbi_Roles and returns the data updated in the database.
     * @param {idnbi_RoleUpdateManyAndReturnArgs} args - Arguments to update many Idnbi_Roles.
     * @example
     * // Update many Idnbi_Roles
     * const idnbi_Role = await prisma.idnbi_Role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Idnbi_Roles and only return the `id`
     * const idnbi_RoleWithIdOnly = await prisma.idnbi_Role.updateManyAndReturn({
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
    updateManyAndReturn<T extends idnbi_RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, idnbi_RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Idnbi_Role.
     * @param {idnbi_RoleUpsertArgs} args - Arguments to update or create a Idnbi_Role.
     * @example
     * // Update or create a Idnbi_Role
     * const idnbi_Role = await prisma.idnbi_Role.upsert({
     *   create: {
     *     // ... data to create a Idnbi_Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Idnbi_Role we want to update
     *   }
     * })
     */
    upsert<T extends idnbi_RoleUpsertArgs>(args: SelectSubset<T, idnbi_RoleUpsertArgs<ExtArgs>>): Prisma__idnbi_RoleClient<$Result.GetResult<Prisma.$idnbi_RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Idnbi_Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_RoleCountArgs} args - Arguments to filter Idnbi_Roles to count.
     * @example
     * // Count the number of Idnbi_Roles
     * const count = await prisma.idnbi_Role.count({
     *   where: {
     *     // ... the filter for the Idnbi_Roles we want to count
     *   }
     * })
    **/
    count<T extends idnbi_RoleCountArgs>(
      args?: Subset<T, idnbi_RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Idnbi_RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Idnbi_Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Idnbi_RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Idnbi_RoleAggregateArgs>(args: Subset<T, Idnbi_RoleAggregateArgs>): Prisma.PrismaPromise<GetIdnbi_RoleAggregateType<T>>

    /**
     * Group by Idnbi_Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_RoleGroupByArgs} args - Group by arguments.
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
      T extends idnbi_RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: idnbi_RoleGroupByArgs['orderBy'] }
        : { orderBy?: idnbi_RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, idnbi_RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdnbi_RoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the idnbi_Role model
   */
  readonly fields: idnbi_RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for idnbi_Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__idnbi_RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends idnbi_Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, idnbi_Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    permissions<T extends idnbi_Role$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, idnbi_Role$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    menus<T extends idnbi_Role$menusArgs<ExtArgs> = {}>(args?: Subset<T, idnbi_Role$menusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_MenuRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the idnbi_Role model
   */
  interface idnbi_RoleFieldRefs {
    readonly id: FieldRef<"idnbi_Role", 'String'>
    readonly name: FieldRef<"idnbi_Role", 'String'>
    readonly description: FieldRef<"idnbi_Role", 'String'>
    readonly created_at: FieldRef<"idnbi_Role", 'DateTime'>
    readonly updated_at: FieldRef<"idnbi_Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * idnbi_Role findUnique
   */
  export type idnbi_RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Role
     */
    select?: idnbi_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Role
     */
    omit?: idnbi_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_RoleInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_Role to fetch.
     */
    where: idnbi_RoleWhereUniqueInput
  }

  /**
   * idnbi_Role findUniqueOrThrow
   */
  export type idnbi_RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Role
     */
    select?: idnbi_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Role
     */
    omit?: idnbi_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_RoleInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_Role to fetch.
     */
    where: idnbi_RoleWhereUniqueInput
  }

  /**
   * idnbi_Role findFirst
   */
  export type idnbi_RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Role
     */
    select?: idnbi_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Role
     */
    omit?: idnbi_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_RoleInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_Role to fetch.
     */
    where?: idnbi_RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_Roles to fetch.
     */
    orderBy?: idnbi_RoleOrderByWithRelationInput | idnbi_RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idnbi_Roles.
     */
    cursor?: idnbi_RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idnbi_Roles.
     */
    distinct?: Idnbi_RoleScalarFieldEnum | Idnbi_RoleScalarFieldEnum[]
  }

  /**
   * idnbi_Role findFirstOrThrow
   */
  export type idnbi_RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Role
     */
    select?: idnbi_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Role
     */
    omit?: idnbi_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_RoleInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_Role to fetch.
     */
    where?: idnbi_RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_Roles to fetch.
     */
    orderBy?: idnbi_RoleOrderByWithRelationInput | idnbi_RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idnbi_Roles.
     */
    cursor?: idnbi_RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idnbi_Roles.
     */
    distinct?: Idnbi_RoleScalarFieldEnum | Idnbi_RoleScalarFieldEnum[]
  }

  /**
   * idnbi_Role findMany
   */
  export type idnbi_RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Role
     */
    select?: idnbi_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Role
     */
    omit?: idnbi_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_RoleInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_Roles to fetch.
     */
    where?: idnbi_RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_Roles to fetch.
     */
    orderBy?: idnbi_RoleOrderByWithRelationInput | idnbi_RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing idnbi_Roles.
     */
    cursor?: idnbi_RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_Roles.
     */
    skip?: number
    distinct?: Idnbi_RoleScalarFieldEnum | Idnbi_RoleScalarFieldEnum[]
  }

  /**
   * idnbi_Role create
   */
  export type idnbi_RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Role
     */
    select?: idnbi_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Role
     */
    omit?: idnbi_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a idnbi_Role.
     */
    data: XOR<idnbi_RoleCreateInput, idnbi_RoleUncheckedCreateInput>
  }

  /**
   * idnbi_Role createMany
   */
  export type idnbi_RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many idnbi_Roles.
     */
    data: idnbi_RoleCreateManyInput | idnbi_RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * idnbi_Role createManyAndReturn
   */
  export type idnbi_RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Role
     */
    select?: idnbi_RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Role
     */
    omit?: idnbi_RoleOmit<ExtArgs> | null
    /**
     * The data used to create many idnbi_Roles.
     */
    data: idnbi_RoleCreateManyInput | idnbi_RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * idnbi_Role update
   */
  export type idnbi_RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Role
     */
    select?: idnbi_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Role
     */
    omit?: idnbi_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a idnbi_Role.
     */
    data: XOR<idnbi_RoleUpdateInput, idnbi_RoleUncheckedUpdateInput>
    /**
     * Choose, which idnbi_Role to update.
     */
    where: idnbi_RoleWhereUniqueInput
  }

  /**
   * idnbi_Role updateMany
   */
  export type idnbi_RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update idnbi_Roles.
     */
    data: XOR<idnbi_RoleUpdateManyMutationInput, idnbi_RoleUncheckedUpdateManyInput>
    /**
     * Filter which idnbi_Roles to update
     */
    where?: idnbi_RoleWhereInput
    /**
     * Limit how many idnbi_Roles to update.
     */
    limit?: number
  }

  /**
   * idnbi_Role updateManyAndReturn
   */
  export type idnbi_RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Role
     */
    select?: idnbi_RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Role
     */
    omit?: idnbi_RoleOmit<ExtArgs> | null
    /**
     * The data used to update idnbi_Roles.
     */
    data: XOR<idnbi_RoleUpdateManyMutationInput, idnbi_RoleUncheckedUpdateManyInput>
    /**
     * Filter which idnbi_Roles to update
     */
    where?: idnbi_RoleWhereInput
    /**
     * Limit how many idnbi_Roles to update.
     */
    limit?: number
  }

  /**
   * idnbi_Role upsert
   */
  export type idnbi_RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Role
     */
    select?: idnbi_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Role
     */
    omit?: idnbi_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the idnbi_Role to update in case it exists.
     */
    where: idnbi_RoleWhereUniqueInput
    /**
     * In case the idnbi_Role found by the `where` argument doesn't exist, create a new idnbi_Role with this data.
     */
    create: XOR<idnbi_RoleCreateInput, idnbi_RoleUncheckedCreateInput>
    /**
     * In case the idnbi_Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<idnbi_RoleUpdateInput, idnbi_RoleUncheckedUpdateInput>
  }

  /**
   * idnbi_Role delete
   */
  export type idnbi_RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Role
     */
    select?: idnbi_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Role
     */
    omit?: idnbi_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_RoleInclude<ExtArgs> | null
    /**
     * Filter which idnbi_Role to delete.
     */
    where: idnbi_RoleWhereUniqueInput
  }

  /**
   * idnbi_Role deleteMany
   */
  export type idnbi_RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idnbi_Roles to delete
     */
    where?: idnbi_RoleWhereInput
    /**
     * Limit how many idnbi_Roles to delete.
     */
    limit?: number
  }

  /**
   * idnbi_Role.users
   */
  export type idnbi_Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_UserRole
     */
    select?: idnbi_UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_UserRole
     */
    omit?: idnbi_UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserRoleInclude<ExtArgs> | null
    where?: idnbi_UserRoleWhereInput
    orderBy?: idnbi_UserRoleOrderByWithRelationInput | idnbi_UserRoleOrderByWithRelationInput[]
    cursor?: idnbi_UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Idnbi_UserRoleScalarFieldEnum | Idnbi_UserRoleScalarFieldEnum[]
  }

  /**
   * idnbi_Role.permissions
   */
  export type idnbi_Role$permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_RolePermission
     */
    select?: idnbi_RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_RolePermission
     */
    omit?: idnbi_RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_RolePermissionInclude<ExtArgs> | null
    where?: idnbi_RolePermissionWhereInput
    orderBy?: idnbi_RolePermissionOrderByWithRelationInput | idnbi_RolePermissionOrderByWithRelationInput[]
    cursor?: idnbi_RolePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Idnbi_RolePermissionScalarFieldEnum | Idnbi_RolePermissionScalarFieldEnum[]
  }

  /**
   * idnbi_Role.menus
   */
  export type idnbi_Role$menusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_MenuRole
     */
    select?: idnbi_MenuRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_MenuRole
     */
    omit?: idnbi_MenuRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_MenuRoleInclude<ExtArgs> | null
    where?: idnbi_MenuRoleWhereInput
    orderBy?: idnbi_MenuRoleOrderByWithRelationInput | idnbi_MenuRoleOrderByWithRelationInput[]
    cursor?: idnbi_MenuRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Idnbi_MenuRoleScalarFieldEnum | Idnbi_MenuRoleScalarFieldEnum[]
  }

  /**
   * idnbi_Role without action
   */
  export type idnbi_RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Role
     */
    select?: idnbi_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Role
     */
    omit?: idnbi_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_RoleInclude<ExtArgs> | null
  }


  /**
   * Model idnbi_UserRole
   */

  export type AggregateIdnbi_UserRole = {
    _count: Idnbi_UserRoleCountAggregateOutputType | null
    _min: Idnbi_UserRoleMinAggregateOutputType | null
    _max: Idnbi_UserRoleMaxAggregateOutputType | null
  }

  export type Idnbi_UserRoleMinAggregateOutputType = {
    userId: string | null
    roleId: string | null
    created_at: Date | null
  }

  export type Idnbi_UserRoleMaxAggregateOutputType = {
    userId: string | null
    roleId: string | null
    created_at: Date | null
  }

  export type Idnbi_UserRoleCountAggregateOutputType = {
    userId: number
    roleId: number
    created_at: number
    _all: number
  }


  export type Idnbi_UserRoleMinAggregateInputType = {
    userId?: true
    roleId?: true
    created_at?: true
  }

  export type Idnbi_UserRoleMaxAggregateInputType = {
    userId?: true
    roleId?: true
    created_at?: true
  }

  export type Idnbi_UserRoleCountAggregateInputType = {
    userId?: true
    roleId?: true
    created_at?: true
    _all?: true
  }

  export type Idnbi_UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idnbi_UserRole to aggregate.
     */
    where?: idnbi_UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_UserRoles to fetch.
     */
    orderBy?: idnbi_UserRoleOrderByWithRelationInput | idnbi_UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: idnbi_UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned idnbi_UserRoles
    **/
    _count?: true | Idnbi_UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Idnbi_UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Idnbi_UserRoleMaxAggregateInputType
  }

  export type GetIdnbi_UserRoleAggregateType<T extends Idnbi_UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateIdnbi_UserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdnbi_UserRole[P]>
      : GetScalarType<T[P], AggregateIdnbi_UserRole[P]>
  }




  export type idnbi_UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: idnbi_UserRoleWhereInput
    orderBy?: idnbi_UserRoleOrderByWithAggregationInput | idnbi_UserRoleOrderByWithAggregationInput[]
    by: Idnbi_UserRoleScalarFieldEnum[] | Idnbi_UserRoleScalarFieldEnum
    having?: idnbi_UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Idnbi_UserRoleCountAggregateInputType | true
    _min?: Idnbi_UserRoleMinAggregateInputType
    _max?: Idnbi_UserRoleMaxAggregateInputType
  }

  export type Idnbi_UserRoleGroupByOutputType = {
    userId: string
    roleId: string
    created_at: Date
    _count: Idnbi_UserRoleCountAggregateOutputType | null
    _min: Idnbi_UserRoleMinAggregateOutputType | null
    _max: Idnbi_UserRoleMaxAggregateOutputType | null
  }

  type GetIdnbi_UserRoleGroupByPayload<T extends idnbi_UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Idnbi_UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Idnbi_UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Idnbi_UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], Idnbi_UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type idnbi_UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    created_at?: boolean
    user?: boolean | idnbi_UserDefaultArgs<ExtArgs>
    role?: boolean | idnbi_RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idnbi_UserRole"]>

  export type idnbi_UserRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    created_at?: boolean
    user?: boolean | idnbi_UserDefaultArgs<ExtArgs>
    role?: boolean | idnbi_RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idnbi_UserRole"]>

  export type idnbi_UserRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    created_at?: boolean
    user?: boolean | idnbi_UserDefaultArgs<ExtArgs>
    role?: boolean | idnbi_RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idnbi_UserRole"]>

  export type idnbi_UserRoleSelectScalar = {
    userId?: boolean
    roleId?: boolean
    created_at?: boolean
  }

  export type idnbi_UserRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "roleId" | "created_at", ExtArgs["result"]["idnbi_UserRole"]>
  export type idnbi_UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | idnbi_UserDefaultArgs<ExtArgs>
    role?: boolean | idnbi_RoleDefaultArgs<ExtArgs>
  }
  export type idnbi_UserRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | idnbi_UserDefaultArgs<ExtArgs>
    role?: boolean | idnbi_RoleDefaultArgs<ExtArgs>
  }
  export type idnbi_UserRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | idnbi_UserDefaultArgs<ExtArgs>
    role?: boolean | idnbi_RoleDefaultArgs<ExtArgs>
  }

  export type $idnbi_UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "idnbi_UserRole"
    objects: {
      user: Prisma.$idnbi_UserPayload<ExtArgs>
      role: Prisma.$idnbi_RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      roleId: string
      created_at: Date
    }, ExtArgs["result"]["idnbi_UserRole"]>
    composites: {}
  }

  type idnbi_UserRoleGetPayload<S extends boolean | null | undefined | idnbi_UserRoleDefaultArgs> = $Result.GetResult<Prisma.$idnbi_UserRolePayload, S>

  type idnbi_UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<idnbi_UserRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Idnbi_UserRoleCountAggregateInputType | true
    }

  export interface idnbi_UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['idnbi_UserRole'], meta: { name: 'idnbi_UserRole' } }
    /**
     * Find zero or one Idnbi_UserRole that matches the filter.
     * @param {idnbi_UserRoleFindUniqueArgs} args - Arguments to find a Idnbi_UserRole
     * @example
     * // Get one Idnbi_UserRole
     * const idnbi_UserRole = await prisma.idnbi_UserRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends idnbi_UserRoleFindUniqueArgs>(args: SelectSubset<T, idnbi_UserRoleFindUniqueArgs<ExtArgs>>): Prisma__idnbi_UserRoleClient<$Result.GetResult<Prisma.$idnbi_UserRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Idnbi_UserRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {idnbi_UserRoleFindUniqueOrThrowArgs} args - Arguments to find a Idnbi_UserRole
     * @example
     * // Get one Idnbi_UserRole
     * const idnbi_UserRole = await prisma.idnbi_UserRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends idnbi_UserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, idnbi_UserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__idnbi_UserRoleClient<$Result.GetResult<Prisma.$idnbi_UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idnbi_UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_UserRoleFindFirstArgs} args - Arguments to find a Idnbi_UserRole
     * @example
     * // Get one Idnbi_UserRole
     * const idnbi_UserRole = await prisma.idnbi_UserRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends idnbi_UserRoleFindFirstArgs>(args?: SelectSubset<T, idnbi_UserRoleFindFirstArgs<ExtArgs>>): Prisma__idnbi_UserRoleClient<$Result.GetResult<Prisma.$idnbi_UserRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idnbi_UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_UserRoleFindFirstOrThrowArgs} args - Arguments to find a Idnbi_UserRole
     * @example
     * // Get one Idnbi_UserRole
     * const idnbi_UserRole = await prisma.idnbi_UserRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends idnbi_UserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, idnbi_UserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__idnbi_UserRoleClient<$Result.GetResult<Prisma.$idnbi_UserRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Idnbi_UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_UserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Idnbi_UserRoles
     * const idnbi_UserRoles = await prisma.idnbi_UserRole.findMany()
     * 
     * // Get first 10 Idnbi_UserRoles
     * const idnbi_UserRoles = await prisma.idnbi_UserRole.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const idnbi_UserRoleWithUserIdOnly = await prisma.idnbi_UserRole.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends idnbi_UserRoleFindManyArgs>(args?: SelectSubset<T, idnbi_UserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Idnbi_UserRole.
     * @param {idnbi_UserRoleCreateArgs} args - Arguments to create a Idnbi_UserRole.
     * @example
     * // Create one Idnbi_UserRole
     * const Idnbi_UserRole = await prisma.idnbi_UserRole.create({
     *   data: {
     *     // ... data to create a Idnbi_UserRole
     *   }
     * })
     * 
     */
    create<T extends idnbi_UserRoleCreateArgs>(args: SelectSubset<T, idnbi_UserRoleCreateArgs<ExtArgs>>): Prisma__idnbi_UserRoleClient<$Result.GetResult<Prisma.$idnbi_UserRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Idnbi_UserRoles.
     * @param {idnbi_UserRoleCreateManyArgs} args - Arguments to create many Idnbi_UserRoles.
     * @example
     * // Create many Idnbi_UserRoles
     * const idnbi_UserRole = await prisma.idnbi_UserRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends idnbi_UserRoleCreateManyArgs>(args?: SelectSubset<T, idnbi_UserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Idnbi_UserRoles and returns the data saved in the database.
     * @param {idnbi_UserRoleCreateManyAndReturnArgs} args - Arguments to create many Idnbi_UserRoles.
     * @example
     * // Create many Idnbi_UserRoles
     * const idnbi_UserRole = await prisma.idnbi_UserRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Idnbi_UserRoles and only return the `userId`
     * const idnbi_UserRoleWithUserIdOnly = await prisma.idnbi_UserRole.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends idnbi_UserRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, idnbi_UserRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_UserRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Idnbi_UserRole.
     * @param {idnbi_UserRoleDeleteArgs} args - Arguments to delete one Idnbi_UserRole.
     * @example
     * // Delete one Idnbi_UserRole
     * const Idnbi_UserRole = await prisma.idnbi_UserRole.delete({
     *   where: {
     *     // ... filter to delete one Idnbi_UserRole
     *   }
     * })
     * 
     */
    delete<T extends idnbi_UserRoleDeleteArgs>(args: SelectSubset<T, idnbi_UserRoleDeleteArgs<ExtArgs>>): Prisma__idnbi_UserRoleClient<$Result.GetResult<Prisma.$idnbi_UserRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Idnbi_UserRole.
     * @param {idnbi_UserRoleUpdateArgs} args - Arguments to update one Idnbi_UserRole.
     * @example
     * // Update one Idnbi_UserRole
     * const idnbi_UserRole = await prisma.idnbi_UserRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends idnbi_UserRoleUpdateArgs>(args: SelectSubset<T, idnbi_UserRoleUpdateArgs<ExtArgs>>): Prisma__idnbi_UserRoleClient<$Result.GetResult<Prisma.$idnbi_UserRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Idnbi_UserRoles.
     * @param {idnbi_UserRoleDeleteManyArgs} args - Arguments to filter Idnbi_UserRoles to delete.
     * @example
     * // Delete a few Idnbi_UserRoles
     * const { count } = await prisma.idnbi_UserRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends idnbi_UserRoleDeleteManyArgs>(args?: SelectSubset<T, idnbi_UserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idnbi_UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Idnbi_UserRoles
     * const idnbi_UserRole = await prisma.idnbi_UserRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends idnbi_UserRoleUpdateManyArgs>(args: SelectSubset<T, idnbi_UserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idnbi_UserRoles and returns the data updated in the database.
     * @param {idnbi_UserRoleUpdateManyAndReturnArgs} args - Arguments to update many Idnbi_UserRoles.
     * @example
     * // Update many Idnbi_UserRoles
     * const idnbi_UserRole = await prisma.idnbi_UserRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Idnbi_UserRoles and only return the `userId`
     * const idnbi_UserRoleWithUserIdOnly = await prisma.idnbi_UserRole.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends idnbi_UserRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, idnbi_UserRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_UserRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Idnbi_UserRole.
     * @param {idnbi_UserRoleUpsertArgs} args - Arguments to update or create a Idnbi_UserRole.
     * @example
     * // Update or create a Idnbi_UserRole
     * const idnbi_UserRole = await prisma.idnbi_UserRole.upsert({
     *   create: {
     *     // ... data to create a Idnbi_UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Idnbi_UserRole we want to update
     *   }
     * })
     */
    upsert<T extends idnbi_UserRoleUpsertArgs>(args: SelectSubset<T, idnbi_UserRoleUpsertArgs<ExtArgs>>): Prisma__idnbi_UserRoleClient<$Result.GetResult<Prisma.$idnbi_UserRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Idnbi_UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_UserRoleCountArgs} args - Arguments to filter Idnbi_UserRoles to count.
     * @example
     * // Count the number of Idnbi_UserRoles
     * const count = await prisma.idnbi_UserRole.count({
     *   where: {
     *     // ... the filter for the Idnbi_UserRoles we want to count
     *   }
     * })
    **/
    count<T extends idnbi_UserRoleCountArgs>(
      args?: Subset<T, idnbi_UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Idnbi_UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Idnbi_UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Idnbi_UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Idnbi_UserRoleAggregateArgs>(args: Subset<T, Idnbi_UserRoleAggregateArgs>): Prisma.PrismaPromise<GetIdnbi_UserRoleAggregateType<T>>

    /**
     * Group by Idnbi_UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_UserRoleGroupByArgs} args - Group by arguments.
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
      T extends idnbi_UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: idnbi_UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: idnbi_UserRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, idnbi_UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdnbi_UserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the idnbi_UserRole model
   */
  readonly fields: idnbi_UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for idnbi_UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__idnbi_UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends idnbi_UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, idnbi_UserDefaultArgs<ExtArgs>>): Prisma__idnbi_UserClient<$Result.GetResult<Prisma.$idnbi_UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends idnbi_RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, idnbi_RoleDefaultArgs<ExtArgs>>): Prisma__idnbi_RoleClient<$Result.GetResult<Prisma.$idnbi_RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the idnbi_UserRole model
   */
  interface idnbi_UserRoleFieldRefs {
    readonly userId: FieldRef<"idnbi_UserRole", 'String'>
    readonly roleId: FieldRef<"idnbi_UserRole", 'String'>
    readonly created_at: FieldRef<"idnbi_UserRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * idnbi_UserRole findUnique
   */
  export type idnbi_UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_UserRole
     */
    select?: idnbi_UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_UserRole
     */
    omit?: idnbi_UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_UserRole to fetch.
     */
    where: idnbi_UserRoleWhereUniqueInput
  }

  /**
   * idnbi_UserRole findUniqueOrThrow
   */
  export type idnbi_UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_UserRole
     */
    select?: idnbi_UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_UserRole
     */
    omit?: idnbi_UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_UserRole to fetch.
     */
    where: idnbi_UserRoleWhereUniqueInput
  }

  /**
   * idnbi_UserRole findFirst
   */
  export type idnbi_UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_UserRole
     */
    select?: idnbi_UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_UserRole
     */
    omit?: idnbi_UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_UserRole to fetch.
     */
    where?: idnbi_UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_UserRoles to fetch.
     */
    orderBy?: idnbi_UserRoleOrderByWithRelationInput | idnbi_UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idnbi_UserRoles.
     */
    cursor?: idnbi_UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idnbi_UserRoles.
     */
    distinct?: Idnbi_UserRoleScalarFieldEnum | Idnbi_UserRoleScalarFieldEnum[]
  }

  /**
   * idnbi_UserRole findFirstOrThrow
   */
  export type idnbi_UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_UserRole
     */
    select?: idnbi_UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_UserRole
     */
    omit?: idnbi_UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_UserRole to fetch.
     */
    where?: idnbi_UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_UserRoles to fetch.
     */
    orderBy?: idnbi_UserRoleOrderByWithRelationInput | idnbi_UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idnbi_UserRoles.
     */
    cursor?: idnbi_UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idnbi_UserRoles.
     */
    distinct?: Idnbi_UserRoleScalarFieldEnum | Idnbi_UserRoleScalarFieldEnum[]
  }

  /**
   * idnbi_UserRole findMany
   */
  export type idnbi_UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_UserRole
     */
    select?: idnbi_UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_UserRole
     */
    omit?: idnbi_UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_UserRoles to fetch.
     */
    where?: idnbi_UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_UserRoles to fetch.
     */
    orderBy?: idnbi_UserRoleOrderByWithRelationInput | idnbi_UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing idnbi_UserRoles.
     */
    cursor?: idnbi_UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_UserRoles.
     */
    skip?: number
    distinct?: Idnbi_UserRoleScalarFieldEnum | Idnbi_UserRoleScalarFieldEnum[]
  }

  /**
   * idnbi_UserRole create
   */
  export type idnbi_UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_UserRole
     */
    select?: idnbi_UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_UserRole
     */
    omit?: idnbi_UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a idnbi_UserRole.
     */
    data: XOR<idnbi_UserRoleCreateInput, idnbi_UserRoleUncheckedCreateInput>
  }

  /**
   * idnbi_UserRole createMany
   */
  export type idnbi_UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many idnbi_UserRoles.
     */
    data: idnbi_UserRoleCreateManyInput | idnbi_UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * idnbi_UserRole createManyAndReturn
   */
  export type idnbi_UserRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_UserRole
     */
    select?: idnbi_UserRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_UserRole
     */
    omit?: idnbi_UserRoleOmit<ExtArgs> | null
    /**
     * The data used to create many idnbi_UserRoles.
     */
    data: idnbi_UserRoleCreateManyInput | idnbi_UserRoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * idnbi_UserRole update
   */
  export type idnbi_UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_UserRole
     */
    select?: idnbi_UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_UserRole
     */
    omit?: idnbi_UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a idnbi_UserRole.
     */
    data: XOR<idnbi_UserRoleUpdateInput, idnbi_UserRoleUncheckedUpdateInput>
    /**
     * Choose, which idnbi_UserRole to update.
     */
    where: idnbi_UserRoleWhereUniqueInput
  }

  /**
   * idnbi_UserRole updateMany
   */
  export type idnbi_UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update idnbi_UserRoles.
     */
    data: XOR<idnbi_UserRoleUpdateManyMutationInput, idnbi_UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which idnbi_UserRoles to update
     */
    where?: idnbi_UserRoleWhereInput
    /**
     * Limit how many idnbi_UserRoles to update.
     */
    limit?: number
  }

  /**
   * idnbi_UserRole updateManyAndReturn
   */
  export type idnbi_UserRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_UserRole
     */
    select?: idnbi_UserRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_UserRole
     */
    omit?: idnbi_UserRoleOmit<ExtArgs> | null
    /**
     * The data used to update idnbi_UserRoles.
     */
    data: XOR<idnbi_UserRoleUpdateManyMutationInput, idnbi_UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which idnbi_UserRoles to update
     */
    where?: idnbi_UserRoleWhereInput
    /**
     * Limit how many idnbi_UserRoles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserRoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * idnbi_UserRole upsert
   */
  export type idnbi_UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_UserRole
     */
    select?: idnbi_UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_UserRole
     */
    omit?: idnbi_UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the idnbi_UserRole to update in case it exists.
     */
    where: idnbi_UserRoleWhereUniqueInput
    /**
     * In case the idnbi_UserRole found by the `where` argument doesn't exist, create a new idnbi_UserRole with this data.
     */
    create: XOR<idnbi_UserRoleCreateInput, idnbi_UserRoleUncheckedCreateInput>
    /**
     * In case the idnbi_UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<idnbi_UserRoleUpdateInput, idnbi_UserRoleUncheckedUpdateInput>
  }

  /**
   * idnbi_UserRole delete
   */
  export type idnbi_UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_UserRole
     */
    select?: idnbi_UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_UserRole
     */
    omit?: idnbi_UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserRoleInclude<ExtArgs> | null
    /**
     * Filter which idnbi_UserRole to delete.
     */
    where: idnbi_UserRoleWhereUniqueInput
  }

  /**
   * idnbi_UserRole deleteMany
   */
  export type idnbi_UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idnbi_UserRoles to delete
     */
    where?: idnbi_UserRoleWhereInput
    /**
     * Limit how many idnbi_UserRoles to delete.
     */
    limit?: number
  }

  /**
   * idnbi_UserRole without action
   */
  export type idnbi_UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_UserRole
     */
    select?: idnbi_UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_UserRole
     */
    omit?: idnbi_UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserRoleInclude<ExtArgs> | null
  }


  /**
   * Model idnbi_Permission
   */

  export type AggregateIdnbi_Permission = {
    _count: Idnbi_PermissionCountAggregateOutputType | null
    _min: Idnbi_PermissionMinAggregateOutputType | null
    _max: Idnbi_PermissionMaxAggregateOutputType | null
  }

  export type Idnbi_PermissionMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Idnbi_PermissionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Idnbi_PermissionCountAggregateOutputType = {
    id: number
    name: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Idnbi_PermissionMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type Idnbi_PermissionMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type Idnbi_PermissionCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Idnbi_PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idnbi_Permission to aggregate.
     */
    where?: idnbi_PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_Permissions to fetch.
     */
    orderBy?: idnbi_PermissionOrderByWithRelationInput | idnbi_PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: idnbi_PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned idnbi_Permissions
    **/
    _count?: true | Idnbi_PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Idnbi_PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Idnbi_PermissionMaxAggregateInputType
  }

  export type GetIdnbi_PermissionAggregateType<T extends Idnbi_PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateIdnbi_Permission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdnbi_Permission[P]>
      : GetScalarType<T[P], AggregateIdnbi_Permission[P]>
  }




  export type idnbi_PermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: idnbi_PermissionWhereInput
    orderBy?: idnbi_PermissionOrderByWithAggregationInput | idnbi_PermissionOrderByWithAggregationInput[]
    by: Idnbi_PermissionScalarFieldEnum[] | Idnbi_PermissionScalarFieldEnum
    having?: idnbi_PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Idnbi_PermissionCountAggregateInputType | true
    _min?: Idnbi_PermissionMinAggregateInputType
    _max?: Idnbi_PermissionMaxAggregateInputType
  }

  export type Idnbi_PermissionGroupByOutputType = {
    id: string
    name: string
    description: string | null
    created_at: Date
    updated_at: Date
    _count: Idnbi_PermissionCountAggregateOutputType | null
    _min: Idnbi_PermissionMinAggregateOutputType | null
    _max: Idnbi_PermissionMaxAggregateOutputType | null
  }

  type GetIdnbi_PermissionGroupByPayload<T extends idnbi_PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Idnbi_PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Idnbi_PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Idnbi_PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], Idnbi_PermissionGroupByOutputType[P]>
        }
      >
    >


  export type idnbi_PermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    roles?: boolean | idnbi_Permission$rolesArgs<ExtArgs>
    _count?: boolean | Idnbi_PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idnbi_Permission"]>

  export type idnbi_PermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["idnbi_Permission"]>

  export type idnbi_PermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["idnbi_Permission"]>

  export type idnbi_PermissionSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type idnbi_PermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "created_at" | "updated_at", ExtArgs["result"]["idnbi_Permission"]>
  export type idnbi_PermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | idnbi_Permission$rolesArgs<ExtArgs>
    _count?: boolean | Idnbi_PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type idnbi_PermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type idnbi_PermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $idnbi_PermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "idnbi_Permission"
    objects: {
      roles: Prisma.$idnbi_RolePermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["idnbi_Permission"]>
    composites: {}
  }

  type idnbi_PermissionGetPayload<S extends boolean | null | undefined | idnbi_PermissionDefaultArgs> = $Result.GetResult<Prisma.$idnbi_PermissionPayload, S>

  type idnbi_PermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<idnbi_PermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Idnbi_PermissionCountAggregateInputType | true
    }

  export interface idnbi_PermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['idnbi_Permission'], meta: { name: 'idnbi_Permission' } }
    /**
     * Find zero or one Idnbi_Permission that matches the filter.
     * @param {idnbi_PermissionFindUniqueArgs} args - Arguments to find a Idnbi_Permission
     * @example
     * // Get one Idnbi_Permission
     * const idnbi_Permission = await prisma.idnbi_Permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends idnbi_PermissionFindUniqueArgs>(args: SelectSubset<T, idnbi_PermissionFindUniqueArgs<ExtArgs>>): Prisma__idnbi_PermissionClient<$Result.GetResult<Prisma.$idnbi_PermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Idnbi_Permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {idnbi_PermissionFindUniqueOrThrowArgs} args - Arguments to find a Idnbi_Permission
     * @example
     * // Get one Idnbi_Permission
     * const idnbi_Permission = await prisma.idnbi_Permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends idnbi_PermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, idnbi_PermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__idnbi_PermissionClient<$Result.GetResult<Prisma.$idnbi_PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idnbi_Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_PermissionFindFirstArgs} args - Arguments to find a Idnbi_Permission
     * @example
     * // Get one Idnbi_Permission
     * const idnbi_Permission = await prisma.idnbi_Permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends idnbi_PermissionFindFirstArgs>(args?: SelectSubset<T, idnbi_PermissionFindFirstArgs<ExtArgs>>): Prisma__idnbi_PermissionClient<$Result.GetResult<Prisma.$idnbi_PermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idnbi_Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_PermissionFindFirstOrThrowArgs} args - Arguments to find a Idnbi_Permission
     * @example
     * // Get one Idnbi_Permission
     * const idnbi_Permission = await prisma.idnbi_Permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends idnbi_PermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, idnbi_PermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__idnbi_PermissionClient<$Result.GetResult<Prisma.$idnbi_PermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Idnbi_Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_PermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Idnbi_Permissions
     * const idnbi_Permissions = await prisma.idnbi_Permission.findMany()
     * 
     * // Get first 10 Idnbi_Permissions
     * const idnbi_Permissions = await prisma.idnbi_Permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const idnbi_PermissionWithIdOnly = await prisma.idnbi_Permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends idnbi_PermissionFindManyArgs>(args?: SelectSubset<T, idnbi_PermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Idnbi_Permission.
     * @param {idnbi_PermissionCreateArgs} args - Arguments to create a Idnbi_Permission.
     * @example
     * // Create one Idnbi_Permission
     * const Idnbi_Permission = await prisma.idnbi_Permission.create({
     *   data: {
     *     // ... data to create a Idnbi_Permission
     *   }
     * })
     * 
     */
    create<T extends idnbi_PermissionCreateArgs>(args: SelectSubset<T, idnbi_PermissionCreateArgs<ExtArgs>>): Prisma__idnbi_PermissionClient<$Result.GetResult<Prisma.$idnbi_PermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Idnbi_Permissions.
     * @param {idnbi_PermissionCreateManyArgs} args - Arguments to create many Idnbi_Permissions.
     * @example
     * // Create many Idnbi_Permissions
     * const idnbi_Permission = await prisma.idnbi_Permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends idnbi_PermissionCreateManyArgs>(args?: SelectSubset<T, idnbi_PermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Idnbi_Permissions and returns the data saved in the database.
     * @param {idnbi_PermissionCreateManyAndReturnArgs} args - Arguments to create many Idnbi_Permissions.
     * @example
     * // Create many Idnbi_Permissions
     * const idnbi_Permission = await prisma.idnbi_Permission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Idnbi_Permissions and only return the `id`
     * const idnbi_PermissionWithIdOnly = await prisma.idnbi_Permission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends idnbi_PermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, idnbi_PermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_PermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Idnbi_Permission.
     * @param {idnbi_PermissionDeleteArgs} args - Arguments to delete one Idnbi_Permission.
     * @example
     * // Delete one Idnbi_Permission
     * const Idnbi_Permission = await prisma.idnbi_Permission.delete({
     *   where: {
     *     // ... filter to delete one Idnbi_Permission
     *   }
     * })
     * 
     */
    delete<T extends idnbi_PermissionDeleteArgs>(args: SelectSubset<T, idnbi_PermissionDeleteArgs<ExtArgs>>): Prisma__idnbi_PermissionClient<$Result.GetResult<Prisma.$idnbi_PermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Idnbi_Permission.
     * @param {idnbi_PermissionUpdateArgs} args - Arguments to update one Idnbi_Permission.
     * @example
     * // Update one Idnbi_Permission
     * const idnbi_Permission = await prisma.idnbi_Permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends idnbi_PermissionUpdateArgs>(args: SelectSubset<T, idnbi_PermissionUpdateArgs<ExtArgs>>): Prisma__idnbi_PermissionClient<$Result.GetResult<Prisma.$idnbi_PermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Idnbi_Permissions.
     * @param {idnbi_PermissionDeleteManyArgs} args - Arguments to filter Idnbi_Permissions to delete.
     * @example
     * // Delete a few Idnbi_Permissions
     * const { count } = await prisma.idnbi_Permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends idnbi_PermissionDeleteManyArgs>(args?: SelectSubset<T, idnbi_PermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idnbi_Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Idnbi_Permissions
     * const idnbi_Permission = await prisma.idnbi_Permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends idnbi_PermissionUpdateManyArgs>(args: SelectSubset<T, idnbi_PermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idnbi_Permissions and returns the data updated in the database.
     * @param {idnbi_PermissionUpdateManyAndReturnArgs} args - Arguments to update many Idnbi_Permissions.
     * @example
     * // Update many Idnbi_Permissions
     * const idnbi_Permission = await prisma.idnbi_Permission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Idnbi_Permissions and only return the `id`
     * const idnbi_PermissionWithIdOnly = await prisma.idnbi_Permission.updateManyAndReturn({
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
    updateManyAndReturn<T extends idnbi_PermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, idnbi_PermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_PermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Idnbi_Permission.
     * @param {idnbi_PermissionUpsertArgs} args - Arguments to update or create a Idnbi_Permission.
     * @example
     * // Update or create a Idnbi_Permission
     * const idnbi_Permission = await prisma.idnbi_Permission.upsert({
     *   create: {
     *     // ... data to create a Idnbi_Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Idnbi_Permission we want to update
     *   }
     * })
     */
    upsert<T extends idnbi_PermissionUpsertArgs>(args: SelectSubset<T, idnbi_PermissionUpsertArgs<ExtArgs>>): Prisma__idnbi_PermissionClient<$Result.GetResult<Prisma.$idnbi_PermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Idnbi_Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_PermissionCountArgs} args - Arguments to filter Idnbi_Permissions to count.
     * @example
     * // Count the number of Idnbi_Permissions
     * const count = await prisma.idnbi_Permission.count({
     *   where: {
     *     // ... the filter for the Idnbi_Permissions we want to count
     *   }
     * })
    **/
    count<T extends idnbi_PermissionCountArgs>(
      args?: Subset<T, idnbi_PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Idnbi_PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Idnbi_Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Idnbi_PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Idnbi_PermissionAggregateArgs>(args: Subset<T, Idnbi_PermissionAggregateArgs>): Prisma.PrismaPromise<GetIdnbi_PermissionAggregateType<T>>

    /**
     * Group by Idnbi_Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_PermissionGroupByArgs} args - Group by arguments.
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
      T extends idnbi_PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: idnbi_PermissionGroupByArgs['orderBy'] }
        : { orderBy?: idnbi_PermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, idnbi_PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdnbi_PermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the idnbi_Permission model
   */
  readonly fields: idnbi_PermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for idnbi_Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__idnbi_PermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends idnbi_Permission$rolesArgs<ExtArgs> = {}>(args?: Subset<T, idnbi_Permission$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the idnbi_Permission model
   */
  interface idnbi_PermissionFieldRefs {
    readonly id: FieldRef<"idnbi_Permission", 'String'>
    readonly name: FieldRef<"idnbi_Permission", 'String'>
    readonly description: FieldRef<"idnbi_Permission", 'String'>
    readonly created_at: FieldRef<"idnbi_Permission", 'DateTime'>
    readonly updated_at: FieldRef<"idnbi_Permission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * idnbi_Permission findUnique
   */
  export type idnbi_PermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Permission
     */
    select?: idnbi_PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Permission
     */
    omit?: idnbi_PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_PermissionInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_Permission to fetch.
     */
    where: idnbi_PermissionWhereUniqueInput
  }

  /**
   * idnbi_Permission findUniqueOrThrow
   */
  export type idnbi_PermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Permission
     */
    select?: idnbi_PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Permission
     */
    omit?: idnbi_PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_PermissionInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_Permission to fetch.
     */
    where: idnbi_PermissionWhereUniqueInput
  }

  /**
   * idnbi_Permission findFirst
   */
  export type idnbi_PermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Permission
     */
    select?: idnbi_PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Permission
     */
    omit?: idnbi_PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_PermissionInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_Permission to fetch.
     */
    where?: idnbi_PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_Permissions to fetch.
     */
    orderBy?: idnbi_PermissionOrderByWithRelationInput | idnbi_PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idnbi_Permissions.
     */
    cursor?: idnbi_PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idnbi_Permissions.
     */
    distinct?: Idnbi_PermissionScalarFieldEnum | Idnbi_PermissionScalarFieldEnum[]
  }

  /**
   * idnbi_Permission findFirstOrThrow
   */
  export type idnbi_PermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Permission
     */
    select?: idnbi_PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Permission
     */
    omit?: idnbi_PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_PermissionInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_Permission to fetch.
     */
    where?: idnbi_PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_Permissions to fetch.
     */
    orderBy?: idnbi_PermissionOrderByWithRelationInput | idnbi_PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idnbi_Permissions.
     */
    cursor?: idnbi_PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idnbi_Permissions.
     */
    distinct?: Idnbi_PermissionScalarFieldEnum | Idnbi_PermissionScalarFieldEnum[]
  }

  /**
   * idnbi_Permission findMany
   */
  export type idnbi_PermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Permission
     */
    select?: idnbi_PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Permission
     */
    omit?: idnbi_PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_PermissionInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_Permissions to fetch.
     */
    where?: idnbi_PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_Permissions to fetch.
     */
    orderBy?: idnbi_PermissionOrderByWithRelationInput | idnbi_PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing idnbi_Permissions.
     */
    cursor?: idnbi_PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_Permissions.
     */
    skip?: number
    distinct?: Idnbi_PermissionScalarFieldEnum | Idnbi_PermissionScalarFieldEnum[]
  }

  /**
   * idnbi_Permission create
   */
  export type idnbi_PermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Permission
     */
    select?: idnbi_PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Permission
     */
    omit?: idnbi_PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_PermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a idnbi_Permission.
     */
    data: XOR<idnbi_PermissionCreateInput, idnbi_PermissionUncheckedCreateInput>
  }

  /**
   * idnbi_Permission createMany
   */
  export type idnbi_PermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many idnbi_Permissions.
     */
    data: idnbi_PermissionCreateManyInput | idnbi_PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * idnbi_Permission createManyAndReturn
   */
  export type idnbi_PermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Permission
     */
    select?: idnbi_PermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Permission
     */
    omit?: idnbi_PermissionOmit<ExtArgs> | null
    /**
     * The data used to create many idnbi_Permissions.
     */
    data: idnbi_PermissionCreateManyInput | idnbi_PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * idnbi_Permission update
   */
  export type idnbi_PermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Permission
     */
    select?: idnbi_PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Permission
     */
    omit?: idnbi_PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_PermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a idnbi_Permission.
     */
    data: XOR<idnbi_PermissionUpdateInput, idnbi_PermissionUncheckedUpdateInput>
    /**
     * Choose, which idnbi_Permission to update.
     */
    where: idnbi_PermissionWhereUniqueInput
  }

  /**
   * idnbi_Permission updateMany
   */
  export type idnbi_PermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update idnbi_Permissions.
     */
    data: XOR<idnbi_PermissionUpdateManyMutationInput, idnbi_PermissionUncheckedUpdateManyInput>
    /**
     * Filter which idnbi_Permissions to update
     */
    where?: idnbi_PermissionWhereInput
    /**
     * Limit how many idnbi_Permissions to update.
     */
    limit?: number
  }

  /**
   * idnbi_Permission updateManyAndReturn
   */
  export type idnbi_PermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Permission
     */
    select?: idnbi_PermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Permission
     */
    omit?: idnbi_PermissionOmit<ExtArgs> | null
    /**
     * The data used to update idnbi_Permissions.
     */
    data: XOR<idnbi_PermissionUpdateManyMutationInput, idnbi_PermissionUncheckedUpdateManyInput>
    /**
     * Filter which idnbi_Permissions to update
     */
    where?: idnbi_PermissionWhereInput
    /**
     * Limit how many idnbi_Permissions to update.
     */
    limit?: number
  }

  /**
   * idnbi_Permission upsert
   */
  export type idnbi_PermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Permission
     */
    select?: idnbi_PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Permission
     */
    omit?: idnbi_PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_PermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the idnbi_Permission to update in case it exists.
     */
    where: idnbi_PermissionWhereUniqueInput
    /**
     * In case the idnbi_Permission found by the `where` argument doesn't exist, create a new idnbi_Permission with this data.
     */
    create: XOR<idnbi_PermissionCreateInput, idnbi_PermissionUncheckedCreateInput>
    /**
     * In case the idnbi_Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<idnbi_PermissionUpdateInput, idnbi_PermissionUncheckedUpdateInput>
  }

  /**
   * idnbi_Permission delete
   */
  export type idnbi_PermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Permission
     */
    select?: idnbi_PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Permission
     */
    omit?: idnbi_PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_PermissionInclude<ExtArgs> | null
    /**
     * Filter which idnbi_Permission to delete.
     */
    where: idnbi_PermissionWhereUniqueInput
  }

  /**
   * idnbi_Permission deleteMany
   */
  export type idnbi_PermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idnbi_Permissions to delete
     */
    where?: idnbi_PermissionWhereInput
    /**
     * Limit how many idnbi_Permissions to delete.
     */
    limit?: number
  }

  /**
   * idnbi_Permission.roles
   */
  export type idnbi_Permission$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_RolePermission
     */
    select?: idnbi_RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_RolePermission
     */
    omit?: idnbi_RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_RolePermissionInclude<ExtArgs> | null
    where?: idnbi_RolePermissionWhereInput
    orderBy?: idnbi_RolePermissionOrderByWithRelationInput | idnbi_RolePermissionOrderByWithRelationInput[]
    cursor?: idnbi_RolePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Idnbi_RolePermissionScalarFieldEnum | Idnbi_RolePermissionScalarFieldEnum[]
  }

  /**
   * idnbi_Permission without action
   */
  export type idnbi_PermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Permission
     */
    select?: idnbi_PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Permission
     */
    omit?: idnbi_PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_PermissionInclude<ExtArgs> | null
  }


  /**
   * Model idnbi_RolePermission
   */

  export type AggregateIdnbi_RolePermission = {
    _count: Idnbi_RolePermissionCountAggregateOutputType | null
    _min: Idnbi_RolePermissionMinAggregateOutputType | null
    _max: Idnbi_RolePermissionMaxAggregateOutputType | null
  }

  export type Idnbi_RolePermissionMinAggregateOutputType = {
    roleId: string | null
    permissionId: string | null
    created_at: Date | null
  }

  export type Idnbi_RolePermissionMaxAggregateOutputType = {
    roleId: string | null
    permissionId: string | null
    created_at: Date | null
  }

  export type Idnbi_RolePermissionCountAggregateOutputType = {
    roleId: number
    permissionId: number
    created_at: number
    _all: number
  }


  export type Idnbi_RolePermissionMinAggregateInputType = {
    roleId?: true
    permissionId?: true
    created_at?: true
  }

  export type Idnbi_RolePermissionMaxAggregateInputType = {
    roleId?: true
    permissionId?: true
    created_at?: true
  }

  export type Idnbi_RolePermissionCountAggregateInputType = {
    roleId?: true
    permissionId?: true
    created_at?: true
    _all?: true
  }

  export type Idnbi_RolePermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idnbi_RolePermission to aggregate.
     */
    where?: idnbi_RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_RolePermissions to fetch.
     */
    orderBy?: idnbi_RolePermissionOrderByWithRelationInput | idnbi_RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: idnbi_RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned idnbi_RolePermissions
    **/
    _count?: true | Idnbi_RolePermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Idnbi_RolePermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Idnbi_RolePermissionMaxAggregateInputType
  }

  export type GetIdnbi_RolePermissionAggregateType<T extends Idnbi_RolePermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateIdnbi_RolePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdnbi_RolePermission[P]>
      : GetScalarType<T[P], AggregateIdnbi_RolePermission[P]>
  }




  export type idnbi_RolePermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: idnbi_RolePermissionWhereInput
    orderBy?: idnbi_RolePermissionOrderByWithAggregationInput | idnbi_RolePermissionOrderByWithAggregationInput[]
    by: Idnbi_RolePermissionScalarFieldEnum[] | Idnbi_RolePermissionScalarFieldEnum
    having?: idnbi_RolePermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Idnbi_RolePermissionCountAggregateInputType | true
    _min?: Idnbi_RolePermissionMinAggregateInputType
    _max?: Idnbi_RolePermissionMaxAggregateInputType
  }

  export type Idnbi_RolePermissionGroupByOutputType = {
    roleId: string
    permissionId: string
    created_at: Date
    _count: Idnbi_RolePermissionCountAggregateOutputType | null
    _min: Idnbi_RolePermissionMinAggregateOutputType | null
    _max: Idnbi_RolePermissionMaxAggregateOutputType | null
  }

  type GetIdnbi_RolePermissionGroupByPayload<T extends idnbi_RolePermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Idnbi_RolePermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Idnbi_RolePermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Idnbi_RolePermissionGroupByOutputType[P]>
            : GetScalarType<T[P], Idnbi_RolePermissionGroupByOutputType[P]>
        }
      >
    >


  export type idnbi_RolePermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    permissionId?: boolean
    created_at?: boolean
    role?: boolean | idnbi_RoleDefaultArgs<ExtArgs>
    permission?: boolean | idnbi_PermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idnbi_RolePermission"]>

  export type idnbi_RolePermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    permissionId?: boolean
    created_at?: boolean
    role?: boolean | idnbi_RoleDefaultArgs<ExtArgs>
    permission?: boolean | idnbi_PermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idnbi_RolePermission"]>

  export type idnbi_RolePermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    permissionId?: boolean
    created_at?: boolean
    role?: boolean | idnbi_RoleDefaultArgs<ExtArgs>
    permission?: boolean | idnbi_PermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idnbi_RolePermission"]>

  export type idnbi_RolePermissionSelectScalar = {
    roleId?: boolean
    permissionId?: boolean
    created_at?: boolean
  }

  export type idnbi_RolePermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"roleId" | "permissionId" | "created_at", ExtArgs["result"]["idnbi_RolePermission"]>
  export type idnbi_RolePermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | idnbi_RoleDefaultArgs<ExtArgs>
    permission?: boolean | idnbi_PermissionDefaultArgs<ExtArgs>
  }
  export type idnbi_RolePermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | idnbi_RoleDefaultArgs<ExtArgs>
    permission?: boolean | idnbi_PermissionDefaultArgs<ExtArgs>
  }
  export type idnbi_RolePermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | idnbi_RoleDefaultArgs<ExtArgs>
    permission?: boolean | idnbi_PermissionDefaultArgs<ExtArgs>
  }

  export type $idnbi_RolePermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "idnbi_RolePermission"
    objects: {
      role: Prisma.$idnbi_RolePayload<ExtArgs>
      permission: Prisma.$idnbi_PermissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      roleId: string
      permissionId: string
      created_at: Date
    }, ExtArgs["result"]["idnbi_RolePermission"]>
    composites: {}
  }

  type idnbi_RolePermissionGetPayload<S extends boolean | null | undefined | idnbi_RolePermissionDefaultArgs> = $Result.GetResult<Prisma.$idnbi_RolePermissionPayload, S>

  type idnbi_RolePermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<idnbi_RolePermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Idnbi_RolePermissionCountAggregateInputType | true
    }

  export interface idnbi_RolePermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['idnbi_RolePermission'], meta: { name: 'idnbi_RolePermission' } }
    /**
     * Find zero or one Idnbi_RolePermission that matches the filter.
     * @param {idnbi_RolePermissionFindUniqueArgs} args - Arguments to find a Idnbi_RolePermission
     * @example
     * // Get one Idnbi_RolePermission
     * const idnbi_RolePermission = await prisma.idnbi_RolePermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends idnbi_RolePermissionFindUniqueArgs>(args: SelectSubset<T, idnbi_RolePermissionFindUniqueArgs<ExtArgs>>): Prisma__idnbi_RolePermissionClient<$Result.GetResult<Prisma.$idnbi_RolePermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Idnbi_RolePermission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {idnbi_RolePermissionFindUniqueOrThrowArgs} args - Arguments to find a Idnbi_RolePermission
     * @example
     * // Get one Idnbi_RolePermission
     * const idnbi_RolePermission = await prisma.idnbi_RolePermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends idnbi_RolePermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, idnbi_RolePermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__idnbi_RolePermissionClient<$Result.GetResult<Prisma.$idnbi_RolePermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idnbi_RolePermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_RolePermissionFindFirstArgs} args - Arguments to find a Idnbi_RolePermission
     * @example
     * // Get one Idnbi_RolePermission
     * const idnbi_RolePermission = await prisma.idnbi_RolePermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends idnbi_RolePermissionFindFirstArgs>(args?: SelectSubset<T, idnbi_RolePermissionFindFirstArgs<ExtArgs>>): Prisma__idnbi_RolePermissionClient<$Result.GetResult<Prisma.$idnbi_RolePermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idnbi_RolePermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_RolePermissionFindFirstOrThrowArgs} args - Arguments to find a Idnbi_RolePermission
     * @example
     * // Get one Idnbi_RolePermission
     * const idnbi_RolePermission = await prisma.idnbi_RolePermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends idnbi_RolePermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, idnbi_RolePermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__idnbi_RolePermissionClient<$Result.GetResult<Prisma.$idnbi_RolePermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Idnbi_RolePermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_RolePermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Idnbi_RolePermissions
     * const idnbi_RolePermissions = await prisma.idnbi_RolePermission.findMany()
     * 
     * // Get first 10 Idnbi_RolePermissions
     * const idnbi_RolePermissions = await prisma.idnbi_RolePermission.findMany({ take: 10 })
     * 
     * // Only select the `roleId`
     * const idnbi_RolePermissionWithRoleIdOnly = await prisma.idnbi_RolePermission.findMany({ select: { roleId: true } })
     * 
     */
    findMany<T extends idnbi_RolePermissionFindManyArgs>(args?: SelectSubset<T, idnbi_RolePermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Idnbi_RolePermission.
     * @param {idnbi_RolePermissionCreateArgs} args - Arguments to create a Idnbi_RolePermission.
     * @example
     * // Create one Idnbi_RolePermission
     * const Idnbi_RolePermission = await prisma.idnbi_RolePermission.create({
     *   data: {
     *     // ... data to create a Idnbi_RolePermission
     *   }
     * })
     * 
     */
    create<T extends idnbi_RolePermissionCreateArgs>(args: SelectSubset<T, idnbi_RolePermissionCreateArgs<ExtArgs>>): Prisma__idnbi_RolePermissionClient<$Result.GetResult<Prisma.$idnbi_RolePermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Idnbi_RolePermissions.
     * @param {idnbi_RolePermissionCreateManyArgs} args - Arguments to create many Idnbi_RolePermissions.
     * @example
     * // Create many Idnbi_RolePermissions
     * const idnbi_RolePermission = await prisma.idnbi_RolePermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends idnbi_RolePermissionCreateManyArgs>(args?: SelectSubset<T, idnbi_RolePermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Idnbi_RolePermissions and returns the data saved in the database.
     * @param {idnbi_RolePermissionCreateManyAndReturnArgs} args - Arguments to create many Idnbi_RolePermissions.
     * @example
     * // Create many Idnbi_RolePermissions
     * const idnbi_RolePermission = await prisma.idnbi_RolePermission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Idnbi_RolePermissions and only return the `roleId`
     * const idnbi_RolePermissionWithRoleIdOnly = await prisma.idnbi_RolePermission.createManyAndReturn({
     *   select: { roleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends idnbi_RolePermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, idnbi_RolePermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_RolePermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Idnbi_RolePermission.
     * @param {idnbi_RolePermissionDeleteArgs} args - Arguments to delete one Idnbi_RolePermission.
     * @example
     * // Delete one Idnbi_RolePermission
     * const Idnbi_RolePermission = await prisma.idnbi_RolePermission.delete({
     *   where: {
     *     // ... filter to delete one Idnbi_RolePermission
     *   }
     * })
     * 
     */
    delete<T extends idnbi_RolePermissionDeleteArgs>(args: SelectSubset<T, idnbi_RolePermissionDeleteArgs<ExtArgs>>): Prisma__idnbi_RolePermissionClient<$Result.GetResult<Prisma.$idnbi_RolePermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Idnbi_RolePermission.
     * @param {idnbi_RolePermissionUpdateArgs} args - Arguments to update one Idnbi_RolePermission.
     * @example
     * // Update one Idnbi_RolePermission
     * const idnbi_RolePermission = await prisma.idnbi_RolePermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends idnbi_RolePermissionUpdateArgs>(args: SelectSubset<T, idnbi_RolePermissionUpdateArgs<ExtArgs>>): Prisma__idnbi_RolePermissionClient<$Result.GetResult<Prisma.$idnbi_RolePermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Idnbi_RolePermissions.
     * @param {idnbi_RolePermissionDeleteManyArgs} args - Arguments to filter Idnbi_RolePermissions to delete.
     * @example
     * // Delete a few Idnbi_RolePermissions
     * const { count } = await prisma.idnbi_RolePermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends idnbi_RolePermissionDeleteManyArgs>(args?: SelectSubset<T, idnbi_RolePermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idnbi_RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_RolePermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Idnbi_RolePermissions
     * const idnbi_RolePermission = await prisma.idnbi_RolePermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends idnbi_RolePermissionUpdateManyArgs>(args: SelectSubset<T, idnbi_RolePermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idnbi_RolePermissions and returns the data updated in the database.
     * @param {idnbi_RolePermissionUpdateManyAndReturnArgs} args - Arguments to update many Idnbi_RolePermissions.
     * @example
     * // Update many Idnbi_RolePermissions
     * const idnbi_RolePermission = await prisma.idnbi_RolePermission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Idnbi_RolePermissions and only return the `roleId`
     * const idnbi_RolePermissionWithRoleIdOnly = await prisma.idnbi_RolePermission.updateManyAndReturn({
     *   select: { roleId: true },
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
    updateManyAndReturn<T extends idnbi_RolePermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, idnbi_RolePermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_RolePermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Idnbi_RolePermission.
     * @param {idnbi_RolePermissionUpsertArgs} args - Arguments to update or create a Idnbi_RolePermission.
     * @example
     * // Update or create a Idnbi_RolePermission
     * const idnbi_RolePermission = await prisma.idnbi_RolePermission.upsert({
     *   create: {
     *     // ... data to create a Idnbi_RolePermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Idnbi_RolePermission we want to update
     *   }
     * })
     */
    upsert<T extends idnbi_RolePermissionUpsertArgs>(args: SelectSubset<T, idnbi_RolePermissionUpsertArgs<ExtArgs>>): Prisma__idnbi_RolePermissionClient<$Result.GetResult<Prisma.$idnbi_RolePermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Idnbi_RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_RolePermissionCountArgs} args - Arguments to filter Idnbi_RolePermissions to count.
     * @example
     * // Count the number of Idnbi_RolePermissions
     * const count = await prisma.idnbi_RolePermission.count({
     *   where: {
     *     // ... the filter for the Idnbi_RolePermissions we want to count
     *   }
     * })
    **/
    count<T extends idnbi_RolePermissionCountArgs>(
      args?: Subset<T, idnbi_RolePermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Idnbi_RolePermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Idnbi_RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Idnbi_RolePermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Idnbi_RolePermissionAggregateArgs>(args: Subset<T, Idnbi_RolePermissionAggregateArgs>): Prisma.PrismaPromise<GetIdnbi_RolePermissionAggregateType<T>>

    /**
     * Group by Idnbi_RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_RolePermissionGroupByArgs} args - Group by arguments.
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
      T extends idnbi_RolePermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: idnbi_RolePermissionGroupByArgs['orderBy'] }
        : { orderBy?: idnbi_RolePermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, idnbi_RolePermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdnbi_RolePermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the idnbi_RolePermission model
   */
  readonly fields: idnbi_RolePermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for idnbi_RolePermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__idnbi_RolePermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends idnbi_RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, idnbi_RoleDefaultArgs<ExtArgs>>): Prisma__idnbi_RoleClient<$Result.GetResult<Prisma.$idnbi_RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    permission<T extends idnbi_PermissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, idnbi_PermissionDefaultArgs<ExtArgs>>): Prisma__idnbi_PermissionClient<$Result.GetResult<Prisma.$idnbi_PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the idnbi_RolePermission model
   */
  interface idnbi_RolePermissionFieldRefs {
    readonly roleId: FieldRef<"idnbi_RolePermission", 'String'>
    readonly permissionId: FieldRef<"idnbi_RolePermission", 'String'>
    readonly created_at: FieldRef<"idnbi_RolePermission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * idnbi_RolePermission findUnique
   */
  export type idnbi_RolePermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_RolePermission
     */
    select?: idnbi_RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_RolePermission
     */
    omit?: idnbi_RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_RolePermission to fetch.
     */
    where: idnbi_RolePermissionWhereUniqueInput
  }

  /**
   * idnbi_RolePermission findUniqueOrThrow
   */
  export type idnbi_RolePermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_RolePermission
     */
    select?: idnbi_RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_RolePermission
     */
    omit?: idnbi_RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_RolePermission to fetch.
     */
    where: idnbi_RolePermissionWhereUniqueInput
  }

  /**
   * idnbi_RolePermission findFirst
   */
  export type idnbi_RolePermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_RolePermission
     */
    select?: idnbi_RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_RolePermission
     */
    omit?: idnbi_RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_RolePermission to fetch.
     */
    where?: idnbi_RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_RolePermissions to fetch.
     */
    orderBy?: idnbi_RolePermissionOrderByWithRelationInput | idnbi_RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idnbi_RolePermissions.
     */
    cursor?: idnbi_RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idnbi_RolePermissions.
     */
    distinct?: Idnbi_RolePermissionScalarFieldEnum | Idnbi_RolePermissionScalarFieldEnum[]
  }

  /**
   * idnbi_RolePermission findFirstOrThrow
   */
  export type idnbi_RolePermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_RolePermission
     */
    select?: idnbi_RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_RolePermission
     */
    omit?: idnbi_RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_RolePermission to fetch.
     */
    where?: idnbi_RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_RolePermissions to fetch.
     */
    orderBy?: idnbi_RolePermissionOrderByWithRelationInput | idnbi_RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idnbi_RolePermissions.
     */
    cursor?: idnbi_RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idnbi_RolePermissions.
     */
    distinct?: Idnbi_RolePermissionScalarFieldEnum | Idnbi_RolePermissionScalarFieldEnum[]
  }

  /**
   * idnbi_RolePermission findMany
   */
  export type idnbi_RolePermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_RolePermission
     */
    select?: idnbi_RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_RolePermission
     */
    omit?: idnbi_RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_RolePermissions to fetch.
     */
    where?: idnbi_RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_RolePermissions to fetch.
     */
    orderBy?: idnbi_RolePermissionOrderByWithRelationInput | idnbi_RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing idnbi_RolePermissions.
     */
    cursor?: idnbi_RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_RolePermissions.
     */
    skip?: number
    distinct?: Idnbi_RolePermissionScalarFieldEnum | Idnbi_RolePermissionScalarFieldEnum[]
  }

  /**
   * idnbi_RolePermission create
   */
  export type idnbi_RolePermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_RolePermission
     */
    select?: idnbi_RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_RolePermission
     */
    omit?: idnbi_RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_RolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a idnbi_RolePermission.
     */
    data: XOR<idnbi_RolePermissionCreateInput, idnbi_RolePermissionUncheckedCreateInput>
  }

  /**
   * idnbi_RolePermission createMany
   */
  export type idnbi_RolePermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many idnbi_RolePermissions.
     */
    data: idnbi_RolePermissionCreateManyInput | idnbi_RolePermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * idnbi_RolePermission createManyAndReturn
   */
  export type idnbi_RolePermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_RolePermission
     */
    select?: idnbi_RolePermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_RolePermission
     */
    omit?: idnbi_RolePermissionOmit<ExtArgs> | null
    /**
     * The data used to create many idnbi_RolePermissions.
     */
    data: idnbi_RolePermissionCreateManyInput | idnbi_RolePermissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_RolePermissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * idnbi_RolePermission update
   */
  export type idnbi_RolePermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_RolePermission
     */
    select?: idnbi_RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_RolePermission
     */
    omit?: idnbi_RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_RolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a idnbi_RolePermission.
     */
    data: XOR<idnbi_RolePermissionUpdateInput, idnbi_RolePermissionUncheckedUpdateInput>
    /**
     * Choose, which idnbi_RolePermission to update.
     */
    where: idnbi_RolePermissionWhereUniqueInput
  }

  /**
   * idnbi_RolePermission updateMany
   */
  export type idnbi_RolePermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update idnbi_RolePermissions.
     */
    data: XOR<idnbi_RolePermissionUpdateManyMutationInput, idnbi_RolePermissionUncheckedUpdateManyInput>
    /**
     * Filter which idnbi_RolePermissions to update
     */
    where?: idnbi_RolePermissionWhereInput
    /**
     * Limit how many idnbi_RolePermissions to update.
     */
    limit?: number
  }

  /**
   * idnbi_RolePermission updateManyAndReturn
   */
  export type idnbi_RolePermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_RolePermission
     */
    select?: idnbi_RolePermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_RolePermission
     */
    omit?: idnbi_RolePermissionOmit<ExtArgs> | null
    /**
     * The data used to update idnbi_RolePermissions.
     */
    data: XOR<idnbi_RolePermissionUpdateManyMutationInput, idnbi_RolePermissionUncheckedUpdateManyInput>
    /**
     * Filter which idnbi_RolePermissions to update
     */
    where?: idnbi_RolePermissionWhereInput
    /**
     * Limit how many idnbi_RolePermissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_RolePermissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * idnbi_RolePermission upsert
   */
  export type idnbi_RolePermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_RolePermission
     */
    select?: idnbi_RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_RolePermission
     */
    omit?: idnbi_RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_RolePermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the idnbi_RolePermission to update in case it exists.
     */
    where: idnbi_RolePermissionWhereUniqueInput
    /**
     * In case the idnbi_RolePermission found by the `where` argument doesn't exist, create a new idnbi_RolePermission with this data.
     */
    create: XOR<idnbi_RolePermissionCreateInput, idnbi_RolePermissionUncheckedCreateInput>
    /**
     * In case the idnbi_RolePermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<idnbi_RolePermissionUpdateInput, idnbi_RolePermissionUncheckedUpdateInput>
  }

  /**
   * idnbi_RolePermission delete
   */
  export type idnbi_RolePermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_RolePermission
     */
    select?: idnbi_RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_RolePermission
     */
    omit?: idnbi_RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_RolePermissionInclude<ExtArgs> | null
    /**
     * Filter which idnbi_RolePermission to delete.
     */
    where: idnbi_RolePermissionWhereUniqueInput
  }

  /**
   * idnbi_RolePermission deleteMany
   */
  export type idnbi_RolePermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idnbi_RolePermissions to delete
     */
    where?: idnbi_RolePermissionWhereInput
    /**
     * Limit how many idnbi_RolePermissions to delete.
     */
    limit?: number
  }

  /**
   * idnbi_RolePermission without action
   */
  export type idnbi_RolePermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_RolePermission
     */
    select?: idnbi_RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_RolePermission
     */
    omit?: idnbi_RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_RolePermissionInclude<ExtArgs> | null
  }


  /**
   * Model idnbi_TermsAndConditions
   */

  export type AggregateIdnbi_TermsAndConditions = {
    _count: Idnbi_TermsAndConditionsCountAggregateOutputType | null
    _min: Idnbi_TermsAndConditionsMinAggregateOutputType | null
    _max: Idnbi_TermsAndConditionsMaxAggregateOutputType | null
  }

  export type Idnbi_TermsAndConditionsMinAggregateOutputType = {
    id: string | null
    version: string | null
    content_html: string | null
    created_at: Date | null
    updated_at: Date | null
    published_at: Date | null
  }

  export type Idnbi_TermsAndConditionsMaxAggregateOutputType = {
    id: string | null
    version: string | null
    content_html: string | null
    created_at: Date | null
    updated_at: Date | null
    published_at: Date | null
  }

  export type Idnbi_TermsAndConditionsCountAggregateOutputType = {
    id: number
    version: number
    content_html: number
    created_at: number
    updated_at: number
    published_at: number
    _all: number
  }


  export type Idnbi_TermsAndConditionsMinAggregateInputType = {
    id?: true
    version?: true
    content_html?: true
    created_at?: true
    updated_at?: true
    published_at?: true
  }

  export type Idnbi_TermsAndConditionsMaxAggregateInputType = {
    id?: true
    version?: true
    content_html?: true
    created_at?: true
    updated_at?: true
    published_at?: true
  }

  export type Idnbi_TermsAndConditionsCountAggregateInputType = {
    id?: true
    version?: true
    content_html?: true
    created_at?: true
    updated_at?: true
    published_at?: true
    _all?: true
  }

  export type Idnbi_TermsAndConditionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idnbi_TermsAndConditions to aggregate.
     */
    where?: idnbi_TermsAndConditionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_TermsAndConditions to fetch.
     */
    orderBy?: idnbi_TermsAndConditionsOrderByWithRelationInput | idnbi_TermsAndConditionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: idnbi_TermsAndConditionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_TermsAndConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_TermsAndConditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned idnbi_TermsAndConditions
    **/
    _count?: true | Idnbi_TermsAndConditionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Idnbi_TermsAndConditionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Idnbi_TermsAndConditionsMaxAggregateInputType
  }

  export type GetIdnbi_TermsAndConditionsAggregateType<T extends Idnbi_TermsAndConditionsAggregateArgs> = {
        [P in keyof T & keyof AggregateIdnbi_TermsAndConditions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdnbi_TermsAndConditions[P]>
      : GetScalarType<T[P], AggregateIdnbi_TermsAndConditions[P]>
  }




  export type idnbi_TermsAndConditionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: idnbi_TermsAndConditionsWhereInput
    orderBy?: idnbi_TermsAndConditionsOrderByWithAggregationInput | idnbi_TermsAndConditionsOrderByWithAggregationInput[]
    by: Idnbi_TermsAndConditionsScalarFieldEnum[] | Idnbi_TermsAndConditionsScalarFieldEnum
    having?: idnbi_TermsAndConditionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Idnbi_TermsAndConditionsCountAggregateInputType | true
    _min?: Idnbi_TermsAndConditionsMinAggregateInputType
    _max?: Idnbi_TermsAndConditionsMaxAggregateInputType
  }

  export type Idnbi_TermsAndConditionsGroupByOutputType = {
    id: string
    version: string
    content_html: string
    created_at: Date
    updated_at: Date
    published_at: Date | null
    _count: Idnbi_TermsAndConditionsCountAggregateOutputType | null
    _min: Idnbi_TermsAndConditionsMinAggregateOutputType | null
    _max: Idnbi_TermsAndConditionsMaxAggregateOutputType | null
  }

  type GetIdnbi_TermsAndConditionsGroupByPayload<T extends idnbi_TermsAndConditionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Idnbi_TermsAndConditionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Idnbi_TermsAndConditionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Idnbi_TermsAndConditionsGroupByOutputType[P]>
            : GetScalarType<T[P], Idnbi_TermsAndConditionsGroupByOutputType[P]>
        }
      >
    >


  export type idnbi_TermsAndConditionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    content_html?: boolean
    created_at?: boolean
    updated_at?: boolean
    published_at?: boolean
  }, ExtArgs["result"]["idnbi_TermsAndConditions"]>

  export type idnbi_TermsAndConditionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    content_html?: boolean
    created_at?: boolean
    updated_at?: boolean
    published_at?: boolean
  }, ExtArgs["result"]["idnbi_TermsAndConditions"]>

  export type idnbi_TermsAndConditionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    content_html?: boolean
    created_at?: boolean
    updated_at?: boolean
    published_at?: boolean
  }, ExtArgs["result"]["idnbi_TermsAndConditions"]>

  export type idnbi_TermsAndConditionsSelectScalar = {
    id?: boolean
    version?: boolean
    content_html?: boolean
    created_at?: boolean
    updated_at?: boolean
    published_at?: boolean
  }

  export type idnbi_TermsAndConditionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "version" | "content_html" | "created_at" | "updated_at" | "published_at", ExtArgs["result"]["idnbi_TermsAndConditions"]>

  export type $idnbi_TermsAndConditionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "idnbi_TermsAndConditions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      version: string
      content_html: string
      created_at: Date
      updated_at: Date
      published_at: Date | null
    }, ExtArgs["result"]["idnbi_TermsAndConditions"]>
    composites: {}
  }

  type idnbi_TermsAndConditionsGetPayload<S extends boolean | null | undefined | idnbi_TermsAndConditionsDefaultArgs> = $Result.GetResult<Prisma.$idnbi_TermsAndConditionsPayload, S>

  type idnbi_TermsAndConditionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<idnbi_TermsAndConditionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Idnbi_TermsAndConditionsCountAggregateInputType | true
    }

  export interface idnbi_TermsAndConditionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['idnbi_TermsAndConditions'], meta: { name: 'idnbi_TermsAndConditions' } }
    /**
     * Find zero or one Idnbi_TermsAndConditions that matches the filter.
     * @param {idnbi_TermsAndConditionsFindUniqueArgs} args - Arguments to find a Idnbi_TermsAndConditions
     * @example
     * // Get one Idnbi_TermsAndConditions
     * const idnbi_TermsAndConditions = await prisma.idnbi_TermsAndConditions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends idnbi_TermsAndConditionsFindUniqueArgs>(args: SelectSubset<T, idnbi_TermsAndConditionsFindUniqueArgs<ExtArgs>>): Prisma__idnbi_TermsAndConditionsClient<$Result.GetResult<Prisma.$idnbi_TermsAndConditionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Idnbi_TermsAndConditions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {idnbi_TermsAndConditionsFindUniqueOrThrowArgs} args - Arguments to find a Idnbi_TermsAndConditions
     * @example
     * // Get one Idnbi_TermsAndConditions
     * const idnbi_TermsAndConditions = await prisma.idnbi_TermsAndConditions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends idnbi_TermsAndConditionsFindUniqueOrThrowArgs>(args: SelectSubset<T, idnbi_TermsAndConditionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__idnbi_TermsAndConditionsClient<$Result.GetResult<Prisma.$idnbi_TermsAndConditionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idnbi_TermsAndConditions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_TermsAndConditionsFindFirstArgs} args - Arguments to find a Idnbi_TermsAndConditions
     * @example
     * // Get one Idnbi_TermsAndConditions
     * const idnbi_TermsAndConditions = await prisma.idnbi_TermsAndConditions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends idnbi_TermsAndConditionsFindFirstArgs>(args?: SelectSubset<T, idnbi_TermsAndConditionsFindFirstArgs<ExtArgs>>): Prisma__idnbi_TermsAndConditionsClient<$Result.GetResult<Prisma.$idnbi_TermsAndConditionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idnbi_TermsAndConditions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_TermsAndConditionsFindFirstOrThrowArgs} args - Arguments to find a Idnbi_TermsAndConditions
     * @example
     * // Get one Idnbi_TermsAndConditions
     * const idnbi_TermsAndConditions = await prisma.idnbi_TermsAndConditions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends idnbi_TermsAndConditionsFindFirstOrThrowArgs>(args?: SelectSubset<T, idnbi_TermsAndConditionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__idnbi_TermsAndConditionsClient<$Result.GetResult<Prisma.$idnbi_TermsAndConditionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Idnbi_TermsAndConditions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_TermsAndConditionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Idnbi_TermsAndConditions
     * const idnbi_TermsAndConditions = await prisma.idnbi_TermsAndConditions.findMany()
     * 
     * // Get first 10 Idnbi_TermsAndConditions
     * const idnbi_TermsAndConditions = await prisma.idnbi_TermsAndConditions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const idnbi_TermsAndConditionsWithIdOnly = await prisma.idnbi_TermsAndConditions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends idnbi_TermsAndConditionsFindManyArgs>(args?: SelectSubset<T, idnbi_TermsAndConditionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_TermsAndConditionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Idnbi_TermsAndConditions.
     * @param {idnbi_TermsAndConditionsCreateArgs} args - Arguments to create a Idnbi_TermsAndConditions.
     * @example
     * // Create one Idnbi_TermsAndConditions
     * const Idnbi_TermsAndConditions = await prisma.idnbi_TermsAndConditions.create({
     *   data: {
     *     // ... data to create a Idnbi_TermsAndConditions
     *   }
     * })
     * 
     */
    create<T extends idnbi_TermsAndConditionsCreateArgs>(args: SelectSubset<T, idnbi_TermsAndConditionsCreateArgs<ExtArgs>>): Prisma__idnbi_TermsAndConditionsClient<$Result.GetResult<Prisma.$idnbi_TermsAndConditionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Idnbi_TermsAndConditions.
     * @param {idnbi_TermsAndConditionsCreateManyArgs} args - Arguments to create many Idnbi_TermsAndConditions.
     * @example
     * // Create many Idnbi_TermsAndConditions
     * const idnbi_TermsAndConditions = await prisma.idnbi_TermsAndConditions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends idnbi_TermsAndConditionsCreateManyArgs>(args?: SelectSubset<T, idnbi_TermsAndConditionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Idnbi_TermsAndConditions and returns the data saved in the database.
     * @param {idnbi_TermsAndConditionsCreateManyAndReturnArgs} args - Arguments to create many Idnbi_TermsAndConditions.
     * @example
     * // Create many Idnbi_TermsAndConditions
     * const idnbi_TermsAndConditions = await prisma.idnbi_TermsAndConditions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Idnbi_TermsAndConditions and only return the `id`
     * const idnbi_TermsAndConditionsWithIdOnly = await prisma.idnbi_TermsAndConditions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends idnbi_TermsAndConditionsCreateManyAndReturnArgs>(args?: SelectSubset<T, idnbi_TermsAndConditionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_TermsAndConditionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Idnbi_TermsAndConditions.
     * @param {idnbi_TermsAndConditionsDeleteArgs} args - Arguments to delete one Idnbi_TermsAndConditions.
     * @example
     * // Delete one Idnbi_TermsAndConditions
     * const Idnbi_TermsAndConditions = await prisma.idnbi_TermsAndConditions.delete({
     *   where: {
     *     // ... filter to delete one Idnbi_TermsAndConditions
     *   }
     * })
     * 
     */
    delete<T extends idnbi_TermsAndConditionsDeleteArgs>(args: SelectSubset<T, idnbi_TermsAndConditionsDeleteArgs<ExtArgs>>): Prisma__idnbi_TermsAndConditionsClient<$Result.GetResult<Prisma.$idnbi_TermsAndConditionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Idnbi_TermsAndConditions.
     * @param {idnbi_TermsAndConditionsUpdateArgs} args - Arguments to update one Idnbi_TermsAndConditions.
     * @example
     * // Update one Idnbi_TermsAndConditions
     * const idnbi_TermsAndConditions = await prisma.idnbi_TermsAndConditions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends idnbi_TermsAndConditionsUpdateArgs>(args: SelectSubset<T, idnbi_TermsAndConditionsUpdateArgs<ExtArgs>>): Prisma__idnbi_TermsAndConditionsClient<$Result.GetResult<Prisma.$idnbi_TermsAndConditionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Idnbi_TermsAndConditions.
     * @param {idnbi_TermsAndConditionsDeleteManyArgs} args - Arguments to filter Idnbi_TermsAndConditions to delete.
     * @example
     * // Delete a few Idnbi_TermsAndConditions
     * const { count } = await prisma.idnbi_TermsAndConditions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends idnbi_TermsAndConditionsDeleteManyArgs>(args?: SelectSubset<T, idnbi_TermsAndConditionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idnbi_TermsAndConditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_TermsAndConditionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Idnbi_TermsAndConditions
     * const idnbi_TermsAndConditions = await prisma.idnbi_TermsAndConditions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends idnbi_TermsAndConditionsUpdateManyArgs>(args: SelectSubset<T, idnbi_TermsAndConditionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idnbi_TermsAndConditions and returns the data updated in the database.
     * @param {idnbi_TermsAndConditionsUpdateManyAndReturnArgs} args - Arguments to update many Idnbi_TermsAndConditions.
     * @example
     * // Update many Idnbi_TermsAndConditions
     * const idnbi_TermsAndConditions = await prisma.idnbi_TermsAndConditions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Idnbi_TermsAndConditions and only return the `id`
     * const idnbi_TermsAndConditionsWithIdOnly = await prisma.idnbi_TermsAndConditions.updateManyAndReturn({
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
    updateManyAndReturn<T extends idnbi_TermsAndConditionsUpdateManyAndReturnArgs>(args: SelectSubset<T, idnbi_TermsAndConditionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_TermsAndConditionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Idnbi_TermsAndConditions.
     * @param {idnbi_TermsAndConditionsUpsertArgs} args - Arguments to update or create a Idnbi_TermsAndConditions.
     * @example
     * // Update or create a Idnbi_TermsAndConditions
     * const idnbi_TermsAndConditions = await prisma.idnbi_TermsAndConditions.upsert({
     *   create: {
     *     // ... data to create a Idnbi_TermsAndConditions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Idnbi_TermsAndConditions we want to update
     *   }
     * })
     */
    upsert<T extends idnbi_TermsAndConditionsUpsertArgs>(args: SelectSubset<T, idnbi_TermsAndConditionsUpsertArgs<ExtArgs>>): Prisma__idnbi_TermsAndConditionsClient<$Result.GetResult<Prisma.$idnbi_TermsAndConditionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Idnbi_TermsAndConditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_TermsAndConditionsCountArgs} args - Arguments to filter Idnbi_TermsAndConditions to count.
     * @example
     * // Count the number of Idnbi_TermsAndConditions
     * const count = await prisma.idnbi_TermsAndConditions.count({
     *   where: {
     *     // ... the filter for the Idnbi_TermsAndConditions we want to count
     *   }
     * })
    **/
    count<T extends idnbi_TermsAndConditionsCountArgs>(
      args?: Subset<T, idnbi_TermsAndConditionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Idnbi_TermsAndConditionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Idnbi_TermsAndConditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Idnbi_TermsAndConditionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Idnbi_TermsAndConditionsAggregateArgs>(args: Subset<T, Idnbi_TermsAndConditionsAggregateArgs>): Prisma.PrismaPromise<GetIdnbi_TermsAndConditionsAggregateType<T>>

    /**
     * Group by Idnbi_TermsAndConditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_TermsAndConditionsGroupByArgs} args - Group by arguments.
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
      T extends idnbi_TermsAndConditionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: idnbi_TermsAndConditionsGroupByArgs['orderBy'] }
        : { orderBy?: idnbi_TermsAndConditionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, idnbi_TermsAndConditionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdnbi_TermsAndConditionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the idnbi_TermsAndConditions model
   */
  readonly fields: idnbi_TermsAndConditionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for idnbi_TermsAndConditions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__idnbi_TermsAndConditionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the idnbi_TermsAndConditions model
   */
  interface idnbi_TermsAndConditionsFieldRefs {
    readonly id: FieldRef<"idnbi_TermsAndConditions", 'String'>
    readonly version: FieldRef<"idnbi_TermsAndConditions", 'String'>
    readonly content_html: FieldRef<"idnbi_TermsAndConditions", 'String'>
    readonly created_at: FieldRef<"idnbi_TermsAndConditions", 'DateTime'>
    readonly updated_at: FieldRef<"idnbi_TermsAndConditions", 'DateTime'>
    readonly published_at: FieldRef<"idnbi_TermsAndConditions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * idnbi_TermsAndConditions findUnique
   */
  export type idnbi_TermsAndConditionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_TermsAndConditions
     */
    select?: idnbi_TermsAndConditionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_TermsAndConditions
     */
    omit?: idnbi_TermsAndConditionsOmit<ExtArgs> | null
    /**
     * Filter, which idnbi_TermsAndConditions to fetch.
     */
    where: idnbi_TermsAndConditionsWhereUniqueInput
  }

  /**
   * idnbi_TermsAndConditions findUniqueOrThrow
   */
  export type idnbi_TermsAndConditionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_TermsAndConditions
     */
    select?: idnbi_TermsAndConditionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_TermsAndConditions
     */
    omit?: idnbi_TermsAndConditionsOmit<ExtArgs> | null
    /**
     * Filter, which idnbi_TermsAndConditions to fetch.
     */
    where: idnbi_TermsAndConditionsWhereUniqueInput
  }

  /**
   * idnbi_TermsAndConditions findFirst
   */
  export type idnbi_TermsAndConditionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_TermsAndConditions
     */
    select?: idnbi_TermsAndConditionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_TermsAndConditions
     */
    omit?: idnbi_TermsAndConditionsOmit<ExtArgs> | null
    /**
     * Filter, which idnbi_TermsAndConditions to fetch.
     */
    where?: idnbi_TermsAndConditionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_TermsAndConditions to fetch.
     */
    orderBy?: idnbi_TermsAndConditionsOrderByWithRelationInput | idnbi_TermsAndConditionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idnbi_TermsAndConditions.
     */
    cursor?: idnbi_TermsAndConditionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_TermsAndConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_TermsAndConditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idnbi_TermsAndConditions.
     */
    distinct?: Idnbi_TermsAndConditionsScalarFieldEnum | Idnbi_TermsAndConditionsScalarFieldEnum[]
  }

  /**
   * idnbi_TermsAndConditions findFirstOrThrow
   */
  export type idnbi_TermsAndConditionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_TermsAndConditions
     */
    select?: idnbi_TermsAndConditionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_TermsAndConditions
     */
    omit?: idnbi_TermsAndConditionsOmit<ExtArgs> | null
    /**
     * Filter, which idnbi_TermsAndConditions to fetch.
     */
    where?: idnbi_TermsAndConditionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_TermsAndConditions to fetch.
     */
    orderBy?: idnbi_TermsAndConditionsOrderByWithRelationInput | idnbi_TermsAndConditionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idnbi_TermsAndConditions.
     */
    cursor?: idnbi_TermsAndConditionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_TermsAndConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_TermsAndConditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idnbi_TermsAndConditions.
     */
    distinct?: Idnbi_TermsAndConditionsScalarFieldEnum | Idnbi_TermsAndConditionsScalarFieldEnum[]
  }

  /**
   * idnbi_TermsAndConditions findMany
   */
  export type idnbi_TermsAndConditionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_TermsAndConditions
     */
    select?: idnbi_TermsAndConditionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_TermsAndConditions
     */
    omit?: idnbi_TermsAndConditionsOmit<ExtArgs> | null
    /**
     * Filter, which idnbi_TermsAndConditions to fetch.
     */
    where?: idnbi_TermsAndConditionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_TermsAndConditions to fetch.
     */
    orderBy?: idnbi_TermsAndConditionsOrderByWithRelationInput | idnbi_TermsAndConditionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing idnbi_TermsAndConditions.
     */
    cursor?: idnbi_TermsAndConditionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_TermsAndConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_TermsAndConditions.
     */
    skip?: number
    distinct?: Idnbi_TermsAndConditionsScalarFieldEnum | Idnbi_TermsAndConditionsScalarFieldEnum[]
  }

  /**
   * idnbi_TermsAndConditions create
   */
  export type idnbi_TermsAndConditionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_TermsAndConditions
     */
    select?: idnbi_TermsAndConditionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_TermsAndConditions
     */
    omit?: idnbi_TermsAndConditionsOmit<ExtArgs> | null
    /**
     * The data needed to create a idnbi_TermsAndConditions.
     */
    data: XOR<idnbi_TermsAndConditionsCreateInput, idnbi_TermsAndConditionsUncheckedCreateInput>
  }

  /**
   * idnbi_TermsAndConditions createMany
   */
  export type idnbi_TermsAndConditionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many idnbi_TermsAndConditions.
     */
    data: idnbi_TermsAndConditionsCreateManyInput | idnbi_TermsAndConditionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * idnbi_TermsAndConditions createManyAndReturn
   */
  export type idnbi_TermsAndConditionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_TermsAndConditions
     */
    select?: idnbi_TermsAndConditionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_TermsAndConditions
     */
    omit?: idnbi_TermsAndConditionsOmit<ExtArgs> | null
    /**
     * The data used to create many idnbi_TermsAndConditions.
     */
    data: idnbi_TermsAndConditionsCreateManyInput | idnbi_TermsAndConditionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * idnbi_TermsAndConditions update
   */
  export type idnbi_TermsAndConditionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_TermsAndConditions
     */
    select?: idnbi_TermsAndConditionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_TermsAndConditions
     */
    omit?: idnbi_TermsAndConditionsOmit<ExtArgs> | null
    /**
     * The data needed to update a idnbi_TermsAndConditions.
     */
    data: XOR<idnbi_TermsAndConditionsUpdateInput, idnbi_TermsAndConditionsUncheckedUpdateInput>
    /**
     * Choose, which idnbi_TermsAndConditions to update.
     */
    where: idnbi_TermsAndConditionsWhereUniqueInput
  }

  /**
   * idnbi_TermsAndConditions updateMany
   */
  export type idnbi_TermsAndConditionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update idnbi_TermsAndConditions.
     */
    data: XOR<idnbi_TermsAndConditionsUpdateManyMutationInput, idnbi_TermsAndConditionsUncheckedUpdateManyInput>
    /**
     * Filter which idnbi_TermsAndConditions to update
     */
    where?: idnbi_TermsAndConditionsWhereInput
    /**
     * Limit how many idnbi_TermsAndConditions to update.
     */
    limit?: number
  }

  /**
   * idnbi_TermsAndConditions updateManyAndReturn
   */
  export type idnbi_TermsAndConditionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_TermsAndConditions
     */
    select?: idnbi_TermsAndConditionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_TermsAndConditions
     */
    omit?: idnbi_TermsAndConditionsOmit<ExtArgs> | null
    /**
     * The data used to update idnbi_TermsAndConditions.
     */
    data: XOR<idnbi_TermsAndConditionsUpdateManyMutationInput, idnbi_TermsAndConditionsUncheckedUpdateManyInput>
    /**
     * Filter which idnbi_TermsAndConditions to update
     */
    where?: idnbi_TermsAndConditionsWhereInput
    /**
     * Limit how many idnbi_TermsAndConditions to update.
     */
    limit?: number
  }

  /**
   * idnbi_TermsAndConditions upsert
   */
  export type idnbi_TermsAndConditionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_TermsAndConditions
     */
    select?: idnbi_TermsAndConditionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_TermsAndConditions
     */
    omit?: idnbi_TermsAndConditionsOmit<ExtArgs> | null
    /**
     * The filter to search for the idnbi_TermsAndConditions to update in case it exists.
     */
    where: idnbi_TermsAndConditionsWhereUniqueInput
    /**
     * In case the idnbi_TermsAndConditions found by the `where` argument doesn't exist, create a new idnbi_TermsAndConditions with this data.
     */
    create: XOR<idnbi_TermsAndConditionsCreateInput, idnbi_TermsAndConditionsUncheckedCreateInput>
    /**
     * In case the idnbi_TermsAndConditions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<idnbi_TermsAndConditionsUpdateInput, idnbi_TermsAndConditionsUncheckedUpdateInput>
  }

  /**
   * idnbi_TermsAndConditions delete
   */
  export type idnbi_TermsAndConditionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_TermsAndConditions
     */
    select?: idnbi_TermsAndConditionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_TermsAndConditions
     */
    omit?: idnbi_TermsAndConditionsOmit<ExtArgs> | null
    /**
     * Filter which idnbi_TermsAndConditions to delete.
     */
    where: idnbi_TermsAndConditionsWhereUniqueInput
  }

  /**
   * idnbi_TermsAndConditions deleteMany
   */
  export type idnbi_TermsAndConditionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idnbi_TermsAndConditions to delete
     */
    where?: idnbi_TermsAndConditionsWhereInput
    /**
     * Limit how many idnbi_TermsAndConditions to delete.
     */
    limit?: number
  }

  /**
   * idnbi_TermsAndConditions without action
   */
  export type idnbi_TermsAndConditionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_TermsAndConditions
     */
    select?: idnbi_TermsAndConditionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_TermsAndConditions
     */
    omit?: idnbi_TermsAndConditionsOmit<ExtArgs> | null
  }


  /**
   * Model idnbi_Content
   */

  export type AggregateIdnbi_Content = {
    _count: Idnbi_ContentCountAggregateOutputType | null
    _min: Idnbi_ContentMinAggregateOutputType | null
    _max: Idnbi_ContentMaxAggregateOutputType | null
  }

  export type Idnbi_ContentMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    type: string | null
    content_data: string | null
    created_by_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Idnbi_ContentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    type: string | null
    content_data: string | null
    created_by_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Idnbi_ContentCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    type: number
    content_data: number
    created_by_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Idnbi_ContentMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    type?: true
    content_data?: true
    created_by_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Idnbi_ContentMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    type?: true
    content_data?: true
    created_by_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Idnbi_ContentCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    type?: true
    content_data?: true
    created_by_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Idnbi_ContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idnbi_Content to aggregate.
     */
    where?: idnbi_ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_Contents to fetch.
     */
    orderBy?: idnbi_ContentOrderByWithRelationInput | idnbi_ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: idnbi_ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned idnbi_Contents
    **/
    _count?: true | Idnbi_ContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Idnbi_ContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Idnbi_ContentMaxAggregateInputType
  }

  export type GetIdnbi_ContentAggregateType<T extends Idnbi_ContentAggregateArgs> = {
        [P in keyof T & keyof AggregateIdnbi_Content]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdnbi_Content[P]>
      : GetScalarType<T[P], AggregateIdnbi_Content[P]>
  }




  export type idnbi_ContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: idnbi_ContentWhereInput
    orderBy?: idnbi_ContentOrderByWithAggregationInput | idnbi_ContentOrderByWithAggregationInput[]
    by: Idnbi_ContentScalarFieldEnum[] | Idnbi_ContentScalarFieldEnum
    having?: idnbi_ContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Idnbi_ContentCountAggregateInputType | true
    _min?: Idnbi_ContentMinAggregateInputType
    _max?: Idnbi_ContentMaxAggregateInputType
  }

  export type Idnbi_ContentGroupByOutputType = {
    id: string
    title: string
    slug: string
    type: string
    content_data: string
    created_by_id: string | null
    created_at: Date
    updated_at: Date
    _count: Idnbi_ContentCountAggregateOutputType | null
    _min: Idnbi_ContentMinAggregateOutputType | null
    _max: Idnbi_ContentMaxAggregateOutputType | null
  }

  type GetIdnbi_ContentGroupByPayload<T extends idnbi_ContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Idnbi_ContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Idnbi_ContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Idnbi_ContentGroupByOutputType[P]>
            : GetScalarType<T[P], Idnbi_ContentGroupByOutputType[P]>
        }
      >
    >


  export type idnbi_ContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    type?: boolean
    content_data?: boolean
    created_by_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean | idnbi_Content$created_byArgs<ExtArgs>
  }, ExtArgs["result"]["idnbi_Content"]>

  export type idnbi_ContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    type?: boolean
    content_data?: boolean
    created_by_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean | idnbi_Content$created_byArgs<ExtArgs>
  }, ExtArgs["result"]["idnbi_Content"]>

  export type idnbi_ContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    type?: boolean
    content_data?: boolean
    created_by_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean | idnbi_Content$created_byArgs<ExtArgs>
  }, ExtArgs["result"]["idnbi_Content"]>

  export type idnbi_ContentSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    type?: boolean
    content_data?: boolean
    created_by_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type idnbi_ContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "type" | "content_data" | "created_by_id" | "created_at" | "updated_at", ExtArgs["result"]["idnbi_Content"]>
  export type idnbi_ContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by?: boolean | idnbi_Content$created_byArgs<ExtArgs>
  }
  export type idnbi_ContentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by?: boolean | idnbi_Content$created_byArgs<ExtArgs>
  }
  export type idnbi_ContentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by?: boolean | idnbi_Content$created_byArgs<ExtArgs>
  }

  export type $idnbi_ContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "idnbi_Content"
    objects: {
      created_by: Prisma.$idnbi_UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      type: string
      content_data: string
      created_by_id: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["idnbi_Content"]>
    composites: {}
  }

  type idnbi_ContentGetPayload<S extends boolean | null | undefined | idnbi_ContentDefaultArgs> = $Result.GetResult<Prisma.$idnbi_ContentPayload, S>

  type idnbi_ContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<idnbi_ContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Idnbi_ContentCountAggregateInputType | true
    }

  export interface idnbi_ContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['idnbi_Content'], meta: { name: 'idnbi_Content' } }
    /**
     * Find zero or one Idnbi_Content that matches the filter.
     * @param {idnbi_ContentFindUniqueArgs} args - Arguments to find a Idnbi_Content
     * @example
     * // Get one Idnbi_Content
     * const idnbi_Content = await prisma.idnbi_Content.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends idnbi_ContentFindUniqueArgs>(args: SelectSubset<T, idnbi_ContentFindUniqueArgs<ExtArgs>>): Prisma__idnbi_ContentClient<$Result.GetResult<Prisma.$idnbi_ContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Idnbi_Content that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {idnbi_ContentFindUniqueOrThrowArgs} args - Arguments to find a Idnbi_Content
     * @example
     * // Get one Idnbi_Content
     * const idnbi_Content = await prisma.idnbi_Content.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends idnbi_ContentFindUniqueOrThrowArgs>(args: SelectSubset<T, idnbi_ContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__idnbi_ContentClient<$Result.GetResult<Prisma.$idnbi_ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idnbi_Content that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_ContentFindFirstArgs} args - Arguments to find a Idnbi_Content
     * @example
     * // Get one Idnbi_Content
     * const idnbi_Content = await prisma.idnbi_Content.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends idnbi_ContentFindFirstArgs>(args?: SelectSubset<T, idnbi_ContentFindFirstArgs<ExtArgs>>): Prisma__idnbi_ContentClient<$Result.GetResult<Prisma.$idnbi_ContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idnbi_Content that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_ContentFindFirstOrThrowArgs} args - Arguments to find a Idnbi_Content
     * @example
     * // Get one Idnbi_Content
     * const idnbi_Content = await prisma.idnbi_Content.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends idnbi_ContentFindFirstOrThrowArgs>(args?: SelectSubset<T, idnbi_ContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__idnbi_ContentClient<$Result.GetResult<Prisma.$idnbi_ContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Idnbi_Contents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_ContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Idnbi_Contents
     * const idnbi_Contents = await prisma.idnbi_Content.findMany()
     * 
     * // Get first 10 Idnbi_Contents
     * const idnbi_Contents = await prisma.idnbi_Content.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const idnbi_ContentWithIdOnly = await prisma.idnbi_Content.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends idnbi_ContentFindManyArgs>(args?: SelectSubset<T, idnbi_ContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Idnbi_Content.
     * @param {idnbi_ContentCreateArgs} args - Arguments to create a Idnbi_Content.
     * @example
     * // Create one Idnbi_Content
     * const Idnbi_Content = await prisma.idnbi_Content.create({
     *   data: {
     *     // ... data to create a Idnbi_Content
     *   }
     * })
     * 
     */
    create<T extends idnbi_ContentCreateArgs>(args: SelectSubset<T, idnbi_ContentCreateArgs<ExtArgs>>): Prisma__idnbi_ContentClient<$Result.GetResult<Prisma.$idnbi_ContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Idnbi_Contents.
     * @param {idnbi_ContentCreateManyArgs} args - Arguments to create many Idnbi_Contents.
     * @example
     * // Create many Idnbi_Contents
     * const idnbi_Content = await prisma.idnbi_Content.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends idnbi_ContentCreateManyArgs>(args?: SelectSubset<T, idnbi_ContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Idnbi_Contents and returns the data saved in the database.
     * @param {idnbi_ContentCreateManyAndReturnArgs} args - Arguments to create many Idnbi_Contents.
     * @example
     * // Create many Idnbi_Contents
     * const idnbi_Content = await prisma.idnbi_Content.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Idnbi_Contents and only return the `id`
     * const idnbi_ContentWithIdOnly = await prisma.idnbi_Content.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends idnbi_ContentCreateManyAndReturnArgs>(args?: SelectSubset<T, idnbi_ContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_ContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Idnbi_Content.
     * @param {idnbi_ContentDeleteArgs} args - Arguments to delete one Idnbi_Content.
     * @example
     * // Delete one Idnbi_Content
     * const Idnbi_Content = await prisma.idnbi_Content.delete({
     *   where: {
     *     // ... filter to delete one Idnbi_Content
     *   }
     * })
     * 
     */
    delete<T extends idnbi_ContentDeleteArgs>(args: SelectSubset<T, idnbi_ContentDeleteArgs<ExtArgs>>): Prisma__idnbi_ContentClient<$Result.GetResult<Prisma.$idnbi_ContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Idnbi_Content.
     * @param {idnbi_ContentUpdateArgs} args - Arguments to update one Idnbi_Content.
     * @example
     * // Update one Idnbi_Content
     * const idnbi_Content = await prisma.idnbi_Content.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends idnbi_ContentUpdateArgs>(args: SelectSubset<T, idnbi_ContentUpdateArgs<ExtArgs>>): Prisma__idnbi_ContentClient<$Result.GetResult<Prisma.$idnbi_ContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Idnbi_Contents.
     * @param {idnbi_ContentDeleteManyArgs} args - Arguments to filter Idnbi_Contents to delete.
     * @example
     * // Delete a few Idnbi_Contents
     * const { count } = await prisma.idnbi_Content.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends idnbi_ContentDeleteManyArgs>(args?: SelectSubset<T, idnbi_ContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idnbi_Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_ContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Idnbi_Contents
     * const idnbi_Content = await prisma.idnbi_Content.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends idnbi_ContentUpdateManyArgs>(args: SelectSubset<T, idnbi_ContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idnbi_Contents and returns the data updated in the database.
     * @param {idnbi_ContentUpdateManyAndReturnArgs} args - Arguments to update many Idnbi_Contents.
     * @example
     * // Update many Idnbi_Contents
     * const idnbi_Content = await prisma.idnbi_Content.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Idnbi_Contents and only return the `id`
     * const idnbi_ContentWithIdOnly = await prisma.idnbi_Content.updateManyAndReturn({
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
    updateManyAndReturn<T extends idnbi_ContentUpdateManyAndReturnArgs>(args: SelectSubset<T, idnbi_ContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_ContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Idnbi_Content.
     * @param {idnbi_ContentUpsertArgs} args - Arguments to update or create a Idnbi_Content.
     * @example
     * // Update or create a Idnbi_Content
     * const idnbi_Content = await prisma.idnbi_Content.upsert({
     *   create: {
     *     // ... data to create a Idnbi_Content
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Idnbi_Content we want to update
     *   }
     * })
     */
    upsert<T extends idnbi_ContentUpsertArgs>(args: SelectSubset<T, idnbi_ContentUpsertArgs<ExtArgs>>): Prisma__idnbi_ContentClient<$Result.GetResult<Prisma.$idnbi_ContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Idnbi_Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_ContentCountArgs} args - Arguments to filter Idnbi_Contents to count.
     * @example
     * // Count the number of Idnbi_Contents
     * const count = await prisma.idnbi_Content.count({
     *   where: {
     *     // ... the filter for the Idnbi_Contents we want to count
     *   }
     * })
    **/
    count<T extends idnbi_ContentCountArgs>(
      args?: Subset<T, idnbi_ContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Idnbi_ContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Idnbi_Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Idnbi_ContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Idnbi_ContentAggregateArgs>(args: Subset<T, Idnbi_ContentAggregateArgs>): Prisma.PrismaPromise<GetIdnbi_ContentAggregateType<T>>

    /**
     * Group by Idnbi_Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_ContentGroupByArgs} args - Group by arguments.
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
      T extends idnbi_ContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: idnbi_ContentGroupByArgs['orderBy'] }
        : { orderBy?: idnbi_ContentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, idnbi_ContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdnbi_ContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the idnbi_Content model
   */
  readonly fields: idnbi_ContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for idnbi_Content.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__idnbi_ContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    created_by<T extends idnbi_Content$created_byArgs<ExtArgs> = {}>(args?: Subset<T, idnbi_Content$created_byArgs<ExtArgs>>): Prisma__idnbi_UserClient<$Result.GetResult<Prisma.$idnbi_UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the idnbi_Content model
   */
  interface idnbi_ContentFieldRefs {
    readonly id: FieldRef<"idnbi_Content", 'String'>
    readonly title: FieldRef<"idnbi_Content", 'String'>
    readonly slug: FieldRef<"idnbi_Content", 'String'>
    readonly type: FieldRef<"idnbi_Content", 'String'>
    readonly content_data: FieldRef<"idnbi_Content", 'String'>
    readonly created_by_id: FieldRef<"idnbi_Content", 'String'>
    readonly created_at: FieldRef<"idnbi_Content", 'DateTime'>
    readonly updated_at: FieldRef<"idnbi_Content", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * idnbi_Content findUnique
   */
  export type idnbi_ContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Content
     */
    select?: idnbi_ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Content
     */
    omit?: idnbi_ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_ContentInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_Content to fetch.
     */
    where: idnbi_ContentWhereUniqueInput
  }

  /**
   * idnbi_Content findUniqueOrThrow
   */
  export type idnbi_ContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Content
     */
    select?: idnbi_ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Content
     */
    omit?: idnbi_ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_ContentInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_Content to fetch.
     */
    where: idnbi_ContentWhereUniqueInput
  }

  /**
   * idnbi_Content findFirst
   */
  export type idnbi_ContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Content
     */
    select?: idnbi_ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Content
     */
    omit?: idnbi_ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_ContentInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_Content to fetch.
     */
    where?: idnbi_ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_Contents to fetch.
     */
    orderBy?: idnbi_ContentOrderByWithRelationInput | idnbi_ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idnbi_Contents.
     */
    cursor?: idnbi_ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idnbi_Contents.
     */
    distinct?: Idnbi_ContentScalarFieldEnum | Idnbi_ContentScalarFieldEnum[]
  }

  /**
   * idnbi_Content findFirstOrThrow
   */
  export type idnbi_ContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Content
     */
    select?: idnbi_ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Content
     */
    omit?: idnbi_ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_ContentInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_Content to fetch.
     */
    where?: idnbi_ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_Contents to fetch.
     */
    orderBy?: idnbi_ContentOrderByWithRelationInput | idnbi_ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idnbi_Contents.
     */
    cursor?: idnbi_ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idnbi_Contents.
     */
    distinct?: Idnbi_ContentScalarFieldEnum | Idnbi_ContentScalarFieldEnum[]
  }

  /**
   * idnbi_Content findMany
   */
  export type idnbi_ContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Content
     */
    select?: idnbi_ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Content
     */
    omit?: idnbi_ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_ContentInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_Contents to fetch.
     */
    where?: idnbi_ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_Contents to fetch.
     */
    orderBy?: idnbi_ContentOrderByWithRelationInput | idnbi_ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing idnbi_Contents.
     */
    cursor?: idnbi_ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_Contents.
     */
    skip?: number
    distinct?: Idnbi_ContentScalarFieldEnum | Idnbi_ContentScalarFieldEnum[]
  }

  /**
   * idnbi_Content create
   */
  export type idnbi_ContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Content
     */
    select?: idnbi_ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Content
     */
    omit?: idnbi_ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_ContentInclude<ExtArgs> | null
    /**
     * The data needed to create a idnbi_Content.
     */
    data: XOR<idnbi_ContentCreateInput, idnbi_ContentUncheckedCreateInput>
  }

  /**
   * idnbi_Content createMany
   */
  export type idnbi_ContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many idnbi_Contents.
     */
    data: idnbi_ContentCreateManyInput | idnbi_ContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * idnbi_Content createManyAndReturn
   */
  export type idnbi_ContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Content
     */
    select?: idnbi_ContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Content
     */
    omit?: idnbi_ContentOmit<ExtArgs> | null
    /**
     * The data used to create many idnbi_Contents.
     */
    data: idnbi_ContentCreateManyInput | idnbi_ContentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_ContentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * idnbi_Content update
   */
  export type idnbi_ContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Content
     */
    select?: idnbi_ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Content
     */
    omit?: idnbi_ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_ContentInclude<ExtArgs> | null
    /**
     * The data needed to update a idnbi_Content.
     */
    data: XOR<idnbi_ContentUpdateInput, idnbi_ContentUncheckedUpdateInput>
    /**
     * Choose, which idnbi_Content to update.
     */
    where: idnbi_ContentWhereUniqueInput
  }

  /**
   * idnbi_Content updateMany
   */
  export type idnbi_ContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update idnbi_Contents.
     */
    data: XOR<idnbi_ContentUpdateManyMutationInput, idnbi_ContentUncheckedUpdateManyInput>
    /**
     * Filter which idnbi_Contents to update
     */
    where?: idnbi_ContentWhereInput
    /**
     * Limit how many idnbi_Contents to update.
     */
    limit?: number
  }

  /**
   * idnbi_Content updateManyAndReturn
   */
  export type idnbi_ContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Content
     */
    select?: idnbi_ContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Content
     */
    omit?: idnbi_ContentOmit<ExtArgs> | null
    /**
     * The data used to update idnbi_Contents.
     */
    data: XOR<idnbi_ContentUpdateManyMutationInput, idnbi_ContentUncheckedUpdateManyInput>
    /**
     * Filter which idnbi_Contents to update
     */
    where?: idnbi_ContentWhereInput
    /**
     * Limit how many idnbi_Contents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_ContentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * idnbi_Content upsert
   */
  export type idnbi_ContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Content
     */
    select?: idnbi_ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Content
     */
    omit?: idnbi_ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_ContentInclude<ExtArgs> | null
    /**
     * The filter to search for the idnbi_Content to update in case it exists.
     */
    where: idnbi_ContentWhereUniqueInput
    /**
     * In case the idnbi_Content found by the `where` argument doesn't exist, create a new idnbi_Content with this data.
     */
    create: XOR<idnbi_ContentCreateInput, idnbi_ContentUncheckedCreateInput>
    /**
     * In case the idnbi_Content was found with the provided `where` argument, update it with this data.
     */
    update: XOR<idnbi_ContentUpdateInput, idnbi_ContentUncheckedUpdateInput>
  }

  /**
   * idnbi_Content delete
   */
  export type idnbi_ContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Content
     */
    select?: idnbi_ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Content
     */
    omit?: idnbi_ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_ContentInclude<ExtArgs> | null
    /**
     * Filter which idnbi_Content to delete.
     */
    where: idnbi_ContentWhereUniqueInput
  }

  /**
   * idnbi_Content deleteMany
   */
  export type idnbi_ContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idnbi_Contents to delete
     */
    where?: idnbi_ContentWhereInput
    /**
     * Limit how many idnbi_Contents to delete.
     */
    limit?: number
  }

  /**
   * idnbi_Content.created_by
   */
  export type idnbi_Content$created_byArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_User
     */
    select?: idnbi_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_User
     */
    omit?: idnbi_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserInclude<ExtArgs> | null
    where?: idnbi_UserWhereInput
  }

  /**
   * idnbi_Content without action
   */
  export type idnbi_ContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Content
     */
    select?: idnbi_ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Content
     */
    omit?: idnbi_ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_ContentInclude<ExtArgs> | null
  }


  /**
   * Model idnbi_MenuItem
   */

  export type AggregateIdnbi_MenuItem = {
    _count: Idnbi_MenuItemCountAggregateOutputType | null
    _avg: Idnbi_MenuItemAvgAggregateOutputType | null
    _sum: Idnbi_MenuItemSumAggregateOutputType | null
    _min: Idnbi_MenuItemMinAggregateOutputType | null
    _max: Idnbi_MenuItemMaxAggregateOutputType | null
  }

  export type Idnbi_MenuItemAvgAggregateOutputType = {
    order: number | null
  }

  export type Idnbi_MenuItemSumAggregateOutputType = {
    order: number | null
  }

  export type Idnbi_MenuItemMinAggregateOutputType = {
    id: string | null
    title: string | null
    parent_id: string | null
    order: number | null
    icon_class: string | null
    type: string | null
    target_url: string | null
    content_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Idnbi_MenuItemMaxAggregateOutputType = {
    id: string | null
    title: string | null
    parent_id: string | null
    order: number | null
    icon_class: string | null
    type: string | null
    target_url: string | null
    content_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Idnbi_MenuItemCountAggregateOutputType = {
    id: number
    title: number
    parent_id: number
    order: number
    icon_class: number
    type: number
    target_url: number
    content_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Idnbi_MenuItemAvgAggregateInputType = {
    order?: true
  }

  export type Idnbi_MenuItemSumAggregateInputType = {
    order?: true
  }

  export type Idnbi_MenuItemMinAggregateInputType = {
    id?: true
    title?: true
    parent_id?: true
    order?: true
    icon_class?: true
    type?: true
    target_url?: true
    content_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Idnbi_MenuItemMaxAggregateInputType = {
    id?: true
    title?: true
    parent_id?: true
    order?: true
    icon_class?: true
    type?: true
    target_url?: true
    content_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Idnbi_MenuItemCountAggregateInputType = {
    id?: true
    title?: true
    parent_id?: true
    order?: true
    icon_class?: true
    type?: true
    target_url?: true
    content_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Idnbi_MenuItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idnbi_MenuItem to aggregate.
     */
    where?: idnbi_MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_MenuItems to fetch.
     */
    orderBy?: idnbi_MenuItemOrderByWithRelationInput | idnbi_MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: idnbi_MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned idnbi_MenuItems
    **/
    _count?: true | Idnbi_MenuItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Idnbi_MenuItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Idnbi_MenuItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Idnbi_MenuItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Idnbi_MenuItemMaxAggregateInputType
  }

  export type GetIdnbi_MenuItemAggregateType<T extends Idnbi_MenuItemAggregateArgs> = {
        [P in keyof T & keyof AggregateIdnbi_MenuItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdnbi_MenuItem[P]>
      : GetScalarType<T[P], AggregateIdnbi_MenuItem[P]>
  }




  export type idnbi_MenuItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: idnbi_MenuItemWhereInput
    orderBy?: idnbi_MenuItemOrderByWithAggregationInput | idnbi_MenuItemOrderByWithAggregationInput[]
    by: Idnbi_MenuItemScalarFieldEnum[] | Idnbi_MenuItemScalarFieldEnum
    having?: idnbi_MenuItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Idnbi_MenuItemCountAggregateInputType | true
    _avg?: Idnbi_MenuItemAvgAggregateInputType
    _sum?: Idnbi_MenuItemSumAggregateInputType
    _min?: Idnbi_MenuItemMinAggregateInputType
    _max?: Idnbi_MenuItemMaxAggregateInputType
  }

  export type Idnbi_MenuItemGroupByOutputType = {
    id: string
    title: string
    parent_id: string | null
    order: number
    icon_class: string | null
    type: string
    target_url: string | null
    content_id: string | null
    created_at: Date
    updated_at: Date
    _count: Idnbi_MenuItemCountAggregateOutputType | null
    _avg: Idnbi_MenuItemAvgAggregateOutputType | null
    _sum: Idnbi_MenuItemSumAggregateOutputType | null
    _min: Idnbi_MenuItemMinAggregateOutputType | null
    _max: Idnbi_MenuItemMaxAggregateOutputType | null
  }

  type GetIdnbi_MenuItemGroupByPayload<T extends idnbi_MenuItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Idnbi_MenuItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Idnbi_MenuItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Idnbi_MenuItemGroupByOutputType[P]>
            : GetScalarType<T[P], Idnbi_MenuItemGroupByOutputType[P]>
        }
      >
    >


  export type idnbi_MenuItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    parent_id?: boolean
    order?: boolean
    icon_class?: boolean
    type?: boolean
    target_url?: boolean
    content_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    parent?: boolean | idnbi_MenuItem$parentArgs<ExtArgs>
    children?: boolean | idnbi_MenuItem$childrenArgs<ExtArgs>
    roles?: boolean | idnbi_MenuItem$rolesArgs<ExtArgs>
    _count?: boolean | Idnbi_MenuItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idnbi_MenuItem"]>

  export type idnbi_MenuItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    parent_id?: boolean
    order?: boolean
    icon_class?: boolean
    type?: boolean
    target_url?: boolean
    content_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    parent?: boolean | idnbi_MenuItem$parentArgs<ExtArgs>
  }, ExtArgs["result"]["idnbi_MenuItem"]>

  export type idnbi_MenuItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    parent_id?: boolean
    order?: boolean
    icon_class?: boolean
    type?: boolean
    target_url?: boolean
    content_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    parent?: boolean | idnbi_MenuItem$parentArgs<ExtArgs>
  }, ExtArgs["result"]["idnbi_MenuItem"]>

  export type idnbi_MenuItemSelectScalar = {
    id?: boolean
    title?: boolean
    parent_id?: boolean
    order?: boolean
    icon_class?: boolean
    type?: boolean
    target_url?: boolean
    content_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type idnbi_MenuItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "parent_id" | "order" | "icon_class" | "type" | "target_url" | "content_id" | "created_at" | "updated_at", ExtArgs["result"]["idnbi_MenuItem"]>
  export type idnbi_MenuItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | idnbi_MenuItem$parentArgs<ExtArgs>
    children?: boolean | idnbi_MenuItem$childrenArgs<ExtArgs>
    roles?: boolean | idnbi_MenuItem$rolesArgs<ExtArgs>
    _count?: boolean | Idnbi_MenuItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type idnbi_MenuItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | idnbi_MenuItem$parentArgs<ExtArgs>
  }
  export type idnbi_MenuItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | idnbi_MenuItem$parentArgs<ExtArgs>
  }

  export type $idnbi_MenuItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "idnbi_MenuItem"
    objects: {
      parent: Prisma.$idnbi_MenuItemPayload<ExtArgs> | null
      children: Prisma.$idnbi_MenuItemPayload<ExtArgs>[]
      roles: Prisma.$idnbi_MenuRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      parent_id: string | null
      order: number
      icon_class: string | null
      type: string
      target_url: string | null
      content_id: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["idnbi_MenuItem"]>
    composites: {}
  }

  type idnbi_MenuItemGetPayload<S extends boolean | null | undefined | idnbi_MenuItemDefaultArgs> = $Result.GetResult<Prisma.$idnbi_MenuItemPayload, S>

  type idnbi_MenuItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<idnbi_MenuItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Idnbi_MenuItemCountAggregateInputType | true
    }

  export interface idnbi_MenuItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['idnbi_MenuItem'], meta: { name: 'idnbi_MenuItem' } }
    /**
     * Find zero or one Idnbi_MenuItem that matches the filter.
     * @param {idnbi_MenuItemFindUniqueArgs} args - Arguments to find a Idnbi_MenuItem
     * @example
     * // Get one Idnbi_MenuItem
     * const idnbi_MenuItem = await prisma.idnbi_MenuItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends idnbi_MenuItemFindUniqueArgs>(args: SelectSubset<T, idnbi_MenuItemFindUniqueArgs<ExtArgs>>): Prisma__idnbi_MenuItemClient<$Result.GetResult<Prisma.$idnbi_MenuItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Idnbi_MenuItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {idnbi_MenuItemFindUniqueOrThrowArgs} args - Arguments to find a Idnbi_MenuItem
     * @example
     * // Get one Idnbi_MenuItem
     * const idnbi_MenuItem = await prisma.idnbi_MenuItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends idnbi_MenuItemFindUniqueOrThrowArgs>(args: SelectSubset<T, idnbi_MenuItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__idnbi_MenuItemClient<$Result.GetResult<Prisma.$idnbi_MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idnbi_MenuItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_MenuItemFindFirstArgs} args - Arguments to find a Idnbi_MenuItem
     * @example
     * // Get one Idnbi_MenuItem
     * const idnbi_MenuItem = await prisma.idnbi_MenuItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends idnbi_MenuItemFindFirstArgs>(args?: SelectSubset<T, idnbi_MenuItemFindFirstArgs<ExtArgs>>): Prisma__idnbi_MenuItemClient<$Result.GetResult<Prisma.$idnbi_MenuItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idnbi_MenuItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_MenuItemFindFirstOrThrowArgs} args - Arguments to find a Idnbi_MenuItem
     * @example
     * // Get one Idnbi_MenuItem
     * const idnbi_MenuItem = await prisma.idnbi_MenuItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends idnbi_MenuItemFindFirstOrThrowArgs>(args?: SelectSubset<T, idnbi_MenuItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__idnbi_MenuItemClient<$Result.GetResult<Prisma.$idnbi_MenuItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Idnbi_MenuItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_MenuItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Idnbi_MenuItems
     * const idnbi_MenuItems = await prisma.idnbi_MenuItem.findMany()
     * 
     * // Get first 10 Idnbi_MenuItems
     * const idnbi_MenuItems = await prisma.idnbi_MenuItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const idnbi_MenuItemWithIdOnly = await prisma.idnbi_MenuItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends idnbi_MenuItemFindManyArgs>(args?: SelectSubset<T, idnbi_MenuItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_MenuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Idnbi_MenuItem.
     * @param {idnbi_MenuItemCreateArgs} args - Arguments to create a Idnbi_MenuItem.
     * @example
     * // Create one Idnbi_MenuItem
     * const Idnbi_MenuItem = await prisma.idnbi_MenuItem.create({
     *   data: {
     *     // ... data to create a Idnbi_MenuItem
     *   }
     * })
     * 
     */
    create<T extends idnbi_MenuItemCreateArgs>(args: SelectSubset<T, idnbi_MenuItemCreateArgs<ExtArgs>>): Prisma__idnbi_MenuItemClient<$Result.GetResult<Prisma.$idnbi_MenuItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Idnbi_MenuItems.
     * @param {idnbi_MenuItemCreateManyArgs} args - Arguments to create many Idnbi_MenuItems.
     * @example
     * // Create many Idnbi_MenuItems
     * const idnbi_MenuItem = await prisma.idnbi_MenuItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends idnbi_MenuItemCreateManyArgs>(args?: SelectSubset<T, idnbi_MenuItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Idnbi_MenuItems and returns the data saved in the database.
     * @param {idnbi_MenuItemCreateManyAndReturnArgs} args - Arguments to create many Idnbi_MenuItems.
     * @example
     * // Create many Idnbi_MenuItems
     * const idnbi_MenuItem = await prisma.idnbi_MenuItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Idnbi_MenuItems and only return the `id`
     * const idnbi_MenuItemWithIdOnly = await prisma.idnbi_MenuItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends idnbi_MenuItemCreateManyAndReturnArgs>(args?: SelectSubset<T, idnbi_MenuItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_MenuItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Idnbi_MenuItem.
     * @param {idnbi_MenuItemDeleteArgs} args - Arguments to delete one Idnbi_MenuItem.
     * @example
     * // Delete one Idnbi_MenuItem
     * const Idnbi_MenuItem = await prisma.idnbi_MenuItem.delete({
     *   where: {
     *     // ... filter to delete one Idnbi_MenuItem
     *   }
     * })
     * 
     */
    delete<T extends idnbi_MenuItemDeleteArgs>(args: SelectSubset<T, idnbi_MenuItemDeleteArgs<ExtArgs>>): Prisma__idnbi_MenuItemClient<$Result.GetResult<Prisma.$idnbi_MenuItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Idnbi_MenuItem.
     * @param {idnbi_MenuItemUpdateArgs} args - Arguments to update one Idnbi_MenuItem.
     * @example
     * // Update one Idnbi_MenuItem
     * const idnbi_MenuItem = await prisma.idnbi_MenuItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends idnbi_MenuItemUpdateArgs>(args: SelectSubset<T, idnbi_MenuItemUpdateArgs<ExtArgs>>): Prisma__idnbi_MenuItemClient<$Result.GetResult<Prisma.$idnbi_MenuItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Idnbi_MenuItems.
     * @param {idnbi_MenuItemDeleteManyArgs} args - Arguments to filter Idnbi_MenuItems to delete.
     * @example
     * // Delete a few Idnbi_MenuItems
     * const { count } = await prisma.idnbi_MenuItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends idnbi_MenuItemDeleteManyArgs>(args?: SelectSubset<T, idnbi_MenuItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idnbi_MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_MenuItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Idnbi_MenuItems
     * const idnbi_MenuItem = await prisma.idnbi_MenuItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends idnbi_MenuItemUpdateManyArgs>(args: SelectSubset<T, idnbi_MenuItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idnbi_MenuItems and returns the data updated in the database.
     * @param {idnbi_MenuItemUpdateManyAndReturnArgs} args - Arguments to update many Idnbi_MenuItems.
     * @example
     * // Update many Idnbi_MenuItems
     * const idnbi_MenuItem = await prisma.idnbi_MenuItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Idnbi_MenuItems and only return the `id`
     * const idnbi_MenuItemWithIdOnly = await prisma.idnbi_MenuItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends idnbi_MenuItemUpdateManyAndReturnArgs>(args: SelectSubset<T, idnbi_MenuItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_MenuItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Idnbi_MenuItem.
     * @param {idnbi_MenuItemUpsertArgs} args - Arguments to update or create a Idnbi_MenuItem.
     * @example
     * // Update or create a Idnbi_MenuItem
     * const idnbi_MenuItem = await prisma.idnbi_MenuItem.upsert({
     *   create: {
     *     // ... data to create a Idnbi_MenuItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Idnbi_MenuItem we want to update
     *   }
     * })
     */
    upsert<T extends idnbi_MenuItemUpsertArgs>(args: SelectSubset<T, idnbi_MenuItemUpsertArgs<ExtArgs>>): Prisma__idnbi_MenuItemClient<$Result.GetResult<Prisma.$idnbi_MenuItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Idnbi_MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_MenuItemCountArgs} args - Arguments to filter Idnbi_MenuItems to count.
     * @example
     * // Count the number of Idnbi_MenuItems
     * const count = await prisma.idnbi_MenuItem.count({
     *   where: {
     *     // ... the filter for the Idnbi_MenuItems we want to count
     *   }
     * })
    **/
    count<T extends idnbi_MenuItemCountArgs>(
      args?: Subset<T, idnbi_MenuItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Idnbi_MenuItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Idnbi_MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Idnbi_MenuItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Idnbi_MenuItemAggregateArgs>(args: Subset<T, Idnbi_MenuItemAggregateArgs>): Prisma.PrismaPromise<GetIdnbi_MenuItemAggregateType<T>>

    /**
     * Group by Idnbi_MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_MenuItemGroupByArgs} args - Group by arguments.
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
      T extends idnbi_MenuItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: idnbi_MenuItemGroupByArgs['orderBy'] }
        : { orderBy?: idnbi_MenuItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, idnbi_MenuItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdnbi_MenuItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the idnbi_MenuItem model
   */
  readonly fields: idnbi_MenuItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for idnbi_MenuItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__idnbi_MenuItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends idnbi_MenuItem$parentArgs<ExtArgs> = {}>(args?: Subset<T, idnbi_MenuItem$parentArgs<ExtArgs>>): Prisma__idnbi_MenuItemClient<$Result.GetResult<Prisma.$idnbi_MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends idnbi_MenuItem$childrenArgs<ExtArgs> = {}>(args?: Subset<T, idnbi_MenuItem$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_MenuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roles<T extends idnbi_MenuItem$rolesArgs<ExtArgs> = {}>(args?: Subset<T, idnbi_MenuItem$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_MenuRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the idnbi_MenuItem model
   */
  interface idnbi_MenuItemFieldRefs {
    readonly id: FieldRef<"idnbi_MenuItem", 'String'>
    readonly title: FieldRef<"idnbi_MenuItem", 'String'>
    readonly parent_id: FieldRef<"idnbi_MenuItem", 'String'>
    readonly order: FieldRef<"idnbi_MenuItem", 'Int'>
    readonly icon_class: FieldRef<"idnbi_MenuItem", 'String'>
    readonly type: FieldRef<"idnbi_MenuItem", 'String'>
    readonly target_url: FieldRef<"idnbi_MenuItem", 'String'>
    readonly content_id: FieldRef<"idnbi_MenuItem", 'String'>
    readonly created_at: FieldRef<"idnbi_MenuItem", 'DateTime'>
    readonly updated_at: FieldRef<"idnbi_MenuItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * idnbi_MenuItem findUnique
   */
  export type idnbi_MenuItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_MenuItem
     */
    select?: idnbi_MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_MenuItem
     */
    omit?: idnbi_MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_MenuItem to fetch.
     */
    where: idnbi_MenuItemWhereUniqueInput
  }

  /**
   * idnbi_MenuItem findUniqueOrThrow
   */
  export type idnbi_MenuItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_MenuItem
     */
    select?: idnbi_MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_MenuItem
     */
    omit?: idnbi_MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_MenuItem to fetch.
     */
    where: idnbi_MenuItemWhereUniqueInput
  }

  /**
   * idnbi_MenuItem findFirst
   */
  export type idnbi_MenuItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_MenuItem
     */
    select?: idnbi_MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_MenuItem
     */
    omit?: idnbi_MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_MenuItem to fetch.
     */
    where?: idnbi_MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_MenuItems to fetch.
     */
    orderBy?: idnbi_MenuItemOrderByWithRelationInput | idnbi_MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idnbi_MenuItems.
     */
    cursor?: idnbi_MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idnbi_MenuItems.
     */
    distinct?: Idnbi_MenuItemScalarFieldEnum | Idnbi_MenuItemScalarFieldEnum[]
  }

  /**
   * idnbi_MenuItem findFirstOrThrow
   */
  export type idnbi_MenuItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_MenuItem
     */
    select?: idnbi_MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_MenuItem
     */
    omit?: idnbi_MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_MenuItem to fetch.
     */
    where?: idnbi_MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_MenuItems to fetch.
     */
    orderBy?: idnbi_MenuItemOrderByWithRelationInput | idnbi_MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idnbi_MenuItems.
     */
    cursor?: idnbi_MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idnbi_MenuItems.
     */
    distinct?: Idnbi_MenuItemScalarFieldEnum | Idnbi_MenuItemScalarFieldEnum[]
  }

  /**
   * idnbi_MenuItem findMany
   */
  export type idnbi_MenuItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_MenuItem
     */
    select?: idnbi_MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_MenuItem
     */
    omit?: idnbi_MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_MenuItems to fetch.
     */
    where?: idnbi_MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_MenuItems to fetch.
     */
    orderBy?: idnbi_MenuItemOrderByWithRelationInput | idnbi_MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing idnbi_MenuItems.
     */
    cursor?: idnbi_MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_MenuItems.
     */
    skip?: number
    distinct?: Idnbi_MenuItemScalarFieldEnum | Idnbi_MenuItemScalarFieldEnum[]
  }

  /**
   * idnbi_MenuItem create
   */
  export type idnbi_MenuItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_MenuItem
     */
    select?: idnbi_MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_MenuItem
     */
    omit?: idnbi_MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_MenuItemInclude<ExtArgs> | null
    /**
     * The data needed to create a idnbi_MenuItem.
     */
    data: XOR<idnbi_MenuItemCreateInput, idnbi_MenuItemUncheckedCreateInput>
  }

  /**
   * idnbi_MenuItem createMany
   */
  export type idnbi_MenuItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many idnbi_MenuItems.
     */
    data: idnbi_MenuItemCreateManyInput | idnbi_MenuItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * idnbi_MenuItem createManyAndReturn
   */
  export type idnbi_MenuItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_MenuItem
     */
    select?: idnbi_MenuItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_MenuItem
     */
    omit?: idnbi_MenuItemOmit<ExtArgs> | null
    /**
     * The data used to create many idnbi_MenuItems.
     */
    data: idnbi_MenuItemCreateManyInput | idnbi_MenuItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_MenuItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * idnbi_MenuItem update
   */
  export type idnbi_MenuItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_MenuItem
     */
    select?: idnbi_MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_MenuItem
     */
    omit?: idnbi_MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_MenuItemInclude<ExtArgs> | null
    /**
     * The data needed to update a idnbi_MenuItem.
     */
    data: XOR<idnbi_MenuItemUpdateInput, idnbi_MenuItemUncheckedUpdateInput>
    /**
     * Choose, which idnbi_MenuItem to update.
     */
    where: idnbi_MenuItemWhereUniqueInput
  }

  /**
   * idnbi_MenuItem updateMany
   */
  export type idnbi_MenuItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update idnbi_MenuItems.
     */
    data: XOR<idnbi_MenuItemUpdateManyMutationInput, idnbi_MenuItemUncheckedUpdateManyInput>
    /**
     * Filter which idnbi_MenuItems to update
     */
    where?: idnbi_MenuItemWhereInput
    /**
     * Limit how many idnbi_MenuItems to update.
     */
    limit?: number
  }

  /**
   * idnbi_MenuItem updateManyAndReturn
   */
  export type idnbi_MenuItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_MenuItem
     */
    select?: idnbi_MenuItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_MenuItem
     */
    omit?: idnbi_MenuItemOmit<ExtArgs> | null
    /**
     * The data used to update idnbi_MenuItems.
     */
    data: XOR<idnbi_MenuItemUpdateManyMutationInput, idnbi_MenuItemUncheckedUpdateManyInput>
    /**
     * Filter which idnbi_MenuItems to update
     */
    where?: idnbi_MenuItemWhereInput
    /**
     * Limit how many idnbi_MenuItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_MenuItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * idnbi_MenuItem upsert
   */
  export type idnbi_MenuItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_MenuItem
     */
    select?: idnbi_MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_MenuItem
     */
    omit?: idnbi_MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_MenuItemInclude<ExtArgs> | null
    /**
     * The filter to search for the idnbi_MenuItem to update in case it exists.
     */
    where: idnbi_MenuItemWhereUniqueInput
    /**
     * In case the idnbi_MenuItem found by the `where` argument doesn't exist, create a new idnbi_MenuItem with this data.
     */
    create: XOR<idnbi_MenuItemCreateInput, idnbi_MenuItemUncheckedCreateInput>
    /**
     * In case the idnbi_MenuItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<idnbi_MenuItemUpdateInput, idnbi_MenuItemUncheckedUpdateInput>
  }

  /**
   * idnbi_MenuItem delete
   */
  export type idnbi_MenuItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_MenuItem
     */
    select?: idnbi_MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_MenuItem
     */
    omit?: idnbi_MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_MenuItemInclude<ExtArgs> | null
    /**
     * Filter which idnbi_MenuItem to delete.
     */
    where: idnbi_MenuItemWhereUniqueInput
  }

  /**
   * idnbi_MenuItem deleteMany
   */
  export type idnbi_MenuItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idnbi_MenuItems to delete
     */
    where?: idnbi_MenuItemWhereInput
    /**
     * Limit how many idnbi_MenuItems to delete.
     */
    limit?: number
  }

  /**
   * idnbi_MenuItem.parent
   */
  export type idnbi_MenuItem$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_MenuItem
     */
    select?: idnbi_MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_MenuItem
     */
    omit?: idnbi_MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_MenuItemInclude<ExtArgs> | null
    where?: idnbi_MenuItemWhereInput
  }

  /**
   * idnbi_MenuItem.children
   */
  export type idnbi_MenuItem$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_MenuItem
     */
    select?: idnbi_MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_MenuItem
     */
    omit?: idnbi_MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_MenuItemInclude<ExtArgs> | null
    where?: idnbi_MenuItemWhereInput
    orderBy?: idnbi_MenuItemOrderByWithRelationInput | idnbi_MenuItemOrderByWithRelationInput[]
    cursor?: idnbi_MenuItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Idnbi_MenuItemScalarFieldEnum | Idnbi_MenuItemScalarFieldEnum[]
  }

  /**
   * idnbi_MenuItem.roles
   */
  export type idnbi_MenuItem$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_MenuRole
     */
    select?: idnbi_MenuRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_MenuRole
     */
    omit?: idnbi_MenuRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_MenuRoleInclude<ExtArgs> | null
    where?: idnbi_MenuRoleWhereInput
    orderBy?: idnbi_MenuRoleOrderByWithRelationInput | idnbi_MenuRoleOrderByWithRelationInput[]
    cursor?: idnbi_MenuRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Idnbi_MenuRoleScalarFieldEnum | Idnbi_MenuRoleScalarFieldEnum[]
  }

  /**
   * idnbi_MenuItem without action
   */
  export type idnbi_MenuItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_MenuItem
     */
    select?: idnbi_MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_MenuItem
     */
    omit?: idnbi_MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_MenuItemInclude<ExtArgs> | null
  }


  /**
   * Model idnbi_MenuRole
   */

  export type AggregateIdnbi_MenuRole = {
    _count: Idnbi_MenuRoleCountAggregateOutputType | null
    _min: Idnbi_MenuRoleMinAggregateOutputType | null
    _max: Idnbi_MenuRoleMaxAggregateOutputType | null
  }

  export type Idnbi_MenuRoleMinAggregateOutputType = {
    menuId: string | null
    roleId: string | null
    created_at: Date | null
  }

  export type Idnbi_MenuRoleMaxAggregateOutputType = {
    menuId: string | null
    roleId: string | null
    created_at: Date | null
  }

  export type Idnbi_MenuRoleCountAggregateOutputType = {
    menuId: number
    roleId: number
    created_at: number
    _all: number
  }


  export type Idnbi_MenuRoleMinAggregateInputType = {
    menuId?: true
    roleId?: true
    created_at?: true
  }

  export type Idnbi_MenuRoleMaxAggregateInputType = {
    menuId?: true
    roleId?: true
    created_at?: true
  }

  export type Idnbi_MenuRoleCountAggregateInputType = {
    menuId?: true
    roleId?: true
    created_at?: true
    _all?: true
  }

  export type Idnbi_MenuRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idnbi_MenuRole to aggregate.
     */
    where?: idnbi_MenuRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_MenuRoles to fetch.
     */
    orderBy?: idnbi_MenuRoleOrderByWithRelationInput | idnbi_MenuRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: idnbi_MenuRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_MenuRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_MenuRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned idnbi_MenuRoles
    **/
    _count?: true | Idnbi_MenuRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Idnbi_MenuRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Idnbi_MenuRoleMaxAggregateInputType
  }

  export type GetIdnbi_MenuRoleAggregateType<T extends Idnbi_MenuRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateIdnbi_MenuRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdnbi_MenuRole[P]>
      : GetScalarType<T[P], AggregateIdnbi_MenuRole[P]>
  }




  export type idnbi_MenuRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: idnbi_MenuRoleWhereInput
    orderBy?: idnbi_MenuRoleOrderByWithAggregationInput | idnbi_MenuRoleOrderByWithAggregationInput[]
    by: Idnbi_MenuRoleScalarFieldEnum[] | Idnbi_MenuRoleScalarFieldEnum
    having?: idnbi_MenuRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Idnbi_MenuRoleCountAggregateInputType | true
    _min?: Idnbi_MenuRoleMinAggregateInputType
    _max?: Idnbi_MenuRoleMaxAggregateInputType
  }

  export type Idnbi_MenuRoleGroupByOutputType = {
    menuId: string
    roleId: string
    created_at: Date
    _count: Idnbi_MenuRoleCountAggregateOutputType | null
    _min: Idnbi_MenuRoleMinAggregateOutputType | null
    _max: Idnbi_MenuRoleMaxAggregateOutputType | null
  }

  type GetIdnbi_MenuRoleGroupByPayload<T extends idnbi_MenuRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Idnbi_MenuRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Idnbi_MenuRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Idnbi_MenuRoleGroupByOutputType[P]>
            : GetScalarType<T[P], Idnbi_MenuRoleGroupByOutputType[P]>
        }
      >
    >


  export type idnbi_MenuRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    menuId?: boolean
    roleId?: boolean
    created_at?: boolean
    menu?: boolean | idnbi_MenuItemDefaultArgs<ExtArgs>
    role?: boolean | idnbi_RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idnbi_MenuRole"]>

  export type idnbi_MenuRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    menuId?: boolean
    roleId?: boolean
    created_at?: boolean
    menu?: boolean | idnbi_MenuItemDefaultArgs<ExtArgs>
    role?: boolean | idnbi_RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idnbi_MenuRole"]>

  export type idnbi_MenuRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    menuId?: boolean
    roleId?: boolean
    created_at?: boolean
    menu?: boolean | idnbi_MenuItemDefaultArgs<ExtArgs>
    role?: boolean | idnbi_RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idnbi_MenuRole"]>

  export type idnbi_MenuRoleSelectScalar = {
    menuId?: boolean
    roleId?: boolean
    created_at?: boolean
  }

  export type idnbi_MenuRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"menuId" | "roleId" | "created_at", ExtArgs["result"]["idnbi_MenuRole"]>
  export type idnbi_MenuRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | idnbi_MenuItemDefaultArgs<ExtArgs>
    role?: boolean | idnbi_RoleDefaultArgs<ExtArgs>
  }
  export type idnbi_MenuRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | idnbi_MenuItemDefaultArgs<ExtArgs>
    role?: boolean | idnbi_RoleDefaultArgs<ExtArgs>
  }
  export type idnbi_MenuRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | idnbi_MenuItemDefaultArgs<ExtArgs>
    role?: boolean | idnbi_RoleDefaultArgs<ExtArgs>
  }

  export type $idnbi_MenuRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "idnbi_MenuRole"
    objects: {
      menu: Prisma.$idnbi_MenuItemPayload<ExtArgs>
      role: Prisma.$idnbi_RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      menuId: string
      roleId: string
      created_at: Date
    }, ExtArgs["result"]["idnbi_MenuRole"]>
    composites: {}
  }

  type idnbi_MenuRoleGetPayload<S extends boolean | null | undefined | idnbi_MenuRoleDefaultArgs> = $Result.GetResult<Prisma.$idnbi_MenuRolePayload, S>

  type idnbi_MenuRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<idnbi_MenuRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Idnbi_MenuRoleCountAggregateInputType | true
    }

  export interface idnbi_MenuRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['idnbi_MenuRole'], meta: { name: 'idnbi_MenuRole' } }
    /**
     * Find zero or one Idnbi_MenuRole that matches the filter.
     * @param {idnbi_MenuRoleFindUniqueArgs} args - Arguments to find a Idnbi_MenuRole
     * @example
     * // Get one Idnbi_MenuRole
     * const idnbi_MenuRole = await prisma.idnbi_MenuRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends idnbi_MenuRoleFindUniqueArgs>(args: SelectSubset<T, idnbi_MenuRoleFindUniqueArgs<ExtArgs>>): Prisma__idnbi_MenuRoleClient<$Result.GetResult<Prisma.$idnbi_MenuRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Idnbi_MenuRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {idnbi_MenuRoleFindUniqueOrThrowArgs} args - Arguments to find a Idnbi_MenuRole
     * @example
     * // Get one Idnbi_MenuRole
     * const idnbi_MenuRole = await prisma.idnbi_MenuRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends idnbi_MenuRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, idnbi_MenuRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__idnbi_MenuRoleClient<$Result.GetResult<Prisma.$idnbi_MenuRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idnbi_MenuRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_MenuRoleFindFirstArgs} args - Arguments to find a Idnbi_MenuRole
     * @example
     * // Get one Idnbi_MenuRole
     * const idnbi_MenuRole = await prisma.idnbi_MenuRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends idnbi_MenuRoleFindFirstArgs>(args?: SelectSubset<T, idnbi_MenuRoleFindFirstArgs<ExtArgs>>): Prisma__idnbi_MenuRoleClient<$Result.GetResult<Prisma.$idnbi_MenuRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idnbi_MenuRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_MenuRoleFindFirstOrThrowArgs} args - Arguments to find a Idnbi_MenuRole
     * @example
     * // Get one Idnbi_MenuRole
     * const idnbi_MenuRole = await prisma.idnbi_MenuRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends idnbi_MenuRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, idnbi_MenuRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__idnbi_MenuRoleClient<$Result.GetResult<Prisma.$idnbi_MenuRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Idnbi_MenuRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_MenuRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Idnbi_MenuRoles
     * const idnbi_MenuRoles = await prisma.idnbi_MenuRole.findMany()
     * 
     * // Get first 10 Idnbi_MenuRoles
     * const idnbi_MenuRoles = await prisma.idnbi_MenuRole.findMany({ take: 10 })
     * 
     * // Only select the `menuId`
     * const idnbi_MenuRoleWithMenuIdOnly = await prisma.idnbi_MenuRole.findMany({ select: { menuId: true } })
     * 
     */
    findMany<T extends idnbi_MenuRoleFindManyArgs>(args?: SelectSubset<T, idnbi_MenuRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_MenuRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Idnbi_MenuRole.
     * @param {idnbi_MenuRoleCreateArgs} args - Arguments to create a Idnbi_MenuRole.
     * @example
     * // Create one Idnbi_MenuRole
     * const Idnbi_MenuRole = await prisma.idnbi_MenuRole.create({
     *   data: {
     *     // ... data to create a Idnbi_MenuRole
     *   }
     * })
     * 
     */
    create<T extends idnbi_MenuRoleCreateArgs>(args: SelectSubset<T, idnbi_MenuRoleCreateArgs<ExtArgs>>): Prisma__idnbi_MenuRoleClient<$Result.GetResult<Prisma.$idnbi_MenuRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Idnbi_MenuRoles.
     * @param {idnbi_MenuRoleCreateManyArgs} args - Arguments to create many Idnbi_MenuRoles.
     * @example
     * // Create many Idnbi_MenuRoles
     * const idnbi_MenuRole = await prisma.idnbi_MenuRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends idnbi_MenuRoleCreateManyArgs>(args?: SelectSubset<T, idnbi_MenuRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Idnbi_MenuRoles and returns the data saved in the database.
     * @param {idnbi_MenuRoleCreateManyAndReturnArgs} args - Arguments to create many Idnbi_MenuRoles.
     * @example
     * // Create many Idnbi_MenuRoles
     * const idnbi_MenuRole = await prisma.idnbi_MenuRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Idnbi_MenuRoles and only return the `menuId`
     * const idnbi_MenuRoleWithMenuIdOnly = await prisma.idnbi_MenuRole.createManyAndReturn({
     *   select: { menuId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends idnbi_MenuRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, idnbi_MenuRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_MenuRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Idnbi_MenuRole.
     * @param {idnbi_MenuRoleDeleteArgs} args - Arguments to delete one Idnbi_MenuRole.
     * @example
     * // Delete one Idnbi_MenuRole
     * const Idnbi_MenuRole = await prisma.idnbi_MenuRole.delete({
     *   where: {
     *     // ... filter to delete one Idnbi_MenuRole
     *   }
     * })
     * 
     */
    delete<T extends idnbi_MenuRoleDeleteArgs>(args: SelectSubset<T, idnbi_MenuRoleDeleteArgs<ExtArgs>>): Prisma__idnbi_MenuRoleClient<$Result.GetResult<Prisma.$idnbi_MenuRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Idnbi_MenuRole.
     * @param {idnbi_MenuRoleUpdateArgs} args - Arguments to update one Idnbi_MenuRole.
     * @example
     * // Update one Idnbi_MenuRole
     * const idnbi_MenuRole = await prisma.idnbi_MenuRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends idnbi_MenuRoleUpdateArgs>(args: SelectSubset<T, idnbi_MenuRoleUpdateArgs<ExtArgs>>): Prisma__idnbi_MenuRoleClient<$Result.GetResult<Prisma.$idnbi_MenuRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Idnbi_MenuRoles.
     * @param {idnbi_MenuRoleDeleteManyArgs} args - Arguments to filter Idnbi_MenuRoles to delete.
     * @example
     * // Delete a few Idnbi_MenuRoles
     * const { count } = await prisma.idnbi_MenuRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends idnbi_MenuRoleDeleteManyArgs>(args?: SelectSubset<T, idnbi_MenuRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idnbi_MenuRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_MenuRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Idnbi_MenuRoles
     * const idnbi_MenuRole = await prisma.idnbi_MenuRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends idnbi_MenuRoleUpdateManyArgs>(args: SelectSubset<T, idnbi_MenuRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idnbi_MenuRoles and returns the data updated in the database.
     * @param {idnbi_MenuRoleUpdateManyAndReturnArgs} args - Arguments to update many Idnbi_MenuRoles.
     * @example
     * // Update many Idnbi_MenuRoles
     * const idnbi_MenuRole = await prisma.idnbi_MenuRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Idnbi_MenuRoles and only return the `menuId`
     * const idnbi_MenuRoleWithMenuIdOnly = await prisma.idnbi_MenuRole.updateManyAndReturn({
     *   select: { menuId: true },
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
    updateManyAndReturn<T extends idnbi_MenuRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, idnbi_MenuRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_MenuRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Idnbi_MenuRole.
     * @param {idnbi_MenuRoleUpsertArgs} args - Arguments to update or create a Idnbi_MenuRole.
     * @example
     * // Update or create a Idnbi_MenuRole
     * const idnbi_MenuRole = await prisma.idnbi_MenuRole.upsert({
     *   create: {
     *     // ... data to create a Idnbi_MenuRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Idnbi_MenuRole we want to update
     *   }
     * })
     */
    upsert<T extends idnbi_MenuRoleUpsertArgs>(args: SelectSubset<T, idnbi_MenuRoleUpsertArgs<ExtArgs>>): Prisma__idnbi_MenuRoleClient<$Result.GetResult<Prisma.$idnbi_MenuRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Idnbi_MenuRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_MenuRoleCountArgs} args - Arguments to filter Idnbi_MenuRoles to count.
     * @example
     * // Count the number of Idnbi_MenuRoles
     * const count = await prisma.idnbi_MenuRole.count({
     *   where: {
     *     // ... the filter for the Idnbi_MenuRoles we want to count
     *   }
     * })
    **/
    count<T extends idnbi_MenuRoleCountArgs>(
      args?: Subset<T, idnbi_MenuRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Idnbi_MenuRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Idnbi_MenuRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Idnbi_MenuRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Idnbi_MenuRoleAggregateArgs>(args: Subset<T, Idnbi_MenuRoleAggregateArgs>): Prisma.PrismaPromise<GetIdnbi_MenuRoleAggregateType<T>>

    /**
     * Group by Idnbi_MenuRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_MenuRoleGroupByArgs} args - Group by arguments.
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
      T extends idnbi_MenuRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: idnbi_MenuRoleGroupByArgs['orderBy'] }
        : { orderBy?: idnbi_MenuRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, idnbi_MenuRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdnbi_MenuRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the idnbi_MenuRole model
   */
  readonly fields: idnbi_MenuRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for idnbi_MenuRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__idnbi_MenuRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menu<T extends idnbi_MenuItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, idnbi_MenuItemDefaultArgs<ExtArgs>>): Prisma__idnbi_MenuItemClient<$Result.GetResult<Prisma.$idnbi_MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends idnbi_RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, idnbi_RoleDefaultArgs<ExtArgs>>): Prisma__idnbi_RoleClient<$Result.GetResult<Prisma.$idnbi_RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the idnbi_MenuRole model
   */
  interface idnbi_MenuRoleFieldRefs {
    readonly menuId: FieldRef<"idnbi_MenuRole", 'String'>
    readonly roleId: FieldRef<"idnbi_MenuRole", 'String'>
    readonly created_at: FieldRef<"idnbi_MenuRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * idnbi_MenuRole findUnique
   */
  export type idnbi_MenuRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_MenuRole
     */
    select?: idnbi_MenuRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_MenuRole
     */
    omit?: idnbi_MenuRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_MenuRoleInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_MenuRole to fetch.
     */
    where: idnbi_MenuRoleWhereUniqueInput
  }

  /**
   * idnbi_MenuRole findUniqueOrThrow
   */
  export type idnbi_MenuRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_MenuRole
     */
    select?: idnbi_MenuRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_MenuRole
     */
    omit?: idnbi_MenuRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_MenuRoleInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_MenuRole to fetch.
     */
    where: idnbi_MenuRoleWhereUniqueInput
  }

  /**
   * idnbi_MenuRole findFirst
   */
  export type idnbi_MenuRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_MenuRole
     */
    select?: idnbi_MenuRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_MenuRole
     */
    omit?: idnbi_MenuRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_MenuRoleInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_MenuRole to fetch.
     */
    where?: idnbi_MenuRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_MenuRoles to fetch.
     */
    orderBy?: idnbi_MenuRoleOrderByWithRelationInput | idnbi_MenuRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idnbi_MenuRoles.
     */
    cursor?: idnbi_MenuRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_MenuRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_MenuRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idnbi_MenuRoles.
     */
    distinct?: Idnbi_MenuRoleScalarFieldEnum | Idnbi_MenuRoleScalarFieldEnum[]
  }

  /**
   * idnbi_MenuRole findFirstOrThrow
   */
  export type idnbi_MenuRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_MenuRole
     */
    select?: idnbi_MenuRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_MenuRole
     */
    omit?: idnbi_MenuRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_MenuRoleInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_MenuRole to fetch.
     */
    where?: idnbi_MenuRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_MenuRoles to fetch.
     */
    orderBy?: idnbi_MenuRoleOrderByWithRelationInput | idnbi_MenuRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idnbi_MenuRoles.
     */
    cursor?: idnbi_MenuRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_MenuRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_MenuRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idnbi_MenuRoles.
     */
    distinct?: Idnbi_MenuRoleScalarFieldEnum | Idnbi_MenuRoleScalarFieldEnum[]
  }

  /**
   * idnbi_MenuRole findMany
   */
  export type idnbi_MenuRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_MenuRole
     */
    select?: idnbi_MenuRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_MenuRole
     */
    omit?: idnbi_MenuRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_MenuRoleInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_MenuRoles to fetch.
     */
    where?: idnbi_MenuRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_MenuRoles to fetch.
     */
    orderBy?: idnbi_MenuRoleOrderByWithRelationInput | idnbi_MenuRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing idnbi_MenuRoles.
     */
    cursor?: idnbi_MenuRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_MenuRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_MenuRoles.
     */
    skip?: number
    distinct?: Idnbi_MenuRoleScalarFieldEnum | Idnbi_MenuRoleScalarFieldEnum[]
  }

  /**
   * idnbi_MenuRole create
   */
  export type idnbi_MenuRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_MenuRole
     */
    select?: idnbi_MenuRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_MenuRole
     */
    omit?: idnbi_MenuRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_MenuRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a idnbi_MenuRole.
     */
    data: XOR<idnbi_MenuRoleCreateInput, idnbi_MenuRoleUncheckedCreateInput>
  }

  /**
   * idnbi_MenuRole createMany
   */
  export type idnbi_MenuRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many idnbi_MenuRoles.
     */
    data: idnbi_MenuRoleCreateManyInput | idnbi_MenuRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * idnbi_MenuRole createManyAndReturn
   */
  export type idnbi_MenuRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_MenuRole
     */
    select?: idnbi_MenuRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_MenuRole
     */
    omit?: idnbi_MenuRoleOmit<ExtArgs> | null
    /**
     * The data used to create many idnbi_MenuRoles.
     */
    data: idnbi_MenuRoleCreateManyInput | idnbi_MenuRoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_MenuRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * idnbi_MenuRole update
   */
  export type idnbi_MenuRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_MenuRole
     */
    select?: idnbi_MenuRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_MenuRole
     */
    omit?: idnbi_MenuRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_MenuRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a idnbi_MenuRole.
     */
    data: XOR<idnbi_MenuRoleUpdateInput, idnbi_MenuRoleUncheckedUpdateInput>
    /**
     * Choose, which idnbi_MenuRole to update.
     */
    where: idnbi_MenuRoleWhereUniqueInput
  }

  /**
   * idnbi_MenuRole updateMany
   */
  export type idnbi_MenuRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update idnbi_MenuRoles.
     */
    data: XOR<idnbi_MenuRoleUpdateManyMutationInput, idnbi_MenuRoleUncheckedUpdateManyInput>
    /**
     * Filter which idnbi_MenuRoles to update
     */
    where?: idnbi_MenuRoleWhereInput
    /**
     * Limit how many idnbi_MenuRoles to update.
     */
    limit?: number
  }

  /**
   * idnbi_MenuRole updateManyAndReturn
   */
  export type idnbi_MenuRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_MenuRole
     */
    select?: idnbi_MenuRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_MenuRole
     */
    omit?: idnbi_MenuRoleOmit<ExtArgs> | null
    /**
     * The data used to update idnbi_MenuRoles.
     */
    data: XOR<idnbi_MenuRoleUpdateManyMutationInput, idnbi_MenuRoleUncheckedUpdateManyInput>
    /**
     * Filter which idnbi_MenuRoles to update
     */
    where?: idnbi_MenuRoleWhereInput
    /**
     * Limit how many idnbi_MenuRoles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_MenuRoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * idnbi_MenuRole upsert
   */
  export type idnbi_MenuRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_MenuRole
     */
    select?: idnbi_MenuRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_MenuRole
     */
    omit?: idnbi_MenuRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_MenuRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the idnbi_MenuRole to update in case it exists.
     */
    where: idnbi_MenuRoleWhereUniqueInput
    /**
     * In case the idnbi_MenuRole found by the `where` argument doesn't exist, create a new idnbi_MenuRole with this data.
     */
    create: XOR<idnbi_MenuRoleCreateInput, idnbi_MenuRoleUncheckedCreateInput>
    /**
     * In case the idnbi_MenuRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<idnbi_MenuRoleUpdateInput, idnbi_MenuRoleUncheckedUpdateInput>
  }

  /**
   * idnbi_MenuRole delete
   */
  export type idnbi_MenuRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_MenuRole
     */
    select?: idnbi_MenuRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_MenuRole
     */
    omit?: idnbi_MenuRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_MenuRoleInclude<ExtArgs> | null
    /**
     * Filter which idnbi_MenuRole to delete.
     */
    where: idnbi_MenuRoleWhereUniqueInput
  }

  /**
   * idnbi_MenuRole deleteMany
   */
  export type idnbi_MenuRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idnbi_MenuRoles to delete
     */
    where?: idnbi_MenuRoleWhereInput
    /**
     * Limit how many idnbi_MenuRoles to delete.
     */
    limit?: number
  }

  /**
   * idnbi_MenuRole without action
   */
  export type idnbi_MenuRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_MenuRole
     */
    select?: idnbi_MenuRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_MenuRole
     */
    omit?: idnbi_MenuRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_MenuRoleInclude<ExtArgs> | null
  }


  /**
   * Model idnbi_Notification
   */

  export type AggregateIdnbi_Notification = {
    _count: Idnbi_NotificationCountAggregateOutputType | null
    _min: Idnbi_NotificationMinAggregateOutputType | null
    _max: Idnbi_NotificationMaxAggregateOutputType | null
  }

  export type Idnbi_NotificationMinAggregateOutputType = {
    id: string | null
    title: string | null
    message: string | null
    type: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Idnbi_NotificationMaxAggregateOutputType = {
    id: string | null
    title: string | null
    message: string | null
    type: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Idnbi_NotificationCountAggregateOutputType = {
    id: number
    title: number
    message: number
    type: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Idnbi_NotificationMinAggregateInputType = {
    id?: true
    title?: true
    message?: true
    type?: true
    created_at?: true
    updated_at?: true
  }

  export type Idnbi_NotificationMaxAggregateInputType = {
    id?: true
    title?: true
    message?: true
    type?: true
    created_at?: true
    updated_at?: true
  }

  export type Idnbi_NotificationCountAggregateInputType = {
    id?: true
    title?: true
    message?: true
    type?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Idnbi_NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idnbi_Notification to aggregate.
     */
    where?: idnbi_NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_Notifications to fetch.
     */
    orderBy?: idnbi_NotificationOrderByWithRelationInput | idnbi_NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: idnbi_NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned idnbi_Notifications
    **/
    _count?: true | Idnbi_NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Idnbi_NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Idnbi_NotificationMaxAggregateInputType
  }

  export type GetIdnbi_NotificationAggregateType<T extends Idnbi_NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateIdnbi_Notification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdnbi_Notification[P]>
      : GetScalarType<T[P], AggregateIdnbi_Notification[P]>
  }




  export type idnbi_NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: idnbi_NotificationWhereInput
    orderBy?: idnbi_NotificationOrderByWithAggregationInput | idnbi_NotificationOrderByWithAggregationInput[]
    by: Idnbi_NotificationScalarFieldEnum[] | Idnbi_NotificationScalarFieldEnum
    having?: idnbi_NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Idnbi_NotificationCountAggregateInputType | true
    _min?: Idnbi_NotificationMinAggregateInputType
    _max?: Idnbi_NotificationMaxAggregateInputType
  }

  export type Idnbi_NotificationGroupByOutputType = {
    id: string
    title: string
    message: string
    type: string
    created_at: Date
    updated_at: Date
    _count: Idnbi_NotificationCountAggregateOutputType | null
    _min: Idnbi_NotificationMinAggregateOutputType | null
    _max: Idnbi_NotificationMaxAggregateOutputType | null
  }

  type GetIdnbi_NotificationGroupByPayload<T extends idnbi_NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Idnbi_NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Idnbi_NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Idnbi_NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], Idnbi_NotificationGroupByOutputType[P]>
        }
      >
    >


  export type idnbi_NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_statuses?: boolean | idnbi_Notification$user_statusesArgs<ExtArgs>
    _count?: boolean | Idnbi_NotificationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idnbi_Notification"]>

  export type idnbi_NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["idnbi_Notification"]>

  export type idnbi_NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["idnbi_Notification"]>

  export type idnbi_NotificationSelectScalar = {
    id?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type idnbi_NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "message" | "type" | "created_at" | "updated_at", ExtArgs["result"]["idnbi_Notification"]>
  export type idnbi_NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_statuses?: boolean | idnbi_Notification$user_statusesArgs<ExtArgs>
    _count?: boolean | Idnbi_NotificationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type idnbi_NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type idnbi_NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $idnbi_NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "idnbi_Notification"
    objects: {
      user_statuses: Prisma.$idnbi_UserNotificationStatusPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      message: string
      type: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["idnbi_Notification"]>
    composites: {}
  }

  type idnbi_NotificationGetPayload<S extends boolean | null | undefined | idnbi_NotificationDefaultArgs> = $Result.GetResult<Prisma.$idnbi_NotificationPayload, S>

  type idnbi_NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<idnbi_NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Idnbi_NotificationCountAggregateInputType | true
    }

  export interface idnbi_NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['idnbi_Notification'], meta: { name: 'idnbi_Notification' } }
    /**
     * Find zero or one Idnbi_Notification that matches the filter.
     * @param {idnbi_NotificationFindUniqueArgs} args - Arguments to find a Idnbi_Notification
     * @example
     * // Get one Idnbi_Notification
     * const idnbi_Notification = await prisma.idnbi_Notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends idnbi_NotificationFindUniqueArgs>(args: SelectSubset<T, idnbi_NotificationFindUniqueArgs<ExtArgs>>): Prisma__idnbi_NotificationClient<$Result.GetResult<Prisma.$idnbi_NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Idnbi_Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {idnbi_NotificationFindUniqueOrThrowArgs} args - Arguments to find a Idnbi_Notification
     * @example
     * // Get one Idnbi_Notification
     * const idnbi_Notification = await prisma.idnbi_Notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends idnbi_NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, idnbi_NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__idnbi_NotificationClient<$Result.GetResult<Prisma.$idnbi_NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idnbi_Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_NotificationFindFirstArgs} args - Arguments to find a Idnbi_Notification
     * @example
     * // Get one Idnbi_Notification
     * const idnbi_Notification = await prisma.idnbi_Notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends idnbi_NotificationFindFirstArgs>(args?: SelectSubset<T, idnbi_NotificationFindFirstArgs<ExtArgs>>): Prisma__idnbi_NotificationClient<$Result.GetResult<Prisma.$idnbi_NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idnbi_Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_NotificationFindFirstOrThrowArgs} args - Arguments to find a Idnbi_Notification
     * @example
     * // Get one Idnbi_Notification
     * const idnbi_Notification = await prisma.idnbi_Notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends idnbi_NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, idnbi_NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__idnbi_NotificationClient<$Result.GetResult<Prisma.$idnbi_NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Idnbi_Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Idnbi_Notifications
     * const idnbi_Notifications = await prisma.idnbi_Notification.findMany()
     * 
     * // Get first 10 Idnbi_Notifications
     * const idnbi_Notifications = await prisma.idnbi_Notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const idnbi_NotificationWithIdOnly = await prisma.idnbi_Notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends idnbi_NotificationFindManyArgs>(args?: SelectSubset<T, idnbi_NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Idnbi_Notification.
     * @param {idnbi_NotificationCreateArgs} args - Arguments to create a Idnbi_Notification.
     * @example
     * // Create one Idnbi_Notification
     * const Idnbi_Notification = await prisma.idnbi_Notification.create({
     *   data: {
     *     // ... data to create a Idnbi_Notification
     *   }
     * })
     * 
     */
    create<T extends idnbi_NotificationCreateArgs>(args: SelectSubset<T, idnbi_NotificationCreateArgs<ExtArgs>>): Prisma__idnbi_NotificationClient<$Result.GetResult<Prisma.$idnbi_NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Idnbi_Notifications.
     * @param {idnbi_NotificationCreateManyArgs} args - Arguments to create many Idnbi_Notifications.
     * @example
     * // Create many Idnbi_Notifications
     * const idnbi_Notification = await prisma.idnbi_Notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends idnbi_NotificationCreateManyArgs>(args?: SelectSubset<T, idnbi_NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Idnbi_Notifications and returns the data saved in the database.
     * @param {idnbi_NotificationCreateManyAndReturnArgs} args - Arguments to create many Idnbi_Notifications.
     * @example
     * // Create many Idnbi_Notifications
     * const idnbi_Notification = await prisma.idnbi_Notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Idnbi_Notifications and only return the `id`
     * const idnbi_NotificationWithIdOnly = await prisma.idnbi_Notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends idnbi_NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, idnbi_NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Idnbi_Notification.
     * @param {idnbi_NotificationDeleteArgs} args - Arguments to delete one Idnbi_Notification.
     * @example
     * // Delete one Idnbi_Notification
     * const Idnbi_Notification = await prisma.idnbi_Notification.delete({
     *   where: {
     *     // ... filter to delete one Idnbi_Notification
     *   }
     * })
     * 
     */
    delete<T extends idnbi_NotificationDeleteArgs>(args: SelectSubset<T, idnbi_NotificationDeleteArgs<ExtArgs>>): Prisma__idnbi_NotificationClient<$Result.GetResult<Prisma.$idnbi_NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Idnbi_Notification.
     * @param {idnbi_NotificationUpdateArgs} args - Arguments to update one Idnbi_Notification.
     * @example
     * // Update one Idnbi_Notification
     * const idnbi_Notification = await prisma.idnbi_Notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends idnbi_NotificationUpdateArgs>(args: SelectSubset<T, idnbi_NotificationUpdateArgs<ExtArgs>>): Prisma__idnbi_NotificationClient<$Result.GetResult<Prisma.$idnbi_NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Idnbi_Notifications.
     * @param {idnbi_NotificationDeleteManyArgs} args - Arguments to filter Idnbi_Notifications to delete.
     * @example
     * // Delete a few Idnbi_Notifications
     * const { count } = await prisma.idnbi_Notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends idnbi_NotificationDeleteManyArgs>(args?: SelectSubset<T, idnbi_NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idnbi_Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Idnbi_Notifications
     * const idnbi_Notification = await prisma.idnbi_Notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends idnbi_NotificationUpdateManyArgs>(args: SelectSubset<T, idnbi_NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idnbi_Notifications and returns the data updated in the database.
     * @param {idnbi_NotificationUpdateManyAndReturnArgs} args - Arguments to update many Idnbi_Notifications.
     * @example
     * // Update many Idnbi_Notifications
     * const idnbi_Notification = await prisma.idnbi_Notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Idnbi_Notifications and only return the `id`
     * const idnbi_NotificationWithIdOnly = await prisma.idnbi_Notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends idnbi_NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, idnbi_NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Idnbi_Notification.
     * @param {idnbi_NotificationUpsertArgs} args - Arguments to update or create a Idnbi_Notification.
     * @example
     * // Update or create a Idnbi_Notification
     * const idnbi_Notification = await prisma.idnbi_Notification.upsert({
     *   create: {
     *     // ... data to create a Idnbi_Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Idnbi_Notification we want to update
     *   }
     * })
     */
    upsert<T extends idnbi_NotificationUpsertArgs>(args: SelectSubset<T, idnbi_NotificationUpsertArgs<ExtArgs>>): Prisma__idnbi_NotificationClient<$Result.GetResult<Prisma.$idnbi_NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Idnbi_Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_NotificationCountArgs} args - Arguments to filter Idnbi_Notifications to count.
     * @example
     * // Count the number of Idnbi_Notifications
     * const count = await prisma.idnbi_Notification.count({
     *   where: {
     *     // ... the filter for the Idnbi_Notifications we want to count
     *   }
     * })
    **/
    count<T extends idnbi_NotificationCountArgs>(
      args?: Subset<T, idnbi_NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Idnbi_NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Idnbi_Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Idnbi_NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Idnbi_NotificationAggregateArgs>(args: Subset<T, Idnbi_NotificationAggregateArgs>): Prisma.PrismaPromise<GetIdnbi_NotificationAggregateType<T>>

    /**
     * Group by Idnbi_Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_NotificationGroupByArgs} args - Group by arguments.
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
      T extends idnbi_NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: idnbi_NotificationGroupByArgs['orderBy'] }
        : { orderBy?: idnbi_NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, idnbi_NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdnbi_NotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the idnbi_Notification model
   */
  readonly fields: idnbi_NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for idnbi_Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__idnbi_NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_statuses<T extends idnbi_Notification$user_statusesArgs<ExtArgs> = {}>(args?: Subset<T, idnbi_Notification$user_statusesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_UserNotificationStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the idnbi_Notification model
   */
  interface idnbi_NotificationFieldRefs {
    readonly id: FieldRef<"idnbi_Notification", 'String'>
    readonly title: FieldRef<"idnbi_Notification", 'String'>
    readonly message: FieldRef<"idnbi_Notification", 'String'>
    readonly type: FieldRef<"idnbi_Notification", 'String'>
    readonly created_at: FieldRef<"idnbi_Notification", 'DateTime'>
    readonly updated_at: FieldRef<"idnbi_Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * idnbi_Notification findUnique
   */
  export type idnbi_NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Notification
     */
    select?: idnbi_NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Notification
     */
    omit?: idnbi_NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_NotificationInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_Notification to fetch.
     */
    where: idnbi_NotificationWhereUniqueInput
  }

  /**
   * idnbi_Notification findUniqueOrThrow
   */
  export type idnbi_NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Notification
     */
    select?: idnbi_NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Notification
     */
    omit?: idnbi_NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_NotificationInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_Notification to fetch.
     */
    where: idnbi_NotificationWhereUniqueInput
  }

  /**
   * idnbi_Notification findFirst
   */
  export type idnbi_NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Notification
     */
    select?: idnbi_NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Notification
     */
    omit?: idnbi_NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_NotificationInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_Notification to fetch.
     */
    where?: idnbi_NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_Notifications to fetch.
     */
    orderBy?: idnbi_NotificationOrderByWithRelationInput | idnbi_NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idnbi_Notifications.
     */
    cursor?: idnbi_NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idnbi_Notifications.
     */
    distinct?: Idnbi_NotificationScalarFieldEnum | Idnbi_NotificationScalarFieldEnum[]
  }

  /**
   * idnbi_Notification findFirstOrThrow
   */
  export type idnbi_NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Notification
     */
    select?: idnbi_NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Notification
     */
    omit?: idnbi_NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_NotificationInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_Notification to fetch.
     */
    where?: idnbi_NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_Notifications to fetch.
     */
    orderBy?: idnbi_NotificationOrderByWithRelationInput | idnbi_NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idnbi_Notifications.
     */
    cursor?: idnbi_NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idnbi_Notifications.
     */
    distinct?: Idnbi_NotificationScalarFieldEnum | Idnbi_NotificationScalarFieldEnum[]
  }

  /**
   * idnbi_Notification findMany
   */
  export type idnbi_NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Notification
     */
    select?: idnbi_NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Notification
     */
    omit?: idnbi_NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_NotificationInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_Notifications to fetch.
     */
    where?: idnbi_NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_Notifications to fetch.
     */
    orderBy?: idnbi_NotificationOrderByWithRelationInput | idnbi_NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing idnbi_Notifications.
     */
    cursor?: idnbi_NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_Notifications.
     */
    skip?: number
    distinct?: Idnbi_NotificationScalarFieldEnum | Idnbi_NotificationScalarFieldEnum[]
  }

  /**
   * idnbi_Notification create
   */
  export type idnbi_NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Notification
     */
    select?: idnbi_NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Notification
     */
    omit?: idnbi_NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a idnbi_Notification.
     */
    data: XOR<idnbi_NotificationCreateInput, idnbi_NotificationUncheckedCreateInput>
  }

  /**
   * idnbi_Notification createMany
   */
  export type idnbi_NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many idnbi_Notifications.
     */
    data: idnbi_NotificationCreateManyInput | idnbi_NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * idnbi_Notification createManyAndReturn
   */
  export type idnbi_NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Notification
     */
    select?: idnbi_NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Notification
     */
    omit?: idnbi_NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many idnbi_Notifications.
     */
    data: idnbi_NotificationCreateManyInput | idnbi_NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * idnbi_Notification update
   */
  export type idnbi_NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Notification
     */
    select?: idnbi_NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Notification
     */
    omit?: idnbi_NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a idnbi_Notification.
     */
    data: XOR<idnbi_NotificationUpdateInput, idnbi_NotificationUncheckedUpdateInput>
    /**
     * Choose, which idnbi_Notification to update.
     */
    where: idnbi_NotificationWhereUniqueInput
  }

  /**
   * idnbi_Notification updateMany
   */
  export type idnbi_NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update idnbi_Notifications.
     */
    data: XOR<idnbi_NotificationUpdateManyMutationInput, idnbi_NotificationUncheckedUpdateManyInput>
    /**
     * Filter which idnbi_Notifications to update
     */
    where?: idnbi_NotificationWhereInput
    /**
     * Limit how many idnbi_Notifications to update.
     */
    limit?: number
  }

  /**
   * idnbi_Notification updateManyAndReturn
   */
  export type idnbi_NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Notification
     */
    select?: idnbi_NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Notification
     */
    omit?: idnbi_NotificationOmit<ExtArgs> | null
    /**
     * The data used to update idnbi_Notifications.
     */
    data: XOR<idnbi_NotificationUpdateManyMutationInput, idnbi_NotificationUncheckedUpdateManyInput>
    /**
     * Filter which idnbi_Notifications to update
     */
    where?: idnbi_NotificationWhereInput
    /**
     * Limit how many idnbi_Notifications to update.
     */
    limit?: number
  }

  /**
   * idnbi_Notification upsert
   */
  export type idnbi_NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Notification
     */
    select?: idnbi_NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Notification
     */
    omit?: idnbi_NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the idnbi_Notification to update in case it exists.
     */
    where: idnbi_NotificationWhereUniqueInput
    /**
     * In case the idnbi_Notification found by the `where` argument doesn't exist, create a new idnbi_Notification with this data.
     */
    create: XOR<idnbi_NotificationCreateInput, idnbi_NotificationUncheckedCreateInput>
    /**
     * In case the idnbi_Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<idnbi_NotificationUpdateInput, idnbi_NotificationUncheckedUpdateInput>
  }

  /**
   * idnbi_Notification delete
   */
  export type idnbi_NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Notification
     */
    select?: idnbi_NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Notification
     */
    omit?: idnbi_NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_NotificationInclude<ExtArgs> | null
    /**
     * Filter which idnbi_Notification to delete.
     */
    where: idnbi_NotificationWhereUniqueInput
  }

  /**
   * idnbi_Notification deleteMany
   */
  export type idnbi_NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idnbi_Notifications to delete
     */
    where?: idnbi_NotificationWhereInput
    /**
     * Limit how many idnbi_Notifications to delete.
     */
    limit?: number
  }

  /**
   * idnbi_Notification.user_statuses
   */
  export type idnbi_Notification$user_statusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_UserNotificationStatus
     */
    select?: idnbi_UserNotificationStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_UserNotificationStatus
     */
    omit?: idnbi_UserNotificationStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserNotificationStatusInclude<ExtArgs> | null
    where?: idnbi_UserNotificationStatusWhereInput
    orderBy?: idnbi_UserNotificationStatusOrderByWithRelationInput | idnbi_UserNotificationStatusOrderByWithRelationInput[]
    cursor?: idnbi_UserNotificationStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Idnbi_UserNotificationStatusScalarFieldEnum | Idnbi_UserNotificationStatusScalarFieldEnum[]
  }

  /**
   * idnbi_Notification without action
   */
  export type idnbi_NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_Notification
     */
    select?: idnbi_NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_Notification
     */
    omit?: idnbi_NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_NotificationInclude<ExtArgs> | null
  }


  /**
   * Model idnbi_UserNotificationStatus
   */

  export type AggregateIdnbi_UserNotificationStatus = {
    _count: Idnbi_UserNotificationStatusCountAggregateOutputType | null
    _min: Idnbi_UserNotificationStatusMinAggregateOutputType | null
    _max: Idnbi_UserNotificationStatusMaxAggregateOutputType | null
  }

  export type Idnbi_UserNotificationStatusMinAggregateOutputType = {
    userId: string | null
    notificationId: string | null
    read: boolean | null
    read_at: Date | null
    created_at: Date | null
  }

  export type Idnbi_UserNotificationStatusMaxAggregateOutputType = {
    userId: string | null
    notificationId: string | null
    read: boolean | null
    read_at: Date | null
    created_at: Date | null
  }

  export type Idnbi_UserNotificationStatusCountAggregateOutputType = {
    userId: number
    notificationId: number
    read: number
    read_at: number
    created_at: number
    _all: number
  }


  export type Idnbi_UserNotificationStatusMinAggregateInputType = {
    userId?: true
    notificationId?: true
    read?: true
    read_at?: true
    created_at?: true
  }

  export type Idnbi_UserNotificationStatusMaxAggregateInputType = {
    userId?: true
    notificationId?: true
    read?: true
    read_at?: true
    created_at?: true
  }

  export type Idnbi_UserNotificationStatusCountAggregateInputType = {
    userId?: true
    notificationId?: true
    read?: true
    read_at?: true
    created_at?: true
    _all?: true
  }

  export type Idnbi_UserNotificationStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idnbi_UserNotificationStatus to aggregate.
     */
    where?: idnbi_UserNotificationStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_UserNotificationStatuses to fetch.
     */
    orderBy?: idnbi_UserNotificationStatusOrderByWithRelationInput | idnbi_UserNotificationStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: idnbi_UserNotificationStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_UserNotificationStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_UserNotificationStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned idnbi_UserNotificationStatuses
    **/
    _count?: true | Idnbi_UserNotificationStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Idnbi_UserNotificationStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Idnbi_UserNotificationStatusMaxAggregateInputType
  }

  export type GetIdnbi_UserNotificationStatusAggregateType<T extends Idnbi_UserNotificationStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateIdnbi_UserNotificationStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdnbi_UserNotificationStatus[P]>
      : GetScalarType<T[P], AggregateIdnbi_UserNotificationStatus[P]>
  }




  export type idnbi_UserNotificationStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: idnbi_UserNotificationStatusWhereInput
    orderBy?: idnbi_UserNotificationStatusOrderByWithAggregationInput | idnbi_UserNotificationStatusOrderByWithAggregationInput[]
    by: Idnbi_UserNotificationStatusScalarFieldEnum[] | Idnbi_UserNotificationStatusScalarFieldEnum
    having?: idnbi_UserNotificationStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Idnbi_UserNotificationStatusCountAggregateInputType | true
    _min?: Idnbi_UserNotificationStatusMinAggregateInputType
    _max?: Idnbi_UserNotificationStatusMaxAggregateInputType
  }

  export type Idnbi_UserNotificationStatusGroupByOutputType = {
    userId: string
    notificationId: string
    read: boolean
    read_at: Date | null
    created_at: Date
    _count: Idnbi_UserNotificationStatusCountAggregateOutputType | null
    _min: Idnbi_UserNotificationStatusMinAggregateOutputType | null
    _max: Idnbi_UserNotificationStatusMaxAggregateOutputType | null
  }

  type GetIdnbi_UserNotificationStatusGroupByPayload<T extends idnbi_UserNotificationStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Idnbi_UserNotificationStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Idnbi_UserNotificationStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Idnbi_UserNotificationStatusGroupByOutputType[P]>
            : GetScalarType<T[P], Idnbi_UserNotificationStatusGroupByOutputType[P]>
        }
      >
    >


  export type idnbi_UserNotificationStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    notificationId?: boolean
    read?: boolean
    read_at?: boolean
    created_at?: boolean
    user?: boolean | idnbi_UserDefaultArgs<ExtArgs>
    notification?: boolean | idnbi_NotificationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idnbi_UserNotificationStatus"]>

  export type idnbi_UserNotificationStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    notificationId?: boolean
    read?: boolean
    read_at?: boolean
    created_at?: boolean
    user?: boolean | idnbi_UserDefaultArgs<ExtArgs>
    notification?: boolean | idnbi_NotificationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idnbi_UserNotificationStatus"]>

  export type idnbi_UserNotificationStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    notificationId?: boolean
    read?: boolean
    read_at?: boolean
    created_at?: boolean
    user?: boolean | idnbi_UserDefaultArgs<ExtArgs>
    notification?: boolean | idnbi_NotificationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idnbi_UserNotificationStatus"]>

  export type idnbi_UserNotificationStatusSelectScalar = {
    userId?: boolean
    notificationId?: boolean
    read?: boolean
    read_at?: boolean
    created_at?: boolean
  }

  export type idnbi_UserNotificationStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "notificationId" | "read" | "read_at" | "created_at", ExtArgs["result"]["idnbi_UserNotificationStatus"]>
  export type idnbi_UserNotificationStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | idnbi_UserDefaultArgs<ExtArgs>
    notification?: boolean | idnbi_NotificationDefaultArgs<ExtArgs>
  }
  export type idnbi_UserNotificationStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | idnbi_UserDefaultArgs<ExtArgs>
    notification?: boolean | idnbi_NotificationDefaultArgs<ExtArgs>
  }
  export type idnbi_UserNotificationStatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | idnbi_UserDefaultArgs<ExtArgs>
    notification?: boolean | idnbi_NotificationDefaultArgs<ExtArgs>
  }

  export type $idnbi_UserNotificationStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "idnbi_UserNotificationStatus"
    objects: {
      user: Prisma.$idnbi_UserPayload<ExtArgs>
      notification: Prisma.$idnbi_NotificationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      notificationId: string
      read: boolean
      read_at: Date | null
      created_at: Date
    }, ExtArgs["result"]["idnbi_UserNotificationStatus"]>
    composites: {}
  }

  type idnbi_UserNotificationStatusGetPayload<S extends boolean | null | undefined | idnbi_UserNotificationStatusDefaultArgs> = $Result.GetResult<Prisma.$idnbi_UserNotificationStatusPayload, S>

  type idnbi_UserNotificationStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<idnbi_UserNotificationStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Idnbi_UserNotificationStatusCountAggregateInputType | true
    }

  export interface idnbi_UserNotificationStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['idnbi_UserNotificationStatus'], meta: { name: 'idnbi_UserNotificationStatus' } }
    /**
     * Find zero or one Idnbi_UserNotificationStatus that matches the filter.
     * @param {idnbi_UserNotificationStatusFindUniqueArgs} args - Arguments to find a Idnbi_UserNotificationStatus
     * @example
     * // Get one Idnbi_UserNotificationStatus
     * const idnbi_UserNotificationStatus = await prisma.idnbi_UserNotificationStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends idnbi_UserNotificationStatusFindUniqueArgs>(args: SelectSubset<T, idnbi_UserNotificationStatusFindUniqueArgs<ExtArgs>>): Prisma__idnbi_UserNotificationStatusClient<$Result.GetResult<Prisma.$idnbi_UserNotificationStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Idnbi_UserNotificationStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {idnbi_UserNotificationStatusFindUniqueOrThrowArgs} args - Arguments to find a Idnbi_UserNotificationStatus
     * @example
     * // Get one Idnbi_UserNotificationStatus
     * const idnbi_UserNotificationStatus = await prisma.idnbi_UserNotificationStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends idnbi_UserNotificationStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, idnbi_UserNotificationStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__idnbi_UserNotificationStatusClient<$Result.GetResult<Prisma.$idnbi_UserNotificationStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idnbi_UserNotificationStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_UserNotificationStatusFindFirstArgs} args - Arguments to find a Idnbi_UserNotificationStatus
     * @example
     * // Get one Idnbi_UserNotificationStatus
     * const idnbi_UserNotificationStatus = await prisma.idnbi_UserNotificationStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends idnbi_UserNotificationStatusFindFirstArgs>(args?: SelectSubset<T, idnbi_UserNotificationStatusFindFirstArgs<ExtArgs>>): Prisma__idnbi_UserNotificationStatusClient<$Result.GetResult<Prisma.$idnbi_UserNotificationStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idnbi_UserNotificationStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_UserNotificationStatusFindFirstOrThrowArgs} args - Arguments to find a Idnbi_UserNotificationStatus
     * @example
     * // Get one Idnbi_UserNotificationStatus
     * const idnbi_UserNotificationStatus = await prisma.idnbi_UserNotificationStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends idnbi_UserNotificationStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, idnbi_UserNotificationStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__idnbi_UserNotificationStatusClient<$Result.GetResult<Prisma.$idnbi_UserNotificationStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Idnbi_UserNotificationStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_UserNotificationStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Idnbi_UserNotificationStatuses
     * const idnbi_UserNotificationStatuses = await prisma.idnbi_UserNotificationStatus.findMany()
     * 
     * // Get first 10 Idnbi_UserNotificationStatuses
     * const idnbi_UserNotificationStatuses = await prisma.idnbi_UserNotificationStatus.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const idnbi_UserNotificationStatusWithUserIdOnly = await prisma.idnbi_UserNotificationStatus.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends idnbi_UserNotificationStatusFindManyArgs>(args?: SelectSubset<T, idnbi_UserNotificationStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_UserNotificationStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Idnbi_UserNotificationStatus.
     * @param {idnbi_UserNotificationStatusCreateArgs} args - Arguments to create a Idnbi_UserNotificationStatus.
     * @example
     * // Create one Idnbi_UserNotificationStatus
     * const Idnbi_UserNotificationStatus = await prisma.idnbi_UserNotificationStatus.create({
     *   data: {
     *     // ... data to create a Idnbi_UserNotificationStatus
     *   }
     * })
     * 
     */
    create<T extends idnbi_UserNotificationStatusCreateArgs>(args: SelectSubset<T, idnbi_UserNotificationStatusCreateArgs<ExtArgs>>): Prisma__idnbi_UserNotificationStatusClient<$Result.GetResult<Prisma.$idnbi_UserNotificationStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Idnbi_UserNotificationStatuses.
     * @param {idnbi_UserNotificationStatusCreateManyArgs} args - Arguments to create many Idnbi_UserNotificationStatuses.
     * @example
     * // Create many Idnbi_UserNotificationStatuses
     * const idnbi_UserNotificationStatus = await prisma.idnbi_UserNotificationStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends idnbi_UserNotificationStatusCreateManyArgs>(args?: SelectSubset<T, idnbi_UserNotificationStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Idnbi_UserNotificationStatuses and returns the data saved in the database.
     * @param {idnbi_UserNotificationStatusCreateManyAndReturnArgs} args - Arguments to create many Idnbi_UserNotificationStatuses.
     * @example
     * // Create many Idnbi_UserNotificationStatuses
     * const idnbi_UserNotificationStatus = await prisma.idnbi_UserNotificationStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Idnbi_UserNotificationStatuses and only return the `userId`
     * const idnbi_UserNotificationStatusWithUserIdOnly = await prisma.idnbi_UserNotificationStatus.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends idnbi_UserNotificationStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, idnbi_UserNotificationStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_UserNotificationStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Idnbi_UserNotificationStatus.
     * @param {idnbi_UserNotificationStatusDeleteArgs} args - Arguments to delete one Idnbi_UserNotificationStatus.
     * @example
     * // Delete one Idnbi_UserNotificationStatus
     * const Idnbi_UserNotificationStatus = await prisma.idnbi_UserNotificationStatus.delete({
     *   where: {
     *     // ... filter to delete one Idnbi_UserNotificationStatus
     *   }
     * })
     * 
     */
    delete<T extends idnbi_UserNotificationStatusDeleteArgs>(args: SelectSubset<T, idnbi_UserNotificationStatusDeleteArgs<ExtArgs>>): Prisma__idnbi_UserNotificationStatusClient<$Result.GetResult<Prisma.$idnbi_UserNotificationStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Idnbi_UserNotificationStatus.
     * @param {idnbi_UserNotificationStatusUpdateArgs} args - Arguments to update one Idnbi_UserNotificationStatus.
     * @example
     * // Update one Idnbi_UserNotificationStatus
     * const idnbi_UserNotificationStatus = await prisma.idnbi_UserNotificationStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends idnbi_UserNotificationStatusUpdateArgs>(args: SelectSubset<T, idnbi_UserNotificationStatusUpdateArgs<ExtArgs>>): Prisma__idnbi_UserNotificationStatusClient<$Result.GetResult<Prisma.$idnbi_UserNotificationStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Idnbi_UserNotificationStatuses.
     * @param {idnbi_UserNotificationStatusDeleteManyArgs} args - Arguments to filter Idnbi_UserNotificationStatuses to delete.
     * @example
     * // Delete a few Idnbi_UserNotificationStatuses
     * const { count } = await prisma.idnbi_UserNotificationStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends idnbi_UserNotificationStatusDeleteManyArgs>(args?: SelectSubset<T, idnbi_UserNotificationStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idnbi_UserNotificationStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_UserNotificationStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Idnbi_UserNotificationStatuses
     * const idnbi_UserNotificationStatus = await prisma.idnbi_UserNotificationStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends idnbi_UserNotificationStatusUpdateManyArgs>(args: SelectSubset<T, idnbi_UserNotificationStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idnbi_UserNotificationStatuses and returns the data updated in the database.
     * @param {idnbi_UserNotificationStatusUpdateManyAndReturnArgs} args - Arguments to update many Idnbi_UserNotificationStatuses.
     * @example
     * // Update many Idnbi_UserNotificationStatuses
     * const idnbi_UserNotificationStatus = await prisma.idnbi_UserNotificationStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Idnbi_UserNotificationStatuses and only return the `userId`
     * const idnbi_UserNotificationStatusWithUserIdOnly = await prisma.idnbi_UserNotificationStatus.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends idnbi_UserNotificationStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, idnbi_UserNotificationStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_UserNotificationStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Idnbi_UserNotificationStatus.
     * @param {idnbi_UserNotificationStatusUpsertArgs} args - Arguments to update or create a Idnbi_UserNotificationStatus.
     * @example
     * // Update or create a Idnbi_UserNotificationStatus
     * const idnbi_UserNotificationStatus = await prisma.idnbi_UserNotificationStatus.upsert({
     *   create: {
     *     // ... data to create a Idnbi_UserNotificationStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Idnbi_UserNotificationStatus we want to update
     *   }
     * })
     */
    upsert<T extends idnbi_UserNotificationStatusUpsertArgs>(args: SelectSubset<T, idnbi_UserNotificationStatusUpsertArgs<ExtArgs>>): Prisma__idnbi_UserNotificationStatusClient<$Result.GetResult<Prisma.$idnbi_UserNotificationStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Idnbi_UserNotificationStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_UserNotificationStatusCountArgs} args - Arguments to filter Idnbi_UserNotificationStatuses to count.
     * @example
     * // Count the number of Idnbi_UserNotificationStatuses
     * const count = await prisma.idnbi_UserNotificationStatus.count({
     *   where: {
     *     // ... the filter for the Idnbi_UserNotificationStatuses we want to count
     *   }
     * })
    **/
    count<T extends idnbi_UserNotificationStatusCountArgs>(
      args?: Subset<T, idnbi_UserNotificationStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Idnbi_UserNotificationStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Idnbi_UserNotificationStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Idnbi_UserNotificationStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Idnbi_UserNotificationStatusAggregateArgs>(args: Subset<T, Idnbi_UserNotificationStatusAggregateArgs>): Prisma.PrismaPromise<GetIdnbi_UserNotificationStatusAggregateType<T>>

    /**
     * Group by Idnbi_UserNotificationStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_UserNotificationStatusGroupByArgs} args - Group by arguments.
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
      T extends idnbi_UserNotificationStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: idnbi_UserNotificationStatusGroupByArgs['orderBy'] }
        : { orderBy?: idnbi_UserNotificationStatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, idnbi_UserNotificationStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdnbi_UserNotificationStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the idnbi_UserNotificationStatus model
   */
  readonly fields: idnbi_UserNotificationStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for idnbi_UserNotificationStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__idnbi_UserNotificationStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends idnbi_UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, idnbi_UserDefaultArgs<ExtArgs>>): Prisma__idnbi_UserClient<$Result.GetResult<Prisma.$idnbi_UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notification<T extends idnbi_NotificationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, idnbi_NotificationDefaultArgs<ExtArgs>>): Prisma__idnbi_NotificationClient<$Result.GetResult<Prisma.$idnbi_NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the idnbi_UserNotificationStatus model
   */
  interface idnbi_UserNotificationStatusFieldRefs {
    readonly userId: FieldRef<"idnbi_UserNotificationStatus", 'String'>
    readonly notificationId: FieldRef<"idnbi_UserNotificationStatus", 'String'>
    readonly read: FieldRef<"idnbi_UserNotificationStatus", 'Boolean'>
    readonly read_at: FieldRef<"idnbi_UserNotificationStatus", 'DateTime'>
    readonly created_at: FieldRef<"idnbi_UserNotificationStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * idnbi_UserNotificationStatus findUnique
   */
  export type idnbi_UserNotificationStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_UserNotificationStatus
     */
    select?: idnbi_UserNotificationStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_UserNotificationStatus
     */
    omit?: idnbi_UserNotificationStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserNotificationStatusInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_UserNotificationStatus to fetch.
     */
    where: idnbi_UserNotificationStatusWhereUniqueInput
  }

  /**
   * idnbi_UserNotificationStatus findUniqueOrThrow
   */
  export type idnbi_UserNotificationStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_UserNotificationStatus
     */
    select?: idnbi_UserNotificationStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_UserNotificationStatus
     */
    omit?: idnbi_UserNotificationStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserNotificationStatusInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_UserNotificationStatus to fetch.
     */
    where: idnbi_UserNotificationStatusWhereUniqueInput
  }

  /**
   * idnbi_UserNotificationStatus findFirst
   */
  export type idnbi_UserNotificationStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_UserNotificationStatus
     */
    select?: idnbi_UserNotificationStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_UserNotificationStatus
     */
    omit?: idnbi_UserNotificationStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserNotificationStatusInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_UserNotificationStatus to fetch.
     */
    where?: idnbi_UserNotificationStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_UserNotificationStatuses to fetch.
     */
    orderBy?: idnbi_UserNotificationStatusOrderByWithRelationInput | idnbi_UserNotificationStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idnbi_UserNotificationStatuses.
     */
    cursor?: idnbi_UserNotificationStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_UserNotificationStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_UserNotificationStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idnbi_UserNotificationStatuses.
     */
    distinct?: Idnbi_UserNotificationStatusScalarFieldEnum | Idnbi_UserNotificationStatusScalarFieldEnum[]
  }

  /**
   * idnbi_UserNotificationStatus findFirstOrThrow
   */
  export type idnbi_UserNotificationStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_UserNotificationStatus
     */
    select?: idnbi_UserNotificationStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_UserNotificationStatus
     */
    omit?: idnbi_UserNotificationStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserNotificationStatusInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_UserNotificationStatus to fetch.
     */
    where?: idnbi_UserNotificationStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_UserNotificationStatuses to fetch.
     */
    orderBy?: idnbi_UserNotificationStatusOrderByWithRelationInput | idnbi_UserNotificationStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idnbi_UserNotificationStatuses.
     */
    cursor?: idnbi_UserNotificationStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_UserNotificationStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_UserNotificationStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idnbi_UserNotificationStatuses.
     */
    distinct?: Idnbi_UserNotificationStatusScalarFieldEnum | Idnbi_UserNotificationStatusScalarFieldEnum[]
  }

  /**
   * idnbi_UserNotificationStatus findMany
   */
  export type idnbi_UserNotificationStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_UserNotificationStatus
     */
    select?: idnbi_UserNotificationStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_UserNotificationStatus
     */
    omit?: idnbi_UserNotificationStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserNotificationStatusInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_UserNotificationStatuses to fetch.
     */
    where?: idnbi_UserNotificationStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_UserNotificationStatuses to fetch.
     */
    orderBy?: idnbi_UserNotificationStatusOrderByWithRelationInput | idnbi_UserNotificationStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing idnbi_UserNotificationStatuses.
     */
    cursor?: idnbi_UserNotificationStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_UserNotificationStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_UserNotificationStatuses.
     */
    skip?: number
    distinct?: Idnbi_UserNotificationStatusScalarFieldEnum | Idnbi_UserNotificationStatusScalarFieldEnum[]
  }

  /**
   * idnbi_UserNotificationStatus create
   */
  export type idnbi_UserNotificationStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_UserNotificationStatus
     */
    select?: idnbi_UserNotificationStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_UserNotificationStatus
     */
    omit?: idnbi_UserNotificationStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserNotificationStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a idnbi_UserNotificationStatus.
     */
    data: XOR<idnbi_UserNotificationStatusCreateInput, idnbi_UserNotificationStatusUncheckedCreateInput>
  }

  /**
   * idnbi_UserNotificationStatus createMany
   */
  export type idnbi_UserNotificationStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many idnbi_UserNotificationStatuses.
     */
    data: idnbi_UserNotificationStatusCreateManyInput | idnbi_UserNotificationStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * idnbi_UserNotificationStatus createManyAndReturn
   */
  export type idnbi_UserNotificationStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_UserNotificationStatus
     */
    select?: idnbi_UserNotificationStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_UserNotificationStatus
     */
    omit?: idnbi_UserNotificationStatusOmit<ExtArgs> | null
    /**
     * The data used to create many idnbi_UserNotificationStatuses.
     */
    data: idnbi_UserNotificationStatusCreateManyInput | idnbi_UserNotificationStatusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserNotificationStatusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * idnbi_UserNotificationStatus update
   */
  export type idnbi_UserNotificationStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_UserNotificationStatus
     */
    select?: idnbi_UserNotificationStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_UserNotificationStatus
     */
    omit?: idnbi_UserNotificationStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserNotificationStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a idnbi_UserNotificationStatus.
     */
    data: XOR<idnbi_UserNotificationStatusUpdateInput, idnbi_UserNotificationStatusUncheckedUpdateInput>
    /**
     * Choose, which idnbi_UserNotificationStatus to update.
     */
    where: idnbi_UserNotificationStatusWhereUniqueInput
  }

  /**
   * idnbi_UserNotificationStatus updateMany
   */
  export type idnbi_UserNotificationStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update idnbi_UserNotificationStatuses.
     */
    data: XOR<idnbi_UserNotificationStatusUpdateManyMutationInput, idnbi_UserNotificationStatusUncheckedUpdateManyInput>
    /**
     * Filter which idnbi_UserNotificationStatuses to update
     */
    where?: idnbi_UserNotificationStatusWhereInput
    /**
     * Limit how many idnbi_UserNotificationStatuses to update.
     */
    limit?: number
  }

  /**
   * idnbi_UserNotificationStatus updateManyAndReturn
   */
  export type idnbi_UserNotificationStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_UserNotificationStatus
     */
    select?: idnbi_UserNotificationStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_UserNotificationStatus
     */
    omit?: idnbi_UserNotificationStatusOmit<ExtArgs> | null
    /**
     * The data used to update idnbi_UserNotificationStatuses.
     */
    data: XOR<idnbi_UserNotificationStatusUpdateManyMutationInput, idnbi_UserNotificationStatusUncheckedUpdateManyInput>
    /**
     * Filter which idnbi_UserNotificationStatuses to update
     */
    where?: idnbi_UserNotificationStatusWhereInput
    /**
     * Limit how many idnbi_UserNotificationStatuses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserNotificationStatusIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * idnbi_UserNotificationStatus upsert
   */
  export type idnbi_UserNotificationStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_UserNotificationStatus
     */
    select?: idnbi_UserNotificationStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_UserNotificationStatus
     */
    omit?: idnbi_UserNotificationStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserNotificationStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the idnbi_UserNotificationStatus to update in case it exists.
     */
    where: idnbi_UserNotificationStatusWhereUniqueInput
    /**
     * In case the idnbi_UserNotificationStatus found by the `where` argument doesn't exist, create a new idnbi_UserNotificationStatus with this data.
     */
    create: XOR<idnbi_UserNotificationStatusCreateInput, idnbi_UserNotificationStatusUncheckedCreateInput>
    /**
     * In case the idnbi_UserNotificationStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<idnbi_UserNotificationStatusUpdateInput, idnbi_UserNotificationStatusUncheckedUpdateInput>
  }

  /**
   * idnbi_UserNotificationStatus delete
   */
  export type idnbi_UserNotificationStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_UserNotificationStatus
     */
    select?: idnbi_UserNotificationStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_UserNotificationStatus
     */
    omit?: idnbi_UserNotificationStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserNotificationStatusInclude<ExtArgs> | null
    /**
     * Filter which idnbi_UserNotificationStatus to delete.
     */
    where: idnbi_UserNotificationStatusWhereUniqueInput
  }

  /**
   * idnbi_UserNotificationStatus deleteMany
   */
  export type idnbi_UserNotificationStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idnbi_UserNotificationStatuses to delete
     */
    where?: idnbi_UserNotificationStatusWhereInput
    /**
     * Limit how many idnbi_UserNotificationStatuses to delete.
     */
    limit?: number
  }

  /**
   * idnbi_UserNotificationStatus without action
   */
  export type idnbi_UserNotificationStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_UserNotificationStatus
     */
    select?: idnbi_UserNotificationStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_UserNotificationStatus
     */
    omit?: idnbi_UserNotificationStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserNotificationStatusInclude<ExtArgs> | null
  }


  /**
   * Model idnbi_EmailTemplate
   */

  export type AggregateIdnbi_EmailTemplate = {
    _count: Idnbi_EmailTemplateCountAggregateOutputType | null
    _min: Idnbi_EmailTemplateMinAggregateOutputType | null
    _max: Idnbi_EmailTemplateMaxAggregateOutputType | null
  }

  export type Idnbi_EmailTemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    subject: string | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Idnbi_EmailTemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    subject: string | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Idnbi_EmailTemplateCountAggregateOutputType = {
    id: number
    name: number
    subject: number
    content: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Idnbi_EmailTemplateMinAggregateInputType = {
    id?: true
    name?: true
    subject?: true
    content?: true
    created_at?: true
    updated_at?: true
  }

  export type Idnbi_EmailTemplateMaxAggregateInputType = {
    id?: true
    name?: true
    subject?: true
    content?: true
    created_at?: true
    updated_at?: true
  }

  export type Idnbi_EmailTemplateCountAggregateInputType = {
    id?: true
    name?: true
    subject?: true
    content?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Idnbi_EmailTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idnbi_EmailTemplate to aggregate.
     */
    where?: idnbi_EmailTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_EmailTemplates to fetch.
     */
    orderBy?: idnbi_EmailTemplateOrderByWithRelationInput | idnbi_EmailTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: idnbi_EmailTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_EmailTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_EmailTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned idnbi_EmailTemplates
    **/
    _count?: true | Idnbi_EmailTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Idnbi_EmailTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Idnbi_EmailTemplateMaxAggregateInputType
  }

  export type GetIdnbi_EmailTemplateAggregateType<T extends Idnbi_EmailTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateIdnbi_EmailTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdnbi_EmailTemplate[P]>
      : GetScalarType<T[P], AggregateIdnbi_EmailTemplate[P]>
  }




  export type idnbi_EmailTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: idnbi_EmailTemplateWhereInput
    orderBy?: idnbi_EmailTemplateOrderByWithAggregationInput | idnbi_EmailTemplateOrderByWithAggregationInput[]
    by: Idnbi_EmailTemplateScalarFieldEnum[] | Idnbi_EmailTemplateScalarFieldEnum
    having?: idnbi_EmailTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Idnbi_EmailTemplateCountAggregateInputType | true
    _min?: Idnbi_EmailTemplateMinAggregateInputType
    _max?: Idnbi_EmailTemplateMaxAggregateInputType
  }

  export type Idnbi_EmailTemplateGroupByOutputType = {
    id: string
    name: string
    subject: string
    content: string
    created_at: Date
    updated_at: Date
    _count: Idnbi_EmailTemplateCountAggregateOutputType | null
    _min: Idnbi_EmailTemplateMinAggregateOutputType | null
    _max: Idnbi_EmailTemplateMaxAggregateOutputType | null
  }

  type GetIdnbi_EmailTemplateGroupByPayload<T extends idnbi_EmailTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Idnbi_EmailTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Idnbi_EmailTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Idnbi_EmailTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], Idnbi_EmailTemplateGroupByOutputType[P]>
        }
      >
    >


  export type idnbi_EmailTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subject?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["idnbi_EmailTemplate"]>

  export type idnbi_EmailTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subject?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["idnbi_EmailTemplate"]>

  export type idnbi_EmailTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subject?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["idnbi_EmailTemplate"]>

  export type idnbi_EmailTemplateSelectScalar = {
    id?: boolean
    name?: boolean
    subject?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type idnbi_EmailTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "subject" | "content" | "created_at" | "updated_at", ExtArgs["result"]["idnbi_EmailTemplate"]>

  export type $idnbi_EmailTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "idnbi_EmailTemplate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      subject: string
      content: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["idnbi_EmailTemplate"]>
    composites: {}
  }

  type idnbi_EmailTemplateGetPayload<S extends boolean | null | undefined | idnbi_EmailTemplateDefaultArgs> = $Result.GetResult<Prisma.$idnbi_EmailTemplatePayload, S>

  type idnbi_EmailTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<idnbi_EmailTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Idnbi_EmailTemplateCountAggregateInputType | true
    }

  export interface idnbi_EmailTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['idnbi_EmailTemplate'], meta: { name: 'idnbi_EmailTemplate' } }
    /**
     * Find zero or one Idnbi_EmailTemplate that matches the filter.
     * @param {idnbi_EmailTemplateFindUniqueArgs} args - Arguments to find a Idnbi_EmailTemplate
     * @example
     * // Get one Idnbi_EmailTemplate
     * const idnbi_EmailTemplate = await prisma.idnbi_EmailTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends idnbi_EmailTemplateFindUniqueArgs>(args: SelectSubset<T, idnbi_EmailTemplateFindUniqueArgs<ExtArgs>>): Prisma__idnbi_EmailTemplateClient<$Result.GetResult<Prisma.$idnbi_EmailTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Idnbi_EmailTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {idnbi_EmailTemplateFindUniqueOrThrowArgs} args - Arguments to find a Idnbi_EmailTemplate
     * @example
     * // Get one Idnbi_EmailTemplate
     * const idnbi_EmailTemplate = await prisma.idnbi_EmailTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends idnbi_EmailTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, idnbi_EmailTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__idnbi_EmailTemplateClient<$Result.GetResult<Prisma.$idnbi_EmailTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idnbi_EmailTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_EmailTemplateFindFirstArgs} args - Arguments to find a Idnbi_EmailTemplate
     * @example
     * // Get one Idnbi_EmailTemplate
     * const idnbi_EmailTemplate = await prisma.idnbi_EmailTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends idnbi_EmailTemplateFindFirstArgs>(args?: SelectSubset<T, idnbi_EmailTemplateFindFirstArgs<ExtArgs>>): Prisma__idnbi_EmailTemplateClient<$Result.GetResult<Prisma.$idnbi_EmailTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idnbi_EmailTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_EmailTemplateFindFirstOrThrowArgs} args - Arguments to find a Idnbi_EmailTemplate
     * @example
     * // Get one Idnbi_EmailTemplate
     * const idnbi_EmailTemplate = await prisma.idnbi_EmailTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends idnbi_EmailTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, idnbi_EmailTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__idnbi_EmailTemplateClient<$Result.GetResult<Prisma.$idnbi_EmailTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Idnbi_EmailTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_EmailTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Idnbi_EmailTemplates
     * const idnbi_EmailTemplates = await prisma.idnbi_EmailTemplate.findMany()
     * 
     * // Get first 10 Idnbi_EmailTemplates
     * const idnbi_EmailTemplates = await prisma.idnbi_EmailTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const idnbi_EmailTemplateWithIdOnly = await prisma.idnbi_EmailTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends idnbi_EmailTemplateFindManyArgs>(args?: SelectSubset<T, idnbi_EmailTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_EmailTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Idnbi_EmailTemplate.
     * @param {idnbi_EmailTemplateCreateArgs} args - Arguments to create a Idnbi_EmailTemplate.
     * @example
     * // Create one Idnbi_EmailTemplate
     * const Idnbi_EmailTemplate = await prisma.idnbi_EmailTemplate.create({
     *   data: {
     *     // ... data to create a Idnbi_EmailTemplate
     *   }
     * })
     * 
     */
    create<T extends idnbi_EmailTemplateCreateArgs>(args: SelectSubset<T, idnbi_EmailTemplateCreateArgs<ExtArgs>>): Prisma__idnbi_EmailTemplateClient<$Result.GetResult<Prisma.$idnbi_EmailTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Idnbi_EmailTemplates.
     * @param {idnbi_EmailTemplateCreateManyArgs} args - Arguments to create many Idnbi_EmailTemplates.
     * @example
     * // Create many Idnbi_EmailTemplates
     * const idnbi_EmailTemplate = await prisma.idnbi_EmailTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends idnbi_EmailTemplateCreateManyArgs>(args?: SelectSubset<T, idnbi_EmailTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Idnbi_EmailTemplates and returns the data saved in the database.
     * @param {idnbi_EmailTemplateCreateManyAndReturnArgs} args - Arguments to create many Idnbi_EmailTemplates.
     * @example
     * // Create many Idnbi_EmailTemplates
     * const idnbi_EmailTemplate = await prisma.idnbi_EmailTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Idnbi_EmailTemplates and only return the `id`
     * const idnbi_EmailTemplateWithIdOnly = await prisma.idnbi_EmailTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends idnbi_EmailTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, idnbi_EmailTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_EmailTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Idnbi_EmailTemplate.
     * @param {idnbi_EmailTemplateDeleteArgs} args - Arguments to delete one Idnbi_EmailTemplate.
     * @example
     * // Delete one Idnbi_EmailTemplate
     * const Idnbi_EmailTemplate = await prisma.idnbi_EmailTemplate.delete({
     *   where: {
     *     // ... filter to delete one Idnbi_EmailTemplate
     *   }
     * })
     * 
     */
    delete<T extends idnbi_EmailTemplateDeleteArgs>(args: SelectSubset<T, idnbi_EmailTemplateDeleteArgs<ExtArgs>>): Prisma__idnbi_EmailTemplateClient<$Result.GetResult<Prisma.$idnbi_EmailTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Idnbi_EmailTemplate.
     * @param {idnbi_EmailTemplateUpdateArgs} args - Arguments to update one Idnbi_EmailTemplate.
     * @example
     * // Update one Idnbi_EmailTemplate
     * const idnbi_EmailTemplate = await prisma.idnbi_EmailTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends idnbi_EmailTemplateUpdateArgs>(args: SelectSubset<T, idnbi_EmailTemplateUpdateArgs<ExtArgs>>): Prisma__idnbi_EmailTemplateClient<$Result.GetResult<Prisma.$idnbi_EmailTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Idnbi_EmailTemplates.
     * @param {idnbi_EmailTemplateDeleteManyArgs} args - Arguments to filter Idnbi_EmailTemplates to delete.
     * @example
     * // Delete a few Idnbi_EmailTemplates
     * const { count } = await prisma.idnbi_EmailTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends idnbi_EmailTemplateDeleteManyArgs>(args?: SelectSubset<T, idnbi_EmailTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idnbi_EmailTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_EmailTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Idnbi_EmailTemplates
     * const idnbi_EmailTemplate = await prisma.idnbi_EmailTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends idnbi_EmailTemplateUpdateManyArgs>(args: SelectSubset<T, idnbi_EmailTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idnbi_EmailTemplates and returns the data updated in the database.
     * @param {idnbi_EmailTemplateUpdateManyAndReturnArgs} args - Arguments to update many Idnbi_EmailTemplates.
     * @example
     * // Update many Idnbi_EmailTemplates
     * const idnbi_EmailTemplate = await prisma.idnbi_EmailTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Idnbi_EmailTemplates and only return the `id`
     * const idnbi_EmailTemplateWithIdOnly = await prisma.idnbi_EmailTemplate.updateManyAndReturn({
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
    updateManyAndReturn<T extends idnbi_EmailTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, idnbi_EmailTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_EmailTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Idnbi_EmailTemplate.
     * @param {idnbi_EmailTemplateUpsertArgs} args - Arguments to update or create a Idnbi_EmailTemplate.
     * @example
     * // Update or create a Idnbi_EmailTemplate
     * const idnbi_EmailTemplate = await prisma.idnbi_EmailTemplate.upsert({
     *   create: {
     *     // ... data to create a Idnbi_EmailTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Idnbi_EmailTemplate we want to update
     *   }
     * })
     */
    upsert<T extends idnbi_EmailTemplateUpsertArgs>(args: SelectSubset<T, idnbi_EmailTemplateUpsertArgs<ExtArgs>>): Prisma__idnbi_EmailTemplateClient<$Result.GetResult<Prisma.$idnbi_EmailTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Idnbi_EmailTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_EmailTemplateCountArgs} args - Arguments to filter Idnbi_EmailTemplates to count.
     * @example
     * // Count the number of Idnbi_EmailTemplates
     * const count = await prisma.idnbi_EmailTemplate.count({
     *   where: {
     *     // ... the filter for the Idnbi_EmailTemplates we want to count
     *   }
     * })
    **/
    count<T extends idnbi_EmailTemplateCountArgs>(
      args?: Subset<T, idnbi_EmailTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Idnbi_EmailTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Idnbi_EmailTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Idnbi_EmailTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Idnbi_EmailTemplateAggregateArgs>(args: Subset<T, Idnbi_EmailTemplateAggregateArgs>): Prisma.PrismaPromise<GetIdnbi_EmailTemplateAggregateType<T>>

    /**
     * Group by Idnbi_EmailTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_EmailTemplateGroupByArgs} args - Group by arguments.
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
      T extends idnbi_EmailTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: idnbi_EmailTemplateGroupByArgs['orderBy'] }
        : { orderBy?: idnbi_EmailTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, idnbi_EmailTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdnbi_EmailTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the idnbi_EmailTemplate model
   */
  readonly fields: idnbi_EmailTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for idnbi_EmailTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__idnbi_EmailTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the idnbi_EmailTemplate model
   */
  interface idnbi_EmailTemplateFieldRefs {
    readonly id: FieldRef<"idnbi_EmailTemplate", 'String'>
    readonly name: FieldRef<"idnbi_EmailTemplate", 'String'>
    readonly subject: FieldRef<"idnbi_EmailTemplate", 'String'>
    readonly content: FieldRef<"idnbi_EmailTemplate", 'String'>
    readonly created_at: FieldRef<"idnbi_EmailTemplate", 'DateTime'>
    readonly updated_at: FieldRef<"idnbi_EmailTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * idnbi_EmailTemplate findUnique
   */
  export type idnbi_EmailTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_EmailTemplate
     */
    select?: idnbi_EmailTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_EmailTemplate
     */
    omit?: idnbi_EmailTemplateOmit<ExtArgs> | null
    /**
     * Filter, which idnbi_EmailTemplate to fetch.
     */
    where: idnbi_EmailTemplateWhereUniqueInput
  }

  /**
   * idnbi_EmailTemplate findUniqueOrThrow
   */
  export type idnbi_EmailTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_EmailTemplate
     */
    select?: idnbi_EmailTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_EmailTemplate
     */
    omit?: idnbi_EmailTemplateOmit<ExtArgs> | null
    /**
     * Filter, which idnbi_EmailTemplate to fetch.
     */
    where: idnbi_EmailTemplateWhereUniqueInput
  }

  /**
   * idnbi_EmailTemplate findFirst
   */
  export type idnbi_EmailTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_EmailTemplate
     */
    select?: idnbi_EmailTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_EmailTemplate
     */
    omit?: idnbi_EmailTemplateOmit<ExtArgs> | null
    /**
     * Filter, which idnbi_EmailTemplate to fetch.
     */
    where?: idnbi_EmailTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_EmailTemplates to fetch.
     */
    orderBy?: idnbi_EmailTemplateOrderByWithRelationInput | idnbi_EmailTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idnbi_EmailTemplates.
     */
    cursor?: idnbi_EmailTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_EmailTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_EmailTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idnbi_EmailTemplates.
     */
    distinct?: Idnbi_EmailTemplateScalarFieldEnum | Idnbi_EmailTemplateScalarFieldEnum[]
  }

  /**
   * idnbi_EmailTemplate findFirstOrThrow
   */
  export type idnbi_EmailTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_EmailTemplate
     */
    select?: idnbi_EmailTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_EmailTemplate
     */
    omit?: idnbi_EmailTemplateOmit<ExtArgs> | null
    /**
     * Filter, which idnbi_EmailTemplate to fetch.
     */
    where?: idnbi_EmailTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_EmailTemplates to fetch.
     */
    orderBy?: idnbi_EmailTemplateOrderByWithRelationInput | idnbi_EmailTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idnbi_EmailTemplates.
     */
    cursor?: idnbi_EmailTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_EmailTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_EmailTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idnbi_EmailTemplates.
     */
    distinct?: Idnbi_EmailTemplateScalarFieldEnum | Idnbi_EmailTemplateScalarFieldEnum[]
  }

  /**
   * idnbi_EmailTemplate findMany
   */
  export type idnbi_EmailTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_EmailTemplate
     */
    select?: idnbi_EmailTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_EmailTemplate
     */
    omit?: idnbi_EmailTemplateOmit<ExtArgs> | null
    /**
     * Filter, which idnbi_EmailTemplates to fetch.
     */
    where?: idnbi_EmailTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_EmailTemplates to fetch.
     */
    orderBy?: idnbi_EmailTemplateOrderByWithRelationInput | idnbi_EmailTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing idnbi_EmailTemplates.
     */
    cursor?: idnbi_EmailTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_EmailTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_EmailTemplates.
     */
    skip?: number
    distinct?: Idnbi_EmailTemplateScalarFieldEnum | Idnbi_EmailTemplateScalarFieldEnum[]
  }

  /**
   * idnbi_EmailTemplate create
   */
  export type idnbi_EmailTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_EmailTemplate
     */
    select?: idnbi_EmailTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_EmailTemplate
     */
    omit?: idnbi_EmailTemplateOmit<ExtArgs> | null
    /**
     * The data needed to create a idnbi_EmailTemplate.
     */
    data: XOR<idnbi_EmailTemplateCreateInput, idnbi_EmailTemplateUncheckedCreateInput>
  }

  /**
   * idnbi_EmailTemplate createMany
   */
  export type idnbi_EmailTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many idnbi_EmailTemplates.
     */
    data: idnbi_EmailTemplateCreateManyInput | idnbi_EmailTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * idnbi_EmailTemplate createManyAndReturn
   */
  export type idnbi_EmailTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_EmailTemplate
     */
    select?: idnbi_EmailTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_EmailTemplate
     */
    omit?: idnbi_EmailTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many idnbi_EmailTemplates.
     */
    data: idnbi_EmailTemplateCreateManyInput | idnbi_EmailTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * idnbi_EmailTemplate update
   */
  export type idnbi_EmailTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_EmailTemplate
     */
    select?: idnbi_EmailTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_EmailTemplate
     */
    omit?: idnbi_EmailTemplateOmit<ExtArgs> | null
    /**
     * The data needed to update a idnbi_EmailTemplate.
     */
    data: XOR<idnbi_EmailTemplateUpdateInput, idnbi_EmailTemplateUncheckedUpdateInput>
    /**
     * Choose, which idnbi_EmailTemplate to update.
     */
    where: idnbi_EmailTemplateWhereUniqueInput
  }

  /**
   * idnbi_EmailTemplate updateMany
   */
  export type idnbi_EmailTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update idnbi_EmailTemplates.
     */
    data: XOR<idnbi_EmailTemplateUpdateManyMutationInput, idnbi_EmailTemplateUncheckedUpdateManyInput>
    /**
     * Filter which idnbi_EmailTemplates to update
     */
    where?: idnbi_EmailTemplateWhereInput
    /**
     * Limit how many idnbi_EmailTemplates to update.
     */
    limit?: number
  }

  /**
   * idnbi_EmailTemplate updateManyAndReturn
   */
  export type idnbi_EmailTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_EmailTemplate
     */
    select?: idnbi_EmailTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_EmailTemplate
     */
    omit?: idnbi_EmailTemplateOmit<ExtArgs> | null
    /**
     * The data used to update idnbi_EmailTemplates.
     */
    data: XOR<idnbi_EmailTemplateUpdateManyMutationInput, idnbi_EmailTemplateUncheckedUpdateManyInput>
    /**
     * Filter which idnbi_EmailTemplates to update
     */
    where?: idnbi_EmailTemplateWhereInput
    /**
     * Limit how many idnbi_EmailTemplates to update.
     */
    limit?: number
  }

  /**
   * idnbi_EmailTemplate upsert
   */
  export type idnbi_EmailTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_EmailTemplate
     */
    select?: idnbi_EmailTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_EmailTemplate
     */
    omit?: idnbi_EmailTemplateOmit<ExtArgs> | null
    /**
     * The filter to search for the idnbi_EmailTemplate to update in case it exists.
     */
    where: idnbi_EmailTemplateWhereUniqueInput
    /**
     * In case the idnbi_EmailTemplate found by the `where` argument doesn't exist, create a new idnbi_EmailTemplate with this data.
     */
    create: XOR<idnbi_EmailTemplateCreateInput, idnbi_EmailTemplateUncheckedCreateInput>
    /**
     * In case the idnbi_EmailTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<idnbi_EmailTemplateUpdateInput, idnbi_EmailTemplateUncheckedUpdateInput>
  }

  /**
   * idnbi_EmailTemplate delete
   */
  export type idnbi_EmailTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_EmailTemplate
     */
    select?: idnbi_EmailTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_EmailTemplate
     */
    omit?: idnbi_EmailTemplateOmit<ExtArgs> | null
    /**
     * Filter which idnbi_EmailTemplate to delete.
     */
    where: idnbi_EmailTemplateWhereUniqueInput
  }

  /**
   * idnbi_EmailTemplate deleteMany
   */
  export type idnbi_EmailTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idnbi_EmailTemplates to delete
     */
    where?: idnbi_EmailTemplateWhereInput
    /**
     * Limit how many idnbi_EmailTemplates to delete.
     */
    limit?: number
  }

  /**
   * idnbi_EmailTemplate without action
   */
  export type idnbi_EmailTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_EmailTemplate
     */
    select?: idnbi_EmailTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_EmailTemplate
     */
    omit?: idnbi_EmailTemplateOmit<ExtArgs> | null
  }


  /**
   * Model idnbi_SystemConfiguration
   */

  export type AggregateIdnbi_SystemConfiguration = {
    _count: Idnbi_SystemConfigurationCountAggregateOutputType | null
    _min: Idnbi_SystemConfigurationMinAggregateOutputType | null
    _max: Idnbi_SystemConfigurationMaxAggregateOutputType | null
  }

  export type Idnbi_SystemConfigurationMinAggregateOutputType = {
    id: string | null
    app_name: string | null
    logo_url: string | null
    login_bg_url: string | null
    footer_text: string | null
    default_profile_photo_url: string | null
    jumbotron_content: string | null
    marquee_content: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Idnbi_SystemConfigurationMaxAggregateOutputType = {
    id: string | null
    app_name: string | null
    logo_url: string | null
    login_bg_url: string | null
    footer_text: string | null
    default_profile_photo_url: string | null
    jumbotron_content: string | null
    marquee_content: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Idnbi_SystemConfigurationCountAggregateOutputType = {
    id: number
    app_name: number
    logo_url: number
    login_bg_url: number
    footer_text: number
    default_profile_photo_url: number
    jumbotron_content: number
    marquee_content: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Idnbi_SystemConfigurationMinAggregateInputType = {
    id?: true
    app_name?: true
    logo_url?: true
    login_bg_url?: true
    footer_text?: true
    default_profile_photo_url?: true
    jumbotron_content?: true
    marquee_content?: true
    created_at?: true
    updated_at?: true
  }

  export type Idnbi_SystemConfigurationMaxAggregateInputType = {
    id?: true
    app_name?: true
    logo_url?: true
    login_bg_url?: true
    footer_text?: true
    default_profile_photo_url?: true
    jumbotron_content?: true
    marquee_content?: true
    created_at?: true
    updated_at?: true
  }

  export type Idnbi_SystemConfigurationCountAggregateInputType = {
    id?: true
    app_name?: true
    logo_url?: true
    login_bg_url?: true
    footer_text?: true
    default_profile_photo_url?: true
    jumbotron_content?: true
    marquee_content?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Idnbi_SystemConfigurationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idnbi_SystemConfiguration to aggregate.
     */
    where?: idnbi_SystemConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_SystemConfigurations to fetch.
     */
    orderBy?: idnbi_SystemConfigurationOrderByWithRelationInput | idnbi_SystemConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: idnbi_SystemConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_SystemConfigurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_SystemConfigurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned idnbi_SystemConfigurations
    **/
    _count?: true | Idnbi_SystemConfigurationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Idnbi_SystemConfigurationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Idnbi_SystemConfigurationMaxAggregateInputType
  }

  export type GetIdnbi_SystemConfigurationAggregateType<T extends Idnbi_SystemConfigurationAggregateArgs> = {
        [P in keyof T & keyof AggregateIdnbi_SystemConfiguration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdnbi_SystemConfiguration[P]>
      : GetScalarType<T[P], AggregateIdnbi_SystemConfiguration[P]>
  }




  export type idnbi_SystemConfigurationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: idnbi_SystemConfigurationWhereInput
    orderBy?: idnbi_SystemConfigurationOrderByWithAggregationInput | idnbi_SystemConfigurationOrderByWithAggregationInput[]
    by: Idnbi_SystemConfigurationScalarFieldEnum[] | Idnbi_SystemConfigurationScalarFieldEnum
    having?: idnbi_SystemConfigurationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Idnbi_SystemConfigurationCountAggregateInputType | true
    _min?: Idnbi_SystemConfigurationMinAggregateInputType
    _max?: Idnbi_SystemConfigurationMaxAggregateInputType
  }

  export type Idnbi_SystemConfigurationGroupByOutputType = {
    id: string
    app_name: string
    logo_url: string | null
    login_bg_url: string | null
    footer_text: string | null
    default_profile_photo_url: string | null
    jumbotron_content: string | null
    marquee_content: string | null
    created_at: Date
    updated_at: Date
    _count: Idnbi_SystemConfigurationCountAggregateOutputType | null
    _min: Idnbi_SystemConfigurationMinAggregateOutputType | null
    _max: Idnbi_SystemConfigurationMaxAggregateOutputType | null
  }

  type GetIdnbi_SystemConfigurationGroupByPayload<T extends idnbi_SystemConfigurationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Idnbi_SystemConfigurationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Idnbi_SystemConfigurationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Idnbi_SystemConfigurationGroupByOutputType[P]>
            : GetScalarType<T[P], Idnbi_SystemConfigurationGroupByOutputType[P]>
        }
      >
    >


  export type idnbi_SystemConfigurationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    app_name?: boolean
    logo_url?: boolean
    login_bg_url?: boolean
    footer_text?: boolean
    default_profile_photo_url?: boolean
    jumbotron_content?: boolean
    marquee_content?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["idnbi_SystemConfiguration"]>

  export type idnbi_SystemConfigurationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    app_name?: boolean
    logo_url?: boolean
    login_bg_url?: boolean
    footer_text?: boolean
    default_profile_photo_url?: boolean
    jumbotron_content?: boolean
    marquee_content?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["idnbi_SystemConfiguration"]>

  export type idnbi_SystemConfigurationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    app_name?: boolean
    logo_url?: boolean
    login_bg_url?: boolean
    footer_text?: boolean
    default_profile_photo_url?: boolean
    jumbotron_content?: boolean
    marquee_content?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["idnbi_SystemConfiguration"]>

  export type idnbi_SystemConfigurationSelectScalar = {
    id?: boolean
    app_name?: boolean
    logo_url?: boolean
    login_bg_url?: boolean
    footer_text?: boolean
    default_profile_photo_url?: boolean
    jumbotron_content?: boolean
    marquee_content?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type idnbi_SystemConfigurationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "app_name" | "logo_url" | "login_bg_url" | "footer_text" | "default_profile_photo_url" | "jumbotron_content" | "marquee_content" | "created_at" | "updated_at", ExtArgs["result"]["idnbi_SystemConfiguration"]>

  export type $idnbi_SystemConfigurationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "idnbi_SystemConfiguration"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      app_name: string
      logo_url: string | null
      login_bg_url: string | null
      footer_text: string | null
      default_profile_photo_url: string | null
      jumbotron_content: string | null
      marquee_content: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["idnbi_SystemConfiguration"]>
    composites: {}
  }

  type idnbi_SystemConfigurationGetPayload<S extends boolean | null | undefined | idnbi_SystemConfigurationDefaultArgs> = $Result.GetResult<Prisma.$idnbi_SystemConfigurationPayload, S>

  type idnbi_SystemConfigurationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<idnbi_SystemConfigurationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Idnbi_SystemConfigurationCountAggregateInputType | true
    }

  export interface idnbi_SystemConfigurationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['idnbi_SystemConfiguration'], meta: { name: 'idnbi_SystemConfiguration' } }
    /**
     * Find zero or one Idnbi_SystemConfiguration that matches the filter.
     * @param {idnbi_SystemConfigurationFindUniqueArgs} args - Arguments to find a Idnbi_SystemConfiguration
     * @example
     * // Get one Idnbi_SystemConfiguration
     * const idnbi_SystemConfiguration = await prisma.idnbi_SystemConfiguration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends idnbi_SystemConfigurationFindUniqueArgs>(args: SelectSubset<T, idnbi_SystemConfigurationFindUniqueArgs<ExtArgs>>): Prisma__idnbi_SystemConfigurationClient<$Result.GetResult<Prisma.$idnbi_SystemConfigurationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Idnbi_SystemConfiguration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {idnbi_SystemConfigurationFindUniqueOrThrowArgs} args - Arguments to find a Idnbi_SystemConfiguration
     * @example
     * // Get one Idnbi_SystemConfiguration
     * const idnbi_SystemConfiguration = await prisma.idnbi_SystemConfiguration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends idnbi_SystemConfigurationFindUniqueOrThrowArgs>(args: SelectSubset<T, idnbi_SystemConfigurationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__idnbi_SystemConfigurationClient<$Result.GetResult<Prisma.$idnbi_SystemConfigurationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idnbi_SystemConfiguration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_SystemConfigurationFindFirstArgs} args - Arguments to find a Idnbi_SystemConfiguration
     * @example
     * // Get one Idnbi_SystemConfiguration
     * const idnbi_SystemConfiguration = await prisma.idnbi_SystemConfiguration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends idnbi_SystemConfigurationFindFirstArgs>(args?: SelectSubset<T, idnbi_SystemConfigurationFindFirstArgs<ExtArgs>>): Prisma__idnbi_SystemConfigurationClient<$Result.GetResult<Prisma.$idnbi_SystemConfigurationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idnbi_SystemConfiguration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_SystemConfigurationFindFirstOrThrowArgs} args - Arguments to find a Idnbi_SystemConfiguration
     * @example
     * // Get one Idnbi_SystemConfiguration
     * const idnbi_SystemConfiguration = await prisma.idnbi_SystemConfiguration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends idnbi_SystemConfigurationFindFirstOrThrowArgs>(args?: SelectSubset<T, idnbi_SystemConfigurationFindFirstOrThrowArgs<ExtArgs>>): Prisma__idnbi_SystemConfigurationClient<$Result.GetResult<Prisma.$idnbi_SystemConfigurationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Idnbi_SystemConfigurations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_SystemConfigurationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Idnbi_SystemConfigurations
     * const idnbi_SystemConfigurations = await prisma.idnbi_SystemConfiguration.findMany()
     * 
     * // Get first 10 Idnbi_SystemConfigurations
     * const idnbi_SystemConfigurations = await prisma.idnbi_SystemConfiguration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const idnbi_SystemConfigurationWithIdOnly = await prisma.idnbi_SystemConfiguration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends idnbi_SystemConfigurationFindManyArgs>(args?: SelectSubset<T, idnbi_SystemConfigurationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_SystemConfigurationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Idnbi_SystemConfiguration.
     * @param {idnbi_SystemConfigurationCreateArgs} args - Arguments to create a Idnbi_SystemConfiguration.
     * @example
     * // Create one Idnbi_SystemConfiguration
     * const Idnbi_SystemConfiguration = await prisma.idnbi_SystemConfiguration.create({
     *   data: {
     *     // ... data to create a Idnbi_SystemConfiguration
     *   }
     * })
     * 
     */
    create<T extends idnbi_SystemConfigurationCreateArgs>(args: SelectSubset<T, idnbi_SystemConfigurationCreateArgs<ExtArgs>>): Prisma__idnbi_SystemConfigurationClient<$Result.GetResult<Prisma.$idnbi_SystemConfigurationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Idnbi_SystemConfigurations.
     * @param {idnbi_SystemConfigurationCreateManyArgs} args - Arguments to create many Idnbi_SystemConfigurations.
     * @example
     * // Create many Idnbi_SystemConfigurations
     * const idnbi_SystemConfiguration = await prisma.idnbi_SystemConfiguration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends idnbi_SystemConfigurationCreateManyArgs>(args?: SelectSubset<T, idnbi_SystemConfigurationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Idnbi_SystemConfigurations and returns the data saved in the database.
     * @param {idnbi_SystemConfigurationCreateManyAndReturnArgs} args - Arguments to create many Idnbi_SystemConfigurations.
     * @example
     * // Create many Idnbi_SystemConfigurations
     * const idnbi_SystemConfiguration = await prisma.idnbi_SystemConfiguration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Idnbi_SystemConfigurations and only return the `id`
     * const idnbi_SystemConfigurationWithIdOnly = await prisma.idnbi_SystemConfiguration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends idnbi_SystemConfigurationCreateManyAndReturnArgs>(args?: SelectSubset<T, idnbi_SystemConfigurationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_SystemConfigurationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Idnbi_SystemConfiguration.
     * @param {idnbi_SystemConfigurationDeleteArgs} args - Arguments to delete one Idnbi_SystemConfiguration.
     * @example
     * // Delete one Idnbi_SystemConfiguration
     * const Idnbi_SystemConfiguration = await prisma.idnbi_SystemConfiguration.delete({
     *   where: {
     *     // ... filter to delete one Idnbi_SystemConfiguration
     *   }
     * })
     * 
     */
    delete<T extends idnbi_SystemConfigurationDeleteArgs>(args: SelectSubset<T, idnbi_SystemConfigurationDeleteArgs<ExtArgs>>): Prisma__idnbi_SystemConfigurationClient<$Result.GetResult<Prisma.$idnbi_SystemConfigurationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Idnbi_SystemConfiguration.
     * @param {idnbi_SystemConfigurationUpdateArgs} args - Arguments to update one Idnbi_SystemConfiguration.
     * @example
     * // Update one Idnbi_SystemConfiguration
     * const idnbi_SystemConfiguration = await prisma.idnbi_SystemConfiguration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends idnbi_SystemConfigurationUpdateArgs>(args: SelectSubset<T, idnbi_SystemConfigurationUpdateArgs<ExtArgs>>): Prisma__idnbi_SystemConfigurationClient<$Result.GetResult<Prisma.$idnbi_SystemConfigurationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Idnbi_SystemConfigurations.
     * @param {idnbi_SystemConfigurationDeleteManyArgs} args - Arguments to filter Idnbi_SystemConfigurations to delete.
     * @example
     * // Delete a few Idnbi_SystemConfigurations
     * const { count } = await prisma.idnbi_SystemConfiguration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends idnbi_SystemConfigurationDeleteManyArgs>(args?: SelectSubset<T, idnbi_SystemConfigurationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idnbi_SystemConfigurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_SystemConfigurationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Idnbi_SystemConfigurations
     * const idnbi_SystemConfiguration = await prisma.idnbi_SystemConfiguration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends idnbi_SystemConfigurationUpdateManyArgs>(args: SelectSubset<T, idnbi_SystemConfigurationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idnbi_SystemConfigurations and returns the data updated in the database.
     * @param {idnbi_SystemConfigurationUpdateManyAndReturnArgs} args - Arguments to update many Idnbi_SystemConfigurations.
     * @example
     * // Update many Idnbi_SystemConfigurations
     * const idnbi_SystemConfiguration = await prisma.idnbi_SystemConfiguration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Idnbi_SystemConfigurations and only return the `id`
     * const idnbi_SystemConfigurationWithIdOnly = await prisma.idnbi_SystemConfiguration.updateManyAndReturn({
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
    updateManyAndReturn<T extends idnbi_SystemConfigurationUpdateManyAndReturnArgs>(args: SelectSubset<T, idnbi_SystemConfigurationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_SystemConfigurationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Idnbi_SystemConfiguration.
     * @param {idnbi_SystemConfigurationUpsertArgs} args - Arguments to update or create a Idnbi_SystemConfiguration.
     * @example
     * // Update or create a Idnbi_SystemConfiguration
     * const idnbi_SystemConfiguration = await prisma.idnbi_SystemConfiguration.upsert({
     *   create: {
     *     // ... data to create a Idnbi_SystemConfiguration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Idnbi_SystemConfiguration we want to update
     *   }
     * })
     */
    upsert<T extends idnbi_SystemConfigurationUpsertArgs>(args: SelectSubset<T, idnbi_SystemConfigurationUpsertArgs<ExtArgs>>): Prisma__idnbi_SystemConfigurationClient<$Result.GetResult<Prisma.$idnbi_SystemConfigurationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Idnbi_SystemConfigurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_SystemConfigurationCountArgs} args - Arguments to filter Idnbi_SystemConfigurations to count.
     * @example
     * // Count the number of Idnbi_SystemConfigurations
     * const count = await prisma.idnbi_SystemConfiguration.count({
     *   where: {
     *     // ... the filter for the Idnbi_SystemConfigurations we want to count
     *   }
     * })
    **/
    count<T extends idnbi_SystemConfigurationCountArgs>(
      args?: Subset<T, idnbi_SystemConfigurationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Idnbi_SystemConfigurationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Idnbi_SystemConfiguration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Idnbi_SystemConfigurationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Idnbi_SystemConfigurationAggregateArgs>(args: Subset<T, Idnbi_SystemConfigurationAggregateArgs>): Prisma.PrismaPromise<GetIdnbi_SystemConfigurationAggregateType<T>>

    /**
     * Group by Idnbi_SystemConfiguration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_SystemConfigurationGroupByArgs} args - Group by arguments.
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
      T extends idnbi_SystemConfigurationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: idnbi_SystemConfigurationGroupByArgs['orderBy'] }
        : { orderBy?: idnbi_SystemConfigurationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, idnbi_SystemConfigurationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdnbi_SystemConfigurationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the idnbi_SystemConfiguration model
   */
  readonly fields: idnbi_SystemConfigurationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for idnbi_SystemConfiguration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__idnbi_SystemConfigurationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the idnbi_SystemConfiguration model
   */
  interface idnbi_SystemConfigurationFieldRefs {
    readonly id: FieldRef<"idnbi_SystemConfiguration", 'String'>
    readonly app_name: FieldRef<"idnbi_SystemConfiguration", 'String'>
    readonly logo_url: FieldRef<"idnbi_SystemConfiguration", 'String'>
    readonly login_bg_url: FieldRef<"idnbi_SystemConfiguration", 'String'>
    readonly footer_text: FieldRef<"idnbi_SystemConfiguration", 'String'>
    readonly default_profile_photo_url: FieldRef<"idnbi_SystemConfiguration", 'String'>
    readonly jumbotron_content: FieldRef<"idnbi_SystemConfiguration", 'String'>
    readonly marquee_content: FieldRef<"idnbi_SystemConfiguration", 'String'>
    readonly created_at: FieldRef<"idnbi_SystemConfiguration", 'DateTime'>
    readonly updated_at: FieldRef<"idnbi_SystemConfiguration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * idnbi_SystemConfiguration findUnique
   */
  export type idnbi_SystemConfigurationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_SystemConfiguration
     */
    select?: idnbi_SystemConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_SystemConfiguration
     */
    omit?: idnbi_SystemConfigurationOmit<ExtArgs> | null
    /**
     * Filter, which idnbi_SystemConfiguration to fetch.
     */
    where: idnbi_SystemConfigurationWhereUniqueInput
  }

  /**
   * idnbi_SystemConfiguration findUniqueOrThrow
   */
  export type idnbi_SystemConfigurationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_SystemConfiguration
     */
    select?: idnbi_SystemConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_SystemConfiguration
     */
    omit?: idnbi_SystemConfigurationOmit<ExtArgs> | null
    /**
     * Filter, which idnbi_SystemConfiguration to fetch.
     */
    where: idnbi_SystemConfigurationWhereUniqueInput
  }

  /**
   * idnbi_SystemConfiguration findFirst
   */
  export type idnbi_SystemConfigurationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_SystemConfiguration
     */
    select?: idnbi_SystemConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_SystemConfiguration
     */
    omit?: idnbi_SystemConfigurationOmit<ExtArgs> | null
    /**
     * Filter, which idnbi_SystemConfiguration to fetch.
     */
    where?: idnbi_SystemConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_SystemConfigurations to fetch.
     */
    orderBy?: idnbi_SystemConfigurationOrderByWithRelationInput | idnbi_SystemConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idnbi_SystemConfigurations.
     */
    cursor?: idnbi_SystemConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_SystemConfigurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_SystemConfigurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idnbi_SystemConfigurations.
     */
    distinct?: Idnbi_SystemConfigurationScalarFieldEnum | Idnbi_SystemConfigurationScalarFieldEnum[]
  }

  /**
   * idnbi_SystemConfiguration findFirstOrThrow
   */
  export type idnbi_SystemConfigurationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_SystemConfiguration
     */
    select?: idnbi_SystemConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_SystemConfiguration
     */
    omit?: idnbi_SystemConfigurationOmit<ExtArgs> | null
    /**
     * Filter, which idnbi_SystemConfiguration to fetch.
     */
    where?: idnbi_SystemConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_SystemConfigurations to fetch.
     */
    orderBy?: idnbi_SystemConfigurationOrderByWithRelationInput | idnbi_SystemConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idnbi_SystemConfigurations.
     */
    cursor?: idnbi_SystemConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_SystemConfigurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_SystemConfigurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idnbi_SystemConfigurations.
     */
    distinct?: Idnbi_SystemConfigurationScalarFieldEnum | Idnbi_SystemConfigurationScalarFieldEnum[]
  }

  /**
   * idnbi_SystemConfiguration findMany
   */
  export type idnbi_SystemConfigurationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_SystemConfiguration
     */
    select?: idnbi_SystemConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_SystemConfiguration
     */
    omit?: idnbi_SystemConfigurationOmit<ExtArgs> | null
    /**
     * Filter, which idnbi_SystemConfigurations to fetch.
     */
    where?: idnbi_SystemConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_SystemConfigurations to fetch.
     */
    orderBy?: idnbi_SystemConfigurationOrderByWithRelationInput | idnbi_SystemConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing idnbi_SystemConfigurations.
     */
    cursor?: idnbi_SystemConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_SystemConfigurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_SystemConfigurations.
     */
    skip?: number
    distinct?: Idnbi_SystemConfigurationScalarFieldEnum | Idnbi_SystemConfigurationScalarFieldEnum[]
  }

  /**
   * idnbi_SystemConfiguration create
   */
  export type idnbi_SystemConfigurationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_SystemConfiguration
     */
    select?: idnbi_SystemConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_SystemConfiguration
     */
    omit?: idnbi_SystemConfigurationOmit<ExtArgs> | null
    /**
     * The data needed to create a idnbi_SystemConfiguration.
     */
    data: XOR<idnbi_SystemConfigurationCreateInput, idnbi_SystemConfigurationUncheckedCreateInput>
  }

  /**
   * idnbi_SystemConfiguration createMany
   */
  export type idnbi_SystemConfigurationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many idnbi_SystemConfigurations.
     */
    data: idnbi_SystemConfigurationCreateManyInput | idnbi_SystemConfigurationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * idnbi_SystemConfiguration createManyAndReturn
   */
  export type idnbi_SystemConfigurationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_SystemConfiguration
     */
    select?: idnbi_SystemConfigurationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_SystemConfiguration
     */
    omit?: idnbi_SystemConfigurationOmit<ExtArgs> | null
    /**
     * The data used to create many idnbi_SystemConfigurations.
     */
    data: idnbi_SystemConfigurationCreateManyInput | idnbi_SystemConfigurationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * idnbi_SystemConfiguration update
   */
  export type idnbi_SystemConfigurationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_SystemConfiguration
     */
    select?: idnbi_SystemConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_SystemConfiguration
     */
    omit?: idnbi_SystemConfigurationOmit<ExtArgs> | null
    /**
     * The data needed to update a idnbi_SystemConfiguration.
     */
    data: XOR<idnbi_SystemConfigurationUpdateInput, idnbi_SystemConfigurationUncheckedUpdateInput>
    /**
     * Choose, which idnbi_SystemConfiguration to update.
     */
    where: idnbi_SystemConfigurationWhereUniqueInput
  }

  /**
   * idnbi_SystemConfiguration updateMany
   */
  export type idnbi_SystemConfigurationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update idnbi_SystemConfigurations.
     */
    data: XOR<idnbi_SystemConfigurationUpdateManyMutationInput, idnbi_SystemConfigurationUncheckedUpdateManyInput>
    /**
     * Filter which idnbi_SystemConfigurations to update
     */
    where?: idnbi_SystemConfigurationWhereInput
    /**
     * Limit how many idnbi_SystemConfigurations to update.
     */
    limit?: number
  }

  /**
   * idnbi_SystemConfiguration updateManyAndReturn
   */
  export type idnbi_SystemConfigurationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_SystemConfiguration
     */
    select?: idnbi_SystemConfigurationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_SystemConfiguration
     */
    omit?: idnbi_SystemConfigurationOmit<ExtArgs> | null
    /**
     * The data used to update idnbi_SystemConfigurations.
     */
    data: XOR<idnbi_SystemConfigurationUpdateManyMutationInput, idnbi_SystemConfigurationUncheckedUpdateManyInput>
    /**
     * Filter which idnbi_SystemConfigurations to update
     */
    where?: idnbi_SystemConfigurationWhereInput
    /**
     * Limit how many idnbi_SystemConfigurations to update.
     */
    limit?: number
  }

  /**
   * idnbi_SystemConfiguration upsert
   */
  export type idnbi_SystemConfigurationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_SystemConfiguration
     */
    select?: idnbi_SystemConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_SystemConfiguration
     */
    omit?: idnbi_SystemConfigurationOmit<ExtArgs> | null
    /**
     * The filter to search for the idnbi_SystemConfiguration to update in case it exists.
     */
    where: idnbi_SystemConfigurationWhereUniqueInput
    /**
     * In case the idnbi_SystemConfiguration found by the `where` argument doesn't exist, create a new idnbi_SystemConfiguration with this data.
     */
    create: XOR<idnbi_SystemConfigurationCreateInput, idnbi_SystemConfigurationUncheckedCreateInput>
    /**
     * In case the idnbi_SystemConfiguration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<idnbi_SystemConfigurationUpdateInput, idnbi_SystemConfigurationUncheckedUpdateInput>
  }

  /**
   * idnbi_SystemConfiguration delete
   */
  export type idnbi_SystemConfigurationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_SystemConfiguration
     */
    select?: idnbi_SystemConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_SystemConfiguration
     */
    omit?: idnbi_SystemConfigurationOmit<ExtArgs> | null
    /**
     * Filter which idnbi_SystemConfiguration to delete.
     */
    where: idnbi_SystemConfigurationWhereUniqueInput
  }

  /**
   * idnbi_SystemConfiguration deleteMany
   */
  export type idnbi_SystemConfigurationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idnbi_SystemConfigurations to delete
     */
    where?: idnbi_SystemConfigurationWhereInput
    /**
     * Limit how many idnbi_SystemConfigurations to delete.
     */
    limit?: number
  }

  /**
   * idnbi_SystemConfiguration without action
   */
  export type idnbi_SystemConfigurationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_SystemConfiguration
     */
    select?: idnbi_SystemConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_SystemConfiguration
     */
    omit?: idnbi_SystemConfigurationOmit<ExtArgs> | null
  }


  /**
   * Model idnbi_AuditLog
   */

  export type AggregateIdnbi_AuditLog = {
    _count: Idnbi_AuditLogCountAggregateOutputType | null
    _min: Idnbi_AuditLogMinAggregateOutputType | null
    _max: Idnbi_AuditLogMaxAggregateOutputType | null
  }

  export type Idnbi_AuditLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    resource: string | null
    resourceId: string | null
    ip_address: string | null
    user_agent: string | null
    created_at: Date | null
  }

  export type Idnbi_AuditLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    resource: string | null
    resourceId: string | null
    ip_address: string | null
    user_agent: string | null
    created_at: Date | null
  }

  export type Idnbi_AuditLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    resource: number
    resourceId: number
    details: number
    ip_address: number
    user_agent: number
    created_at: number
    _all: number
  }


  export type Idnbi_AuditLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    resource?: true
    resourceId?: true
    ip_address?: true
    user_agent?: true
    created_at?: true
  }

  export type Idnbi_AuditLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    resource?: true
    resourceId?: true
    ip_address?: true
    user_agent?: true
    created_at?: true
  }

  export type Idnbi_AuditLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    resource?: true
    resourceId?: true
    details?: true
    ip_address?: true
    user_agent?: true
    created_at?: true
    _all?: true
  }

  export type Idnbi_AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idnbi_AuditLog to aggregate.
     */
    where?: idnbi_AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_AuditLogs to fetch.
     */
    orderBy?: idnbi_AuditLogOrderByWithRelationInput | idnbi_AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: idnbi_AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned idnbi_AuditLogs
    **/
    _count?: true | Idnbi_AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Idnbi_AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Idnbi_AuditLogMaxAggregateInputType
  }

  export type GetIdnbi_AuditLogAggregateType<T extends Idnbi_AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateIdnbi_AuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdnbi_AuditLog[P]>
      : GetScalarType<T[P], AggregateIdnbi_AuditLog[P]>
  }




  export type idnbi_AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: idnbi_AuditLogWhereInput
    orderBy?: idnbi_AuditLogOrderByWithAggregationInput | idnbi_AuditLogOrderByWithAggregationInput[]
    by: Idnbi_AuditLogScalarFieldEnum[] | Idnbi_AuditLogScalarFieldEnum
    having?: idnbi_AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Idnbi_AuditLogCountAggregateInputType | true
    _min?: Idnbi_AuditLogMinAggregateInputType
    _max?: Idnbi_AuditLogMaxAggregateInputType
  }

  export type Idnbi_AuditLogGroupByOutputType = {
    id: string
    userId: string | null
    action: string
    resource: string | null
    resourceId: string | null
    details: JsonValue | null
    ip_address: string | null
    user_agent: string | null
    created_at: Date
    _count: Idnbi_AuditLogCountAggregateOutputType | null
    _min: Idnbi_AuditLogMinAggregateOutputType | null
    _max: Idnbi_AuditLogMaxAggregateOutputType | null
  }

  type GetIdnbi_AuditLogGroupByPayload<T extends idnbi_AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Idnbi_AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Idnbi_AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Idnbi_AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], Idnbi_AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type idnbi_AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    resource?: boolean
    resourceId?: boolean
    details?: boolean
    ip_address?: boolean
    user_agent?: boolean
    created_at?: boolean
    user?: boolean | idnbi_AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["idnbi_AuditLog"]>

  export type idnbi_AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    resource?: boolean
    resourceId?: boolean
    details?: boolean
    ip_address?: boolean
    user_agent?: boolean
    created_at?: boolean
    user?: boolean | idnbi_AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["idnbi_AuditLog"]>

  export type idnbi_AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    resource?: boolean
    resourceId?: boolean
    details?: boolean
    ip_address?: boolean
    user_agent?: boolean
    created_at?: boolean
    user?: boolean | idnbi_AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["idnbi_AuditLog"]>

  export type idnbi_AuditLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    resource?: boolean
    resourceId?: boolean
    details?: boolean
    ip_address?: boolean
    user_agent?: boolean
    created_at?: boolean
  }

  export type idnbi_AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "resource" | "resourceId" | "details" | "ip_address" | "user_agent" | "created_at", ExtArgs["result"]["idnbi_AuditLog"]>
  export type idnbi_AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | idnbi_AuditLog$userArgs<ExtArgs>
  }
  export type idnbi_AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | idnbi_AuditLog$userArgs<ExtArgs>
  }
  export type idnbi_AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | idnbi_AuditLog$userArgs<ExtArgs>
  }

  export type $idnbi_AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "idnbi_AuditLog"
    objects: {
      user: Prisma.$idnbi_UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      action: string
      resource: string | null
      resourceId: string | null
      details: Prisma.JsonValue | null
      ip_address: string | null
      user_agent: string | null
      created_at: Date
    }, ExtArgs["result"]["idnbi_AuditLog"]>
    composites: {}
  }

  type idnbi_AuditLogGetPayload<S extends boolean | null | undefined | idnbi_AuditLogDefaultArgs> = $Result.GetResult<Prisma.$idnbi_AuditLogPayload, S>

  type idnbi_AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<idnbi_AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Idnbi_AuditLogCountAggregateInputType | true
    }

  export interface idnbi_AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['idnbi_AuditLog'], meta: { name: 'idnbi_AuditLog' } }
    /**
     * Find zero or one Idnbi_AuditLog that matches the filter.
     * @param {idnbi_AuditLogFindUniqueArgs} args - Arguments to find a Idnbi_AuditLog
     * @example
     * // Get one Idnbi_AuditLog
     * const idnbi_AuditLog = await prisma.idnbi_AuditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends idnbi_AuditLogFindUniqueArgs>(args: SelectSubset<T, idnbi_AuditLogFindUniqueArgs<ExtArgs>>): Prisma__idnbi_AuditLogClient<$Result.GetResult<Prisma.$idnbi_AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Idnbi_AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {idnbi_AuditLogFindUniqueOrThrowArgs} args - Arguments to find a Idnbi_AuditLog
     * @example
     * // Get one Idnbi_AuditLog
     * const idnbi_AuditLog = await prisma.idnbi_AuditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends idnbi_AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, idnbi_AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__idnbi_AuditLogClient<$Result.GetResult<Prisma.$idnbi_AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idnbi_AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_AuditLogFindFirstArgs} args - Arguments to find a Idnbi_AuditLog
     * @example
     * // Get one Idnbi_AuditLog
     * const idnbi_AuditLog = await prisma.idnbi_AuditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends idnbi_AuditLogFindFirstArgs>(args?: SelectSubset<T, idnbi_AuditLogFindFirstArgs<ExtArgs>>): Prisma__idnbi_AuditLogClient<$Result.GetResult<Prisma.$idnbi_AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idnbi_AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_AuditLogFindFirstOrThrowArgs} args - Arguments to find a Idnbi_AuditLog
     * @example
     * // Get one Idnbi_AuditLog
     * const idnbi_AuditLog = await prisma.idnbi_AuditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends idnbi_AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, idnbi_AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__idnbi_AuditLogClient<$Result.GetResult<Prisma.$idnbi_AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Idnbi_AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Idnbi_AuditLogs
     * const idnbi_AuditLogs = await prisma.idnbi_AuditLog.findMany()
     * 
     * // Get first 10 Idnbi_AuditLogs
     * const idnbi_AuditLogs = await prisma.idnbi_AuditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const idnbi_AuditLogWithIdOnly = await prisma.idnbi_AuditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends idnbi_AuditLogFindManyArgs>(args?: SelectSubset<T, idnbi_AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Idnbi_AuditLog.
     * @param {idnbi_AuditLogCreateArgs} args - Arguments to create a Idnbi_AuditLog.
     * @example
     * // Create one Idnbi_AuditLog
     * const Idnbi_AuditLog = await prisma.idnbi_AuditLog.create({
     *   data: {
     *     // ... data to create a Idnbi_AuditLog
     *   }
     * })
     * 
     */
    create<T extends idnbi_AuditLogCreateArgs>(args: SelectSubset<T, idnbi_AuditLogCreateArgs<ExtArgs>>): Prisma__idnbi_AuditLogClient<$Result.GetResult<Prisma.$idnbi_AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Idnbi_AuditLogs.
     * @param {idnbi_AuditLogCreateManyArgs} args - Arguments to create many Idnbi_AuditLogs.
     * @example
     * // Create many Idnbi_AuditLogs
     * const idnbi_AuditLog = await prisma.idnbi_AuditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends idnbi_AuditLogCreateManyArgs>(args?: SelectSubset<T, idnbi_AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Idnbi_AuditLogs and returns the data saved in the database.
     * @param {idnbi_AuditLogCreateManyAndReturnArgs} args - Arguments to create many Idnbi_AuditLogs.
     * @example
     * // Create many Idnbi_AuditLogs
     * const idnbi_AuditLog = await prisma.idnbi_AuditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Idnbi_AuditLogs and only return the `id`
     * const idnbi_AuditLogWithIdOnly = await prisma.idnbi_AuditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends idnbi_AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, idnbi_AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Idnbi_AuditLog.
     * @param {idnbi_AuditLogDeleteArgs} args - Arguments to delete one Idnbi_AuditLog.
     * @example
     * // Delete one Idnbi_AuditLog
     * const Idnbi_AuditLog = await prisma.idnbi_AuditLog.delete({
     *   where: {
     *     // ... filter to delete one Idnbi_AuditLog
     *   }
     * })
     * 
     */
    delete<T extends idnbi_AuditLogDeleteArgs>(args: SelectSubset<T, idnbi_AuditLogDeleteArgs<ExtArgs>>): Prisma__idnbi_AuditLogClient<$Result.GetResult<Prisma.$idnbi_AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Idnbi_AuditLog.
     * @param {idnbi_AuditLogUpdateArgs} args - Arguments to update one Idnbi_AuditLog.
     * @example
     * // Update one Idnbi_AuditLog
     * const idnbi_AuditLog = await prisma.idnbi_AuditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends idnbi_AuditLogUpdateArgs>(args: SelectSubset<T, idnbi_AuditLogUpdateArgs<ExtArgs>>): Prisma__idnbi_AuditLogClient<$Result.GetResult<Prisma.$idnbi_AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Idnbi_AuditLogs.
     * @param {idnbi_AuditLogDeleteManyArgs} args - Arguments to filter Idnbi_AuditLogs to delete.
     * @example
     * // Delete a few Idnbi_AuditLogs
     * const { count } = await prisma.idnbi_AuditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends idnbi_AuditLogDeleteManyArgs>(args?: SelectSubset<T, idnbi_AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idnbi_AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Idnbi_AuditLogs
     * const idnbi_AuditLog = await prisma.idnbi_AuditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends idnbi_AuditLogUpdateManyArgs>(args: SelectSubset<T, idnbi_AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idnbi_AuditLogs and returns the data updated in the database.
     * @param {idnbi_AuditLogUpdateManyAndReturnArgs} args - Arguments to update many Idnbi_AuditLogs.
     * @example
     * // Update many Idnbi_AuditLogs
     * const idnbi_AuditLog = await prisma.idnbi_AuditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Idnbi_AuditLogs and only return the `id`
     * const idnbi_AuditLogWithIdOnly = await prisma.idnbi_AuditLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends idnbi_AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, idnbi_AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Idnbi_AuditLog.
     * @param {idnbi_AuditLogUpsertArgs} args - Arguments to update or create a Idnbi_AuditLog.
     * @example
     * // Update or create a Idnbi_AuditLog
     * const idnbi_AuditLog = await prisma.idnbi_AuditLog.upsert({
     *   create: {
     *     // ... data to create a Idnbi_AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Idnbi_AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends idnbi_AuditLogUpsertArgs>(args: SelectSubset<T, idnbi_AuditLogUpsertArgs<ExtArgs>>): Prisma__idnbi_AuditLogClient<$Result.GetResult<Prisma.$idnbi_AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Idnbi_AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_AuditLogCountArgs} args - Arguments to filter Idnbi_AuditLogs to count.
     * @example
     * // Count the number of Idnbi_AuditLogs
     * const count = await prisma.idnbi_AuditLog.count({
     *   where: {
     *     // ... the filter for the Idnbi_AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends idnbi_AuditLogCountArgs>(
      args?: Subset<T, idnbi_AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Idnbi_AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Idnbi_AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Idnbi_AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Idnbi_AuditLogAggregateArgs>(args: Subset<T, Idnbi_AuditLogAggregateArgs>): Prisma.PrismaPromise<GetIdnbi_AuditLogAggregateType<T>>

    /**
     * Group by Idnbi_AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_AuditLogGroupByArgs} args - Group by arguments.
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
      T extends idnbi_AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: idnbi_AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: idnbi_AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, idnbi_AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdnbi_AuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the idnbi_AuditLog model
   */
  readonly fields: idnbi_AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for idnbi_AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__idnbi_AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends idnbi_AuditLog$userArgs<ExtArgs> = {}>(args?: Subset<T, idnbi_AuditLog$userArgs<ExtArgs>>): Prisma__idnbi_UserClient<$Result.GetResult<Prisma.$idnbi_UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the idnbi_AuditLog model
   */
  interface idnbi_AuditLogFieldRefs {
    readonly id: FieldRef<"idnbi_AuditLog", 'String'>
    readonly userId: FieldRef<"idnbi_AuditLog", 'String'>
    readonly action: FieldRef<"idnbi_AuditLog", 'String'>
    readonly resource: FieldRef<"idnbi_AuditLog", 'String'>
    readonly resourceId: FieldRef<"idnbi_AuditLog", 'String'>
    readonly details: FieldRef<"idnbi_AuditLog", 'Json'>
    readonly ip_address: FieldRef<"idnbi_AuditLog", 'String'>
    readonly user_agent: FieldRef<"idnbi_AuditLog", 'String'>
    readonly created_at: FieldRef<"idnbi_AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * idnbi_AuditLog findUnique
   */
  export type idnbi_AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_AuditLog
     */
    select?: idnbi_AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_AuditLog
     */
    omit?: idnbi_AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_AuditLog to fetch.
     */
    where: idnbi_AuditLogWhereUniqueInput
  }

  /**
   * idnbi_AuditLog findUniqueOrThrow
   */
  export type idnbi_AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_AuditLog
     */
    select?: idnbi_AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_AuditLog
     */
    omit?: idnbi_AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_AuditLog to fetch.
     */
    where: idnbi_AuditLogWhereUniqueInput
  }

  /**
   * idnbi_AuditLog findFirst
   */
  export type idnbi_AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_AuditLog
     */
    select?: idnbi_AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_AuditLog
     */
    omit?: idnbi_AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_AuditLog to fetch.
     */
    where?: idnbi_AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_AuditLogs to fetch.
     */
    orderBy?: idnbi_AuditLogOrderByWithRelationInput | idnbi_AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idnbi_AuditLogs.
     */
    cursor?: idnbi_AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idnbi_AuditLogs.
     */
    distinct?: Idnbi_AuditLogScalarFieldEnum | Idnbi_AuditLogScalarFieldEnum[]
  }

  /**
   * idnbi_AuditLog findFirstOrThrow
   */
  export type idnbi_AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_AuditLog
     */
    select?: idnbi_AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_AuditLog
     */
    omit?: idnbi_AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_AuditLog to fetch.
     */
    where?: idnbi_AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_AuditLogs to fetch.
     */
    orderBy?: idnbi_AuditLogOrderByWithRelationInput | idnbi_AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idnbi_AuditLogs.
     */
    cursor?: idnbi_AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idnbi_AuditLogs.
     */
    distinct?: Idnbi_AuditLogScalarFieldEnum | Idnbi_AuditLogScalarFieldEnum[]
  }

  /**
   * idnbi_AuditLog findMany
   */
  export type idnbi_AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_AuditLog
     */
    select?: idnbi_AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_AuditLog
     */
    omit?: idnbi_AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_AuditLogs to fetch.
     */
    where?: idnbi_AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_AuditLogs to fetch.
     */
    orderBy?: idnbi_AuditLogOrderByWithRelationInput | idnbi_AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing idnbi_AuditLogs.
     */
    cursor?: idnbi_AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_AuditLogs.
     */
    skip?: number
    distinct?: Idnbi_AuditLogScalarFieldEnum | Idnbi_AuditLogScalarFieldEnum[]
  }

  /**
   * idnbi_AuditLog create
   */
  export type idnbi_AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_AuditLog
     */
    select?: idnbi_AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_AuditLog
     */
    omit?: idnbi_AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a idnbi_AuditLog.
     */
    data: XOR<idnbi_AuditLogCreateInput, idnbi_AuditLogUncheckedCreateInput>
  }

  /**
   * idnbi_AuditLog createMany
   */
  export type idnbi_AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many idnbi_AuditLogs.
     */
    data: idnbi_AuditLogCreateManyInput | idnbi_AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * idnbi_AuditLog createManyAndReturn
   */
  export type idnbi_AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_AuditLog
     */
    select?: idnbi_AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_AuditLog
     */
    omit?: idnbi_AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many idnbi_AuditLogs.
     */
    data: idnbi_AuditLogCreateManyInput | idnbi_AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * idnbi_AuditLog update
   */
  export type idnbi_AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_AuditLog
     */
    select?: idnbi_AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_AuditLog
     */
    omit?: idnbi_AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a idnbi_AuditLog.
     */
    data: XOR<idnbi_AuditLogUpdateInput, idnbi_AuditLogUncheckedUpdateInput>
    /**
     * Choose, which idnbi_AuditLog to update.
     */
    where: idnbi_AuditLogWhereUniqueInput
  }

  /**
   * idnbi_AuditLog updateMany
   */
  export type idnbi_AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update idnbi_AuditLogs.
     */
    data: XOR<idnbi_AuditLogUpdateManyMutationInput, idnbi_AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which idnbi_AuditLogs to update
     */
    where?: idnbi_AuditLogWhereInput
    /**
     * Limit how many idnbi_AuditLogs to update.
     */
    limit?: number
  }

  /**
   * idnbi_AuditLog updateManyAndReturn
   */
  export type idnbi_AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_AuditLog
     */
    select?: idnbi_AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_AuditLog
     */
    omit?: idnbi_AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update idnbi_AuditLogs.
     */
    data: XOR<idnbi_AuditLogUpdateManyMutationInput, idnbi_AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which idnbi_AuditLogs to update
     */
    where?: idnbi_AuditLogWhereInput
    /**
     * Limit how many idnbi_AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * idnbi_AuditLog upsert
   */
  export type idnbi_AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_AuditLog
     */
    select?: idnbi_AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_AuditLog
     */
    omit?: idnbi_AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the idnbi_AuditLog to update in case it exists.
     */
    where: idnbi_AuditLogWhereUniqueInput
    /**
     * In case the idnbi_AuditLog found by the `where` argument doesn't exist, create a new idnbi_AuditLog with this data.
     */
    create: XOR<idnbi_AuditLogCreateInput, idnbi_AuditLogUncheckedCreateInput>
    /**
     * In case the idnbi_AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<idnbi_AuditLogUpdateInput, idnbi_AuditLogUncheckedUpdateInput>
  }

  /**
   * idnbi_AuditLog delete
   */
  export type idnbi_AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_AuditLog
     */
    select?: idnbi_AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_AuditLog
     */
    omit?: idnbi_AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_AuditLogInclude<ExtArgs> | null
    /**
     * Filter which idnbi_AuditLog to delete.
     */
    where: idnbi_AuditLogWhereUniqueInput
  }

  /**
   * idnbi_AuditLog deleteMany
   */
  export type idnbi_AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idnbi_AuditLogs to delete
     */
    where?: idnbi_AuditLogWhereInput
    /**
     * Limit how many idnbi_AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * idnbi_AuditLog.user
   */
  export type idnbi_AuditLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_User
     */
    select?: idnbi_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_User
     */
    omit?: idnbi_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_UserInclude<ExtArgs> | null
    where?: idnbi_UserWhereInput
  }

  /**
   * idnbi_AuditLog without action
   */
  export type idnbi_AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_AuditLog
     */
    select?: idnbi_AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_AuditLog
     */
    omit?: idnbi_AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model idnbi_PasswordResetToken
   */

  export type AggregateIdnbi_PasswordResetToken = {
    _count: Idnbi_PasswordResetTokenCountAggregateOutputType | null
    _min: Idnbi_PasswordResetTokenMinAggregateOutputType | null
    _max: Idnbi_PasswordResetTokenMaxAggregateOutputType | null
  }

  export type Idnbi_PasswordResetTokenMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expires_at: Date | null
    is_used: boolean | null
    created_at: Date | null
  }

  export type Idnbi_PasswordResetTokenMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expires_at: Date | null
    is_used: boolean | null
    created_at: Date | null
  }

  export type Idnbi_PasswordResetTokenCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expires_at: number
    is_used: number
    created_at: number
    _all: number
  }


  export type Idnbi_PasswordResetTokenMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expires_at?: true
    is_used?: true
    created_at?: true
  }

  export type Idnbi_PasswordResetTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expires_at?: true
    is_used?: true
    created_at?: true
  }

  export type Idnbi_PasswordResetTokenCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expires_at?: true
    is_used?: true
    created_at?: true
    _all?: true
  }

  export type Idnbi_PasswordResetTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idnbi_PasswordResetToken to aggregate.
     */
    where?: idnbi_PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_PasswordResetTokens to fetch.
     */
    orderBy?: idnbi_PasswordResetTokenOrderByWithRelationInput | idnbi_PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: idnbi_PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned idnbi_PasswordResetTokens
    **/
    _count?: true | Idnbi_PasswordResetTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Idnbi_PasswordResetTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Idnbi_PasswordResetTokenMaxAggregateInputType
  }

  export type GetIdnbi_PasswordResetTokenAggregateType<T extends Idnbi_PasswordResetTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateIdnbi_PasswordResetToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdnbi_PasswordResetToken[P]>
      : GetScalarType<T[P], AggregateIdnbi_PasswordResetToken[P]>
  }




  export type idnbi_PasswordResetTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: idnbi_PasswordResetTokenWhereInput
    orderBy?: idnbi_PasswordResetTokenOrderByWithAggregationInput | idnbi_PasswordResetTokenOrderByWithAggregationInput[]
    by: Idnbi_PasswordResetTokenScalarFieldEnum[] | Idnbi_PasswordResetTokenScalarFieldEnum
    having?: idnbi_PasswordResetTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Idnbi_PasswordResetTokenCountAggregateInputType | true
    _min?: Idnbi_PasswordResetTokenMinAggregateInputType
    _max?: Idnbi_PasswordResetTokenMaxAggregateInputType
  }

  export type Idnbi_PasswordResetTokenGroupByOutputType = {
    id: string
    userId: string
    token: string
    expires_at: Date
    is_used: boolean
    created_at: Date
    _count: Idnbi_PasswordResetTokenCountAggregateOutputType | null
    _min: Idnbi_PasswordResetTokenMinAggregateOutputType | null
    _max: Idnbi_PasswordResetTokenMaxAggregateOutputType | null
  }

  type GetIdnbi_PasswordResetTokenGroupByPayload<T extends idnbi_PasswordResetTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Idnbi_PasswordResetTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Idnbi_PasswordResetTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Idnbi_PasswordResetTokenGroupByOutputType[P]>
            : GetScalarType<T[P], Idnbi_PasswordResetTokenGroupByOutputType[P]>
        }
      >
    >


  export type idnbi_PasswordResetTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expires_at?: boolean
    is_used?: boolean
    created_at?: boolean
    user?: boolean | idnbi_UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idnbi_PasswordResetToken"]>

  export type idnbi_PasswordResetTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expires_at?: boolean
    is_used?: boolean
    created_at?: boolean
    user?: boolean | idnbi_UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idnbi_PasswordResetToken"]>

  export type idnbi_PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expires_at?: boolean
    is_used?: boolean
    created_at?: boolean
    user?: boolean | idnbi_UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idnbi_PasswordResetToken"]>

  export type idnbi_PasswordResetTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expires_at?: boolean
    is_used?: boolean
    created_at?: boolean
  }

  export type idnbi_PasswordResetTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "expires_at" | "is_used" | "created_at", ExtArgs["result"]["idnbi_PasswordResetToken"]>
  export type idnbi_PasswordResetTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | idnbi_UserDefaultArgs<ExtArgs>
  }
  export type idnbi_PasswordResetTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | idnbi_UserDefaultArgs<ExtArgs>
  }
  export type idnbi_PasswordResetTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | idnbi_UserDefaultArgs<ExtArgs>
  }

  export type $idnbi_PasswordResetTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "idnbi_PasswordResetToken"
    objects: {
      user: Prisma.$idnbi_UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      expires_at: Date
      is_used: boolean
      created_at: Date
    }, ExtArgs["result"]["idnbi_PasswordResetToken"]>
    composites: {}
  }

  type idnbi_PasswordResetTokenGetPayload<S extends boolean | null | undefined | idnbi_PasswordResetTokenDefaultArgs> = $Result.GetResult<Prisma.$idnbi_PasswordResetTokenPayload, S>

  type idnbi_PasswordResetTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<idnbi_PasswordResetTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Idnbi_PasswordResetTokenCountAggregateInputType | true
    }

  export interface idnbi_PasswordResetTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['idnbi_PasswordResetToken'], meta: { name: 'idnbi_PasswordResetToken' } }
    /**
     * Find zero or one Idnbi_PasswordResetToken that matches the filter.
     * @param {idnbi_PasswordResetTokenFindUniqueArgs} args - Arguments to find a Idnbi_PasswordResetToken
     * @example
     * // Get one Idnbi_PasswordResetToken
     * const idnbi_PasswordResetToken = await prisma.idnbi_PasswordResetToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends idnbi_PasswordResetTokenFindUniqueArgs>(args: SelectSubset<T, idnbi_PasswordResetTokenFindUniqueArgs<ExtArgs>>): Prisma__idnbi_PasswordResetTokenClient<$Result.GetResult<Prisma.$idnbi_PasswordResetTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Idnbi_PasswordResetToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {idnbi_PasswordResetTokenFindUniqueOrThrowArgs} args - Arguments to find a Idnbi_PasswordResetToken
     * @example
     * // Get one Idnbi_PasswordResetToken
     * const idnbi_PasswordResetToken = await prisma.idnbi_PasswordResetToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends idnbi_PasswordResetTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, idnbi_PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__idnbi_PasswordResetTokenClient<$Result.GetResult<Prisma.$idnbi_PasswordResetTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idnbi_PasswordResetToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_PasswordResetTokenFindFirstArgs} args - Arguments to find a Idnbi_PasswordResetToken
     * @example
     * // Get one Idnbi_PasswordResetToken
     * const idnbi_PasswordResetToken = await prisma.idnbi_PasswordResetToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends idnbi_PasswordResetTokenFindFirstArgs>(args?: SelectSubset<T, idnbi_PasswordResetTokenFindFirstArgs<ExtArgs>>): Prisma__idnbi_PasswordResetTokenClient<$Result.GetResult<Prisma.$idnbi_PasswordResetTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idnbi_PasswordResetToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_PasswordResetTokenFindFirstOrThrowArgs} args - Arguments to find a Idnbi_PasswordResetToken
     * @example
     * // Get one Idnbi_PasswordResetToken
     * const idnbi_PasswordResetToken = await prisma.idnbi_PasswordResetToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends idnbi_PasswordResetTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, idnbi_PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__idnbi_PasswordResetTokenClient<$Result.GetResult<Prisma.$idnbi_PasswordResetTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Idnbi_PasswordResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_PasswordResetTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Idnbi_PasswordResetTokens
     * const idnbi_PasswordResetTokens = await prisma.idnbi_PasswordResetToken.findMany()
     * 
     * // Get first 10 Idnbi_PasswordResetTokens
     * const idnbi_PasswordResetTokens = await prisma.idnbi_PasswordResetToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const idnbi_PasswordResetTokenWithIdOnly = await prisma.idnbi_PasswordResetToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends idnbi_PasswordResetTokenFindManyArgs>(args?: SelectSubset<T, idnbi_PasswordResetTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_PasswordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Idnbi_PasswordResetToken.
     * @param {idnbi_PasswordResetTokenCreateArgs} args - Arguments to create a Idnbi_PasswordResetToken.
     * @example
     * // Create one Idnbi_PasswordResetToken
     * const Idnbi_PasswordResetToken = await prisma.idnbi_PasswordResetToken.create({
     *   data: {
     *     // ... data to create a Idnbi_PasswordResetToken
     *   }
     * })
     * 
     */
    create<T extends idnbi_PasswordResetTokenCreateArgs>(args: SelectSubset<T, idnbi_PasswordResetTokenCreateArgs<ExtArgs>>): Prisma__idnbi_PasswordResetTokenClient<$Result.GetResult<Prisma.$idnbi_PasswordResetTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Idnbi_PasswordResetTokens.
     * @param {idnbi_PasswordResetTokenCreateManyArgs} args - Arguments to create many Idnbi_PasswordResetTokens.
     * @example
     * // Create many Idnbi_PasswordResetTokens
     * const idnbi_PasswordResetToken = await prisma.idnbi_PasswordResetToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends idnbi_PasswordResetTokenCreateManyArgs>(args?: SelectSubset<T, idnbi_PasswordResetTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Idnbi_PasswordResetTokens and returns the data saved in the database.
     * @param {idnbi_PasswordResetTokenCreateManyAndReturnArgs} args - Arguments to create many Idnbi_PasswordResetTokens.
     * @example
     * // Create many Idnbi_PasswordResetTokens
     * const idnbi_PasswordResetToken = await prisma.idnbi_PasswordResetToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Idnbi_PasswordResetTokens and only return the `id`
     * const idnbi_PasswordResetTokenWithIdOnly = await prisma.idnbi_PasswordResetToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends idnbi_PasswordResetTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, idnbi_PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_PasswordResetTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Idnbi_PasswordResetToken.
     * @param {idnbi_PasswordResetTokenDeleteArgs} args - Arguments to delete one Idnbi_PasswordResetToken.
     * @example
     * // Delete one Idnbi_PasswordResetToken
     * const Idnbi_PasswordResetToken = await prisma.idnbi_PasswordResetToken.delete({
     *   where: {
     *     // ... filter to delete one Idnbi_PasswordResetToken
     *   }
     * })
     * 
     */
    delete<T extends idnbi_PasswordResetTokenDeleteArgs>(args: SelectSubset<T, idnbi_PasswordResetTokenDeleteArgs<ExtArgs>>): Prisma__idnbi_PasswordResetTokenClient<$Result.GetResult<Prisma.$idnbi_PasswordResetTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Idnbi_PasswordResetToken.
     * @param {idnbi_PasswordResetTokenUpdateArgs} args - Arguments to update one Idnbi_PasswordResetToken.
     * @example
     * // Update one Idnbi_PasswordResetToken
     * const idnbi_PasswordResetToken = await prisma.idnbi_PasswordResetToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends idnbi_PasswordResetTokenUpdateArgs>(args: SelectSubset<T, idnbi_PasswordResetTokenUpdateArgs<ExtArgs>>): Prisma__idnbi_PasswordResetTokenClient<$Result.GetResult<Prisma.$idnbi_PasswordResetTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Idnbi_PasswordResetTokens.
     * @param {idnbi_PasswordResetTokenDeleteManyArgs} args - Arguments to filter Idnbi_PasswordResetTokens to delete.
     * @example
     * // Delete a few Idnbi_PasswordResetTokens
     * const { count } = await prisma.idnbi_PasswordResetToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends idnbi_PasswordResetTokenDeleteManyArgs>(args?: SelectSubset<T, idnbi_PasswordResetTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idnbi_PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_PasswordResetTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Idnbi_PasswordResetTokens
     * const idnbi_PasswordResetToken = await prisma.idnbi_PasswordResetToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends idnbi_PasswordResetTokenUpdateManyArgs>(args: SelectSubset<T, idnbi_PasswordResetTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idnbi_PasswordResetTokens and returns the data updated in the database.
     * @param {idnbi_PasswordResetTokenUpdateManyAndReturnArgs} args - Arguments to update many Idnbi_PasswordResetTokens.
     * @example
     * // Update many Idnbi_PasswordResetTokens
     * const idnbi_PasswordResetToken = await prisma.idnbi_PasswordResetToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Idnbi_PasswordResetTokens and only return the `id`
     * const idnbi_PasswordResetTokenWithIdOnly = await prisma.idnbi_PasswordResetToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends idnbi_PasswordResetTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, idnbi_PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idnbi_PasswordResetTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Idnbi_PasswordResetToken.
     * @param {idnbi_PasswordResetTokenUpsertArgs} args - Arguments to update or create a Idnbi_PasswordResetToken.
     * @example
     * // Update or create a Idnbi_PasswordResetToken
     * const idnbi_PasswordResetToken = await prisma.idnbi_PasswordResetToken.upsert({
     *   create: {
     *     // ... data to create a Idnbi_PasswordResetToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Idnbi_PasswordResetToken we want to update
     *   }
     * })
     */
    upsert<T extends idnbi_PasswordResetTokenUpsertArgs>(args: SelectSubset<T, idnbi_PasswordResetTokenUpsertArgs<ExtArgs>>): Prisma__idnbi_PasswordResetTokenClient<$Result.GetResult<Prisma.$idnbi_PasswordResetTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Idnbi_PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_PasswordResetTokenCountArgs} args - Arguments to filter Idnbi_PasswordResetTokens to count.
     * @example
     * // Count the number of Idnbi_PasswordResetTokens
     * const count = await prisma.idnbi_PasswordResetToken.count({
     *   where: {
     *     // ... the filter for the Idnbi_PasswordResetTokens we want to count
     *   }
     * })
    **/
    count<T extends idnbi_PasswordResetTokenCountArgs>(
      args?: Subset<T, idnbi_PasswordResetTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Idnbi_PasswordResetTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Idnbi_PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Idnbi_PasswordResetTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Idnbi_PasswordResetTokenAggregateArgs>(args: Subset<T, Idnbi_PasswordResetTokenAggregateArgs>): Prisma.PrismaPromise<GetIdnbi_PasswordResetTokenAggregateType<T>>

    /**
     * Group by Idnbi_PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idnbi_PasswordResetTokenGroupByArgs} args - Group by arguments.
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
      T extends idnbi_PasswordResetTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: idnbi_PasswordResetTokenGroupByArgs['orderBy'] }
        : { orderBy?: idnbi_PasswordResetTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, idnbi_PasswordResetTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdnbi_PasswordResetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the idnbi_PasswordResetToken model
   */
  readonly fields: idnbi_PasswordResetTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for idnbi_PasswordResetToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__idnbi_PasswordResetTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends idnbi_UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, idnbi_UserDefaultArgs<ExtArgs>>): Prisma__idnbi_UserClient<$Result.GetResult<Prisma.$idnbi_UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the idnbi_PasswordResetToken model
   */
  interface idnbi_PasswordResetTokenFieldRefs {
    readonly id: FieldRef<"idnbi_PasswordResetToken", 'String'>
    readonly userId: FieldRef<"idnbi_PasswordResetToken", 'String'>
    readonly token: FieldRef<"idnbi_PasswordResetToken", 'String'>
    readonly expires_at: FieldRef<"idnbi_PasswordResetToken", 'DateTime'>
    readonly is_used: FieldRef<"idnbi_PasswordResetToken", 'Boolean'>
    readonly created_at: FieldRef<"idnbi_PasswordResetToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * idnbi_PasswordResetToken findUnique
   */
  export type idnbi_PasswordResetTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_PasswordResetToken
     */
    select?: idnbi_PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_PasswordResetToken
     */
    omit?: idnbi_PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_PasswordResetToken to fetch.
     */
    where: idnbi_PasswordResetTokenWhereUniqueInput
  }

  /**
   * idnbi_PasswordResetToken findUniqueOrThrow
   */
  export type idnbi_PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_PasswordResetToken
     */
    select?: idnbi_PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_PasswordResetToken
     */
    omit?: idnbi_PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_PasswordResetToken to fetch.
     */
    where: idnbi_PasswordResetTokenWhereUniqueInput
  }

  /**
   * idnbi_PasswordResetToken findFirst
   */
  export type idnbi_PasswordResetTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_PasswordResetToken
     */
    select?: idnbi_PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_PasswordResetToken
     */
    omit?: idnbi_PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_PasswordResetToken to fetch.
     */
    where?: idnbi_PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_PasswordResetTokens to fetch.
     */
    orderBy?: idnbi_PasswordResetTokenOrderByWithRelationInput | idnbi_PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idnbi_PasswordResetTokens.
     */
    cursor?: idnbi_PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idnbi_PasswordResetTokens.
     */
    distinct?: Idnbi_PasswordResetTokenScalarFieldEnum | Idnbi_PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * idnbi_PasswordResetToken findFirstOrThrow
   */
  export type idnbi_PasswordResetTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_PasswordResetToken
     */
    select?: idnbi_PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_PasswordResetToken
     */
    omit?: idnbi_PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_PasswordResetToken to fetch.
     */
    where?: idnbi_PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_PasswordResetTokens to fetch.
     */
    orderBy?: idnbi_PasswordResetTokenOrderByWithRelationInput | idnbi_PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idnbi_PasswordResetTokens.
     */
    cursor?: idnbi_PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idnbi_PasswordResetTokens.
     */
    distinct?: Idnbi_PasswordResetTokenScalarFieldEnum | Idnbi_PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * idnbi_PasswordResetToken findMany
   */
  export type idnbi_PasswordResetTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_PasswordResetToken
     */
    select?: idnbi_PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_PasswordResetToken
     */
    omit?: idnbi_PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which idnbi_PasswordResetTokens to fetch.
     */
    where?: idnbi_PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idnbi_PasswordResetTokens to fetch.
     */
    orderBy?: idnbi_PasswordResetTokenOrderByWithRelationInput | idnbi_PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing idnbi_PasswordResetTokens.
     */
    cursor?: idnbi_PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idnbi_PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idnbi_PasswordResetTokens.
     */
    skip?: number
    distinct?: Idnbi_PasswordResetTokenScalarFieldEnum | Idnbi_PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * idnbi_PasswordResetToken create
   */
  export type idnbi_PasswordResetTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_PasswordResetToken
     */
    select?: idnbi_PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_PasswordResetToken
     */
    omit?: idnbi_PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a idnbi_PasswordResetToken.
     */
    data: XOR<idnbi_PasswordResetTokenCreateInput, idnbi_PasswordResetTokenUncheckedCreateInput>
  }

  /**
   * idnbi_PasswordResetToken createMany
   */
  export type idnbi_PasswordResetTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many idnbi_PasswordResetTokens.
     */
    data: idnbi_PasswordResetTokenCreateManyInput | idnbi_PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * idnbi_PasswordResetToken createManyAndReturn
   */
  export type idnbi_PasswordResetTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_PasswordResetToken
     */
    select?: idnbi_PasswordResetTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_PasswordResetToken
     */
    omit?: idnbi_PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to create many idnbi_PasswordResetTokens.
     */
    data: idnbi_PasswordResetTokenCreateManyInput | idnbi_PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_PasswordResetTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * idnbi_PasswordResetToken update
   */
  export type idnbi_PasswordResetTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_PasswordResetToken
     */
    select?: idnbi_PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_PasswordResetToken
     */
    omit?: idnbi_PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a idnbi_PasswordResetToken.
     */
    data: XOR<idnbi_PasswordResetTokenUpdateInput, idnbi_PasswordResetTokenUncheckedUpdateInput>
    /**
     * Choose, which idnbi_PasswordResetToken to update.
     */
    where: idnbi_PasswordResetTokenWhereUniqueInput
  }

  /**
   * idnbi_PasswordResetToken updateMany
   */
  export type idnbi_PasswordResetTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update idnbi_PasswordResetTokens.
     */
    data: XOR<idnbi_PasswordResetTokenUpdateManyMutationInput, idnbi_PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which idnbi_PasswordResetTokens to update
     */
    where?: idnbi_PasswordResetTokenWhereInput
    /**
     * Limit how many idnbi_PasswordResetTokens to update.
     */
    limit?: number
  }

  /**
   * idnbi_PasswordResetToken updateManyAndReturn
   */
  export type idnbi_PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_PasswordResetToken
     */
    select?: idnbi_PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_PasswordResetToken
     */
    omit?: idnbi_PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to update idnbi_PasswordResetTokens.
     */
    data: XOR<idnbi_PasswordResetTokenUpdateManyMutationInput, idnbi_PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which idnbi_PasswordResetTokens to update
     */
    where?: idnbi_PasswordResetTokenWhereInput
    /**
     * Limit how many idnbi_PasswordResetTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_PasswordResetTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * idnbi_PasswordResetToken upsert
   */
  export type idnbi_PasswordResetTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_PasswordResetToken
     */
    select?: idnbi_PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_PasswordResetToken
     */
    omit?: idnbi_PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the idnbi_PasswordResetToken to update in case it exists.
     */
    where: idnbi_PasswordResetTokenWhereUniqueInput
    /**
     * In case the idnbi_PasswordResetToken found by the `where` argument doesn't exist, create a new idnbi_PasswordResetToken with this data.
     */
    create: XOR<idnbi_PasswordResetTokenCreateInput, idnbi_PasswordResetTokenUncheckedCreateInput>
    /**
     * In case the idnbi_PasswordResetToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<idnbi_PasswordResetTokenUpdateInput, idnbi_PasswordResetTokenUncheckedUpdateInput>
  }

  /**
   * idnbi_PasswordResetToken delete
   */
  export type idnbi_PasswordResetTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_PasswordResetToken
     */
    select?: idnbi_PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_PasswordResetToken
     */
    omit?: idnbi_PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter which idnbi_PasswordResetToken to delete.
     */
    where: idnbi_PasswordResetTokenWhereUniqueInput
  }

  /**
   * idnbi_PasswordResetToken deleteMany
   */
  export type idnbi_PasswordResetTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idnbi_PasswordResetTokens to delete
     */
    where?: idnbi_PasswordResetTokenWhereInput
    /**
     * Limit how many idnbi_PasswordResetTokens to delete.
     */
    limit?: number
  }

  /**
   * idnbi_PasswordResetToken without action
   */
  export type idnbi_PasswordResetTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idnbi_PasswordResetToken
     */
    select?: idnbi_PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idnbi_PasswordResetToken
     */
    omit?: idnbi_PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idnbi_PasswordResetTokenInclude<ExtArgs> | null
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


  export const Idnbi_UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    status: 'status',
    profile_photo_url: 'profile_photo_url',
    last_login_at: 'last_login_at',
    last_login_ip: 'last_login_ip',
    failed_login_attempts: 'failed_login_attempts',
    is_ip_blocked: 'is_ip_blocked',
    terms_accepted_at: 'terms_accepted_at',
    invited_at: 'invited_at',
    registered_at: 'registered_at',
    temp_password_flag: 'temp_password_flag',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Idnbi_UserScalarFieldEnum = (typeof Idnbi_UserScalarFieldEnum)[keyof typeof Idnbi_UserScalarFieldEnum]


  export const Idnbi_RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Idnbi_RoleScalarFieldEnum = (typeof Idnbi_RoleScalarFieldEnum)[keyof typeof Idnbi_RoleScalarFieldEnum]


  export const Idnbi_UserRoleScalarFieldEnum: {
    userId: 'userId',
    roleId: 'roleId',
    created_at: 'created_at'
  };

  export type Idnbi_UserRoleScalarFieldEnum = (typeof Idnbi_UserRoleScalarFieldEnum)[keyof typeof Idnbi_UserRoleScalarFieldEnum]


  export const Idnbi_PermissionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Idnbi_PermissionScalarFieldEnum = (typeof Idnbi_PermissionScalarFieldEnum)[keyof typeof Idnbi_PermissionScalarFieldEnum]


  export const Idnbi_RolePermissionScalarFieldEnum: {
    roleId: 'roleId',
    permissionId: 'permissionId',
    created_at: 'created_at'
  };

  export type Idnbi_RolePermissionScalarFieldEnum = (typeof Idnbi_RolePermissionScalarFieldEnum)[keyof typeof Idnbi_RolePermissionScalarFieldEnum]


  export const Idnbi_TermsAndConditionsScalarFieldEnum: {
    id: 'id',
    version: 'version',
    content_html: 'content_html',
    created_at: 'created_at',
    updated_at: 'updated_at',
    published_at: 'published_at'
  };

  export type Idnbi_TermsAndConditionsScalarFieldEnum = (typeof Idnbi_TermsAndConditionsScalarFieldEnum)[keyof typeof Idnbi_TermsAndConditionsScalarFieldEnum]


  export const Idnbi_ContentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    type: 'type',
    content_data: 'content_data',
    created_by_id: 'created_by_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Idnbi_ContentScalarFieldEnum = (typeof Idnbi_ContentScalarFieldEnum)[keyof typeof Idnbi_ContentScalarFieldEnum]


  export const Idnbi_MenuItemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    parent_id: 'parent_id',
    order: 'order',
    icon_class: 'icon_class',
    type: 'type',
    target_url: 'target_url',
    content_id: 'content_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Idnbi_MenuItemScalarFieldEnum = (typeof Idnbi_MenuItemScalarFieldEnum)[keyof typeof Idnbi_MenuItemScalarFieldEnum]


  export const Idnbi_MenuRoleScalarFieldEnum: {
    menuId: 'menuId',
    roleId: 'roleId',
    created_at: 'created_at'
  };

  export type Idnbi_MenuRoleScalarFieldEnum = (typeof Idnbi_MenuRoleScalarFieldEnum)[keyof typeof Idnbi_MenuRoleScalarFieldEnum]


  export const Idnbi_NotificationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    message: 'message',
    type: 'type',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Idnbi_NotificationScalarFieldEnum = (typeof Idnbi_NotificationScalarFieldEnum)[keyof typeof Idnbi_NotificationScalarFieldEnum]


  export const Idnbi_UserNotificationStatusScalarFieldEnum: {
    userId: 'userId',
    notificationId: 'notificationId',
    read: 'read',
    read_at: 'read_at',
    created_at: 'created_at'
  };

  export type Idnbi_UserNotificationStatusScalarFieldEnum = (typeof Idnbi_UserNotificationStatusScalarFieldEnum)[keyof typeof Idnbi_UserNotificationStatusScalarFieldEnum]


  export const Idnbi_EmailTemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    subject: 'subject',
    content: 'content',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Idnbi_EmailTemplateScalarFieldEnum = (typeof Idnbi_EmailTemplateScalarFieldEnum)[keyof typeof Idnbi_EmailTemplateScalarFieldEnum]


  export const Idnbi_SystemConfigurationScalarFieldEnum: {
    id: 'id',
    app_name: 'app_name',
    logo_url: 'logo_url',
    login_bg_url: 'login_bg_url',
    footer_text: 'footer_text',
    default_profile_photo_url: 'default_profile_photo_url',
    jumbotron_content: 'jumbotron_content',
    marquee_content: 'marquee_content',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Idnbi_SystemConfigurationScalarFieldEnum = (typeof Idnbi_SystemConfigurationScalarFieldEnum)[keyof typeof Idnbi_SystemConfigurationScalarFieldEnum]


  export const Idnbi_AuditLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    resource: 'resource',
    resourceId: 'resourceId',
    details: 'details',
    ip_address: 'ip_address',
    user_agent: 'user_agent',
    created_at: 'created_at'
  };

  export type Idnbi_AuditLogScalarFieldEnum = (typeof Idnbi_AuditLogScalarFieldEnum)[keyof typeof Idnbi_AuditLogScalarFieldEnum]


  export const Idnbi_PasswordResetTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expires_at: 'expires_at',
    is_used: 'is_used',
    created_at: 'created_at'
  };

  export type Idnbi_PasswordResetTokenScalarFieldEnum = (typeof Idnbi_PasswordResetTokenScalarFieldEnum)[keyof typeof Idnbi_PasswordResetTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type idnbi_UserWhereInput = {
    AND?: idnbi_UserWhereInput | idnbi_UserWhereInput[]
    OR?: idnbi_UserWhereInput[]
    NOT?: idnbi_UserWhereInput | idnbi_UserWhereInput[]
    id?: StringFilter<"idnbi_User"> | string
    name?: StringFilter<"idnbi_User"> | string
    email?: StringFilter<"idnbi_User"> | string
    password?: StringFilter<"idnbi_User"> | string
    status?: StringFilter<"idnbi_User"> | string
    profile_photo_url?: StringNullableFilter<"idnbi_User"> | string | null
    last_login_at?: DateTimeNullableFilter<"idnbi_User"> | Date | string | null
    last_login_ip?: StringNullableFilter<"idnbi_User"> | string | null
    failed_login_attempts?: IntFilter<"idnbi_User"> | number
    is_ip_blocked?: BoolFilter<"idnbi_User"> | boolean
    terms_accepted_at?: DateTimeNullableFilter<"idnbi_User"> | Date | string | null
    invited_at?: DateTimeNullableFilter<"idnbi_User"> | Date | string | null
    registered_at?: DateTimeFilter<"idnbi_User"> | Date | string
    temp_password_flag?: BoolFilter<"idnbi_User"> | boolean
    created_at?: DateTimeFilter<"idnbi_User"> | Date | string
    updated_at?: DateTimeFilter<"idnbi_User"> | Date | string
    roles?: Idnbi_UserRoleListRelationFilter
    created_content?: Idnbi_ContentListRelationFilter
    notifications?: Idnbi_UserNotificationStatusListRelationFilter
    password_reset?: Idnbi_PasswordResetTokenListRelationFilter
    audit_logs?: Idnbi_AuditLogListRelationFilter
  }

  export type idnbi_UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    profile_photo_url?: SortOrderInput | SortOrder
    last_login_at?: SortOrderInput | SortOrder
    last_login_ip?: SortOrderInput | SortOrder
    failed_login_attempts?: SortOrder
    is_ip_blocked?: SortOrder
    terms_accepted_at?: SortOrderInput | SortOrder
    invited_at?: SortOrderInput | SortOrder
    registered_at?: SortOrder
    temp_password_flag?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    roles?: idnbi_UserRoleOrderByRelationAggregateInput
    created_content?: idnbi_ContentOrderByRelationAggregateInput
    notifications?: idnbi_UserNotificationStatusOrderByRelationAggregateInput
    password_reset?: idnbi_PasswordResetTokenOrderByRelationAggregateInput
    audit_logs?: idnbi_AuditLogOrderByRelationAggregateInput
  }

  export type idnbi_UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: idnbi_UserWhereInput | idnbi_UserWhereInput[]
    OR?: idnbi_UserWhereInput[]
    NOT?: idnbi_UserWhereInput | idnbi_UserWhereInput[]
    name?: StringFilter<"idnbi_User"> | string
    password?: StringFilter<"idnbi_User"> | string
    status?: StringFilter<"idnbi_User"> | string
    profile_photo_url?: StringNullableFilter<"idnbi_User"> | string | null
    last_login_at?: DateTimeNullableFilter<"idnbi_User"> | Date | string | null
    last_login_ip?: StringNullableFilter<"idnbi_User"> | string | null
    failed_login_attempts?: IntFilter<"idnbi_User"> | number
    is_ip_blocked?: BoolFilter<"idnbi_User"> | boolean
    terms_accepted_at?: DateTimeNullableFilter<"idnbi_User"> | Date | string | null
    invited_at?: DateTimeNullableFilter<"idnbi_User"> | Date | string | null
    registered_at?: DateTimeFilter<"idnbi_User"> | Date | string
    temp_password_flag?: BoolFilter<"idnbi_User"> | boolean
    created_at?: DateTimeFilter<"idnbi_User"> | Date | string
    updated_at?: DateTimeFilter<"idnbi_User"> | Date | string
    roles?: Idnbi_UserRoleListRelationFilter
    created_content?: Idnbi_ContentListRelationFilter
    notifications?: Idnbi_UserNotificationStatusListRelationFilter
    password_reset?: Idnbi_PasswordResetTokenListRelationFilter
    audit_logs?: Idnbi_AuditLogListRelationFilter
  }, "id" | "email">

  export type idnbi_UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    profile_photo_url?: SortOrderInput | SortOrder
    last_login_at?: SortOrderInput | SortOrder
    last_login_ip?: SortOrderInput | SortOrder
    failed_login_attempts?: SortOrder
    is_ip_blocked?: SortOrder
    terms_accepted_at?: SortOrderInput | SortOrder
    invited_at?: SortOrderInput | SortOrder
    registered_at?: SortOrder
    temp_password_flag?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: idnbi_UserCountOrderByAggregateInput
    _avg?: idnbi_UserAvgOrderByAggregateInput
    _max?: idnbi_UserMaxOrderByAggregateInput
    _min?: idnbi_UserMinOrderByAggregateInput
    _sum?: idnbi_UserSumOrderByAggregateInput
  }

  export type idnbi_UserScalarWhereWithAggregatesInput = {
    AND?: idnbi_UserScalarWhereWithAggregatesInput | idnbi_UserScalarWhereWithAggregatesInput[]
    OR?: idnbi_UserScalarWhereWithAggregatesInput[]
    NOT?: idnbi_UserScalarWhereWithAggregatesInput | idnbi_UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"idnbi_User"> | string
    name?: StringWithAggregatesFilter<"idnbi_User"> | string
    email?: StringWithAggregatesFilter<"idnbi_User"> | string
    password?: StringWithAggregatesFilter<"idnbi_User"> | string
    status?: StringWithAggregatesFilter<"idnbi_User"> | string
    profile_photo_url?: StringNullableWithAggregatesFilter<"idnbi_User"> | string | null
    last_login_at?: DateTimeNullableWithAggregatesFilter<"idnbi_User"> | Date | string | null
    last_login_ip?: StringNullableWithAggregatesFilter<"idnbi_User"> | string | null
    failed_login_attempts?: IntWithAggregatesFilter<"idnbi_User"> | number
    is_ip_blocked?: BoolWithAggregatesFilter<"idnbi_User"> | boolean
    terms_accepted_at?: DateTimeNullableWithAggregatesFilter<"idnbi_User"> | Date | string | null
    invited_at?: DateTimeNullableWithAggregatesFilter<"idnbi_User"> | Date | string | null
    registered_at?: DateTimeWithAggregatesFilter<"idnbi_User"> | Date | string
    temp_password_flag?: BoolWithAggregatesFilter<"idnbi_User"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"idnbi_User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"idnbi_User"> | Date | string
  }

  export type idnbi_RoleWhereInput = {
    AND?: idnbi_RoleWhereInput | idnbi_RoleWhereInput[]
    OR?: idnbi_RoleWhereInput[]
    NOT?: idnbi_RoleWhereInput | idnbi_RoleWhereInput[]
    id?: StringFilter<"idnbi_Role"> | string
    name?: StringFilter<"idnbi_Role"> | string
    description?: StringNullableFilter<"idnbi_Role"> | string | null
    created_at?: DateTimeFilter<"idnbi_Role"> | Date | string
    updated_at?: DateTimeFilter<"idnbi_Role"> | Date | string
    users?: Idnbi_UserRoleListRelationFilter
    permissions?: Idnbi_RolePermissionListRelationFilter
    menus?: Idnbi_MenuRoleListRelationFilter
  }

  export type idnbi_RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    users?: idnbi_UserRoleOrderByRelationAggregateInput
    permissions?: idnbi_RolePermissionOrderByRelationAggregateInput
    menus?: idnbi_MenuRoleOrderByRelationAggregateInput
  }

  export type idnbi_RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: idnbi_RoleWhereInput | idnbi_RoleWhereInput[]
    OR?: idnbi_RoleWhereInput[]
    NOT?: idnbi_RoleWhereInput | idnbi_RoleWhereInput[]
    description?: StringNullableFilter<"idnbi_Role"> | string | null
    created_at?: DateTimeFilter<"idnbi_Role"> | Date | string
    updated_at?: DateTimeFilter<"idnbi_Role"> | Date | string
    users?: Idnbi_UserRoleListRelationFilter
    permissions?: Idnbi_RolePermissionListRelationFilter
    menus?: Idnbi_MenuRoleListRelationFilter
  }, "id" | "name">

  export type idnbi_RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: idnbi_RoleCountOrderByAggregateInput
    _max?: idnbi_RoleMaxOrderByAggregateInput
    _min?: idnbi_RoleMinOrderByAggregateInput
  }

  export type idnbi_RoleScalarWhereWithAggregatesInput = {
    AND?: idnbi_RoleScalarWhereWithAggregatesInput | idnbi_RoleScalarWhereWithAggregatesInput[]
    OR?: idnbi_RoleScalarWhereWithAggregatesInput[]
    NOT?: idnbi_RoleScalarWhereWithAggregatesInput | idnbi_RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"idnbi_Role"> | string
    name?: StringWithAggregatesFilter<"idnbi_Role"> | string
    description?: StringNullableWithAggregatesFilter<"idnbi_Role"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"idnbi_Role"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"idnbi_Role"> | Date | string
  }

  export type idnbi_UserRoleWhereInput = {
    AND?: idnbi_UserRoleWhereInput | idnbi_UserRoleWhereInput[]
    OR?: idnbi_UserRoleWhereInput[]
    NOT?: idnbi_UserRoleWhereInput | idnbi_UserRoleWhereInput[]
    userId?: StringFilter<"idnbi_UserRole"> | string
    roleId?: StringFilter<"idnbi_UserRole"> | string
    created_at?: DateTimeFilter<"idnbi_UserRole"> | Date | string
    user?: XOR<Idnbi_UserScalarRelationFilter, idnbi_UserWhereInput>
    role?: XOR<Idnbi_RoleScalarRelationFilter, idnbi_RoleWhereInput>
  }

  export type idnbi_UserRoleOrderByWithRelationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    created_at?: SortOrder
    user?: idnbi_UserOrderByWithRelationInput
    role?: idnbi_RoleOrderByWithRelationInput
  }

  export type idnbi_UserRoleWhereUniqueInput = Prisma.AtLeast<{
    userId_roleId?: idnbi_UserRoleUserIdRoleIdCompoundUniqueInput
    AND?: idnbi_UserRoleWhereInput | idnbi_UserRoleWhereInput[]
    OR?: idnbi_UserRoleWhereInput[]
    NOT?: idnbi_UserRoleWhereInput | idnbi_UserRoleWhereInput[]
    userId?: StringFilter<"idnbi_UserRole"> | string
    roleId?: StringFilter<"idnbi_UserRole"> | string
    created_at?: DateTimeFilter<"idnbi_UserRole"> | Date | string
    user?: XOR<Idnbi_UserScalarRelationFilter, idnbi_UserWhereInput>
    role?: XOR<Idnbi_RoleScalarRelationFilter, idnbi_RoleWhereInput>
  }, "userId_roleId">

  export type idnbi_UserRoleOrderByWithAggregationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    created_at?: SortOrder
    _count?: idnbi_UserRoleCountOrderByAggregateInput
    _max?: idnbi_UserRoleMaxOrderByAggregateInput
    _min?: idnbi_UserRoleMinOrderByAggregateInput
  }

  export type idnbi_UserRoleScalarWhereWithAggregatesInput = {
    AND?: idnbi_UserRoleScalarWhereWithAggregatesInput | idnbi_UserRoleScalarWhereWithAggregatesInput[]
    OR?: idnbi_UserRoleScalarWhereWithAggregatesInput[]
    NOT?: idnbi_UserRoleScalarWhereWithAggregatesInput | idnbi_UserRoleScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"idnbi_UserRole"> | string
    roleId?: StringWithAggregatesFilter<"idnbi_UserRole"> | string
    created_at?: DateTimeWithAggregatesFilter<"idnbi_UserRole"> | Date | string
  }

  export type idnbi_PermissionWhereInput = {
    AND?: idnbi_PermissionWhereInput | idnbi_PermissionWhereInput[]
    OR?: idnbi_PermissionWhereInput[]
    NOT?: idnbi_PermissionWhereInput | idnbi_PermissionWhereInput[]
    id?: StringFilter<"idnbi_Permission"> | string
    name?: StringFilter<"idnbi_Permission"> | string
    description?: StringNullableFilter<"idnbi_Permission"> | string | null
    created_at?: DateTimeFilter<"idnbi_Permission"> | Date | string
    updated_at?: DateTimeFilter<"idnbi_Permission"> | Date | string
    roles?: Idnbi_RolePermissionListRelationFilter
  }

  export type idnbi_PermissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    roles?: idnbi_RolePermissionOrderByRelationAggregateInput
  }

  export type idnbi_PermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: idnbi_PermissionWhereInput | idnbi_PermissionWhereInput[]
    OR?: idnbi_PermissionWhereInput[]
    NOT?: idnbi_PermissionWhereInput | idnbi_PermissionWhereInput[]
    description?: StringNullableFilter<"idnbi_Permission"> | string | null
    created_at?: DateTimeFilter<"idnbi_Permission"> | Date | string
    updated_at?: DateTimeFilter<"idnbi_Permission"> | Date | string
    roles?: Idnbi_RolePermissionListRelationFilter
  }, "id" | "name">

  export type idnbi_PermissionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: idnbi_PermissionCountOrderByAggregateInput
    _max?: idnbi_PermissionMaxOrderByAggregateInput
    _min?: idnbi_PermissionMinOrderByAggregateInput
  }

  export type idnbi_PermissionScalarWhereWithAggregatesInput = {
    AND?: idnbi_PermissionScalarWhereWithAggregatesInput | idnbi_PermissionScalarWhereWithAggregatesInput[]
    OR?: idnbi_PermissionScalarWhereWithAggregatesInput[]
    NOT?: idnbi_PermissionScalarWhereWithAggregatesInput | idnbi_PermissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"idnbi_Permission"> | string
    name?: StringWithAggregatesFilter<"idnbi_Permission"> | string
    description?: StringNullableWithAggregatesFilter<"idnbi_Permission"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"idnbi_Permission"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"idnbi_Permission"> | Date | string
  }

  export type idnbi_RolePermissionWhereInput = {
    AND?: idnbi_RolePermissionWhereInput | idnbi_RolePermissionWhereInput[]
    OR?: idnbi_RolePermissionWhereInput[]
    NOT?: idnbi_RolePermissionWhereInput | idnbi_RolePermissionWhereInput[]
    roleId?: StringFilter<"idnbi_RolePermission"> | string
    permissionId?: StringFilter<"idnbi_RolePermission"> | string
    created_at?: DateTimeFilter<"idnbi_RolePermission"> | Date | string
    role?: XOR<Idnbi_RoleScalarRelationFilter, idnbi_RoleWhereInput>
    permission?: XOR<Idnbi_PermissionScalarRelationFilter, idnbi_PermissionWhereInput>
  }

  export type idnbi_RolePermissionOrderByWithRelationInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
    created_at?: SortOrder
    role?: idnbi_RoleOrderByWithRelationInput
    permission?: idnbi_PermissionOrderByWithRelationInput
  }

  export type idnbi_RolePermissionWhereUniqueInput = Prisma.AtLeast<{
    roleId_permissionId?: idnbi_RolePermissionRoleIdPermissionIdCompoundUniqueInput
    AND?: idnbi_RolePermissionWhereInput | idnbi_RolePermissionWhereInput[]
    OR?: idnbi_RolePermissionWhereInput[]
    NOT?: idnbi_RolePermissionWhereInput | idnbi_RolePermissionWhereInput[]
    roleId?: StringFilter<"idnbi_RolePermission"> | string
    permissionId?: StringFilter<"idnbi_RolePermission"> | string
    created_at?: DateTimeFilter<"idnbi_RolePermission"> | Date | string
    role?: XOR<Idnbi_RoleScalarRelationFilter, idnbi_RoleWhereInput>
    permission?: XOR<Idnbi_PermissionScalarRelationFilter, idnbi_PermissionWhereInput>
  }, "roleId_permissionId">

  export type idnbi_RolePermissionOrderByWithAggregationInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
    created_at?: SortOrder
    _count?: idnbi_RolePermissionCountOrderByAggregateInput
    _max?: idnbi_RolePermissionMaxOrderByAggregateInput
    _min?: idnbi_RolePermissionMinOrderByAggregateInput
  }

  export type idnbi_RolePermissionScalarWhereWithAggregatesInput = {
    AND?: idnbi_RolePermissionScalarWhereWithAggregatesInput | idnbi_RolePermissionScalarWhereWithAggregatesInput[]
    OR?: idnbi_RolePermissionScalarWhereWithAggregatesInput[]
    NOT?: idnbi_RolePermissionScalarWhereWithAggregatesInput | idnbi_RolePermissionScalarWhereWithAggregatesInput[]
    roleId?: StringWithAggregatesFilter<"idnbi_RolePermission"> | string
    permissionId?: StringWithAggregatesFilter<"idnbi_RolePermission"> | string
    created_at?: DateTimeWithAggregatesFilter<"idnbi_RolePermission"> | Date | string
  }

  export type idnbi_TermsAndConditionsWhereInput = {
    AND?: idnbi_TermsAndConditionsWhereInput | idnbi_TermsAndConditionsWhereInput[]
    OR?: idnbi_TermsAndConditionsWhereInput[]
    NOT?: idnbi_TermsAndConditionsWhereInput | idnbi_TermsAndConditionsWhereInput[]
    id?: StringFilter<"idnbi_TermsAndConditions"> | string
    version?: StringFilter<"idnbi_TermsAndConditions"> | string
    content_html?: StringFilter<"idnbi_TermsAndConditions"> | string
    created_at?: DateTimeFilter<"idnbi_TermsAndConditions"> | Date | string
    updated_at?: DateTimeFilter<"idnbi_TermsAndConditions"> | Date | string
    published_at?: DateTimeNullableFilter<"idnbi_TermsAndConditions"> | Date | string | null
  }

  export type idnbi_TermsAndConditionsOrderByWithRelationInput = {
    id?: SortOrder
    version?: SortOrder
    content_html?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    published_at?: SortOrderInput | SortOrder
  }

  export type idnbi_TermsAndConditionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    version?: string
    AND?: idnbi_TermsAndConditionsWhereInput | idnbi_TermsAndConditionsWhereInput[]
    OR?: idnbi_TermsAndConditionsWhereInput[]
    NOT?: idnbi_TermsAndConditionsWhereInput | idnbi_TermsAndConditionsWhereInput[]
    content_html?: StringFilter<"idnbi_TermsAndConditions"> | string
    created_at?: DateTimeFilter<"idnbi_TermsAndConditions"> | Date | string
    updated_at?: DateTimeFilter<"idnbi_TermsAndConditions"> | Date | string
    published_at?: DateTimeNullableFilter<"idnbi_TermsAndConditions"> | Date | string | null
  }, "id" | "version">

  export type idnbi_TermsAndConditionsOrderByWithAggregationInput = {
    id?: SortOrder
    version?: SortOrder
    content_html?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    published_at?: SortOrderInput | SortOrder
    _count?: idnbi_TermsAndConditionsCountOrderByAggregateInput
    _max?: idnbi_TermsAndConditionsMaxOrderByAggregateInput
    _min?: idnbi_TermsAndConditionsMinOrderByAggregateInput
  }

  export type idnbi_TermsAndConditionsScalarWhereWithAggregatesInput = {
    AND?: idnbi_TermsAndConditionsScalarWhereWithAggregatesInput | idnbi_TermsAndConditionsScalarWhereWithAggregatesInput[]
    OR?: idnbi_TermsAndConditionsScalarWhereWithAggregatesInput[]
    NOT?: idnbi_TermsAndConditionsScalarWhereWithAggregatesInput | idnbi_TermsAndConditionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"idnbi_TermsAndConditions"> | string
    version?: StringWithAggregatesFilter<"idnbi_TermsAndConditions"> | string
    content_html?: StringWithAggregatesFilter<"idnbi_TermsAndConditions"> | string
    created_at?: DateTimeWithAggregatesFilter<"idnbi_TermsAndConditions"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"idnbi_TermsAndConditions"> | Date | string
    published_at?: DateTimeNullableWithAggregatesFilter<"idnbi_TermsAndConditions"> | Date | string | null
  }

  export type idnbi_ContentWhereInput = {
    AND?: idnbi_ContentWhereInput | idnbi_ContentWhereInput[]
    OR?: idnbi_ContentWhereInput[]
    NOT?: idnbi_ContentWhereInput | idnbi_ContentWhereInput[]
    id?: StringFilter<"idnbi_Content"> | string
    title?: StringFilter<"idnbi_Content"> | string
    slug?: StringFilter<"idnbi_Content"> | string
    type?: StringFilter<"idnbi_Content"> | string
    content_data?: StringFilter<"idnbi_Content"> | string
    created_by_id?: StringNullableFilter<"idnbi_Content"> | string | null
    created_at?: DateTimeFilter<"idnbi_Content"> | Date | string
    updated_at?: DateTimeFilter<"idnbi_Content"> | Date | string
    created_by?: XOR<Idnbi_UserNullableScalarRelationFilter, idnbi_UserWhereInput> | null
  }

  export type idnbi_ContentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    content_data?: SortOrder
    created_by_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: idnbi_UserOrderByWithRelationInput
  }

  export type idnbi_ContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: idnbi_ContentWhereInput | idnbi_ContentWhereInput[]
    OR?: idnbi_ContentWhereInput[]
    NOT?: idnbi_ContentWhereInput | idnbi_ContentWhereInput[]
    title?: StringFilter<"idnbi_Content"> | string
    type?: StringFilter<"idnbi_Content"> | string
    content_data?: StringFilter<"idnbi_Content"> | string
    created_by_id?: StringNullableFilter<"idnbi_Content"> | string | null
    created_at?: DateTimeFilter<"idnbi_Content"> | Date | string
    updated_at?: DateTimeFilter<"idnbi_Content"> | Date | string
    created_by?: XOR<Idnbi_UserNullableScalarRelationFilter, idnbi_UserWhereInput> | null
  }, "id" | "slug">

  export type idnbi_ContentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    content_data?: SortOrder
    created_by_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: idnbi_ContentCountOrderByAggregateInput
    _max?: idnbi_ContentMaxOrderByAggregateInput
    _min?: idnbi_ContentMinOrderByAggregateInput
  }

  export type idnbi_ContentScalarWhereWithAggregatesInput = {
    AND?: idnbi_ContentScalarWhereWithAggregatesInput | idnbi_ContentScalarWhereWithAggregatesInput[]
    OR?: idnbi_ContentScalarWhereWithAggregatesInput[]
    NOT?: idnbi_ContentScalarWhereWithAggregatesInput | idnbi_ContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"idnbi_Content"> | string
    title?: StringWithAggregatesFilter<"idnbi_Content"> | string
    slug?: StringWithAggregatesFilter<"idnbi_Content"> | string
    type?: StringWithAggregatesFilter<"idnbi_Content"> | string
    content_data?: StringWithAggregatesFilter<"idnbi_Content"> | string
    created_by_id?: StringNullableWithAggregatesFilter<"idnbi_Content"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"idnbi_Content"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"idnbi_Content"> | Date | string
  }

  export type idnbi_MenuItemWhereInput = {
    AND?: idnbi_MenuItemWhereInput | idnbi_MenuItemWhereInput[]
    OR?: idnbi_MenuItemWhereInput[]
    NOT?: idnbi_MenuItemWhereInput | idnbi_MenuItemWhereInput[]
    id?: StringFilter<"idnbi_MenuItem"> | string
    title?: StringFilter<"idnbi_MenuItem"> | string
    parent_id?: StringNullableFilter<"idnbi_MenuItem"> | string | null
    order?: IntFilter<"idnbi_MenuItem"> | number
    icon_class?: StringNullableFilter<"idnbi_MenuItem"> | string | null
    type?: StringFilter<"idnbi_MenuItem"> | string
    target_url?: StringNullableFilter<"idnbi_MenuItem"> | string | null
    content_id?: StringNullableFilter<"idnbi_MenuItem"> | string | null
    created_at?: DateTimeFilter<"idnbi_MenuItem"> | Date | string
    updated_at?: DateTimeFilter<"idnbi_MenuItem"> | Date | string
    parent?: XOR<Idnbi_MenuItemNullableScalarRelationFilter, idnbi_MenuItemWhereInput> | null
    children?: Idnbi_MenuItemListRelationFilter
    roles?: Idnbi_MenuRoleListRelationFilter
  }

  export type idnbi_MenuItemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    order?: SortOrder
    icon_class?: SortOrderInput | SortOrder
    type?: SortOrder
    target_url?: SortOrderInput | SortOrder
    content_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    parent?: idnbi_MenuItemOrderByWithRelationInput
    children?: idnbi_MenuItemOrderByRelationAggregateInput
    roles?: idnbi_MenuRoleOrderByRelationAggregateInput
  }

  export type idnbi_MenuItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title_parent_id?: idnbi_MenuItemTitleParent_idCompoundUniqueInput
    AND?: idnbi_MenuItemWhereInput | idnbi_MenuItemWhereInput[]
    OR?: idnbi_MenuItemWhereInput[]
    NOT?: idnbi_MenuItemWhereInput | idnbi_MenuItemWhereInput[]
    title?: StringFilter<"idnbi_MenuItem"> | string
    parent_id?: StringNullableFilter<"idnbi_MenuItem"> | string | null
    order?: IntFilter<"idnbi_MenuItem"> | number
    icon_class?: StringNullableFilter<"idnbi_MenuItem"> | string | null
    type?: StringFilter<"idnbi_MenuItem"> | string
    target_url?: StringNullableFilter<"idnbi_MenuItem"> | string | null
    content_id?: StringNullableFilter<"idnbi_MenuItem"> | string | null
    created_at?: DateTimeFilter<"idnbi_MenuItem"> | Date | string
    updated_at?: DateTimeFilter<"idnbi_MenuItem"> | Date | string
    parent?: XOR<Idnbi_MenuItemNullableScalarRelationFilter, idnbi_MenuItemWhereInput> | null
    children?: Idnbi_MenuItemListRelationFilter
    roles?: Idnbi_MenuRoleListRelationFilter
  }, "id" | "title_parent_id">

  export type idnbi_MenuItemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    order?: SortOrder
    icon_class?: SortOrderInput | SortOrder
    type?: SortOrder
    target_url?: SortOrderInput | SortOrder
    content_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: idnbi_MenuItemCountOrderByAggregateInput
    _avg?: idnbi_MenuItemAvgOrderByAggregateInput
    _max?: idnbi_MenuItemMaxOrderByAggregateInput
    _min?: idnbi_MenuItemMinOrderByAggregateInput
    _sum?: idnbi_MenuItemSumOrderByAggregateInput
  }

  export type idnbi_MenuItemScalarWhereWithAggregatesInput = {
    AND?: idnbi_MenuItemScalarWhereWithAggregatesInput | idnbi_MenuItemScalarWhereWithAggregatesInput[]
    OR?: idnbi_MenuItemScalarWhereWithAggregatesInput[]
    NOT?: idnbi_MenuItemScalarWhereWithAggregatesInput | idnbi_MenuItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"idnbi_MenuItem"> | string
    title?: StringWithAggregatesFilter<"idnbi_MenuItem"> | string
    parent_id?: StringNullableWithAggregatesFilter<"idnbi_MenuItem"> | string | null
    order?: IntWithAggregatesFilter<"idnbi_MenuItem"> | number
    icon_class?: StringNullableWithAggregatesFilter<"idnbi_MenuItem"> | string | null
    type?: StringWithAggregatesFilter<"idnbi_MenuItem"> | string
    target_url?: StringNullableWithAggregatesFilter<"idnbi_MenuItem"> | string | null
    content_id?: StringNullableWithAggregatesFilter<"idnbi_MenuItem"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"idnbi_MenuItem"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"idnbi_MenuItem"> | Date | string
  }

  export type idnbi_MenuRoleWhereInput = {
    AND?: idnbi_MenuRoleWhereInput | idnbi_MenuRoleWhereInput[]
    OR?: idnbi_MenuRoleWhereInput[]
    NOT?: idnbi_MenuRoleWhereInput | idnbi_MenuRoleWhereInput[]
    menuId?: StringFilter<"idnbi_MenuRole"> | string
    roleId?: StringFilter<"idnbi_MenuRole"> | string
    created_at?: DateTimeFilter<"idnbi_MenuRole"> | Date | string
    menu?: XOR<Idnbi_MenuItemScalarRelationFilter, idnbi_MenuItemWhereInput>
    role?: XOR<Idnbi_RoleScalarRelationFilter, idnbi_RoleWhereInput>
  }

  export type idnbi_MenuRoleOrderByWithRelationInput = {
    menuId?: SortOrder
    roleId?: SortOrder
    created_at?: SortOrder
    menu?: idnbi_MenuItemOrderByWithRelationInput
    role?: idnbi_RoleOrderByWithRelationInput
  }

  export type idnbi_MenuRoleWhereUniqueInput = Prisma.AtLeast<{
    menuId_roleId?: idnbi_MenuRoleMenuIdRoleIdCompoundUniqueInput
    AND?: idnbi_MenuRoleWhereInput | idnbi_MenuRoleWhereInput[]
    OR?: idnbi_MenuRoleWhereInput[]
    NOT?: idnbi_MenuRoleWhereInput | idnbi_MenuRoleWhereInput[]
    menuId?: StringFilter<"idnbi_MenuRole"> | string
    roleId?: StringFilter<"idnbi_MenuRole"> | string
    created_at?: DateTimeFilter<"idnbi_MenuRole"> | Date | string
    menu?: XOR<Idnbi_MenuItemScalarRelationFilter, idnbi_MenuItemWhereInput>
    role?: XOR<Idnbi_RoleScalarRelationFilter, idnbi_RoleWhereInput>
  }, "menuId_roleId">

  export type idnbi_MenuRoleOrderByWithAggregationInput = {
    menuId?: SortOrder
    roleId?: SortOrder
    created_at?: SortOrder
    _count?: idnbi_MenuRoleCountOrderByAggregateInput
    _max?: idnbi_MenuRoleMaxOrderByAggregateInput
    _min?: idnbi_MenuRoleMinOrderByAggregateInput
  }

  export type idnbi_MenuRoleScalarWhereWithAggregatesInput = {
    AND?: idnbi_MenuRoleScalarWhereWithAggregatesInput | idnbi_MenuRoleScalarWhereWithAggregatesInput[]
    OR?: idnbi_MenuRoleScalarWhereWithAggregatesInput[]
    NOT?: idnbi_MenuRoleScalarWhereWithAggregatesInput | idnbi_MenuRoleScalarWhereWithAggregatesInput[]
    menuId?: StringWithAggregatesFilter<"idnbi_MenuRole"> | string
    roleId?: StringWithAggregatesFilter<"idnbi_MenuRole"> | string
    created_at?: DateTimeWithAggregatesFilter<"idnbi_MenuRole"> | Date | string
  }

  export type idnbi_NotificationWhereInput = {
    AND?: idnbi_NotificationWhereInput | idnbi_NotificationWhereInput[]
    OR?: idnbi_NotificationWhereInput[]
    NOT?: idnbi_NotificationWhereInput | idnbi_NotificationWhereInput[]
    id?: StringFilter<"idnbi_Notification"> | string
    title?: StringFilter<"idnbi_Notification"> | string
    message?: StringFilter<"idnbi_Notification"> | string
    type?: StringFilter<"idnbi_Notification"> | string
    created_at?: DateTimeFilter<"idnbi_Notification"> | Date | string
    updated_at?: DateTimeFilter<"idnbi_Notification"> | Date | string
    user_statuses?: Idnbi_UserNotificationStatusListRelationFilter
  }

  export type idnbi_NotificationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_statuses?: idnbi_UserNotificationStatusOrderByRelationAggregateInput
  }

  export type idnbi_NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: idnbi_NotificationWhereInput | idnbi_NotificationWhereInput[]
    OR?: idnbi_NotificationWhereInput[]
    NOT?: idnbi_NotificationWhereInput | idnbi_NotificationWhereInput[]
    title?: StringFilter<"idnbi_Notification"> | string
    message?: StringFilter<"idnbi_Notification"> | string
    type?: StringFilter<"idnbi_Notification"> | string
    created_at?: DateTimeFilter<"idnbi_Notification"> | Date | string
    updated_at?: DateTimeFilter<"idnbi_Notification"> | Date | string
    user_statuses?: Idnbi_UserNotificationStatusListRelationFilter
  }, "id">

  export type idnbi_NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: idnbi_NotificationCountOrderByAggregateInput
    _max?: idnbi_NotificationMaxOrderByAggregateInput
    _min?: idnbi_NotificationMinOrderByAggregateInput
  }

  export type idnbi_NotificationScalarWhereWithAggregatesInput = {
    AND?: idnbi_NotificationScalarWhereWithAggregatesInput | idnbi_NotificationScalarWhereWithAggregatesInput[]
    OR?: idnbi_NotificationScalarWhereWithAggregatesInput[]
    NOT?: idnbi_NotificationScalarWhereWithAggregatesInput | idnbi_NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"idnbi_Notification"> | string
    title?: StringWithAggregatesFilter<"idnbi_Notification"> | string
    message?: StringWithAggregatesFilter<"idnbi_Notification"> | string
    type?: StringWithAggregatesFilter<"idnbi_Notification"> | string
    created_at?: DateTimeWithAggregatesFilter<"idnbi_Notification"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"idnbi_Notification"> | Date | string
  }

  export type idnbi_UserNotificationStatusWhereInput = {
    AND?: idnbi_UserNotificationStatusWhereInput | idnbi_UserNotificationStatusWhereInput[]
    OR?: idnbi_UserNotificationStatusWhereInput[]
    NOT?: idnbi_UserNotificationStatusWhereInput | idnbi_UserNotificationStatusWhereInput[]
    userId?: StringFilter<"idnbi_UserNotificationStatus"> | string
    notificationId?: StringFilter<"idnbi_UserNotificationStatus"> | string
    read?: BoolFilter<"idnbi_UserNotificationStatus"> | boolean
    read_at?: DateTimeNullableFilter<"idnbi_UserNotificationStatus"> | Date | string | null
    created_at?: DateTimeFilter<"idnbi_UserNotificationStatus"> | Date | string
    user?: XOR<Idnbi_UserScalarRelationFilter, idnbi_UserWhereInput>
    notification?: XOR<Idnbi_NotificationScalarRelationFilter, idnbi_NotificationWhereInput>
  }

  export type idnbi_UserNotificationStatusOrderByWithRelationInput = {
    userId?: SortOrder
    notificationId?: SortOrder
    read?: SortOrder
    read_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: idnbi_UserOrderByWithRelationInput
    notification?: idnbi_NotificationOrderByWithRelationInput
  }

  export type idnbi_UserNotificationStatusWhereUniqueInput = Prisma.AtLeast<{
    userId_notificationId?: idnbi_UserNotificationStatusUserIdNotificationIdCompoundUniqueInput
    AND?: idnbi_UserNotificationStatusWhereInput | idnbi_UserNotificationStatusWhereInput[]
    OR?: idnbi_UserNotificationStatusWhereInput[]
    NOT?: idnbi_UserNotificationStatusWhereInput | idnbi_UserNotificationStatusWhereInput[]
    userId?: StringFilter<"idnbi_UserNotificationStatus"> | string
    notificationId?: StringFilter<"idnbi_UserNotificationStatus"> | string
    read?: BoolFilter<"idnbi_UserNotificationStatus"> | boolean
    read_at?: DateTimeNullableFilter<"idnbi_UserNotificationStatus"> | Date | string | null
    created_at?: DateTimeFilter<"idnbi_UserNotificationStatus"> | Date | string
    user?: XOR<Idnbi_UserScalarRelationFilter, idnbi_UserWhereInput>
    notification?: XOR<Idnbi_NotificationScalarRelationFilter, idnbi_NotificationWhereInput>
  }, "userId_notificationId">

  export type idnbi_UserNotificationStatusOrderByWithAggregationInput = {
    userId?: SortOrder
    notificationId?: SortOrder
    read?: SortOrder
    read_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: idnbi_UserNotificationStatusCountOrderByAggregateInput
    _max?: idnbi_UserNotificationStatusMaxOrderByAggregateInput
    _min?: idnbi_UserNotificationStatusMinOrderByAggregateInput
  }

  export type idnbi_UserNotificationStatusScalarWhereWithAggregatesInput = {
    AND?: idnbi_UserNotificationStatusScalarWhereWithAggregatesInput | idnbi_UserNotificationStatusScalarWhereWithAggregatesInput[]
    OR?: idnbi_UserNotificationStatusScalarWhereWithAggregatesInput[]
    NOT?: idnbi_UserNotificationStatusScalarWhereWithAggregatesInput | idnbi_UserNotificationStatusScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"idnbi_UserNotificationStatus"> | string
    notificationId?: StringWithAggregatesFilter<"idnbi_UserNotificationStatus"> | string
    read?: BoolWithAggregatesFilter<"idnbi_UserNotificationStatus"> | boolean
    read_at?: DateTimeNullableWithAggregatesFilter<"idnbi_UserNotificationStatus"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"idnbi_UserNotificationStatus"> | Date | string
  }

  export type idnbi_EmailTemplateWhereInput = {
    AND?: idnbi_EmailTemplateWhereInput | idnbi_EmailTemplateWhereInput[]
    OR?: idnbi_EmailTemplateWhereInput[]
    NOT?: idnbi_EmailTemplateWhereInput | idnbi_EmailTemplateWhereInput[]
    id?: StringFilter<"idnbi_EmailTemplate"> | string
    name?: StringFilter<"idnbi_EmailTemplate"> | string
    subject?: StringFilter<"idnbi_EmailTemplate"> | string
    content?: StringFilter<"idnbi_EmailTemplate"> | string
    created_at?: DateTimeFilter<"idnbi_EmailTemplate"> | Date | string
    updated_at?: DateTimeFilter<"idnbi_EmailTemplate"> | Date | string
  }

  export type idnbi_EmailTemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type idnbi_EmailTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: idnbi_EmailTemplateWhereInput | idnbi_EmailTemplateWhereInput[]
    OR?: idnbi_EmailTemplateWhereInput[]
    NOT?: idnbi_EmailTemplateWhereInput | idnbi_EmailTemplateWhereInput[]
    subject?: StringFilter<"idnbi_EmailTemplate"> | string
    content?: StringFilter<"idnbi_EmailTemplate"> | string
    created_at?: DateTimeFilter<"idnbi_EmailTemplate"> | Date | string
    updated_at?: DateTimeFilter<"idnbi_EmailTemplate"> | Date | string
  }, "id" | "name">

  export type idnbi_EmailTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: idnbi_EmailTemplateCountOrderByAggregateInput
    _max?: idnbi_EmailTemplateMaxOrderByAggregateInput
    _min?: idnbi_EmailTemplateMinOrderByAggregateInput
  }

  export type idnbi_EmailTemplateScalarWhereWithAggregatesInput = {
    AND?: idnbi_EmailTemplateScalarWhereWithAggregatesInput | idnbi_EmailTemplateScalarWhereWithAggregatesInput[]
    OR?: idnbi_EmailTemplateScalarWhereWithAggregatesInput[]
    NOT?: idnbi_EmailTemplateScalarWhereWithAggregatesInput | idnbi_EmailTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"idnbi_EmailTemplate"> | string
    name?: StringWithAggregatesFilter<"idnbi_EmailTemplate"> | string
    subject?: StringWithAggregatesFilter<"idnbi_EmailTemplate"> | string
    content?: StringWithAggregatesFilter<"idnbi_EmailTemplate"> | string
    created_at?: DateTimeWithAggregatesFilter<"idnbi_EmailTemplate"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"idnbi_EmailTemplate"> | Date | string
  }

  export type idnbi_SystemConfigurationWhereInput = {
    AND?: idnbi_SystemConfigurationWhereInput | idnbi_SystemConfigurationWhereInput[]
    OR?: idnbi_SystemConfigurationWhereInput[]
    NOT?: idnbi_SystemConfigurationWhereInput | idnbi_SystemConfigurationWhereInput[]
    id?: StringFilter<"idnbi_SystemConfiguration"> | string
    app_name?: StringFilter<"idnbi_SystemConfiguration"> | string
    logo_url?: StringNullableFilter<"idnbi_SystemConfiguration"> | string | null
    login_bg_url?: StringNullableFilter<"idnbi_SystemConfiguration"> | string | null
    footer_text?: StringNullableFilter<"idnbi_SystemConfiguration"> | string | null
    default_profile_photo_url?: StringNullableFilter<"idnbi_SystemConfiguration"> | string | null
    jumbotron_content?: StringNullableFilter<"idnbi_SystemConfiguration"> | string | null
    marquee_content?: StringNullableFilter<"idnbi_SystemConfiguration"> | string | null
    created_at?: DateTimeFilter<"idnbi_SystemConfiguration"> | Date | string
    updated_at?: DateTimeFilter<"idnbi_SystemConfiguration"> | Date | string
  }

  export type idnbi_SystemConfigurationOrderByWithRelationInput = {
    id?: SortOrder
    app_name?: SortOrder
    logo_url?: SortOrderInput | SortOrder
    login_bg_url?: SortOrderInput | SortOrder
    footer_text?: SortOrderInput | SortOrder
    default_profile_photo_url?: SortOrderInput | SortOrder
    jumbotron_content?: SortOrderInput | SortOrder
    marquee_content?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type idnbi_SystemConfigurationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: idnbi_SystemConfigurationWhereInput | idnbi_SystemConfigurationWhereInput[]
    OR?: idnbi_SystemConfigurationWhereInput[]
    NOT?: idnbi_SystemConfigurationWhereInput | idnbi_SystemConfigurationWhereInput[]
    app_name?: StringFilter<"idnbi_SystemConfiguration"> | string
    logo_url?: StringNullableFilter<"idnbi_SystemConfiguration"> | string | null
    login_bg_url?: StringNullableFilter<"idnbi_SystemConfiguration"> | string | null
    footer_text?: StringNullableFilter<"idnbi_SystemConfiguration"> | string | null
    default_profile_photo_url?: StringNullableFilter<"idnbi_SystemConfiguration"> | string | null
    jumbotron_content?: StringNullableFilter<"idnbi_SystemConfiguration"> | string | null
    marquee_content?: StringNullableFilter<"idnbi_SystemConfiguration"> | string | null
    created_at?: DateTimeFilter<"idnbi_SystemConfiguration"> | Date | string
    updated_at?: DateTimeFilter<"idnbi_SystemConfiguration"> | Date | string
  }, "id">

  export type idnbi_SystemConfigurationOrderByWithAggregationInput = {
    id?: SortOrder
    app_name?: SortOrder
    logo_url?: SortOrderInput | SortOrder
    login_bg_url?: SortOrderInput | SortOrder
    footer_text?: SortOrderInput | SortOrder
    default_profile_photo_url?: SortOrderInput | SortOrder
    jumbotron_content?: SortOrderInput | SortOrder
    marquee_content?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: idnbi_SystemConfigurationCountOrderByAggregateInput
    _max?: idnbi_SystemConfigurationMaxOrderByAggregateInput
    _min?: idnbi_SystemConfigurationMinOrderByAggregateInput
  }

  export type idnbi_SystemConfigurationScalarWhereWithAggregatesInput = {
    AND?: idnbi_SystemConfigurationScalarWhereWithAggregatesInput | idnbi_SystemConfigurationScalarWhereWithAggregatesInput[]
    OR?: idnbi_SystemConfigurationScalarWhereWithAggregatesInput[]
    NOT?: idnbi_SystemConfigurationScalarWhereWithAggregatesInput | idnbi_SystemConfigurationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"idnbi_SystemConfiguration"> | string
    app_name?: StringWithAggregatesFilter<"idnbi_SystemConfiguration"> | string
    logo_url?: StringNullableWithAggregatesFilter<"idnbi_SystemConfiguration"> | string | null
    login_bg_url?: StringNullableWithAggregatesFilter<"idnbi_SystemConfiguration"> | string | null
    footer_text?: StringNullableWithAggregatesFilter<"idnbi_SystemConfiguration"> | string | null
    default_profile_photo_url?: StringNullableWithAggregatesFilter<"idnbi_SystemConfiguration"> | string | null
    jumbotron_content?: StringNullableWithAggregatesFilter<"idnbi_SystemConfiguration"> | string | null
    marquee_content?: StringNullableWithAggregatesFilter<"idnbi_SystemConfiguration"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"idnbi_SystemConfiguration"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"idnbi_SystemConfiguration"> | Date | string
  }

  export type idnbi_AuditLogWhereInput = {
    AND?: idnbi_AuditLogWhereInput | idnbi_AuditLogWhereInput[]
    OR?: idnbi_AuditLogWhereInput[]
    NOT?: idnbi_AuditLogWhereInput | idnbi_AuditLogWhereInput[]
    id?: StringFilter<"idnbi_AuditLog"> | string
    userId?: StringNullableFilter<"idnbi_AuditLog"> | string | null
    action?: StringFilter<"idnbi_AuditLog"> | string
    resource?: StringNullableFilter<"idnbi_AuditLog"> | string | null
    resourceId?: StringNullableFilter<"idnbi_AuditLog"> | string | null
    details?: JsonNullableFilter<"idnbi_AuditLog">
    ip_address?: StringNullableFilter<"idnbi_AuditLog"> | string | null
    user_agent?: StringNullableFilter<"idnbi_AuditLog"> | string | null
    created_at?: DateTimeFilter<"idnbi_AuditLog"> | Date | string
    user?: XOR<Idnbi_UserNullableScalarRelationFilter, idnbi_UserWhereInput> | null
  }

  export type idnbi_AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    resource?: SortOrderInput | SortOrder
    resourceId?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: idnbi_UserOrderByWithRelationInput
  }

  export type idnbi_AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: idnbi_AuditLogWhereInput | idnbi_AuditLogWhereInput[]
    OR?: idnbi_AuditLogWhereInput[]
    NOT?: idnbi_AuditLogWhereInput | idnbi_AuditLogWhereInput[]
    userId?: StringNullableFilter<"idnbi_AuditLog"> | string | null
    action?: StringFilter<"idnbi_AuditLog"> | string
    resource?: StringNullableFilter<"idnbi_AuditLog"> | string | null
    resourceId?: StringNullableFilter<"idnbi_AuditLog"> | string | null
    details?: JsonNullableFilter<"idnbi_AuditLog">
    ip_address?: StringNullableFilter<"idnbi_AuditLog"> | string | null
    user_agent?: StringNullableFilter<"idnbi_AuditLog"> | string | null
    created_at?: DateTimeFilter<"idnbi_AuditLog"> | Date | string
    user?: XOR<Idnbi_UserNullableScalarRelationFilter, idnbi_UserWhereInput> | null
  }, "id">

  export type idnbi_AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    resource?: SortOrderInput | SortOrder
    resourceId?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: idnbi_AuditLogCountOrderByAggregateInput
    _max?: idnbi_AuditLogMaxOrderByAggregateInput
    _min?: idnbi_AuditLogMinOrderByAggregateInput
  }

  export type idnbi_AuditLogScalarWhereWithAggregatesInput = {
    AND?: idnbi_AuditLogScalarWhereWithAggregatesInput | idnbi_AuditLogScalarWhereWithAggregatesInput[]
    OR?: idnbi_AuditLogScalarWhereWithAggregatesInput[]
    NOT?: idnbi_AuditLogScalarWhereWithAggregatesInput | idnbi_AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"idnbi_AuditLog"> | string
    userId?: StringNullableWithAggregatesFilter<"idnbi_AuditLog"> | string | null
    action?: StringWithAggregatesFilter<"idnbi_AuditLog"> | string
    resource?: StringNullableWithAggregatesFilter<"idnbi_AuditLog"> | string | null
    resourceId?: StringNullableWithAggregatesFilter<"idnbi_AuditLog"> | string | null
    details?: JsonNullableWithAggregatesFilter<"idnbi_AuditLog">
    ip_address?: StringNullableWithAggregatesFilter<"idnbi_AuditLog"> | string | null
    user_agent?: StringNullableWithAggregatesFilter<"idnbi_AuditLog"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"idnbi_AuditLog"> | Date | string
  }

  export type idnbi_PasswordResetTokenWhereInput = {
    AND?: idnbi_PasswordResetTokenWhereInput | idnbi_PasswordResetTokenWhereInput[]
    OR?: idnbi_PasswordResetTokenWhereInput[]
    NOT?: idnbi_PasswordResetTokenWhereInput | idnbi_PasswordResetTokenWhereInput[]
    id?: StringFilter<"idnbi_PasswordResetToken"> | string
    userId?: StringFilter<"idnbi_PasswordResetToken"> | string
    token?: StringFilter<"idnbi_PasswordResetToken"> | string
    expires_at?: DateTimeFilter<"idnbi_PasswordResetToken"> | Date | string
    is_used?: BoolFilter<"idnbi_PasswordResetToken"> | boolean
    created_at?: DateTimeFilter<"idnbi_PasswordResetToken"> | Date | string
    user?: XOR<Idnbi_UserScalarRelationFilter, idnbi_UserWhereInput>
  }

  export type idnbi_PasswordResetTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    is_used?: SortOrder
    created_at?: SortOrder
    user?: idnbi_UserOrderByWithRelationInput
  }

  export type idnbi_PasswordResetTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: idnbi_PasswordResetTokenWhereInput | idnbi_PasswordResetTokenWhereInput[]
    OR?: idnbi_PasswordResetTokenWhereInput[]
    NOT?: idnbi_PasswordResetTokenWhereInput | idnbi_PasswordResetTokenWhereInput[]
    userId?: StringFilter<"idnbi_PasswordResetToken"> | string
    expires_at?: DateTimeFilter<"idnbi_PasswordResetToken"> | Date | string
    is_used?: BoolFilter<"idnbi_PasswordResetToken"> | boolean
    created_at?: DateTimeFilter<"idnbi_PasswordResetToken"> | Date | string
    user?: XOR<Idnbi_UserScalarRelationFilter, idnbi_UserWhereInput>
  }, "id" | "token">

  export type idnbi_PasswordResetTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    is_used?: SortOrder
    created_at?: SortOrder
    _count?: idnbi_PasswordResetTokenCountOrderByAggregateInput
    _max?: idnbi_PasswordResetTokenMaxOrderByAggregateInput
    _min?: idnbi_PasswordResetTokenMinOrderByAggregateInput
  }

  export type idnbi_PasswordResetTokenScalarWhereWithAggregatesInput = {
    AND?: idnbi_PasswordResetTokenScalarWhereWithAggregatesInput | idnbi_PasswordResetTokenScalarWhereWithAggregatesInput[]
    OR?: idnbi_PasswordResetTokenScalarWhereWithAggregatesInput[]
    NOT?: idnbi_PasswordResetTokenScalarWhereWithAggregatesInput | idnbi_PasswordResetTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"idnbi_PasswordResetToken"> | string
    userId?: StringWithAggregatesFilter<"idnbi_PasswordResetToken"> | string
    token?: StringWithAggregatesFilter<"idnbi_PasswordResetToken"> | string
    expires_at?: DateTimeWithAggregatesFilter<"idnbi_PasswordResetToken"> | Date | string
    is_used?: BoolWithAggregatesFilter<"idnbi_PasswordResetToken"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"idnbi_PasswordResetToken"> | Date | string
  }

  export type idnbi_UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: string
    profile_photo_url?: string | null
    last_login_at?: Date | string | null
    last_login_ip?: string | null
    failed_login_attempts?: number
    is_ip_blocked?: boolean
    terms_accepted_at?: Date | string | null
    invited_at?: Date | string | null
    registered_at?: Date | string
    temp_password_flag?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    roles?: idnbi_UserRoleCreateNestedManyWithoutUserInput
    created_content?: idnbi_ContentCreateNestedManyWithoutCreated_byInput
    notifications?: idnbi_UserNotificationStatusCreateNestedManyWithoutUserInput
    password_reset?: idnbi_PasswordResetTokenCreateNestedManyWithoutUserInput
    audit_logs?: idnbi_AuditLogCreateNestedManyWithoutUserInput
  }

  export type idnbi_UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: string
    profile_photo_url?: string | null
    last_login_at?: Date | string | null
    last_login_ip?: string | null
    failed_login_attempts?: number
    is_ip_blocked?: boolean
    terms_accepted_at?: Date | string | null
    invited_at?: Date | string | null
    registered_at?: Date | string
    temp_password_flag?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    roles?: idnbi_UserRoleUncheckedCreateNestedManyWithoutUserInput
    created_content?: idnbi_ContentUncheckedCreateNestedManyWithoutCreated_byInput
    notifications?: idnbi_UserNotificationStatusUncheckedCreateNestedManyWithoutUserInput
    password_reset?: idnbi_PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
    audit_logs?: idnbi_AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type idnbi_UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login_ip?: NullableStringFieldUpdateOperationsInput | string | null
    failed_login_attempts?: IntFieldUpdateOperationsInput | number
    is_ip_blocked?: BoolFieldUpdateOperationsInput | boolean
    terms_accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    temp_password_flag?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: idnbi_UserRoleUpdateManyWithoutUserNestedInput
    created_content?: idnbi_ContentUpdateManyWithoutCreated_byNestedInput
    notifications?: idnbi_UserNotificationStatusUpdateManyWithoutUserNestedInput
    password_reset?: idnbi_PasswordResetTokenUpdateManyWithoutUserNestedInput
    audit_logs?: idnbi_AuditLogUpdateManyWithoutUserNestedInput
  }

  export type idnbi_UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login_ip?: NullableStringFieldUpdateOperationsInput | string | null
    failed_login_attempts?: IntFieldUpdateOperationsInput | number
    is_ip_blocked?: BoolFieldUpdateOperationsInput | boolean
    terms_accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    temp_password_flag?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: idnbi_UserRoleUncheckedUpdateManyWithoutUserNestedInput
    created_content?: idnbi_ContentUncheckedUpdateManyWithoutCreated_byNestedInput
    notifications?: idnbi_UserNotificationStatusUncheckedUpdateManyWithoutUserNestedInput
    password_reset?: idnbi_PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
    audit_logs?: idnbi_AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type idnbi_UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: string
    profile_photo_url?: string | null
    last_login_at?: Date | string | null
    last_login_ip?: string | null
    failed_login_attempts?: number
    is_ip_blocked?: boolean
    terms_accepted_at?: Date | string | null
    invited_at?: Date | string | null
    registered_at?: Date | string
    temp_password_flag?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type idnbi_UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login_ip?: NullableStringFieldUpdateOperationsInput | string | null
    failed_login_attempts?: IntFieldUpdateOperationsInput | number
    is_ip_blocked?: BoolFieldUpdateOperationsInput | boolean
    terms_accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    temp_password_flag?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login_ip?: NullableStringFieldUpdateOperationsInput | string | null
    failed_login_attempts?: IntFieldUpdateOperationsInput | number
    is_ip_blocked?: BoolFieldUpdateOperationsInput | boolean
    terms_accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    temp_password_flag?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_RoleCreateInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    users?: idnbi_UserRoleCreateNestedManyWithoutRoleInput
    permissions?: idnbi_RolePermissionCreateNestedManyWithoutRoleInput
    menus?: idnbi_MenuRoleCreateNestedManyWithoutRoleInput
  }

  export type idnbi_RoleUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    users?: idnbi_UserRoleUncheckedCreateNestedManyWithoutRoleInput
    permissions?: idnbi_RolePermissionUncheckedCreateNestedManyWithoutRoleInput
    menus?: idnbi_MenuRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type idnbi_RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: idnbi_UserRoleUpdateManyWithoutRoleNestedInput
    permissions?: idnbi_RolePermissionUpdateManyWithoutRoleNestedInput
    menus?: idnbi_MenuRoleUpdateManyWithoutRoleNestedInput
  }

  export type idnbi_RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: idnbi_UserRoleUncheckedUpdateManyWithoutRoleNestedInput
    permissions?: idnbi_RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
    menus?: idnbi_MenuRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type idnbi_RoleCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type idnbi_RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_UserRoleCreateInput = {
    created_at?: Date | string
    user: idnbi_UserCreateNestedOneWithoutRolesInput
    role: idnbi_RoleCreateNestedOneWithoutUsersInput
  }

  export type idnbi_UserRoleUncheckedCreateInput = {
    userId: string
    roleId: string
    created_at?: Date | string
  }

  export type idnbi_UserRoleUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: idnbi_UserUpdateOneRequiredWithoutRolesNestedInput
    role?: idnbi_RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type idnbi_UserRoleUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_UserRoleCreateManyInput = {
    userId: string
    roleId: string
    created_at?: Date | string
  }

  export type idnbi_UserRoleUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_UserRoleUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_PermissionCreateInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    roles?: idnbi_RolePermissionCreateNestedManyWithoutPermissionInput
  }

  export type idnbi_PermissionUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    roles?: idnbi_RolePermissionUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type idnbi_PermissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: idnbi_RolePermissionUpdateManyWithoutPermissionNestedInput
  }

  export type idnbi_PermissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: idnbi_RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type idnbi_PermissionCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type idnbi_PermissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_PermissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_RolePermissionCreateInput = {
    created_at?: Date | string
    role: idnbi_RoleCreateNestedOneWithoutPermissionsInput
    permission: idnbi_PermissionCreateNestedOneWithoutRolesInput
  }

  export type idnbi_RolePermissionUncheckedCreateInput = {
    roleId: string
    permissionId: string
    created_at?: Date | string
  }

  export type idnbi_RolePermissionUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: idnbi_RoleUpdateOneRequiredWithoutPermissionsNestedInput
    permission?: idnbi_PermissionUpdateOneRequiredWithoutRolesNestedInput
  }

  export type idnbi_RolePermissionUncheckedUpdateInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_RolePermissionCreateManyInput = {
    roleId: string
    permissionId: string
    created_at?: Date | string
  }

  export type idnbi_RolePermissionUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_RolePermissionUncheckedUpdateManyInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_TermsAndConditionsCreateInput = {
    id?: string
    version: string
    content_html: string
    created_at?: Date | string
    updated_at?: Date | string
    published_at?: Date | string | null
  }

  export type idnbi_TermsAndConditionsUncheckedCreateInput = {
    id?: string
    version: string
    content_html: string
    created_at?: Date | string
    updated_at?: Date | string
    published_at?: Date | string | null
  }

  export type idnbi_TermsAndConditionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    content_html?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type idnbi_TermsAndConditionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    content_html?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type idnbi_TermsAndConditionsCreateManyInput = {
    id?: string
    version: string
    content_html: string
    created_at?: Date | string
    updated_at?: Date | string
    published_at?: Date | string | null
  }

  export type idnbi_TermsAndConditionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    content_html?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type idnbi_TermsAndConditionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    content_html?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type idnbi_ContentCreateInput = {
    id?: string
    title: string
    slug: string
    type?: string
    content_data: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: idnbi_UserCreateNestedOneWithoutCreated_contentInput
  }

  export type idnbi_ContentUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    type?: string
    content_data: string
    created_by_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type idnbi_ContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content_data?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: idnbi_UserUpdateOneWithoutCreated_contentNestedInput
  }

  export type idnbi_ContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content_data?: StringFieldUpdateOperationsInput | string
    created_by_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_ContentCreateManyInput = {
    id?: string
    title: string
    slug: string
    type?: string
    content_data: string
    created_by_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type idnbi_ContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content_data?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_ContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content_data?: StringFieldUpdateOperationsInput | string
    created_by_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_MenuItemCreateInput = {
    id?: string
    title: string
    order?: number
    icon_class?: string | null
    type: string
    target_url?: string | null
    content_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    parent?: idnbi_MenuItemCreateNestedOneWithoutChildrenInput
    children?: idnbi_MenuItemCreateNestedManyWithoutParentInput
    roles?: idnbi_MenuRoleCreateNestedManyWithoutMenuInput
  }

  export type idnbi_MenuItemUncheckedCreateInput = {
    id?: string
    title: string
    parent_id?: string | null
    order?: number
    icon_class?: string | null
    type: string
    target_url?: string | null
    content_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    children?: idnbi_MenuItemUncheckedCreateNestedManyWithoutParentInput
    roles?: idnbi_MenuRoleUncheckedCreateNestedManyWithoutMenuInput
  }

  export type idnbi_MenuItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    icon_class?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    target_url?: NullableStringFieldUpdateOperationsInput | string | null
    content_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: idnbi_MenuItemUpdateOneWithoutChildrenNestedInput
    children?: idnbi_MenuItemUpdateManyWithoutParentNestedInput
    roles?: idnbi_MenuRoleUpdateManyWithoutMenuNestedInput
  }

  export type idnbi_MenuItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    icon_class?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    target_url?: NullableStringFieldUpdateOperationsInput | string | null
    content_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: idnbi_MenuItemUncheckedUpdateManyWithoutParentNestedInput
    roles?: idnbi_MenuRoleUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type idnbi_MenuItemCreateManyInput = {
    id?: string
    title: string
    parent_id?: string | null
    order?: number
    icon_class?: string | null
    type: string
    target_url?: string | null
    content_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type idnbi_MenuItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    icon_class?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    target_url?: NullableStringFieldUpdateOperationsInput | string | null
    content_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_MenuItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    icon_class?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    target_url?: NullableStringFieldUpdateOperationsInput | string | null
    content_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_MenuRoleCreateInput = {
    created_at?: Date | string
    menu: idnbi_MenuItemCreateNestedOneWithoutRolesInput
    role: idnbi_RoleCreateNestedOneWithoutMenusInput
  }

  export type idnbi_MenuRoleUncheckedCreateInput = {
    menuId: string
    roleId: string
    created_at?: Date | string
  }

  export type idnbi_MenuRoleUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    menu?: idnbi_MenuItemUpdateOneRequiredWithoutRolesNestedInput
    role?: idnbi_RoleUpdateOneRequiredWithoutMenusNestedInput
  }

  export type idnbi_MenuRoleUncheckedUpdateInput = {
    menuId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_MenuRoleCreateManyInput = {
    menuId: string
    roleId: string
    created_at?: Date | string
  }

  export type idnbi_MenuRoleUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_MenuRoleUncheckedUpdateManyInput = {
    menuId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_NotificationCreateInput = {
    id?: string
    title: string
    message: string
    type?: string
    created_at?: Date | string
    updated_at?: Date | string
    user_statuses?: idnbi_UserNotificationStatusCreateNestedManyWithoutNotificationInput
  }

  export type idnbi_NotificationUncheckedCreateInput = {
    id?: string
    title: string
    message: string
    type?: string
    created_at?: Date | string
    updated_at?: Date | string
    user_statuses?: idnbi_UserNotificationStatusUncheckedCreateNestedManyWithoutNotificationInput
  }

  export type idnbi_NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_statuses?: idnbi_UserNotificationStatusUpdateManyWithoutNotificationNestedInput
  }

  export type idnbi_NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_statuses?: idnbi_UserNotificationStatusUncheckedUpdateManyWithoutNotificationNestedInput
  }

  export type idnbi_NotificationCreateManyInput = {
    id?: string
    title: string
    message: string
    type?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type idnbi_NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_UserNotificationStatusCreateInput = {
    read?: boolean
    read_at?: Date | string | null
    created_at?: Date | string
    user: idnbi_UserCreateNestedOneWithoutNotificationsInput
    notification: idnbi_NotificationCreateNestedOneWithoutUser_statusesInput
  }

  export type idnbi_UserNotificationStatusUncheckedCreateInput = {
    userId: string
    notificationId: string
    read?: boolean
    read_at?: Date | string | null
    created_at?: Date | string
  }

  export type idnbi_UserNotificationStatusUpdateInput = {
    read?: BoolFieldUpdateOperationsInput | boolean
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: idnbi_UserUpdateOneRequiredWithoutNotificationsNestedInput
    notification?: idnbi_NotificationUpdateOneRequiredWithoutUser_statusesNestedInput
  }

  export type idnbi_UserNotificationStatusUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_UserNotificationStatusCreateManyInput = {
    userId: string
    notificationId: string
    read?: boolean
    read_at?: Date | string | null
    created_at?: Date | string
  }

  export type idnbi_UserNotificationStatusUpdateManyMutationInput = {
    read?: BoolFieldUpdateOperationsInput | boolean
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_UserNotificationStatusUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_EmailTemplateCreateInput = {
    id?: string
    name: string
    subject: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type idnbi_EmailTemplateUncheckedCreateInput = {
    id?: string
    name: string
    subject: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type idnbi_EmailTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_EmailTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_EmailTemplateCreateManyInput = {
    id?: string
    name: string
    subject: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type idnbi_EmailTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_EmailTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_SystemConfigurationCreateInput = {
    id?: string
    app_name?: string
    logo_url?: string | null
    login_bg_url?: string | null
    footer_text?: string | null
    default_profile_photo_url?: string | null
    jumbotron_content?: string | null
    marquee_content?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type idnbi_SystemConfigurationUncheckedCreateInput = {
    id?: string
    app_name?: string
    logo_url?: string | null
    login_bg_url?: string | null
    footer_text?: string | null
    default_profile_photo_url?: string | null
    jumbotron_content?: string | null
    marquee_content?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type idnbi_SystemConfigurationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    app_name?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    login_bg_url?: NullableStringFieldUpdateOperationsInput | string | null
    footer_text?: NullableStringFieldUpdateOperationsInput | string | null
    default_profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    jumbotron_content?: NullableStringFieldUpdateOperationsInput | string | null
    marquee_content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_SystemConfigurationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    app_name?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    login_bg_url?: NullableStringFieldUpdateOperationsInput | string | null
    footer_text?: NullableStringFieldUpdateOperationsInput | string | null
    default_profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    jumbotron_content?: NullableStringFieldUpdateOperationsInput | string | null
    marquee_content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_SystemConfigurationCreateManyInput = {
    id?: string
    app_name?: string
    logo_url?: string | null
    login_bg_url?: string | null
    footer_text?: string | null
    default_profile_photo_url?: string | null
    jumbotron_content?: string | null
    marquee_content?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type idnbi_SystemConfigurationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    app_name?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    login_bg_url?: NullableStringFieldUpdateOperationsInput | string | null
    footer_text?: NullableStringFieldUpdateOperationsInput | string | null
    default_profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    jumbotron_content?: NullableStringFieldUpdateOperationsInput | string | null
    marquee_content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_SystemConfigurationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    app_name?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    login_bg_url?: NullableStringFieldUpdateOperationsInput | string | null
    footer_text?: NullableStringFieldUpdateOperationsInput | string | null
    default_profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    jumbotron_content?: NullableStringFieldUpdateOperationsInput | string | null
    marquee_content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_AuditLogCreateInput = {
    id?: string
    action: string
    resource?: string | null
    resourceId?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    user_agent?: string | null
    created_at?: Date | string
    user?: idnbi_UserCreateNestedOneWithoutAudit_logsInput
  }

  export type idnbi_AuditLogUncheckedCreateInput = {
    id?: string
    userId?: string | null
    action: string
    resource?: string | null
    resourceId?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    user_agent?: string | null
    created_at?: Date | string
  }

  export type idnbi_AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: idnbi_UserUpdateOneWithoutAudit_logsNestedInput
  }

  export type idnbi_AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_AuditLogCreateManyInput = {
    id?: string
    userId?: string | null
    action: string
    resource?: string | null
    resourceId?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    user_agent?: string | null
    created_at?: Date | string
  }

  export type idnbi_AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_PasswordResetTokenCreateInput = {
    id?: string
    token: string
    expires_at: Date | string
    is_used?: boolean
    created_at?: Date | string
    user: idnbi_UserCreateNestedOneWithoutPassword_resetInput
  }

  export type idnbi_PasswordResetTokenUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    expires_at: Date | string
    is_used?: boolean
    created_at?: Date | string
  }

  export type idnbi_PasswordResetTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: idnbi_UserUpdateOneRequiredWithoutPassword_resetNestedInput
  }

  export type idnbi_PasswordResetTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_PasswordResetTokenCreateManyInput = {
    id?: string
    userId: string
    token: string
    expires_at: Date | string
    is_used?: boolean
    created_at?: Date | string
  }

  export type idnbi_PasswordResetTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_PasswordResetTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type Idnbi_UserRoleListRelationFilter = {
    every?: idnbi_UserRoleWhereInput
    some?: idnbi_UserRoleWhereInput
    none?: idnbi_UserRoleWhereInput
  }

  export type Idnbi_ContentListRelationFilter = {
    every?: idnbi_ContentWhereInput
    some?: idnbi_ContentWhereInput
    none?: idnbi_ContentWhereInput
  }

  export type Idnbi_UserNotificationStatusListRelationFilter = {
    every?: idnbi_UserNotificationStatusWhereInput
    some?: idnbi_UserNotificationStatusWhereInput
    none?: idnbi_UserNotificationStatusWhereInput
  }

  export type Idnbi_PasswordResetTokenListRelationFilter = {
    every?: idnbi_PasswordResetTokenWhereInput
    some?: idnbi_PasswordResetTokenWhereInput
    none?: idnbi_PasswordResetTokenWhereInput
  }

  export type Idnbi_AuditLogListRelationFilter = {
    every?: idnbi_AuditLogWhereInput
    some?: idnbi_AuditLogWhereInput
    none?: idnbi_AuditLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type idnbi_UserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type idnbi_ContentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type idnbi_UserNotificationStatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type idnbi_PasswordResetTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type idnbi_AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type idnbi_UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    profile_photo_url?: SortOrder
    last_login_at?: SortOrder
    last_login_ip?: SortOrder
    failed_login_attempts?: SortOrder
    is_ip_blocked?: SortOrder
    terms_accepted_at?: SortOrder
    invited_at?: SortOrder
    registered_at?: SortOrder
    temp_password_flag?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type idnbi_UserAvgOrderByAggregateInput = {
    failed_login_attempts?: SortOrder
  }

  export type idnbi_UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    profile_photo_url?: SortOrder
    last_login_at?: SortOrder
    last_login_ip?: SortOrder
    failed_login_attempts?: SortOrder
    is_ip_blocked?: SortOrder
    terms_accepted_at?: SortOrder
    invited_at?: SortOrder
    registered_at?: SortOrder
    temp_password_flag?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type idnbi_UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    profile_photo_url?: SortOrder
    last_login_at?: SortOrder
    last_login_ip?: SortOrder
    failed_login_attempts?: SortOrder
    is_ip_blocked?: SortOrder
    terms_accepted_at?: SortOrder
    invited_at?: SortOrder
    registered_at?: SortOrder
    temp_password_flag?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type idnbi_UserSumOrderByAggregateInput = {
    failed_login_attempts?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type Idnbi_RolePermissionListRelationFilter = {
    every?: idnbi_RolePermissionWhereInput
    some?: idnbi_RolePermissionWhereInput
    none?: idnbi_RolePermissionWhereInput
  }

  export type Idnbi_MenuRoleListRelationFilter = {
    every?: idnbi_MenuRoleWhereInput
    some?: idnbi_MenuRoleWhereInput
    none?: idnbi_MenuRoleWhereInput
  }

  export type idnbi_RolePermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type idnbi_MenuRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type idnbi_RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type idnbi_RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type idnbi_RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Idnbi_UserScalarRelationFilter = {
    is?: idnbi_UserWhereInput
    isNot?: idnbi_UserWhereInput
  }

  export type Idnbi_RoleScalarRelationFilter = {
    is?: idnbi_RoleWhereInput
    isNot?: idnbi_RoleWhereInput
  }

  export type idnbi_UserRoleUserIdRoleIdCompoundUniqueInput = {
    userId: string
    roleId: string
  }

  export type idnbi_UserRoleCountOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
    created_at?: SortOrder
  }

  export type idnbi_UserRoleMaxOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
    created_at?: SortOrder
  }

  export type idnbi_UserRoleMinOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
    created_at?: SortOrder
  }

  export type idnbi_PermissionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type idnbi_PermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type idnbi_PermissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Idnbi_PermissionScalarRelationFilter = {
    is?: idnbi_PermissionWhereInput
    isNot?: idnbi_PermissionWhereInput
  }

  export type idnbi_RolePermissionRoleIdPermissionIdCompoundUniqueInput = {
    roleId: string
    permissionId: string
  }

  export type idnbi_RolePermissionCountOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
    created_at?: SortOrder
  }

  export type idnbi_RolePermissionMaxOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
    created_at?: SortOrder
  }

  export type idnbi_RolePermissionMinOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
    created_at?: SortOrder
  }

  export type idnbi_TermsAndConditionsCountOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    content_html?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    published_at?: SortOrder
  }

  export type idnbi_TermsAndConditionsMaxOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    content_html?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    published_at?: SortOrder
  }

  export type idnbi_TermsAndConditionsMinOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    content_html?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    published_at?: SortOrder
  }

  export type Idnbi_UserNullableScalarRelationFilter = {
    is?: idnbi_UserWhereInput | null
    isNot?: idnbi_UserWhereInput | null
  }

  export type idnbi_ContentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    content_data?: SortOrder
    created_by_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type idnbi_ContentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    content_data?: SortOrder
    created_by_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type idnbi_ContentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    content_data?: SortOrder
    created_by_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Idnbi_MenuItemNullableScalarRelationFilter = {
    is?: idnbi_MenuItemWhereInput | null
    isNot?: idnbi_MenuItemWhereInput | null
  }

  export type Idnbi_MenuItemListRelationFilter = {
    every?: idnbi_MenuItemWhereInput
    some?: idnbi_MenuItemWhereInput
    none?: idnbi_MenuItemWhereInput
  }

  export type idnbi_MenuItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type idnbi_MenuItemTitleParent_idCompoundUniqueInput = {
    title: string
    parent_id: string
  }

  export type idnbi_MenuItemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    parent_id?: SortOrder
    order?: SortOrder
    icon_class?: SortOrder
    type?: SortOrder
    target_url?: SortOrder
    content_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type idnbi_MenuItemAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type idnbi_MenuItemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    parent_id?: SortOrder
    order?: SortOrder
    icon_class?: SortOrder
    type?: SortOrder
    target_url?: SortOrder
    content_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type idnbi_MenuItemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    parent_id?: SortOrder
    order?: SortOrder
    icon_class?: SortOrder
    type?: SortOrder
    target_url?: SortOrder
    content_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type idnbi_MenuItemSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type Idnbi_MenuItemScalarRelationFilter = {
    is?: idnbi_MenuItemWhereInput
    isNot?: idnbi_MenuItemWhereInput
  }

  export type idnbi_MenuRoleMenuIdRoleIdCompoundUniqueInput = {
    menuId: string
    roleId: string
  }

  export type idnbi_MenuRoleCountOrderByAggregateInput = {
    menuId?: SortOrder
    roleId?: SortOrder
    created_at?: SortOrder
  }

  export type idnbi_MenuRoleMaxOrderByAggregateInput = {
    menuId?: SortOrder
    roleId?: SortOrder
    created_at?: SortOrder
  }

  export type idnbi_MenuRoleMinOrderByAggregateInput = {
    menuId?: SortOrder
    roleId?: SortOrder
    created_at?: SortOrder
  }

  export type idnbi_NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type idnbi_NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type idnbi_NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Idnbi_NotificationScalarRelationFilter = {
    is?: idnbi_NotificationWhereInput
    isNot?: idnbi_NotificationWhereInput
  }

  export type idnbi_UserNotificationStatusUserIdNotificationIdCompoundUniqueInput = {
    userId: string
    notificationId: string
  }

  export type idnbi_UserNotificationStatusCountOrderByAggregateInput = {
    userId?: SortOrder
    notificationId?: SortOrder
    read?: SortOrder
    read_at?: SortOrder
    created_at?: SortOrder
  }

  export type idnbi_UserNotificationStatusMaxOrderByAggregateInput = {
    userId?: SortOrder
    notificationId?: SortOrder
    read?: SortOrder
    read_at?: SortOrder
    created_at?: SortOrder
  }

  export type idnbi_UserNotificationStatusMinOrderByAggregateInput = {
    userId?: SortOrder
    notificationId?: SortOrder
    read?: SortOrder
    read_at?: SortOrder
    created_at?: SortOrder
  }

  export type idnbi_EmailTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type idnbi_EmailTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type idnbi_EmailTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type idnbi_SystemConfigurationCountOrderByAggregateInput = {
    id?: SortOrder
    app_name?: SortOrder
    logo_url?: SortOrder
    login_bg_url?: SortOrder
    footer_text?: SortOrder
    default_profile_photo_url?: SortOrder
    jumbotron_content?: SortOrder
    marquee_content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type idnbi_SystemConfigurationMaxOrderByAggregateInput = {
    id?: SortOrder
    app_name?: SortOrder
    logo_url?: SortOrder
    login_bg_url?: SortOrder
    footer_text?: SortOrder
    default_profile_photo_url?: SortOrder
    jumbotron_content?: SortOrder
    marquee_content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type idnbi_SystemConfigurationMinOrderByAggregateInput = {
    id?: SortOrder
    app_name?: SortOrder
    logo_url?: SortOrder
    login_bg_url?: SortOrder
    footer_text?: SortOrder
    default_profile_photo_url?: SortOrder
    jumbotron_content?: SortOrder
    marquee_content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type idnbi_AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    resourceId?: SortOrder
    details?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    created_at?: SortOrder
  }

  export type idnbi_AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    resourceId?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    created_at?: SortOrder
  }

  export type idnbi_AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    resourceId?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    created_at?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type idnbi_PasswordResetTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    is_used?: SortOrder
    created_at?: SortOrder
  }

  export type idnbi_PasswordResetTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    is_used?: SortOrder
    created_at?: SortOrder
  }

  export type idnbi_PasswordResetTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    is_used?: SortOrder
    created_at?: SortOrder
  }

  export type idnbi_UserRoleCreateNestedManyWithoutUserInput = {
    create?: XOR<idnbi_UserRoleCreateWithoutUserInput, idnbi_UserRoleUncheckedCreateWithoutUserInput> | idnbi_UserRoleCreateWithoutUserInput[] | idnbi_UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: idnbi_UserRoleCreateOrConnectWithoutUserInput | idnbi_UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: idnbi_UserRoleCreateManyUserInputEnvelope
    connect?: idnbi_UserRoleWhereUniqueInput | idnbi_UserRoleWhereUniqueInput[]
  }

  export type idnbi_ContentCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<idnbi_ContentCreateWithoutCreated_byInput, idnbi_ContentUncheckedCreateWithoutCreated_byInput> | idnbi_ContentCreateWithoutCreated_byInput[] | idnbi_ContentUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: idnbi_ContentCreateOrConnectWithoutCreated_byInput | idnbi_ContentCreateOrConnectWithoutCreated_byInput[]
    createMany?: idnbi_ContentCreateManyCreated_byInputEnvelope
    connect?: idnbi_ContentWhereUniqueInput | idnbi_ContentWhereUniqueInput[]
  }

  export type idnbi_UserNotificationStatusCreateNestedManyWithoutUserInput = {
    create?: XOR<idnbi_UserNotificationStatusCreateWithoutUserInput, idnbi_UserNotificationStatusUncheckedCreateWithoutUserInput> | idnbi_UserNotificationStatusCreateWithoutUserInput[] | idnbi_UserNotificationStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: idnbi_UserNotificationStatusCreateOrConnectWithoutUserInput | idnbi_UserNotificationStatusCreateOrConnectWithoutUserInput[]
    createMany?: idnbi_UserNotificationStatusCreateManyUserInputEnvelope
    connect?: idnbi_UserNotificationStatusWhereUniqueInput | idnbi_UserNotificationStatusWhereUniqueInput[]
  }

  export type idnbi_PasswordResetTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<idnbi_PasswordResetTokenCreateWithoutUserInput, idnbi_PasswordResetTokenUncheckedCreateWithoutUserInput> | idnbi_PasswordResetTokenCreateWithoutUserInput[] | idnbi_PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: idnbi_PasswordResetTokenCreateOrConnectWithoutUserInput | idnbi_PasswordResetTokenCreateOrConnectWithoutUserInput[]
    createMany?: idnbi_PasswordResetTokenCreateManyUserInputEnvelope
    connect?: idnbi_PasswordResetTokenWhereUniqueInput | idnbi_PasswordResetTokenWhereUniqueInput[]
  }

  export type idnbi_AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<idnbi_AuditLogCreateWithoutUserInput, idnbi_AuditLogUncheckedCreateWithoutUserInput> | idnbi_AuditLogCreateWithoutUserInput[] | idnbi_AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: idnbi_AuditLogCreateOrConnectWithoutUserInput | idnbi_AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: idnbi_AuditLogCreateManyUserInputEnvelope
    connect?: idnbi_AuditLogWhereUniqueInput | idnbi_AuditLogWhereUniqueInput[]
  }

  export type idnbi_UserRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<idnbi_UserRoleCreateWithoutUserInput, idnbi_UserRoleUncheckedCreateWithoutUserInput> | idnbi_UserRoleCreateWithoutUserInput[] | idnbi_UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: idnbi_UserRoleCreateOrConnectWithoutUserInput | idnbi_UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: idnbi_UserRoleCreateManyUserInputEnvelope
    connect?: idnbi_UserRoleWhereUniqueInput | idnbi_UserRoleWhereUniqueInput[]
  }

  export type idnbi_ContentUncheckedCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<idnbi_ContentCreateWithoutCreated_byInput, idnbi_ContentUncheckedCreateWithoutCreated_byInput> | idnbi_ContentCreateWithoutCreated_byInput[] | idnbi_ContentUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: idnbi_ContentCreateOrConnectWithoutCreated_byInput | idnbi_ContentCreateOrConnectWithoutCreated_byInput[]
    createMany?: idnbi_ContentCreateManyCreated_byInputEnvelope
    connect?: idnbi_ContentWhereUniqueInput | idnbi_ContentWhereUniqueInput[]
  }

  export type idnbi_UserNotificationStatusUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<idnbi_UserNotificationStatusCreateWithoutUserInput, idnbi_UserNotificationStatusUncheckedCreateWithoutUserInput> | idnbi_UserNotificationStatusCreateWithoutUserInput[] | idnbi_UserNotificationStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: idnbi_UserNotificationStatusCreateOrConnectWithoutUserInput | idnbi_UserNotificationStatusCreateOrConnectWithoutUserInput[]
    createMany?: idnbi_UserNotificationStatusCreateManyUserInputEnvelope
    connect?: idnbi_UserNotificationStatusWhereUniqueInput | idnbi_UserNotificationStatusWhereUniqueInput[]
  }

  export type idnbi_PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<idnbi_PasswordResetTokenCreateWithoutUserInput, idnbi_PasswordResetTokenUncheckedCreateWithoutUserInput> | idnbi_PasswordResetTokenCreateWithoutUserInput[] | idnbi_PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: idnbi_PasswordResetTokenCreateOrConnectWithoutUserInput | idnbi_PasswordResetTokenCreateOrConnectWithoutUserInput[]
    createMany?: idnbi_PasswordResetTokenCreateManyUserInputEnvelope
    connect?: idnbi_PasswordResetTokenWhereUniqueInput | idnbi_PasswordResetTokenWhereUniqueInput[]
  }

  export type idnbi_AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<idnbi_AuditLogCreateWithoutUserInput, idnbi_AuditLogUncheckedCreateWithoutUserInput> | idnbi_AuditLogCreateWithoutUserInput[] | idnbi_AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: idnbi_AuditLogCreateOrConnectWithoutUserInput | idnbi_AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: idnbi_AuditLogCreateManyUserInputEnvelope
    connect?: idnbi_AuditLogWhereUniqueInput | idnbi_AuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type idnbi_UserRoleUpdateManyWithoutUserNestedInput = {
    create?: XOR<idnbi_UserRoleCreateWithoutUserInput, idnbi_UserRoleUncheckedCreateWithoutUserInput> | idnbi_UserRoleCreateWithoutUserInput[] | idnbi_UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: idnbi_UserRoleCreateOrConnectWithoutUserInput | idnbi_UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: idnbi_UserRoleUpsertWithWhereUniqueWithoutUserInput | idnbi_UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: idnbi_UserRoleCreateManyUserInputEnvelope
    set?: idnbi_UserRoleWhereUniqueInput | idnbi_UserRoleWhereUniqueInput[]
    disconnect?: idnbi_UserRoleWhereUniqueInput | idnbi_UserRoleWhereUniqueInput[]
    delete?: idnbi_UserRoleWhereUniqueInput | idnbi_UserRoleWhereUniqueInput[]
    connect?: idnbi_UserRoleWhereUniqueInput | idnbi_UserRoleWhereUniqueInput[]
    update?: idnbi_UserRoleUpdateWithWhereUniqueWithoutUserInput | idnbi_UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: idnbi_UserRoleUpdateManyWithWhereWithoutUserInput | idnbi_UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: idnbi_UserRoleScalarWhereInput | idnbi_UserRoleScalarWhereInput[]
  }

  export type idnbi_ContentUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<idnbi_ContentCreateWithoutCreated_byInput, idnbi_ContentUncheckedCreateWithoutCreated_byInput> | idnbi_ContentCreateWithoutCreated_byInput[] | idnbi_ContentUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: idnbi_ContentCreateOrConnectWithoutCreated_byInput | idnbi_ContentCreateOrConnectWithoutCreated_byInput[]
    upsert?: idnbi_ContentUpsertWithWhereUniqueWithoutCreated_byInput | idnbi_ContentUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: idnbi_ContentCreateManyCreated_byInputEnvelope
    set?: idnbi_ContentWhereUniqueInput | idnbi_ContentWhereUniqueInput[]
    disconnect?: idnbi_ContentWhereUniqueInput | idnbi_ContentWhereUniqueInput[]
    delete?: idnbi_ContentWhereUniqueInput | idnbi_ContentWhereUniqueInput[]
    connect?: idnbi_ContentWhereUniqueInput | idnbi_ContentWhereUniqueInput[]
    update?: idnbi_ContentUpdateWithWhereUniqueWithoutCreated_byInput | idnbi_ContentUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: idnbi_ContentUpdateManyWithWhereWithoutCreated_byInput | idnbi_ContentUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: idnbi_ContentScalarWhereInput | idnbi_ContentScalarWhereInput[]
  }

  export type idnbi_UserNotificationStatusUpdateManyWithoutUserNestedInput = {
    create?: XOR<idnbi_UserNotificationStatusCreateWithoutUserInput, idnbi_UserNotificationStatusUncheckedCreateWithoutUserInput> | idnbi_UserNotificationStatusCreateWithoutUserInput[] | idnbi_UserNotificationStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: idnbi_UserNotificationStatusCreateOrConnectWithoutUserInput | idnbi_UserNotificationStatusCreateOrConnectWithoutUserInput[]
    upsert?: idnbi_UserNotificationStatusUpsertWithWhereUniqueWithoutUserInput | idnbi_UserNotificationStatusUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: idnbi_UserNotificationStatusCreateManyUserInputEnvelope
    set?: idnbi_UserNotificationStatusWhereUniqueInput | idnbi_UserNotificationStatusWhereUniqueInput[]
    disconnect?: idnbi_UserNotificationStatusWhereUniqueInput | idnbi_UserNotificationStatusWhereUniqueInput[]
    delete?: idnbi_UserNotificationStatusWhereUniqueInput | idnbi_UserNotificationStatusWhereUniqueInput[]
    connect?: idnbi_UserNotificationStatusWhereUniqueInput | idnbi_UserNotificationStatusWhereUniqueInput[]
    update?: idnbi_UserNotificationStatusUpdateWithWhereUniqueWithoutUserInput | idnbi_UserNotificationStatusUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: idnbi_UserNotificationStatusUpdateManyWithWhereWithoutUserInput | idnbi_UserNotificationStatusUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: idnbi_UserNotificationStatusScalarWhereInput | idnbi_UserNotificationStatusScalarWhereInput[]
  }

  export type idnbi_PasswordResetTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<idnbi_PasswordResetTokenCreateWithoutUserInput, idnbi_PasswordResetTokenUncheckedCreateWithoutUserInput> | idnbi_PasswordResetTokenCreateWithoutUserInput[] | idnbi_PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: idnbi_PasswordResetTokenCreateOrConnectWithoutUserInput | idnbi_PasswordResetTokenCreateOrConnectWithoutUserInput[]
    upsert?: idnbi_PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput | idnbi_PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: idnbi_PasswordResetTokenCreateManyUserInputEnvelope
    set?: idnbi_PasswordResetTokenWhereUniqueInput | idnbi_PasswordResetTokenWhereUniqueInput[]
    disconnect?: idnbi_PasswordResetTokenWhereUniqueInput | idnbi_PasswordResetTokenWhereUniqueInput[]
    delete?: idnbi_PasswordResetTokenWhereUniqueInput | idnbi_PasswordResetTokenWhereUniqueInput[]
    connect?: idnbi_PasswordResetTokenWhereUniqueInput | idnbi_PasswordResetTokenWhereUniqueInput[]
    update?: idnbi_PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput | idnbi_PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: idnbi_PasswordResetTokenUpdateManyWithWhereWithoutUserInput | idnbi_PasswordResetTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: idnbi_PasswordResetTokenScalarWhereInput | idnbi_PasswordResetTokenScalarWhereInput[]
  }

  export type idnbi_AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<idnbi_AuditLogCreateWithoutUserInput, idnbi_AuditLogUncheckedCreateWithoutUserInput> | idnbi_AuditLogCreateWithoutUserInput[] | idnbi_AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: idnbi_AuditLogCreateOrConnectWithoutUserInput | idnbi_AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: idnbi_AuditLogUpsertWithWhereUniqueWithoutUserInput | idnbi_AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: idnbi_AuditLogCreateManyUserInputEnvelope
    set?: idnbi_AuditLogWhereUniqueInput | idnbi_AuditLogWhereUniqueInput[]
    disconnect?: idnbi_AuditLogWhereUniqueInput | idnbi_AuditLogWhereUniqueInput[]
    delete?: idnbi_AuditLogWhereUniqueInput | idnbi_AuditLogWhereUniqueInput[]
    connect?: idnbi_AuditLogWhereUniqueInput | idnbi_AuditLogWhereUniqueInput[]
    update?: idnbi_AuditLogUpdateWithWhereUniqueWithoutUserInput | idnbi_AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: idnbi_AuditLogUpdateManyWithWhereWithoutUserInput | idnbi_AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: idnbi_AuditLogScalarWhereInput | idnbi_AuditLogScalarWhereInput[]
  }

  export type idnbi_UserRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<idnbi_UserRoleCreateWithoutUserInput, idnbi_UserRoleUncheckedCreateWithoutUserInput> | idnbi_UserRoleCreateWithoutUserInput[] | idnbi_UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: idnbi_UserRoleCreateOrConnectWithoutUserInput | idnbi_UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: idnbi_UserRoleUpsertWithWhereUniqueWithoutUserInput | idnbi_UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: idnbi_UserRoleCreateManyUserInputEnvelope
    set?: idnbi_UserRoleWhereUniqueInput | idnbi_UserRoleWhereUniqueInput[]
    disconnect?: idnbi_UserRoleWhereUniqueInput | idnbi_UserRoleWhereUniqueInput[]
    delete?: idnbi_UserRoleWhereUniqueInput | idnbi_UserRoleWhereUniqueInput[]
    connect?: idnbi_UserRoleWhereUniqueInput | idnbi_UserRoleWhereUniqueInput[]
    update?: idnbi_UserRoleUpdateWithWhereUniqueWithoutUserInput | idnbi_UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: idnbi_UserRoleUpdateManyWithWhereWithoutUserInput | idnbi_UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: idnbi_UserRoleScalarWhereInput | idnbi_UserRoleScalarWhereInput[]
  }

  export type idnbi_ContentUncheckedUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<idnbi_ContentCreateWithoutCreated_byInput, idnbi_ContentUncheckedCreateWithoutCreated_byInput> | idnbi_ContentCreateWithoutCreated_byInput[] | idnbi_ContentUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: idnbi_ContentCreateOrConnectWithoutCreated_byInput | idnbi_ContentCreateOrConnectWithoutCreated_byInput[]
    upsert?: idnbi_ContentUpsertWithWhereUniqueWithoutCreated_byInput | idnbi_ContentUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: idnbi_ContentCreateManyCreated_byInputEnvelope
    set?: idnbi_ContentWhereUniqueInput | idnbi_ContentWhereUniqueInput[]
    disconnect?: idnbi_ContentWhereUniqueInput | idnbi_ContentWhereUniqueInput[]
    delete?: idnbi_ContentWhereUniqueInput | idnbi_ContentWhereUniqueInput[]
    connect?: idnbi_ContentWhereUniqueInput | idnbi_ContentWhereUniqueInput[]
    update?: idnbi_ContentUpdateWithWhereUniqueWithoutCreated_byInput | idnbi_ContentUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: idnbi_ContentUpdateManyWithWhereWithoutCreated_byInput | idnbi_ContentUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: idnbi_ContentScalarWhereInput | idnbi_ContentScalarWhereInput[]
  }

  export type idnbi_UserNotificationStatusUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<idnbi_UserNotificationStatusCreateWithoutUserInput, idnbi_UserNotificationStatusUncheckedCreateWithoutUserInput> | idnbi_UserNotificationStatusCreateWithoutUserInput[] | idnbi_UserNotificationStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: idnbi_UserNotificationStatusCreateOrConnectWithoutUserInput | idnbi_UserNotificationStatusCreateOrConnectWithoutUserInput[]
    upsert?: idnbi_UserNotificationStatusUpsertWithWhereUniqueWithoutUserInput | idnbi_UserNotificationStatusUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: idnbi_UserNotificationStatusCreateManyUserInputEnvelope
    set?: idnbi_UserNotificationStatusWhereUniqueInput | idnbi_UserNotificationStatusWhereUniqueInput[]
    disconnect?: idnbi_UserNotificationStatusWhereUniqueInput | idnbi_UserNotificationStatusWhereUniqueInput[]
    delete?: idnbi_UserNotificationStatusWhereUniqueInput | idnbi_UserNotificationStatusWhereUniqueInput[]
    connect?: idnbi_UserNotificationStatusWhereUniqueInput | idnbi_UserNotificationStatusWhereUniqueInput[]
    update?: idnbi_UserNotificationStatusUpdateWithWhereUniqueWithoutUserInput | idnbi_UserNotificationStatusUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: idnbi_UserNotificationStatusUpdateManyWithWhereWithoutUserInput | idnbi_UserNotificationStatusUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: idnbi_UserNotificationStatusScalarWhereInput | idnbi_UserNotificationStatusScalarWhereInput[]
  }

  export type idnbi_PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<idnbi_PasswordResetTokenCreateWithoutUserInput, idnbi_PasswordResetTokenUncheckedCreateWithoutUserInput> | idnbi_PasswordResetTokenCreateWithoutUserInput[] | idnbi_PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: idnbi_PasswordResetTokenCreateOrConnectWithoutUserInput | idnbi_PasswordResetTokenCreateOrConnectWithoutUserInput[]
    upsert?: idnbi_PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput | idnbi_PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: idnbi_PasswordResetTokenCreateManyUserInputEnvelope
    set?: idnbi_PasswordResetTokenWhereUniqueInput | idnbi_PasswordResetTokenWhereUniqueInput[]
    disconnect?: idnbi_PasswordResetTokenWhereUniqueInput | idnbi_PasswordResetTokenWhereUniqueInput[]
    delete?: idnbi_PasswordResetTokenWhereUniqueInput | idnbi_PasswordResetTokenWhereUniqueInput[]
    connect?: idnbi_PasswordResetTokenWhereUniqueInput | idnbi_PasswordResetTokenWhereUniqueInput[]
    update?: idnbi_PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput | idnbi_PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: idnbi_PasswordResetTokenUpdateManyWithWhereWithoutUserInput | idnbi_PasswordResetTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: idnbi_PasswordResetTokenScalarWhereInput | idnbi_PasswordResetTokenScalarWhereInput[]
  }

  export type idnbi_AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<idnbi_AuditLogCreateWithoutUserInput, idnbi_AuditLogUncheckedCreateWithoutUserInput> | idnbi_AuditLogCreateWithoutUserInput[] | idnbi_AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: idnbi_AuditLogCreateOrConnectWithoutUserInput | idnbi_AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: idnbi_AuditLogUpsertWithWhereUniqueWithoutUserInput | idnbi_AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: idnbi_AuditLogCreateManyUserInputEnvelope
    set?: idnbi_AuditLogWhereUniqueInput | idnbi_AuditLogWhereUniqueInput[]
    disconnect?: idnbi_AuditLogWhereUniqueInput | idnbi_AuditLogWhereUniqueInput[]
    delete?: idnbi_AuditLogWhereUniqueInput | idnbi_AuditLogWhereUniqueInput[]
    connect?: idnbi_AuditLogWhereUniqueInput | idnbi_AuditLogWhereUniqueInput[]
    update?: idnbi_AuditLogUpdateWithWhereUniqueWithoutUserInput | idnbi_AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: idnbi_AuditLogUpdateManyWithWhereWithoutUserInput | idnbi_AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: idnbi_AuditLogScalarWhereInput | idnbi_AuditLogScalarWhereInput[]
  }

  export type idnbi_UserRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<idnbi_UserRoleCreateWithoutRoleInput, idnbi_UserRoleUncheckedCreateWithoutRoleInput> | idnbi_UserRoleCreateWithoutRoleInput[] | idnbi_UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: idnbi_UserRoleCreateOrConnectWithoutRoleInput | idnbi_UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: idnbi_UserRoleCreateManyRoleInputEnvelope
    connect?: idnbi_UserRoleWhereUniqueInput | idnbi_UserRoleWhereUniqueInput[]
  }

  export type idnbi_RolePermissionCreateNestedManyWithoutRoleInput = {
    create?: XOR<idnbi_RolePermissionCreateWithoutRoleInput, idnbi_RolePermissionUncheckedCreateWithoutRoleInput> | idnbi_RolePermissionCreateWithoutRoleInput[] | idnbi_RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: idnbi_RolePermissionCreateOrConnectWithoutRoleInput | idnbi_RolePermissionCreateOrConnectWithoutRoleInput[]
    createMany?: idnbi_RolePermissionCreateManyRoleInputEnvelope
    connect?: idnbi_RolePermissionWhereUniqueInput | idnbi_RolePermissionWhereUniqueInput[]
  }

  export type idnbi_MenuRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<idnbi_MenuRoleCreateWithoutRoleInput, idnbi_MenuRoleUncheckedCreateWithoutRoleInput> | idnbi_MenuRoleCreateWithoutRoleInput[] | idnbi_MenuRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: idnbi_MenuRoleCreateOrConnectWithoutRoleInput | idnbi_MenuRoleCreateOrConnectWithoutRoleInput[]
    createMany?: idnbi_MenuRoleCreateManyRoleInputEnvelope
    connect?: idnbi_MenuRoleWhereUniqueInput | idnbi_MenuRoleWhereUniqueInput[]
  }

  export type idnbi_UserRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<idnbi_UserRoleCreateWithoutRoleInput, idnbi_UserRoleUncheckedCreateWithoutRoleInput> | idnbi_UserRoleCreateWithoutRoleInput[] | idnbi_UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: idnbi_UserRoleCreateOrConnectWithoutRoleInput | idnbi_UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: idnbi_UserRoleCreateManyRoleInputEnvelope
    connect?: idnbi_UserRoleWhereUniqueInput | idnbi_UserRoleWhereUniqueInput[]
  }

  export type idnbi_RolePermissionUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<idnbi_RolePermissionCreateWithoutRoleInput, idnbi_RolePermissionUncheckedCreateWithoutRoleInput> | idnbi_RolePermissionCreateWithoutRoleInput[] | idnbi_RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: idnbi_RolePermissionCreateOrConnectWithoutRoleInput | idnbi_RolePermissionCreateOrConnectWithoutRoleInput[]
    createMany?: idnbi_RolePermissionCreateManyRoleInputEnvelope
    connect?: idnbi_RolePermissionWhereUniqueInput | idnbi_RolePermissionWhereUniqueInput[]
  }

  export type idnbi_MenuRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<idnbi_MenuRoleCreateWithoutRoleInput, idnbi_MenuRoleUncheckedCreateWithoutRoleInput> | idnbi_MenuRoleCreateWithoutRoleInput[] | idnbi_MenuRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: idnbi_MenuRoleCreateOrConnectWithoutRoleInput | idnbi_MenuRoleCreateOrConnectWithoutRoleInput[]
    createMany?: idnbi_MenuRoleCreateManyRoleInputEnvelope
    connect?: idnbi_MenuRoleWhereUniqueInput | idnbi_MenuRoleWhereUniqueInput[]
  }

  export type idnbi_UserRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<idnbi_UserRoleCreateWithoutRoleInput, idnbi_UserRoleUncheckedCreateWithoutRoleInput> | idnbi_UserRoleCreateWithoutRoleInput[] | idnbi_UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: idnbi_UserRoleCreateOrConnectWithoutRoleInput | idnbi_UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: idnbi_UserRoleUpsertWithWhereUniqueWithoutRoleInput | idnbi_UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: idnbi_UserRoleCreateManyRoleInputEnvelope
    set?: idnbi_UserRoleWhereUniqueInput | idnbi_UserRoleWhereUniqueInput[]
    disconnect?: idnbi_UserRoleWhereUniqueInput | idnbi_UserRoleWhereUniqueInput[]
    delete?: idnbi_UserRoleWhereUniqueInput | idnbi_UserRoleWhereUniqueInput[]
    connect?: idnbi_UserRoleWhereUniqueInput | idnbi_UserRoleWhereUniqueInput[]
    update?: idnbi_UserRoleUpdateWithWhereUniqueWithoutRoleInput | idnbi_UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: idnbi_UserRoleUpdateManyWithWhereWithoutRoleInput | idnbi_UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: idnbi_UserRoleScalarWhereInput | idnbi_UserRoleScalarWhereInput[]
  }

  export type idnbi_RolePermissionUpdateManyWithoutRoleNestedInput = {
    create?: XOR<idnbi_RolePermissionCreateWithoutRoleInput, idnbi_RolePermissionUncheckedCreateWithoutRoleInput> | idnbi_RolePermissionCreateWithoutRoleInput[] | idnbi_RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: idnbi_RolePermissionCreateOrConnectWithoutRoleInput | idnbi_RolePermissionCreateOrConnectWithoutRoleInput[]
    upsert?: idnbi_RolePermissionUpsertWithWhereUniqueWithoutRoleInput | idnbi_RolePermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: idnbi_RolePermissionCreateManyRoleInputEnvelope
    set?: idnbi_RolePermissionWhereUniqueInput | idnbi_RolePermissionWhereUniqueInput[]
    disconnect?: idnbi_RolePermissionWhereUniqueInput | idnbi_RolePermissionWhereUniqueInput[]
    delete?: idnbi_RolePermissionWhereUniqueInput | idnbi_RolePermissionWhereUniqueInput[]
    connect?: idnbi_RolePermissionWhereUniqueInput | idnbi_RolePermissionWhereUniqueInput[]
    update?: idnbi_RolePermissionUpdateWithWhereUniqueWithoutRoleInput | idnbi_RolePermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: idnbi_RolePermissionUpdateManyWithWhereWithoutRoleInput | idnbi_RolePermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: idnbi_RolePermissionScalarWhereInput | idnbi_RolePermissionScalarWhereInput[]
  }

  export type idnbi_MenuRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<idnbi_MenuRoleCreateWithoutRoleInput, idnbi_MenuRoleUncheckedCreateWithoutRoleInput> | idnbi_MenuRoleCreateWithoutRoleInput[] | idnbi_MenuRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: idnbi_MenuRoleCreateOrConnectWithoutRoleInput | idnbi_MenuRoleCreateOrConnectWithoutRoleInput[]
    upsert?: idnbi_MenuRoleUpsertWithWhereUniqueWithoutRoleInput | idnbi_MenuRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: idnbi_MenuRoleCreateManyRoleInputEnvelope
    set?: idnbi_MenuRoleWhereUniqueInput | idnbi_MenuRoleWhereUniqueInput[]
    disconnect?: idnbi_MenuRoleWhereUniqueInput | idnbi_MenuRoleWhereUniqueInput[]
    delete?: idnbi_MenuRoleWhereUniqueInput | idnbi_MenuRoleWhereUniqueInput[]
    connect?: idnbi_MenuRoleWhereUniqueInput | idnbi_MenuRoleWhereUniqueInput[]
    update?: idnbi_MenuRoleUpdateWithWhereUniqueWithoutRoleInput | idnbi_MenuRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: idnbi_MenuRoleUpdateManyWithWhereWithoutRoleInput | idnbi_MenuRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: idnbi_MenuRoleScalarWhereInput | idnbi_MenuRoleScalarWhereInput[]
  }

  export type idnbi_UserRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<idnbi_UserRoleCreateWithoutRoleInput, idnbi_UserRoleUncheckedCreateWithoutRoleInput> | idnbi_UserRoleCreateWithoutRoleInput[] | idnbi_UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: idnbi_UserRoleCreateOrConnectWithoutRoleInput | idnbi_UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: idnbi_UserRoleUpsertWithWhereUniqueWithoutRoleInput | idnbi_UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: idnbi_UserRoleCreateManyRoleInputEnvelope
    set?: idnbi_UserRoleWhereUniqueInput | idnbi_UserRoleWhereUniqueInput[]
    disconnect?: idnbi_UserRoleWhereUniqueInput | idnbi_UserRoleWhereUniqueInput[]
    delete?: idnbi_UserRoleWhereUniqueInput | idnbi_UserRoleWhereUniqueInput[]
    connect?: idnbi_UserRoleWhereUniqueInput | idnbi_UserRoleWhereUniqueInput[]
    update?: idnbi_UserRoleUpdateWithWhereUniqueWithoutRoleInput | idnbi_UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: idnbi_UserRoleUpdateManyWithWhereWithoutRoleInput | idnbi_UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: idnbi_UserRoleScalarWhereInput | idnbi_UserRoleScalarWhereInput[]
  }

  export type idnbi_RolePermissionUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<idnbi_RolePermissionCreateWithoutRoleInput, idnbi_RolePermissionUncheckedCreateWithoutRoleInput> | idnbi_RolePermissionCreateWithoutRoleInput[] | idnbi_RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: idnbi_RolePermissionCreateOrConnectWithoutRoleInput | idnbi_RolePermissionCreateOrConnectWithoutRoleInput[]
    upsert?: idnbi_RolePermissionUpsertWithWhereUniqueWithoutRoleInput | idnbi_RolePermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: idnbi_RolePermissionCreateManyRoleInputEnvelope
    set?: idnbi_RolePermissionWhereUniqueInput | idnbi_RolePermissionWhereUniqueInput[]
    disconnect?: idnbi_RolePermissionWhereUniqueInput | idnbi_RolePermissionWhereUniqueInput[]
    delete?: idnbi_RolePermissionWhereUniqueInput | idnbi_RolePermissionWhereUniqueInput[]
    connect?: idnbi_RolePermissionWhereUniqueInput | idnbi_RolePermissionWhereUniqueInput[]
    update?: idnbi_RolePermissionUpdateWithWhereUniqueWithoutRoleInput | idnbi_RolePermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: idnbi_RolePermissionUpdateManyWithWhereWithoutRoleInput | idnbi_RolePermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: idnbi_RolePermissionScalarWhereInput | idnbi_RolePermissionScalarWhereInput[]
  }

  export type idnbi_MenuRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<idnbi_MenuRoleCreateWithoutRoleInput, idnbi_MenuRoleUncheckedCreateWithoutRoleInput> | idnbi_MenuRoleCreateWithoutRoleInput[] | idnbi_MenuRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: idnbi_MenuRoleCreateOrConnectWithoutRoleInput | idnbi_MenuRoleCreateOrConnectWithoutRoleInput[]
    upsert?: idnbi_MenuRoleUpsertWithWhereUniqueWithoutRoleInput | idnbi_MenuRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: idnbi_MenuRoleCreateManyRoleInputEnvelope
    set?: idnbi_MenuRoleWhereUniqueInput | idnbi_MenuRoleWhereUniqueInput[]
    disconnect?: idnbi_MenuRoleWhereUniqueInput | idnbi_MenuRoleWhereUniqueInput[]
    delete?: idnbi_MenuRoleWhereUniqueInput | idnbi_MenuRoleWhereUniqueInput[]
    connect?: idnbi_MenuRoleWhereUniqueInput | idnbi_MenuRoleWhereUniqueInput[]
    update?: idnbi_MenuRoleUpdateWithWhereUniqueWithoutRoleInput | idnbi_MenuRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: idnbi_MenuRoleUpdateManyWithWhereWithoutRoleInput | idnbi_MenuRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: idnbi_MenuRoleScalarWhereInput | idnbi_MenuRoleScalarWhereInput[]
  }

  export type idnbi_UserCreateNestedOneWithoutRolesInput = {
    create?: XOR<idnbi_UserCreateWithoutRolesInput, idnbi_UserUncheckedCreateWithoutRolesInput>
    connectOrCreate?: idnbi_UserCreateOrConnectWithoutRolesInput
    connect?: idnbi_UserWhereUniqueInput
  }

  export type idnbi_RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<idnbi_RoleCreateWithoutUsersInput, idnbi_RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: idnbi_RoleCreateOrConnectWithoutUsersInput
    connect?: idnbi_RoleWhereUniqueInput
  }

  export type idnbi_UserUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<idnbi_UserCreateWithoutRolesInput, idnbi_UserUncheckedCreateWithoutRolesInput>
    connectOrCreate?: idnbi_UserCreateOrConnectWithoutRolesInput
    upsert?: idnbi_UserUpsertWithoutRolesInput
    connect?: idnbi_UserWhereUniqueInput
    update?: XOR<XOR<idnbi_UserUpdateToOneWithWhereWithoutRolesInput, idnbi_UserUpdateWithoutRolesInput>, idnbi_UserUncheckedUpdateWithoutRolesInput>
  }

  export type idnbi_RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<idnbi_RoleCreateWithoutUsersInput, idnbi_RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: idnbi_RoleCreateOrConnectWithoutUsersInput
    upsert?: idnbi_RoleUpsertWithoutUsersInput
    connect?: idnbi_RoleWhereUniqueInput
    update?: XOR<XOR<idnbi_RoleUpdateToOneWithWhereWithoutUsersInput, idnbi_RoleUpdateWithoutUsersInput>, idnbi_RoleUncheckedUpdateWithoutUsersInput>
  }

  export type idnbi_RolePermissionCreateNestedManyWithoutPermissionInput = {
    create?: XOR<idnbi_RolePermissionCreateWithoutPermissionInput, idnbi_RolePermissionUncheckedCreateWithoutPermissionInput> | idnbi_RolePermissionCreateWithoutPermissionInput[] | idnbi_RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: idnbi_RolePermissionCreateOrConnectWithoutPermissionInput | idnbi_RolePermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: idnbi_RolePermissionCreateManyPermissionInputEnvelope
    connect?: idnbi_RolePermissionWhereUniqueInput | idnbi_RolePermissionWhereUniqueInput[]
  }

  export type idnbi_RolePermissionUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: XOR<idnbi_RolePermissionCreateWithoutPermissionInput, idnbi_RolePermissionUncheckedCreateWithoutPermissionInput> | idnbi_RolePermissionCreateWithoutPermissionInput[] | idnbi_RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: idnbi_RolePermissionCreateOrConnectWithoutPermissionInput | idnbi_RolePermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: idnbi_RolePermissionCreateManyPermissionInputEnvelope
    connect?: idnbi_RolePermissionWhereUniqueInput | idnbi_RolePermissionWhereUniqueInput[]
  }

  export type idnbi_RolePermissionUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<idnbi_RolePermissionCreateWithoutPermissionInput, idnbi_RolePermissionUncheckedCreateWithoutPermissionInput> | idnbi_RolePermissionCreateWithoutPermissionInput[] | idnbi_RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: idnbi_RolePermissionCreateOrConnectWithoutPermissionInput | idnbi_RolePermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: idnbi_RolePermissionUpsertWithWhereUniqueWithoutPermissionInput | idnbi_RolePermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: idnbi_RolePermissionCreateManyPermissionInputEnvelope
    set?: idnbi_RolePermissionWhereUniqueInput | idnbi_RolePermissionWhereUniqueInput[]
    disconnect?: idnbi_RolePermissionWhereUniqueInput | idnbi_RolePermissionWhereUniqueInput[]
    delete?: idnbi_RolePermissionWhereUniqueInput | idnbi_RolePermissionWhereUniqueInput[]
    connect?: idnbi_RolePermissionWhereUniqueInput | idnbi_RolePermissionWhereUniqueInput[]
    update?: idnbi_RolePermissionUpdateWithWhereUniqueWithoutPermissionInput | idnbi_RolePermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: idnbi_RolePermissionUpdateManyWithWhereWithoutPermissionInput | idnbi_RolePermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: idnbi_RolePermissionScalarWhereInput | idnbi_RolePermissionScalarWhereInput[]
  }

  export type idnbi_RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<idnbi_RolePermissionCreateWithoutPermissionInput, idnbi_RolePermissionUncheckedCreateWithoutPermissionInput> | idnbi_RolePermissionCreateWithoutPermissionInput[] | idnbi_RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: idnbi_RolePermissionCreateOrConnectWithoutPermissionInput | idnbi_RolePermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: idnbi_RolePermissionUpsertWithWhereUniqueWithoutPermissionInput | idnbi_RolePermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: idnbi_RolePermissionCreateManyPermissionInputEnvelope
    set?: idnbi_RolePermissionWhereUniqueInput | idnbi_RolePermissionWhereUniqueInput[]
    disconnect?: idnbi_RolePermissionWhereUniqueInput | idnbi_RolePermissionWhereUniqueInput[]
    delete?: idnbi_RolePermissionWhereUniqueInput | idnbi_RolePermissionWhereUniqueInput[]
    connect?: idnbi_RolePermissionWhereUniqueInput | idnbi_RolePermissionWhereUniqueInput[]
    update?: idnbi_RolePermissionUpdateWithWhereUniqueWithoutPermissionInput | idnbi_RolePermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: idnbi_RolePermissionUpdateManyWithWhereWithoutPermissionInput | idnbi_RolePermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: idnbi_RolePermissionScalarWhereInput | idnbi_RolePermissionScalarWhereInput[]
  }

  export type idnbi_RoleCreateNestedOneWithoutPermissionsInput = {
    create?: XOR<idnbi_RoleCreateWithoutPermissionsInput, idnbi_RoleUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: idnbi_RoleCreateOrConnectWithoutPermissionsInput
    connect?: idnbi_RoleWhereUniqueInput
  }

  export type idnbi_PermissionCreateNestedOneWithoutRolesInput = {
    create?: XOR<idnbi_PermissionCreateWithoutRolesInput, idnbi_PermissionUncheckedCreateWithoutRolesInput>
    connectOrCreate?: idnbi_PermissionCreateOrConnectWithoutRolesInput
    connect?: idnbi_PermissionWhereUniqueInput
  }

  export type idnbi_RoleUpdateOneRequiredWithoutPermissionsNestedInput = {
    create?: XOR<idnbi_RoleCreateWithoutPermissionsInput, idnbi_RoleUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: idnbi_RoleCreateOrConnectWithoutPermissionsInput
    upsert?: idnbi_RoleUpsertWithoutPermissionsInput
    connect?: idnbi_RoleWhereUniqueInput
    update?: XOR<XOR<idnbi_RoleUpdateToOneWithWhereWithoutPermissionsInput, idnbi_RoleUpdateWithoutPermissionsInput>, idnbi_RoleUncheckedUpdateWithoutPermissionsInput>
  }

  export type idnbi_PermissionUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<idnbi_PermissionCreateWithoutRolesInput, idnbi_PermissionUncheckedCreateWithoutRolesInput>
    connectOrCreate?: idnbi_PermissionCreateOrConnectWithoutRolesInput
    upsert?: idnbi_PermissionUpsertWithoutRolesInput
    connect?: idnbi_PermissionWhereUniqueInput
    update?: XOR<XOR<idnbi_PermissionUpdateToOneWithWhereWithoutRolesInput, idnbi_PermissionUpdateWithoutRolesInput>, idnbi_PermissionUncheckedUpdateWithoutRolesInput>
  }

  export type idnbi_UserCreateNestedOneWithoutCreated_contentInput = {
    create?: XOR<idnbi_UserCreateWithoutCreated_contentInput, idnbi_UserUncheckedCreateWithoutCreated_contentInput>
    connectOrCreate?: idnbi_UserCreateOrConnectWithoutCreated_contentInput
    connect?: idnbi_UserWhereUniqueInput
  }

  export type idnbi_UserUpdateOneWithoutCreated_contentNestedInput = {
    create?: XOR<idnbi_UserCreateWithoutCreated_contentInput, idnbi_UserUncheckedCreateWithoutCreated_contentInput>
    connectOrCreate?: idnbi_UserCreateOrConnectWithoutCreated_contentInput
    upsert?: idnbi_UserUpsertWithoutCreated_contentInput
    disconnect?: idnbi_UserWhereInput | boolean
    delete?: idnbi_UserWhereInput | boolean
    connect?: idnbi_UserWhereUniqueInput
    update?: XOR<XOR<idnbi_UserUpdateToOneWithWhereWithoutCreated_contentInput, idnbi_UserUpdateWithoutCreated_contentInput>, idnbi_UserUncheckedUpdateWithoutCreated_contentInput>
  }

  export type idnbi_MenuItemCreateNestedOneWithoutChildrenInput = {
    create?: XOR<idnbi_MenuItemCreateWithoutChildrenInput, idnbi_MenuItemUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: idnbi_MenuItemCreateOrConnectWithoutChildrenInput
    connect?: idnbi_MenuItemWhereUniqueInput
  }

  export type idnbi_MenuItemCreateNestedManyWithoutParentInput = {
    create?: XOR<idnbi_MenuItemCreateWithoutParentInput, idnbi_MenuItemUncheckedCreateWithoutParentInput> | idnbi_MenuItemCreateWithoutParentInput[] | idnbi_MenuItemUncheckedCreateWithoutParentInput[]
    connectOrCreate?: idnbi_MenuItemCreateOrConnectWithoutParentInput | idnbi_MenuItemCreateOrConnectWithoutParentInput[]
    createMany?: idnbi_MenuItemCreateManyParentInputEnvelope
    connect?: idnbi_MenuItemWhereUniqueInput | idnbi_MenuItemWhereUniqueInput[]
  }

  export type idnbi_MenuRoleCreateNestedManyWithoutMenuInput = {
    create?: XOR<idnbi_MenuRoleCreateWithoutMenuInput, idnbi_MenuRoleUncheckedCreateWithoutMenuInput> | idnbi_MenuRoleCreateWithoutMenuInput[] | idnbi_MenuRoleUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: idnbi_MenuRoleCreateOrConnectWithoutMenuInput | idnbi_MenuRoleCreateOrConnectWithoutMenuInput[]
    createMany?: idnbi_MenuRoleCreateManyMenuInputEnvelope
    connect?: idnbi_MenuRoleWhereUniqueInput | idnbi_MenuRoleWhereUniqueInput[]
  }

  export type idnbi_MenuItemUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<idnbi_MenuItemCreateWithoutParentInput, idnbi_MenuItemUncheckedCreateWithoutParentInput> | idnbi_MenuItemCreateWithoutParentInput[] | idnbi_MenuItemUncheckedCreateWithoutParentInput[]
    connectOrCreate?: idnbi_MenuItemCreateOrConnectWithoutParentInput | idnbi_MenuItemCreateOrConnectWithoutParentInput[]
    createMany?: idnbi_MenuItemCreateManyParentInputEnvelope
    connect?: idnbi_MenuItemWhereUniqueInput | idnbi_MenuItemWhereUniqueInput[]
  }

  export type idnbi_MenuRoleUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<idnbi_MenuRoleCreateWithoutMenuInput, idnbi_MenuRoleUncheckedCreateWithoutMenuInput> | idnbi_MenuRoleCreateWithoutMenuInput[] | idnbi_MenuRoleUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: idnbi_MenuRoleCreateOrConnectWithoutMenuInput | idnbi_MenuRoleCreateOrConnectWithoutMenuInput[]
    createMany?: idnbi_MenuRoleCreateManyMenuInputEnvelope
    connect?: idnbi_MenuRoleWhereUniqueInput | idnbi_MenuRoleWhereUniqueInput[]
  }

  export type idnbi_MenuItemUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<idnbi_MenuItemCreateWithoutChildrenInput, idnbi_MenuItemUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: idnbi_MenuItemCreateOrConnectWithoutChildrenInput
    upsert?: idnbi_MenuItemUpsertWithoutChildrenInput
    disconnect?: idnbi_MenuItemWhereInput | boolean
    delete?: idnbi_MenuItemWhereInput | boolean
    connect?: idnbi_MenuItemWhereUniqueInput
    update?: XOR<XOR<idnbi_MenuItemUpdateToOneWithWhereWithoutChildrenInput, idnbi_MenuItemUpdateWithoutChildrenInput>, idnbi_MenuItemUncheckedUpdateWithoutChildrenInput>
  }

  export type idnbi_MenuItemUpdateManyWithoutParentNestedInput = {
    create?: XOR<idnbi_MenuItemCreateWithoutParentInput, idnbi_MenuItemUncheckedCreateWithoutParentInput> | idnbi_MenuItemCreateWithoutParentInput[] | idnbi_MenuItemUncheckedCreateWithoutParentInput[]
    connectOrCreate?: idnbi_MenuItemCreateOrConnectWithoutParentInput | idnbi_MenuItemCreateOrConnectWithoutParentInput[]
    upsert?: idnbi_MenuItemUpsertWithWhereUniqueWithoutParentInput | idnbi_MenuItemUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: idnbi_MenuItemCreateManyParentInputEnvelope
    set?: idnbi_MenuItemWhereUniqueInput | idnbi_MenuItemWhereUniqueInput[]
    disconnect?: idnbi_MenuItemWhereUniqueInput | idnbi_MenuItemWhereUniqueInput[]
    delete?: idnbi_MenuItemWhereUniqueInput | idnbi_MenuItemWhereUniqueInput[]
    connect?: idnbi_MenuItemWhereUniqueInput | idnbi_MenuItemWhereUniqueInput[]
    update?: idnbi_MenuItemUpdateWithWhereUniqueWithoutParentInput | idnbi_MenuItemUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: idnbi_MenuItemUpdateManyWithWhereWithoutParentInput | idnbi_MenuItemUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: idnbi_MenuItemScalarWhereInput | idnbi_MenuItemScalarWhereInput[]
  }

  export type idnbi_MenuRoleUpdateManyWithoutMenuNestedInput = {
    create?: XOR<idnbi_MenuRoleCreateWithoutMenuInput, idnbi_MenuRoleUncheckedCreateWithoutMenuInput> | idnbi_MenuRoleCreateWithoutMenuInput[] | idnbi_MenuRoleUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: idnbi_MenuRoleCreateOrConnectWithoutMenuInput | idnbi_MenuRoleCreateOrConnectWithoutMenuInput[]
    upsert?: idnbi_MenuRoleUpsertWithWhereUniqueWithoutMenuInput | idnbi_MenuRoleUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: idnbi_MenuRoleCreateManyMenuInputEnvelope
    set?: idnbi_MenuRoleWhereUniqueInput | idnbi_MenuRoleWhereUniqueInput[]
    disconnect?: idnbi_MenuRoleWhereUniqueInput | idnbi_MenuRoleWhereUniqueInput[]
    delete?: idnbi_MenuRoleWhereUniqueInput | idnbi_MenuRoleWhereUniqueInput[]
    connect?: idnbi_MenuRoleWhereUniqueInput | idnbi_MenuRoleWhereUniqueInput[]
    update?: idnbi_MenuRoleUpdateWithWhereUniqueWithoutMenuInput | idnbi_MenuRoleUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: idnbi_MenuRoleUpdateManyWithWhereWithoutMenuInput | idnbi_MenuRoleUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: idnbi_MenuRoleScalarWhereInput | idnbi_MenuRoleScalarWhereInput[]
  }

  export type idnbi_MenuItemUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<idnbi_MenuItemCreateWithoutParentInput, idnbi_MenuItemUncheckedCreateWithoutParentInput> | idnbi_MenuItemCreateWithoutParentInput[] | idnbi_MenuItemUncheckedCreateWithoutParentInput[]
    connectOrCreate?: idnbi_MenuItemCreateOrConnectWithoutParentInput | idnbi_MenuItemCreateOrConnectWithoutParentInput[]
    upsert?: idnbi_MenuItemUpsertWithWhereUniqueWithoutParentInput | idnbi_MenuItemUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: idnbi_MenuItemCreateManyParentInputEnvelope
    set?: idnbi_MenuItemWhereUniqueInput | idnbi_MenuItemWhereUniqueInput[]
    disconnect?: idnbi_MenuItemWhereUniqueInput | idnbi_MenuItemWhereUniqueInput[]
    delete?: idnbi_MenuItemWhereUniqueInput | idnbi_MenuItemWhereUniqueInput[]
    connect?: idnbi_MenuItemWhereUniqueInput | idnbi_MenuItemWhereUniqueInput[]
    update?: idnbi_MenuItemUpdateWithWhereUniqueWithoutParentInput | idnbi_MenuItemUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: idnbi_MenuItemUpdateManyWithWhereWithoutParentInput | idnbi_MenuItemUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: idnbi_MenuItemScalarWhereInput | idnbi_MenuItemScalarWhereInput[]
  }

  export type idnbi_MenuRoleUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<idnbi_MenuRoleCreateWithoutMenuInput, idnbi_MenuRoleUncheckedCreateWithoutMenuInput> | idnbi_MenuRoleCreateWithoutMenuInput[] | idnbi_MenuRoleUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: idnbi_MenuRoleCreateOrConnectWithoutMenuInput | idnbi_MenuRoleCreateOrConnectWithoutMenuInput[]
    upsert?: idnbi_MenuRoleUpsertWithWhereUniqueWithoutMenuInput | idnbi_MenuRoleUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: idnbi_MenuRoleCreateManyMenuInputEnvelope
    set?: idnbi_MenuRoleWhereUniqueInput | idnbi_MenuRoleWhereUniqueInput[]
    disconnect?: idnbi_MenuRoleWhereUniqueInput | idnbi_MenuRoleWhereUniqueInput[]
    delete?: idnbi_MenuRoleWhereUniqueInput | idnbi_MenuRoleWhereUniqueInput[]
    connect?: idnbi_MenuRoleWhereUniqueInput | idnbi_MenuRoleWhereUniqueInput[]
    update?: idnbi_MenuRoleUpdateWithWhereUniqueWithoutMenuInput | idnbi_MenuRoleUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: idnbi_MenuRoleUpdateManyWithWhereWithoutMenuInput | idnbi_MenuRoleUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: idnbi_MenuRoleScalarWhereInput | idnbi_MenuRoleScalarWhereInput[]
  }

  export type idnbi_MenuItemCreateNestedOneWithoutRolesInput = {
    create?: XOR<idnbi_MenuItemCreateWithoutRolesInput, idnbi_MenuItemUncheckedCreateWithoutRolesInput>
    connectOrCreate?: idnbi_MenuItemCreateOrConnectWithoutRolesInput
    connect?: idnbi_MenuItemWhereUniqueInput
  }

  export type idnbi_RoleCreateNestedOneWithoutMenusInput = {
    create?: XOR<idnbi_RoleCreateWithoutMenusInput, idnbi_RoleUncheckedCreateWithoutMenusInput>
    connectOrCreate?: idnbi_RoleCreateOrConnectWithoutMenusInput
    connect?: idnbi_RoleWhereUniqueInput
  }

  export type idnbi_MenuItemUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<idnbi_MenuItemCreateWithoutRolesInput, idnbi_MenuItemUncheckedCreateWithoutRolesInput>
    connectOrCreate?: idnbi_MenuItemCreateOrConnectWithoutRolesInput
    upsert?: idnbi_MenuItemUpsertWithoutRolesInput
    connect?: idnbi_MenuItemWhereUniqueInput
    update?: XOR<XOR<idnbi_MenuItemUpdateToOneWithWhereWithoutRolesInput, idnbi_MenuItemUpdateWithoutRolesInput>, idnbi_MenuItemUncheckedUpdateWithoutRolesInput>
  }

  export type idnbi_RoleUpdateOneRequiredWithoutMenusNestedInput = {
    create?: XOR<idnbi_RoleCreateWithoutMenusInput, idnbi_RoleUncheckedCreateWithoutMenusInput>
    connectOrCreate?: idnbi_RoleCreateOrConnectWithoutMenusInput
    upsert?: idnbi_RoleUpsertWithoutMenusInput
    connect?: idnbi_RoleWhereUniqueInput
    update?: XOR<XOR<idnbi_RoleUpdateToOneWithWhereWithoutMenusInput, idnbi_RoleUpdateWithoutMenusInput>, idnbi_RoleUncheckedUpdateWithoutMenusInput>
  }

  export type idnbi_UserNotificationStatusCreateNestedManyWithoutNotificationInput = {
    create?: XOR<idnbi_UserNotificationStatusCreateWithoutNotificationInput, idnbi_UserNotificationStatusUncheckedCreateWithoutNotificationInput> | idnbi_UserNotificationStatusCreateWithoutNotificationInput[] | idnbi_UserNotificationStatusUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: idnbi_UserNotificationStatusCreateOrConnectWithoutNotificationInput | idnbi_UserNotificationStatusCreateOrConnectWithoutNotificationInput[]
    createMany?: idnbi_UserNotificationStatusCreateManyNotificationInputEnvelope
    connect?: idnbi_UserNotificationStatusWhereUniqueInput | idnbi_UserNotificationStatusWhereUniqueInput[]
  }

  export type idnbi_UserNotificationStatusUncheckedCreateNestedManyWithoutNotificationInput = {
    create?: XOR<idnbi_UserNotificationStatusCreateWithoutNotificationInput, idnbi_UserNotificationStatusUncheckedCreateWithoutNotificationInput> | idnbi_UserNotificationStatusCreateWithoutNotificationInput[] | idnbi_UserNotificationStatusUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: idnbi_UserNotificationStatusCreateOrConnectWithoutNotificationInput | idnbi_UserNotificationStatusCreateOrConnectWithoutNotificationInput[]
    createMany?: idnbi_UserNotificationStatusCreateManyNotificationInputEnvelope
    connect?: idnbi_UserNotificationStatusWhereUniqueInput | idnbi_UserNotificationStatusWhereUniqueInput[]
  }

  export type idnbi_UserNotificationStatusUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<idnbi_UserNotificationStatusCreateWithoutNotificationInput, idnbi_UserNotificationStatusUncheckedCreateWithoutNotificationInput> | idnbi_UserNotificationStatusCreateWithoutNotificationInput[] | idnbi_UserNotificationStatusUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: idnbi_UserNotificationStatusCreateOrConnectWithoutNotificationInput | idnbi_UserNotificationStatusCreateOrConnectWithoutNotificationInput[]
    upsert?: idnbi_UserNotificationStatusUpsertWithWhereUniqueWithoutNotificationInput | idnbi_UserNotificationStatusUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: idnbi_UserNotificationStatusCreateManyNotificationInputEnvelope
    set?: idnbi_UserNotificationStatusWhereUniqueInput | idnbi_UserNotificationStatusWhereUniqueInput[]
    disconnect?: idnbi_UserNotificationStatusWhereUniqueInput | idnbi_UserNotificationStatusWhereUniqueInput[]
    delete?: idnbi_UserNotificationStatusWhereUniqueInput | idnbi_UserNotificationStatusWhereUniqueInput[]
    connect?: idnbi_UserNotificationStatusWhereUniqueInput | idnbi_UserNotificationStatusWhereUniqueInput[]
    update?: idnbi_UserNotificationStatusUpdateWithWhereUniqueWithoutNotificationInput | idnbi_UserNotificationStatusUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: idnbi_UserNotificationStatusUpdateManyWithWhereWithoutNotificationInput | idnbi_UserNotificationStatusUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: idnbi_UserNotificationStatusScalarWhereInput | idnbi_UserNotificationStatusScalarWhereInput[]
  }

  export type idnbi_UserNotificationStatusUncheckedUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<idnbi_UserNotificationStatusCreateWithoutNotificationInput, idnbi_UserNotificationStatusUncheckedCreateWithoutNotificationInput> | idnbi_UserNotificationStatusCreateWithoutNotificationInput[] | idnbi_UserNotificationStatusUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: idnbi_UserNotificationStatusCreateOrConnectWithoutNotificationInput | idnbi_UserNotificationStatusCreateOrConnectWithoutNotificationInput[]
    upsert?: idnbi_UserNotificationStatusUpsertWithWhereUniqueWithoutNotificationInput | idnbi_UserNotificationStatusUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: idnbi_UserNotificationStatusCreateManyNotificationInputEnvelope
    set?: idnbi_UserNotificationStatusWhereUniqueInput | idnbi_UserNotificationStatusWhereUniqueInput[]
    disconnect?: idnbi_UserNotificationStatusWhereUniqueInput | idnbi_UserNotificationStatusWhereUniqueInput[]
    delete?: idnbi_UserNotificationStatusWhereUniqueInput | idnbi_UserNotificationStatusWhereUniqueInput[]
    connect?: idnbi_UserNotificationStatusWhereUniqueInput | idnbi_UserNotificationStatusWhereUniqueInput[]
    update?: idnbi_UserNotificationStatusUpdateWithWhereUniqueWithoutNotificationInput | idnbi_UserNotificationStatusUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: idnbi_UserNotificationStatusUpdateManyWithWhereWithoutNotificationInput | idnbi_UserNotificationStatusUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: idnbi_UserNotificationStatusScalarWhereInput | idnbi_UserNotificationStatusScalarWhereInput[]
  }

  export type idnbi_UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<idnbi_UserCreateWithoutNotificationsInput, idnbi_UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: idnbi_UserCreateOrConnectWithoutNotificationsInput
    connect?: idnbi_UserWhereUniqueInput
  }

  export type idnbi_NotificationCreateNestedOneWithoutUser_statusesInput = {
    create?: XOR<idnbi_NotificationCreateWithoutUser_statusesInput, idnbi_NotificationUncheckedCreateWithoutUser_statusesInput>
    connectOrCreate?: idnbi_NotificationCreateOrConnectWithoutUser_statusesInput
    connect?: idnbi_NotificationWhereUniqueInput
  }

  export type idnbi_UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<idnbi_UserCreateWithoutNotificationsInput, idnbi_UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: idnbi_UserCreateOrConnectWithoutNotificationsInput
    upsert?: idnbi_UserUpsertWithoutNotificationsInput
    connect?: idnbi_UserWhereUniqueInput
    update?: XOR<XOR<idnbi_UserUpdateToOneWithWhereWithoutNotificationsInput, idnbi_UserUpdateWithoutNotificationsInput>, idnbi_UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type idnbi_NotificationUpdateOneRequiredWithoutUser_statusesNestedInput = {
    create?: XOR<idnbi_NotificationCreateWithoutUser_statusesInput, idnbi_NotificationUncheckedCreateWithoutUser_statusesInput>
    connectOrCreate?: idnbi_NotificationCreateOrConnectWithoutUser_statusesInput
    upsert?: idnbi_NotificationUpsertWithoutUser_statusesInput
    connect?: idnbi_NotificationWhereUniqueInput
    update?: XOR<XOR<idnbi_NotificationUpdateToOneWithWhereWithoutUser_statusesInput, idnbi_NotificationUpdateWithoutUser_statusesInput>, idnbi_NotificationUncheckedUpdateWithoutUser_statusesInput>
  }

  export type idnbi_UserCreateNestedOneWithoutAudit_logsInput = {
    create?: XOR<idnbi_UserCreateWithoutAudit_logsInput, idnbi_UserUncheckedCreateWithoutAudit_logsInput>
    connectOrCreate?: idnbi_UserCreateOrConnectWithoutAudit_logsInput
    connect?: idnbi_UserWhereUniqueInput
  }

  export type idnbi_UserUpdateOneWithoutAudit_logsNestedInput = {
    create?: XOR<idnbi_UserCreateWithoutAudit_logsInput, idnbi_UserUncheckedCreateWithoutAudit_logsInput>
    connectOrCreate?: idnbi_UserCreateOrConnectWithoutAudit_logsInput
    upsert?: idnbi_UserUpsertWithoutAudit_logsInput
    disconnect?: idnbi_UserWhereInput | boolean
    delete?: idnbi_UserWhereInput | boolean
    connect?: idnbi_UserWhereUniqueInput
    update?: XOR<XOR<idnbi_UserUpdateToOneWithWhereWithoutAudit_logsInput, idnbi_UserUpdateWithoutAudit_logsInput>, idnbi_UserUncheckedUpdateWithoutAudit_logsInput>
  }

  export type idnbi_UserCreateNestedOneWithoutPassword_resetInput = {
    create?: XOR<idnbi_UserCreateWithoutPassword_resetInput, idnbi_UserUncheckedCreateWithoutPassword_resetInput>
    connectOrCreate?: idnbi_UserCreateOrConnectWithoutPassword_resetInput
    connect?: idnbi_UserWhereUniqueInput
  }

  export type idnbi_UserUpdateOneRequiredWithoutPassword_resetNestedInput = {
    create?: XOR<idnbi_UserCreateWithoutPassword_resetInput, idnbi_UserUncheckedCreateWithoutPassword_resetInput>
    connectOrCreate?: idnbi_UserCreateOrConnectWithoutPassword_resetInput
    upsert?: idnbi_UserUpsertWithoutPassword_resetInput
    connect?: idnbi_UserWhereUniqueInput
    update?: XOR<XOR<idnbi_UserUpdateToOneWithWhereWithoutPassword_resetInput, idnbi_UserUpdateWithoutPassword_resetInput>, idnbi_UserUncheckedUpdateWithoutPassword_resetInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type idnbi_UserRoleCreateWithoutUserInput = {
    created_at?: Date | string
    role: idnbi_RoleCreateNestedOneWithoutUsersInput
  }

  export type idnbi_UserRoleUncheckedCreateWithoutUserInput = {
    roleId: string
    created_at?: Date | string
  }

  export type idnbi_UserRoleCreateOrConnectWithoutUserInput = {
    where: idnbi_UserRoleWhereUniqueInput
    create: XOR<idnbi_UserRoleCreateWithoutUserInput, idnbi_UserRoleUncheckedCreateWithoutUserInput>
  }

  export type idnbi_UserRoleCreateManyUserInputEnvelope = {
    data: idnbi_UserRoleCreateManyUserInput | idnbi_UserRoleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type idnbi_ContentCreateWithoutCreated_byInput = {
    id?: string
    title: string
    slug: string
    type?: string
    content_data: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type idnbi_ContentUncheckedCreateWithoutCreated_byInput = {
    id?: string
    title: string
    slug: string
    type?: string
    content_data: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type idnbi_ContentCreateOrConnectWithoutCreated_byInput = {
    where: idnbi_ContentWhereUniqueInput
    create: XOR<idnbi_ContentCreateWithoutCreated_byInput, idnbi_ContentUncheckedCreateWithoutCreated_byInput>
  }

  export type idnbi_ContentCreateManyCreated_byInputEnvelope = {
    data: idnbi_ContentCreateManyCreated_byInput | idnbi_ContentCreateManyCreated_byInput[]
    skipDuplicates?: boolean
  }

  export type idnbi_UserNotificationStatusCreateWithoutUserInput = {
    read?: boolean
    read_at?: Date | string | null
    created_at?: Date | string
    notification: idnbi_NotificationCreateNestedOneWithoutUser_statusesInput
  }

  export type idnbi_UserNotificationStatusUncheckedCreateWithoutUserInput = {
    notificationId: string
    read?: boolean
    read_at?: Date | string | null
    created_at?: Date | string
  }

  export type idnbi_UserNotificationStatusCreateOrConnectWithoutUserInput = {
    where: idnbi_UserNotificationStatusWhereUniqueInput
    create: XOR<idnbi_UserNotificationStatusCreateWithoutUserInput, idnbi_UserNotificationStatusUncheckedCreateWithoutUserInput>
  }

  export type idnbi_UserNotificationStatusCreateManyUserInputEnvelope = {
    data: idnbi_UserNotificationStatusCreateManyUserInput | idnbi_UserNotificationStatusCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type idnbi_PasswordResetTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expires_at: Date | string
    is_used?: boolean
    created_at?: Date | string
  }

  export type idnbi_PasswordResetTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expires_at: Date | string
    is_used?: boolean
    created_at?: Date | string
  }

  export type idnbi_PasswordResetTokenCreateOrConnectWithoutUserInput = {
    where: idnbi_PasswordResetTokenWhereUniqueInput
    create: XOR<idnbi_PasswordResetTokenCreateWithoutUserInput, idnbi_PasswordResetTokenUncheckedCreateWithoutUserInput>
  }

  export type idnbi_PasswordResetTokenCreateManyUserInputEnvelope = {
    data: idnbi_PasswordResetTokenCreateManyUserInput | idnbi_PasswordResetTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type idnbi_AuditLogCreateWithoutUserInput = {
    id?: string
    action: string
    resource?: string | null
    resourceId?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    user_agent?: string | null
    created_at?: Date | string
  }

  export type idnbi_AuditLogUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    resource?: string | null
    resourceId?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    user_agent?: string | null
    created_at?: Date | string
  }

  export type idnbi_AuditLogCreateOrConnectWithoutUserInput = {
    where: idnbi_AuditLogWhereUniqueInput
    create: XOR<idnbi_AuditLogCreateWithoutUserInput, idnbi_AuditLogUncheckedCreateWithoutUserInput>
  }

  export type idnbi_AuditLogCreateManyUserInputEnvelope = {
    data: idnbi_AuditLogCreateManyUserInput | idnbi_AuditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type idnbi_UserRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: idnbi_UserRoleWhereUniqueInput
    update: XOR<idnbi_UserRoleUpdateWithoutUserInput, idnbi_UserRoleUncheckedUpdateWithoutUserInput>
    create: XOR<idnbi_UserRoleCreateWithoutUserInput, idnbi_UserRoleUncheckedCreateWithoutUserInput>
  }

  export type idnbi_UserRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: idnbi_UserRoleWhereUniqueInput
    data: XOR<idnbi_UserRoleUpdateWithoutUserInput, idnbi_UserRoleUncheckedUpdateWithoutUserInput>
  }

  export type idnbi_UserRoleUpdateManyWithWhereWithoutUserInput = {
    where: idnbi_UserRoleScalarWhereInput
    data: XOR<idnbi_UserRoleUpdateManyMutationInput, idnbi_UserRoleUncheckedUpdateManyWithoutUserInput>
  }

  export type idnbi_UserRoleScalarWhereInput = {
    AND?: idnbi_UserRoleScalarWhereInput | idnbi_UserRoleScalarWhereInput[]
    OR?: idnbi_UserRoleScalarWhereInput[]
    NOT?: idnbi_UserRoleScalarWhereInput | idnbi_UserRoleScalarWhereInput[]
    userId?: StringFilter<"idnbi_UserRole"> | string
    roleId?: StringFilter<"idnbi_UserRole"> | string
    created_at?: DateTimeFilter<"idnbi_UserRole"> | Date | string
  }

  export type idnbi_ContentUpsertWithWhereUniqueWithoutCreated_byInput = {
    where: idnbi_ContentWhereUniqueInput
    update: XOR<idnbi_ContentUpdateWithoutCreated_byInput, idnbi_ContentUncheckedUpdateWithoutCreated_byInput>
    create: XOR<idnbi_ContentCreateWithoutCreated_byInput, idnbi_ContentUncheckedCreateWithoutCreated_byInput>
  }

  export type idnbi_ContentUpdateWithWhereUniqueWithoutCreated_byInput = {
    where: idnbi_ContentWhereUniqueInput
    data: XOR<idnbi_ContentUpdateWithoutCreated_byInput, idnbi_ContentUncheckedUpdateWithoutCreated_byInput>
  }

  export type idnbi_ContentUpdateManyWithWhereWithoutCreated_byInput = {
    where: idnbi_ContentScalarWhereInput
    data: XOR<idnbi_ContentUpdateManyMutationInput, idnbi_ContentUncheckedUpdateManyWithoutCreated_byInput>
  }

  export type idnbi_ContentScalarWhereInput = {
    AND?: idnbi_ContentScalarWhereInput | idnbi_ContentScalarWhereInput[]
    OR?: idnbi_ContentScalarWhereInput[]
    NOT?: idnbi_ContentScalarWhereInput | idnbi_ContentScalarWhereInput[]
    id?: StringFilter<"idnbi_Content"> | string
    title?: StringFilter<"idnbi_Content"> | string
    slug?: StringFilter<"idnbi_Content"> | string
    type?: StringFilter<"idnbi_Content"> | string
    content_data?: StringFilter<"idnbi_Content"> | string
    created_by_id?: StringNullableFilter<"idnbi_Content"> | string | null
    created_at?: DateTimeFilter<"idnbi_Content"> | Date | string
    updated_at?: DateTimeFilter<"idnbi_Content"> | Date | string
  }

  export type idnbi_UserNotificationStatusUpsertWithWhereUniqueWithoutUserInput = {
    where: idnbi_UserNotificationStatusWhereUniqueInput
    update: XOR<idnbi_UserNotificationStatusUpdateWithoutUserInput, idnbi_UserNotificationStatusUncheckedUpdateWithoutUserInput>
    create: XOR<idnbi_UserNotificationStatusCreateWithoutUserInput, idnbi_UserNotificationStatusUncheckedCreateWithoutUserInput>
  }

  export type idnbi_UserNotificationStatusUpdateWithWhereUniqueWithoutUserInput = {
    where: idnbi_UserNotificationStatusWhereUniqueInput
    data: XOR<idnbi_UserNotificationStatusUpdateWithoutUserInput, idnbi_UserNotificationStatusUncheckedUpdateWithoutUserInput>
  }

  export type idnbi_UserNotificationStatusUpdateManyWithWhereWithoutUserInput = {
    where: idnbi_UserNotificationStatusScalarWhereInput
    data: XOR<idnbi_UserNotificationStatusUpdateManyMutationInput, idnbi_UserNotificationStatusUncheckedUpdateManyWithoutUserInput>
  }

  export type idnbi_UserNotificationStatusScalarWhereInput = {
    AND?: idnbi_UserNotificationStatusScalarWhereInput | idnbi_UserNotificationStatusScalarWhereInput[]
    OR?: idnbi_UserNotificationStatusScalarWhereInput[]
    NOT?: idnbi_UserNotificationStatusScalarWhereInput | idnbi_UserNotificationStatusScalarWhereInput[]
    userId?: StringFilter<"idnbi_UserNotificationStatus"> | string
    notificationId?: StringFilter<"idnbi_UserNotificationStatus"> | string
    read?: BoolFilter<"idnbi_UserNotificationStatus"> | boolean
    read_at?: DateTimeNullableFilter<"idnbi_UserNotificationStatus"> | Date | string | null
    created_at?: DateTimeFilter<"idnbi_UserNotificationStatus"> | Date | string
  }

  export type idnbi_PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: idnbi_PasswordResetTokenWhereUniqueInput
    update: XOR<idnbi_PasswordResetTokenUpdateWithoutUserInput, idnbi_PasswordResetTokenUncheckedUpdateWithoutUserInput>
    create: XOR<idnbi_PasswordResetTokenCreateWithoutUserInput, idnbi_PasswordResetTokenUncheckedCreateWithoutUserInput>
  }

  export type idnbi_PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: idnbi_PasswordResetTokenWhereUniqueInput
    data: XOR<idnbi_PasswordResetTokenUpdateWithoutUserInput, idnbi_PasswordResetTokenUncheckedUpdateWithoutUserInput>
  }

  export type idnbi_PasswordResetTokenUpdateManyWithWhereWithoutUserInput = {
    where: idnbi_PasswordResetTokenScalarWhereInput
    data: XOR<idnbi_PasswordResetTokenUpdateManyMutationInput, idnbi_PasswordResetTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type idnbi_PasswordResetTokenScalarWhereInput = {
    AND?: idnbi_PasswordResetTokenScalarWhereInput | idnbi_PasswordResetTokenScalarWhereInput[]
    OR?: idnbi_PasswordResetTokenScalarWhereInput[]
    NOT?: idnbi_PasswordResetTokenScalarWhereInput | idnbi_PasswordResetTokenScalarWhereInput[]
    id?: StringFilter<"idnbi_PasswordResetToken"> | string
    userId?: StringFilter<"idnbi_PasswordResetToken"> | string
    token?: StringFilter<"idnbi_PasswordResetToken"> | string
    expires_at?: DateTimeFilter<"idnbi_PasswordResetToken"> | Date | string
    is_used?: BoolFilter<"idnbi_PasswordResetToken"> | boolean
    created_at?: DateTimeFilter<"idnbi_PasswordResetToken"> | Date | string
  }

  export type idnbi_AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: idnbi_AuditLogWhereUniqueInput
    update: XOR<idnbi_AuditLogUpdateWithoutUserInput, idnbi_AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<idnbi_AuditLogCreateWithoutUserInput, idnbi_AuditLogUncheckedCreateWithoutUserInput>
  }

  export type idnbi_AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: idnbi_AuditLogWhereUniqueInput
    data: XOR<idnbi_AuditLogUpdateWithoutUserInput, idnbi_AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type idnbi_AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: idnbi_AuditLogScalarWhereInput
    data: XOR<idnbi_AuditLogUpdateManyMutationInput, idnbi_AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type idnbi_AuditLogScalarWhereInput = {
    AND?: idnbi_AuditLogScalarWhereInput | idnbi_AuditLogScalarWhereInput[]
    OR?: idnbi_AuditLogScalarWhereInput[]
    NOT?: idnbi_AuditLogScalarWhereInput | idnbi_AuditLogScalarWhereInput[]
    id?: StringFilter<"idnbi_AuditLog"> | string
    userId?: StringNullableFilter<"idnbi_AuditLog"> | string | null
    action?: StringFilter<"idnbi_AuditLog"> | string
    resource?: StringNullableFilter<"idnbi_AuditLog"> | string | null
    resourceId?: StringNullableFilter<"idnbi_AuditLog"> | string | null
    details?: JsonNullableFilter<"idnbi_AuditLog">
    ip_address?: StringNullableFilter<"idnbi_AuditLog"> | string | null
    user_agent?: StringNullableFilter<"idnbi_AuditLog"> | string | null
    created_at?: DateTimeFilter<"idnbi_AuditLog"> | Date | string
  }

  export type idnbi_UserRoleCreateWithoutRoleInput = {
    created_at?: Date | string
    user: idnbi_UserCreateNestedOneWithoutRolesInput
  }

  export type idnbi_UserRoleUncheckedCreateWithoutRoleInput = {
    userId: string
    created_at?: Date | string
  }

  export type idnbi_UserRoleCreateOrConnectWithoutRoleInput = {
    where: idnbi_UserRoleWhereUniqueInput
    create: XOR<idnbi_UserRoleCreateWithoutRoleInput, idnbi_UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type idnbi_UserRoleCreateManyRoleInputEnvelope = {
    data: idnbi_UserRoleCreateManyRoleInput | idnbi_UserRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type idnbi_RolePermissionCreateWithoutRoleInput = {
    created_at?: Date | string
    permission: idnbi_PermissionCreateNestedOneWithoutRolesInput
  }

  export type idnbi_RolePermissionUncheckedCreateWithoutRoleInput = {
    permissionId: string
    created_at?: Date | string
  }

  export type idnbi_RolePermissionCreateOrConnectWithoutRoleInput = {
    where: idnbi_RolePermissionWhereUniqueInput
    create: XOR<idnbi_RolePermissionCreateWithoutRoleInput, idnbi_RolePermissionUncheckedCreateWithoutRoleInput>
  }

  export type idnbi_RolePermissionCreateManyRoleInputEnvelope = {
    data: idnbi_RolePermissionCreateManyRoleInput | idnbi_RolePermissionCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type idnbi_MenuRoleCreateWithoutRoleInput = {
    created_at?: Date | string
    menu: idnbi_MenuItemCreateNestedOneWithoutRolesInput
  }

  export type idnbi_MenuRoleUncheckedCreateWithoutRoleInput = {
    menuId: string
    created_at?: Date | string
  }

  export type idnbi_MenuRoleCreateOrConnectWithoutRoleInput = {
    where: idnbi_MenuRoleWhereUniqueInput
    create: XOR<idnbi_MenuRoleCreateWithoutRoleInput, idnbi_MenuRoleUncheckedCreateWithoutRoleInput>
  }

  export type idnbi_MenuRoleCreateManyRoleInputEnvelope = {
    data: idnbi_MenuRoleCreateManyRoleInput | idnbi_MenuRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type idnbi_UserRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: idnbi_UserRoleWhereUniqueInput
    update: XOR<idnbi_UserRoleUpdateWithoutRoleInput, idnbi_UserRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<idnbi_UserRoleCreateWithoutRoleInput, idnbi_UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type idnbi_UserRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: idnbi_UserRoleWhereUniqueInput
    data: XOR<idnbi_UserRoleUpdateWithoutRoleInput, idnbi_UserRoleUncheckedUpdateWithoutRoleInput>
  }

  export type idnbi_UserRoleUpdateManyWithWhereWithoutRoleInput = {
    where: idnbi_UserRoleScalarWhereInput
    data: XOR<idnbi_UserRoleUpdateManyMutationInput, idnbi_UserRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type idnbi_RolePermissionUpsertWithWhereUniqueWithoutRoleInput = {
    where: idnbi_RolePermissionWhereUniqueInput
    update: XOR<idnbi_RolePermissionUpdateWithoutRoleInput, idnbi_RolePermissionUncheckedUpdateWithoutRoleInput>
    create: XOR<idnbi_RolePermissionCreateWithoutRoleInput, idnbi_RolePermissionUncheckedCreateWithoutRoleInput>
  }

  export type idnbi_RolePermissionUpdateWithWhereUniqueWithoutRoleInput = {
    where: idnbi_RolePermissionWhereUniqueInput
    data: XOR<idnbi_RolePermissionUpdateWithoutRoleInput, idnbi_RolePermissionUncheckedUpdateWithoutRoleInput>
  }

  export type idnbi_RolePermissionUpdateManyWithWhereWithoutRoleInput = {
    where: idnbi_RolePermissionScalarWhereInput
    data: XOR<idnbi_RolePermissionUpdateManyMutationInput, idnbi_RolePermissionUncheckedUpdateManyWithoutRoleInput>
  }

  export type idnbi_RolePermissionScalarWhereInput = {
    AND?: idnbi_RolePermissionScalarWhereInput | idnbi_RolePermissionScalarWhereInput[]
    OR?: idnbi_RolePermissionScalarWhereInput[]
    NOT?: idnbi_RolePermissionScalarWhereInput | idnbi_RolePermissionScalarWhereInput[]
    roleId?: StringFilter<"idnbi_RolePermission"> | string
    permissionId?: StringFilter<"idnbi_RolePermission"> | string
    created_at?: DateTimeFilter<"idnbi_RolePermission"> | Date | string
  }

  export type idnbi_MenuRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: idnbi_MenuRoleWhereUniqueInput
    update: XOR<idnbi_MenuRoleUpdateWithoutRoleInput, idnbi_MenuRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<idnbi_MenuRoleCreateWithoutRoleInput, idnbi_MenuRoleUncheckedCreateWithoutRoleInput>
  }

  export type idnbi_MenuRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: idnbi_MenuRoleWhereUniqueInput
    data: XOR<idnbi_MenuRoleUpdateWithoutRoleInput, idnbi_MenuRoleUncheckedUpdateWithoutRoleInput>
  }

  export type idnbi_MenuRoleUpdateManyWithWhereWithoutRoleInput = {
    where: idnbi_MenuRoleScalarWhereInput
    data: XOR<idnbi_MenuRoleUpdateManyMutationInput, idnbi_MenuRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type idnbi_MenuRoleScalarWhereInput = {
    AND?: idnbi_MenuRoleScalarWhereInput | idnbi_MenuRoleScalarWhereInput[]
    OR?: idnbi_MenuRoleScalarWhereInput[]
    NOT?: idnbi_MenuRoleScalarWhereInput | idnbi_MenuRoleScalarWhereInput[]
    menuId?: StringFilter<"idnbi_MenuRole"> | string
    roleId?: StringFilter<"idnbi_MenuRole"> | string
    created_at?: DateTimeFilter<"idnbi_MenuRole"> | Date | string
  }

  export type idnbi_UserCreateWithoutRolesInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: string
    profile_photo_url?: string | null
    last_login_at?: Date | string | null
    last_login_ip?: string | null
    failed_login_attempts?: number
    is_ip_blocked?: boolean
    terms_accepted_at?: Date | string | null
    invited_at?: Date | string | null
    registered_at?: Date | string
    temp_password_flag?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    created_content?: idnbi_ContentCreateNestedManyWithoutCreated_byInput
    notifications?: idnbi_UserNotificationStatusCreateNestedManyWithoutUserInput
    password_reset?: idnbi_PasswordResetTokenCreateNestedManyWithoutUserInput
    audit_logs?: idnbi_AuditLogCreateNestedManyWithoutUserInput
  }

  export type idnbi_UserUncheckedCreateWithoutRolesInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: string
    profile_photo_url?: string | null
    last_login_at?: Date | string | null
    last_login_ip?: string | null
    failed_login_attempts?: number
    is_ip_blocked?: boolean
    terms_accepted_at?: Date | string | null
    invited_at?: Date | string | null
    registered_at?: Date | string
    temp_password_flag?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    created_content?: idnbi_ContentUncheckedCreateNestedManyWithoutCreated_byInput
    notifications?: idnbi_UserNotificationStatusUncheckedCreateNestedManyWithoutUserInput
    password_reset?: idnbi_PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
    audit_logs?: idnbi_AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type idnbi_UserCreateOrConnectWithoutRolesInput = {
    where: idnbi_UserWhereUniqueInput
    create: XOR<idnbi_UserCreateWithoutRolesInput, idnbi_UserUncheckedCreateWithoutRolesInput>
  }

  export type idnbi_RoleCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    permissions?: idnbi_RolePermissionCreateNestedManyWithoutRoleInput
    menus?: idnbi_MenuRoleCreateNestedManyWithoutRoleInput
  }

  export type idnbi_RoleUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    permissions?: idnbi_RolePermissionUncheckedCreateNestedManyWithoutRoleInput
    menus?: idnbi_MenuRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type idnbi_RoleCreateOrConnectWithoutUsersInput = {
    where: idnbi_RoleWhereUniqueInput
    create: XOR<idnbi_RoleCreateWithoutUsersInput, idnbi_RoleUncheckedCreateWithoutUsersInput>
  }

  export type idnbi_UserUpsertWithoutRolesInput = {
    update: XOR<idnbi_UserUpdateWithoutRolesInput, idnbi_UserUncheckedUpdateWithoutRolesInput>
    create: XOR<idnbi_UserCreateWithoutRolesInput, idnbi_UserUncheckedCreateWithoutRolesInput>
    where?: idnbi_UserWhereInput
  }

  export type idnbi_UserUpdateToOneWithWhereWithoutRolesInput = {
    where?: idnbi_UserWhereInput
    data: XOR<idnbi_UserUpdateWithoutRolesInput, idnbi_UserUncheckedUpdateWithoutRolesInput>
  }

  export type idnbi_UserUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login_ip?: NullableStringFieldUpdateOperationsInput | string | null
    failed_login_attempts?: IntFieldUpdateOperationsInput | number
    is_ip_blocked?: BoolFieldUpdateOperationsInput | boolean
    terms_accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    temp_password_flag?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_content?: idnbi_ContentUpdateManyWithoutCreated_byNestedInput
    notifications?: idnbi_UserNotificationStatusUpdateManyWithoutUserNestedInput
    password_reset?: idnbi_PasswordResetTokenUpdateManyWithoutUserNestedInput
    audit_logs?: idnbi_AuditLogUpdateManyWithoutUserNestedInput
  }

  export type idnbi_UserUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login_ip?: NullableStringFieldUpdateOperationsInput | string | null
    failed_login_attempts?: IntFieldUpdateOperationsInput | number
    is_ip_blocked?: BoolFieldUpdateOperationsInput | boolean
    terms_accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    temp_password_flag?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_content?: idnbi_ContentUncheckedUpdateManyWithoutCreated_byNestedInput
    notifications?: idnbi_UserNotificationStatusUncheckedUpdateManyWithoutUserNestedInput
    password_reset?: idnbi_PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
    audit_logs?: idnbi_AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type idnbi_RoleUpsertWithoutUsersInput = {
    update: XOR<idnbi_RoleUpdateWithoutUsersInput, idnbi_RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<idnbi_RoleCreateWithoutUsersInput, idnbi_RoleUncheckedCreateWithoutUsersInput>
    where?: idnbi_RoleWhereInput
  }

  export type idnbi_RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: idnbi_RoleWhereInput
    data: XOR<idnbi_RoleUpdateWithoutUsersInput, idnbi_RoleUncheckedUpdateWithoutUsersInput>
  }

  export type idnbi_RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: idnbi_RolePermissionUpdateManyWithoutRoleNestedInput
    menus?: idnbi_MenuRoleUpdateManyWithoutRoleNestedInput
  }

  export type idnbi_RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: idnbi_RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
    menus?: idnbi_MenuRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type idnbi_RolePermissionCreateWithoutPermissionInput = {
    created_at?: Date | string
    role: idnbi_RoleCreateNestedOneWithoutPermissionsInput
  }

  export type idnbi_RolePermissionUncheckedCreateWithoutPermissionInput = {
    roleId: string
    created_at?: Date | string
  }

  export type idnbi_RolePermissionCreateOrConnectWithoutPermissionInput = {
    where: idnbi_RolePermissionWhereUniqueInput
    create: XOR<idnbi_RolePermissionCreateWithoutPermissionInput, idnbi_RolePermissionUncheckedCreateWithoutPermissionInput>
  }

  export type idnbi_RolePermissionCreateManyPermissionInputEnvelope = {
    data: idnbi_RolePermissionCreateManyPermissionInput | idnbi_RolePermissionCreateManyPermissionInput[]
    skipDuplicates?: boolean
  }

  export type idnbi_RolePermissionUpsertWithWhereUniqueWithoutPermissionInput = {
    where: idnbi_RolePermissionWhereUniqueInput
    update: XOR<idnbi_RolePermissionUpdateWithoutPermissionInput, idnbi_RolePermissionUncheckedUpdateWithoutPermissionInput>
    create: XOR<idnbi_RolePermissionCreateWithoutPermissionInput, idnbi_RolePermissionUncheckedCreateWithoutPermissionInput>
  }

  export type idnbi_RolePermissionUpdateWithWhereUniqueWithoutPermissionInput = {
    where: idnbi_RolePermissionWhereUniqueInput
    data: XOR<idnbi_RolePermissionUpdateWithoutPermissionInput, idnbi_RolePermissionUncheckedUpdateWithoutPermissionInput>
  }

  export type idnbi_RolePermissionUpdateManyWithWhereWithoutPermissionInput = {
    where: idnbi_RolePermissionScalarWhereInput
    data: XOR<idnbi_RolePermissionUpdateManyMutationInput, idnbi_RolePermissionUncheckedUpdateManyWithoutPermissionInput>
  }

  export type idnbi_RoleCreateWithoutPermissionsInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    users?: idnbi_UserRoleCreateNestedManyWithoutRoleInput
    menus?: idnbi_MenuRoleCreateNestedManyWithoutRoleInput
  }

  export type idnbi_RoleUncheckedCreateWithoutPermissionsInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    users?: idnbi_UserRoleUncheckedCreateNestedManyWithoutRoleInput
    menus?: idnbi_MenuRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type idnbi_RoleCreateOrConnectWithoutPermissionsInput = {
    where: idnbi_RoleWhereUniqueInput
    create: XOR<idnbi_RoleCreateWithoutPermissionsInput, idnbi_RoleUncheckedCreateWithoutPermissionsInput>
  }

  export type idnbi_PermissionCreateWithoutRolesInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type idnbi_PermissionUncheckedCreateWithoutRolesInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type idnbi_PermissionCreateOrConnectWithoutRolesInput = {
    where: idnbi_PermissionWhereUniqueInput
    create: XOR<idnbi_PermissionCreateWithoutRolesInput, idnbi_PermissionUncheckedCreateWithoutRolesInput>
  }

  export type idnbi_RoleUpsertWithoutPermissionsInput = {
    update: XOR<idnbi_RoleUpdateWithoutPermissionsInput, idnbi_RoleUncheckedUpdateWithoutPermissionsInput>
    create: XOR<idnbi_RoleCreateWithoutPermissionsInput, idnbi_RoleUncheckedCreateWithoutPermissionsInput>
    where?: idnbi_RoleWhereInput
  }

  export type idnbi_RoleUpdateToOneWithWhereWithoutPermissionsInput = {
    where?: idnbi_RoleWhereInput
    data: XOR<idnbi_RoleUpdateWithoutPermissionsInput, idnbi_RoleUncheckedUpdateWithoutPermissionsInput>
  }

  export type idnbi_RoleUpdateWithoutPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: idnbi_UserRoleUpdateManyWithoutRoleNestedInput
    menus?: idnbi_MenuRoleUpdateManyWithoutRoleNestedInput
  }

  export type idnbi_RoleUncheckedUpdateWithoutPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: idnbi_UserRoleUncheckedUpdateManyWithoutRoleNestedInput
    menus?: idnbi_MenuRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type idnbi_PermissionUpsertWithoutRolesInput = {
    update: XOR<idnbi_PermissionUpdateWithoutRolesInput, idnbi_PermissionUncheckedUpdateWithoutRolesInput>
    create: XOR<idnbi_PermissionCreateWithoutRolesInput, idnbi_PermissionUncheckedCreateWithoutRolesInput>
    where?: idnbi_PermissionWhereInput
  }

  export type idnbi_PermissionUpdateToOneWithWhereWithoutRolesInput = {
    where?: idnbi_PermissionWhereInput
    data: XOR<idnbi_PermissionUpdateWithoutRolesInput, idnbi_PermissionUncheckedUpdateWithoutRolesInput>
  }

  export type idnbi_PermissionUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_PermissionUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_UserCreateWithoutCreated_contentInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: string
    profile_photo_url?: string | null
    last_login_at?: Date | string | null
    last_login_ip?: string | null
    failed_login_attempts?: number
    is_ip_blocked?: boolean
    terms_accepted_at?: Date | string | null
    invited_at?: Date | string | null
    registered_at?: Date | string
    temp_password_flag?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    roles?: idnbi_UserRoleCreateNestedManyWithoutUserInput
    notifications?: idnbi_UserNotificationStatusCreateNestedManyWithoutUserInput
    password_reset?: idnbi_PasswordResetTokenCreateNestedManyWithoutUserInput
    audit_logs?: idnbi_AuditLogCreateNestedManyWithoutUserInput
  }

  export type idnbi_UserUncheckedCreateWithoutCreated_contentInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: string
    profile_photo_url?: string | null
    last_login_at?: Date | string | null
    last_login_ip?: string | null
    failed_login_attempts?: number
    is_ip_blocked?: boolean
    terms_accepted_at?: Date | string | null
    invited_at?: Date | string | null
    registered_at?: Date | string
    temp_password_flag?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    roles?: idnbi_UserRoleUncheckedCreateNestedManyWithoutUserInput
    notifications?: idnbi_UserNotificationStatusUncheckedCreateNestedManyWithoutUserInput
    password_reset?: idnbi_PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
    audit_logs?: idnbi_AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type idnbi_UserCreateOrConnectWithoutCreated_contentInput = {
    where: idnbi_UserWhereUniqueInput
    create: XOR<idnbi_UserCreateWithoutCreated_contentInput, idnbi_UserUncheckedCreateWithoutCreated_contentInput>
  }

  export type idnbi_UserUpsertWithoutCreated_contentInput = {
    update: XOR<idnbi_UserUpdateWithoutCreated_contentInput, idnbi_UserUncheckedUpdateWithoutCreated_contentInput>
    create: XOR<idnbi_UserCreateWithoutCreated_contentInput, idnbi_UserUncheckedCreateWithoutCreated_contentInput>
    where?: idnbi_UserWhereInput
  }

  export type idnbi_UserUpdateToOneWithWhereWithoutCreated_contentInput = {
    where?: idnbi_UserWhereInput
    data: XOR<idnbi_UserUpdateWithoutCreated_contentInput, idnbi_UserUncheckedUpdateWithoutCreated_contentInput>
  }

  export type idnbi_UserUpdateWithoutCreated_contentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login_ip?: NullableStringFieldUpdateOperationsInput | string | null
    failed_login_attempts?: IntFieldUpdateOperationsInput | number
    is_ip_blocked?: BoolFieldUpdateOperationsInput | boolean
    terms_accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    temp_password_flag?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: idnbi_UserRoleUpdateManyWithoutUserNestedInput
    notifications?: idnbi_UserNotificationStatusUpdateManyWithoutUserNestedInput
    password_reset?: idnbi_PasswordResetTokenUpdateManyWithoutUserNestedInput
    audit_logs?: idnbi_AuditLogUpdateManyWithoutUserNestedInput
  }

  export type idnbi_UserUncheckedUpdateWithoutCreated_contentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login_ip?: NullableStringFieldUpdateOperationsInput | string | null
    failed_login_attempts?: IntFieldUpdateOperationsInput | number
    is_ip_blocked?: BoolFieldUpdateOperationsInput | boolean
    terms_accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    temp_password_flag?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: idnbi_UserRoleUncheckedUpdateManyWithoutUserNestedInput
    notifications?: idnbi_UserNotificationStatusUncheckedUpdateManyWithoutUserNestedInput
    password_reset?: idnbi_PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
    audit_logs?: idnbi_AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type idnbi_MenuItemCreateWithoutChildrenInput = {
    id?: string
    title: string
    order?: number
    icon_class?: string | null
    type: string
    target_url?: string | null
    content_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    parent?: idnbi_MenuItemCreateNestedOneWithoutChildrenInput
    roles?: idnbi_MenuRoleCreateNestedManyWithoutMenuInput
  }

  export type idnbi_MenuItemUncheckedCreateWithoutChildrenInput = {
    id?: string
    title: string
    parent_id?: string | null
    order?: number
    icon_class?: string | null
    type: string
    target_url?: string | null
    content_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    roles?: idnbi_MenuRoleUncheckedCreateNestedManyWithoutMenuInput
  }

  export type idnbi_MenuItemCreateOrConnectWithoutChildrenInput = {
    where: idnbi_MenuItemWhereUniqueInput
    create: XOR<idnbi_MenuItemCreateWithoutChildrenInput, idnbi_MenuItemUncheckedCreateWithoutChildrenInput>
  }

  export type idnbi_MenuItemCreateWithoutParentInput = {
    id?: string
    title: string
    order?: number
    icon_class?: string | null
    type: string
    target_url?: string | null
    content_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    children?: idnbi_MenuItemCreateNestedManyWithoutParentInput
    roles?: idnbi_MenuRoleCreateNestedManyWithoutMenuInput
  }

  export type idnbi_MenuItemUncheckedCreateWithoutParentInput = {
    id?: string
    title: string
    order?: number
    icon_class?: string | null
    type: string
    target_url?: string | null
    content_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    children?: idnbi_MenuItemUncheckedCreateNestedManyWithoutParentInput
    roles?: idnbi_MenuRoleUncheckedCreateNestedManyWithoutMenuInput
  }

  export type idnbi_MenuItemCreateOrConnectWithoutParentInput = {
    where: idnbi_MenuItemWhereUniqueInput
    create: XOR<idnbi_MenuItemCreateWithoutParentInput, idnbi_MenuItemUncheckedCreateWithoutParentInput>
  }

  export type idnbi_MenuItemCreateManyParentInputEnvelope = {
    data: idnbi_MenuItemCreateManyParentInput | idnbi_MenuItemCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type idnbi_MenuRoleCreateWithoutMenuInput = {
    created_at?: Date | string
    role: idnbi_RoleCreateNestedOneWithoutMenusInput
  }

  export type idnbi_MenuRoleUncheckedCreateWithoutMenuInput = {
    roleId: string
    created_at?: Date | string
  }

  export type idnbi_MenuRoleCreateOrConnectWithoutMenuInput = {
    where: idnbi_MenuRoleWhereUniqueInput
    create: XOR<idnbi_MenuRoleCreateWithoutMenuInput, idnbi_MenuRoleUncheckedCreateWithoutMenuInput>
  }

  export type idnbi_MenuRoleCreateManyMenuInputEnvelope = {
    data: idnbi_MenuRoleCreateManyMenuInput | idnbi_MenuRoleCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type idnbi_MenuItemUpsertWithoutChildrenInput = {
    update: XOR<idnbi_MenuItemUpdateWithoutChildrenInput, idnbi_MenuItemUncheckedUpdateWithoutChildrenInput>
    create: XOR<idnbi_MenuItemCreateWithoutChildrenInput, idnbi_MenuItemUncheckedCreateWithoutChildrenInput>
    where?: idnbi_MenuItemWhereInput
  }

  export type idnbi_MenuItemUpdateToOneWithWhereWithoutChildrenInput = {
    where?: idnbi_MenuItemWhereInput
    data: XOR<idnbi_MenuItemUpdateWithoutChildrenInput, idnbi_MenuItemUncheckedUpdateWithoutChildrenInput>
  }

  export type idnbi_MenuItemUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    icon_class?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    target_url?: NullableStringFieldUpdateOperationsInput | string | null
    content_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: idnbi_MenuItemUpdateOneWithoutChildrenNestedInput
    roles?: idnbi_MenuRoleUpdateManyWithoutMenuNestedInput
  }

  export type idnbi_MenuItemUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    icon_class?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    target_url?: NullableStringFieldUpdateOperationsInput | string | null
    content_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: idnbi_MenuRoleUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type idnbi_MenuItemUpsertWithWhereUniqueWithoutParentInput = {
    where: idnbi_MenuItemWhereUniqueInput
    update: XOR<idnbi_MenuItemUpdateWithoutParentInput, idnbi_MenuItemUncheckedUpdateWithoutParentInput>
    create: XOR<idnbi_MenuItemCreateWithoutParentInput, idnbi_MenuItemUncheckedCreateWithoutParentInput>
  }

  export type idnbi_MenuItemUpdateWithWhereUniqueWithoutParentInput = {
    where: idnbi_MenuItemWhereUniqueInput
    data: XOR<idnbi_MenuItemUpdateWithoutParentInput, idnbi_MenuItemUncheckedUpdateWithoutParentInput>
  }

  export type idnbi_MenuItemUpdateManyWithWhereWithoutParentInput = {
    where: idnbi_MenuItemScalarWhereInput
    data: XOR<idnbi_MenuItemUpdateManyMutationInput, idnbi_MenuItemUncheckedUpdateManyWithoutParentInput>
  }

  export type idnbi_MenuItemScalarWhereInput = {
    AND?: idnbi_MenuItemScalarWhereInput | idnbi_MenuItemScalarWhereInput[]
    OR?: idnbi_MenuItemScalarWhereInput[]
    NOT?: idnbi_MenuItemScalarWhereInput | idnbi_MenuItemScalarWhereInput[]
    id?: StringFilter<"idnbi_MenuItem"> | string
    title?: StringFilter<"idnbi_MenuItem"> | string
    parent_id?: StringNullableFilter<"idnbi_MenuItem"> | string | null
    order?: IntFilter<"idnbi_MenuItem"> | number
    icon_class?: StringNullableFilter<"idnbi_MenuItem"> | string | null
    type?: StringFilter<"idnbi_MenuItem"> | string
    target_url?: StringNullableFilter<"idnbi_MenuItem"> | string | null
    content_id?: StringNullableFilter<"idnbi_MenuItem"> | string | null
    created_at?: DateTimeFilter<"idnbi_MenuItem"> | Date | string
    updated_at?: DateTimeFilter<"idnbi_MenuItem"> | Date | string
  }

  export type idnbi_MenuRoleUpsertWithWhereUniqueWithoutMenuInput = {
    where: idnbi_MenuRoleWhereUniqueInput
    update: XOR<idnbi_MenuRoleUpdateWithoutMenuInput, idnbi_MenuRoleUncheckedUpdateWithoutMenuInput>
    create: XOR<idnbi_MenuRoleCreateWithoutMenuInput, idnbi_MenuRoleUncheckedCreateWithoutMenuInput>
  }

  export type idnbi_MenuRoleUpdateWithWhereUniqueWithoutMenuInput = {
    where: idnbi_MenuRoleWhereUniqueInput
    data: XOR<idnbi_MenuRoleUpdateWithoutMenuInput, idnbi_MenuRoleUncheckedUpdateWithoutMenuInput>
  }

  export type idnbi_MenuRoleUpdateManyWithWhereWithoutMenuInput = {
    where: idnbi_MenuRoleScalarWhereInput
    data: XOR<idnbi_MenuRoleUpdateManyMutationInput, idnbi_MenuRoleUncheckedUpdateManyWithoutMenuInput>
  }

  export type idnbi_MenuItemCreateWithoutRolesInput = {
    id?: string
    title: string
    order?: number
    icon_class?: string | null
    type: string
    target_url?: string | null
    content_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    parent?: idnbi_MenuItemCreateNestedOneWithoutChildrenInput
    children?: idnbi_MenuItemCreateNestedManyWithoutParentInput
  }

  export type idnbi_MenuItemUncheckedCreateWithoutRolesInput = {
    id?: string
    title: string
    parent_id?: string | null
    order?: number
    icon_class?: string | null
    type: string
    target_url?: string | null
    content_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    children?: idnbi_MenuItemUncheckedCreateNestedManyWithoutParentInput
  }

  export type idnbi_MenuItemCreateOrConnectWithoutRolesInput = {
    where: idnbi_MenuItemWhereUniqueInput
    create: XOR<idnbi_MenuItemCreateWithoutRolesInput, idnbi_MenuItemUncheckedCreateWithoutRolesInput>
  }

  export type idnbi_RoleCreateWithoutMenusInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    users?: idnbi_UserRoleCreateNestedManyWithoutRoleInput
    permissions?: idnbi_RolePermissionCreateNestedManyWithoutRoleInput
  }

  export type idnbi_RoleUncheckedCreateWithoutMenusInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    users?: idnbi_UserRoleUncheckedCreateNestedManyWithoutRoleInput
    permissions?: idnbi_RolePermissionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type idnbi_RoleCreateOrConnectWithoutMenusInput = {
    where: idnbi_RoleWhereUniqueInput
    create: XOR<idnbi_RoleCreateWithoutMenusInput, idnbi_RoleUncheckedCreateWithoutMenusInput>
  }

  export type idnbi_MenuItemUpsertWithoutRolesInput = {
    update: XOR<idnbi_MenuItemUpdateWithoutRolesInput, idnbi_MenuItemUncheckedUpdateWithoutRolesInput>
    create: XOR<idnbi_MenuItemCreateWithoutRolesInput, idnbi_MenuItemUncheckedCreateWithoutRolesInput>
    where?: idnbi_MenuItemWhereInput
  }

  export type idnbi_MenuItemUpdateToOneWithWhereWithoutRolesInput = {
    where?: idnbi_MenuItemWhereInput
    data: XOR<idnbi_MenuItemUpdateWithoutRolesInput, idnbi_MenuItemUncheckedUpdateWithoutRolesInput>
  }

  export type idnbi_MenuItemUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    icon_class?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    target_url?: NullableStringFieldUpdateOperationsInput | string | null
    content_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: idnbi_MenuItemUpdateOneWithoutChildrenNestedInput
    children?: idnbi_MenuItemUpdateManyWithoutParentNestedInput
  }

  export type idnbi_MenuItemUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    icon_class?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    target_url?: NullableStringFieldUpdateOperationsInput | string | null
    content_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: idnbi_MenuItemUncheckedUpdateManyWithoutParentNestedInput
  }

  export type idnbi_RoleUpsertWithoutMenusInput = {
    update: XOR<idnbi_RoleUpdateWithoutMenusInput, idnbi_RoleUncheckedUpdateWithoutMenusInput>
    create: XOR<idnbi_RoleCreateWithoutMenusInput, idnbi_RoleUncheckedCreateWithoutMenusInput>
    where?: idnbi_RoleWhereInput
  }

  export type idnbi_RoleUpdateToOneWithWhereWithoutMenusInput = {
    where?: idnbi_RoleWhereInput
    data: XOR<idnbi_RoleUpdateWithoutMenusInput, idnbi_RoleUncheckedUpdateWithoutMenusInput>
  }

  export type idnbi_RoleUpdateWithoutMenusInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: idnbi_UserRoleUpdateManyWithoutRoleNestedInput
    permissions?: idnbi_RolePermissionUpdateManyWithoutRoleNestedInput
  }

  export type idnbi_RoleUncheckedUpdateWithoutMenusInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: idnbi_UserRoleUncheckedUpdateManyWithoutRoleNestedInput
    permissions?: idnbi_RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type idnbi_UserNotificationStatusCreateWithoutNotificationInput = {
    read?: boolean
    read_at?: Date | string | null
    created_at?: Date | string
    user: idnbi_UserCreateNestedOneWithoutNotificationsInput
  }

  export type idnbi_UserNotificationStatusUncheckedCreateWithoutNotificationInput = {
    userId: string
    read?: boolean
    read_at?: Date | string | null
    created_at?: Date | string
  }

  export type idnbi_UserNotificationStatusCreateOrConnectWithoutNotificationInput = {
    where: idnbi_UserNotificationStatusWhereUniqueInput
    create: XOR<idnbi_UserNotificationStatusCreateWithoutNotificationInput, idnbi_UserNotificationStatusUncheckedCreateWithoutNotificationInput>
  }

  export type idnbi_UserNotificationStatusCreateManyNotificationInputEnvelope = {
    data: idnbi_UserNotificationStatusCreateManyNotificationInput | idnbi_UserNotificationStatusCreateManyNotificationInput[]
    skipDuplicates?: boolean
  }

  export type idnbi_UserNotificationStatusUpsertWithWhereUniqueWithoutNotificationInput = {
    where: idnbi_UserNotificationStatusWhereUniqueInput
    update: XOR<idnbi_UserNotificationStatusUpdateWithoutNotificationInput, idnbi_UserNotificationStatusUncheckedUpdateWithoutNotificationInput>
    create: XOR<idnbi_UserNotificationStatusCreateWithoutNotificationInput, idnbi_UserNotificationStatusUncheckedCreateWithoutNotificationInput>
  }

  export type idnbi_UserNotificationStatusUpdateWithWhereUniqueWithoutNotificationInput = {
    where: idnbi_UserNotificationStatusWhereUniqueInput
    data: XOR<idnbi_UserNotificationStatusUpdateWithoutNotificationInput, idnbi_UserNotificationStatusUncheckedUpdateWithoutNotificationInput>
  }

  export type idnbi_UserNotificationStatusUpdateManyWithWhereWithoutNotificationInput = {
    where: idnbi_UserNotificationStatusScalarWhereInput
    data: XOR<idnbi_UserNotificationStatusUpdateManyMutationInput, idnbi_UserNotificationStatusUncheckedUpdateManyWithoutNotificationInput>
  }

  export type idnbi_UserCreateWithoutNotificationsInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: string
    profile_photo_url?: string | null
    last_login_at?: Date | string | null
    last_login_ip?: string | null
    failed_login_attempts?: number
    is_ip_blocked?: boolean
    terms_accepted_at?: Date | string | null
    invited_at?: Date | string | null
    registered_at?: Date | string
    temp_password_flag?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    roles?: idnbi_UserRoleCreateNestedManyWithoutUserInput
    created_content?: idnbi_ContentCreateNestedManyWithoutCreated_byInput
    password_reset?: idnbi_PasswordResetTokenCreateNestedManyWithoutUserInput
    audit_logs?: idnbi_AuditLogCreateNestedManyWithoutUserInput
  }

  export type idnbi_UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: string
    profile_photo_url?: string | null
    last_login_at?: Date | string | null
    last_login_ip?: string | null
    failed_login_attempts?: number
    is_ip_blocked?: boolean
    terms_accepted_at?: Date | string | null
    invited_at?: Date | string | null
    registered_at?: Date | string
    temp_password_flag?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    roles?: idnbi_UserRoleUncheckedCreateNestedManyWithoutUserInput
    created_content?: idnbi_ContentUncheckedCreateNestedManyWithoutCreated_byInput
    password_reset?: idnbi_PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
    audit_logs?: idnbi_AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type idnbi_UserCreateOrConnectWithoutNotificationsInput = {
    where: idnbi_UserWhereUniqueInput
    create: XOR<idnbi_UserCreateWithoutNotificationsInput, idnbi_UserUncheckedCreateWithoutNotificationsInput>
  }

  export type idnbi_NotificationCreateWithoutUser_statusesInput = {
    id?: string
    title: string
    message: string
    type?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type idnbi_NotificationUncheckedCreateWithoutUser_statusesInput = {
    id?: string
    title: string
    message: string
    type?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type idnbi_NotificationCreateOrConnectWithoutUser_statusesInput = {
    where: idnbi_NotificationWhereUniqueInput
    create: XOR<idnbi_NotificationCreateWithoutUser_statusesInput, idnbi_NotificationUncheckedCreateWithoutUser_statusesInput>
  }

  export type idnbi_UserUpsertWithoutNotificationsInput = {
    update: XOR<idnbi_UserUpdateWithoutNotificationsInput, idnbi_UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<idnbi_UserCreateWithoutNotificationsInput, idnbi_UserUncheckedCreateWithoutNotificationsInput>
    where?: idnbi_UserWhereInput
  }

  export type idnbi_UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: idnbi_UserWhereInput
    data: XOR<idnbi_UserUpdateWithoutNotificationsInput, idnbi_UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type idnbi_UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login_ip?: NullableStringFieldUpdateOperationsInput | string | null
    failed_login_attempts?: IntFieldUpdateOperationsInput | number
    is_ip_blocked?: BoolFieldUpdateOperationsInput | boolean
    terms_accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    temp_password_flag?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: idnbi_UserRoleUpdateManyWithoutUserNestedInput
    created_content?: idnbi_ContentUpdateManyWithoutCreated_byNestedInput
    password_reset?: idnbi_PasswordResetTokenUpdateManyWithoutUserNestedInput
    audit_logs?: idnbi_AuditLogUpdateManyWithoutUserNestedInput
  }

  export type idnbi_UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login_ip?: NullableStringFieldUpdateOperationsInput | string | null
    failed_login_attempts?: IntFieldUpdateOperationsInput | number
    is_ip_blocked?: BoolFieldUpdateOperationsInput | boolean
    terms_accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    temp_password_flag?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: idnbi_UserRoleUncheckedUpdateManyWithoutUserNestedInput
    created_content?: idnbi_ContentUncheckedUpdateManyWithoutCreated_byNestedInput
    password_reset?: idnbi_PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
    audit_logs?: idnbi_AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type idnbi_NotificationUpsertWithoutUser_statusesInput = {
    update: XOR<idnbi_NotificationUpdateWithoutUser_statusesInput, idnbi_NotificationUncheckedUpdateWithoutUser_statusesInput>
    create: XOR<idnbi_NotificationCreateWithoutUser_statusesInput, idnbi_NotificationUncheckedCreateWithoutUser_statusesInput>
    where?: idnbi_NotificationWhereInput
  }

  export type idnbi_NotificationUpdateToOneWithWhereWithoutUser_statusesInput = {
    where?: idnbi_NotificationWhereInput
    data: XOR<idnbi_NotificationUpdateWithoutUser_statusesInput, idnbi_NotificationUncheckedUpdateWithoutUser_statusesInput>
  }

  export type idnbi_NotificationUpdateWithoutUser_statusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_NotificationUncheckedUpdateWithoutUser_statusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_UserCreateWithoutAudit_logsInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: string
    profile_photo_url?: string | null
    last_login_at?: Date | string | null
    last_login_ip?: string | null
    failed_login_attempts?: number
    is_ip_blocked?: boolean
    terms_accepted_at?: Date | string | null
    invited_at?: Date | string | null
    registered_at?: Date | string
    temp_password_flag?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    roles?: idnbi_UserRoleCreateNestedManyWithoutUserInput
    created_content?: idnbi_ContentCreateNestedManyWithoutCreated_byInput
    notifications?: idnbi_UserNotificationStatusCreateNestedManyWithoutUserInput
    password_reset?: idnbi_PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type idnbi_UserUncheckedCreateWithoutAudit_logsInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: string
    profile_photo_url?: string | null
    last_login_at?: Date | string | null
    last_login_ip?: string | null
    failed_login_attempts?: number
    is_ip_blocked?: boolean
    terms_accepted_at?: Date | string | null
    invited_at?: Date | string | null
    registered_at?: Date | string
    temp_password_flag?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    roles?: idnbi_UserRoleUncheckedCreateNestedManyWithoutUserInput
    created_content?: idnbi_ContentUncheckedCreateNestedManyWithoutCreated_byInput
    notifications?: idnbi_UserNotificationStatusUncheckedCreateNestedManyWithoutUserInput
    password_reset?: idnbi_PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type idnbi_UserCreateOrConnectWithoutAudit_logsInput = {
    where: idnbi_UserWhereUniqueInput
    create: XOR<idnbi_UserCreateWithoutAudit_logsInput, idnbi_UserUncheckedCreateWithoutAudit_logsInput>
  }

  export type idnbi_UserUpsertWithoutAudit_logsInput = {
    update: XOR<idnbi_UserUpdateWithoutAudit_logsInput, idnbi_UserUncheckedUpdateWithoutAudit_logsInput>
    create: XOR<idnbi_UserCreateWithoutAudit_logsInput, idnbi_UserUncheckedCreateWithoutAudit_logsInput>
    where?: idnbi_UserWhereInput
  }

  export type idnbi_UserUpdateToOneWithWhereWithoutAudit_logsInput = {
    where?: idnbi_UserWhereInput
    data: XOR<idnbi_UserUpdateWithoutAudit_logsInput, idnbi_UserUncheckedUpdateWithoutAudit_logsInput>
  }

  export type idnbi_UserUpdateWithoutAudit_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login_ip?: NullableStringFieldUpdateOperationsInput | string | null
    failed_login_attempts?: IntFieldUpdateOperationsInput | number
    is_ip_blocked?: BoolFieldUpdateOperationsInput | boolean
    terms_accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    temp_password_flag?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: idnbi_UserRoleUpdateManyWithoutUserNestedInput
    created_content?: idnbi_ContentUpdateManyWithoutCreated_byNestedInput
    notifications?: idnbi_UserNotificationStatusUpdateManyWithoutUserNestedInput
    password_reset?: idnbi_PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type idnbi_UserUncheckedUpdateWithoutAudit_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login_ip?: NullableStringFieldUpdateOperationsInput | string | null
    failed_login_attempts?: IntFieldUpdateOperationsInput | number
    is_ip_blocked?: BoolFieldUpdateOperationsInput | boolean
    terms_accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    temp_password_flag?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: idnbi_UserRoleUncheckedUpdateManyWithoutUserNestedInput
    created_content?: idnbi_ContentUncheckedUpdateManyWithoutCreated_byNestedInput
    notifications?: idnbi_UserNotificationStatusUncheckedUpdateManyWithoutUserNestedInput
    password_reset?: idnbi_PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type idnbi_UserCreateWithoutPassword_resetInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: string
    profile_photo_url?: string | null
    last_login_at?: Date | string | null
    last_login_ip?: string | null
    failed_login_attempts?: number
    is_ip_blocked?: boolean
    terms_accepted_at?: Date | string | null
    invited_at?: Date | string | null
    registered_at?: Date | string
    temp_password_flag?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    roles?: idnbi_UserRoleCreateNestedManyWithoutUserInput
    created_content?: idnbi_ContentCreateNestedManyWithoutCreated_byInput
    notifications?: idnbi_UserNotificationStatusCreateNestedManyWithoutUserInput
    audit_logs?: idnbi_AuditLogCreateNestedManyWithoutUserInput
  }

  export type idnbi_UserUncheckedCreateWithoutPassword_resetInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: string
    profile_photo_url?: string | null
    last_login_at?: Date | string | null
    last_login_ip?: string | null
    failed_login_attempts?: number
    is_ip_blocked?: boolean
    terms_accepted_at?: Date | string | null
    invited_at?: Date | string | null
    registered_at?: Date | string
    temp_password_flag?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    roles?: idnbi_UserRoleUncheckedCreateNestedManyWithoutUserInput
    created_content?: idnbi_ContentUncheckedCreateNestedManyWithoutCreated_byInput
    notifications?: idnbi_UserNotificationStatusUncheckedCreateNestedManyWithoutUserInput
    audit_logs?: idnbi_AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type idnbi_UserCreateOrConnectWithoutPassword_resetInput = {
    where: idnbi_UserWhereUniqueInput
    create: XOR<idnbi_UserCreateWithoutPassword_resetInput, idnbi_UserUncheckedCreateWithoutPassword_resetInput>
  }

  export type idnbi_UserUpsertWithoutPassword_resetInput = {
    update: XOR<idnbi_UserUpdateWithoutPassword_resetInput, idnbi_UserUncheckedUpdateWithoutPassword_resetInput>
    create: XOR<idnbi_UserCreateWithoutPassword_resetInput, idnbi_UserUncheckedCreateWithoutPassword_resetInput>
    where?: idnbi_UserWhereInput
  }

  export type idnbi_UserUpdateToOneWithWhereWithoutPassword_resetInput = {
    where?: idnbi_UserWhereInput
    data: XOR<idnbi_UserUpdateWithoutPassword_resetInput, idnbi_UserUncheckedUpdateWithoutPassword_resetInput>
  }

  export type idnbi_UserUpdateWithoutPassword_resetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login_ip?: NullableStringFieldUpdateOperationsInput | string | null
    failed_login_attempts?: IntFieldUpdateOperationsInput | number
    is_ip_blocked?: BoolFieldUpdateOperationsInput | boolean
    terms_accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    temp_password_flag?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: idnbi_UserRoleUpdateManyWithoutUserNestedInput
    created_content?: idnbi_ContentUpdateManyWithoutCreated_byNestedInput
    notifications?: idnbi_UserNotificationStatusUpdateManyWithoutUserNestedInput
    audit_logs?: idnbi_AuditLogUpdateManyWithoutUserNestedInput
  }

  export type idnbi_UserUncheckedUpdateWithoutPassword_resetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login_ip?: NullableStringFieldUpdateOperationsInput | string | null
    failed_login_attempts?: IntFieldUpdateOperationsInput | number
    is_ip_blocked?: BoolFieldUpdateOperationsInput | boolean
    terms_accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    temp_password_flag?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: idnbi_UserRoleUncheckedUpdateManyWithoutUserNestedInput
    created_content?: idnbi_ContentUncheckedUpdateManyWithoutCreated_byNestedInput
    notifications?: idnbi_UserNotificationStatusUncheckedUpdateManyWithoutUserNestedInput
    audit_logs?: idnbi_AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type idnbi_UserRoleCreateManyUserInput = {
    roleId: string
    created_at?: Date | string
  }

  export type idnbi_ContentCreateManyCreated_byInput = {
    id?: string
    title: string
    slug: string
    type?: string
    content_data: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type idnbi_UserNotificationStatusCreateManyUserInput = {
    notificationId: string
    read?: boolean
    read_at?: Date | string | null
    created_at?: Date | string
  }

  export type idnbi_PasswordResetTokenCreateManyUserInput = {
    id?: string
    token: string
    expires_at: Date | string
    is_used?: boolean
    created_at?: Date | string
  }

  export type idnbi_AuditLogCreateManyUserInput = {
    id?: string
    action: string
    resource?: string | null
    resourceId?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    user_agent?: string | null
    created_at?: Date | string
  }

  export type idnbi_UserRoleUpdateWithoutUserInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: idnbi_RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type idnbi_UserRoleUncheckedUpdateWithoutUserInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_UserRoleUncheckedUpdateManyWithoutUserInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_ContentUpdateWithoutCreated_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content_data?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_ContentUncheckedUpdateWithoutCreated_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content_data?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_ContentUncheckedUpdateManyWithoutCreated_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content_data?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_UserNotificationStatusUpdateWithoutUserInput = {
    read?: BoolFieldUpdateOperationsInput | boolean
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: idnbi_NotificationUpdateOneRequiredWithoutUser_statusesNestedInput
  }

  export type idnbi_UserNotificationStatusUncheckedUpdateWithoutUserInput = {
    notificationId?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_UserNotificationStatusUncheckedUpdateManyWithoutUserInput = {
    notificationId?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_PasswordResetTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_PasswordResetTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_PasswordResetTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_AuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_AuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_UserRoleCreateManyRoleInput = {
    userId: string
    created_at?: Date | string
  }

  export type idnbi_RolePermissionCreateManyRoleInput = {
    permissionId: string
    created_at?: Date | string
  }

  export type idnbi_MenuRoleCreateManyRoleInput = {
    menuId: string
    created_at?: Date | string
  }

  export type idnbi_UserRoleUpdateWithoutRoleInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: idnbi_UserUpdateOneRequiredWithoutRolesNestedInput
  }

  export type idnbi_UserRoleUncheckedUpdateWithoutRoleInput = {
    userId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_UserRoleUncheckedUpdateManyWithoutRoleInput = {
    userId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_RolePermissionUpdateWithoutRoleInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: idnbi_PermissionUpdateOneRequiredWithoutRolesNestedInput
  }

  export type idnbi_RolePermissionUncheckedUpdateWithoutRoleInput = {
    permissionId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_RolePermissionUncheckedUpdateManyWithoutRoleInput = {
    permissionId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_MenuRoleUpdateWithoutRoleInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    menu?: idnbi_MenuItemUpdateOneRequiredWithoutRolesNestedInput
  }

  export type idnbi_MenuRoleUncheckedUpdateWithoutRoleInput = {
    menuId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_MenuRoleUncheckedUpdateManyWithoutRoleInput = {
    menuId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_RolePermissionCreateManyPermissionInput = {
    roleId: string
    created_at?: Date | string
  }

  export type idnbi_RolePermissionUpdateWithoutPermissionInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: idnbi_RoleUpdateOneRequiredWithoutPermissionsNestedInput
  }

  export type idnbi_RolePermissionUncheckedUpdateWithoutPermissionInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_RolePermissionUncheckedUpdateManyWithoutPermissionInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_MenuItemCreateManyParentInput = {
    id?: string
    title: string
    order?: number
    icon_class?: string | null
    type: string
    target_url?: string | null
    content_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type idnbi_MenuRoleCreateManyMenuInput = {
    roleId: string
    created_at?: Date | string
  }

  export type idnbi_MenuItemUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    icon_class?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    target_url?: NullableStringFieldUpdateOperationsInput | string | null
    content_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: idnbi_MenuItemUpdateManyWithoutParentNestedInput
    roles?: idnbi_MenuRoleUpdateManyWithoutMenuNestedInput
  }

  export type idnbi_MenuItemUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    icon_class?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    target_url?: NullableStringFieldUpdateOperationsInput | string | null
    content_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: idnbi_MenuItemUncheckedUpdateManyWithoutParentNestedInput
    roles?: idnbi_MenuRoleUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type idnbi_MenuItemUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    icon_class?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    target_url?: NullableStringFieldUpdateOperationsInput | string | null
    content_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_MenuRoleUpdateWithoutMenuInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: idnbi_RoleUpdateOneRequiredWithoutMenusNestedInput
  }

  export type idnbi_MenuRoleUncheckedUpdateWithoutMenuInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_MenuRoleUncheckedUpdateManyWithoutMenuInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_UserNotificationStatusCreateManyNotificationInput = {
    userId: string
    read?: boolean
    read_at?: Date | string | null
    created_at?: Date | string
  }

  export type idnbi_UserNotificationStatusUpdateWithoutNotificationInput = {
    read?: BoolFieldUpdateOperationsInput | boolean
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: idnbi_UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type idnbi_UserNotificationStatusUncheckedUpdateWithoutNotificationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idnbi_UserNotificationStatusUncheckedUpdateManyWithoutNotificationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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