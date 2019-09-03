import React from 'react'
import { createComponent } from 'react-fela'
import { __step, __stepperContent, __stepWrapper, __outerBox, __stepperMain, __container } from './__style'

const Step = createComponent(__step, 'div', ['onClick'])
const StepperWrapper = createComponent(__stepWrapper)
const StepperContent = createComponent(__stepperContent)
const OuterBox = createComponent(__outerBox)
const StepperMain = createComponent(__stepperMain)
const Container = createComponent(__container)

const Stepper = props => {
	const { stepObject: stepDetails, switchStep, isDesktop } = props

	const totalLength = stepDetails.length

	return (
		<OuterBox>
			<StepperMain isDesktop={isDesktop}>
				<Container isDesktop={isDesktop}>
					<StepperWrapper>
						{stepDetails.map((stepDetail, key) => {
							const showAnimation =
								key < totalLength - 1 &&
								stepDetails[key].completed &&
								(stepDetails[key + 1].active ||
									stepDetails[key + 1].completed)

							return (
								<Step
								key={stepDetail.step}
								stepValue2={stepDetail.stepDetail}
								indexValue={key}
								length={totalLength}
								active={stepDetail.active}
								completed={stepDetail.completed}
								showAnimation={showAnimation}
								onClick={() => {
									if (stepDetail.completed) switchStep(stepDetail.key)
								}}
								>
									<span />
									<StepperContent
										active={stepDetail.active}
										completed={stepDetail.completed}
									>
										{stepDetail.step}
									</StepperContent>
									{stepDetail.stepDetail && (
										<StepperContent
											active={stepDetail.active}
											completed={stepDetail.completed}
										>
											{stepDetail.stepDetail}
										</StepperContent>
									)}
								</Step>
							)
						})}
					</StepperWrapper>
				</Container>
			</StepperMain>
		</OuterBox>
	)
}

export default Stepper
