import { StudioModule } from './studio.module'

describe('StudioModule', () => {
  let studioModule: StudioModule

  beforeEach(() => {
    studioModule = new StudioModule()
  })

  it('should create an instance', () => {
    expect(studioModule).toBeTruthy()
  })
})
