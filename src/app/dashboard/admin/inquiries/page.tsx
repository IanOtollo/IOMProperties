import { getServerSession } from "next-auth";
import styles from "../admin.module.css";

export default async function AdminInquiries() {
    const session = await getServerSession();

    // Mock inquiries representing user requests
    const inquiries = [
        {
            id: 'inq-1',
            name: 'Alexander Pierce',
            email: 'a.pierce@estatemail.com',
            property: 'The Vertex Penthouse',
            status: 'NEW',
            date: '2026-03-06'
        },
        {
            id: 'inq-2',
            name: 'Julianne Vane',
            email: 'j.vane@luxury.com',
            property: 'Monaco Cliff Villa',
            status: 'PENDING',
            date: '2026-03-05'
        }
    ];

    return (
        <div className={styles.dashboardContainer}>
            <header className={styles.dashboardHeader}>
                <h1>User Requests & Inquiries</h1>
                <p>Manage lead submissions and property viewing requests</p>
            </header>

            <div className={`glass-panel ${styles.recentInquiries}`}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Client Name</th>
                            <th>Email Address</th>
                            <th>Property of Interest</th>
                            <th>Status Cat.</th>
                            <th>Submitted On</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inquiries.map(inq => (
                            <tr key={inq.id}>
                                <td>{inq.name}</td>
                                <td style={{ color: 'var(--text-muted)' }}>{inq.email}</td>
                                <td style={{ fontWeight: 500 }}>{inq.property}</td>
                                <td>
                                    <span className={`${styles.statusBadge} ${styles[inq.status.toLowerCase()]}`}>
                                        {inq.status}
                                    </span>
                                </td>
                                <td>{inq.date}</td>
                                <td>
                                    <button className={styles.actionBtn}>Open Request</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
