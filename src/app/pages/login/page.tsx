'use client';

import { useState } from 'react';

export default function Page() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRemembered, setIsRemembered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const resBody = await res.json();

      if (res.status === 200 && resBody.isSuccess) {
        window.location.href = 'https://kelas.work';
      } else {
        const errorMsg = resBody.message || 'Terjadi kesalahan.';
        alert(`Whopss, ${errorMsg}`);
      }
    } catch (err) {
      alert('Whopss, tidak bisa terhubung ke server.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <div className="segmen">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <div className="field">
            <div className="ui checkbox">
              <input
                id="chkRememberMe"
                type="checkbox"
                checked={isRemembered}
                onChange={(e) => setIsRemembered(e.target.checked)}
                disabled={isLoading}
              />
              <label htmlFor="chkRememberMe">Remember me</label>
            </div>
          </div>

          <button
            className={`ui button primary ${isLoading ? 'disabled' : ''}`}
            type="submit"
          >
            Login
          </button>
        </form>

        {isLoading && (
          <div className="loading-overlay">
            <div className="spinner"></div>
            <div className="loading-text">Logging in...</div>
          </div>
        )}
      </div>

      <style jsx>{`
        main {
          margin: 24px;
          display: flex;
          justify-content: center;
        }

        .segmen {
          background: #f9f9f9;
          padding: 32px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          max-width: 400px;
          width: 100%;
          position: relative;
        }

        .segmen h2 {
          text-align: center;
          margin-bottom: 24px;
          color: #333;
        }

        .loading-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.85);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 10;
          border-radius: 12px;
        }

        .spinner {
          border: 6px solid #f3f3f3;
          border-top: 6px solid #2185d0;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
          margin-bottom: 10px;
        }

        .loading-text {
          font-weight: bold;
          color: #2185d0;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </main>
  );
}
