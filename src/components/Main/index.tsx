import React from 'react';

import ProfilePage from '../ProfilePage/index';
import Feed from '../Feed/index';

import {
	Container,
	Header,
	BackIcon,
	ProfileInfo,
	BottomMenu,
	HomeIcon,
	SearchIcon,
	BellIcon,
	EmailIcon
} from './styles';

const main: React.FC = () => {
	return (
		<Container>
			<Header>
				<button>
					<BackIcon />
				</button>
				<ProfileInfo>
					<strong>Pedro Marques</strong>
					<span>20 Tweets</span>
				</ProfileInfo>
			</Header>
			<ProfilePage />
			<Feed />
			<BottomMenu>
				<HomeIcon className="active" />
				<SearchIcon />
				<BellIcon />
				<EmailIcon />
			</BottomMenu>
		</Container>
	);
};

export default main;
