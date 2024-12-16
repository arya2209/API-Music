-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 16, 2024 at 01:00 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `api_arya`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int NOT NULL,
  `band` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `tahun_pembentukan` int NOT NULL,
  `anggota` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `vocalist` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `guitarist` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `bassist` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `drummer` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `genre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `album` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `judul_lagu` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `band`, `tahun_pembentukan`, `anggota`, `vocalist`, `guitarist`, `bassist`, `drummer`, `genre`, `album`, `judul_lagu`) VALUES
(5, 'The Beatles', 1957, 'John Lennon, Paul McCartney, George Harrison, Ringgo Star', 'John Lennon, Paul McCartney', 'George Harrison', 'Paul McCartney', 'Ringgo Star', 'Rock', 'Abbey Road', 'Because'),
(7, 'Metallica', 1981, 'James Hetfield, Kirk Hammett, Lars Ulrich, Ron McGovner, Cliff Burton, dll', 'James Hetfield', 'Kirk Hammett', 'Cliff Burton', 'Lars Ulrich', 'Heavy Metal', 'And Justice for All', 'to Live Is To Die');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
