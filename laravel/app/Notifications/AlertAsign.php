<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use App\Models\Equipment;


class AlertAsign extends Notification
{
    use Queueable;
    protected $Equipment;

    /**
     * Create a new notification instance.
     */
    public function __construct(Equipment $Equipment)
    {
        $this->equipment = $Equipment;
      
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
        return (new MailMessage)
                ->subject('Alert: Assigned team')
                ->line('The equipment "' . $this->equipment->name . '" you have been assigned.')
                ->line('Please review the assigned teams from the dashboard');
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
