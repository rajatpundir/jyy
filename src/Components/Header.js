import React from 'react';
import styled from 'styled-components';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			partNumber: ''
		};
		 this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	render() {
		return (
			<HeaderContainer>
				<HeaderLogo />
				<HeaderTop>
					<HeaderTopList>
						<HeaderTopListElement>
							<HeaderTopListAnchor
								href="tel:0120-6251878"
								background="url(http://www.ksunsmt.com/cn/images/Top_tel.png) 24px center no-repeat"
								borderLeft="none"
							>
								0120-6251878
							</HeaderTopListAnchor>
							<HeaderTopListAnchor
								href="tel:0120-6251878"
								borderLeft="1px solid #5b5d61"
								paddingLeft="10px"
							>
							   0120-6251884
							</HeaderTopListAnchor>
						</HeaderTopListElement>
					
						<HeaderTopListElement>
							<HeaderTopListAnchor
								href="mailto:yash.arya@jyyautomation.com"
								background="url(http://www.ksunsmt.com/cn/images/Top_email.png) 24px center no-repeat"
								paddingLeft="48px"
							>
								yash.arya@jyyautomation.com{' '}
							</HeaderTopListAnchor>{' '}
						</HeaderTopListElement>{' '}
						<HeaderTopListElement>
							<HeaderTopListAnchor
								href="mailto:sales@jyyautomation.com"
								background="url(http://www.ksunsmt.com/cn/images/Top_email.png) 24px center no-repeat"
								paddingLeft="56px"
							>
								sales@jyyautomation.com{' '}
							</HeaderTopListAnchor>{' '}
						</HeaderTopListElement>{' '}
					</HeaderTopList>{' '}
				</HeaderTop>{' '}
				<HeaderNavigation>
					<HeaderNavigationList>
						<HeaderNavigationListElement
							width="112px"
							left="0"
							padding="0 54px"
							background="url(https://live.staticflickr.com/65535/50293118462_f0515d7af9_o.png) no-repeat"
						>
							<HeaderNavigationListAnchor href="/" />
						</HeaderNavigationListElement>{' '}
						<HeaderNavigationListElement
							width="168px"
							left="104px"
							padding="0 36px"
							background="url(https://live.staticflickr.com/65535/50293096197_7e438f0e07_o.png) no-repeat"
						>
							<HeaderNavigationListAnchor href={'/mainPage/about'} />
						</HeaderNavigationListElement>{' '}
						<HeaderNavigationListElement
							width="110px"
							left="238px"
							padding="0 55px"
							background="url(https://live.staticflickr.com/65535/50292969196_0d8776fda7_o.png) no-repeat"
						>
							<HeaderNavigationListAnchor />
						</HeaderNavigationListElement>{' '}
						<HeaderNavigationListElement
							width="146px"
							left="345px"
							padding="0 42px"
							background="url(https://live.staticflickr.com/65535/50293118267_967834be13_o.png) no-repeat"
						>
							<HeaderNavigationListAnchor href={'/mainPage/products'} />
						</HeaderNavigationListElement>{' '}
						<HeaderNavigationListElement
							width="162px"
							left="470px"
							padding="0 50px"
							background="url(https://live.staticflickr.com/65535/50292291113_10f646f74c_o.png) no-repeat"
						>
							<HeaderNavigationListAnchor href={'/mainPage/gallery'}/>
						</HeaderNavigationListElement>{' '}
						<HeaderNavigationListElement
							width="174px"
							left="638px"
							padding="0 42px"
							background="url(https://live.staticflickr.com/65535/50292952126_f4808a871f_o.png) no-repeat"
						>
							<HeaderNavigationListAnchor />
						</HeaderNavigationListElement>{' '}
						<HeaderNavigationListElement
							width="162px"
							left="812px"
							padding="0 30px"
							background="url(https://live.staticflickr.com/65535/50293118312_1440a7fc29_o.png) no-repeat"
						>
							<HeaderNavigationListAnchor href={'/mainPage/contacts'} />
						</HeaderNavigationListElement>{' '}
					</HeaderNavigationList>{' '}
				</HeaderNavigation>{' '}
				<SearchBar>
					<SearchInput
						type="text"
						placeholder="Enter Part Number"
						name="partNumber"
						value={this.state.partNumber}
						onChange={(e) => this.onChange(e)}
					/>
					<SearchButtonAnchor
						href={'/mainPage/productDetail/partNumber/' + this.state.partNumber.toUpperCase()}
						target="_blank"
					/>
				</SearchBar>
			</HeaderContainer>
		);
	}
}

export default Header;

const HeaderContainer = styled.div`
	height: 176px;
	z-index: 999;
	width: 1366px;
	margin: 0 auto;
	position: relative;
`;

const HeaderLogo = styled.div`
	position: absolute;
	top: 24px;
	left: 66px;
	padding: 0px;
	margin: 0px;
`;

const HeaderTop = styled.div`
	float: right;
	padding: 0px;
	padding-right: 40px;
	margin: 0px;
	margin-top: 26px;
`;

const HeaderTopList = styled.ul`
	list-style: none;
	padding: 0px;
	margin: 0px;
`;
const HeaderTopListElement = styled.li`
	float: left;
	list-style: none;
	padding: 0px;
	margin: 0px;
`;

const HeaderTopListAnchor = styled.a.attrs((props) => ({
	background: props.background,
	borderLeft: props.borderLeft || '1px solid #5b5d61',
	paddingLeft: props.paddingLeft || '44px'
}))`
background:${(props) => props.background};
border-left:${(props) => props.borderLeft};
padding-left:${(props) => props.paddingLeft};
    font-size: 16px;
    color: #ffffff;
    margin-left: 20px;
    text-decoration: none;
`;

const HeaderNavigation = styled.div`
	width: 1058px;
	height: 52px;
	position: absolute;
	right: 25px;
	top: 64px;
	background: url(http://www.ksunsmt.com/cn/images/menu_list_bg2.png) no-repeat;
`;
const HeaderNavigationList = styled.ul`
	list-style: none;
	padding: 0px;
	margin: 0px;
`;
const HeaderNavigationListElement = styled.li.attrs((props) => ({
	width: props.width,
	left: props.left,
	padding: props.padding,
	background: props.background
}))`
    width:${(props) => props.width};
    left:${(props) => props.left};
    padding:${(props) => props.padding};
    height: 52px;
    position: absolute;
    list-style: none;
    &:hover {
        background:${(props) => props.background};
    }
    &:active {
        background:${(props) => props.background};
    }
`;

const HeaderNavigationListAnchor = styled.a`
	display: block;
	width: 100%;
	height: 52px;
	color: #414446;

	&:hover {
		text-decoration: none;
		color: #fff;
	}
	&:focus {
		outline: none;
		-moz-outline: none;
	}
`;

const SearchBar = styled.div`
	position: absolute;
	top: 135px;
	right: 204px;
	width: 226px;
	padding-left: 42px;
	background: url(https://live.staticflickr.com/65535/50293118422_672bd56490_o.png) no-repeat;
`;

const SearchInput = styled.input`
	color: #919294;
	font-size: 12px;
	padding-left: 3px;
	width: 135px;
	background: none;
	border: none;
	margin: 0;
	padding: 0;
	outline: none;
`;

const SearchButtonAnchor = styled.a`
	display: inline-block;
	float: right;
	width: 50px;
	height: 26px;
	padding-right: 25px;
	color: #414446;
`;
