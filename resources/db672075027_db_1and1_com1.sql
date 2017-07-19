-- phpMyAdmin SQL Dump
-- version 4.1.14.8
-- http://www.phpmyadmin.net
--
-- Host: db672075027.db.1and1.com
-- Generation Time: May 05, 2017 at 10:26 AM
-- Server version: 5.5.54-0+deb7u2-log
-- PHP Version: 5.4.45-0+deb7u8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `db672075027`
--

-- --------------------------------------------------------

--
-- Table structure for table `_administrator`
--

CREATE TABLE IF NOT EXISTS `_administrator` (
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `_bucket`
--

CREATE TABLE IF NOT EXISTS `_bucket` (
  `id` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `_commande`
--

CREATE TABLE IF NOT EXISTS `_commande` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `date` date NOT NULL,
  `statut` int(11) NOT NULL,
  `message_user` text COLLATE latin1_general_ci,
  `message_seller` text COLLATE latin1_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=4 ;

--
-- Dumping data for table `_commande`
--

INSERT INTO `_commande` (`id`, `id_user`, `date`, `statut`, `message_user`, `message_seller`) VALUES
(1, 1, '2017-04-18', 0, NULL, NULL),
(2, 7, '2017-04-28', 0, NULL, NULL),
(3, 13, '2017-04-26', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `_commande_detail`
--

CREATE TABLE IF NOT EXISTS `_commande_detail` (
  `id_commande` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`id_commande`,`id_product`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `_commande_detail`
--

INSERT INTO `_commande_detail` (`id_commande`, `id_product`, `quantity`) VALUES
(1, 2, 5),
(1, 10, 7),
(2, 2, 3),
(3, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `_consummer`
--

CREATE TABLE IF NOT EXISTS `_consummer` (
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `_consummer`
--

INSERT INTO `_consummer` (`id`) VALUES
(1),
(7),
(13),
(15);

-- --------------------------------------------------------

--
-- Table structure for table `_food`
--

CREATE TABLE IF NOT EXISTS `_food` (
  `id` int(11) NOT NULL,
  `origin` text COLLATE latin1_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `_food`
--

INSERT INTO `_food` (`id`, `origin`) VALUES
(2, 'Espagne'),
(12, 'France'),
(23, 'Cochon'),
(30, ''),
(29, '');

-- --------------------------------------------------------

--
-- Table structure for table `_ingredient_recipe`
--

CREATE TABLE IF NOT EXISTS `_ingredient_recipe` (
  `id_recipe` int(11) NOT NULL DEFAULT '0',
  `ing_name` varchar(100) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `quantity` text COLLATE latin1_general_ci,
  PRIMARY KEY (`id_recipe`,`ing_name`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `_meal`
--

CREATE TABLE IF NOT EXISTS `_meal` (
  `id` int(11) NOT NULL,
  `cal_report` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `_meal`
--

INSERT INTO `_meal` (`id`, `cal_report`) VALUES
(1, 250000),
(7, 1000),
(8, 80000000);

-- --------------------------------------------------------

--
-- Table structure for table `_product`
--

CREATE TABLE IF NOT EXISTS `_product` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(500) COLLATE latin1_general_ci NOT NULL,
  `price` decimal(4,2) NOT NULL,
  `picture` text COLLATE latin1_general_ci,
  `seller_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=32 ;

--
-- Dumping data for table `_product`
--

INSERT INTO `_product` (`id`, `name`, `price`, `picture`, `seller_id`) VALUES
(1, 'Pates au beurre', '0.55', 'http://aladistasio.telequebec.tv/medias/images/jds633844805185770303_Pepeecacio-BS04.jpg', 2),
(2, 'Cerises', '0.50', 'http://p1.storage.canalblog.com/17/31/893986/84584799_o.jpg', 2),
(8, 'Raclette', '99.00', 'https://www.iga.net/~/media/home/inspiring_recipes/recipes/r/19975-raclette-ag.ashx', 2),
(7, 'Pates au couscous', '10.00', 'http://www.speedrecette.com/images/recettes/3595-151678364_p.jpg', 2),
(30, 'desoley', '0.00', 'http://allomamandodo.com/wp-content/uploads/2016/04/shrek_chat_pott%C3%A9-470x260.jpg', 2),
(12, 'Jambon', '1.25', 'http://cdn3.cuisinealafrancaise.com/img/thumbs/Jambon_cuit-b2930eb02ed3ba1d0c35d2a3773cee4e.jpg', 6),
(23, 'Rosette', '35.00', 'http://www.eurodistribution.fr/files/catalog/products/productlarge/france-olona-photo-rosette.jpg', 6),
(29, 'Merlan frit', '0.00', 'https://www.google.be/search?q=merlan+frit&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjvmvue0czTAhWDPRQKHWheAKwQ_AUICigB&biw=1268&bih=637#tbm=isch&q=merlan+frit+yeux&imgrc=aGzSLSI41zNOSM:', 2),
(27, 'AnthonyGiri', '99.99', 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-0/p200x200/408039_274711799256963_519508275_n.jpg?oh=ba51f3b50ba50ee1c6bb148725d2d010&oe=59516129', 2);

-- --------------------------------------------------------

--
-- Table structure for table `_recipe`
--

CREATE TABLE IF NOT EXISTS `_recipe` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` text COLLATE latin1_general_ci NOT NULL,
  `pic` text COLLATE latin1_general_ci NOT NULL,
  `rating` int(11) NOT NULL,
  `level` text COLLATE latin1_general_ci NOT NULL,
  `preparation_time` int(11) NOT NULL,
  `cooking_time` int(11) NOT NULL,
  `date_publi` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=54 ;

-- --------------------------------------------------------

--
-- Table structure for table `_score_recette`
--

CREATE TABLE IF NOT EXISTS `_score_recette` (
  `id_recette` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `note` int(11) NOT NULL,
  PRIMARY KEY (`id_recette`,`id_user`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `_score_recette`
--

INSERT INTO `_score_recette` (`id_recette`, `id_user`, `note`) VALUES
(1, 2, 5),
(1, 4, 4);

-- --------------------------------------------------------

--
-- Table structure for table `_seller`
--

CREATE TABLE IF NOT EXISTS `_seller` (
  `id` int(11) NOT NULL,
  `gerant` text COLLATE latin1_general_ci,
  `adresse` text COLLATE latin1_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `_seller`
--

INSERT INTO `_seller` (`id`, `gerant`, `adresse`) VALUES
(2, 'JE', '23 rue des bananiers'),
(4, 'test', 'test'),
(5, 'DJ', 'Amphi L'),
(6, 'Jean', '15 impasse du betail'),
(14, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `_step_recipe`
--

CREATE TABLE IF NOT EXISTS `_step_recipe` (
  `id_recipe` int(11) NOT NULL,
  `detail` text COLLATE latin1_general_ci NOT NULL,
  `rank` int(11) NOT NULL,
  PRIMARY KEY (`id_recipe`,`rank`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `_user`
--

CREATE TABLE IF NOT EXISTS `_user` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `login` varchar(20) COLLATE latin1_general_ci NOT NULL,
  `mail` varchar(150) COLLATE latin1_general_ci NOT NULL,
  `password` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `name` text COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `login` (`login`),
  UNIQUE KEY `mail` (`mail`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=16 ;

--
-- Dumping data for table `_user`
--

INSERT INTO `_user` (`id`, `login`, `mail`, `password`, `name`) VALUES
(1, 'Testeur', 'test@test.com', 'itest', 'Testouille'),
(2, 'Agri', 'agri@test.com', 'agritest', 'JE vends des bananes'),
(4, 'Test', 'test@test.test', 'testing', 'testeur'),
(5, 'testitude', 'ridouille@test.truc', 'Test', 'ESIR'),
(6, 'Jambon', 'gensbons@mail.com', 'porc', 'Gens''Bons'),
(7, 'MikaDuSwaag', 'mikaesttropswaag@cesttropvrai.com', 'Mm8!', 'Mika Swaag'),
(14, 'dd', 'dd@dd.com', 'Mm8!', 'D D'),
(13, 'JeanDurand', 'JeanDurand@jeandurand.com', 'Mm8!', 'Jean Durand'),
(15, 'Anthony', 'Nope@n.com', 'Test666.', 'Antho le barjo');

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_bucket`
--
CREATE TABLE IF NOT EXISTS `v_bucket` (
`id` int(11)
,`name` varchar(500)
,`seller_id` int(11)
,`price` decimal(4,2)
,`quantity` int(11)
,`picture` text
,`id_product` int(11)
);
-- --------------------------------------------------------

--
-- Stand-in structure for view `v_commande`
--
CREATE TABLE IF NOT EXISTS `v_commande` (
`id` int(11)
,`id_product` bigint(20) unsigned
,`quantity` int(11)
,`seller_id` int(11)
,`date` date
,`statut` int(11)
,`message_user` text
,`message_seller` text
,`id_user` int(11)
,`price` decimal(4,2)
);
-- --------------------------------------------------------

--
-- Stand-in structure for view `v_commande_count`
--
CREATE TABLE IF NOT EXISTS `v_commande_count` (
`nb_comm` bigint(21)
,`date` date
,`seller_id` int(11)
);
-- --------------------------------------------------------

--
-- Stand-in structure for view `v_consummer`
--
CREATE TABLE IF NOT EXISTS `v_consummer` (
`id` int(11)
,`login` varchar(20)
,`mail` varchar(150)
,`password` varchar(50)
,`name` text
);
-- --------------------------------------------------------

--
-- Stand-in structure for view `v_food`
--
CREATE TABLE IF NOT EXISTS `v_food` (
`id` int(11)
,`origin` text
,`name` varchar(500)
,`price` decimal(4,2)
,`picture` text
,`seller_id` int(11)
);
-- --------------------------------------------------------

--
-- Stand-in structure for view `v_meal`
--
CREATE TABLE IF NOT EXISTS `v_meal` (
`id` int(11)
,`cal_report` int(11)
,`name` varchar(500)
,`price` decimal(4,2)
,`picture` text
,`seller_id` int(11)
);
-- --------------------------------------------------------

--
-- Stand-in structure for view `v_recette`
--
CREATE TABLE IF NOT EXISTS `v_recette` (
`id_recette` int(11)
,`id_user` int(11)
,`note` int(11)
,`id` bigint(20) unsigned
,`name` text
,`pic` text
,`rating` int(11)
,`level` text
,`preparation_time` int(11)
,`cooking_time` int(11)
,`score` decimal(14,4)
,`nbNotes` bigint(21)
);
-- --------------------------------------------------------

--
-- Stand-in structure for view `v_seller`
--
CREATE TABLE IF NOT EXISTS `v_seller` (
`id` bigint(20) unsigned
,`login` varchar(20)
,`mail` varchar(150)
,`password` varchar(50)
,`name` text
,`adresse` text
,`gerant` text
);
-- --------------------------------------------------------

--
-- Structure for view `v_bucket`
--
DROP TABLE IF EXISTS `v_bucket`;

CREATE ALGORITHM=UNDEFINED DEFINER=`dbo672075027`@`%` SQL SECURITY DEFINER VIEW `v_bucket` AS (select `_bucket`.`id` AS `id`,`_product`.`name` AS `name`,`_product`.`seller_id` AS `seller_id`,`_product`.`price` AS `price`,`_bucket`.`quantity` AS `quantity`,`_product`.`picture` AS `picture`,`_bucket`.`id_product` AS `id_product` from (`_bucket` join `_product` on((`_bucket`.`id_product` = `_product`.`id`))));

-- --------------------------------------------------------

--
-- Structure for view `v_commande`
--
DROP TABLE IF EXISTS `v_commande`;

CREATE ALGORITHM=UNDEFINED DEFINER=`dbo672075027`@`%` SQL SECURITY DEFINER VIEW `v_commande` AS (select `_commande`.`id` AS `id`,`_product`.`id` AS `id_product`,`_commande_detail`.`quantity` AS `quantity`,`_product`.`seller_id` AS `seller_id`,`_commande`.`date` AS `date`,`_commande`.`statut` AS `statut`,`_commande`.`message_user` AS `message_user`,`_commande`.`message_seller` AS `message_seller`,`_commande`.`id_user` AS `id_user`,`_product`.`price` AS `price` from ((`_commande` join `_commande_detail` on((`_commande`.`id` = `_commande_detail`.`id_commande`))) join `_product` on((`_commande_detail`.`id_product` = `_product`.`id`))));

-- --------------------------------------------------------

--
-- Structure for view `v_commande_count`
--
DROP TABLE IF EXISTS `v_commande_count`;

CREATE ALGORITHM=UNDEFINED DEFINER=`dbo672075027`@`%` SQL SECURITY DEFINER VIEW `v_commande_count` AS select count(0) AS `nb_comm`,`v_commande`.`date` AS `date`,`v_commande`.`seller_id` AS `seller_id` from `v_commande` group by `v_commande`.`seller_id`,`v_commande`.`date`;

-- --------------------------------------------------------

--
-- Structure for view `v_consummer`
--
DROP TABLE IF EXISTS `v_consummer`;

CREATE ALGORITHM=UNDEFINED DEFINER=`dbo672075027`@`%` SQL SECURITY DEFINER VIEW `v_consummer` AS (select `_consummer`.`id` AS `id`,`_user`.`login` AS `login`,`_user`.`mail` AS `mail`,`_user`.`password` AS `password`,`_user`.`name` AS `name` from (`_consummer` join `_user` on((`_consummer`.`id` = `_user`.`id`))));

-- --------------------------------------------------------

--
-- Structure for view `v_food`
--
DROP TABLE IF EXISTS `v_food`;

CREATE ALGORITHM=UNDEFINED DEFINER=`dbo672075027`@`%` SQL SECURITY DEFINER VIEW `v_food` AS (select `_food`.`id` AS `id`,`_food`.`origin` AS `origin`,`_product`.`name` AS `name`,`_product`.`price` AS `price`,`_product`.`picture` AS `picture`,`_product`.`seller_id` AS `seller_id` from (`_food` join `_product` on((`_food`.`id` = `_product`.`id`))));

-- --------------------------------------------------------

--
-- Structure for view `v_meal`
--
DROP TABLE IF EXISTS `v_meal`;

CREATE ALGORITHM=UNDEFINED DEFINER=`dbo672075027`@`%` SQL SECURITY DEFINER VIEW `v_meal` AS (select `_meal`.`id` AS `id`,`_meal`.`cal_report` AS `cal_report`,`_product`.`name` AS `name`,`_product`.`price` AS `price`,`_product`.`picture` AS `picture`,`_product`.`seller_id` AS `seller_id` from (`_meal` join `_product` on((`_meal`.`id` = `_product`.`id`))));

-- --------------------------------------------------------

--
-- Structure for view `v_recette`
--
DROP TABLE IF EXISTS `v_recette`;

CREATE ALGORITHM=UNDEFINED DEFINER=`dbo672075027`@`%` SQL SECURITY DEFINER VIEW `v_recette` AS select `_score_recette`.`id_recette` AS `id_recette`,`_score_recette`.`id_user` AS `id_user`,`_score_recette`.`note` AS `note`,`_recipe`.`id` AS `id`,`_recipe`.`name` AS `name`,`_recipe`.`pic` AS `pic`,`_recipe`.`rating` AS `rating`,`_recipe`.`level` AS `level`,`_recipe`.`preparation_time` AS `preparation_time`,`_recipe`.`cooking_time` AS `cooking_time`,avg(`_score_recette`.`note`) AS `score`,count(0) AS `nbNotes` from (`_score_recette` join `_recipe` on((`_score_recette`.`id_recette` = `_recipe`.`id`))) group by `_recipe`.`id`;

-- --------------------------------------------------------

--
-- Structure for view `v_seller`
--
DROP TABLE IF EXISTS `v_seller`;

CREATE ALGORITHM=UNDEFINED DEFINER=`dbo672075027`@`%` SQL SECURITY DEFINER VIEW `v_seller` AS select `_user`.`id` AS `id`,`_user`.`login` AS `login`,`_user`.`mail` AS `mail`,`_user`.`password` AS `password`,`_user`.`name` AS `name`,`_seller`.`adresse` AS `adresse`,`_seller`.`gerant` AS `gerant` from (`_user` join `_seller` on((`_user`.`id` = `_seller`.`id`)));

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
