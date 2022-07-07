import React from "react"
import { createRoot } from "react-dom/client"
import Signature2 from "./lib/components/Signature2"

const data = {
	name: "John Doe",
	position: "Director of Technology",
	linkedIn: "https://www.linkedin.com",
	skype: "https://www.skype.com",
	tel: "9619191919191",
	email: "john.doe@email.com",
}

const root = createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<div
			style={{
				width: "98vw",
				height: "98vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<div
				style={{
					boxShadow: "0 0 6px 2px rgb(34 22 115 / 15%)",
					padding: "20px",
					borderRadius: "10px",
				}}>
				<Signature2
					logo='https://www.pngfind.com/pngs/m/683-6834807_logo-google-my-business-png-google-my-business.png'
					address={{
						link: "https://goo.gl/maps/QNBUVzKLsKqr7MWVA",
						text: "The Exchange Tower- Floor 15- Business Bay- Dubai",
					}}
					linkedIn={data.linkedIn}
					skype={data.skype}
					personName={data.name}
					personPosition={data.position}
					tel={data.tel}
					email={data.email}
					website='https://www.johndoe.com/'
				/>
			</div>
		</div>
	</React.StrictMode>
)
