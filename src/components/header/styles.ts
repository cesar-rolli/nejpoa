import styled from "styled-components";

import { User } from "../../styles/Icons";

export const Container = styled.div`
	background: var(--azul1);
	position: absolute;

	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 3;

  width: 100vw;
`;

export const NEJLogo = styled.img`
	display: flex;
	height: 64px;
`;


export const UserIcon = styled(User)`
	flex-shrink: 0;
	position: fixed;
	right: 16px;

	width: 32px;
	height: 32px;
	color: var(--branco2);

	&:hover {
		cursor: pointer;
		color: var(--preto);
	}
`;