import { describe, expectTypeOf } from 'vitest'
import func from '@/index'

describe('index.ts test', () => {
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  expectTypeOf(func).returns.toEqualTypeOf<void>()
})
