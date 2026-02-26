import { useEffect, useState } from 'react';
import api from '../../utils/api';

export default function AdminContacts() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
     api.contact
      .getAll({ limit: 100 })
      .then((res) => {
         console.log("Full API response:", res);
        if (res.success && Array.isArray(res.contacts)) {
          setContacts(res.contacts);
          console.log('Loaded contacts:', res.contacts);
        } else {
          setError(res.message || 'Failed to load contacts.');
        }
      })
      .catch((err) => setError(err.message || 'Failed to load contacts.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="pt-24 pb-16 bg-brand-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-poppins font-bold text-brand-primary mb-8">
          Contact Submissions
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
                  <th className="px-4 py-2">Subject</th>
                  <th className="px-4 py-2">Message</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((c) => (
                  <tr key={c._id} className="border-t">
                    <td className="px-4 py-2">{new Date(c.createdAt).toLocaleString()}</td>
                    <td className="px-4 py-2">{c.name}</td>
                    <td className="px-4 py-2">{c.email}</td>
                    <td className="px-4 py-2">{c.phone}</td>
                    <td className="px-4 py-2">{c.subject}</td>
                    <td className="px-4 py-2">{c.message}</td>
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
