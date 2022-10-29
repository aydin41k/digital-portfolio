import styles from './styles.module.css';

function Footer() {
    return (
        <footer className={`container ${styles.footer}`}>
            Made with <span className="emoji-heart">❤</span> and <span className="emoji-coffee">☕</span>, inspired by <a
            href="https://github.com/aydin41k/digital-portfolio">aydin41k/digital-portfolio</a>
        </footer>
    );
}

export default Footer;