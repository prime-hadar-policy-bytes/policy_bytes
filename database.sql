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
 
 CREATE TABLE "proposal" (
    "id" SERIAL PRIMARY KEY,
    "topic_id" INT REFERENCES "topic" ON DELETE CASCADE,
    "contributor_id" INT REFERENCES "contributor",
    "proposal" VARCHAR(1000)
);

CREATE TABLE "key_claim" (
    "id" SERIAL PRIMARY KEY,
    "topic_id" INT REFERENCES "topic" ON DELETE CASCADE,
    "contributor_id" INT REFERENCES "contributor",
    "claim" VARCHAR(500),
    "claim_order" int
);


CREATE TABLE "stream" (
    "id" SERIAL PRIMARY KEY,
    "key_claim_id" INT REFERENCES "key_claim" ON DELETE CASCADE,
    "contributor_id" INT REFERENCES "contributor",
    "stream_comment" VARCHAR(5000),
    "stream_evidence" VARCHAR(1000),
    "stream_order" INT
);


CREATE TABLE "comments_general" (
    "id" SERIAL PRIMARY KEY,
    "date" timestamp with time zone default current_timestamp,
    "person_id" INT REFERENCES "person",
    "topic_id" INT REFERENCES "topic",
    "comment" VARCHAR(5000),
    "approved" boolean default false,
    "order" VARCHAR(5000),
    "likes" INT,
    "owner" INT,
    "key_claim_id" INT REFERENCES "key_claim",
    "stream_id" INT REFERENCES "stream",
    "proposal_id" INT REFERENCES "proposal"
);

CREATE TABLE "like" ( 
    "id" SERIAL PRIMARY KEY,
    "person_id" INT REFERENCES "person",
    "key_claim_id" INT REFERENCES "key_claim",
    "stream_id" INT REFERENCES "stream",
    "comments_general_id" INT REFERENCES "comments_general",
    "proposal_id" INT REFERENCES "proposal",
     "count" INT
);

CREATE TABLE "love" (
    "id" SERIAL PRIMARY KEY,
    "person_id" INT REFERENCES "person",
    "key_claim_id" INT REFERENCES key_claim,
    "stream_id" INT REFERENCES "stream",
    "comments_general_id" INT REFERENCES "comments_general",
    "proposal_id" INT REFERENCES "proposal"
);