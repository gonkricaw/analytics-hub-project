import { getSecurityHeaders } from '@/lib/securityHeaders';

describe('Security Headers', () => {
  it('should include essential security headers', () => {
    const headers = getSecurityHeaders();
    
    // Content Security Policy
    expect(headers['Content-Security-Policy']).toBeDefined();
    
    // X-XSS-Protection
    expect(headers['X-XSS-Protection']).toBe('1; mode=block');
    
    // X-Content-Type-Options
    expect(headers['X-Content-Type-Options']).toBe('nosniff');
    
    // Referrer-Policy
    expect(headers['Referrer-Policy']).toBe('strict-origin-when-cross-origin');
    
    // Strict-Transport-Security
    expect(headers['Strict-Transport-Security']).toBeDefined();
    expect(headers['Strict-Transport-Security']).toContain('max-age=');
    
    // Permissions-Policy
    expect(headers['Permissions-Policy']).toBeDefined();
  });
  
  it('should have appropriate CSP directives', () => {
    const headers = getSecurityHeaders();
    const csp = headers['Content-Security-Policy'];
    
    // Should include default-src directive
    expect(csp).toContain("default-src 'self'");
    
    // Should include frame-ancestors directive for iframe protection
    expect(csp).toContain("frame-ancestors");
    
    // Should include script-src directive
    expect(csp).toContain("script-src");
  });
});
