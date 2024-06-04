/*
    Voice command music search
    Author : Martijn Benjamin<martijn.teigeler@gmail.com>

    This program has been created as part of the 
    Incentro Technical Assessment.

    This program is shared in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR ANY PARTICULAR PURPOSE.
*/
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom'

export const NeedsToken = ({ children }: { children: ReactNode }) => {
    const hasToken = localStorage.getItem('access_token') !== null
    return hasToken === true ? (children) : (<Navigate to={'/login'} replace />)
}
