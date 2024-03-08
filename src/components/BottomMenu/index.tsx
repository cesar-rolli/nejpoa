import React from "react";
import { useLocation } from "react-router-dom";

import {
	BottomMenuContainer,
	StyledLink,
	HomeIcon,
	NetworkChartIcon,
	RocketIcon,
	BriefcaseIcon,
} from "./styles";

const BottomMenu: React.FC = () => {
	const pathname = useLocation().pathname;

	return (
		<BottomMenuContainer>
			<StyledLink
				to={"/"}
				className={`${pathname === "/" ? "active" : ""}`}
			>
				<HomeIcon />
			</StyledLink>

			<StyledLink
				to={"/rede-nejpoa"}
				className={`${pathname === "/rede-nejpoa" ? "active" : ""}`}
			>
				<NetworkChartIcon />
			</StyledLink>

			<StyledLink
				to={"/eventos"}
				className={`${pathname === "/eventos" ? "active" : ""}`}
			>
				<RocketIcon />
			</StyledLink>

			<StyledLink
				to={"/ej"}
				className={`${pathname === "/ej" ? "active" : ""}`}
			>
				<BriefcaseIcon />
			</StyledLink>
		</BottomMenuContainer>
	);
};

export default BottomMenu;
