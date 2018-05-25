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

CREATE TABLE "contributor" (
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR(50),
    "last_name" VARCHAR(50),
    "bio" VARCHAR(1000),
    "photo_url" VARCHAR(5000)   
);  

CREATE TABLE "topic" (
    "id" SERIAL PRIMARY KEY,
    "topic_title" VARCHAR(100),
    "premise" VARCHAR(1000),
    "common_ground" VARCHAR(1000),
    "published_date" timestamp with time zone default current_timestamp,
    "published" boolean default false,
    "contributor1_id" INT REFERENCES "contributor",
    "contributor2_id" INT REFERENCES "contributor",
    "featured" boolean default false,
    "archive_summary" VARCHAR(5000),
    "archive_date" timestamp with time zone default current_timestamp,
    "icon_url" VARCHAR(5000)
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
    "stream_comment" VARCHAR(5000),
    "stream_evidence" VARCHAR(1000),
    "stream_order" INT
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
('Taxes', 'Should we raise or lower taxes?', 'Taxes are important for a government to function', false, 
false, 'Taxes are important for a government to function','url');


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
	

--PUT to toggle Published
UPDATE topic SET published = NOT published WHERE id = 2; 

--PUT to turn all featured to false
UPDATE topic SET featured = FALSE; 
UPDATE topic SET featured = TRUE WHERE id = 2;


--GET for Topic Page
SELECT "topic"."id" as "topic.id", topic.topic_title, topic.premise, topic.common_ground, "contributor"."id" as "contributor.id", contributor.first_name, contributor.last_name, contributor.bio, contributor.photo_url, "key_claim"."id" as "key_claim.id", key_claim.claim, "proposal"."id" as "proposal.id", proposal.proposal, "stream"."id" as "stream.id", "stream"."text" as "stream.text", stream.evidence
FROM key_claim
JOIN topic ON key_claim.topic_id = topic.id
JOIN contributor ON key_claim.contributor_id = contributor.id
JOIN proposal ON proposal.contributor_id = contributor.id
JOIN stream ON stream.contributor_id = contributor.id;



--GET for Topic Edit Page
SELECT topic.topic_title, topic.archive_summary, topic.premise, topic.common_ground, 
"topic"."id" as "topic.id", 
"contributor"."id" as "contributor.id", 
"key_claim"."id" as "key_claim.id", 
key_claim.claim, key_claim.claim_order, contributor.first_name, 
contributor.last_name, contributor.bio, proposal.proposal, 
"stream"."text" as "stream.text", stream.evidence
FROM key_claim 
JOIN topic ON key_claim.topic_id = topic.id 
JOIN contributor ON key_claim.contributor_id = contributor.id
JOIN proposal ON proposal.contributor_id = contributor.id
JOIN stream ON stream.contributor_id = contributor.id 
WHERE topic.id = 1;



--GET for landing Page feature page
SELECT "topic"."id" as "topic.id", topic.topic_title, topic.published_date, topic.published, topic.featured,
"contributor"."id" as "contributor.id", contributor.first_name, contributor.last_name, contributor.bio, contributor.photo_url
FROM key_claim
JOIN topic ON key_claim.topic_id = topic.id 
JOIN contributor ON key_claim.contributor_id = contributor.id;


--GET for landing Page archive page
SELECT "topic"."id" as "topic.id", topic.topic_title, topic.published_date, topic.published, topic.featured, topic.archive_date, topic.archive_summary, topic.icon_url
FROM topic;