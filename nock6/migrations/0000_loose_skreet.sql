CREATE TABLE `travels` (
	`id` text,
	`title` text NOT NULL,
	`date` text,
	`task` text DEFAULT (json_array()) NOT NULL
);
