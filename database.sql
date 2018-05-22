
CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (100) UNIQUE,
    "password" VARCHAR (1000),
    "fb_id" VARCHAR(5000),
    "fb_display_name" VARCHAR(1000),
    "fb_picture" VARCHAR (500),
    "email" VARCHAR (500),
    "first_name" VARCHAR(50),
    "last_name" VARCHAR(50),
    "status" INT
);

CREATE TABLE "topic" (
    "id" SERIAL PRIMARY KEY,
    "topic_title" VARCHAR(100),
    "premise" VARCHAR(1000),
    "common_ground" VARCHAR(1000),
    "published_date" timestamp with time zone default current_timestamp,
    "published" boolean default false,
	"featured" boolean default false,
    "archive_summary" VARCHAR(5000),
    "archive_date" timestamp with time zone default current_timestamp,
    "icon_url" VARCHAR(5000)
 );

 
 
CREATE TABLE "contributor" (
	"id" SERIAL PRIMARY KEY,
	"first_name" VARCHAR(50),
	"last_name" VARCHAR(50),
	"bio" VARCHAR(1000),
	"photo_url" VARCHAR(5000)	
);	
 

CREATE TABLE "key_claim" (
    "id" SERIAL PRIMARY KEY,
    "topic_id" INT REFERENCES "topic",
    "contributor_id" INT REFERENCES "contributor",
    "claim" VARCHAR(500),
    "claim_order" int
);


CREATE TABLE "stream" (
    "id" SERIAL PRIMARY KEY,
    "key_claim_id" INT REFERENCES "key_claim",
    "contributor_id" INT REFERENCES "contributor",
	"text" VARCHAR(5000),
	"evidence" VARCHAR(1000)
);


CREATE TABLE "comments_stream" (
	"id" SERIAL PRIMARY KEY,
	"date" timestamp with time zone default current_timestamp,
	"person_id" INT REFERENCES "person",
	"topic_id" INT REFERENCES "topic",
	"stream_id" INT REFERENCES "stream",
	"comment" VARCHAR(5000),
	"approved" boolean default false
); 


CREATE TABLE "comments_general" (
	"id" SERIAL PRIMARY KEY,
	"date" timestamp with time zone default current_timestamp,
	"person_id" INT REFERENCES "person",
	"topic_id" INT REFERENCES "topic",
	"comment" VARCHAR(5000),
	"approved" boolean default false
);


CREATE TABLE "comments_key_claim" (
	"id" SERIAL PRIMARY KEY,
	"date" timestamp with time zone default current_timestamp,
	"person_id" INT REFERENCES "person",
	"topic_id" INT REFERENCES "topic",
	"key_claim_id" INT REFERENCES "key_claim",
	"comment" VARCHAR(5000),
	"approved" boolean default false
);


CREATE TABLE "proposal" (
	"id" SERIAL PRIMARY KEY,
	"topic_id" INT REFERENCES "topic",
    "contributor_id" INT REFERENCES "contributor",
	"proposal" VARCHAR(1000)
);


CREATE TABLE "like" ( 
	"id" SERIAL PRIMARY KEY,
	"person_id" INT REFERENCES "person",
	"key_claim_id" INT REFERENCES "key_claim",
	"stream_id" INT REFERENCES "stream",
	"comments_key_claim_id" INT REFERENCES "comments_key_claim",
	"comments_stream_id" INT REFERENCES "comments_stream",
	"comments_general_id" INT REFERENCES "comments_general",
	"proposal_id" INT REFERENCES "proposal"
);


CREATE TABLE "love" (
	"id" SERIAL PRIMARY KEY,
	"person_id" INT REFERENCES "person",
	"key_claim_id" INT REFERENCES key_claim,
	"stream_id" INT REFERENCES "stream",
	"comments_key_claim_id" INT REFERENCES "comments_key_claim",
	"comments_stream_id" INT REFERENCES "comments_stream",
	"comments_general_id" INT REFERENCES "comments_general",
	"proposal_id" INT REFERENCES "proposal"
);
	

	
INSERT INTO "person" ("username", "password", "fb_id", "fb_display_name", "fb_picture", "email", "first_name", "last_name", "status") 
VALUES ('matt', 'matt5', 'matt_byrne34', 'matt_byrne', 'url', 'matt@mail', 'matt', 'byrne', 1);
  
INSERT INTO "person" ("username", "password", "fb_id", "fb_display_name", "fb_picture", "email", "first_name", "last_name", "status") 
VALUES ('kerry', 'kerry5', 'kerry_byrne34', 'kerry_byrne', 'url', 'kerry@mail', 'kerry', 'byrne', 2);
   
   
INSERT INTO "topic" ("topic_title", "premise", "common_ground", "published", "featured", "archive_summary", "icon_url") 
VALUES ('guns', 'more guns', 'people should be able to own', false,
false, 'this is the archive summary','url'), 
('Taxes', 'Should we raise or lower taxes?', 'Taxes are important for a government to function', false, false, 'Taxes are important for a government to function','url');
    

INSERT INTO "contributor" ("first_name", "last_name", "bio", "photo_url") 
VALUES ('Mike', 'Jones', 'Professor at some college', 'url');


INSERT INTO "key_claim" ("topic_id", "contributor_id", "claim", "claim_order") 
VALUES (1, 1,'guns make us safer', 1);


INSERT INTO "stream" ("key_claim_id", "contributor_id", "text", "evidence") 
VALUES (1, 1,'according to this study...', 'link to some research');

INSERT INTO "comments_stream" ("person_id", "topic_id", "stream_id", "comment", "approved") 
VALUES (2, 1, 1, 'I agree with Mike Jones', false);

INSERT INTO "comments_general" ("person_id", "topic_id", "comment", "approved") 
VALUES (2, 1, 'I agree with Mike Jones', false);

INSERT INTO "comments_key_claim" ("person_id", "topic_id", "key_claim_id", "comment", "approved") 
VALUES (2, 1, 1, 'Mike Jones is correct', false);

INSERT INTO "proposal" ("topic_id", "contributor_id", "proposal") 
VALUES (1, 1, 'we should have more guns...');

INSERT INTO "like" ("person_id", "key_claim_id", "stream_id", "comments_key_claim_id", "comments_stream_id", "comments_general_id", "proposal_id") 
VALUES (2, 1, 1, 1, 1, 1, 1);


INSERT INTO "love" ("person_id", "key_claim_id", "stream_id", "comments_key_claim_id", "comments_stream_id", "comments_general_id", "proposal_id") 
VALUES (2, 1, 1, 1, 1, 1, 1);
	