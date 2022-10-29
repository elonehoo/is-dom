import { describe, expect, it } from 'vitest'
import isDom from '~/index'

// @vitest-environment happy-dom
describe('should', () => {
  it('exported', () => {
    expect(isDom(null)).toEqual(false)
    expect(isDom(false)).toEqual(false)
    expect(isDom(new Date())).toEqual(false)
    expect(isDom([])).toEqual(false)
    expect(isDom(2)).toEqual(false)
    expect(isDom(`bar`)).toEqual(false)
    expect(isDom(/asda/)).toEqual(false)
    expect(isDom({})).toEqual(false)

    expect(isDom({ nodeType: 1, nodeName: `BODY` })).toEqual(true)
    expect(isDom(document.createElement(`body`))).toEqual(true)
    expect(isDom(window)).toEqual(false)
    expect(isDom(document)).toEqual(true)


  })
})
