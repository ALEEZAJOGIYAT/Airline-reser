import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
	Link,
	Button,
	Card,
	Typography,
	Toolbar,
	Container,
} from "@mui/material";
import "../../../App.css";
import NavBar from "../../../common/navbar";
import qatar from "../../../images/qatar.webp";
import AppBar from "@mui/material/AppBar";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Lottie from "react-lottie";
import FooterPage from "../../../common/footer";

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="./home">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const Dashboard = () => {
	return (
		<>
			<NavBar />
			<main>
				{/* Hero unit */}
				<Container sx={{ py: 8 }} maxWidth="md">
					<Typography
						component="h1"
						variant="h2"
						align="center"
						color="text.primary"
						gutterBottom
					>
						All Flights
					</Typography>
					<br />
					<br />
					<br />
					{/* End hero unit */}
					<Grid container spacing={4}>
						{/* {proData?.map((card, index) => ( */}
						<Grid item xs={12} sm={6} md={4}>
							<Card sx={{ maxWidth: 345, marginRight: "10px" }}>
								<CardMedia
									component="img"
									alt="green iguana"
									height="140"
									image={qatar}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										QATAR
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Let's go places together Discover the latest offers and news
										and start planning your next trip with us. FIFA World Cup
										Qatar 2022™ Get up to 12% savings on your Qatar Airways
										flight PLUS a chance to receive a complimentary FIFA World
										Cup Qatar 2022™ package*
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										onClick={() =>
											window.open(
												"https://www.qatarairways.com/en-pk/homepage.html?CID=SXPK23456846M&account=Google-SEA_SASC-PK-EN-Brand&campaign=PK-Brand-Rest-EN_exact&adgroup=Airline&term=qatar+airline&gclid=Cj0KCQjw8uOWBhDXARIsAOxKJ2Hgf27k4Qm6cOZaQcJHw_v_ugv3xchnqKcowoc6aq_n3iF70cZcYa4aAtzeEALw_wcB&gclsrc=aw.ds"
											)
										}
									>
										Book Flights
									</Button>
								</CardActions>
							</Card>
						</Grid>
						{/* ))} */}
					</Grid>
				</Container>
			</main>
			{/* Footer */}
			<FooterPage />
			{/* End footer */}
		</>
	);
};

export default Dashboard;
