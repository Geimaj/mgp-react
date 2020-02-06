import Layout from "../components/Layout";
import Card from "../components/Card";
import styles from "../styles/index.module.css";

export default function HomePage() {
	return (
		<Layout>
			<div className="home">
				<h1 className="title">Cape Town painting services</h1>
				<div className={styles.jumbotron}>
					<div className="glass">
						<h1 className="title">Three decades of experience</h1>
						<p>Highly rated</p>
					</div>
					<p>
						<a
							className="btn btn-primary btn-lg"
							href={process.env.MAIL}
							role="button"
						>
							Request a quote
						</a>
					</p>
				</div>

				<div className={styles.cards}>
					<Card className={styles.card}>
						<h1>30+</h1>
						<h3>Years experience</h3>
					</Card>

					<Card>
						<div>
							<h1>
								<img
									src="/images/southAfrica.png"
									alt="Western Cape, South Africa"
								/>
							</h1>
							<h3>Cape Town, South Africa</h3>
						</div>
					</Card>

					<Card>
						<div>
							<h1>
								<img src="/images/paint.png" />
							</h1>
							<h3>Painting specialists</h3>
						</div>
					</Card>

					<div></div>
				</div>

				{/* <CardContainer>
					<Card>
						<div>
							<h1>30+</h1>
							<h3>Years experience</h3>
						</div>
					</Card>

					<Card>
						<div>
							<h1>
								<img
									src={southAfrica}
									alt="Western Cape, South Africa"
								/>
							</h1>
							<h3>Cape Town, South Africa</h3>
						</div>
					</Card>

					<Card>
						<div>
							<h1>
								<img src={paintBrush} />
							</h1>
							<h3>Painting specialists</h3>
						</div>
					</Card>
				</CardContainer> */}

				<section className="partners">
					<h1 className="title">Partners</h1>
					{/* <img src={midasCoOp} alt="Midas" /> */}
					{/* <img src={Plascon} alt="Plascon" /> */}
				</section>
			</div>
		</Layout>
	);
}
