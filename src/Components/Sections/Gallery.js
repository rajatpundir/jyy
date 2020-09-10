import React from 'react';
import styled from 'styled-components';
import { getVariables } from '../../Actions/variable';
import { connect } from 'react-redux';
import './slideShow.css';

class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imgs: [
				'https://yeehaw.s3.amazonaws.com/space/pexels-photo-1274260.jpeg',
				'https://yeehaw.s3.amazonaws.com/space/pexels-photo-1624438.jpeg',
				'https://yeehaw.s3.amazonaws.com/space/pexels-photo-220201.jpeg',
				'https://yeehaw.s3.amazonaws.com/space/pexels-photo-796206.jpeg',
				'https://yeehaw.s3.amazonaws.com/space/pexels-photo-924824.jpeg',
				'https://yeehaw.s3.amazonaws.com/space/pexels-photo-924824.jpeg',
				'https://yeehaw.s3.amazonaws.com/space/pexels-photo-1274260.jpeg',
				'https://yeehaw.s3.amazonaws.com/space/pexels-photo-1624438.jpeg',
				'https://yeehaw.s3.amazonaws.com/space/pexels-photo-220201.jpeg',
				'https://yeehaw.s3.amazonaws.com/space/pexels-photo-796206.jpeg',
				'https://yeehaw.s3.amazonaws.com/space/pexels-photo-924824.jpeg',
				'https://yeehaw.s3.amazonaws.com/space/pexels-photo-924824.jpeg',
				'https://yeehaw.s3.amazonaws.com/space/pexels-photo-1274260.jpeg',
				'https://yeehaw.s3.amazonaws.com/space/pexels-photo-1624438.jpeg',
				'https://yeehaw.s3.amazonaws.com/space/pexels-photo-220201.jpeg',
				'https://yeehaw.s3.amazonaws.com/space/pexels-photo-796206.jpeg',
				'https://yeehaw.s3.amazonaws.com/space/pexels-photo-924824.jpeg',
				'https://yeehaw.s3.amazonaws.com/space/pexels-photo-924824.jpeg',
				'https://yeehaw.s3.amazonaws.com/space/pexels-photo-1274260.jpeg',
				'https://yeehaw.s3.amazonaws.com/space/pexels-photo-1624438.jpeg',
				'https://yeehaw.s3.amazonaws.com/space/pexels-photo-220201.jpeg',
				'https://yeehaw.s3.amazonaws.com/space/pexels-photo-796206.jpeg',
				'https://yeehaw.s3.amazonaws.com/space/pexels-photo-924824.jpeg',
				'https://yeehaw.s3.amazonaws.com/space/pexels-photo-924824.jpeg'
			],
			prevImageList:[],
			primaryIndex: 0,
			secondaryIndex: 0,
			primaryStyle: {
				opacity: 1
			},
			secondaryStyle: {
				opacity: 0
			},
			autoSlide: true,
			slideTimeout: setTimeout(() => this.autoSlide(), 10000)
		};
	}

	componentDidMount() {
		this.props.getVariables('GalleryImages');
		if (this.props.productSectionName === 'smtList') {
			console.log(this.props.productSectionName);
		}
	}
	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.variables !== undefined && nextProps.variables.GalleryImages !== undefined) {
			if (prevState.prevImageList !== nextProps.variables.GalleryImages) {
				return {
					...prevState,
					imgs: nextProps.variables.GalleryImages,
					prevImageList: nextProps.variables.GalleryImages
				};
			}
		}
		return {
			...prevState
		};
	}

	slidePrevious = () => {
		if (!this.state.transit) {
			const nextIndex =
				this.state.primaryIndex - 1 < 0 ? this.state.imgs.length - 1 : this.state.primaryIndex - 1;
			this.transitSlides(nextIndex, false);
		}
	};

	slideNext = () => {
		if (!this.state.transit) {
			const nextIndex = this.state.primaryIndex + 1 === this.state.imgs.length ? 0 : this.state.primaryIndex + 1;
			this.transitSlides(nextIndex, true);
		}
	};

	autoSlide = () => {
		this.slideNext();
	};

	transitSlides = (nextIndex, left) => {
		this.setState({
			primaryStyle: {
				animation: left ? 'slideOutLeft 1s ease-in-out' : 'slideOutRight 1s ease-in-out',
				transition: 'all 1s',
				opacity: 0
			},
			secondaryStyle: {
				animation: left ? 'slideInLeft 1s ease-in-out' : 'slideInRight 1s ease-in-out',
				transition: 'all 1s',
				opacity: 1
			},
			transit: true,
			secondaryIndex: nextIndex
		});
		setTimeout(() => this.updatePrimary(), 1000);

		if (this.state.autoSlide) {
			clearTimeout(this.state.slideTimeout);
			this.setState({ slideTimeout: setTimeout(() => this.autoSlide(), 10000) });
		}
	};

	updatePrimary = () => {
		this.setState({
			transit: false,
			primaryIndex: this.state.secondaryIndex,
			primaryStyle: {
				opacity: 1
			},
			secondaryStyle: {
				opacity: 0
			}
		});
	};

	positionHandler = (position) => {
		if (!this.state.transit) {
			const diff = this.state.primaryIndex - position;
			if (diff !== 0) {
				this.transitSlides(position, diff < 0 ? true : false);
			}
		}
	};

	checkHandler = (event) => {
		const { autoSlide } = this.state;
		this.setState({ autoSlide: !autoSlide });
		// if we're disabling auto slide (previously was true)
		if (autoSlide) {
			clearTimeout(this.state.slideTimeout);
		} else {
			this.setState({ slideTimeout: setTimeout(() => this.autoSlide(), 10000) });
		}
	};

	render() {
		const indicators = this.state.imgs.map((img, i) => {
			const selectStyle = this.state.primaryIndex === i ? { background: 'white' } : {};
			return (
				<PositionIndicator
					key={i}
					style={selectStyle}
					onClick={() => this.positionHandler(i)}
					className="positionIndicator"
				/>
			);
		});
		return (
			<Section>
				<SideBarContainer>
					<SidebarNavigation>
						<NavigationList>
							<NavigationListItem>
								<NavigationListIatemAnchor>Gallery</NavigationListIatemAnchor>
							</NavigationListItem>
						</NavigationList>
					</SidebarNavigation>
				</SideBarContainer>
				<MainContainer>
					<MainSection>
						<ContentTitle>Gallery</ContentTitle>
						<CurrentArticlePath>
							<ArticlePathAnchor>Home </ArticlePathAnchor>
							&gt;
							<ArticlePathAnchor> Gallery </ArticlePathAnchor>
						</CurrentArticlePath>
						<Article>
							<ArticleInner>
								<SlideShow>
									<SlideArrow className="arrowLeft" onClick={() => this.slidePrevious()}>
										&lt;
									</SlideArrow>
									<SlideArrow className="arrowRight" onClick={() => this.slideNext()}>
										&gt;
									</SlideArrow>
									<SlidePositionWrapper>{indicators}</SlidePositionWrapper>

									<AutoSlide>
										<SlideLabel>auto-slide</SlideLabel>
										<input
											type="checkbox"
											checked={this.state.autoSlide}
											onChange={(event) => this.checkHandler(event)}
										/>
									</AutoSlide>

									<Slide style={this.state.primaryStyle}>
										<SliderImage src={this.state.imgs[this.state.primaryIndex]} alt="" />
									</Slide>

									<Slide style={this.state.secondaryStyle}>
										<SliderImage src={this.state.imgs[this.state.secondaryIndex]} alt="" />
									</Slide>
								</SlideShow>
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

export default  connect(mapStateToProps, { getVariables })(Gallery) ;

const Section = styled.div`
	width: 1366px;
	margin: 0 auto;
	position: relative;
`;
//--------------- SIDEBAR CONTAINER----------------//

const SideBarContainer = styled.div`
	width: 270px;
	float: left;
	background: url(https://live.staticflickr.com/65535/50294020527_f668d58669_o.png) no-repeat;
	margin-top: -42px;
	padding-top: 155px;
	min-height: 1157px;
`;

const SidebarNavigation = styled.nav`
	margin-bottom: 40px;
	padding: 0;
	margin: 0;
`;
const NavigationList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;
const NavigationListItem = styled.li`
	margin-top: 1px;
	cursor: pointer;
	list-style: none;
`;
const NavigationListIatemAnchor = styled.a`
	color: #fff;
	font-size: 18px;
	display: block;
	height: 50px;
	line-height: 50px;
	padding-left: 24px;
	background: #393c40 url(http://www.ksunsmt.com/cn/images/MenuList_list_bg.png) 234px center no-repeat;
	&:hover {
		text-decoration: none;
		background: #0d528d url(http://www.ksunsmt.com/cn/images/MenuList_list_bg.png) 234px center no-repeat;
	}
	&:focus {
		outline: none;
		-moz-outline: none;
	}
`;

//--------------- MAIN CONTAINER----------------//
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
	color: #0d528d ;
	font-weight: bold;
	text-transform: uppercase;
	position: absolute;
	top: -36px;
`;

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
	color: #af1a23;
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

const ArticleInner = styled.div`padding: 65px;`;

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

//-------Slideshow---------------//
const SlideShow = styled.div`
	white-space: nowrap;
	width: 100%;
	height: 400px;
	min-height: 15rem;
	overflow: hidden;
	position: relative;
	&:hover {
		opacity: 1;
	}
`;
const SlideArrow = styled.div`
	opacity: 0;
	position: absolute;
	top: 50%;
	font-size: 4rem;
	line-height: 0;
	cursor: pointer;
	color: #ffffff50;
	transition: all 0.5s;
	z-index: 20;
	&:hover {
		color: white;
		opacity: 1;
	}
`;

const Slide = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
	display: inline-block;
	position: absolute;
	top: 0;
	left: 0;
`;
const SliderImage = styled.img`
	width: 100%;
	height: 100%;
`;
const AutoSlide = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	margin: 1rem;
	z-index: 20;
`;

const SlidePositionWrapper = styled.div`
	position: absolute;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	top: 90%;
	left: 0;
	z-index: 20;
	width: 100%;
	opacity: 0;
	transition: all 0.5s;
	opacity: 1;
`;

const SlideLabel = styled.div`display: inline-block;`;

// display: inline-block;
const PositionIndicator = styled.div`
	display: none;
	width: 0.8rem;
	height: 0.8rem;
	margin: 0 0.5rem;
	background: #ffffff50;
	cursor: pointer;
	transition: background 0.5s;
	&:hover {
		background: white;
	}
`;
