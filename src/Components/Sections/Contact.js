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
								<NavigationListIatemAnchor>Contact Us</NavigationListIatemAnchor>
							</NavigationListItem>
						</NavigationList>
					</SidebarNavigation>
				</SideBarContainer>{' '}
				<MainContainer>
					<MainSection>
						<ContentTitle>CONTACT US</ContentTitle>
						<CurrentArticlePath>
							<ArticlePathAnchor>Home </ArticlePathAnchor>
							&gt;
							<CurrentPathSpan>CONTACT US</CurrentPathSpan>
						</CurrentArticlePath>
						<Article>
							<ArticleInner>
								<iframe
									title="address"
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.9330656154902!2d77.41952441406946!3d28.511661482465676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce93cfdbc203d%3A0x12d669e40c2142c!2sJYY%20Automation%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1597394923556!5m2!1sen!2sin"
									width="600"
									height="450"
									style={{ paddingLeft: '65px' }}
									frameBorder="0"
									aria-hidden="false"
								/>
								<ArticleText>JYY AUTOMATION TECHNOLOGY CO.LTD</ArticleText>
								<ArticleText>
									Address：Plot No.18, Sector-140A,Noida, Gautam Budh Nagar.201304(U.P)
								</ArticleText>
								<ArticleText>
									<ArticleLink href="tel:0120-6251878	" >
										Tel：0120-6251878{' '}
									</ArticleLink>
								</ArticleText>
								<ArticleText>Website：http://www.jyyautomation.com</ArticleText>
								<ArticleText>
									<ArticleLink href="mailto:yash.arya@jyyautomation.com" target="_blank">
										E-mail：yash.arya@jyyautomation.com
									</ArticleLink>
									<ArticleLink href="mailto:sales@jyyautomation.com" target="_blank" marginLeft="5px">
										| sales@jyyautomation.com
									</ArticleLink>
								</ArticleText>

								<ArticleText>
									<ArticleLink
										href="https://www.facebook.com/JYY-Automation-Technologies-Pvt-Ltd-114619426995026"
										target="_blank"
									>
										<img src="https://img.icons8.com/color/48/000000/facebook.png" alt="Facebook" />
									</ArticleLink>
									<ArticleLink
										href="https://www.linkedin.com/company/jyy-automation-technologies-pvt-ltd/?viewAsMember=true"
										target="_blank"
									>
										<img
											src="https://img.icons8.com/fluent/48/000000/linkedin.png"
											alt="Linkedin"
										/>{' '}
									</ArticleLink>
									<ArticleLink
									href="https://www.youtube.com/channel/UCKPfjTx4cevgK884icHCJzg?sub_confirmation=1"
									target="_blank">
										
										<img
											src="https://img.icons8.com/color/48/000000/youtube-play.png"
											alt="Youtube"
										/>
									</ArticleLink>
								</ArticleText>

								<ContactContainer />
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

const ArticleInner = styled.div`padding: 65px;`;

const ContactContainer = styled.div``;

const ArticleText = styled.p`
	font-size: 16px;
	color: #efefed;
	line-height: 24px;
	padding: 0px;
	padding-left: 65px;
	margin: 10px;
`;
const ArticleLink = styled.a.attrs((props) => ({
	marginLeft: props.marginLeft
}))`
	font-size: 16px;
	color: #efefed;
	line-height: 24px;
	padding: 0px;
	margin: 0px;
	margin-left:${(props) => props.marginLeft};
	text-decoration: none;
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
