import { describe, expect, it } from 'vitest'
import { banks } from '../banks'

const mockData = banks.Caixabank

describe('auth0', () => {
  it('Should be an object', () => {
    expect(typeof mockData).toBe('object')
  })
  it('Should request a login to the Hub', () => {

  })
})
