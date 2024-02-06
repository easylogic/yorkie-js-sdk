/*
 * Copyright 2020 The Yorkie Authors. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Client } from '@yorkie-js-sdk/src/client/client';
import { Document } from '@yorkie-js-sdk/src/document/document';
import { Text } from '@yorkie-js-sdk/src/document/json/text';
import { Tree } from '@yorkie-js-sdk/src/document/json/tree';
import { Counter } from '@yorkie-js-sdk/src/document/json/counter';
import { CounterType } from '@yorkie-js-sdk/src/document/crdt/counter';
import * as Devtools from '@yorkie-js-sdk/src/devtools/types';

export * from '@yorkie-js-sdk/src/client/client';
export * from '@yorkie-js-sdk/src/document/document';
export * from '@yorkie-js-sdk/src/util/observable';
export * from '@yorkie-js-sdk/src/document/time/ticket';
export * from '@yorkie-js-sdk/src/document/time/actor_id';
export * from '@yorkie-js-sdk/src/document/operation/operation';

export * from '@yorkie-js-sdk/src/document/crdt/primitive';
import { Primitive } from '@yorkie-js-sdk/src/document/crdt/primitive';

export * from '@yorkie-js-sdk/src/document/json/element';
export * from '@yorkie-js-sdk/src/document/json/object';
export * from '@yorkie-js-sdk/src/document/json/array';
export * from '@yorkie-js-sdk/src/document/json/counter';
export * from '@yorkie-js-sdk/src/document/crdt/counter';
export * from '@yorkie-js-sdk/src/document/json/text';
export * from '@yorkie-js-sdk/src/document/json/tree';
export * from '@yorkie-js-sdk/src/document/change/change';
export * from '@yorkie-js-sdk/src/api/converter';

export * from '@yorkie-js-sdk/src/util/logger';
export * from '@yorkie-js-sdk/src/util/logger';

export * from '@yorkie-js-sdk/src/devtools/protocol';
export { Devtools };

/**
 * The top-level yorkie namespace with additional properties.
 *
 * In production, this will be called exactly once and the result
 * assigned to the `yorkie` global.
 *
 * e.g) `new yorkie.Client(...);`
 *
 * @public
 */
const yorkie = {
  Client,
  Document,
  Primitive,
  Text,
  Counter,
  Tree,
  IntType: CounterType.IntegerCnt,
  LongType: CounterType.LongCnt,
};

export default yorkie;