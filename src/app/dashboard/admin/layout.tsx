import Link from "next/link";
import styles from "./admin.module.css";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.adminContainer}>
            <aside className={styles.sidebar}>
                <div className={styles.sidebarHeader}>
                    <h2>IOM<span>Admin</span></h2>
                </div>
                <nav className={styles.nav}>
                    <Link href="/dashboard/admin" className={styles.navLink}>Overview</Link>
                    <Link href="/dashboard/admin/properties" className={styles.navLink}>Properties</Link>
                    <Link href="/dashboard/admin/inquiries" className={styles.navLink}>Requests & Inquiries</Link>
                    <Link href="/dashboard/admin/users" className={styles.navLink}>User Management</Link>
                </nav>
                <div className={styles.sidebarFooter}>
                    <Link href="/">Back to Site</Link>
                </div>
            </aside>
            <main className={styles.mainContent}>
                {children}
            </main>
        </div>
    );
}
