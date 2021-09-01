BEGIN;
DROP TABLE IF EXISTS users, posts, comments, community, saved, follower CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(500) UNIQUE,
    username VARCHAR(500) UNIQUE,
    password VARCHAR(100) NOT NULL,
    user_date TIMESTAMP NOT NULL DEFAULT NOW(),
    img TEXT
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    community_name TEXT NOT NULL,
    title VARCHAR(100) NOT NULL,
    post_text TEXT NOT NULL,
    vote INTEGER DEFAULT 0,
    post_date TIMESTAMP NOT NULL DEFAULT NOW(),
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    comment_text TEXT NOT NULL,
    vote INTEGER DEFAULT 0,
    comment_date TIMESTAMP NOT NULL DEFAULT NOW(),
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE community (
    id SERIAL PRIMARY KEY,
    community_name TEXT NOT NULL,
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE
);

CREATE TABLE saved (
    id SERIAL PRIMARY KEY,
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE follower (
    id SERIAL PRIMARY KEY,
    followed_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    follower_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

COMMIT;

