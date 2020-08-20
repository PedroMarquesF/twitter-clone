import React from 'react';

import Main from '../Main/index';
import MenuBar from '../MenuBar/index';
import SideBar from '../SideBar/index';

import { Container, Wrapper } from './styles';

const layout: React.FC = () => {
	return (
		<Container>
			<Wrapper>
				<MenuBar />
				<Main />
				<SideBar />
			</Wrapper>
		</Container>
	);
};

export default layout;
