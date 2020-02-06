import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
	return (
		<div>
			<img src="/images/logo.png" />
			<nav className={styles.nav}>
				<Link href="/">
					<a className={styles.anchor}>Home</a>
				</Link>
				<Link href="/services">
					<a className={styles.anchor}>Services</a>
				</Link>
				<Link href="/projects">
					<a className={styles.anchor}>Projects</a>
				</Link>
				<Link href="/contact">
					<a className={styles.anchor}>Contact</a>
				</Link>
			</nav>
		</div>
	);
}
