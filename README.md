# Policy Bytes

Policy Bytes is a full-stack webapp designed for Citizens Leauge, a nonpartisan nonprofit based in St. Paul, MN. Citizens Leauge works to ensure Minnesotans of all backgrounds and ideologies have the opportunity to be engaged, inspired and empowered to take an active role in public policymaking. Policy Bytes is designed to host civil, accessiable, and accountable conversations between experts about critical topics in public policy, from tax reform to tip credits. The site features a threaded comment section to allow users to participate in the conversation as well. 


<img src="documentation/images/policyBytes_screen1.png" width="750"/>
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
- In terminal, navigate to the foler containing sampleData.psql (at the root of this project)
- run command `psql policy_bytes_2 < dbexport.psql`
- Default admin username: david password: 12

To start wiht an empty databse: 
- Run the `CREATE TABLE` SQL queries in database.sql in Postico <br>


Once the database is set up, to run a development build on your own machine: 
1) Clone/download Repository
2) `npm install`
3) Initialize Facebook Auth by setting up a .env file with a Facebook FACEBOOK_APP_ID and FACEBOOK_APP_SECRET
For local development you'll need to run two server: <br/> 
4) `npm run server`
5) `npm run client` 

Note: Because of the Facebook Auth strategy the development server runs on an https:// URL. This URL is not actually secure so your brower my warn you that it is unsafe. 

Violà!



