CREATE TABLE `tbUsuario` (
	`idUsuario` INT NOT NULL AUTO_INCREMENT,
	`nomeUsuario` varchar(100) NOT NULL,
	`cpfUsuario` varchar(12),
	`endUsuario` varchar(255) NOT NULL,
	`telUsuario` varchar(15) NOT NULL,
	PRIMARY KEY (`idUsuario`)
);

CREATE TABLE `tbPedido` (
	`idPedido` INT NOT NULL AUTO_INCREMENT,
	`idUsuario` INT NOT NULL,
	`idEntregador` INT NOT NULL,
	`descPedido` varchar(255),
	`fraMilanesa` INT DEFAULT '0',
	`fraAssado` INT DEFAULT '0',
	`figaAce` INT DEFAULT '0',
	`bisSuiAce` INT DEFAULT '0',
	`fraMolho` INT DEFAULT '0',
	`arrozRefo` INT DEFAULT '0',
	`arrozLeite` INT DEFAULT '0',
	`macarrao` INT DEFAULT '0',
	`legSalte` INT DEFAULT '0',
	`salaCrua` INT DEFAULT '0',
	`macaCozida` INT DEFAULT '0',
	`feijao` INT,
	`statusPedido` INT DEFAULT '1',
	`canceladoPedido` BOOLEAN DEFAULT '0',
	PRIMARY KEY (`idPedido`)
);

CREATE TABLE `tbEntregador` (
	`idEntregador` INT NOT NULL AUTO_INCREMENT,
	`nomeEntregador` varchar(100) NOT NULL,
	`cpfEntregador` varchar(12),
	`telEntregador` varchar(12) NOT NULL,
	PRIMARY KEY (`idEntregador`)
);

CREATE TABLE `tbFeijao` (
	`idFeijao` INT NOT NULL AUTO_INCREMENT,
	`nomeFeijao` varchar(255) NOT NULL,
	PRIMARY KEY (`idFeijao`)
);

ALTER TABLE `tbPedido` ADD CONSTRAINT `tbPedido_fk0` FOREIGN KEY (`idUsuario`) REFERENCES `tbUsuario`(`idUsuario`);

ALTER TABLE `tbPedido` ADD CONSTRAINT `tbPedido_fk1` FOREIGN KEY (`idEntregador`) REFERENCES `tbEntregador`(`idEntregador`);

ALTER TABLE `tbPedido` ADD CONSTRAINT `tbPedido_fk2` FOREIGN KEY (`feijao`) REFERENCES `tbFeijao`(`idFeijao`);





