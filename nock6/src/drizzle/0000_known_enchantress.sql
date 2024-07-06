CREATE TABLE `travels` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`date` text NOT NULL,
	`task` text DEFAULT (json_array()) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `travels_id_unique` ON `travels` (`id`);