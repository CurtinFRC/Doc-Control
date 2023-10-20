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
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Behaviours', link: '/guides/behaviours/' },
						{ label: 'Style Guide', link: '/guides/style/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
        // {
        //   label: 'Setting Up Your Own Project',
        //   autogenerate: { directory: 'setup' },
        // },
			],
		}),
	],
});
