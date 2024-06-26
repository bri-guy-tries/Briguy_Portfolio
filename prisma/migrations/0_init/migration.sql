-- CreateTable
CREATE TABLE `projects` (
    `project_id` DECIMAL(10, 0) NOT NULL,
    `project_name` VARCHAR(200) NOT NULL,
    `project_date` DATE NOT NULL,
    `desktop_image` VARCHAR(200) NOT NULL,
    `thumbnail_image` VARCHAR(200) NOT NULL,
    `alt_text` VARCHAR(500) NULL,
    `description_short` VARCHAR(500) NOT NULL,
    `description_long` VARCHAR(1000) NOT NULL,

    PRIMARY KEY (`project_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `aboutus` (
    `id` DECIMAL(10, 0) NOT NULL,
    `headline` VARCHAR(100) NULL,
    `srcImage` VARCHAR(200) NOT NULL,
    `altText` VARCHAR(200) NOT NULL,
    `description` VARCHAR(1000) NULL,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

