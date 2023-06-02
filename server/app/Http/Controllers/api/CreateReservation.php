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

    public function confirm(Request $request)
    {
        Mail::to($request->email)->send(new ConfirmReservation($request));

        return response([
            'message' => 'Your reservation is pending, please confirm it from the mail sent to your email address.',
        ], 202);
    }

    public function reserve(Request $request)
    {
        $old_custommer = Customer::where('email', $request->email)->first();

        if ($old_custommer && true) {
            Reservation::create([
                'reservation_date' => fake()->date(),
                'reservation_time' => fake()->dateTime(),
                'number_of_people' => $request->number_of_people,
                'customer_id' => $old_custommer->id
            ]);
        } else {
            $newCustomer = Customer::create([
                'name' => $request->name,
                'email' => $request->email,
                'is_gmail' => $request->is_gmail === "1" ? true : false
            ]);

            Reservation::create([
                'reservation_date' => fake()->date(),
                'reservation_time' => fake()->dateTime(),
                'number_of_people' => $request->number_of_people,
                'customer_id' => $newCustomer->id
            ]);
        }

        return response()->view('emails.reservationSuccess', ['message' => 'success'], 200);
    }
}
