// const API_BASE_URL = (import.meta as any).env.VITE_API_URL || 'http://localhost:5000/api';

// interface ApiResponse<T> {
//   success: boolean;
//   message?: string;
//   data?: T;
//   errors?: Array<{ field: string; message: string }>;
// }

// export const api = {
//   // Contact API
//   contact: {
//     submit: async (data: {
//       name: string;
//       email: string;
//       phone: string;
//       subject?: string;
//       message: string;
//     }): Promise<ApiResponse<{ contactId: string }>> => {
//       try {
//         const response = await fetch(`${API_BASE_URL}/contact`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(data),
//         });

//         if (!response.ok) {
//           const error = await response.json().catch(() => null);
//           const message =
//             error?.message ||
//             error?.errors?.[0]?.message ||
//             `HTTP error! status: ${response.status}`;
//           throw new Error(message);
//         }
//         return response.json();
//       } catch (error) {
//         console.error('Contact API error:', error);
//         throw error;
//       }
//     },

//     // admin: get all contacts with optional filters
//     getAll: async (filters?: {
//       status?: string;
//       page?: number;
//       limit?: number;
//     }): Promise<ApiResponse<any>> => {
//       try {
//         const params = new URLSearchParams();
//         if (filters) {
//           Object.entries(filters).forEach(([key, value]) => {
//             if (value !== undefined && value !== null) {
//               params.append(key, String(value));
//             }
//           });
//         }
//         const response = await fetch(
//           `${API_BASE_URL}/contact?${params.toString()}`
//         );
//         if (!response.ok) {
//           const error = await response.json().catch(() => ({ success: false, message: `HTTP ${response.status}` }));
//           throw new Error(error.message || `HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       } catch (error) {
//         console.error('Get contacts API error:', error);
//         throw error;
//       }
//     },
//   },

//   // Application API
//   applications: {
//     submit: async (data: {
//       firstName: string;
//       lastName: string;
//       email: string;
//       phone: string;
//       loanType: 'personal' | 'home' | 'business' | 'car';
//       loanAmount: number;
//       employmentType: 'salaried' | 'self-employed' | 'business-owner' | 'retired';
//       annualIncome: number;
//       businessType?: string;
//       yearsInBusiness?: number;
//       creditScore?: 'excellent' | 'good' | 'fair' | 'poor';
//       documents?: Record<string, boolean>;
//     }): Promise<ApiResponse<{ applicationId: string }>> => {
//       try {
//         const response = await fetch(`${API_BASE_URL}/applications`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(data),
//         });

//         if (!response.ok) {
//           const error = await response.json().catch(() => ({ success: false, message: `HTTP ${response.status}` }));
//           throw new Error(error.message || `HTTP error! status: ${response.status}`);
//         }

//         return response.json();
//       } catch (error) {
//         console.error('Application API error:', error);
//         throw error;
//       }
//     },

//     getAll: async (filters?: {
//       status?: string;
//       loanType?: string;
//       page?: number;
//       limit?: number;
//     }): Promise<ApiResponse<any>> => {
//       try {
//         const params = new URLSearchParams();
//         if (filters) {
//           Object.entries(filters).forEach(([key, value]) => {
//             if (value !== undefined && value !== null) {
//               params.append(key, String(value));
//             }
//           });
//         }

//         const response = await fetch(
//           `${API_BASE_URL}/applications?${params.toString()}`
//         );

//         if (!response.ok) {
//           const error = await response.json().catch(() => ({ success: false, message: `HTTP ${response.status}` }));
//           throw new Error(error.message || `HTTP error! status: ${response.status}`);
//         }

//         return response.json();
//       } catch (error) {
//         console.error('Get applications API error:', error);
//         throw error;
//       }
//     },

//     getById: async (id: string): Promise<ApiResponse<any>> => {
//       try {
//         const response = await fetch(`${API_BASE_URL}/applications/${id}`);

//         if (!response.ok) {
//           const error = await response.json().catch(() => ({ success: false, message: `HTTP ${response.status}` }));
//           throw new Error(error.message || `HTTP error! status: ${response.status}`);
//         }

//         return response.json();
//       } catch (error) {
//         console.error('Get application API error:', error);
//         throw error;
//       }
//     },

//     getStats: async (): Promise<ApiResponse<any>> => {
//       try {
//         const response = await fetch(`${API_BASE_URL}/applications/stats`);

//         if (!response.ok) {
//           const error = await response.json().catch(() => ({ success: false, message: `HTTP ${response.status}` }));
//           throw new Error(error.message || `HTTP error! status: ${response.status}`);
//         }

