CREATE TABLE `competition` (
	`id` varchar(255) NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`hackerrank_link` text,
	`time_slot` timestamp,
	`location` text,
	`max_participants` int,
	`is_active` boolean DEFAULT true,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `competition_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `registration` (
	`id` varchar(255) NOT NULL,
	`full_name` text NOT NULL,
	`email` varchar(255) NOT NULL,
	`phone` varchar(20),
	`university` text NOT NULL,
	`student_id` varchar(50) NOT NULL,
	`team_name` text,
	`team_members` text,
	`category` varchar(100) NOT NULL,
	`experience` text,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`status` varchar(20) DEFAULT 'pending',
	CONSTRAINT `registration_id` PRIMARY KEY(`id`),
	CONSTRAINT `registration_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `session` (
	`id` varchar(255) NOT NULL,
	`user_id` varchar(255) NOT NULL,
	`expires_at` timestamp NOT NULL,
	CONSTRAINT `session_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` varchar(255) NOT NULL,
	`age` int,
	`username` text NOT NULL,
	`password_hash` text NOT NULL,
	`is_admin` boolean DEFAULT false,
	CONSTRAINT `user_id` PRIMARY KEY(`id`),
	CONSTRAINT `user_username_unique` UNIQUE(`username`)
);
--> statement-breakpoint
ALTER TABLE `session` ADD CONSTRAINT `session_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;