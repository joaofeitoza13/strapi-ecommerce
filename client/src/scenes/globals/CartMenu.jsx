import { Box, Button, Divider, IconButton, Typography } from '@mui/material'
import { UseSelector, useDispatch, useSelector } from 'react-redux/es/hooks/useSelector'
import { CloseIcon } from '@mui/material/Close'
import { AddIcon } from '@mui/material/Add'
import { RemoveIcon } from '@mui/material/Remove'

// import styled from '@emotion/styled'
import { shades } from '../../theme'

import { decreaseCount, increaseCount, removeFromCart, setIsCartOpen } from '../../state'

import { useNavigate } from 'react-router-dom'

const FlexBox = 'flex justify-between align-center'

function CartMenu() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const cart = useSelector((state) => state.cart.cart)
	const isCartOpen = useSelector((state) => state.cart.isCartOpen)

	const totalPrice = cart.reduce((total, item) => {
		return total + item.count * item.attributes.price
	}, 0)

	return (
		// MODAL OVERLAY
		<Box
			display={isCartOpen ? 'block' : 'none'}
			className=" bg-black/40 fixed z-10 w-full h-full top-0 left-0 overflow-auto"
		>
			{/* MODAL */}
			<Box className="fixed right-0 bottom-0 w-max-[400px, 30%] h-full bg-white">
				<Box className="p-[30px] overflow-auto h-full">
					{/* HEADER */}
					<Box className="flex justify-between items-center mb-[15px]">
						<Typography variant="h3">SHOPPING CART ({cart.length})</Typography>
						<IconButton onClick={() => dispatch(setIsCartOpen)}>
							<CloseIcon />
						</IconButton>
					</Box>
					{/* CART LIST */}
				</Box>
			</Box>
		</Box>
	)
}

export default CartMenu

