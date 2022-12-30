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
	`descPedido` varchar(255) NOT NULL,
	`qtdeProteina` INT NOT NULL,
	`statusPedido` INT NOT NULL,
	`canceladoPedido` BOOLEAN,
	PRIMARY KEY (`idPedido`)
);

CREATE TABLE `tbEntregador` (
	`idEntregador` INT NOT NULL AUTO_INCREMENT,
	`nomeEntregador` varchar(100) NOT NULL,
	`cpfEntregador` varchar(12),
	`telEntregador` varchar(12) NOT NULL,
	PRIMARY KEY (`idEntregador`)
);

ALTER TABLE `tbPedido` ADD CONSTRAINT `tbPedido_fk0` FOREIGN KEY (`idUsuario`) REFERENCES `tbUsuario`(`idUsuario`);

ALTER TABLE `tbPedido` ADD CONSTRAINT `tbPedido_fk1` FOREIGN KEY (`idEntregador`) REFERENCES `tbEntregador`(`idEntregador`);




