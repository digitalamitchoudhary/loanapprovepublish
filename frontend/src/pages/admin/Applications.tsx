import { useEffect, useState } from 'react';
import api from '../../utils/api';

export default function AdminApplications() {
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    api.applications
      .getAll({ limit: 100 })
      .then((res) => {
        if (res.success && Array.isArray(res.applications)) {
          setApplications(res.applications);
        } else {
          setError(res.message || 'Failed to load applications.');
        }
      })
      .catch((err) => setError(err.message || 'Failed to load applications.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="pt-24 pb-16 bg-brand-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-poppins font-bold text-brand-primary mb-8">
          Loan Applications
        </h1>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}
        {!loading && !error && (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Phone</th>
                  <th className="px-4 py-2">Loan Type</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Employment</th>
                  <th className="px-4 py-2">Income</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((a) => (
                  <tr key={a._id} className="border-t">
                    <td className="px-4 py-2">{new Date(a.createdAt).toLocaleString()}</td>
                    <td className="px-4 py-2">{`${a.firstName} ${a.lastName}`}</td>
                    <td className="px-4 py-2">{a.email}</td>
                    <td className="px-4 py-2">{a.phone}</td>
                    <td className="px-4 py-2">{a.loanType}</td>
                    <td className="px-4 py-2">₹{a.loanAmount.toLocaleString('en-IN')}</td>
                    <td className="px-4 py-2">{a.employmentType}</td>
                    <td className="px-4 py-2">₹{a.annualIncome.toLocaleString('en-IN')}</td>
                    <td className="px-4 py-2">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded">
                        {a.status || 'pending'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
