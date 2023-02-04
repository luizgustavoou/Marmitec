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
-- Table structure for table `tbFeijao`
--

DROP TABLE IF EXISTS `tbFeijao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbFeijao` (
  `idFeijao` int NOT NULL AUTO_INCREMENT,
  `nomeFeijao` varchar(255) NOT NULL,
  PRIMARY KEY (`idFeijao`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbFeijao`
--

LOCK TABLES `tbFeijao` WRITE;
/*!40000 ALTER TABLE `tbFeijao` DISABLE KEYS */;
INSERT INTO `tbFeijao` VALUES (1,'Feijão Branco'),(2,'Feijão Marrom'),(3,'Feijão Preto');
/*!40000 ALTER TABLE `tbFeijao` ENABLE KEYS */;
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
  `idEntregador` int NOT NULL,
  `descPedido` varchar(255) DEFAULT NULL,
  `fraMilanesa` int DEFAULT '0',
  `fraAssado` int DEFAULT '0',
  `figaAce` int DEFAULT '0',
  `bisSuiAce` int DEFAULT '0',
  `fraMolho` int DEFAULT '0',
  `arrozRefo` int DEFAULT '0',
  `arrozLeite` int DEFAULT '0',
  `macarrao` int DEFAULT '0',
  `legSalte` int DEFAULT '0',
  `salaCrua` int DEFAULT '0',
  `macaCozida` int DEFAULT '0',
  `feijao` int DEFAULT NULL,
  `statusPedido` int DEFAULT '1',
  `canceladoPedido` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`idPedido`),
  KEY `tbPedido_fk0` (`idUsuario`),
  KEY `tbPedido_fk1` (`idEntregador`),
  KEY `tbPedido_fk2` (`feijao`),
  CONSTRAINT `tbPedido_fk0` FOREIGN KEY (`idUsuario`) REFERENCES `tbUsuario` (`idUsuario`),
  CONSTRAINT `tbPedido_fk1` FOREIGN KEY (`idEntregador`) REFERENCES `tbEntregador` (`idEntregador`),
  CONSTRAINT `tbPedido_fk2` FOREIGN KEY (`feijao`) REFERENCES `tbFeijao` (`idFeijao`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbPedido`
--

LOCK TABLES `tbPedido` WRITE;
/*!40000 ALTER TABLE `tbPedido` DISABLE KEYS */;
INSERT INTO `tbPedido` VALUES (1,1,1,'Por favor tirar o molho das proteínas!',1,1,1,0,0,1,1,1,1,1,1,3,1,0),(2,1,1,'',3,0,0,0,0,2,2,2,0,0,0,2,2,0),(3,1,1,'Tirar cebola do feijao por favor!',0,0,1,1,1,2,0,2,1,0,1,1,3,0),(4,1,1,'',0,1,0,1,1,1,1,0,1,1,2,3,1,0),(5,1,1,'',3,0,0,0,0,0,0,6,0,0,0,1,1,0),(6,1,1,'',3,0,0,0,0,0,0,0,0,6,0,1,1,0),(7,1,1,'',0,0,0,0,3,0,0,0,6,0,0,1,1,0);
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
  `username`varchar(30) NOT NULL,
  `password`varchar(30) NOT NULL,
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
INSERT INTO `tbUsuario` VALUES (1,'luizgustavoo', '123', 'Luiz Gustavo','99999999999','Rua Aeroporto de Navegantes 249','1111111111');
/*!40000 ALTER TABLE `tbUsuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'marmitaria'
--
/*!50003 DROP PROCEDURE IF EXISTS `sp_ShowPedidos` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ShowPedidos`()
BEGIN
	SELECT
	p.idPedido, e.nomeEntregador, p.statusPedido, p.canceladoPedido, p.descPedido, u.nomeUsuario, u.endUsuario,
	u.telUsuario, p.arrozLeite, p.arrozRefo, p.bisSuiAce, p.feijao, p.figaAce, p.fraAssado,
	p.fraMilanesa, p.fraMolho, p.legSalte, p.macaCozida, p.macarrao, p.salaCrua
	FROM tbPedido as p         
	INNER JOIN tbUsuario as u
	ON p.idUsuario = u.idUsuario
	INNER JOIN tbEntregador as e
	ON p.idEntregador = e.idEntregador;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-11 19:01:58
