import Link from 'next/link';
import classes from '../../styles/components/Layout/Navbar.module.css';

export default function Navbar() {
    return <nav className={classes.navbar}>
        <h2>React Meetups</h2>
        <div className={classes.actions}>
            <Link href='/'>All Meetups</Link>
            <Link href='/new-meetup'>Add New Meetup</Link>
        </div>
    </nav>
}