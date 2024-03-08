import React from "react";

import logo from "../../assets/logo.png";

import {
	Container,
	NEJLogo,
} from "./styles";

const Header: React.FC = () => {
	return (
		<Container>
			<NEJLogo src={logo} />
		</Container>
	);
};

export default Header;
