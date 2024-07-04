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
                { label: 'Home', link: '/' },
   				{
					label: '4788 Documentation',
				    autogenerate: { directory: '4788' },

				},
				{
					label: 'External Docs',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'WPILib Documentation', link: '/other/wpilib' },
						{ label: 'CTRE Documentation', link: 'other/ctre' },
						{ label: 'REV Documentation', link: 'other/revlib' },
						{ label: 'Choreo Documentation', link: 'other/choreo' },
					],
				},
			],
		}),
	],
});
