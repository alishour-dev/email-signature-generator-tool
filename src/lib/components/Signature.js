import React from "react"
import Grid from "./Grid"
import { styles } from "../styles"

export default function Signature({
	logo,
	facebook,
	instagram,
	linkedIn,
	personName,
	personPosition,
	tel,
	email,
	website,
}) {
	return (
		<div style={styles.tableWrapper}>
			<Grid
				style={{
					...styles.tableCard,
					...styles.mainStyles,
					padding: "12px",
					borderRadius: "10px 10px 0 10px",
					boxShadow: "0px 0px 6px 2px rgba(34, 22, 115, 0.15)",
				}}>
				<Grid.Row>
					<Grid.Cell style={styles.leftCell}>
						<Grid style={styles.leftSubGrid}>
							<Grid.Row>
								<Grid.Cell style={styles.imgCell}>
									<img
										style={styles.mainImg}
										src={logo}
										alt='Antwerp logo'
										role='presentation'
									/>
								</Grid.Cell>
							</Grid.Row>
							<Grid.Row>
								<Grid.Cell height='24' />
							</Grid.Row>
							<Grid.Row>
								<Grid.Cell style={styles.imgCell}>
									<Grid style={{ ...styles.leftSubGrid, display: "inline-block" }}>
										<Grid.Row>
											<Grid.Cell>
												<a href={facebook} style={styles.aTagSocials}>
													<img
														src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1656242124/Icons/facebook_bbrqkn.png'
														alt='Facebook'
														style={styles.socialIcon}
													/>
												</a>
											</Grid.Cell>
											<Grid.Cell width='8' />
											<Grid.Cell>
												<a href={instagram} style={styles.aTagSocials}>
													<img
														src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1656242125/Icons/ig_laqxtz.png'
														alt='Instagram'
														style={styles.socialIcon}
													/>
												</a>
											</Grid.Cell>
											<Grid.Cell width='8' />
											<Grid.Cell>
												<a href={linkedIn} style={styles.aTagSocials}>
													<img
														src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1656242124/Icons/linkedin_wkfzuc.png'
														alt='LinkedIn'
														style={styles.socialIcon}
													/>
												</a>
											</Grid.Cell>
											<Grid.Cell width='8' />
										</Grid.Row>
									</Grid>
								</Grid.Cell>
							</Grid.Row>
						</Grid>
					</Grid.Cell>

					<Grid.Cell width='40' />

					<Grid.Cell style={styles.rightCell}>
						<h3 color='#0077FF' style={styles.personName}>
							{personName}
						</h3>
						<p color='#221673' style={styles.personPosition}>
							{personPosition}
						</p>
						<Grid style={{ ...styles.leftSubGrid, width: "100%" }}>
							<Grid.Row>
								<Grid.Cell height='24' />
							</Grid.Row>
							<Grid.Row>
								<Grid.Cell
									style={styles.horizontalLine}
									height='2'
									color='#221673'
									direction='horizontal'
								/>
							</Grid.Row>
							<Grid.Row>
								<Grid.Cell height='16' />
							</Grid.Row>
						</Grid>

						<Grid style={{ ...styles.leftSubGrid, width: "100%" }}>
							<Grid.Row height='25' style={styles.alignMiddle}>
								<Grid.Cell width='30' style={styles.alignMiddle}>
									<Grid style={styles.leftSubGrid}>
										<Grid.Row>
											<Grid.Cell style={styles.alignBottom}>
												<span style={styles.miniIconSpan}>
													<img
														src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1656237146/Icons/tel_vhktpx.png'
														alt='phone'
														style={styles.miniIconImg}
													/>
												</span>
											</Grid.Cell>
										</Grid.Row>
									</Grid>
								</Grid.Cell>
								<Grid.Cell style={{ padding: 0, color: "rgb(0, 0, 0)" }}>
									<a href={`tel:${tel}`} color='#000000' style={styles.linkTag}>
										<strong>
											<span>{tel}</span>
										</strong>
									</a>
								</Grid.Cell>
							</Grid.Row>
							<Grid.Row height='25' style={styles.alignMiddle}>
								<Grid.Cell width='30' style={styles.alignMiddle}>
									<Grid style={styles.leftSubGrid}>
										<Grid.Row>
											<Grid.Cell style={styles.alignBottom}>
												<span style={styles.miniIconSpan}>
													<img
														src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1656237838/Icons/email_win1q1.png'
														alt='email'
														style={styles.miniIconImg}
													/>
												</span>
											</Grid.Cell>
										</Grid.Row>
									</Grid>
								</Grid.Cell>
								<Grid.Cell style={{ padding: 0 }}>
									<a href={`emailto:${email}`} color='#000000' style={styles.linkTag}>
										<strong>
											<span color='#221673' style={styles.emailDomain}>
												{email?.match(/^.*(?=@)/g)[0]}
											</span>
										</strong>
										<span>@{email?.match(/(?<=@)[^.]+(?=\.)/g)}.com</span>
									</a>
								</Grid.Cell>
							</Grid.Row>
							<Grid.Row height='25' style={styles.alignMiddle}>
								<Grid.Cell width='30' style={styles.alignMiddle}>
									<Grid style={styles.leftSubGrid}>
										<Grid.Row>
											<Grid.Cell style={styles.alignBottom}>
												<span style={styles.miniIconSpan}>
													<img
														src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1656237978/Icons/location_qevnho.png'
														alt='location'
														style={styles.miniIconImg}
													/>
												</span>
											</Grid.Cell>
										</Grid.Row>
									</Grid>
								</Grid.Cell>
								<Grid.Cell style={{ padding: 0 }}>
									<a href='https://goo.gl/maps/QNBUVzKLsKqr7MWVA' style={styles.linkTag}>
										<span>The Exchange Tower- Floor 15- Business Bay- Dubai</span>
									</a>
								</Grid.Cell>
							</Grid.Row>
							<Grid.Row height='25' style={styles.alignMiddle}>
								<Grid.Cell width='30' style={styles.alignMiddle}>
									<Grid style={styles.leftSubGrid}>
										<Grid.Row>
											<Grid.Cell style={styles.alignBottom}>
												<span style={styles.miniIconSpan}>
													<img
														src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1656237488/Icons/website_simu4o.png'
														alt='website'
														style={styles.miniIconImg}
													/>
												</span>
											</Grid.Cell>
										</Grid.Row>
									</Grid>
								</Grid.Cell>
								<Grid.Cell style={{ padding: 0 }}>
									<a href={website} style={{ ...styles.linkTag, lineHeight: "20px" }}>
										<span>{website}</span>
									</a>
								</Grid.Cell>
							</Grid.Row>
						</Grid>
					</Grid.Cell>
				</Grid.Row>
			</Grid>
		</div>
	)
}
