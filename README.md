# Email Signature Generator

The simplist way to create a custom email signature fluently and on the go, adding up a more professional look and feel to your business emails.

## Component and Props:

There are two main components at this moment, Signature & Signature2 components with the following props for each:

### Signature Component:

| Props                  |                            Description                             |
| ---------------------- | :----------------------------------------------------------------: |
| logo: String           | https link for an avatar, Logo, or any important image to display. |
| facebook: String       |               https link for your facebook profile.                |
| instagram: String      |               https link for your instagram profile.               |
| linkedin: String       |               https link for your linkedin profile.                |
| personName: String     |       Your name, which will be displayed on top (right cell)       |
| personPosition: String |                   Your current business position                   |
| tel: String            |                         Your mobile number                         |
| email: String          |                         Your email address                         |
| website: String        |                         Your website link                          |

### Signature2 Component:

| Props                  |                                                                             Description                                                                              |
| ---------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| logo: String           |                                                  https link for an avatar, Logo, or any important image to display.                                                  |
| address: Object        | Object containing two properties: {link: https link for your organization's current address, text: text which will appear on the card resembling a readable address} |
| linkedin: String       |                                                                https link for your linkedin profile.                                                                 |
| skype: String          |                                                                  https link for your skype profile.                                                                  |
| personName: String     |                                                        Your name, which will be displayed on top (right cell)                                                        |
| personPosition: String |                                                                    Your current business position                                                                    |
| tel: String            |                                                                          Your mobile number                                                                          |
| email: String          |                                                                          Your email address                                                                          |
| website: String        |                                                                          Your website link                                                                           |

## Example:

```
	<Signature
		logo='https://cdn.worldvectorlogo.com/logos/super-ecran.svg'
		facebook='https://www.facebook.com'
		instagram='https://instagram.com'
		linkedIn='https://linkedin.com'
		personName='My Full name'
		personPosition='My business position'
		tel='9678975432'
		email='myemaildomainname@domain.com'
		website='www.mywebsite.com'
	/>

	<Signature2
		logo='https://cdn.worldvectorlogo.com/logos/super-ecran.svg'
		address={{
			link: "https://maps.com",
			text: "My Sreet - City - Country",
		}}
		linkedIn='https://linkedin.com'
		skype='https://skype-profile.com'
		personName='My Full name'
		personPosition='My business position'
		tel='9678975432'
		email='myemaildomainname@domain.com'
		website='www.mywebsite.com'
	/>
```

## For collaboration:

You can collaborate, edit and customize this package by clonning the app, and starting it locally on your machine.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
