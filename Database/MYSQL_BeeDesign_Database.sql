CREATE DATABASE  IF NOT EXISTS `competition_system_security_concept_v2_db` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `competition_system_security_concept_v2_db`;
-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: database-1.ctcpsucnlwq3.us-east-1.rds.amazonaws.com    Database: competition_system_security_concept_v2_db
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `file`
--

DROP TABLE IF EXISTS `file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `file` (
  `file_id` int NOT NULL AUTO_INCREMENT,
  `cloudinary_file_id` varchar(255) COLLATE latin1_general_ci NOT NULL,
  `cloudinary_url` varchar(255) COLLATE latin1_general_ci NOT NULL,
  `design_title` varchar(2000) COLLATE latin1_general_ci NOT NULL,
  `design_description` varchar(2000) COLLATE latin1_general_ci NOT NULL,
  `created_by_id` int DEFAULT NULL,
  PRIMARY KEY (`file_id`)
) ENGINE=InnoDB AUTO_INCREMENT=112 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `file`
--

LOCK TABLES `file` WRITE;
/*!40000 ALTER TABLE `file` DISABLE KEYS */;
INSERT INTO `file` VALUES (100,'Design/s1uva8ozm54hpkw9dlqv','http://res.cloudinary.com/dcrimkg22/image/upload/v1627026777/Design/s1uva8ozm54hpkw9dlqv.png','rita design 1','rita design 1 description text 1 text 2 text 3 text 4 ....',100),(101,'Design/fxc9kqprn7lkkxtruhhp','http://res.cloudinary.com/dcrimkg22/image/upload/v1627026778/Design/fxc9kqprn7lkkxtruhhp.png','rita design 2','rita design 2 description text 1 text 2 text 3 text 4 ....',100),(102,'Design/zgark0onrcomnibglrtv','http://res.cloudinary.com/dcrimkg22/image/upload/v1627026778/Design/zgark0onrcomnibglrtv.png','rita design 3','rita design 3 description text 1 text 2 text 3 text 4 ....',100),(103,'Design/scci0ozbw8fdufvv9arx','http://res.cloudinary.com/dcrimkg22/image/upload/v1627026778/Design/scci0ozbw8fdufvv9arx.png','rita design 4','rita design 4 description text 1 text 2 text 3 text 4 ....',100),(104,'Design/hvwnjnip9yruu6cfbplb','http://res.cloudinary.com/dcrimkg22/image/upload/v1627026779/Design/hvwnjnip9yruu6cfbplb.png','rita design 5','rita design 5 description text 1 text 2 text 3 text 4 ....',100),(105,'Design/rn9evrn5qzmsri0a83gu','http://res.cloudinary.com/dcrimkg22/image/upload/v1627026779/Design/rn9evrn5qzmsri0a83gu.png','rita design 6','rita design 6 description text 1 text 2 text 3 text 4 ....',100),(106,'Design/i3mdwote9rrc808xoapx','http://res.cloudinary.com/dcrimkg22/image/upload/v1627026779/Design/i3mdwote9rrc808xoapx.png','rita design 7','rita design 7 description text 1 text 2 text 3 text 4 ....',100),(107,'Design/fyode8qgaiarxguqegkm','http://res.cloudinary.com/dcrimkg22/image/upload/v1627026780/Design/fyode8qgaiarxguqegkm.png','rita design 8','rita design 8 description text 1 text 2 text 3 text 4 ....',100),(108,'Design/e2blmlownghxf9dnwt1o','http://res.cloudinary.com/dcrimkg22/image/upload/v1627026780/Design/e2blmlownghxf9dnwt1o.png','rita design 9','rita design 9 description text 1 text 2 text 3 text 4 ....',100),(109,'Design/p8awwkvqwe87ufr3cfww','http://res.cloudinary.com/dcrimkg22/image/upload/v1627026781/Design/p8awwkvqwe87ufr3cfww.png','rita design 10','rita design 10 description text 1 text 2 text 3 text 4 ....',100),(110,'Design/ogliwmpzwjzmdqmpikqs','http://res.cloudinary.com/dcrimkg22/image/upload/v1627026781/Design/ogliwmpzwjzmdqmpikqs.png','rita design 11','rita design 11 description text 1 text 2 text 3 text 4 ....',100),(111,'Design/fhqly8ekiqiraa0w7u23','http://res.cloudinary.com/dcrimkg22/image/upload/v1627026781/Design/fhqly8ekiqiraa0w7u23.png','rita design 12','rita design 12 description text 1 text 2 text 3 text 4 ....',100);
/*!40000 ALTER TABLE `file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`role_id`),
  UNIQUE KEY `role_name` (`role_name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'admin'),(2,'user');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `fullname` varchar(255) COLLATE latin1_general_ci NOT NULL,
  `email` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `user_password` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `role_id` int NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=115 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (100,'rita','rita@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(101,'robert','robert@admin.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',1),(102,'bob','bob@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(103,'braddy','braddy@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(104,'josh','josh@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(105,'john','john@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(106,'fred','fred@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(107,'ashley','ashley@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(108,'amy','amy@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(109,'anita','anita@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(110,'eddy','eddy@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(111,'larry','larry@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(112,'ahtan','ahtan@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(113,'joe','joe@admin.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(114,'gabby','gabby@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-07 21:21:01
