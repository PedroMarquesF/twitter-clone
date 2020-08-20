import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
	return (
		<Container>
			<Banner>
				<Avatar />
			</Banner>
			<ProfileData>
				<EditButton>Editar perfil</EditButton>
				<h1>Pedro Marques</h1>
				<h2>@ppmf</h2>

				<p>
					Developer at <a href="https://nomedaemprese.com">@NomedaEmpresa</a>
				</p>
				<ul>
					<li>
						<LocationIcon />
						Sao Paulo - Brasil
					</li>
					<li>
						<CakeIcon />
						Nascido(a) em 26 de Novembro de 2332
					</li>
					<Followage>
						<span>
							seguindo<strong> 90</strong>
						</span>
						<span>
							<strong>300 </strong>seguidores
						</span>
					</Followage>
				</ul>
			</ProfileData>
		</Container>
	);
};

export default ProfilePage;
