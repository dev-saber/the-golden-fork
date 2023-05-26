<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Confirm Reservation</title>
</head>

<body>
    <h1>Dear {{ $data->name }}</h1>
    <p>
        We have just received your wished request of booking a reservation at The Golden Fork Restaurant, please
        confirm its information:
    </p>
    <ul>
        <li>Reservation Date : {{ $data->reservation_date }} </li>
        <li>Reservation Time : {{ $data->reservation_time }} </li>
        <li>Number of People : {{ $data->number_of_people }}</li>
    </ul>

    <form action={{ route('reserve') }} method="post">
        @csrf
        <input type="hidden" name="name" value={{ $data->name }}>
        <input type="hidden" name="email" value={{ $data->email }}>
        <input type="hidden" name="is_gmail" value={{ $data->is_gmail }}>
        <input type="hidden" name="reservation_date" value={{ $data->reservation_date }}>
        <input type="hidden" name="reservation_time" value={{ $data->reservation_time }}>
        <input type="hidden" name="number_of_people" value={{ $data->number_of_people }}>

        <button>Confirm My Reservation</button>
    </form>
</body>

</html>
