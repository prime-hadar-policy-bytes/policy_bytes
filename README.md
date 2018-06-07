# Policy Bytes

Policy Bytes is a full-stack webapp designed for Citizens Leauge, a nonpartisan nonprofit based in St. Paul, MN. Citizens Leauge works to ensure Minnesotans of all backgrounds and ideologies have the opportunity to be engaged, inspired and empowered to take an active role in public policymaking. Policy Bytes is designed to host civil, accessiable, and accountable conversations between experts about critical topics in public policy, from tax reform to tip credits. The site features a threaded comment section to allow users to participate in the conversation as well. 


<img src="documentation/images/policyBytes_screen1.png" width="750"/>
<br>
<br>
<img src="documentation/images/policyBytes_screen2.png" width="750"/>

### Built With: 
- React.js & React-Redux
- Node.js
- PostgreSQL
- React-Bootstrap
- Font Awesome
- Passport (Local and Facebook Authorizatoin)
- Filestack
- Express

### Getting Started: 

Required: 
- PostgreSQL
- Node.js
- Express

To start with a sample table: <br>
- Create a new database in PostgreSQL named `policy-bytes-2`
- In terminal, navigate to the folder containing sampleData.psql (at the root of this project)
- run command `psql policy_bytes_2 < dbexport.psql`. This should give you a starting databse. 
- Default admin login, accessible by going to /admin in the URL bar, username: david password: 12



Once the database is set up, to run a development build on your own machine: 
1) Clone/download Repository
2) `npm install`
3) Initialize Facebook Auth by setting up a .env file with a Facebook FACEBOOK_APP_ID and FACEBOOK_APP_SECRET
For local development you'll need to run two server: <br/> 
4) `npm run server`
5) `npm run client` 

Note: Because of the Facebook Auth strategy the development server runs on an https:// URL. This URL is not actually secure so your brower my warn you that it is unsafe. 

Violà!


### Features: 
- Dynamic landing page with an introduction to the site's format, a admin-selectable 'Current Conversation', and an archive section. 
- Topic Page featuring the topic premise, contributors' bios and common ground, and an intuitive discussion platform highlighting the contributors' key points and the back-and-forth conversation between contributors on each key point. 
- A threaded comments section with likes and replys.
- The ability to engage further with relevent non-profits by clicking 'Love' on a contributor's premise or key claim. 
- A robust admin section allowing the user to create/edit/delete, publish/unpublish, and feature/unfeature, topics. 
- A Facebook authorization strategy encouragins users to engage in a civil, respectful manner in the comments section.

## Next Steps: 
- Ability to add/delete key claims and stream items when editing topics. 
- Color code admin's Create Topic view to make it more user friendly. 
- Mobile-friendly styling. 

#### Hand-crafted by: Justin Peterson, David Kesler, Kerry Burns, and Atticus Pomerantz