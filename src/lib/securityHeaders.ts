// Security headers configuration for the application

// Content Security Policy directives
const contentSecurityPolicy = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"], // Consider restricting unsafe-inline/eval in production
  'style-src': ["'self'", "'unsafe-inline'"],
  'img-src': ["'self'", "data:", "blob:", "https://via.placeholder.com"], // Add other trusted image sources if needed
  'font-src': ["'self'"],
  'connect-src': ["'self'", process.env.NEXT_PUBLIC_API_URL || ''],
  'media-src': ["'self'"],
  'frame-src': ["'self'", "https://www.youtube.com"], // For YouTube embeds
  'frame-ancestors': ["'self'"],
  'form-action': ["'self'"]
};

// Function to convert CSP object to string
const generateCSP = (csp: Record<string, string[]>) => {
  return Object.entries(csp)
    .map(([key, values]) => `${key} ${values.join(' ')}`)
    .join('; ');
};

// Security headers configuration
export const securityHeaders = [
  // Content Security Policy
  {
    key: 'Content-Security-Policy',
    value: generateCSP(contentSecurityPolicy)
  },
  // HTTP Strict Transport Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload'
  },
  // X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  // X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY' // Change to SAMEORIGIN if you need to use frames within your own site
  },
  // X-XSS-Protection
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  // Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  // Permissions-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  }
];

// CORS configuration options
export const corsOptions = {
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      process.env.NEXT_PUBLIC_APP_URL || '',
      'http://localhost:3000',
      // Add other allowed origins here
    ];
    
    if (allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV === 'development') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400 // 24 hours
};
