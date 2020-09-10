import React from 'react';
import styled from 'styled-components';

class Footer extends React.Component {
	render() {
		return (
			<FooterConainer>
				<FooterInnerContainer>
					<FooterLeft>
						<FooterLeftText
							background="url(http://www.ksunsmt.com/cn/images/Bottom_Tel.png) left center no-repeat"
							width="176px"
						>
							TEL：0120-6251878
						</FooterLeftText>
						<FooterLeftText
							marginTop="16px"
							background="url(http://www.ksunsmt.com/cn/images/Bottom_Email.png) left center no-repeat"
						>
							E-mail：yash.arya@jyyautomation.com | sales@jyyautomation.com{' '}
						</FooterLeftText>{' '}
						<FooterLeftText
							marginTop="16px"
							background="url(http://www.ksunsmt.com/cn/images/Bottom_add.png	) left center no-repeat"
						>
							Address： Plot No.18, Sector-140A,Noida, Gautam Budh Nagar. 201304 (U.P)
						</FooterLeftText>
					</FooterLeft>
				</FooterInnerContainer>
			</FooterConainer>
		);
	}
}

export default Footer;

const FooterConainer = styled.div`
	background: url(https://live.staticflickr.com/65535/50293185998_5079f11e81_o.png) bottom center no-repeat;
	height: 150px;
	margin-top: 38px;
`;

const FooterInnerContainer = styled.div`
	height: 115px;
	padding-top: 35px;
	width: 1366px;
	margin: 0 auto;
	position: relative;
`;

const FooterLeft = styled.div`
	float: left;
	padding-left: 150px;
	text-transform: uppercase;
	width: 535px;
	font-weight: bold;
`;

const FooterLeftText = styled.p.attrs((props) => ({
	marginTop: props.marginTop || '0',
	background: props.background,
	width: props.width
}))`

    font-size: 12px;
	color: #808080;
	float:left;
	padding-left: 28px;
	margin:0;
margin-top:${(props) => props.marginTop};
background:${(props) => props.background};
width:${(props) => props.width};

`;

const ParaSpan = styled.span`
	display: block;
	float: left;
	height: 50px;
`;

const FooterRight = styled.div`
	float: right;
	height: 145px;
	color: #808080;
	font-size: 12px;
	text-transform: uppercase;
	font-weight: bold;
`;
