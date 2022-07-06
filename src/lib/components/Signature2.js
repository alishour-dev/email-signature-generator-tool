import React from "react"
import Grid from "./Grid"
import { styles2 } from "../styles"
import PropTypes from "prop-types"

export default function Signature2({
	logo,
	linkedIn,
	skype,
	personName,
	personPosition,
	tel,
	email,
	website,
}) {
	return (
		<Grid
			style={{
				...styles2.tableCard,
				...styles2.mainStyles,
			}}>
			<Grid.Row>
				<Grid.Cell style={styles2.leftCell}>
					<Grid style={styles2.leftSubGrid}>
						<Grid.Row>
							<Grid.Cell style={styles2.imgCell} width={160}>
								<a href={website} style={styles2.aTagSocials}>
									<img
										width={160}
										style={styles2.mainImg}
										src={logo}
										alt='your logo'
										role='presentation'
									/>
								</a>
							</Grid.Cell>
						</Grid.Row>
					</Grid>
				</Grid.Cell>
				<Grid.Cell width='40' style={styles2.verticalLine} color='#221673'>
					<div style={styles2.line} />
				</Grid.Cell>
				<Grid.Cell style={styles2.rightCell}>
					<Grid>
						<Grid.Row>
							<Grid.Cell>
								<h3 color='#0077FF' style={styles2.personName}>
									{personName}
								</h3>
							</Grid.Cell>
							<Grid.Cell style={styles2.verticalAlign}>
								<a href={linkedIn} style={{ marginRight: "6px", ...styles2.aTagSocials }}>
									<img
										src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1656311872/Icons/linkedin_mae6bz.png'
										alt='LinkedIn'
										style={styles2.socialIcon}
									/>
								</a>
							</Grid.Cell>
							<Grid.Cell style={styles2.verticalAlign}>
								<a href={skype} style={styles2.aTagSocials}>
									<img
										src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1657093589/Icons/skype_dk1fqm.png'
										alt='Skype'
										style={styles2.socialIcon}
									/>
								</a>
							</Grid.Cell>
						</Grid.Row>
					</Grid>
					<p color='#221673' style={styles2.personPosition}>
						{personPosition}
					</p>
					<Grid style={{ ...styles2.leftSubGrid, width: "100%" }}>
						<Grid.Row height='18' style={styles2.alignMiddle}>
							<Grid.Cell width='22' style={styles2.alignMiddle}>
								<Grid style={styles2.leftSubGrid}>
									<Grid.Row>
										<Grid.Cell style={styles2.alignBottom}>
											<span style={styles2.miniIconSpan}>
												<img
													src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1656237146/Icons/tel_vhktpx.png'
													alt='phone'
													style={styles2.miniIconImg}
												/>
											</span>
										</Grid.Cell>
									</Grid.Row>
								</Grid>
							</Grid.Cell>
							<Grid.Cell style={{ padding: 0, color: "rgb(0, 0, 0)" }}>
								<a href={`tel:${tel}`} color='#000000' style={styles2.linkTag}>
									<strong>
										<span>+{tel}</span>
									</strong>
								</a>
							</Grid.Cell>
						</Grid.Row>
						<Grid.Row height='18' style={styles2.alignMiddle}>
							<Grid.Cell width='22' style={styles2.alignMiddle}>
								<Grid style={styles2.leftSubGrid}>
									<Grid.Row>
										<Grid.Cell style={styles2.alignBottom}>
											<span style={styles2.miniIconSpan}>
												<img
													src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1656237838/Icons/email_win1q1.png'
													alt='email'
													style={styles2.miniIconImg}
												/>
											</span>
										</Grid.Cell>
									</Grid.Row>
								</Grid>
							</Grid.Cell>
							<Grid.Cell style={{ padding: 0 }}>
								<a href={`mailto:${email}`} color='#000000' style={styles2.linkTag}>
									<strong>
										<span color='#221673' style={styles2.emailDomain}>
											{email?.match(/^.*(?=@)/g)[0]}
										</span>
									</strong>
									<span>@{email?.match(/(?<=@)[^.]+(?=\.)/g)}.com</span>
								</a>
							</Grid.Cell>
						</Grid.Row>
						<Grid.Row height='18' style={styles2.alignMiddle}>
							<Grid.Cell width='22' style={styles2.alignMiddle}>
								<Grid style={styles2.leftSubGrid}>
									<Grid.Row>
										<Grid.Cell style={styles2.alignBottom}>
											<span style={styles2.miniIconSpan}>
												<img
													src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1656237978/Icons/location_qevnho.png'
													alt='location'
													style={{ ...styles2.miniIconImg, width: "11px" }}
												/>
											</span>
										</Grid.Cell>
									</Grid.Row>
								</Grid>
							</Grid.Cell>
							<Grid.Cell style={{ padding: 0, width: "260px" }}>
								<a
									href='https://goo.gl/maps/QNBUVzKLsKqr7MWVA'
									style={{
										...styles2.linkTag,
										width: "260px",
										display: "block",
									}}>
									<span style={{ width: "260px" }}>
										The Exchange Tower- Floor 15- Business Bay- Dubai
									</span>
								</a>
							</Grid.Cell>
						</Grid.Row>
						<Grid.Row height='18' style={styles2.alignMiddle}>
							<Grid.Cell width='22' style={styles2.alignMiddle}>
								<Grid style={styles2.leftSubGrid}>
									<Grid.Row>
										<Grid.Cell style={styles2.alignBottom}>
											<span style={styles2.miniIconSpan}>
												<img
													src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1656237488/Icons/website_simu4o.png'
													alt='website'
													style={styles2.miniIconImg}
												/>
											</span>
										</Grid.Cell>
									</Grid.Row>
								</Grid>
							</Grid.Cell>
							<Grid.Cell style={{ padding: 0 }}>
								<a href={website} style={{ ...styles2.linkTag, lineHeight: "10px" }}>
									<span style={{ display: "block" }}>{website}</span>
								</a>
							</Grid.Cell>
						</Grid.Row>
					</Grid>
				</Grid.Cell>
			</Grid.Row>
		</Grid>
	)
}

Signature2.propTypes = {
	logo: PropTypes.string,
	linkedIn: PropTypes.string,
	skype: PropTypes.string,
	personName: PropTypes.string,
	personPosition: PropTypes.string,
	tel: PropTypes.string,
	email: PropTypes.string,
	website: PropTypes.string,
}
