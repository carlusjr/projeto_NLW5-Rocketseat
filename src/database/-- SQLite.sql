-- SQLite
-- DELETE FROM connections 
-- DELETE FROM messages
-- UPDATE settings SET chat = true WHERE username = "admin"
DELETE FROM messages; 
DELETE FROM connections;
DELETE FROM settings WHERE username<>"admin";

