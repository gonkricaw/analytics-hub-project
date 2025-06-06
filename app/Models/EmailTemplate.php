<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Builder;
use Carbon\Carbon;

/**
 * EmailTemplate Model
 *
 * @property int $id
 * @property string $name
 * @property string $subject
 * @property string $body
 * @property int $created_by_user_id
 * @property string $type
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @property-read User $creator
 *
 * @method static Builder byType(string $type)
 * @method static Builder byCreator(int $userId)
 * @method static Builder recent()
 * @method static Builder active()
 */
class EmailTemplate extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'idnbi_email_templates';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'subject',
        'html_content',
        'text_content',
        'description',
        'placeholders',
        'is_active',
        'created_by_user_id',
        'type',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'placeholders' => 'array',
        'is_active' => 'boolean',
    ];

    /**
     * Available email template types
     */
    public const TYPE_INVITATION = 'invitation';
    public const TYPE_PASSWORD_RESET = 'password_reset';
    public const TYPE_WELCOME = 'welcome';
    public const TYPE_NOTIFICATION = 'notification';
    public const TYPE_GENERAL = 'general';

    /**
     * Get all available template types
     *
     * @return array
     */
    public static function getAvailableTypes(): array
    {
        return [
            self::TYPE_INVITATION => 'User Invitation',
            self::TYPE_PASSWORD_RESET => 'Password Reset',
            self::TYPE_WELCOME => 'Welcome Message',
            self::TYPE_NOTIFICATION => 'Notification',
            self::TYPE_GENERAL => 'General',
        ];
    }

    /**
     * Get the user who created this email template.
     *
     * @return BelongsTo
     */
    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by_user_id');
    }

    /**
     * Alias for creator relationship for consistency
     *
     * @return BelongsTo
     */
    public function createdBy(): BelongsTo
    {
        return $this->creator();
    }

    /**
     * Scope a query to only include templates of a specific type.
     *
     * @param Builder $query
     * @param string $type
     * @return Builder
     */
    public function scopeByType(Builder $query, string $type): Builder
    {
        return $query->where('type', $type);
    }

    /**
     * Scope a query to only include templates created by a specific user.
     *
     * @param Builder $query
     * @param int $userId
     * @return Builder
     */
    public function scopeByCreator(Builder $query, int $userId): Builder
    {
        return $query->where('created_by_user_id', $userId);
    }

    /**
     * Scope a query to order templates by most recent first.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeRecent(Builder $query): Builder
    {
        return $query->orderBy('created_at', 'desc');
    }

    /**
     * Scope a query to only include active templates.
     * For future use if we add soft deletes or active/inactive status.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeActive(Builder $query): Builder
    {
        return $query->whereNull('deleted_at');
    }

    /**
     * Replace placeholders in the template with actual values.
     *
     * @param array $variables
     * @return array
     */
    public function compile(array $variables = []): array
    {
        $subject = $this->subject;
        $htmlContent = $this->html_content;
        $textContent = $this->text_content;

        // Replace common placeholders
        $defaultVariables = [
            '{{app_name}}' => config('app.name', 'Indonet Analytics Hub'),
            '{{app_url}}' => config('app.url'),
            '{{current_year}}' => date('Y'),
            '{{current_date}}' => now()->format('F j, Y'),
        ];

        $allVariables = array_merge($defaultVariables, $variables);

        foreach ($allVariables as $placeholder => $value) {
            $subject = str_replace($placeholder, $value, $subject);
            $htmlContent = str_replace($placeholder, $value, $htmlContent);
            if ($textContent) {
                $textContent = str_replace($placeholder, $value, $textContent);
            }
        }

        return [
            'subject' => $subject,
            'html_content' => $htmlContent,
            'text_content' => $textContent,
        ];
    }

    /**
     * Get default template for a specific type.
     *
     * @param string $type
     * @return self|null
     */
    public static function getDefaultTemplate(string $type): ?self
    {
        return static::byType($type)->first();
    }

    /**
     * Create a default template for a specific type.
     *
     * @param string $type
     * @param int $createdByUserId
     * @return self
     */
    public static function createDefaultTemplate(string $type, int $createdByUserId): self
    {
        $templates = [
            self::TYPE_INVITATION => [
                'name' => 'Default User Invitation',
                'subject' => 'You\'re invited to join {{app_name}}',
                'html_content' => '<h2>Welcome!</h2><p>Hello {{user_name}},</p><p>You have been invited to join {{app_name}}.</p><p>Please click <a href="{{invitation_url}}">here</a> to accept the invitation.</p>',
                'text_content' => 'Hello {{user_name}},\n\nYou have been invited to join {{app_name}}.\n\nPlease click the following link to accept the invitation:\n{{invitation_url}}\n\nBest regards,\n{{app_name}} Team',
            ],
            self::TYPE_PASSWORD_RESET => [
                'name' => 'Default Password Reset',
                'subject' => 'Reset Your {{app_name}} Password',
                'html_content' => '<h2>Password Reset</h2><p>Hello {{user_name}},</p><p>You are receiving this email because we received a password reset request for your account.</p><p><a href="{{reset_url}}">Reset Password</a></p>',
                'text_content' => 'Hello {{user_name}},\n\nYou are receiving this email because we received a password reset request for your account.\n\nPlease click the following link to reset your password:\n{{reset_url}}\n\nIf you did not request a password reset, no further action is required.\n\nBest regards,\n{{app_name}} Team',
            ],
            self::TYPE_WELCOME => [
                'name' => 'Default Welcome Message',
                'subject' => 'Welcome to {{app_name}}!',
                'html_content' => '<h2>Welcome!</h2><p>Hello {{user_name}},</p><p>Welcome to {{app_name}}! We\'re excited to have you on board.</p><p><a href="{{app_url}}">Visit Dashboard</a></p>',
                'text_content' => 'Hello {{user_name}},\n\nWelcome to {{app_name}}! We\'re excited to have you on board.\n\nYou can access your dashboard at: {{app_url}}\n\nIf you have any questions, please don\'t hesitate to contact us.\n\nBest regards,\n{{app_name}} Team',
            ],
            self::TYPE_NOTIFICATION => [
                'name' => 'Default Notification',
                'subject' => 'New Notification from {{app_name}}',
                'html_content' => '<h2>{{notification_title}}</h2><p>Hello {{user_name}},</p><p>You have a new notification:</p><div>{{notification_content}}</div>',
                'text_content' => 'Hello {{user_name}},\n\nYou have a new notification:\n\n{{notification_title}}\n{{notification_content}}\n\nYou can view all your notifications at: {{app_url}}/notifications\n\nBest regards,\n{{app_name}} Team',
            ],
            self::TYPE_GENERAL => [
                'name' => 'Default General Template',
                'subject' => 'Message from {{app_name}}',
                'html_content' => '<p>Hello {{user_name}},</p><p>{{message}}</p><p>Best regards,<br>{{app_name}} Team</p>',
                'text_content' => 'Hello {{user_name}},\n\n{{message}}\n\nBest regards,\n{{app_name}} Team',
            ],
        ];

        $template = $templates[$type] ?? $templates[self::TYPE_GENERAL];

        return static::create([
            'name' => $template['name'],
            'subject' => $template['subject'],
            'html_content' => $template['html_content'],
            'text_content' => $template['text_content'],
            'type' => $type,
            'created_by_user_id' => $createdByUserId,
        ]);
    }

    /**
     * Get placeholders used in the template.
     *
     * @return array
     */
    public function getPlaceholders(): array
    {
        $content = $this->subject . ' ' . $this->html_content . ' ' . ($this->text_content ?? '');
        preg_match_all('/\{\{([^}]+)\}\}/', $content, $matches);
        
        return array_unique($matches[1]);
    }

    /**
     * Validate if all required placeholders are provided.
     *
     * @param array $variables
     * @return array Missing placeholders
     */
    public function validatePlaceholders(array $variables): array
    {
        $placeholders = $this->getPlaceholders();
        $missing = [];

        foreach ($placeholders as $placeholder) {
            $key = '{{' . $placeholder . '}}';
            if (!array_key_exists($key, $variables)) {
                $missing[] = $placeholder;
            }
        }

        return $missing;
    }

    /**
     * Get statistics for email templates.
     *
     * @return array
     */
    public static function getStatistics(): array
    {
        $total = static::count();
        $byType = static::selectRaw('type, COUNT(*) as count')
            ->groupBy('type')
            ->pluck('count', 'type')
            ->toArray();

        return [
            'total' => $total,
            'by_type' => $byType,
        ];
    }

    /**
     * Extract placeholders from content.
     *
     * @param string $content
     * @return array
     */
    public static function extractPlaceholders(string $content): array
    {
        preg_match_all('/\{\{([^}]+)\}\}/', $content, $matches);
        return array_unique($matches[1]);
    }

    /**
     * Compile template with data.
     *
     * This method replaces placeholders in the given template string with corresponding values
     * from the provided data array. Placeholders are expected to be in the format {{key}}.
     * If a placeholder in the template does not have a corresponding key in the data array,
     * it will remain unchanged in the resulting string.
     *
     * Example:
     * Template: "Hello {{name}}, welcome to {{app_name}}!"
     * Data: ['name' => 'John', 'app_name' => 'Analytics Hub']
     * Result: "Hello John, welcome to Analytics Hub!"
     *
     * @param string $template The template string containing placeholders.
     * @param array $data An associative array where keys correspond to placeholders in the template.
     * @return string The compiled template with placeholders replaced by their corresponding values.
     */
    public function compileTemplate(string $template, array $data): string
    {
        foreach ($data as $key => $value) {
            $placeholder = '{{' . $key . '}}';
            $template = str_replace($placeholder, $value, $template);
        }
        
        return $template;
    }
}
