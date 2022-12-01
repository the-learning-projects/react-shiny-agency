import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Home, sum } from './Home'
import { ThemeProvider } from '@/contexts'

describe('The home component', () => {
  test('Ma fonction sum', () => {
    const result = sum(3, 7)
    expect(result).toBe(10)
  })

  it('should render title', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    )

    // screen.debug()

    expect(
      screen.getByText(
        'Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents'
      )
    ).toBeTruthy()

    expect(screen.getByRole('heading', { level: 1 })).toBeTruthy()

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents'
      })
    ).toBeTruthy()
  })
})