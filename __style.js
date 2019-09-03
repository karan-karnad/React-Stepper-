import { padding } from 'polished'

export const __outerBox = () => ({
	position: 'initial',
	height: '54',
})

export const __step = ({
	stepValue2,
	indexValue,
	length,
	active,
	completed,
	showAnimation,
}) => ({
	position: 'relative',
	height: '54',
	width: length > 2 ? '33.33%' : '50%',
	display: 'flex',
	justifyContent: 'center',
	flexDirection: stepValue2 ? 'column' : 'row',
	alignItems: 'center',
	...padding('12px', '10px', '15px'),
	'&:before': {
		content: "''",
		display: 'block',
		position: 'absolute',
		width: '16',
		height: '16',
		borderRadius: '50%',
		background: '#ffffff',
		border: 'solid 2px #333333',
		zIndex: '99',
		top: '100%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		transition: 'all 0.3s ease-in',
		transitionDelay: active ? '0.3s' : '0s',
	},
	'&:after': {
		content: "''",
		display: indexValue < length - 1 ? 'block' : 'none',
		position: 'absolute',
		left: '50%',
		bottom: '0',
		width: '0',
		height: '1',
		backgroundColor: '#333333',
		transition: 'all 0.3s linear',
		transitionDelay: active ? '0.3s' : '0s',
		zIndex: '80',
	},
	'& span': {
		position: 'absolute',
		zIndex: '100',
		background: '#fff',
		width: '0',
		height: '0',
		transform: 'translate(-50%, -50%)',
		transition: 'width height 0.5s ease-in-out',
		transitionDelay: active ? '0.5s' : '0s',
	},
	extend: [
		{
			condition: !active && !completed,
			style: {
				color: '#cccccc',
				'&:before': {
					border: 'solid 1px #cccccc',
					width: '12',
					height: '12',
				},
			},
		},
		{
			condition: showAnimation,
			style: {
				'&:after': {
					width: '100%',
				},
			},
		},
		{
			condition: completed,
			style: {
				'&:before': {
					background: '#333333',
				},
				'& span': {
					width: '4',
					height: '9',
					background: '#333333',
					border: '1px solid',
					top: length < 3 ? '89%' : '88%',
					// left: length < 3 ? '49%' : '48%',
					borderColor: 'transparent #fff #fff transparent',
					transform: 'rotate(45deg)',
				},
			},
		},
		{
			condition: active && !completed,
			style: {
				'& span': {
					width: '8',
					height: '8',
					background: '#333333',
					borderRadius: '50%',
					top: '100%',
					left: '50%',
				},
			},
		},
		{
			condition: length > 3,
			style: {
				width: '25%',
			},
		},
	],
})

export const __stepperContent = ({ active, completed }) => ({
	color: '#333333',
	lineHeight: '1.17',
	overflow: 'hidden',
	whiteSpace: 'nowrap',
	textAlign: 'center',
	textOverflow: 'ellipsis',
	width: '90%',
	fontSize: '12',
	extend: [
		{
			condition: !active && !completed,
			style: {
				color: '#cccccc',
				'&:before': {
					border: 'solid 1px #cccccc',
				},
			},
		},
	],
})

export const __stepWrapper = () => ({
	display: 'flex',
})

export const __stepperMain = () => ({
	position: 'fixed',
	width: '100%',
	zIndex: '100',
	backgroundColor: '#ffffff',
	borderBottom: '1px solid #eeeeee',
})

export const __container = ({ isDesktop }) => ({
	width: isDesktop ? '700px' : '100%',
	margin: '0 auto',
})
