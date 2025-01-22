<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ResetPasswordNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public $token;


    public function __construct($token)
    {
       $this->token = $token;
  
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        
        //$url = config('app.frontend_url') . '/reset-password?token=' . $this->token;

      

        $resetUrl = config('app.frontend_url') . '/reset-password?token=' . $this->token . '&email=' . $notifiable->getEmailForPasswordReset();


        return (new MailMessage)
                    ->subject('Reset Password')
                    ->line('Click the button below to reset your password.')
                    ->action('Reset Password', $resetUrl)
                    ->line('If you did not request a password reset, no further action is required.');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
