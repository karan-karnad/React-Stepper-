import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box } from 'kilvin'

import StepperReadme from './README.md'
import Stepper from '.'

storiesOf('Mobile|Stepper', module)
	.addParameters({
		info: {
			propTables: [Stepper],
			text: 'A simple Header',
		},
		readme: {
			sidebar: StepperReadme,
		},
	})
	.add('Stepper with three steps', () => (
		<Box row style={{ width: '350px' }}>
			<Stepper
				stepObject={[
					{
						step: 'Venue',
						stepDetail: '',
						active: true,
						completed: false,
					},
					{
						step: 'Date and Time',
						stepDetail: '',
						active: false,
						completed: false,
					},
					{
						step: 'Ticket',
						stepDetail: '',
						active: false,
						completed: false,
					},
				]}
			/>
		</Box>
	))
