const tpl = `
			{{#each items}}
				<li><a href="{{ url }}">{{ title }}</a></li>	
			{{/each}}
`;

export default tpl;
