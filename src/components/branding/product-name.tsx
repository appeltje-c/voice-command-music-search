/*
    Voice command music search
    Author : Martijn Benjamin<martijn.teigeler@gmail.com>

    This program has been created as part of the 
    Incentro Technical Assessment.

    This program is shared in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR ANY PARTICULAR PURPOSE.
*/
import { Typography, TypographyPropsVariantOverrides } from '@mui/material'
import { OverridableStringUnion } from '@mui/types'
import { Variant } from '@mui/material/styles/createTypography'

type ProductNameProps = {
    variant?: OverridableStringUnion<Variant | 'inherit', TypographyPropsVariantOverrides>
}

export const ProductName = ({ variant = 'h4' }: ProductNameProps) => {
    return (
        <Typography sx={{ flexGrow: 1 }} variant={variant}>
            <span>Hi!</span>
        </Typography>
    )
}
