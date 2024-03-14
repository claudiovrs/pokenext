import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Navbar.module.css";

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<Link href="/">
				<a className={styles.link_home}>
					<div className={styles.logo}>
						<Image
							src="/images/pokeball.png"
							width="30"
							height="30"
							alt="PokeNext"
						/>
						<h1>PokeNext</h1>
					</div>
				</a>
			</Link>
			<ul className={styles.link_items}>
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<a>Sobre</a>
					</Link>
				</li>
			</ul>
		</nav>
	)
}