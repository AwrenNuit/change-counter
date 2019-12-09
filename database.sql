DROP TABLE "change";

CREATE TABLE "change" (
	"id" serial primary key,
	"path" varchar(255) not null,
	"name" varchar(255) not null,
	"class" varchar(255),
	"quantity" integer DEFAULT 0
);

INSERT INTO "change" ("path", "name", "class") VALUES('images/penny.jpg', 'penny', 'coin');
INSERT INTO "change" ("path", "name", "class") VALUES('images/nickel.jpg', 'nickel', 'coin');
INSERT INTO "change" ("path", "name", "class") VALUES('images/dime.jpg', 'dime', 'coin');
INSERT INTO "change" ("path", "name", "class") VALUES('images/quarter.jpg', 'quarter', 'coin');
INSERT INTO "change" ("path", "name", "class") VALUES('images/one.jpg', 'one-dollar', 'bill');
INSERT INTO "change" ("path", "name", "class") VALUES('images/five.jpg', 'five-dollar', 'bill');
INSERT INTO "change" ("path", "name", "class") VALUES('images/ten.jpg', 'ten-dollar', 'bill');
INSERT INTO "change" ("path", "name", "class") VALUES('images/twenty.jpg', 'twenty-dollar', 'bill');