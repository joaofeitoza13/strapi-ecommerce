import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Badge, Box, IconButton } from '@mui/material'

import {
	PersonOutline,
	ShoppingBagOutlined,
	MenuOutlined,
	SearchOutlined,
} from '@mui/icons-material'

// import { shades } from '../../theme'
import { setIsCartOpen } from '../../state'

const NavBar = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const cart = useSelector((state) => state.cart.cart)

	return (
		<Box className="flex justify-center w-[50%] h-[60px] bg-white text-black fixed top-0 left-0 z-[1]">
			<Box className="w-[80%] m-auto flex justify-between items-center">
				<Box
					onClick={() => navigate('/')}
					sx={{ '&:hover': { cursor: 'pointer' } }}
				>
					ECOMMER
				</Box>
				<Box className="flex justify-between gap-[20px] z-[2]">
					<IconButton sx={{ color: 'black' }}>
						<SearchOutlined />
					</IconButton>
					<IconButton sx={{ color: 'black' }}>
						<PersonOutline />
					</IconButton>
					<Badge
						className=""
						badgeContent={cart.length}
						invisible={cart.length === 0}
						sx={{
							'& .MuiBadge-badge': {
								right: 5,
								top: 5,
								padding: '0 4px',
								height: '14px',
								minWidth: '13px',
							},
						}}
					>
						<IconButton
							onClick={() => dispatch(setIsCartOpen({}))}
							sx={{ color: 'black' }}
						>
							<ShoppingBagOutlined />
						</IconButton>
					</Badge>
					<IconButton sx={{ color: 'black' }}>
						<MenuOutlined />
					</IconButton>
				</Box>
			</Box>
		</Box>
	)
}

export default NavBar

