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
</body>

</html>
