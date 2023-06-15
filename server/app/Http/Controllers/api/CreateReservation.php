<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Mail\ConfirmReservation;
use App\Models\Customer;
use App\Models\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class CreateReservation extends Controller
{

    public function store(Request $request)
    {
        $customer = Customer::where('email', $request->email)->first();

        if ($customer && true) {
            $newReservation = Reservation::create([
                'reservation_date' => $request->reservation_date,
                'reservation_time' => $request->reservation_time,
                'number_of_people' => $request->number_of_people,
                'customer_id' => $customer->id
            ]);
        } else {
            $customer = Customer::create([
                'name' => $request->name,
                'email' => $request->email
            ]);

            $newReservation = Reservation::create([
                'reservation_date' => $request->reservation_date,
                'reservation_time' => $request->reservation_time,
                'number_of_people' => $request->number_of_people,
                'customer_id' => $customer->id
            ]);
        }

        $data = [
            'id' => $newReservation->id,
            'name' => $customer->name,
            'reservation_date' => $newReservation->reservation_date,
            'reservation_time' => $newReservation->reservation_time,
            'number_of_people' => $newReservation->number_of_people,
        ];

        Mail::to($request->email)->send(new ConfirmReservation($data));

        return response([
            'message' => 'Your reservation is pending, please confirm it from the mail sent to your email address.',
        ], 202);
    }

    public function confirm(Request $request)
    {
        $reservation = Reservation::find($request->id);

        if ($reservation->is_confirmed === 0) {
            $reservation->is_confirmed = 1;
            $reservation->save();
        }
        
        return response()->view('emails.reservationSuccess', ['message' => 'success'], 200);
    }
}
