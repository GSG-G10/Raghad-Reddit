BEGIN;
DROP TABLE IF EXISTS users, posts, comments CASCADE;
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) UNIQUE,
    username VARCHAR(100) UNIQUE,
    password VARCHAR(100) NOT NULL,
    img TEXT
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    community TEXT NOT NULL,
    title VARCHAR(100) NOT NULL,
    post_text TEXT,
    vote INTEGER DEFAULT 0,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE

);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    comment_text TEXT,
    vote INTEGER DEFAULT 0,
    post_id INTEGER REFERENCES posts(id) ON UPDATE CASCADE
);

COMMIT;

