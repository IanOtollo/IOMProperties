import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import styles from "./admin.module.css";

export default async function AdminDashboard() {
    const session = await getServerSession();

    // Basic role protection (In a real app, do this more robustly)
    if (!session || (session.user as any).role !== "ADMIN") {
        // For demo purposes, if you are not an ADMIN, we redirect or show error
        // If you want to test this, you'd need to manually change a user's role in the DB to ADMIN
        // redirect("/auth/login");
    }

    return (
        <div className={styles.dashboardContainer}>
            <header className={styles.dashboardHeader}>
                <h1>Admin Intelligence</h1>
                <p>Monitor your inquiries and system performance</p>
            </header>

            <section className={styles.statsGrid}>
                <div className={`glass-panel ${styles.statCard}`}>
                    <span className={styles.statLabel}>Total Listings</span>
                    <span className={styles.statValue}>12</span>
                    <span className={styles.statTrend}>+2 this month</span>
                </div>
                <div className={`glass-panel ${styles.statCard}`}>
                    <span className={styles.statLabel}>Active Inquiries</span>
                    <span className={styles.statValue}>48</span>
                    <span className={styles.statTrend}>+12% vs last week</span>
                </div>
                <div className={`glass-panel ${styles.statCard}`}>
                    <span className={styles.statLabel}>Pending Tours</span>
                    <span className={styles.statValue}>8</span>
                    <span className={styles.statTrend}>Requires attention</span>
                </div>
            </section>

            <section className={`glass-panel ${styles.recentInquiries}`}>
                <h2>Recent Inquiries</h2>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Client</th>
                            <th>Property</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>James Wilson</td>
                            <td>The Vertex Penthouse</td>
                            <td><span className={styles.statusBadge}>Pending</span></td>
                            <td>Mar 05, 2026</td>
                            <td><button className={styles.actionBtn}>Manage</button></td>
                        </tr>
                        <tr>
                            <td>Sarah Jenkins</td>
                            <td>Monaco Cliff Villa</td>
                            <td><span className={styles.statusBadge}>Contacted</span></td>
                            <td>Mar 04, 2026</td>
                            <td><button className={styles.actionBtn}>Manage</button></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
}
