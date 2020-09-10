import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getVariables } from '../../Actions/variable';

class ProductDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			variable: {}
		};
	}

	componentDidMount() {
		this.props.getVariables('Machine');
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (
			nextProps.variables !== undefined &&
			nextProps.variables.Machine !== undefined &&
			nextProps.variables.Machine.length !== 0
		) {
			if (nextProps.id !== '') {
				const variable = nextProps.variables.Machine.filter(
					(variable) => variable.id === parseInt(nextProps.id)
				)[0];
				return {
					...prevState,
					variable: variable
				};
			}
			if (nextProps.partNumber !== '') {
				const variable = nextProps.variables.Machine.filter(
					(variable) => variable.values.partNumber === nextProps.partNumber && variable.typeName === 'Parts'
				)[0];
				return {
					...prevState,
					variable: variable
				};
			}
			return prevState;
		}
		return prevState;
	}

	render() {
		console.log(this.props)
		return (
			<Section>
				<SideBarContainer />
				<MainContainer>
					<MainSection>
						<ContentTitle>Product Details</ContentTitle>
						<CurrentArticlePath>
							<ArticlePathAnchor>Home </ArticlePathAnchor>
							&gt;
							<ArticlePathAnchor> Products</ArticlePathAnchor>
							&gt;
							{this.state.variable !== undefined ? (
								<CurrentPathSpan>{this.state.variable.variableName}</CurrentPathSpan>
							) : (
								undefined
							)}
						</CurrentArticlePath>
						<Article>
							<ArticleInner>
								{this.state.variable !== undefined ? (
									<ArticleText>
										<MachineImage src={this.state.variable.url} alt="" />
									</ArticleText>
								) : (
									undefined
								)}
								{this.state.variable !== undefined && this.state.variable.values !== undefined  ? (
									<ArticleText>
										<ArticleTextSpan>{this.state.variable.values.description} </ArticleTextSpan>
									</ArticleText>
								) : (
									<ArticleText>
										<ArticleTextSpan>NOT Found </ArticleTextSpan>
									</ArticleText>
								)}
							</ArticleInner>
						</Article>
					</MainSection>
				</MainContainer>
				<SectionRight />
				<Clear />
			</Section>
		);
	}
}
const mapStateToProps = (state) => ({
	variables: state.variables
});

export default connect(mapStateToProps, { getVariables })(ProductDetail);

const Section = styled.div`
	width: 1366px;
	margin: 0 auto;
	position: relative;
`;
const SideBarContainer = styled.div`
	width: 270px;
	float: left;
	background: url(https://live.staticflickr.com/65535/50294020527_f668d58669_o.png) no-repeat;
	margin-top: -42px;
	padding-top: 155px;
	min-height: 1157px;
`;

const MainContainer = styled.div`display: block;`;
const MainSection = styled.div`
	width: 864px;
	min-height: 1232px;
	background: #0a0a0a;
	float: left;
	margin-left: 16px;
	position: relative;
	background: #373b3e url(https://live.staticflickr.com/65535/50292969491_1309469872_o.png) no-repeat;
`;
const ContentTitle = styled.div`
	width: 280px;
	float: left;
	font-size: 20px;
	color: #0d528d;
	font-weight: bold;
	text-transform: uppercase;
	position: absolute;
	top: -36px;
`;

const MachineImage=styled.img`
width:695px;
background:white;
height: 650px;

`

const CurrentArticlePath = styled.div`
	padding: 20px 10px;
	color: #fff;
	z-index: 1000;
	font-weight: bold;
	font-style: italic;
`;

const ArticlePathAnchor = styled.a`
text-decoration: none;
noline: -webkit-tap-highlight-color:rgba(0,0,0,0);
color: #fff;
 font-size: 16px;

&:hover {
    text-decoration: none;
    color: #fff;
}
&:focus {
    outline: none;
    -moz-outline: none;
}
 
`;
const CurrentPathSpan = styled.span`
	font-size: 16px;
	padding: 20px 10px;
	color: #0d528d;
	z-index: 1000;
	font-weight: bold;
	font-style: italic;
`;

const Article = styled.div`
	text-align: justify;
	word-wrap: break-word;
	clear: both;
	overflow: hidden;
	display: block;
`;

const ArticleInner = styled.div`
	padding-left: 65px;
	padding-right: 53px;
`;

const ArticleText = styled.p.attrs((props) => ({
	textIndent: props.textIndent,
	marginLeft: props.marginLeft
}))`
     text-indent:${(props) => props.textIndent};
     margin-left:${(props) => props.marginLeft};
     font-size: 16px;
    color: #efefed;
    padding-bottom: 35px;

`;
const ArticleStrongText = styled.strong`
	font-weight: bold;
	text-indent: 9.75pt;
`;
const ArticleTextSpan = styled.span`
	color: #ffffff;
	text-indent: 9.75pt;
	font-size: 16px;
	padding-bottom: 35px;
	white-space: pre-wrap;
`;

const SectionRight = styled.div`
	width: 215px;
	right: 30px;
	top: -160px;
	height: 1346px;
	background: url(../images/cont_right_bg.png) no-repeat;
	position: absolute;

	padding-top: 100px;
	padding-left: 10px;
`;

const Clear = styled.div`
	clear: both;
	height: 0px;
	overflow: hidden;
`;
