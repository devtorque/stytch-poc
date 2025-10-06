import { useStytchMemberSession, useStytchB2BClient } from "@stytch/react/b2b";

const Dashboard = () => {
  const { session, member, isInitialized } = useStytchMemberSession();
  const stytch = useStytchB2BClient();

  const handleLogout = async () => {
    try {
      await stytch.session.revoke();
      window.location.href = '/';
    } catch (error) {
      console.error('Logout error:', error);
      window.location.href = '/';
    }
  };

  if (!isInitialized) {
    return (
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <h1>Loading...</h1>
        <p>Initializing session...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <h1>No Active Session</h1>
        <p>You need to be logged in to view this page.</p>
        <button 
          onClick={() => window.location.href = '/'}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div style={{ 
      padding: '30px', 
      maxWidth: '800px', 
      margin: '0 auto',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      color: '#333333'
    }}>
      <h1 style={{ color: '#2c3e50', marginBottom: '30px', textAlign: 'center' }}>Welcome to Dashboard!</h1>
      
      <div style={{ 
        marginBottom: '30px',
        backgroundColor: '#f8f9fa',
        padding: '20px',
        borderRadius: '6px',
        border: '1px solid #e9ecef'
      }}>
        <h2 style={{ color: '#495057', marginBottom: '20px' }}>Session Information</h2>
        <div style={{ display: 'grid', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #dee2e6' }}>
            <strong style={{ color: '#495057' }}>Session ID:</strong>
            <span style={{ color: '#6c757d', fontFamily: 'monospace', fontSize: '14px' }}>
              {session?.member_session_id || 'Not available'}
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #dee2e6' }}>
            <strong style={{ color: '#495057' }}>Member ID:</strong>
            <span style={{ color: '#6c757d', fontFamily: 'monospace', fontSize: '14px' }}>
              {session?.member_id || 'Not available'}
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #dee2e6' }}>
            <strong style={{ color: '#495057' }}>Email:</strong>
            <span style={{ color: '#007bff', fontWeight: '500' }}>
              {session?.authentication_factors?.[0]?.email_factor?.email_address || 'Not available'}
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #dee2e6' }}>
            <strong style={{ color: '#495057' }}>Organization:</strong>
            <span style={{ color: '#6c757d' }}>
              {session?.organization_slug || 'Not available'}
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #dee2e6' }}>
            <strong style={{ color: '#495057' }}>Roles:</strong>
            <span style={{ color: '#28a745', fontWeight: '500' }}>
              {session?.roles?.join(', ') || 'Not available'}
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #dee2e6' }}>
            <strong style={{ color: '#495057' }}>Session Started:</strong>
            <span style={{ color: '#6c757d' }}>
              {session?.started_at ? new Date(session.started_at).toLocaleString() : 'Not available'}
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
            <strong style={{ color: '#495057' }}>Session Expires:</strong>
            <span style={{ color: '#6c757d' }}>
              {session?.expires_at ? new Date(session.expires_at).toLocaleString() : 'Not available'}
            </span>
          </div>
        </div>
      </div>
      
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#495057', marginBottom: '15px' }}>Raw Session Data:</h3>
        <pre style={{ 
          backgroundColor: '#2d3748', 
          color: '#e2e8f0',
          padding: '20px', 
          borderRadius: '6px', 
          fontSize: '13px', 
          overflow: 'auto',
          border: '1px solid #4a5568',
          lineHeight: '1.5'
        }}>
          {JSON.stringify({ session, member }, null, 2)}
        </pre>
      </div>

      <div style={{ textAlign: 'center' }}>
        <button 
          onClick={handleLogout}
          style={{
            padding: '12px 30px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '500',
            transition: 'background-color 0.2s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#c82333'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
