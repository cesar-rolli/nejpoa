import React from "react";

import logo from "../../assets/logo.png";

import {
	Container,
	NEJLogo,
	UserIcon
} from "./styles";

const Header: React.FC = () => {
	return (
		<Container>
			<NEJLogo src={logo} />
			<UserIcon />
		</Container>
	);
};

export default Header;
