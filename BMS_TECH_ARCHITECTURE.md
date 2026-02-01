Business Management System (BMS) — Technical Architecture (Phase-1 Local)

1) Goals
- Low-cost, single-server deployment on Windows with HTTPS
- Supports 100 concurrent users at peak
- Web + mobile access (PWA)
- Secure admin portal with role-based access control
- File storage with automatic archival after 30 days
- Ready to migrate to Linux/cloud later with minimal changes

2) System Overview
- Client: React PWA (mobile + web)
- Backend API: Node.js (Fastify or NestJS)
- Database: PostgreSQL (local instance)
- File storage: local disk + external drive for archive
- Payments: Stripe Checkout + webhooks
- Email: Gmail SMTP for approvals and notifications

3) Deployment Topology (Single Server)
- Reverse proxy (Nginx or Caddy) for HTTPS termination
- API server behind reverse proxy
- PostgreSQL on same host
- File storage on local disk (separate volume preferred)
- External drive attached for cold storage archives

4) Security
- HTTPS enforced for all traffic
- Admin portal accessible from public internet
  - IP allowlist option
  - Rate limits + brute-force protection
- JWT-based authentication
- RBAC enforced in API layer
- Audit logging for all admin actions
- Password hashing (bcrypt/argon2)

5) Data Storage & Archiving
- Active storage: local disk (target 50 GB)
- Archive process runs nightly:
  - Move files older than 30 days to external drive
  - Record archive location in DB
- Restore process:
  - Admin selects archived file(s)
  - Files copied back to active storage
- Daily backups:
  - PostgreSQL dump nightly
  - File manifest + metadata backup

6) Email & Notifications
- Gmail SMTP
- Transactional emails:
  - Account approval link
  - Invoice delivery + reminders
  - Project status notifications

7) External Access
- Public admin portal for Owner/Admin/Dev
- Customers/Subcontractors access via no-login share links
- Share links:
  - Time-scoped token
  - Project-scoped permissions

8) Scalability Considerations
- Current scale: 100 concurrent users
- Bottlenecks: file uploads, image previews, DB writes
- Mitigations:
  - Async background jobs for uploads
  - Image compression on upload
  - DB indexing on projects, customers, invoices

9) Migration Path (Future Cloud)
- Move PostgreSQL to managed service
- Replace local storage with S3-compatible storage
- Deploy API to managed container hosting
- Keep same PWA front-end

10) Technology Decisions
- Node.js chosen for broad ecosystem + fast development
- PostgreSQL for reliability and data integrity
- PWA for lowest-cost mobile coverage

11) Operational Risks (Local Hosting)
- No UPS: power outage may cause downtime or DB corruption
- Internet outage: external admin access unavailable
- Hardware failure: requires backup restore plan

12) Phase-2 Architecture Additions (Payroll)
- Payroll engine service
- Tax filing integrations (state/federal)
- Direct deposit via payroll provider or ACH processor
- Secure vault for sensitive payroll data
