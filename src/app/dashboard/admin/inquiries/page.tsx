import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import styles from "../admin.module.css";

export default async function InquiriesPage() {
    const session = await getServerSession();

    // In a real app, fetch inquiries from the database
    const inquiries = [
        {
            id: "inq-1",
            name: "James Wilson",
            email: "james@example.com",
            property: "The Vertex Penthouse",
            message: "I would like to arrange a private viewing this Saturday.",
            status: "PENDING",
            date: "Mar 05, 2026"
        },
        {
            id: "inq-2",
            name: "Sarah Jenkins",
            email: "sarah@gmail.com",
            property: "Monaco Cliff Villa",
            message: "Can you provide more details about the security features?",
            status: "CONTACTED",
            date: "Mar 04, 2026"
        }
    ];

    return (
        <div className={styles.container}>
            <aside className={styles.sidebar}>
                <div className={styles.sidebarHeader}>
                    <h2>IOM<span>Admin</span></h2>
                </div>
                <nav className={styles.sidebarNav}>
                    <a href="/dashboard/admin">Overview</a>
                    <a href="/dashboard/admin/properties">Properties</a>
                    <a href="/dashboard/admin/inquiries" className={styles.active}>Inquiries</a>
                    <a href="/dashboard/admin/agents">Agents</a>
                    <a href="/dashboard/admin/settings">Settings</a>
                </nav>
            </aside>

            <main className={styles.content}>
                <header className={styles.contentHeader}>
                    <h1>Inquiry Management</h1>
                    <div className={styles.userProfile}>
                        <span>{session?.user?.name || "Agent User"}</span>
                        <div className={styles.avatar}>A</div>
                    </div>
                </header>

                <section className={`glass-panel ${styles.recentInquiries}`}>
                    <div className={styles.tableControls}>
                        <h2>Active Leads</h2>
                        <div className={styles.filterGroup}>
                            <select className={styles.actionBtn}>
                                <option>All Statuses</option>
                                <option>Pending</option>
                                <option>Contacted</option>
                                <option>Closed</option>
                            </select>
                        </div>
                    </div>

                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Client</th>
                                <th>Property</th>
                                <th>Message</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inquiries.map(inq => (
                                <tr key={inq.id}>
                                    <td>
                                        <strong>{inq.name}</strong><br />
                                        <small>{inq.email}</small>
                                    </td>
                                    <td>{inq.property}</td>
                                    <td style={{ maxWidth: '300px' }}>{inq.message}</td>
                                    <td><span className={styles.statusBadge}>{inq.status}</span></td>
                                    <td>
                                        <button className={styles.actionBtn}>Reply</button>
                                        <button className={styles.actionBtn} style={{ marginLeft: '4px' }}>Resolve</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}
