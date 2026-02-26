import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <div className="pt-24 pb-16 bg-brand-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-poppins font-bold text-brand-primary mb-8">Admin Panel</h1>
        <div className="space-y-4">
          <Link
            to="/admin/contacts"
            className="block px-6 py-4 bg-brand-secondary text-white rounded-lg font-semibold hover:bg-brand-secondary-dark transition-all"
          >
            View Contact Submissions
          </Link>
          <Link
            to="/admin/applications"
            className="block px-6 py-4 bg-brand-secondary text-white rounded-lg font-semibold hover:bg-brand-secondary-dark transition-all"
          >
            View Loan Applications
          </Link>
        </div>
      </div>
    </div>
  );
}
