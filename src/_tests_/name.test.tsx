/*
    Incentrify - Voice command music search
    Author : Martijn Benjamin<martijn.teigeler@gmail.com>

    This program has been created as part of the 
    Incentro Technical Assessment.

    This program is shared in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR ANY PARTICULAR PURPOSE.
*/
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { ProductName } from '@components/branding'

describe('Branding', () => {

    it('renders name h1', async () => {

        render(<ProductName variant={'h1'} />)
        await screen.findByRole('heading')
        expect(screen.getByRole('heading').textContent).toBe('Incentrify!')
    })
})
