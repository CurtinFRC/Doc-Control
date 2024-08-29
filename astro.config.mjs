import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Doc Control',
			social: {
				github: 'https://github.com/CurtinFRC',
				youtube: 'https://youtube.com/@CurtinFRC4788CantControl',
				instagram: 'https://instagram.com/frcteam4788',
				facebook: 'https://facebook.com/Team4788',
			},
			sidebar: [
                { label: 'Home', link: '/' },
   				{
					label: '4788 Documentation',
				    autogenerate: { directory: '4788' },

				},
				{
					label: 'External Docs',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'WPILib Documentation', link: 'https://docs.wpilib.org/en/stable/index.html' },
						{ label: 'CTRE Documentation', link: 'https://v6.docs.ctr-electronics.com/en/stable/' },
						{ label: 'REV Documentation', link: 'https://docs.revrobotics.com/brushless/spark-flex/revlib' },
						{ label: 'Choreo Documentation', link: 'https://sleipnirgroup.github.io/Choreo/' },
						{ label: 'PhotonVision Documentation', link: 'https://docs.photonvision.org/en/latest/' },
						{ label: 'Limelight Documentation', link: 'https://docs.limelightvision.io/docs/docs-limelight/getting-started/summary' },
					],
				},
			],
		}),
	],
});
