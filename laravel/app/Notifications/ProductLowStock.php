<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use App\Models\Stock;
use App\Models\Product;

class ProductLowStock extends Notification
{
    use Queueable;
    protected $Stock;

    /**
     * Create a new notification instance.
     */
    public function __construct(Stock $Stock)
    {
        $this->stock = $Stock;
        $this->product = Product::where('id',$this->stock->product_id)->first();
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
                    ->subject('Alert: product low stock')
                    ->line('The product "' . $this->product->name . '" has reached its minimum stock.')
                    ->line('Current stock: ' . $this->stock->quantity_available)
                    ->action('See Product', url('/stock/' . $this->stock->id))
                    ->line('Please place an order to replenish stock.');
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
