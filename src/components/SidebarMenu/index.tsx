import React from "react";
import { useLocation } from "react-router-dom";

import {
	Container,
	StyledLink,
	MenuItem,
	Line,
	HomeIcon,
	NetworkChartIcon,
	RocketIcon,
	BriefcaseIcon,
} from "./styles";

const SidebarMenu: React.FC = (classes) => {
	const pathname = useLocation().pathname;

	return (
		<Container>
			<StyledLink to={"/"}>
				<MenuItem className={`${pathname === "/tarefas" ? "active" : ""}`}>
					<HomeIcon />
					<span>Início</span>
				</MenuItem>
			</StyledLink>

			<StyledLink to={"/rede-nejpoa"}>
				<MenuItem className={`${pathname === "/tarefas" ? "active" : ""}`}>
					<NetworkChartIcon />
					<span>Rede NEJ POA</span>
				</MenuItem>
			</StyledLink>

			<StyledLink to={"/eventos"}>
				<MenuItem className={`${pathname === "/tarefas" ? "active" : ""}`}>
					<RocketIcon />
					<span>Eventos</span>
				</MenuItem>
			</StyledLink>

			<Line />

			<StyledLink to={"/ej"}>
				<MenuItem className={`${pathname === "/tarefas" ? "active" : ""}`}>
					<BriefcaseIcon />
					<span>Minha EJ</span>
				</MenuItem>
			</StyledLink>
		</Container>
	);
};

export default SidebarMenu;
