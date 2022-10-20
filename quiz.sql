SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

drop database if exists `quiz`;
Create database if not exists `quiz` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `quiz`;

Drop table if exists `pizza`;
CREATE TABLE IF NOT EXISTS `pizza`(
	`Piz_ID` varchar(10) not null primary key,
    `Piz_Result` varchar(50) not null,
    `Piz_Description` varchar(500) not null,
    `Piz_Meat` varchar(50) not null,
    `Piz_Hated` varchar(50) not null,
    `Piz_Cheese` varchar(50) not null,
    `Piz_Second` varchar(50) not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

Drop table if exists `burger`;
CREATE TABLE IF NOT EXISTS `burger`(
	`Bur_ID` varchar(10) not null primary key,
    `Bur_Result` varchar(50) not null,
    `Bur_Description` varchar(500) not null,
    `Bur_Bun` varchar(50) not null,
    `Bur_Patty` varchar(50) not null,
    `Bur_Hated` varchar(50) not null,
    `Bur_Cheese` varchar(50) not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

Drop table if exists `steak`;
CREATE TABLE IF NOT EXISTS `steak`(
	`Ste_ID` varchar(10) not null primary key,
    `Ste_Result` varchar(50) not null,
    `Ste_Description` varchar(500) not null,
    `Ste_Rarity` varchar(50) not null,
    `Ste_Wine` varchar(50) not null,
    `Ste_Sauce` varchar(50) not null,
    `Ste_Hated` varchar(50) not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

Drop table if exists `pasta`;
CREATE TABLE IF NOT EXISTS `pasta`(
	`Pas_ID` varchar(10) not null primary key,
    `Pas_Result` varchar(50) not null,
    `Pas_Description` varchar(500) not null,
    `Pas_Type` varchar(50) not null,
    `Pas_Meat` varchar(50) not null,
    `Pas_Sauce` varchar(50) not null,
    `Pas_Topping` varchar(50) not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

Drop table if exists `wings`;
CREATE TABLE IF NOT EXISTS `wings`(
	`Win_ID` varchar(10) not null primary key,
    `Win_Result` varchar(50) not null,
    `Win_Description` varchar(500) not null,
    `Win_Flavour` varchar(50) not null,
    `Win_Dip` varchar(50) not null,
    `Win_Cooking` varchar(50) not null,
    `Win_Hated` varchar(50) not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

Drop table if exists `sandwich`;
CREATE TABLE IF NOT EXISTS `sandwich`(
	`San_ID` varchar(10) not null primary key,
    `San_Result` varchar(50) not null,
    `San_Description` varchar(500) not null,
    `San_Bread` varchar(50) not null,
    `San_Meat` varchar(50) not null,
    `San_Hated` varchar(50) not null,
    `San_Cooking` varchar(50) not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;