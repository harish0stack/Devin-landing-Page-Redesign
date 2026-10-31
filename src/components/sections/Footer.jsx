import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--color-bg-secondary)',
      borderTop: '1px solid var(--color-border-subtle)',
      paddingTop: '80px',
      transition: 'background-color 0.2s ease, border-color 0.2s ease',
    }}>
      <div className="container-constrained">
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
          paddingBlock: '64px',
          gap: '32px',
        }}>
          {/* Logo & Cognition Brand */}
          <div style={{
            gridColumn: 'span 2',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '40px',
          }}>
            <div>
              {/* Devin Logo */}
              <svg width="109" height="29" viewBox="0 0 76 20" xmlns="http://www.w3.org/2000/svg" aria-label="Devin" style={{ width: '109px', height: '29px' }}>
                <path d="M8.304 8.189C7.659 7.816 6.851 7.816 6.206 8.189L4.534 9.161C4.479 9.188 4.425 9.215 4.361 9.233C4.352 9.233 4.334 9.233 4.325 9.242C4.27 9.252 4.207 9.261 4.152 9.27H4.143C4.143 9.27 4.134 9.27 4.125 9.27C4.07 9.27 4.016 9.261 3.961 9.252C3.952 9.252 3.943 9.252 3.934 9.252C3.88 9.233 3.825 9.215 3.771 9.188C3.771 9.188 3.761 9.188 3.752 9.188L0.4 7.253C0.164 7.116 0.009 6.862 0.009 6.58V2.71C0.009 2.428 0.154 2.174 0.4 2.037L3.752 0.102C3.989 -0.034 4.288 -0.034 4.525 0.102L7.877 2.037C7.877 2.037 7.877 2.037 7.886 2.037C7.941 2.065 7.986 2.101 8.032 2.147C8.032 2.147 8.041 2.156 8.05 2.165C8.086 2.201 8.123 2.246 8.15 2.292C8.15 2.292 8.159 2.301 8.159 2.319C8.186 2.374 8.214 2.428 8.223 2.483C8.223 2.492 8.223 2.51 8.232 2.519C8.241 2.574 8.259 2.637 8.259 2.701V4.636C8.259 5.381 8.659 6.081 9.304 6.453C9.949 6.826 10.758 6.826 11.403 6.453L13.074 5.481C13.129 5.454 13.183 5.426 13.247 5.408C13.256 5.408 13.274 5.408 13.283 5.399C13.338 5.39 13.402 5.381 13.456 5.372H13.483C13.538 5.372 13.592 5.381 13.647 5.39C13.656 5.39 13.665 5.39 13.674 5.39C13.729 5.408 13.783 5.426 13.838 5.454C13.838 5.454 13.847 5.454 13.856 5.454L17.208 7.389C17.445 7.525 17.599 7.78 17.599 8.061V11.932C17.599 12.213 17.454 12.468 17.208 12.604L13.856 14.54C13.856 14.54 13.847 14.54 13.838 14.54C13.783 14.567 13.729 14.594 13.674 14.603C13.665 14.603 13.656 14.603 13.647 14.603C13.592 14.612 13.538 14.621 13.483 14.621C13.483 14.621 13.474 14.621 13.465 14.621C13.411 14.621 13.347 14.621 13.292 14.594C13.283 14.594 13.265 14.594 13.256 14.585C13.202 14.567 13.138 14.549 13.084 14.512L11.412 13.54C10.767 13.168 9.958 13.168 9.313 13.54C8.668 13.912 8.268 14.612 8.268 15.357V17.292C8.268 17.356 8.259 17.42 8.241 17.474C8.241 17.483 8.241 17.501 8.232 17.511C8.214 17.565 8.195 17.619 8.168 17.674C8.168 17.674 8.159 17.692 8.15 17.701C8.123 17.747 8.086 17.792 8.05 17.828C8.05 17.828 8.041 17.838 8.032 17.847C7.986 17.892 7.941 17.928 7.886 17.956C7.886 17.956 7.886 17.956 7.877 17.956L4.525 19.891C4.407 19.964 4.27 20 4.134 20C3.998 20 3.861 19.964 3.743 19.891L0.391 17.956C0.154 17.819 0 17.565 0 17.283V13.413C0 13.131 0.145 12.877 0.391 12.741L3.743 10.805C3.743 10.805 3.752 10.805 3.761 10.805C3.816 10.778 3.871 10.751 3.925 10.742C3.925 10.742 3.943 10.742 3.952 10.742C4.007 10.723 4.061 10.723 4.116 10.723H4.143C4.198 10.723 4.261 10.732 4.316 10.751C4.325 10.751 4.343 10.751 4.352 10.751C4.407 10.769 4.47 10.787 4.525 10.823L6.196 11.796C6.842 12.168 7.65 12.168 8.295 11.796C8.94 11.423 9.34 10.723 9.34 9.978C9.34 9.233 8.94 8.534 8.295 8.161V8.152L8.304 8.189Z" fill="var(--color-text-muted)" />
                <path d="M67.957 7.644C68.383 7.068 69.471 6.492 70.623 6.492C73.845 6.492 75.21 8.817 75.21 11.548V17.393C75.21 17.457 75.167 17.5 75.103 17.5H73.013C72.949 17.5 72.906 17.457 72.906 17.393V11.548C72.906 10.097 72.202 8.583 70.303 8.583C68.575 8.583 67.722 9.969 67.722 11.441V17.393C67.722 17.457 67.679 17.5 67.615 17.5H65.546C65.482 17.5 65.439 17.457 65.439 17.393V6.812C65.439 6.748 65.482 6.705 65.546 6.705H67.359C67.445 6.705 67.487 6.748 67.509 6.812L67.722 7.601C67.765 7.751 67.893 7.729 67.957 7.644Z" fill="var(--color-text-muted)" />
                <path d="M62.855 17.5H60.785C60.721 17.5 60.678 17.457 60.678 17.393V6.812C60.678 6.748 60.721 6.705 60.785 6.705H62.855C62.919 6.705 62.961 6.748 62.961 6.812V17.393C62.961 17.457 62.919 17.5 62.855 17.5ZM63.004 5.447H60.657C60.593 5.447 60.55 5.404 60.55 5.34V2.951C60.55 2.887 60.593 2.844 60.657 2.844H63.004C63.068 2.844 63.111 2.887 63.111 2.951V5.34C63.111 5.404 63.068 5.447 63.004 5.447Z" fill="var(--color-text-muted)" />
                <path d="M54.426 15.239L57.114 6.833C57.157 6.727 57.242 6.705 57.306 6.705H59.461C59.525 6.705 59.589 6.748 59.546 6.855L55.983 17.393C55.962 17.457 55.919 17.5 55.855 17.5H52.783C52.719 17.5 52.676 17.457 52.655 17.393L49.071 6.855C49.029 6.748 49.071 6.705 49.157 6.705H51.354C51.418 6.705 51.503 6.748 51.525 6.833L54.212 15.239C54.255 15.367 54.383 15.367 54.426 15.239Z" fill="var(--color-text-muted)" />
                <path d="M48.902 12.913C48.881 12.977 48.817 13.02 48.753 13.02H41.094C41.03 13.02 40.987 13.063 40.987 13.127C40.987 14.492 42.075 15.644 43.782 15.644C44.998 15.644 45.809 15.153 46.172 14.407C46.214 14.321 46.257 14.3 46.342 14.3H48.475C48.539 14.3 48.646 14.3 48.603 14.471C48.092 16.497 46.193 17.713 43.782 17.713C40.625 17.713 38.577 15.431 38.577 12.103C38.577 8.753 40.561 6.492 43.782 6.492C47.004 6.492 48.987 8.839 48.987 12.167C48.987 12.487 48.945 12.721 48.902 12.913ZM41.094 11.1H46.406C46.47 11.1 46.513 11.057 46.513 10.993C46.513 9.969 45.702 8.583 43.782 8.583C41.883 8.583 40.987 10.076 40.987 10.993C40.987 11.057 41.03 11.1 41.094 11.1Z" fill="var(--color-text-muted)" />
                <path d="M30.715 17.5H25.232C25.168 17.5 25.126 17.457 25.126 17.393V2.588C25.126 2.524 25.168 2.481 25.232 2.481H30.715C35.216 2.481 37.414 5.66 37.414 10.14C37.414 14.663 35.216 17.5 30.715 17.5ZM27.515 15.431H30.715C33.424 15.431 35.024 13.575 35.024 10.14C35.024 6.748 33.424 4.572 30.715 4.572H27.515C27.451 4.572 27.408 4.615 27.408 4.679V15.324C27.408 15.388 27.451 15.431 27.515 15.431Z" fill="var(--color-text-muted)" />
              </svg>
            </div>

            <div>
              <div style={{
                fontSize: '13px',
                color: 'var(--color-text-muted)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Built by Cognition
              </div>
              <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                © {new Date().getFullYear()} Cognition AI, Inc. All rights reserved.
              </div>
            </div>
          </div>

          {/* Links Column 1: Company */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-text-primary)' }}>
              Company
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {["Careers", "Brand", "About", "Support"].map((item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                    transition: 'color 0.15s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Links Column 2: Legal */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-text-primary)' }}>
              Legal
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                "Terms of Service",
                "Acceptable Use Policy",
                "Privacy Policy",
                "Data Use",
                "Your Privacy Choices"
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                    transition: 'color 0.15s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Links Column 3: Connect */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-text-primary)' }}>
              Connect
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {["X", "LinkedIn", "YouTube", "Reddit"].map((item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                    transition: 'color 0.15s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
