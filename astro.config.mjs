import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Wombat Docs',
			social: {
				github: 'https://github.com/CurtinFRC',
				youtube: 'https://youtube.com/@CurtinFRC4788CantControl',
				instagram: 'https://instagram.com/frcteam4788',
				facebook: 'https://facebook.com/Team4788',
			},
			sidebar: [
				{
					label: 'Docs',
				        autogenerate: { directory: '/' },

				},
				{
					Label: 'External Docs',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'WPILib Documentation', link: 'https://docs.wpilib.org/en/stable/index.html' },
						{ label: 'CTRE Documentation', link: 'https://v6.docs.ctr-electronics.com/en/stable/' },
						{ label: 'REV Documentation', link: 'https://docs.revrobotics.com/brushless/spark-flex/revlib' },
						{ label: 'Choreo Documentation', link: 'https://sleipnirgroup.github.io/Choreo/' }
					],
				}
				// logo: {
				// 	src: './src/assets/my-logo.svg',
				// },
        // {
        //   label: 'Setting Up Your Own Project',
        //   autogenerate: { directory: 'setup' },
        // },
			],
		}),
	],
});
