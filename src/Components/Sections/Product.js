import React from 'react';
import styled from 'styled-components';
import { getVariables } from '../../Actions/variable';
import { connect } from 'react-redux';
class Product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			machine: [],
			prevMachineList: [],
			productList: true,
			smtList: false,
			smtPeripheralEquipment: false,
			dekPrinter: false,
			smtParts: false,
			yamahaPart: false,
			jukiPart: false,
			pdfLink:""
		};
		this.toggleProductList = this.toggleProductList.bind(this);
		this.getProductByManufacturer = this.getProductByManufacturer.bind(this);
		this.getProductByCategory = this.getProductByCategory.bind(this);
	}

	componentDidMount() {
		this.props.getVariables('Machine');
		if (this.props.productSectionName === 'smtList') {
			console.log(this.props.productSectionName);
		}
		this.props.getVariables("Pdf");
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.variables !== undefined && nextProps.variables.Machine !== undefined && nextProps.variables.Pdf !==undefined) {
			if (prevState.prevMachineList !== nextProps.variables.Machine) {
				if (nextProps.productSectionName === 'smtList') {
					const List = nextProps.variables.Machine.filter(
						(machine) => machine.values.category === 'SMT Machine'
					);
					return {
						...prevState,
						smtList: true,
						machine: List,
						prevMachineList: nextProps.variables.Machine,
						pdfLink:nextProps.variables.Pdf[0]

					};
				}
				if (nextProps.productSectionName === 'smtPeripheralEquipment') {
					return {
						...prevState,
						smtPeripheralEquipment: true,
						machine: nextProps.variables.Machine,
						prevMachineList: nextProps.variables.Machine,
						pdfLink:nextProps.variables.Pdf[0]
					};
				}
				if (nextProps.productSectionName === 'smtParts') {
					const List = nextProps.variables.Machine.filter((machine) => machine.typeName === 'Parts');
					return {
						...prevState,
						smtParts: true,
						machine: List,
						prevMachineList: nextProps.variables.Machine,
						pdfLink:nextProps.variables.Pdf[0]
					};
				}
				return {
					...prevState,
					machine: nextProps.variables.Machine,
					prevMachineList: nextProps.variables.Machine,
					pdfLink:nextProps.variables.Pdf[0]
				};
			}
		}
		return {
			...prevState
		};
	}

	renderInputFields() {
		const rows = [];
		if (this.state.machine.length !== 0) {
			this.state.machine.forEach((element) =>
				rows.push(
					<ListElementContainer key={element.id}>
						<ElementImageConainer>
							<ElementImage src={element.url} />
						</ElementImageConainer>
						<ElementName href={'/mainPage/productDetail/' + element.id} target="_blank">
							{element.variableName}
						</ElementName>
					</ListElementContainer>
				)
			);
		}
		return rows;
	}

	toggleProductList() {
		this.setState({ productList: !this.state.productList });
	}

	toggleSmtList() {
		const List = this.state.prevMachineList.filter((machine) => machine.values.category === 'SMT Machine');
		this.setState({
			smtList: !this.state.smtList,
			machine: List
		});
	}

	toggleYamahaPartList() {
		const List = this.state.prevMachineList.filter(
			(machine) => machine.typeName === 'Parts' && machine.values.manufacturer === 'YAMAHA'
		);

		this.setState({
			yamahaPart: !this.state.yamahaPart,
			machine: List
		});
	}

	toggleJukiPartList() {
		const List = this.state.prevMachineList.filter(
			(machine) => machine.typeName === 'Parts' && machine.values.manufacturer === 'JUKI'
		);
		console.log(List);
		this.setState({
			jukiPart: !this.state.jukiPart,
			machine: List
		});
	}

	getProductByManufacturer(type, maufacturer, category) {
		const List = this.state.prevMachineList.filter(
			(machine) =>
				machine.typeName === type &&
				machine.values.manufacturer === maufacturer &&
				machine.values.category === category
		);
		this.setState({
			machine: List
		});
	}

	getProductByCategory(category) {
		const List = this.state.prevMachineList.filter((machine) => machine.values.category === category);
		this.setState({
			machine: List
		});
	}

	toggleSmtPeripheralLsit() {
		this.setState({
			smtPeripheralEquipment: !this.state.smtPeripheralEquipment
		});
	}

	togglePrinterLsit() {
		const List = this.state.prevMachineList.filter((machine) => machine.values.category === 'Printer');
		this.setState({
			dekPrinter: !this.state.dekPrinter,
			machine: List
		});
	}

	toggleSmtPartList() {
		const List = this.state.prevMachineList.filter((machine) => machine.typeName === 'Parts');
		this.setState({
			smtParts: !this.state.smtParts,
			machine: List
		});
	}

	render() {
		return (
			<Section>
				<SideBarContainer>
					<SidebarNavigation>
						<SubNavigationList display="block">
							<SubNavigationListElement>
								<SubNavElementAnchor fontSize="18px" onClick={(e) => this.toggleProductList()}>
									Product List
								</SubNavElementAnchor>
								<SubNavigationList display={this.state.productList ? 'block' : 'none'}>
									<SubNavigationListElement>
										<SubNavElementAnchor
											fontSize="16px"
											backgroundColor="#717175"
											onClick={(e) => this.toggleSmtList()}
										>
											SMT Machine
										</SubNavElementAnchor>
										<SubNavigationList display={this.state.smtList ? 'block' : 'none'}>
											<SubNavigationListElement>
												<SubNavElementAnchor
													fontSize="14px"
													backgroundColor="#5C5C62"
													onClick={(e) =>
														this.getProductByManufacturer(
															'Machine',
															'YAMAHA',
															'SMT Machine'
														)}
												>
													YAMAHA
												</SubNavElementAnchor>
											</SubNavigationListElement>
											<SubNavigationListElement>
												<SubNavElementAnchor
													fontSize="14px"
													backgroundColor="#5C5C62"
													onClick={(e) =>
														this.getProductByManufacturer('Machine', 'JUKI', 'SMT Machine')}
												>
													JUKI
												</SubNavElementAnchor>
											</SubNavigationListElement>
											<SubNavigationListElement>
												<SubNavElementAnchor
													fontSize="14px"
													backgroundColor="#5C5C62"
													onClick={(e) =>
														this.getProductByManufacturer(
															'Machine',
															'SAMSUNG',
															'SMT Machine'
														)}
												>
													SAMSUNG
												</SubNavElementAnchor>
											</SubNavigationListElement>
											<SubNavigationListElement>
												<SubNavElementAnchor
													fontSize="14px"
													backgroundColor="#5C5C62"
													onClick={(e) =>
														this.getProductByManufacturer(
															'Machine',
															'PANASONIC',
															'SMT Machine'
														)}
												>
													PANASONIC
												</SubNavElementAnchor>
											</SubNavigationListElement>
											{/* <SubNavigationListElement>
												<SubNavElementAnchor
													fontSize="14px"
													backgroundColor="#5C5C62"
													onClick={(e) =>
														this.getProductByManufacturer('Machine', 'FUJI', 'SMT Machine')}
												>
													FUJI
												</SubNavElementAnchor>
											</SubNavigationListElement> */}
										</SubNavigationList>
									</SubNavigationListElement>
									<SubNavigationListElement>
										<SubNavElementAnchor
											fontSize="16px"
											backgroundColor="#717175"
											onClick={(e) => this.toggleSmtPeripheralLsit()}
										>
											SMT Peripheral{' '}
										</SubNavElementAnchor>
										<SubNavigationList
											display={this.state.smtPeripheralEquipment ? 'block' : 'none'}
										>
											<SubNavigationListElement>
												<SubNavElementAnchor
													fontSize="14px"
													backgroundColor="#5C5C62"
													onClick={(e) => this.getProductByCategory('Conveyor')}
												>
													Conveyor
												</SubNavElementAnchor>
											</SubNavigationListElement>
											<SubNavigationListElement>
												<SubNavElementAnchor
													fontSize="14px"
													backgroundColor="#5C5C62"
													onClick={(e) => this.getProductByCategory('Reflow Oven')}
												>
													Reflow Oven
												</SubNavElementAnchor>
											</SubNavigationListElement>
										</SubNavigationList>
									</SubNavigationListElement>
									<SubNavigationListElement>
										<SubNavElementAnchor
											fontSize="16px"
											backgroundColor="#717175"
											onClick={(e) => this.togglePrinterLsit()}
										>
											Printers
										</SubNavElementAnchor>
										<SubNavigationList display={this.state.dekPrinter ? 'block' : 'none'}>
											<SubNavigationListElement>
												<SubNavElementAnchor
													fontSize="14px"
													backgroundColor="#5C5C62"
													onClick={(e) =>
														this.getProductByManufacturer('Machine', 'DEK', 'Printer')}
												>
													DEK PRINTER
												</SubNavElementAnchor>
											</SubNavigationListElement>
											<SubNavigationListElement>
												<SubNavElementAnchor
													fontSize="14px"
													backgroundColor="#5C5C62"
													onClick={(e) =>
														this.getProductByManufacturer('Machine', 'MPM', 'Printer')}
												>
													MPM PRINTER
												</SubNavElementAnchor>
											</SubNavigationListElement>
											<SubNavigationListElement>
												<SubNavElementAnchor
													fontSize="14px"
													backgroundColor="#5C5C62"
													onClick={(e) =>
														this.getProductByManufacturer('Machine', 'KINGSUN', 'Printer')}
												>
													KINGSUN PRINTER
												</SubNavElementAnchor>
											</SubNavigationListElement>
											<SubNavigationListElement>
												<SubNavElementAnchor
													fontSize="14px"
													backgroundColor="#5C5C62"
													onClick={(e) =>
														this.getProductByManufacturer('Machine', 'YAMAHA', 'Printer')}
												>
													YAMAHA PRINTER
												</SubNavElementAnchor>
											</SubNavigationListElement>
										</SubNavigationList>
									</SubNavigationListElement>
									<SubNavigationListElement>
										<SubNavElementAnchor
											fontSize="16px"
											backgroundColor="#717175"
											onClick={(e) => this.toggleSmtPartList()}
										>
											SMT Parts{' '}
										</SubNavElementAnchor>
										<SubNavigationList display={this.state.smtParts ? 'block' : 'none'}>
											<SubNavigationListElement>
												<SubNavElementAnchor
													fontSize="14px"
													backgroundColor="#5C5C62"
													onClick={(e) => this.toggleYamahaPartList()}
												>
													YAMAHA
												</SubNavElementAnchor>
												<SubNavigationList display={this.state.yamahaPart ? 'block' : 'none'}>
													<SubNavigationListElement>
														<SubNavElementAnchor
															fontSize="14px"
															backgroundColor="#36363e"
															onClick={(e) =>
																this.getProductByManufacturer(
																	'Parts',
																	'YAMAHA',
																	'Feeder'
																)}
														>
															Feeder
														</SubNavElementAnchor>
													</SubNavigationListElement>
													<SubNavigationListElement>
														<SubNavElementAnchor
															fontSize="14px"
															backgroundColor="#36363e"
															onClick={(e) =>
																this.getProductByManufacturer(
																	'Parts',
																	'YAMAHA',
																	'Nozzel'
																)}
														>
															Nozzel
														</SubNavElementAnchor>
													</SubNavigationListElement>
													<SubNavigationListElement>
														<SubNavElementAnchor
															fontSize="14px"
															backgroundColor="#36363e"
															onClick={(e) =>
																this.getProductByManufacturer(
																	'Parts',
																	'YAMAHA',
																	'Stick Feeder'
																)}
														>
															Stick Feeder
														</SubNavElementAnchor>
													</SubNavigationListElement>
													<SubNavigationListElement>
														<SubNavElementAnchor
															fontSize="14px"
															backgroundColor="#36363e"
															onClick={(e) =>
																this.getProductByManufacturer(
																	'Parts',
																	'YAMAHA',
																	'IC Tray'
																)}
														>
															IC Tray
														</SubNavElementAnchor>
													</SubNavigationListElement>
													<SubNavigationListElement>
														<SubNavElementAnchor
															fontSize="14px"
															backgroundColor="#36363e"
															onClick={(e) =>
																this.getProductByManufacturer(
																	'Parts',
																	'YAMAHA',
																	'Other Parts'
																)}
														>
															Parts
														</SubNavElementAnchor>
													</SubNavigationListElement>
												</SubNavigationList>
											</SubNavigationListElement>
											<SubNavigationListElement>
												<SubNavElementAnchor
													fontSize="14px"
													backgroundColor="#5C5C62"
													onClick={(e) => this.toggleJukiPartList()}
												>
													JUKI
												</SubNavElementAnchor>
												<SubNavigationList display={this.state.jukiPart ? 'block' : 'none'}>
													<SubNavigationListElement>
														<SubNavElementAnchor
															fontSize="14px"
															backgroundColor="#36363e"
															onClick={(e) =>
																this.getProductByManufacturer(
																	'Parts',
																	'JUKI',
																	'Feeder'
																)}
														>
															Feeder
														</SubNavElementAnchor>
													</SubNavigationListElement>
													<SubNavigationListElement>
														<SubNavElementAnchor
															fontSize="14px"
															backgroundColor="#36363e"
															onClick={(e) =>
																this.getProductByManufacturer(
																	'Parts',
																	'JUKI',
																	'Nozzel'
																)}
														>
															Nozzel
														</SubNavElementAnchor>
													</SubNavigationListElement>
													<SubNavigationListElement>
														<SubNavElementAnchor
															fontSize="14px"
															backgroundColor="#36363e"
															onClick={(e) =>
																this.getProductByManufacturer(
																	'Parts',
																	'JUKI',
																	'Stick Feeder'
																)}
														>
															Stick Feeder
														</SubNavElementAnchor>
													</SubNavigationListElement>
													<SubNavigationListElement>
														<SubNavElementAnchor
															fontSize="14px"
															backgroundColor="#36363e"
															onClick={(e) =>
																this.getProductByManufacturer(
																	'Parts',
																	'JUKI',
																	'Other Parts'
																)}
														>
															Parts
														</SubNavElementAnchor>
													</SubNavigationListElement>
												</SubNavigationList>
											</SubNavigationListElement>
										</SubNavigationList>
									</SubNavigationListElement>
								</SubNavigationList>
							</SubNavigationListElement>
							<SubNavigationListElement>
								<SubNavElementAnchor fontSize="18px" href={this.state.pdfLink} target="_blank" download>
									Download
								</SubNavElementAnchor>
							</SubNavigationListElement>
						</SubNavigationList>
					</SidebarNavigation>
				</SideBarContainer>
				<MainContainer>
					<MainSection>
						<ContentTitle>Product</ContentTitle>
						<CurrentArticlePath>
							<ArticlePathAnchor>Home </ArticlePathAnchor>
							&gt;
							<ArticlePathAnchor> Products </ArticlePathAnchor>
							&gt;
						</CurrentArticlePath>
						<ListSection>
							<ListContainer>
								<List>{this.renderInputFields()}</List>
							</ListContainer>
						</ListSection>
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

export default connect(mapStateToProps, { getVariables })(Product);

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
		background: #b81b25 url(http://www.ksunsmt.com/cn/images/MenuList_list_bg.png) 234px center no-repeat;
	}
	&:focus {
		outline: none;
		-moz-outline: none;
	}
`;

const SubNavigationList = styled.ul.attrs((props) => ({
	display: props.display || 'none'
}))`
display: ${(props) => props.display};
list-style: none;
	padding: 0px;
	margin: 0px;
`;

const SubNavigationListElement = styled.li`
	margin-top: 1px;
	cursor: pointer;
	list-style: none;
	padding: 0px;
	margin: 0px;
`;

const SubNavElementAnchor = styled.a.attrs((props) => ({
	fontSize: props.fontSize || '14px',
	backgroundColor: props.backgroundColor,
	display: props.display || 'none'
}))`

 
	display: block;
	text-decoration: none;
	white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
	padding-right: 37px;
	color: #fff;
    height: 50px;
    line-height: 50px;
	padding-left: 24px;
	background: #393c40 url(http://www.ksunsmt.com/cn/images/MenuList_list_bg.png) 234px center no-repeat;
	font-size: ${(props) => props.fontSize};
    background-color: ${(props) => props.backgroundColor};
	&:hover {
		
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

const ListSection = styled.div`
	text-align: justify;
	word-wrap: break-word;
	clear: both;
	overflow: hidden;
	padding: 0px;
	margin: 0px;
`;
const ListContainer = styled.div`padding: 0 30px;`;

const List = styled.div`
	display: flex;
	flex-direction: row;
	list-style: none;
	flex-wrap: wrap;
`;
const ListElementContainer = styled.div`
	flex-basis: 33.333333%;
	position: relative;
	width: 250px;
	height: 212px;
	margin-bottom: 12px;
	list-style: none;
	text-align: center;
`;
const ElementImageConainer = styled.div`
	width: 248px;
	height: 164px;
	border: 1px solid #3b3e43;
	padding: 0px;
	margin: 0px;
	
`;
const ElementImage = styled.img`
	width: 248px;
	height: 164px;
	border: none;
	border: 0;
	vertical-align: baseline;
	background:white;
`;

const ElementName = styled.a`
	height: 46px;
	line-height: 46px;
	text-align: center;
	font-size: 16px;
	text-transform: uppercase;
	font-weight: bold;
	text-decoration: none;
	color: white;
`;

const PaginationContainer = styled.div`
	display: block;
	padding: 40px 0;
	text-align: center;
`;

const PaginationSpan = styled.span`
	display: inline-block;
	text-align: center;
`;
const ArrowButton = styled.a.attrs((props) => ({
	float: props.float,
	backgroundPosition: props.backgroundPosition || 'right center'
}))`
    background: url(http://www.ksunsmt.com/cn/images/news_Pages_1.png) no-repeat;
	float:${(props) => props.float};
	background-position: ${(props) => props.backgroundPosition};
    display: block;
    width: 76px;
    height: 31px

`;
const Em = styled.em`
	color: #848ea6;
	font-style: normal;
`;

const EmAnchor = styled.a`
	font-size: 16px;
	color: #848ea6;
	margin: 0 10px;
	display: inline-block;
	float: left;
	height: 31px;
	line-height: 30px;
	text-decoration: none;
	&:hover {
		color: red;
	}
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
