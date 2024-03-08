import React from "react";
import { Helmet } from "react-helmet";

import { Container } from "./styles";

import Header from "../../components/header";
import SidebarMenu from "../../components/SidebarMenu";

const Home: React.FC = () => {
	return (
    <Container>
        <Helmet>
            <title>Home - Portal NEJ POA</title>
        </Helmet>
        <Header />
        <SidebarMenu />
    </Container>
	);
};

export default Home;