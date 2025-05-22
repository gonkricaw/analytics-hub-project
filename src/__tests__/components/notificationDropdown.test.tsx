import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NotificationDropdown from '@/components/common/NotificationDropdown';
import { useSession } from 'next-auth/react';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

// Mock next-auth
jest.mock('next-auth/react', () => ({
  useSession: jest.fn(),
}));

// Mock fetch for API calls
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ 
      notifications: [
        { 
          id: '1', 
          title: 'New notification', 
          message: 'This is a test notification', 
          read: false, 
          createdAt: new Date().toISOString() 
        }
      ],
      unreadCount: 1
    }),
  })
) as jest.Mock;

describe('NotificationDropdown Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useSession as jest.Mock).mockReturnValue({
      data: { user: { id: '123', name: 'Test User' } },
      status: 'authenticated',
    });
  });

  it('renders notification icon with badge when there are unread notifications', async () => {
    render(<NotificationDropdown />);
    
    // Wait for notifications to load
    await waitFor(() => {
      expect(screen.getByTestId('notification-badge')).toBeInTheDocument();
    });
  });

  it('opens dropdown when clicking the notification icon', async () => {
    render(<NotificationDropdown />);
    
    // Click notification icon
    const notificationIcon = screen.getByTestId('notification-icon');
    fireEvent.click(notificationIcon);
    
    // Verify dropdown is opened
    await waitFor(() => {
      expect(screen.getByText('New notification')).toBeInTheDocument();
    });
  });

  it('marks notification as read when clicked', async () => {
    render(<NotificationDropdown />);
    
    // Open dropdown
    const notificationIcon = screen.getByTestId('notification-icon');
    fireEvent.click(notificationIcon);
    
    // Click on notification
    await waitFor(() => {
      const notification = screen.getByText('New notification');
      fireEvent.click(notification);
    });
    
    // Verify API call was made to mark as read
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/api/notifications/1/mark-as-read'),
        expect.objectContaining({
          method: 'POST',
        })
      );
    });
  });
});
