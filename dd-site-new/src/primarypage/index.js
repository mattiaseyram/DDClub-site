import React from 'react'
import { Container } from 'reactstrap';
import './style.css';
import Butter from 'buttercms';

const butter = Butter('35cf95a781728a107f330a1412ebd437cd5025e1');

class About extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			loaded: false
		};
	}

	componentWillMount() {
		let slug = this.props.params.slug;

		butter.page.retrieve('primary_page', slug).then((resp) => {
			this.setState({
				loaded: true,
				page: resp.data.data
			})
		});
	}

	render() {

		if (this.state.loaded) {
			const page = this.state.page;


			return (
				<div id="primary_page">
					<Container>
						<h2 className="text-center">
							{page.fields.headline}
		      </h2>
						<p>{page.fields.page_info}</p>
					</Container>
				</div>
			);
		} {
			return (
				<div>Something's wrong on this page...</div>
			);
		}
	}

}

export default About;