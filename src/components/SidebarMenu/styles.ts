import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import {
	Home,
	NetworkChart,
	Rocket,
	BriefcaseAlt,
} from "../../styles/Icons";

export const Container = styled.div`
	display: none;

	@media (min-width: 500px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		background: var(--branco1);

		position: fixed;
		top: 64px;
		left: 0;
		z-index: 2;

		padding: 16px;

		width: min(300px, auto);
		height: calc(100% - 64px);
		overflow-y: auto;
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
`;

export const MenuItem = styled.button`
	/* textdecoration: none; */
	
	display: absolute;
	align-items: center;
	flex-shrink: 0;
	width: 256px;

	> span {
		display: none;
	}

	@media (min-width: 960px) {
		display: flex;
		flex-direction: row;
		> span {
			display: flex;
			font-size: 19px;
			color: var(--preto);
		}		
	}

	padding: 8px;
	margin: 8px 0;
	outline: 0;
	color: var(--preto);

	cursor: pointer;
	border-radius: 8px;

	&:hover,
	&.active {
		display: flex; 
		flex-direction: row;
		background: var(--azul1);
		color: var(--branco1);
		> span {
			font-size: 19px;
			color: var(--branco1);
		}
	}
`;

export const Line = styled.div`
	display: flex
	border-top: 1px solid var(--branco2);
`;



const iconCSSMenuBar = css`
	flex-shrink: 0;

	width: 24px;
	height: 24px;
	margin-right: 8px;
`;

export const HomeIcon = styled(Home)`
	${iconCSSMenuBar}
`;

export const NetworkChartIcon = styled(NetworkChart)`
	${iconCSSMenuBar}
`;

export const RocketIcon = styled(Rocket)`
	${iconCSSMenuBar}
`;

export const BriefcaseIcon = styled(BriefcaseAlt)`
	${iconCSSMenuBar}
`;
