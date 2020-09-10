import React from 'react';
import styled from 'styled-components';

class AboutUs extends React.Component {
	render() {
		return (
			<Section>
				<SideBarContainer>
					<SidebarNavigation>
						<NavigationList>
							<NavigationListItem>
								<NavigationListIatemAnchor>Company introduction</NavigationListIatemAnchor>
							</NavigationListItem>
						</NavigationList>
					</SidebarNavigation>
				</SideBarContainer>
				<MainContainer>
					<MainSection>
						<ContentTitle>Company introduction...</ContentTitle>
						<CurrentArticlePath>
							<ArticlePathAnchor>Home </ArticlePathAnchor>
							&gt;
							<ArticlePathAnchor> ABOUT US </ArticlePathAnchor>
							&gt;
							<CurrentPathSpan>Company introduction...</CurrentPathSpan>
						</CurrentArticlePath>
						<Article>
							<ArticleInner>
								<ArticleText>
									<br />
								</ArticleText>
								<ArticleText>
									<br />
								</ArticleText>

								<ArticleText>
									<ArticleStrongText>JYY AUTOMATION TECHNOLOGY</ArticleStrongText>
									<ArticleTextSpan>
										&nbsp;is a High-tech enterprises which is a collection of automation
										equipment research ,development and sales. The company’s businesscovers:
									</ArticleTextSpan>
								</ArticleText>
								<ArticleText marginLeft=" 6.3pt" textIndent="9.75pt">
									<ArticleTextSpan>
										&nbsp;1)Refurbish SMT Machine, Refurbish DEK&amp; MPM Printer Recycling, Sales &amp;
										MachineParts Supply &amp; Repair.
									</ArticleTextSpan>
								</ArticleText>

								<ArticleText marginLeft=" 6.3pt" textIndent="9.75pt">
									<ArticleTextSpan>
										&nbsp;2)&nbsp;SMT peripheral equipment (reflow oven、wavesoldering
										machine、auto&amp;semi-autoPrinter、Conveyor) research、development、production
										andsales.
									</ArticleTextSpan>
								</ArticleText>

								<ArticleText marginLeft=" 6.3pt" textIndent="9.75pt">
									<ArticleTextSpan>
										&nbsp;3)&nbsp;Transformer, motor Automatic spindlewinding machine,all-in-one
										fullyautomatic spindle winding machine with tapefunction, automatic
										solderingmachine, tape machine R&amp;D、production andsales.
									</ArticleTextSpan>
								</ArticleText>

								<ArticleText marginLeft=" 6.3pt" textIndent="9.75pt">
									<ArticleTextSpan>
										Our companyis insist on theconcept of “Lean Production” which coverage the
										equipmentprogram, mechanicaldesign, program development, parts processing
										production,equipment assemblyand commissioning, after-sales training services in
										ordercontinue to pursuit highquality, high efficiency, fast response, short
										deliveryand comprehensiveresponse to customer requirements.{' '}
									</ArticleTextSpan>
								</ArticleText>
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

export default AboutUs;

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
	color: #0d528d ;
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
