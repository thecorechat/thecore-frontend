import styled, { keyframes } from "styled-components";

const spin = keyframes`
	to {
		transform: rotate(360deg);
	}
`;

export const SpinnerWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	min-height: 100vh;
`;

export const SpinnerCircle = styled.div`
	width: 40px;
	height: 40px;
	border: 4px solid rgba(37, 99, 235, 0.2);
	border-top-color: #2563eb;
	border-radius: 50%;
	animation: ${spin} 0.8s linear infinite;
`;
