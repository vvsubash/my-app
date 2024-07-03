CREATE TABLE `shift` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`start_time` text NOT NULL,
	`end_time` text NOT NULL,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP(),
	`updated_at` integer,
	`point` integer,
	FOREIGN KEY (`point`) REFERENCES `point`(`id`) ON UPDATE cascade ON DELETE restrict
);
