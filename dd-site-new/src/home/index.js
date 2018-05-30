import React, { Component } from 'react';
import { Container } from 'reactstrap';
//import UserRepos from './containers/UserRepos';
import './style.css';
import Butter from 'buttercms';


const butter = Butter('35cf95a781728a107f330a1412ebd437cd5025e1');

class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			content: null
		};
	}

	componentWillMount() {
		butter.page.retrieve('*', 'home-page').then((resp) => {
			this.setState({
				content: resp.data.data
			})
		});
	}


	render() {
		if (this.state.content) {
			const homepage = this.state.content;

			return (
				<div id="home">
					<Container>
						<h2 className="text-center">{homepage.fields.headline}</h2>
						<p>{homepage.fields.page_info}</p>

					</Container>
				</div>
			);

		} else {
			return (
				<div>Something broke...</div>
			)
		}
	}
}

export default Home;

//	<UserRepos />