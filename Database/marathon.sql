USE [master]
GO
/****** Object:  Database [Mararthon]    Script Date: 2/8/2019 6:19:50 PM ******/
CREATE DATABASE [Mararthon]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Mararthon', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\Mararthon.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Mararthon_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\Mararthon_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [Mararthon] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Mararthon].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Mararthon] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Mararthon] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Mararthon] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Mararthon] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Mararthon] SET ARITHABORT OFF 
GO
ALTER DATABASE [Mararthon] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Mararthon] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Mararthon] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Mararthon] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Mararthon] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Mararthon] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Mararthon] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Mararthon] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Mararthon] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Mararthon] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Mararthon] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Mararthon] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Mararthon] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Mararthon] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Mararthon] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Mararthon] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Mararthon] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Mararthon] SET RECOVERY FULL 
GO
ALTER DATABASE [Mararthon] SET  MULTI_USER 
GO
ALTER DATABASE [Mararthon] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Mararthon] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Mararthon] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Mararthon] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Mararthon] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'Mararthon', N'ON'
GO
ALTER DATABASE [Mararthon] SET QUERY_STORE = OFF
GO
USE [Mararthon]
GO
ALTER DATABASE SCOPED CONFIGURATION SET IDENTITY_CACHE = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [Mararthon]
GO
/****** Object:  Table [dbo].[Plan]    Script Date: 2/8/2019 6:19:50 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Plan](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](100) NOT NULL,
	[UserId] [int] NULL,
 CONSTRAINT [PK_Plan] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PlanNew]    Script Date: 2/8/2019 6:19:50 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PlanNew](
	[Id] [int] NOT NULL,
	[Name] [varchar](100) NULL,
	[UserId] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_PlanNew] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Run]    Script Date: 2/8/2019 6:19:50 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Run](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](100) NULL,
	[Description] [varchar](300) NULL,
	[PlannerId] [int] NULL,
	[Date] [date] NULL,
	[TargetMiles] [int] NULL,
	[ActualMiles] [int] NULL,
	[Complete] [bit] NULL,
 CONSTRAINT [PK_Run] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 2/8/2019 6:19:50 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[First] [varchar](50) NULL,
	[Last] [varchar](50) NOT NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Weights]    Script Date: 2/8/2019 6:19:50 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Weights](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](300) NULL,
	[Description] [varchar](300) NULL,
	[PlannerId] [int] NULL,
	[Date] [date] NULL,
	[TargetReps] [int] NULL,
	[ActualReps] [int] NULL,
	[Complete] [bit] NULL,
 CONSTRAINT [PK_Weights] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Plan] ON 

INSERT [dbo].[Plan] ([Id], [Name], [UserId]) VALUES (1, N'Test Plan                                                                                           ', 1)
SET IDENTITY_INSERT [dbo].[Plan] OFF
SET IDENTITY_INSERT [dbo].[PlanNew] ON 

INSERT [dbo].[PlanNew] ([Id], [Name], [UserId]) VALUES (1, N'TestTest Plan', 1)
SET IDENTITY_INSERT [dbo].[PlanNew] OFF
SET IDENTITY_INSERT [dbo].[Run] ON 

INSERT [dbo].[Run] ([Id], [Name], [Description], [PlannerId], [Date], [TargetMiles], [ActualMiles], [Complete]) VALUES (1, N'Short Run                                                                                           ', N'Run 3 miles                                                                                         ', 1, CAST(N'2019-02-04' AS Date), 3, NULL, 0)
INSERT [dbo].[Run] ([Id], [Name], [Description], [PlannerId], [Date], [TargetMiles], [ActualMiles], [Complete]) VALUES (2, N'Long Run                                                                                            ', N'Run 7 miles with the fast pace                                                                      ', 1, CAST(N'2019-02-05' AS Date), 7, NULL, 0)
SET IDENTITY_INSERT [dbo].[Run] OFF
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([Id], [First], [Last]) VALUES (1, N'Brian                                             ', N'Wright    ')
SET IDENTITY_INSERT [dbo].[Users] OFF
SET IDENTITY_INSERT [dbo].[Weights] ON 

INSERT [dbo].[Weights] ([Id], [Name], [Description], [PlannerId], [Date], [TargetReps], [ActualReps], [Complete]) VALUES (1, N'Bench Press                                                                                         ', N'5 x 7 Bench Press Light Weight                                                                                                                                                                                                                                                                              ', 1, CAST(N'2019-02-04' AS Date), 35, NULL, 0)
INSERT [dbo].[Weights] ([Id], [Name], [Description], [PlannerId], [Date], [TargetReps], [ActualReps], [Complete]) VALUES (2, N'Squat                                                                                               ', N'6 x 5 Squats Light Weight                                                                                                                                                                                                                                                                                   ', 1, CAST(N'2019-02-04' AS Date), 30, NULL, 0)
SET IDENTITY_INSERT [dbo].[Weights] OFF
ALTER TABLE [dbo].[Plan]  WITH CHECK ADD  CONSTRAINT [FK_Plan_Users] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Plan] CHECK CONSTRAINT [FK_Plan_Users]
GO
ALTER TABLE [dbo].[PlanNew]  WITH CHECK ADD  CONSTRAINT [FK_PlanNew_Users] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[PlanNew] CHECK CONSTRAINT [FK_PlanNew_Users]
GO
ALTER TABLE [dbo].[Run]  WITH CHECK ADD  CONSTRAINT [FK_Run_PlanNew] FOREIGN KEY([PlannerId])
REFERENCES [dbo].[PlanNew] ([Id])
GO
ALTER TABLE [dbo].[Run] CHECK CONSTRAINT [FK_Run_PlanNew]
GO
ALTER TABLE [dbo].[Weights]  WITH CHECK ADD  CONSTRAINT [FK_Weights_PlanNew] FOREIGN KEY([PlannerId])
REFERENCES [dbo].[PlanNew] ([Id])
GO
ALTER TABLE [dbo].[Weights] CHECK CONSTRAINT [FK_Weights_PlanNew]
GO
USE [master]
GO
ALTER DATABASE [Mararthon] SET  READ_WRITE 
GO
