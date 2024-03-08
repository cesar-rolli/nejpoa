import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import {
	Home,
	NetworkChart,
	Rocket,
	BriefcaseAlt,
} from "../../styles/Icons";

export const BottomMenuContainer = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 2;

	background: var(--branco1);
	width: 100%;

	display: flex;
	justify-content: space-between;

	padding: 8px min(46px, max(10vw, 10px));

	@media (min-width: 500px) {
		display: none;
	}
`;

export const StyledLink = styled(Link)`
	text-decoration: none;

	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}

	color: branco;

	&:hover,
	&:focus,
	&.active {
		color: var(--preto);
	}
`;

// Ícones usados na página estática
const iconCSSBottomBar = css`
	width: 32px;
	height: 32px;

	cursor: pointer;

	color: var(--preto);

	&:hover,
	&:focus,
	&.active {
		color: var(--azul1);
	}
`;

export const Active = css`
	fill: var(--sinc-light-color);
`;
export const HomeIcon = styled(Home)`
	${iconCSSBottomBar}
`;
export const NetworkChartIcon = styled(NetworkChart)`
	${iconCSSBottomBar}
`;
export const RocketIcon = styled(Rocket)`
	${iconCSSBottomBar}
`;
export const BriefcaseIcon = styled(BriefcaseAlt)`
	${iconCSSBottomBar}
`;