import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import About from './Sections/About';
import Contact from './Sections/Contact';
import Product from './Sections/Product';
import ProductDetail from './Sections/ProductDetail';
import Gallery from './Sections/Gallery';

class MainPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSection: 'about',
			variable: '',
			productSectionName: '',
			partNumber: ''
		};
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.match.params.sectionName) {
			if (nextProps.match.params.variableName) {
				return {
					...prevState,
					currentSection: nextProps.match.params.sectionName,
					variable: nextProps.match.params.variableName
				};
			}
			if (nextProps.match.params.productSectionName) {
				return {
					...prevState,
					currentSection: nextProps.match.params.sectionName,
					productSectionName: nextProps.match.params.productSectionName
				};
			}
			if (nextProps.match.params.partNumber) {
				return {
					...prevState,
					currentSection: nextProps.match.params.sectionName,
					partNumber: nextProps.match.params.partNumber
				};
			}

			return {
				...prevState,
				currentSection: nextProps.match.params.sectionName
			};
		}
		return prevState;
	}

	render() {
		return (
			<PageContainer>
				<Header switchPages={this.switchPages} />
				{this.state.currentSection === 'about' ? <About /> : undefined}
				{this.state.currentSection === 'contacts' ? <Contact /> : undefined}
				{this.state.currentSection === 'gallery' ? <Gallery /> : undefined}
				{this.state.currentSection === 'products' ? (
					<Product productSectionName={this.state.productSectionName} />
				) : (
					undefined
				)}
				{this.state.currentSection === 'productDetail' ? (
					<ProductDetail id={this.state.variable} partNumber={this.state.partNumber} />
				) : (
					undefined
				)}
				<Footer />
			</PageContainer>
		);
	}
}

export default MainPage;

const PageContainer = styled.div`
	background: #0a0a0a url(https://live.staticflickr.com/65535/50293166558_30c1f18ce0_o.png) top center no-repeat;
`;

