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

--person  
INSERT INTO "person" ("username", "password", "fb_id", "fb_display_name", "fb_picture", "email", "first_name", "last_name", "status") 
VALUES ('matt', 'matt5', 'matt_byrne34', 'matt_byrne', 'url', 'matt@mail', 'matt', 'byrne', 1);
  
--person
INSERT INTO "person" ("username", "password", "fb_id", "fb_display_name", "fb_picture", "email", "first_name", "last_name", "status") 
VALUES ('kerry', 'kerry5', 'kerry_byrne34', 'kerry_byrne', 'url', 'kerry@mail', 'kerry', 'byrne', 2);
   
--person
INSERT INTO "person" ("username", "password", "fb_id", "fb_display_name", "fb_picture", "email", "first_name", "last_name", "status") 
VALUES ('tom', 'tom5', 'tom_jones34', 'tom_jones34', 'url', 'tom@mail', 'tom', 'jones', 2);
   
--contributor
INSERT INTO "contributor" ("first_name", "last_name", "bio", "photo_url") 
VALUES ('Mike', 'Jones', 'Professor at some college', 'url'),
('Norm', 'McDonald', 'Comedian', 'url');

--topic
INSERT INTO "topic" ("topic_title", "premise", "common_ground", "published", "contributor1_id", "contributor2_id", "featured", "archive_summary", "icon_url") 
VALUES ('guns', 'more guns or less guns?', 'people should be able to own', false, 1, 2, false, 'people should be able to own','url'), 
('Taxes', 'Should we raise or lower taxes?', 'Taxes are important for a government to function', false, 1, 2, false, 
'Taxes are important for a government to function','url'),
('Marijuana', 'Legalize or no?', 'It should be addressed', false, 1, 2, false, 'It should be addressed', 'url');

--key claim
INSERT INTO "key_claim" ("topic_id", "contributor_id", "claim", "claim_order") 
VALUES 
1(1, 1,'guns make us safer', 1), 
2(1, 2,'guns are dangerous', 2), 
3(2, 1,'decrease taxes because..', 3), 
4(2, 2,'increase taxes because..', 4), 
5(3, 1,'Legalize it because..', 5), 
6(3, 2,'keep it illegal because..', 6);

--stream
INSERT INTO "stream" ("key_claim_id", "contributor_id", "stream_comment", "stream_evidence", "stream_order") 
VALUES 
(1, 1,'regulation for guns not necessary', 'link to some research', 1), 
(2, 2,'guns are killing too many people', 'link to some research', 2), 
(3, 1,'voodoo economics', 'link to some research', 3), 
(4, 2,'raise taxes for infrastructure', 'link to some research', 4), 
(5, 1,'criminalizaton of weed doesnt make sense', 'link to some research', 5), 
(6, 2,'weed makes people crazy', 'link to some research', 6);

--comments stream
INSERT INTO "comments_stream" ("person_id", "topic_id", "stream_id", "comment", "approved") 
VALUES 
(2, 1, 1, 'I agree with Mike Jones', false), 
(3, 2, 3, 'taxes are kjadhjakdh..', false),
(2, 3, 5, 'dont criminalize weed!', false),
(3, 3, 6, 'thats absurd', false);

--comments general
INSERT INTO "comments_general" ("person_id", "topic_id", "comment", "approved") 
VALUES 
(2, 1, 'I agree with Mike Jones', false), 
(3, 2, 'I disagree with Norm McDonald', false),
(3, 2, 'Norm makes a good point', false),
(2, 3, 'Im interested to hear this opinion', false);

--comments key claim
INSERT INTO "comments_key_claim" ("person_id", "topic_id", "key_claim_id", "comment", "approved") 
VALUES 
(2, 3, 6, 'Mike Jones is correct', false),
(3, 2, 2, 'Mike is wrong, guns dangerous', false),
(3, 3, 5, 'I disagree with Norm McDonald', false),
(2, 1, 2, 'Norm said it right', false);


--proposal
INSERT INTO "proposal" ("topic_id", "contributor_id", "proposal") 
VALUES 
(1, 1, 'we should have more guns...'),
(1, 2, 'guns should be regulated more'),
(2, 1, 'taxes should decrease'),
(2, 2, 'taxes should go up'),
(3, 1, 'weed should be legal'),
(3, 2, 'do not legalize weed');

--likes
INSERT INTO "likes" ("person_id", "key_claim_id", "stream_id", "comments_key_claim_id", "comments_stream_id", "comments_general_id", "proposal_id") 
VALUES 
(2, 1, 1, 1, 1, 1, 1),
(3, 2, 2, 2, 2, 2, 2);

--love
INSERT INTO "love" ("person_id", "key_claim_id", "stream_id", "comments_key_claim_id", "comments_stream_id", "comments_general_id", "proposal_id") 
VALUES 
(2, 1, 1, 1, 1, 1, 1),
(3, 2, 2, 2, 2, 2, 2);

	

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




--GET for landing Page feature page
SELECT "topic"."id" as "topic.id", topic.topic_title, topic.published_date, topic.published, topic.featured,
"contributor"."id" as "contributor.id", contributor.first_name, contributor.last_name, contributor.bio, contributor.photo_url
FROM key_claim
JOIN topic ON key_claim.topic_id = topic.id 
JOIN contributor ON key_claim.contributor_id = contributor.id;


--GET for landing Page archive page
SELECT "topic"."id" as "topic.id", topic.topic_title, topic.published_date, topic.published, topic.featured, topic.archive_date, topic.archive_summary, topic.icon_url
FROM topic;