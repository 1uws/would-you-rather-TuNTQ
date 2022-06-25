import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav({userName}) {
	return (
		<nav className='nav'>
			<ul>
				<li>
					<NavLink to='/' exact activeClassName='active'>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to='/add' exact activeClassName='active'>
						New Question
					</NavLink>
				</li>
				<li>
					<NavLink to='/leaderboard' activeClassName='active'>
						Leader Board
					</NavLink>
				</li>
				<li>
					Hello, {userName}
				</li>
				<li>
					<NavLink to='/' exact activeClassName='active'>
						Logout
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}