//         return response.json();
//       } catch (error) {
//         console.error('Get stats API error:', error);
//         throw error;
//       }
//     },
//   },

//   // Health check
//   health: async (): Promise<ApiResponse<any>> => {
//     try {
//       const response = await fetch(`${API_BASE_URL.replace('/api', '')}/api/health`);

//       if (!response.ok) {
//         const error = await response.json().catch(() => ({ success: false, message: `HTTP ${response.status}` }));
//         throw new Error(error.message || `HTTP error! status: ${response.status}`);
//       }

//       return response.json();
//     } catch (error) {
//       console.error('Health check API error:', error);
//       throw error;
//     }
//   },
// };

// export default api;
const API_BASE_URL =
  (import.meta as any).env.VITE_API_URL || "http://localhost:5000/api";

// ============================================
// GENERIC API RESPONSE (for submit / health)
// ============================================
interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: Array<{ field?: string; message: string }>;
}

// ============================================
// CONTACT TYPE
// ============================================
export interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message: string;
  createdAt: string;
}

// ============================================
// APPLICATION TYPE
// ============================================
export interface Application {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  loanType: "personal" | "home" | "business" | "car";
  loanAmount: number;
  employmentType:
    | "salaried"
    | "self-employed"
    | "business-owner"
    | "retired";
  annualIncome: number;
  createdAt: string;
}

// ============================================
// API OBJECT
// ============================================
export const api = {
  // ============================================
  // CONTACT API
  // ============================================
  contact: {
    submit: async (data: {
      name: string;
      email: string;
      phone: string;
      subject?: string;
      message: string;
    }): Promise<ApiResponse<{ contactId: string }>> => {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => null);
        throw new Error(
          error?.message ||
            error?.errors?.[0]?.message ||
            `HTTP error! status: ${response.status}`
        );
      }

      return response.json();
    },

    getAll: async (filters?: {
      status?: string;
      page?: number;
      limit?: number;
    }): Promise<{
      success: boolean;
      message?: string;
      contacts: Contact[];
      total: number;
      page: number;
      limit: number;
      pages: number;
    }> => {
      const params = new URLSearchParams();

      if (filters) {
        Object.entries(filters).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            params.append(key, String(value));
          }
        });
      }

      const response = await fetch(
        `${API_BASE_URL}/contact?${params.toString()}`
      );

      if (!response.ok) {
        const error = await response.json().catch(() => null);
        throw new Error(
          error?.message || `HTTP error! status: ${response.status}`
        );
      }

      return response.json();
    },
  },

  // ============================================
  // APPLICATION API
  // ============================================
  applications: {
    submit: async (data: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      loanType: "personal" | "home" | "business" | "car";
      loanAmount: number;
      employmentType:
        | "salaried"
        | "self-employed"
        | "business-owner"
        | "retired";
      annualIncome: number;
      businessType?: string;
      yearsInBusiness?: number;
      creditScore?: "excellent" | "good" | "fair" | "poor";
      documents?: Record<string, boolean>;
    }): Promise<ApiResponse<{ applicationId: string }>> => {
      const response = await fetch(`${API_BASE_URL}/applications`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => null);
        throw new Error(
          error?.message || `HTTP error! status: ${response.status}`
        );
      }

      return response.json();
    },

    getAll: async (filters?: {
      status?: string;
      loanType?: string;
      page?: number;
      limit?: number;
    }): Promise<{
      success: boolean;
      message?: string;
      applications: Application[];
      total: number;
      page: number;
      limit: number;
      pages: number;
    }> => {
      const params = new URLSearchParams();

      if (filters) {
        Object.entries(filters).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            params.append(key, String(value));
          }
        });
      }

      const response = await fetch(
        `${API_BASE_URL}/applications?${params.toString()}`
      );

      if (!response.ok) {
        const error = await response.json().catch(() => null);
        throw new Error(
          error?.message || `HTTP error! status: ${response.status}`
        );
      }

      return response.json();
    },
  },

  // ============================================
  // HEALTH CHECK
  // ============================================
  health: async (): Promise<ApiResponse<any>> => {
    const response = await fetch(
      `${API_BASE_URL.replace("/api", "")}/api/health`
    );

    if (!response.ok) {
      const error = await response.json().catch(() => null);
      throw new Error(
        error?.message || `HTTP error! status: ${response.status}`
      );
    }

    return response.json();
  },
};

export default api;