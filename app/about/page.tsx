// app/about.tsx
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#f5f6fa',
        color: '#2c3e50',
        padding: '20px',
      }}
    >
      <div style={{ maxWidth: '800px', width: '100%' }}>
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: '20px',
            borderBottom: '1px solid #ecf0f1',
          }}
        >
          <h1 style={{ color: '#3498db', fontSize: '32px', margin: 0 }}>
            Very Trustworthy Website
          </h1>
          <nav>
            <ul
              style={{
                display: 'flex',
                listStyleType: 'none',
                margin: 0,
                padding: 0,
              }}
            >
              <li style={{ marginRight: '20px' }}>
                <Link
                  href="/"
                  style={{
                    fontSize: '18px',
                    color: '#fff',
                    background: '#3498db',
                    textDecoration: 'none',
                    padding: '12px 20px',
                    borderRadius: '5px',
                    transition: 'background-color 0.3s',
                    display: 'inline-block',
                  }}
                >
                  Home
                </Link>
              </li>
              <li style={{ marginRight: '20px' }}>
                <Link
                  href="/about"
                  style={{
                    fontSize: '18px',
                    color: '#fff',
                    background: '#3498db',
                    textDecoration: 'none',
                    padding: '12px 20px',
                    borderRadius: '5px',
                    transition: 'background-color 0.3s',
                    display: 'inline-block',
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  style={{
                    fontSize: '18px',
                    color: '#fff',
                    background: '#3498db',
                    textDecoration: 'none',
                    padding: '12px 20px',
                    borderRadius: '5px',
                    transition: 'background-color 0.3s',
                    display: 'inline-block',
                  }}
                >
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main
          style={{
            paddingTop: '40px',
            paddingBottom: '40px',
            background: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            marginTop: '30px',
            padding: '30px',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: '32px',
              fontWeight: '600',
              color: '#2c3e50',
              marginBottom: '20px',
            }}
          >
            Welcome to the About Page
          </h2>
          <p
            style={{
              fontSize: '18px',
              lineHeight: '1.6',
              color: '#34495e',
              marginBottom: '30px',
            }}
          >
            We are a team of dedicated professionals committed to providing secure and trustworthy services to our users. Our platform is built with your privacy and security in mind.
          </p>
          <p
            style={{
              fontSize: '18px',
              lineHeight: '1.6',
              color: '#34495e',
              marginBottom: '30px',
            }}
          >
            Our mission is to deliver high-quality solutions that prioritize user privacy and security. We are constantly innovating to bring you the best experience possible.
          </p>
        </main>

        <footer
          style={{
            marginTop: '50px',
            paddingTop: '20px',
            borderTop: '1px solid #ecf0f1',
            textAlign: 'center',
            paddingBottom: '20px',
          }}
        >
          <p
            style={{
              fontSize: '16px',
              color: '#7f8c8d',
              marginTop: '20px',
            }}
          >
            &copy; 2024 Very Trustworthy Website. All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
