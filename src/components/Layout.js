import Header from "./Header";

const Layout = props => {
	return (
		<div>
			<div
				style={{
					width: "90%",
					margin: "0 auto",
					fontFamily: "roboto, sans-serif"
				}}
			>
				<Header />
				{props.children}
			</div>
		</div>
	);
};

export default Layout;
