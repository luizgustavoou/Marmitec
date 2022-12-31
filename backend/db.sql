-- MySQL dump 10.13  Distrib 8.0.31, for Linux (x86_64)
--
-- Host: localhost    Database: marmitaria
-- ------------------------------------------------------
-- Server version	8.0.31-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbEntregador`
--

DROP TABLE IF EXISTS `tbEntregador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbEntregador` (
  `idEntregador` int NOT NULL AUTO_INCREMENT,
  `nomeEntregador` varchar(100) NOT NULL,
  `cpfEntregador` varchar(12) DEFAULT NULL,
  `telEntregador` varchar(12) NOT NULL,
  PRIMARY KEY (`idEntregador`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbEntregador`
--

LOCK TABLES `tbEntregador` WRITE;
/*!40000 ALTER TABLE `tbEntregador` DISABLE KEYS */;
INSERT INTO `tbEntregador` VALUES (1,'Diogo','888888888888','22222222222');
/*!40000 ALTER TABLE `tbEntregador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbPedido`
--

DROP TABLE IF EXISTS `tbPedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbPedido` (
  `idPedido` int NOT NULL AUTO_INCREMENT,
  `idUsuario` int NOT NULL,
  `idEntregador` int DEFAULT NULL,
  `descPedido` varchar(255) NOT NULL,
  `qtdeProteina` int NOT NULL,
  `statusPedido` int NOT NULL DEFAULT '1',
  `canceladoPedido` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`idPedido`),
  KEY `tbPedido_fk0` (`idUsuario`),
  KEY `tbPedido_fk1` (`idEntregador`),
  CONSTRAINT `tbPedido_fk0` FOREIGN KEY (`idUsuario`) REFERENCES `tbUsuario` (`idUsuario`),
  CONSTRAINT `tbPedido_fk1` FOREIGN KEY (`idEntregador`) REFERENCES `tbEntregador` (`idEntregador`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbPedido`
--

LOCK TABLES `tbPedido` WRITE;
/*!40000 ALTER TABLE `tbPedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbPedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbUsuario`
--

DROP TABLE IF EXISTS `tbUsuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbUsuario` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `nomeUsuario` varchar(100) NOT NULL,
  `cpfUsuario` varchar(12) DEFAULT NULL,
  `endUsuario` varchar(255) NOT NULL,
  `telUsuario` varchar(15) NOT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbUsuario`
--

LOCK TABLES `tbUsuario` WRITE;
/*!40000 ALTER TABLE `tbUsuario` DISABLE KEYS */;
INSERT INTO `tbUsuario` VALUES (1,'Luiz Gustavo','99999999999','Rua Aeroporto de Navegantes 249','1111111111');
/*!40000 ALTER TABLE `tbUsuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-31 15:47:13
