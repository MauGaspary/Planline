import React, { useState } from 'react';
import Resume from '../../components/Breadcrumb/Resume';
import Identify from '../../components/Breadcrumb/Identify';

function Home() {
	const [breadcrumbDisplay, setBreadcrumbDisplay] = useState<string>('home');

	return (
		<div className="App">
			{breadcrumbDisplay === 'home' && <Identify setBreadcrumbDisplay={setBreadcrumbDisplay} />}
			{breadcrumbDisplay === 'import' && <Resume setBreadcrumbDisplay={setBreadcrumbDisplay} />}
		</div>
	);
}

export default Home;
