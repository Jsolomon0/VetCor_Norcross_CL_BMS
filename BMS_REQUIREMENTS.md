Business Management System (BMS) — Full Requirements Pack

1) Scope & Objectives
- All-in-one system for small business operations:
  - Customers, employees, subcontractors, supercontractors
  - Project requests and tracking
  - Documents and media
  - Invoicing + online payments
  - Role-based access control for every feature
- Phase-1 hosted locally (Windows) with HTTPS and secure admin portal
- Phase-2 adds full payroll (direct deposit + tax filings)

2) User Roles & Definitions
- Owner: full access to all data and features (client + admin)
- Administrator: service customers/employees, approve projects, manage operations
- Developers: configure system functionality/feature settings
- Employees: work on projects, create project drafts
- Customers: clients projects are completed for
- Subcontractors: companies working for you (like employees)
- Supercontractors: companies you work for (like customers)

3) Access Control Model
Each feature must define:
- View (read data)
- Use (execute tasks/commands)
- Modify (change data/settings)
- Admin (system-level control)

Access Matrix (Phase-1)

- User & Role Management
  Owner: A
  Admin: U,V (create/edit non-Owner users)
  Dev: V
  Employee/Customer/Sub/Super: —

- Account Approvals (Long-term customers)
  Owner: A
  Admin: U,M
  Dev: V
  Others: —

- Project Requests (questionnaire + uploads)
  Owner: A
  Admin: U,M
  Dev: V
  Employee: U
  Customer: U
  Sub/Super: —

- Project Approval Workflow
  Owner: A
  Admin: U
  Dev: V
  Employee: V
  Others: —

- Project Tracking (progress, images, notes)
  Owner: A
  Admin: U,M
  Dev: V
  Employee: U
  Customer/Sub/Super: V (via share link)

- Comments on Project Progress
  Owner: A
  Admin: U,M
  Dev: V
  Employee: V
  Customer/Sub: U (via share link)
  Super: U (via share link)

- Documents & Files (contracts, receipts, etc.)
  Owner: A
  Admin: U,M
  Dev: V
  Employee: U (project-scoped)
  Customer/Sub/Super: V (if shared)

- Invoices & Payments
  Owner: A
  Admin: U,M
  Dev: V
  Employee: —
  Customer/Super: U (pay)

- Financial Reports (P&L, cash flow)
  Owner: A
  Admin: V
  Dev: V

- Time Tracking (Phase-1)
  Owner: A
  Admin: U,M
  Dev: V
  Employee/Sub: U

- System Settings / Feature Flags
  Owner: A
  Dev: M
  Admin: V

- Audit Logs
  Owner: A
  Admin: V
  Dev: V

4) Customer Types & Account Rules
Short-term customer
- Name + email only
- Limited usage & storage
- Auto-delete after 30 days inactivity
- Can submit project requests

Long-term customer
- Requires approval by Owner/Admin
- Customer receives an email link to create account (username/password)

5) Account Creation Flows
Flow A: Project Request Questionnaire
- Available to anyone
- Captures:
  - project description
  - preferred schedule (face-to-face / virtual)
  - optional images
- Creates a pending project request

Flow B: Company-Initiated Long-Term Account
- Admin/Owner sends approval link
- Customer completes account setup
- Customer gets full portal access

6) Project Lifecycle
1) Request submitted
2) Project draft created (by employee/admin)
3) Approval required (Owner/Admin)
4) Project active
5) Progress tracking (notes + images)
6) Customer/Sub comment via share link
7) Completion + invoice
8) Payment recorded

7) Feature Requirements (Phase-1)

Project Requests
- Questionnaire with images
- Create project draft

Project Tracking
- Timeline of updates
- Images + notes
- Shared view link for external viewers

Comments (No Login)
- Project-scoped, time-scoped link
- Comments recorded as “External Viewer”
- Rate limit & spam protection

Documents
- Folders/categories: contracts, receipts, invoices, etc.
- File metadata and project links

Invoicing & Payments
- Invoice creation
- Stripe Checkout payment
- Payment status tracking
- Email reminders

Time Tracking
- Employee/Subcontractor time logs
- Project-linked entries

Audit & Logs
- User actions tracked
- Approval history retained

Archiving
- After 30 days, files move to external drive
- Admin can restore on demand
- Restore action logged

8) Data Model (High-Level Tables)

- users (id, name, email, role, status, created_at)
- roles (id, name)
- permissions (id, feature, action)
- role_permissions (role_id, permission_id)
- customers (id, type, user_id, status)
- projects (id, customer_id, status, created_by, approved_by, approved_at)
- project_requests (id, customer_id, questionnaire_data)
- project_updates (id, project_id, note, created_by)
- project_images (id, project_id, file_id)
- comments (id, project_id, author_type, body)
- documents (id, project_id, file_id, category)
- files (id, path, size, stored_at, archived_at)
- invoices (id, project_id, amount, status)
- payments (id, invoice_id, provider, status)
- time_entries (id, project_id, user_id, hours)
- audit_log (id, actor, action, target, timestamp)

9) Screens & Navigation
- Login
- Dashboard (role-specific)
- Project Requests
- Project Detail (updates, images, comments)
- Project Approval Queue
- Documents Library
- Invoices & Payments
- Time Tracking
- Users & Roles (Owner/Admin)
- System Settings (Owner/Dev)
- Reports (Owner/Admin)

10) API Endpoints (Phase-1)

- POST /auth/login
- POST /customers/request
- POST /customers/approve
- POST /projects
- POST /projects/:id/approve
- GET /projects/:id
- POST /projects/:id/updates
- POST /projects/:id/comments (no-login token)
- POST /files/upload
- POST /invoices
- POST /payments/stripe
- GET /reports/summary
- POST /archive/run
- POST /archive/restore

11) Non-Functional Requirements
- HTTPS enabled
- Admin portal secured (rate limiting, MFA optional)
- Daily backup of DB + files
- Retention: 30 days active + external archive
- Audit trails for approvals & changes
- Password hashing + lockout on repeated failures

12) Phase-2 (Payroll)
- Employee clock-in/out
- Automatic payroll calculation
- Direct deposit
- Payroll taxes and filing (W-2, 1099)
- Payroll audit logs
