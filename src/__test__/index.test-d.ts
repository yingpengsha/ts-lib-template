import { describe, expectTypeOf, it } from 'vitest'

import fn from '../'

describe('fn', () => {
  it('should return void', () => {
    expectTypeOf(fn).returns.toBeVoid()
  })
})
