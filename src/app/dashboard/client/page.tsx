import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import styles from "./dashboard.module.css";

export default async function ClientDashboard() {
    const session = await getServerSession();

    if (!session) {
        redirect("/auth/login");
    }

    return (
        <div className={`container ${styles.container}`}>
            <div className={styles.header}>
                <h1 className={styles.title}>Welcome, {session.user?.name}</h1>
                <p className={styles.subtitle}>Manage your saved properties and inquiries.</p>
            </div>

            <div className={styles.grid}>
                <div className={`glass-panel ${styles.card}`}>
                    <h3>Saved Properties</h3>
                    <p>You haven&apos;t saved any properties yet.</p>
                    <Button variant="outline" size="sm">Explore Listings</Button>
                </div>

                <div className={`glass-panel ${styles.card}`}>
                    <h3>Dream House Imaginator</h3>
                    <p>Architect your vision with our premium house builder.</p>
                    <Link href="/dashboard/client/builder">
                        <Button variant="primary" size="sm">Start Building</Button>
                    </Link>
                </div>

                <div className={`glass-panel ${styles.card}`}>
                    <h3>Active Inquiries</h3>
                    <p>You have 0 active property inquiries.</p>
                </div>

                <div className={`glass-panel ${styles.card}`}>
                    <h3>Account Settings</h3>
                    <p>Manage your personal information and security settings.</p>
                    <Button variant="secondary" size="sm">Edit Profile</Button>
                </div>
            </div>
        </div>
    );
}
