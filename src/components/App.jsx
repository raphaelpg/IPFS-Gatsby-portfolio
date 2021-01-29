import React, { useState, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import Intro from './Intro/Intro'
import Footer from './Footer/Footer'
import Projects from './Projects/Projects'

import { stackLogos, projectsData } from '../data/data.js'

const App = () => {
	const [projects, setProjects] = useState([])
	const [logos, setLogos] = useState([])

	useEffect(() => {
		setProjects([...projectsData])
		setLogos(stackLogos)
	}, [])

	return (
		<UserContext.Provider value={{ projects, logos }}>
			<Intro />
			<Projects	/>
			<Footer />
		</UserContext.Provider>
	)
}

export default App